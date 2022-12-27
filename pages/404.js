import Head from 'next/head';

const Error404 = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - Elm Point</title>
      </Head>
      <div className="">
        <div className="w-full text-center text-base font-bold text-zinc-800">
          <span className="font-bold text-red-600">404:</span> Not Found
        </div>
      </div>
    </>
  );
};

export default Error404;
