import { useState, useEffect } from "react";
import { api } from "services/api";
import { toast } from "sonner";

const useFetchUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await api.get("/accounts/profile/");
      setUser(response.data);
    } catch (error) {
      toast.error("Failed to fetch the user!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading };
};

export default useFetchUser;
