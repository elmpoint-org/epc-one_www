import Link from 'next/link';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="flex w-full flex-row items-center justify-between border-t border-zinc-300 p-5 text-sm font-light italic text-zinc-800">
      <div className="mr-1">Copyright &copy; {year} Elm Point Corp.</div>
      <Link href="">
        <div className="underline hover:text-black">Edit elmpoint.org</div>
      </Link>
    </div>
  );
};

export default Footer;
