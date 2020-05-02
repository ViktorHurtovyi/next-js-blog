import React from "react";
import Link from "next/link";
import styles from './header.module.css'

const Header: React.FC  = () => {
    return <div className={styles.navBar}>
        <Link href="/"><a className={styles.navBarLink}>HOME</a></Link>
        <Link href="/posts/new"><button className={styles.addArticleBtn}>Create new post</button></Link>
    </div>
};
export default Header;
