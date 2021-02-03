import Head from 'next/head';

import { TODO } from '../components';
import { CONTENT_ID, Main } from '../layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home page</title>
      </Head>

      <Main className={styles.main}>
        <h1 className={styles.title}>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam mollitia quia laboriosam dicta accusamus culpa tenetur illo
          officia excepturi. Autem mollitia asperiores voluptatem fuga eum, iusto molestiae? Beatae, doloremque? Asperiores.
        </p>
        <TODO text="Add a content" />
      </Main>
    </div>
  );
}
