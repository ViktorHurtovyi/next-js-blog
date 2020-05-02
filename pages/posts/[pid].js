import {useRouter} from 'next/router'
import React, {useEffect, useState} from "react";
import BlogApiService from "../../services/blog-api-service";
import Layout from "../../components/layout/layout";
import {ArticleFull} from "../../components/blog";

const Post = () => {
    const service = new BlogApiService();
    const router = useRouter();
    const {pid} = router.query;
    const [fullArticle, setArticle] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (pid !== undefined) {
            const fullArticle = service.getFullArticle(pid);
            fullArticle.then((result) => {
                setArticle(result);
                setComments(result.comments)
            });
        }
    }, [pid, comments]);

    const createComment = (text) => {
        service.createComment(fullArticle.id, text).then(() => {
        });
    };

    return <Layout>
        <ArticleFull fullArticle={fullArticle} comments={comments} createComment={createComment}/>
    </Layout>
};

export default Post
