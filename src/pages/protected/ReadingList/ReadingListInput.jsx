import React, { useState } from "react";
import "./ReadingListInput.css";

function ReadingListInput({blogNote}) {
  const [note, setNote] = useState(blogNote);
  const [isActive, setIsActive] = useState(false);

  return (
    <form
      className={`reading-list-input ${
        blogNote && "reading-list-input--active"
      }`}
    >
      <input
        className="reading-list-input__note modal-input"
        type="text"
        placeholder="Add a note..."
        value={note}
        name="note"
        onFocus={() => setIsActive(true)}
        onChange={(e) => {
          setNote(e.value);
        }}
      />
      {isActive && (
        <div className="reading-list-input__actions">
          <input
            type="button"
            className="reading-list-input__cancel-button"
            onClick={()=>{
                setIsActive(false)
                setNote(blogNote)
            }}
            value="cancel"
          />
          <input
            className="reading-list-input__submit-button"
            type="submit"
            value="Done"
          />
        </div>
      )}
    </form>
  );
}

export default ReadingListInput;
