import Head from 'next/head';
import { useState } from 'react';

import { Heading, TODO } from '../../components';
import { Main } from '../../layout';

const imgClassName = 'rounded w-25';

export default function MediaPage() {
  const [hiddenDescription, setHiddenDescription] = useState(true);

  const toggleHiddenDescription = () => {
    setHiddenDescription((prev) => !prev);
  };

  return (
    <div className="container">
      <Heading text="Media page" />

      <Main id="content">
        <Head>
          <title>Example of media files</title>
        </Head>

        <h2>Images</h2>
        <div>
          <h3>Image with alt text</h3>

          <img className={imgClassName} src="/running_dog.webp" alt="It is a running dog" />
          <pre>
            <code>{`<img className="${imgClassName}" src="/running_dog.webp" alt="It is a running dog" />`}</code>
          </pre>
        </div>
        <div>
          <h3>Image is wrapped with figure</h3>
          <figure role="group">
            <img className={imgClassName} src="/running_dog.webp" alt="It is a running dog" />
            <figcaption>The happy dog is running on the green grace and its ears so big and they jump</figcaption>
          </figure>
        </div>
        <TODO text="Add image with inner text" />
        <TODO text="Add image and description should be in an another page" />

        <hr />

        <h2>Audio</h2>
        <div>
          <h3>Audio with description</h3>
          <audio controls aria-label="A short audio" aria-describedby="detailed_desc_for_audio">
            <source src="count_from_1_to_4.mp3" type="audio/mpeg" />
            <track kind="captions" src="/count_from_1_to_4.vtt" srcLang="en" label="English" />
          </audio>
          <p id="detailed_desc_for_audio">The audio contains count from one to four: one, two, three, four</p>
        </div>
        <div>
          <h3>Audio with hidden description</h3>
          <audio controls aria-label="A short audio" aria-describedby="detailed_desc_for_audio_sec">
            <source src="count_from_1_to_4.mp3" type="audio/mpeg" />
            <track kind="captions" src="/count_from_1_to_4.vtt" srcLang="en" label="English" />
          </audio>
          <button type="button" className="btn btn-outline-secondary" onClick={toggleHiddenDescription}>
            {hiddenDescription ? (
              <img src="./visibility_black.png" alt="Show descriptions" />
            ) : (
              <img src="./visibility_off_black.png" alt="Hide descriptions" />
            )}
          </button>
          <p className={hiddenDescription ? 'visually-hidden' : ''} id="detailed_desc_for_audio_sec">
            The audio contains count from one to four: one, two, three, four
          </p>
        </div>

        <hr />

        <h2>Video</h2>
        <div>
          <video controls>
            <source src="/video_with_puppy.mp4" type="video/mp4" />
            <track src="/video_with_puppy_subtitles_en.vtt" kind="captions" srcLang="en" label="English" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <TODO text="Add other videos" />
      </Main>
    </div>
  );
}
