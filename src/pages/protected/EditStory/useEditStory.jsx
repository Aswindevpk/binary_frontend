import { useEffect, useState, useRef } from "react";
import { api } from "@services/api";
import { toast } from "sonner";

function useEditStory(setStatus, id) {
  let updatedForm = useRef(null);
  const [formData, setFormData] = useState(null);

  //showing the popup
  const [showPopup, setShowPopup] = useState(false);

  // fetching existing data
  useEffect(() => {
    async function fetchArticle(id) {
      try {
        const response = await api.get(`/home/article-edit/${id}`);
        if (response.status === 200) {
          setFormData(response.data);
          //making a copy of updated data for future process
          updatedForm.current = response.data;
          setStatus("typing");
        }
      } catch (error) {
        toast.error("an Error occured!");
      }
    }
    fetchArticle(id);
  }, [id]);

  //update data
  useEffect(() => {
    // Check if formData is different from initial state and showpopup is not triggered
    if (JSON.stringify(formData) !== JSON.stringify(updatedForm.current) && showPopup === false) {
      //only create article if the user pause for 2sec while typing
      setStatus("typing");
      const timeoutId = setTimeout(async () => {
        try {
          //destructuring and removing image and topic while updating
          let { topics, image, ...values } = formData;
          const response = await api.patch(
            `/home/article-edit/${formData.uid}/`,
            values
          );
          if (response.status === 200) {
            toast.success("draft saved");
            setFormData({ ...formData, ...response.data });
            updatedForm.current = response.data;
          }
        } catch (error) {
          console.log(error);
          toast.error("error occured");
        }
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [formData]);

  return {
    formData,
    showPopup,
    setFormData,
    setShowPopup
  };
}

export default useEditStory;
