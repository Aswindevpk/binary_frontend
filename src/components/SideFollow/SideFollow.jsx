import React, { useState, useEffect } from "react";
import { api } from "@services/api";
import FollowUser from "../followUser";
import { SideSkeleton } from "@components/layouts";
import { Link } from "react-router-dom";

const SideFollow = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await api.get("/home/authors/");
        const fetchedUsers = response.data;
        setAuthors(fetchedUsers);
      } catch (error) {
        console.error("There was an error fetching the users!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  if (loading) {
    return (
      <>
        <SideSkeleton />
      </>
    );
  }

  return (
    <div className="mb-6">
      <h3 className="mb-4 font-extrabold">Who to Follow</h3>
      <div className="flex flex-col gap-1">
        {authors.map((author) => (
          <FollowUser key={author.id} author={author} />
        ))}
      </div>
      <Link className="text-sm text-success" href="">
        See more suggestions
      </Link>
    </div>
  );
};

export default SideFollow;
