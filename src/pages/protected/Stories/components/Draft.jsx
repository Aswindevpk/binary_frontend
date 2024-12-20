import React, { useEffect, useState } from "react";
import Story from "./Story";
import { api } from "@services/api";

const Draft = () => {
  let [loading, setLoading] = useState(true);
  let [articles, setArticles] = useState(null);

  const fetchDraft = async () => {
    try {
      const response = await api.get("/home/articles?draft=true");
      if (response.status === 200) {
        setArticles(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDraft();
  }, [loading]);

  if (loading) {
    return <div>loading..</div>;
  }
  return (
    <>
      <section className="flex flex-col gap-6">
        {articles.map((article) => (
          <Story key={article.uid} article={article} setLoading={setLoading} />
        ))}
      </section>
    </>
  );
};

export default Draft;
