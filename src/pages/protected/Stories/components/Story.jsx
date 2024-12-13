import { ActionDropDown } from "@components/index";
import React from "react";
import { Link } from "react-router-dom";
import { api } from "@services/api";
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
    <div className="flex flex-col border-b border-neutral py-4">
      <Link to={`/edit-story/${article.uid}`}>
        <h2 className="text-md font-semibold">{article.title}</h2>
        <p className="text-sm text-secondary">{article.subtitle}</p>
      </Link>
      <div className="mt-2 text-xs flex gap-2 text-secondary">
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
