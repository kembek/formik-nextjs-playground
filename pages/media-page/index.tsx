import Head from 'next/head';
import { TODO } from '../../components';

export default function MediaPage() {
  return (
    <main id="content">
      <Head>
        <title>Example of media files</title>
      </Head>
      <h1>Media page</h1>

      <h2>Images</h2>
      <div>
        <img src="/running_dog.webp" alt="It is a running dog" />
      </div>
      <div>
        <figure>
          <img src="/running_dog.webp" alt="It is a running dog" />
          <figcaption>The happy dog is running on the green grace and its ears so big and they jump</figcaption>
        </figure>
      </div>
      <TODO text="Add Gif image" />
      <TODO text="Add image and description should be in an another page" />

      <hr />

      <h2>Audio</h2>
      <div>
        <audio controls aria-label="A short audio" aria-describedby="detailed_desc_for_audio">
          <source src="count_from_1_to_4.mp3" type="audio/mpeg" />
          <track kind="captions" src="/count_from_1_to_4.vtt" srcLang="en" label="English" />
        </audio>
        <p id="detailed_desc_for_audio">The audio contains count from one to four: one, two, three, four</p>
      </div>

      <hr />

      <h2>Video</h2>
      <TODO text="Add video section" />
    </main>
  );
}
