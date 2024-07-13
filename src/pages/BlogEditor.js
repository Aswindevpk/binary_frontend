// Importing helper modules
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

// Importing core components
import QuillEditor from "react-quill";
import axios from "axios";
import AuthContext from '../context/AuthContext';

// Importing styles
import "react-quill/dist/quill.snow.css";
import "./BlogEditor.css"

const Editor = () => {
  let { user, authTokens } = useContext(AuthContext);
  const [values, setValues] = useState({
    BlogId: null,
    title: "",
    content: "",
    category: null,
    author_id: user.username
  });

  // to track change in content and title
  const [prevContent, setPrevContent] = useState("");
  const [prevTitle, setPrevTitle] = useState("");
  //indicate saving process
  const [isSaving, setIsSaving] = useState(false);

  //keep track of title to the typed value
  const handleTitleChange = (event) => {
    setValues({ ...values, title: event.target.value });
  };

  // Editor ref
  const quill = useRef();


  useEffect(() => {
    //update server if any change in the blog
    const saveContent = async () => {
      setIsSaving(true)
      try {
        if (values.BlogId) {
          try {
            let response = await axios.patch(`http://localhost:8000/api/home/blog/${values.BlogId}/`, values, {
              headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + String(authTokens.access)
              },
            });
            console.log(response)
          } catch (error) {
            console.error('error while updating blog!', error);
          }

        }
        else {
          try {
            const response = await axios.post("http://localhost:8000/api/home/blog/", values, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            let BlogId = response.data.BlogId;
            setValues({ ...values, BlogId: BlogId })

          } catch (error) {
            console.error('error while updating blog!', error);
          }
        }
        setPrevContent(values.content);
        setPrevTitle(values.title);
        setIsSaving(false);
      } catch (error) {
        setIsSaving(false);
        console.error("Error saving content:", error);
      }
    }
    if (values.content !== prevContent || values.title !== prevTitle) {
      const timeoutId = setTimeout(() => {
        saveContent();
      }, 1000);
      return () => clearTimeout(timeoutId)
    }
    console.log(values)
  }, [values, prevContent, prevTitle, authTokens])


  //if any image is selected it is uploaded to the server and shown in the content area
  const imageHandler = useCallback(() => {
    // Create an input element of type 'file'
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // When a file is selected
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await axios.post("http://localhost:8000/api/home/upload/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const imageUrl = response.data.imageUrl;

        const quillEditor = quill.current.getEditor();
        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
  }, []);


  //configuration of quills rich editor
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
  ];

  const publishBlog = () => {
    console.log("published")
  }

  return (
    <div className="Editor">
      <div className="Editor_header">
        <p className="Editor_header-save">{isSaving ? "Saving..." : "Draft"}</p>
        <div className="Editor_header-publish" onClick={publishBlog}>Publish</div>
      </div>
      <div className="Editor_content">
        <input
          className="Editor_content-title"
          type="text"
          placeholder="Title"
          value={values.title}
          onChange={handleTitleChange}></input>
        <QuillEditor className="Editor_content-body"
          ref={(el) => (quill.current = el)}
          theme="snow"
          value={values.content}
          formats={formats}
          modules={modules}
          onChange={(value) => setValues({ ...values, content: value })}
          placeholder="Tell your Story..."
        />
      </div>
    </div>
  );
};

export default Editor;