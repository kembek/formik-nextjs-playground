import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
      </Head>

      <main id="content" className={styles.main}>
        <h1 className={styles.title}>Formik cardio</h1>
        <p className={styles.description}>This project is for list of examples of forms.</p>
        <p className={styles.description}>
          <i>Shortcut to toggle the Google chrome reader:</i> <code>SHIFT+ALT+A+A</code>
        </p>

        <div>
          <p>List of example</p>
          <ul role="listbox" aria-label="List of links for navigation in the site">
            <li>
              <Link href="/simple-form">
                <a>Simple form</a>
              </Link>
            </li>
            <li>
              <Link href="/usual-form">
                <a>Usual form with validations (build-in, custom, async, validation), patterns, descriptions</a>
              </Link>
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
