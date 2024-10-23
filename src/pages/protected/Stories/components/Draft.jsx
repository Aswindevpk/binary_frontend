import React, { useEffect, useState } from "react";
import Story from "./Story";
import { api } from "services/api";


const Draft = () => {
  let [status, setStatus] = useState("loading");
  let [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchDraft = async () => {
      try {
        const response = await api.get("/home/articles?draft=true");
        if (response.status === 200){
          setArticles(response.data);
          setStatus("loaded");
        }
      } catch (error) {
        console.log(error)
      }
    };
    fetchDraft();
  }, []);

  if (status === "loading") {
    return <div>loading..</div>;
  }
  return (
    <>
    {articles.map((article)=>(
      <Story article={article} />
    ))}
    </>
  );
};

export default Draft;
