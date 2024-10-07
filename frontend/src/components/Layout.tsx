import Head from "next/head";
import { ReactNode } from "react";
import styles from "./Layout.module.css";
import Header from "./Header";

const Layout = ({ children }: {children: ReactNode}) => {
    return (
        <>
            <Head>
                <title>Checkpoint</title>
                <meta name="description" content="Checkpoint" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <main className={styles["main-content"]}>{children}</main>
        </>
    )
}

export default Layout;