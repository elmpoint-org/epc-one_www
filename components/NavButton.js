import Link from 'next/link';

import LockIcon from './svg/icon_lock19';

const NavButton = ({ text, url, secure, selected }) => {
  return (
    <Link href={url || ''}>
      <div
        className={`hidden cursor-pointer flex-row items-center gap-2.5 rounded-full bg-emerald-800 py-1 px-5 lg:flex ${
          selected
            ? '-m-[5px] border-[5px] border-emerald-800 bg-emerald-700'
            : 'hover:bg-white/5'
        }`}
      >
        <div className="text-lg font-bold capitalize text-emerald-50">
          {text}
        </div>
        {!secure ? null : (
          <div className="stroke-emerald-50 opacity-[.46]">
            <LockIcon />
          </div>
        )}
      </div>
    </Link>
  );
};

export default NavButton;
