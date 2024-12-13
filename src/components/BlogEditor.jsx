// Importing helper modules
import { useCallback, useMemo, useRef } from "react";
// import "./BlogEditor.css";
import { formApi } from "@services/api";
// Importing core components
import QuillEditor from "react-quill";
//quill editor styles
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";


const BlogEditor = ({ setFormData, formData }) => {
  // Editor ref
  const quill = useRef(null);

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
        const response = await formApi.post("home/upload/",formData);
        const imageUrl = response.data.imageUrl;
        const quillEditor = quill.current.getEditor();
        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
      } catch (error) {
        toast.error("Error while uploading image")
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

  const handleChange = () => {
    if (quill.current) {
      const editor = quill.current.getEditor();
      const html = editor.root.innerHTML;
      setFormData({ ...formData, content: html });
    }
  };

  return (
    <div className="h-[80vh] mb-10">
      <QuillEditor
        className="border-none h-full pb-20"
        ref={quill}
        theme="snow"
        value={formData.content}
        formats={formats}
        modules={modules}
        onChange={handleChange}
        placeholder="Tell your Story..."
      />
    </div>
  );
};

export default BlogEditor;
