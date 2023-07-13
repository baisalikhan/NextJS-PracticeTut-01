import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bais NextJs Practice Tutorial</title>
      </Head>
      <Link href="/about">About</Link>
      <h1 className={styles.homePageHeaderStyle}>Hello World</h1>
    </div>
  );
}
