import { ActionDropDown } from "components/index";
import React from "react";
import { Link } from "react-router-dom";
import { api } from "services/api";
import { toast } from "sonner";


const Story = ({ article, setLoading }) => {

  async function deleteArticle(id) {
    try {
      setLoading(true);
      const response = await api.delete(`/home/article-edit/${id}/`);
      if (response.status === 204) {
        toast.success("Article Deleted!");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Failed to Delete article");
    }
  }

  return (
    <div className="Story">
      <Link to={`/edit-story/${article.uid}`}>
        <h2 className="Story-heading">{article.title}</h2>
        <p className="Story-para">{article.subtitle}</p>
      </Link>
      <div className="Story-footer">
        <span>Last edited 5 days ago</span>
        <span>.</span>
        <span>1 min read (2 words) so far</span>
        <span>
          <ActionDropDown>
            <>
              <li>
                <Link to={`/edit-story/${article.uid}`}>Edit</Link>
              </li>
              <li
                onClick={() => deleteArticle(article.uid)}
                style={{ color: "#c94a4a" }}
              >
                Delete
              </li>
            </>
          </ActionDropDown>
        </span>
      </div>
    </div>
  );
};

export default Story;
