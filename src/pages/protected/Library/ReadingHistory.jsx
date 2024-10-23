import React, { useState } from "react";
import { FeaturedArticle, Modal } from "components";
import { useReadingHistory } from "./useReadingHistory";

export default function ReadingHistory() {
  const [togglePopup, setTogglePopup] = useState(false);  //for clear confirm popup toggling
  const { articles, loading, clearHistory } = useReadingHistory();

  if (loading) {
    <div>loading...</div>;
  }

  return (
    <div className="library_history">
      {articles.length > 0 ? (
        <>
          <div className="library_history_top">
            <span>You can clear your reading history for a fresh start.</span>
            <button
              disabled={loading}
              onClick={() => {
                setTogglePopup(!togglePopup);
              }}
            >
              Clear History
            </button>
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
            <div>
              <div>
                <h1>Clear reading history</h1>
                <p>
                  The stories that are cleared will no longer influence the
                  recommendations that you receive in your feed or email digest
                </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    setTogglePopup(!togglePopup);  //closing the modal
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setTogglePopup(!togglePopup);  //closing the modal
                    clearHistory();  //clear the history
                  }}
                >
                  Confirm and Clear
                </button>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <>
          <h4 className="heading3">You haven’t read any stories yet</h4>
          <p className="para1">
            Stories you’ve read on Medium will appear here.
          </p>
        </>
      )}
    </div>
  );
}
