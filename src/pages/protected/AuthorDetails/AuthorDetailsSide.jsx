import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "@components/layouts";
import ListItem from "./ListItem";
import { Avatar } from "@components";
import { Button } from "@components/ui";
import FollowAuthor from "./FollowAuthor";

const AuthorDetailsSide = ({ author }) => {
  return (
    <>
      <aside className="flex flex-col gap-8 mb-8">
        <section className="flex flex-col">
          <Avatar
            username={author.username}
            image_url={author.img}
            size={"xlarge"}
          />
          <h1 className="mt-4 text-xl font-bold">{author.username}</h1>
          <p className="text-sm mt-1 text-secondary">12.9K Followers</p>
          <span className="text-sm mt-2 text-secondary">{author.about}</span>
          <div className="mt-4">
            <FollowAuthor user_id={author.id}/>
            {/* <Button href="">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="white"
                className="icons"
              />
            </Button> */}
          </div>
        </section>

        <section>
          {/* <h1 className="mb-4 font-semibold">Lists</h1>
          <div className="flex flex-col gap-3">
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
          <p className="text-sm text-success mt-4">View All</p> */}
        </section>
      </aside>
      <Footer />
    </>
  );
};

export default AuthorDetailsSide;
