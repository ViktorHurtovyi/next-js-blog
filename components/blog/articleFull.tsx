import React from "react";
import {Article} from "../../entities/Article";
import {Comment} from "../../entities/Comment";
import {CreateComment} from "../forms";
import styles from './blog.module.css'

type ArticleFullProps = {
    fullArticle: Article,
    comments: Comment[],
    createComment: Function
}

const ArticleFull: React.FC<ArticleFullProps> = ({fullArticle, comments, createComment}) => {

    return   <>
        <div className={styles.fullArticleHeader}>{fullArticle.title}</div>
        <div className={styles.fullArticleText}>{fullArticle.body}</div>
        <CreateComment createComment={createComment}/>
        {comments.map(item => <div className={styles.commentBody} key={item.id}>{item.body}</div>)}
    </>
};
export default ArticleFull;
