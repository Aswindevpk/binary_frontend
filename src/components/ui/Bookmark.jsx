import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { Tooltip } from "react-tooltip";
import { api } from "@services/api";
import { toast } from "sonner";


function Bookmark({is_bookmarked,article_id}) {
  //if bookmark id exists the article bookmarked
  const [isBookmarked,setIsBookmarked] = useState(is_bookmarked ? true:false)

  //bookmark handler
  const handleBookmark = async (article_id) => {
    try {
      const response = await api.post(`/home/article/${article_id}/bookmark/`);
      if (response.status == 201) {
        setIsBookmarked(true)
        toast.success("Article Bookmarked !");
      } else if (response.status == 200) {
        setIsBookmarked(false)
        toast.info("Article Remove from Bookmarked !");
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.error);
      }
      console.error("error while following!", error);
    }
  };


  return (
    <div onClick={()=>handleBookmark(article_id)}>
      <FontAwesomeIcon
        icon={isBookmarked ? solidBookmark : regularBookmark}
        className="icons"
        id="tooltip-bookmark"
        style={{ fontSize: "16px", cursor: "pointer" }}
        color="gray"
      />
      <Tooltip anchorSelect="#tooltip-bookmark" content="Save" />
    </div>
  );
}

export default Bookmark;
