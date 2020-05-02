import React from "react";
import Link from "next/link";
import {Article} from "../../entities/Article";
import styles from './blog.module.css'

type BlogProps = {
    articles: Article[]
}

const Blog: React.FC<BlogProps> = ({articles}) => {

    return <div className={styles.blogList}>
        {articles.map(item => {
            return <div key={item.id} className={styles.articleWrapper}>
                <Link href={"/posts/" + item.id}>
                    <div className={styles.textCenter}><h3> {item.title}</h3></div>
                </Link>
                <div className={styles.articleBody}>{item.body.length>150?item.body.slice(0, 150)+' ...':item.body}</div>
                <p className={styles.buttonWrapper}>
                    <Link href={"/posts/" + item.id}><a className={styles.buttonViewMore} href="#" role="button">View
                        details
                        »</a></Link>
                </p>
            </div>
        })}
    </div>
};
export default Blog;
