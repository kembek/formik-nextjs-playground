import Head from 'next/head';
import { TODO } from '../components';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
      </Head>

      <main id="content" className={styles.main}>
        <h1 className={styles.title}>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam mollitia quia laboriosam dicta accusamus culpa tenetur illo
          officia excepturi. Autem mollitia asperiores voluptatem fuga eum, iusto molestiae? Beatae, doloremque? Asperiores.
        </p>
        <TODO text="Add a content" />
      </main>
    </div>
  );
}
