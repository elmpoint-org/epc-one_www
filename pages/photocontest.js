import Head from 'next/head';
import { useState } from 'react';

import TitleBlock from '../components/TitleBlock';

const pagetitle = `Photo Contest`;
const titleblock = {
  title: `The Elm Point Photo Contest`,
  description: `The Elm Point Photo Contest continues another year! Only photos taken during 2022 are eligible for the contest, so get your camera ready.`,
};

const PhotoContest = () => {
  const [input, setInput] = useState('');

  const onChange = ({ target: { value } }) => setInput(value);

  return (
    <>
      <Head>
        <title>{`${pagetitle} - Elm Point`}</title>
      </Head>
      <div className="flex flex-col items-stretch gap-5 p-2.5">
        <TitleBlock {...titleblock} />
        <div className="mx-2.5 h-0.5 rounded-full bg-black/10"></div>
        <div className="mx-2.5">
          text disappears:&nbsp;
          <input type="text" value={input} {...{ onChange }} />
        </div>
      </div>
    </>
  );
};

export default PhotoContest;
