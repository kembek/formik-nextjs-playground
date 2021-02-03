import Head from 'next/head';
import Link from 'next/link';

import { Main } from '../../layout';
import styles from '../../styles/Home.module.css';

const PARENT_PATH = '/form-page';

export default function FormPage() {
  return (
    <div className="container">
      <Head>
        <title>Form page</title>
      </Head>

      <Main className={styles.main}>
        <h1 className={styles.title}>Form page</h1>
        <p className={styles.description}>This project is for list of examples of forms.</p>
        <p className={styles.description}>
          <i>Shortcut to toggle the Google chrome reader:</i> <code>SHIFT+ALT+A+A</code>
        </p>

        <div>
          <p>List of example</p>
          <ul role="listbox" aria-label="List of links for navigation in the site">
            <li>
              <Link href={`${PARENT_PATH}/simple-form`}>
                <a>Simple form</a>
              </Link>
            </li>
            <li>
              <Link href={`${PARENT_PATH}/usual-form`}>
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
      </Main>
    </div>
  );
}
