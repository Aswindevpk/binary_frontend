import { useEffect, useState } from "react";
import { api } from "services/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


function useCreateStory(setStatus) {
  let navigate = useNavigate();
  // Initial form data state
  const initialFormData = {
    title: "",
    subtitle: "",
  };
  const [formData, setFormData] = useState(initialFormData);


  useEffect(() => {
    // Check if formData is different from initial state
    if (JSON.stringify(formData) !== JSON.stringify(initialFormData)) {
      //only create article if the user pause for 2sec while typing
      setStatus("typing");
      const timeoutId = setTimeout(async () => {
        try {
          setStatus("submitting");
          const response = await api.post("/home/articles/", formData);
          toast.success("Story Saved as Draft");
          let BlogId = response.data.uid;
          //redirect to edit story for further editing
          navigate(`/edit-story/${BlogId}`);
        } catch (error) {
          toast.error("Error While Saving !");
        }
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [formData]);

  return {
    formData,
    setFormData,
  };
}

export default useCreateStory;
