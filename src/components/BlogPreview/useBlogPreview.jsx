import { useState, useEffect } from "react";
import { formApi, api } from "@services/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const useBlogPreview = (formData, setFormData, id) => {
  const [topics, setTopics] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [imageSrc, setImageSrc] = useState(formData.image); // setting already existing image
  const navigate = useNavigate(); // Fetch available topics and set the selected ones

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await api.get("/home/topics/");
        const fetchedTopics = response.data.map((topic) => ({
          value: topic.uid,
          label: topic.name,
        })); // Filter topics based on formData's selected topics

        const selectedIds = formData.topics || [];
        const selectedTopics = fetchedTopics.filter((option) =>
          selectedIds.includes(option.value)
        );

        setTopics(fetchedTopics);
        setSelectedOptions(selectedTopics); // Preselect the user's topics
      } catch (error) {
        toast.error("Error fetching topics");
      }
    };

    fetchTopics();
  }, [formData.topics]);

  const handleChange = (selected) => {
    if (selected.length <= 5) {
      setSelectedOptions(selected);
    } else {
      alert("You can only select up to 5 options");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const onSubmit = async () => {
    const formValues = new FormData();

    for (const key in formData) {
      if (key === "is_published") {
        formValues.append(key, true);
      } else if (key === "topics") {
        // append each topic id individually
        selectedOptions.forEach((id) => formValues.append("topics", id.value));
      } else {
        formValues.append(key, formData[key]);
      }
    }

    try {
      const response = await formApi.patch(
        `/home/article-edit/${id}/`,
        formValues
      );
      if (response.status === 200) {
        toast.success("Blog published.");
        navigate(`/blog/${response.data.uid}/`);
      }
    } catch (error) {
      toast.error("Failed to publish");
    }
  };

  return {
    topics,
    selectedOptions,
    imageSrc,
    handleChange,
    handleImageChange,
    onSubmit,
  };
};

export default useBlogPreview;
