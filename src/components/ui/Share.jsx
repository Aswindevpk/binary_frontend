import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

function Share({}) {
  const location = useLocation();

  const copyCurrentURL = async () => {
    try{
        const fullUrl = `${window.location.origin}${location.pathname}${location.search}`;
        await navigator.clipboard.writeText(fullUrl);
        toast.success("Link copied to clipboard.")
    } catch(err){
        console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="outline-none">
      <FontAwesomeIcon
        onClick={copyCurrentURL}
        icon={faArrowUpFromBracket}
        className="icons text-secondary"
      />
    </div>
  );
}

export default Share;
