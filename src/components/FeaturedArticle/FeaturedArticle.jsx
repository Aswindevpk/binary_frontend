import { Link } from "react-router-dom";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProfileOverlay from "./ProfileOverlay";
import { ActionDropDown, Avatar } from "@components";
import { Bookmark, Clap, Comment, Mute } from "@components/ui";

const FeaturedArticle = ({ blog }) => {
  const formattedDate = format(new Date(blog.created_at), "MMM d");

  return (
    <div className="flex flex-row pb-6 my-6 border-b border-gray-200 font-[var(--font-family)] justify-between items-center gap-5">
      <div className="flex flex-col w-3/5">
        <Link
          className="flex gap-2 items-center mb-1"
          to={`/author/${blog.author.id}`}
        >
          <Avatar
            username={blog.author?.username}
            image_url={blog.author?.img}
            size={"small"}
          />
          <span className="text-sm">{blog.author.username}</span>
        </Link>
        <Link to={`/blog/${blog.uid}/`} className="flex flex-col">
          <h2
            className="flex text-2xl font-extrabold leading-7 text-primary cursor-pointer overflow-hidden break-words"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3, // Adjust the number of lines to clamp
              WebkitBoxOrient: "vertical",
            }}
          >
            {blog.title}
          </h2>
          <p
            className="pt-2 text-base font-normal text-secondary cursor-pointer overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2, // Adjust the number of lines to clamp
              WebkitBoxOrient: "vertical",
            }}
            dangerouslySetInnerHTML={{ __html: blog.summary }}
          ></p>
        </Link>
        <div className="flex justify-between pt-5">
          <div className="flex items-center gap-1.5 sm:gap-3 text-xs text-secondary cursor-pointer">
            {blog.is_premium && (
              <FontAwesomeIcon
                icon={faStar}
                size="xs"
                color="rgb(255, 192, 23)"
              />
            )}
            <span className="ml-1">{formattedDate}</span>
            <Clap claps={blog.clap_count} />
            <Comment comments={blog.comment_count} />
          </div>
          <div className="flex items-center gap-3 sm:gap-8 cursor-pointer">
            <Mute />
            <Bookmark
              is_bookmarked={blog.is_bookmarked}
              article_id={blog.uid}
            />
            <ActionDropDown>
              <>
                <li>Follow author</li>
                <li>Follow publication</li>
                <li>Mute author</li>
                <li>Mute publication</li>
                <li className="text-red-600">Report story..</li>
              </>
            </ActionDropDown>
          </div>
        </div>
      </div>
      <div className="w-28 h-22 overflow-hidden sm:w-44">
        <img
          src={blog.image}
          alt="article"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FeaturedArticle;
