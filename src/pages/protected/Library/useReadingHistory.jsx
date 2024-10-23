import { useState, useEffect } from "react";
import { api } from "services/api";
import { toast } from "sonner";

// Custom hook to handle fetching and clearing of reading history
export const useReadingHistory = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shouldRefetch, setShouldRefetch] = useState(false); // Clears the reading history of the logged-in user

  const clearHistory = async () => {
    try {
      setLoading(true);
      const response = await api.delete("/home/delete-articles-read/");
      if (response.status === 204) {
        toast.success("Reading history cleared");
        setShouldRefetch(true); // Trigger refetch after clearing
      }
    } catch (error) {
      toast.error("Error clearing reading history");
    } finally {
      setLoading(false);
    }
  }; // Fetches the read articles by the logged-in user

  const fetchReadArticles = async () => {
    try {
      const response = await api.get("/home/articles-read/");
      if (response.status === 200) {
        setArticles(response.data);
      } else {
        toast.error("Failed to fetch articles");
      }
    } catch (error) {
      toast.error("Error occurred while fetching read articles");
    } finally {
      setLoading(false);
    }
  }; // Fetch data on mount or when clearing history

  useEffect(() => {
    if (loading || shouldRefetch) {
      fetchReadArticles();
      setShouldRefetch(false); // Reset refetch flag
    }
  }, [loading, shouldRefetch]);

  return {
    articles,
    loading,
    clearHistory,
  };
};
