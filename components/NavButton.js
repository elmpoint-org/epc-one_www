import Link from 'next/link';

import LockIcon from './svg/icon_lock19';

const NavButton = ({ text, url, secure, selected, center, ...props }) => {
  return (
    <Link href={url || ''} {...props}>
      <div
        className={`flex cursor-pointer flex-row items-center gap-2.5 rounded-full  ${
          center ? `!m-0 justify-center py-2` : `py-1`
        } px-5 ${
          selected
            ? '-m-[5px] border-[5px] border-emerald-800 bg-emerald-700'
            : `bg-emerald-800 ${
                center ? 'hover:bg-emerald-900/90' : 'hover:bg-white/5'
              }`
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
