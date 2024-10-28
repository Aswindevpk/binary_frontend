import { useState, useEffect } from "react";
import { api } from "services/api";

const useComments = (article_id) => {
  const [comments, setComments] = useState([]);
  const [submitCount, setSubmitCount] = useState(0); // To trigger re-fetching comments after submitting

  const fetchComments = async () => {
    try {
      let response = await api.get(`/home/article/${article_id}/comments/`);
      if (response.status === 200) {
        setComments(response.data);
      }
    } catch (error) {
      console.log("Error fetching comments", error);
    }
  };

  const submitComment = async (content) => {
    try {
      let response = await api.post(`/home/article/${article_id}/comments/`, {
        content,
      });
      if (response.status === 201) {
        setSubmitCount((prevCount) => prevCount + 1); // Trigger re-fetch
      }
    } catch (error) {
      console.log("Error submitting comment", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [article_id, submitCount]);

  return {
    comments,
    submitComment,
  };
};

export default useComments;
