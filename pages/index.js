import React, {useEffect, useState} from "react";
import BlogApiService from "../services/blog-api-service";
import Layout from "../components/layout/layout";
import {Blog} from "../components/blog";

export default function Home() {

    const service = new BlogApiService();
    const [articleList, setArticles] = useState([]);

    useEffect(() => {
        const articles = service.getAllArticle();
        articles.then(result => setArticles(result))
    }, []);

  return (
      <Layout>
          <Blog articles={articleList}/>
      </Layout>
  )
}
