import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Formik cardio</h1>
        <p className={styles.description}>This project is for list of examples of forms.</p>

        <div>
          <p>List of example</p>
          <ul>
            <li>
              <Link href="/simple-form">
                <a>Simple form</a>
              </Link>
            </li>
            <li>
              <del>
                <Link href="#">
                  <a>Validations (build-in, custom, async, validation), patterns, descriptions</a>
                </Link>
              </del>
            </li>
            <li>
              <del>
                <Link href="#">
                  <a>Uploading files</a>
                </Link>
              </del>
            </li>
            <li>
              <del>
                <Link href="#">
                  <a>Stepper added</a>
                </Link>
              </del>
            </li>
            <li>
              <del>
                <Link href="#">
                  <a>i18n</a>
                </Link>
              </del>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
