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
    <div className="library-history">
      {articles.length > 0 ? (
        <>
          <div className="library-history__top">
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
            <div className="library-history-modal">
              <div className="library-history-modal__head">
                <h1 className="header2">Clear reading history</h1>
                <p className="para1">
                  The stories that are cleared will no longer influence the
                  recommendations that you receive in your feed or email digest
                </p>
              </div>
              <div className="library-history-modal__cta">
                <button className="outline_button"
                  onClick={() => {
                    setTogglePopup(!togglePopup);  //closing the modal
                  }}
                >
                  Cancel
                </button>
                <button className="red_button"
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
        <div className="library-history__blank">
          <h4 className="heading3">You haven’t read any stories yet</h4>
          <p className="para1">
            Stories you’ve read on Medium will appear here.
          </p>
        </div>
      )}
    </div>
  );
}
