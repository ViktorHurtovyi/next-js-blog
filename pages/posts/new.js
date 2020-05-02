import React, {useEffect, useState} from "react";
import BlogApiService from "../../services/blog-api-service";
import { CreateArticle } from "../../components/forms";
import Layout from "../../components/layout/layout";

export default function New() {

    const service = new BlogApiService();

    return (
        <Layout>
            <CreateArticle createArticle={service.createArticle} />
        </Layout>
    )
}

