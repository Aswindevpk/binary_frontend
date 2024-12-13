import React, { useEffect, useState } from "react";
import { MainLayout } from "@components/layouts";
import AuthorDetailsMain from "./AuthorDetailsMain";
import AuthorDetailsSide from "./AuthorDetailsSide";
import { useParams } from "react-router-dom";
import { api } from "@services/api";


function AuthorDetails() {
  const { id } = useParams();
  let [author, setAuthor] = useState(null);
  let [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthor = async (id) => {
      try {
        const response = await api.get(`/home/author/${id}/`);
        const fetchedBlogs = response.data;
        setAuthor(fetchedBlogs);
        setLoading(false)
      } catch (error) {
        console.error("There was an error fetching the blogs!", error);
      }
    };

    fetchAuthor(id);
  }, [id]);

  if(loading){
    return <div>loading..</div>
  }

  return <MainLayout Main={(props)=><AuthorDetailsMain {...props} author={author} id={id}/>} Side={(props)=><AuthorDetailsSide {...props} author={author}/>}></MainLayout>;

}

export default AuthorDetails;
