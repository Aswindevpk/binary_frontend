import React, { useEffect, useState } from "react";
import "./ReadingListInput.css";
import { api } from "services/api";
import { toast } from "sonner";


function ReadingListInput({id}) {
  const [note, setNote] = useState(null);
  const [isActive, setIsActive] = useState(false);
  let [loading, setLoading] = useState(true);

  const fetchNote = async () => {
    try {
      const response = await api.get(`/home/bookmark/${id}/`);
      setNote(response.data.note);
      setLoading(false);
    } catch (error) {
      toast.error("error")
    }
  };

  useEffect(() => {
    fetchNote();
  }, []);


  if (loading) {
    return <div>loading..</div>;
  }

  
  const handleNoteUpdate = async () => {
    try {
      setLoading(true)
      const response = await api.patch(`/home/bookmark/${id}/`,{note:note});
      //set new data
      setNote(response.data.note);
      setLoading(false);
    } catch (error) {
      toast.error("error")
    }
  };


  return (
    <form
      className={`reading-list-input ${
        note && "reading-list-input--active"
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
          setNote(e.target.value);
        }}
      />
      {isActive && (
        <div className="reading-list-input__actions">
          <input
            type="button"
            className="reading-list-input__cancel-button"
            onClick={()=>{
                setIsActive(false)
            }}
            value="cancel"
          />
          <input
            className="reading-list-input__submit-button"
            type="submit"
            value="Done"
            onClick={()=>{
              handleNoteUpdate();
              setIsActive(false)
            }}
          />
        </div>
      )}
    </form>
  );
}

export default ReadingListInput;
