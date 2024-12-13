import React, { useState } from "react";
import { FeaturedArticle, Modal } from "@components";
import { useReadingHistory } from "./useReadingHistory";
import { Button } from "@components/ui";

export default function ReadingHistory() {
  const [togglePopup, setTogglePopup] = useState(false); //for clear confirm popup toggling
  const { articles, loading, clearHistory } = useReadingHistory();

  if (loading) {
    <div>loading...</div>;
  }

  return (
    <div>
      {articles.length > 0 ? (
        <>
          <div className="flex justify-between items-center px-8 py-5 bg-[#f9f9f9] rounded mb-6">
            <span className="text-secondary text-sm">You can clear your reading history for a fresh start.</span>
            <Button
              size="md"
              color="red"
              onClick={() => {
                setTogglePopup(!togglePopup);
              }}
              disabled={loading}
            >
              Clear History
            </Button>
          </div>

          {articles.map((blog) => (
            <FeaturedArticle key={blog.uid} blog={blog} />
          ))}
          <Modal
            show={togglePopup}
            onClose={() => {
              setTogglePopup(!togglePopup); // Close modal when button is clicked or backdrop is clicked
            }}
          >
            <div className="flex flex-col items-center gap-4 p-6 ">
              <div className="flex flex-col gap-3">
                <h1 className="text-center">Clear reading history</h1>
                <p className="text-sm text-secondary max-w-[500px] m-3 text-center">
                  The stories that are cleared will no longer influence the
                  recommendations that you receive in your feed or email digest
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="md"
                  color="black"
                  variant="outlined"
                  className="outline_button"
                  onClick={() => {
                    setTogglePopup(!togglePopup); //closing the modal
                  }}
                >
                  Cancel
                </Button>
                <Button
                  size="md"
                  color="red"
                  variant="filled"
                  onClick={() => {
                    setTogglePopup(!togglePopup); //closing the modal
                    clearHistory(); //clear the history
                  }}
                >
                  Confirm and Clear
                </Button>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <div className="flex flex-col gap-1 mt-6 text-center">
          <h4 className="text-md font-semibold">You haven’t read any stories yet</h4>
          <p className="text-sm text-secondary">
            Stories you’ve read on Medium will appear here.
          </p>
        </div>
      )}
    </div>
  );
}
