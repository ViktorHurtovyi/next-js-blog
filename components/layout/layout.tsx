import Head from 'next/head'
import styles from './layout.module.css'
import Header from "../header";
import React from "react";

export default function Layout({children}) {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
            </Head>
            <Header/>
            <div className={styles.container}>

                <main>{children}</main>
            </div>
        </>
    )
}
