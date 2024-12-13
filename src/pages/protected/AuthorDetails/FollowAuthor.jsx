import React, { useState ,useEffect} from "react";
import { api } from "@services/api";
import { Button } from "@components/ui";

function FollowAuthor({user_id}) {
  const [isFollowing, setIsFollowing] = useState(null);
  const followStatus = async () => {
    try {
      const response = await api.get(`/home/authors/${user_id}/is_following/`);
      setIsFollowing(response.data.is_following)
    } catch (error) {
      console.error("There was an error fetching the blogs!", error);
    }
  };

  useEffect(() => {
    followStatus();
  }, []);

  const handleFollow = async () => {
    try {
      const response = await api.post(`accounts/${user_id}/follow/`);
      if (response.status == 201) {
        setIsFollowing(true);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
      console.error("error while following!", error);
    }
  };

  const handleUnFollow = async () => {
    try {
      const response = await api.delete(`accounts/${user_id}/unfollow/`);
      if (response.status == 204) {
        setIsFollowing(false);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
      console.error("error while following!", error.response.data.error);
    }
  };

  return (
    <>
        {isFollowing ? (
          <Button
            size="md"
            color="green"
            variant="outlined"
            onClick={handleUnFollow}
          >
            Following
          </Button>
        ) : (
          <Button
          size="md"
          color="green"
          variant="filled"
          onClick={handleFollow}
        >
          Follow
        </Button>
        )} 
    </>
  );
}

export default FollowAuthor;
