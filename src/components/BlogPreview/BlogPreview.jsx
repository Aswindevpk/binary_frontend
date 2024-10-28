import "./BlogPreview.css";
import { Close } from "../../assets";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Toaster } from "sonner";
import useBlogPreview from "./useBlogPreview";

const BlogPreview = ({ onClose, formData, setFormData, id }) => {
  const animatedComponents = makeAnimated();

  const {
    topics,
    selectedOptions,
    imageSrc,
    handleChange,
    handleImageChange,
    onSubmit,
  } = useBlogPreview(formData, setFormData, id);

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
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
            placeholder="Your Story Heading"
          />
          <input
            className="BlogPreview-content__subtitle"
            type="text"
            value={formData.subtitle}
            onChange={(e) =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
            placeholder="Write a preview subtitle.."
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
