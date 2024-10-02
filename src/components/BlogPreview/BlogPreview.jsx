import "./BlogPreview.css";
import { Close } from "../../assets";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useEffect, useState } from "react";
import { formApi, api } from "../../services/api";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

const BlogPreview = ({ onClose, values, setValues }) => {
  //for select
  const animatedComponents = makeAnimated();
  const [topics, setTopics] = useState([]);
  let [selectedOptions, setSelectedOptions] = useState([]);
  const [imageSrc, setImageSrc] = useState(null); // State to store the image src
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await api.get("/home/topics/");
        const fetchedTags = response.data.data;
        setTopics(
          fetchedTags.map((topic) => ({
            value: topic.uid,
            label: topic.name,
          }))
        );
      } catch (error) {
        console.error("There was an error fetching the tags!", error);
      }
    };
    fetchTopics();
  }, []);

  const handleChange = (selected) => {
    if (selected.length <= 5) {
      setSelectedOptions(selected);
    } else {
      alert("You can only select up to 5 options");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result); 
      };

      reader.readAsDataURL(file); 
    }
    setValues({ ...values, image: e.target.files[0] });
  };

  const changeTitle = (event) => {
    setValues({ ...values, title: event.target.value });
  };

  const changeSubtitle = (event) => {
    setValues({ ...values, subtitle: event.target.value });
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("image", values.image);
    formData.append("title", values.title);
    formData.append("subtitle", values.subtitle);
    formData.append("is_published", true);
    // take each id in an array
    const topicValues = selectedOptions.map((topic) => topic.value);
    formData.append("topics", topicValues);

    try {
      const response = await formApi.patch(
        `/home/article/${values.BlogId}/`,
        formData
      );
      if (response.status === 200) {
        toast.success("Blog published.");
        navigate(`/blog/${response.data.id}/`);
      }
    } catch (error) {
      console.error("Error sumitting:", error);
    }
  };

  return (
    <div className="popup-overlay">
      <Toaster richColors position="top-center" />
      <div className="popup-close">
        <img
          className="popus-close__img"
          src={Close}
          alt=""
          onClick={onClose}
        />
      </div>
      <div className="BlogPreview">
        <div className="BlogPreview-content">
          <h2 className="BlogPreview-content__header">Story Preview</h2>
          <div className="BlogPreview-content__img">
            <img
              src={imageSrc}
              alt="Include a high-quality image in your story to make it more inviting to readers."
            /> 
          </div>
          <input
            className="BlogPreview-content__imginput"
            type="file"
            name="image"
            onChange={handleImageChange}
          />
          <input
            className="BlogPreview-content__heading"
            type="text"
            value={values.title}
            onChange={changeTitle}
            placeholder="Your Story Heading"
          />
          <input
            className="BlogPreview-content__subtitle"
            type="text"
            value={values.subtitle}
            onChange={changeSubtitle}
            placeholder="write a preview subtitle.."
          />
          <p className="BlogPreview-content__note">
            Note: Changes here will affect how your story appears in public
            places like Medium’s homepage and in subscribers’ inboxes — not the
            contents of the story itself.
          </p>
        </div>
        <div className="BlogPreview-others">
          <h5 className="BlogPreview-others__header">Publishing to :Aswin</h5>
          <p className="BlogPreview-others__para">
            Add or change topics (up to 5) so readers know what your story is
            about
          </p>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            onChange={handleChange}
            value={selectedOptions}
            isMulti
            options={topics}
          />
          <p className="BlogPreview-others__para">
            Learn more about what happens to your post when you publish.
          </p>
          <button onClick={onSubmit}>Publish Now</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
