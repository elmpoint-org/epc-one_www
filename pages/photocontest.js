import Head from 'next/head';
import { useState } from 'react';

import TitleBlock from '../components/TitleBlock';
import InputText from '../components/base/form/InputText';

const pagetitle = `Photo Contest`;
const titleblock = {
  title: `The Elm Point Photo Contest`,
  description: `The Elm Point Photo Contest continues another year! Only photos taken during 2022 are eligible for the contest, so get your camera ready.`,
};

const PhotoContest = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>{`${pagetitle} - Elm Point`}</title>
      </Head>
      <div className="flex flex-col items-stretch gap-5 p-2.5">
        <TitleBlock {...titleblock} />
        <div className="mx-2.5 h-0.5 rounded-full bg-black/10"></div>
        <div className="mx-2.5">
          <form onSubmit={handleSubmit}>
            {/* text fields */}
            <div className="space-y-2.5 p-2.5">
              <div className="t">Enter your information</div>
              <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
                <InputText label="Name" />
                <InputText type="email" label="Email" />
              </div>
            </div>
            {/* photo uploader */}
            <div className="space-y-2.5 p-2.5">
              <div className="t">Upload your photo</div>
              <div className="t">uploader</div>
            </div>
            {/* buttons */}
            <div className="flex flex-row justify-end gap-2.5 p-2.5">
              <input
                type="submit"
                value="Submit"
                className="cursor-pointer rounded-full bg-emerald-700 py-2.5 px-11 font-bold tracking-wide text-zinc-100 hover:bg-emerald-800"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PhotoContest;
