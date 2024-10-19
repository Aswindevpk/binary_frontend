import React, {useState, useEffect} from "react";
import { FilterMenu, ProfileList } from "components";
import ReadingHistory from "./ReadingHistory";
import SaveLists from "./SaveLists";
import { api } from "services/api";


const filters = [
  { name: "Your Lists", uid: "1" },
  { name: "Saved Lists", uid: "2" },
  { name: "Highlights", uid: "3" },
  { name: "Reading History", uid: "4" },
];

const LibraryMain = () => {
  const [activeFilter, setActiveFilter] = useState({
    name: "Your Lists",
    uid: "1",
  });
  let [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await api.get("/home/profile/");
      const fetchedUser = response.data;
      setUser(fetchedUser);
    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }


  return (
    <>
      <h2 className="main__header">Library</h2>
      <FilterMenu
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      {activeFilter && activeFilter.uid === "4" && <ReadingHistory />}
      {activeFilter && activeFilter.uid === "2" && <SaveLists />}
      {activeFilter && activeFilter.uid === "1" && <ProfileList user={user} />}
    </>
  );
};

export default LibraryMain;
