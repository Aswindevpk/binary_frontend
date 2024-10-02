// Importing helper modules
import { useContext, useEffect, useState } from "react";
import AuthContext from '../../context/AuthContext';
// Importing styles
import "react-quill/dist/quill.snow.css";
import "./WriteBlog.css"
import { BlogEditor,BlogPreview } from "../../components";
import { api } from "../../services/api";


const WriteBlog = () => {
  let { authTokens } = useContext(AuthContext);
  const [values, setValues] = useState({
    BlogId: null,
    title: "",
    subtitle:"",
    content: "",
    topic: null,
    image:null,
  });

  const [showPopup, setShowPopup] = useState(false);

  const handlePublishClick = () => {
      setShowPopup(true);
  };

  const handleClosePopup = () => {
      setShowPopup(false);
  };

  // to track change in content and title
  const [prevContent, setPrevContent] = useState("");
  const [prevTitle, setPrevTitle] = useState("");
  //indicate saving process
  const [isSaving, setIsSaving] = useState(false);

  //keep track of title to the typed value
  const handleTitleChange = (event) => {
    setValues({ ...values, title: event.target.value });
  };


  useEffect(() => {
    //update server if any change in the blog
    const saveContent = async () => {
      setIsSaving(true)
      try {
        if (values.BlogId) {
          try {
            const response = await api.patch(`/home/article/${values.BlogId}/`, values);
          } catch (error) {
            console.error('error while updating blog!', error);
          }

        }
        else {
          try {
            const response = await api.post("/home/articles/", values);
            let BlogId = response.data.id;
            setValues({ ...values, BlogId: BlogId })

          } catch (error) {
            console.error('error creating blog!', error);
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
      }, 2000);
      return () => clearTimeout(timeoutId)
    }
  }, [values, prevContent, prevTitle,authTokens])

  return (
    <div className="Editor">
      <div className="Editor_header">
        <p className="Editor_header-save">{isSaving ? "Saving..." : "Draft"}</p>
        {values.BlogId && <div className="Editor_header-publish" onClick={handlePublishClick}>Publish</div>}
        {showPopup && <BlogPreview onClose={handleClosePopup} values={values} setValues={setValues} />}
      </div>
      <div className="Editor_content">
        <input
          className="Editor_content-title"
          type="text"
          placeholder="Title"
          value={values.title}
          onChange={handleTitleChange}
        ></input>
        <BlogEditor setValues={setValues} values={values}/>
      </div>
    </div>
  );
};

export default WriteBlog;
