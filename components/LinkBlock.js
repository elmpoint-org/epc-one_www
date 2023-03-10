import Link from 'next/link';

import LockIcon from './svg/icon_lock16';

const LinkBlock = ({
  name,
  url,
  description,
  secure,
  external,
  highlight,
  id,
}) => {
  const content = (
    <div
      data-id={id}
      className={`h-full rounded-[10px] border border-zinc-900/[.55] p-2.5 hover:bg-black/5 ${
        highlight
          ? `border-0 bg-gradient-to-b from-account-green to-account-green-darker hover:bg-emerald-700 hover:bg-none`
          : ''
      }`}
    >
      {/* link name */}
      <div className="flex flex-row items-center justify-start gap-[7px] p-2.5">
        <div
          className={`text-base font-bold capitalize underline ${
            highlight ? `text-zinc-100/90` : 'text-zinc-900'
          }`}
        >
          {name}
        </div>
        {!secure ? null : (
          <div
            className={`opacity-[.47] ${
              highlight ? `stroke-zinc-100` : 'stroke-zinc-900'
            }`}
          >
            <LockIcon />
          </div>
        )}
        <div className={` ${highlight ? `text-zinc-100` : 'text-zinc-900'}`}>
          &rarr;
        </div>
      </div>

      {/* link description */}
      <div
        className={`mb-2.5 px-2.5 text-sm  line-clamp-4 ${
          highlight ? `text-zinc-100 opacity-75` : 'text-zinc-600'
        }`}
      >
        {description}
      </div>
    </div>
  );
  return !external ? (
    <Link href={url || ''}>{content}</Link>
  ) : (
    <a href={url || ''} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
};

export default LinkBlock;
