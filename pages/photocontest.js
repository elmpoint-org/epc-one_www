import Head from 'next/head';

import TitleBlock from '../components/TitleBlock';

const pagetitle = `Photo Contest`;
const titleblock = {
  title: `The Elm Point Photo Contest`,
  description: `The Elm Point Photo Contest continues another year! Only photos taken during 2022 are eligible for the contest, so get your camera ready.`,
};

const PhotoContest = () => {
  return (
    <>
      <Head>
        <title>{pagetitle} - Elm Point</title>
      </Head>
      <div className="flex flex-col items-stretch gap-5 p-2.5">
        <TitleBlock
          title={titleblock.title}
          description={titleblock.description}
        />
      </div>
    </>
  );
};

export default PhotoContest;
