import { Close } from "@assets";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import useBlogPreview from "./useBlogPreview";
import Modal from "../Modal";
import React, { useState } from "react";

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
    <>
      <Modal show={true} onClose={onClose}>
        <div className="flex w-full gap-4 flex-wrap py-8 justify-around">
          <div className="flex flex-col mb-5">
            <h2 className="text-lg font-bold mb-4">Story Preview</h2>
            <div className="w-7/10 h-72 bg-gray-200 flex items-center justify-center mb-4">
              <img
                src={imageSrc}
                alt="Include a high-quality image in your story to make it more inviting to readers."
                className="max-w-full max-h-full object-cover"
              />
            </div>
            <input
              className="block w-full mb-4 text-gray-600"
              type="file"
              name="image"
              onChange={handleImageChange}
            />
            <input
              className="w-11/12 mb-2 border-none font-bold text-lg"
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Your Story Heading"
            />
            <input
              className="w-11/12 mb-4 border-none text-sm"
              type="text"
              value={formData.subtitle}
              onChange={(e) =>
                setFormData({ ...formData, subtitle: e.target.value })
              }
              placeholder="Write a preview subtitle.."
            />
            <p className="w-11/12 text-xs text-gray-600">
              Note: Changes here will affect how your story appears in public
              places like Medium’s homepage and in subscribers’ inboxes — not
              the contents of the story itself.
            </p>
          </div>

          <div className="flex flex-col font-sans">
            <h5 className="text-lg font-bold mb-2">Publishing to: Aswin</h5>
            <p className="text-sm text-gray-700 mb-2">
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
            <p className="text-sm text-gray-700 mb-4">
              Learn more about what happens to your post when you publish.
            </p>
            <button
              onClick={onSubmit}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500"
            >
              Publish Now
            </button>
          </div>
        </div>
      </Modal>

      {/* <div className="fixed flex rounded-lg justify-center items-center bg-white z-50 animate-fade-in m-2">
      <div className="absolute top-10 right-10 cursor-pointer" onClick={onClose}>
        <img className="w-5 h-5" src={Close} alt="Close" />
      </div>
      <div className="flex w-full p-8 rounded-lg shadow-lg justify-around">
        <div className="flex flex-col w-1/2 mb-5">
          <h2 className="text-lg font-bold mb-4">Story Preview</h2>
          <div className="w-7/10 h-72 bg-gray-200 flex items-center justify-center mb-4">
            <img
              src={imageSrc}
              alt="Include a high-quality image in your story to make it more inviting to readers."
              className="max-w-full max-h-full object-cover"
            />
          </div>
          <input
            className="block w-full mb-4 text-gray-600"
            type="file"
            name="image"
            onChange={handleImageChange}
          />
          <input
            className="w-11/12 mb-2 border-none font-bold text-lg"
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Your Story Heading"
          />
          <input
            className="w-11/12 mb-4 border-none text-sm"
            type="text"
            value={formData.subtitle}
            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            placeholder="Write a preview subtitle.."
          />
          <p className="w-11/12 text-xs text-gray-600">
            Note: Changes here will affect how your story appears in public
            places like Medium’s homepage and in subscribers’ inboxes — not the
            contents of the story itself.
          </p>
        </div>

        <div className="flex flex-col font-sans">
          <h5 className="text-lg font-bold mb-2">Publishing to: Aswin</h5>
          <p className="text-sm text-gray-700 mb-2">
            Add or change topics (up to 5) so readers know what your story is about
          </p>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            onChange={handleChange}
            value={selectedOptions}
            isMulti
            options={topics}
          />
          <p className="text-sm text-gray-700 mb-4">
            Learn more about what happens to your post when you publish.
          </p>
          <button
            onClick={onSubmit}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500"
          >
            Publish Now
          </button>
        </div>
      </div>
    </div>  */}
    </>
  );
};

export default BlogPreview;
