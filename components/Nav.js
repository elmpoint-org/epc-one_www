import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';

import Logo from './svg/logo';
import NavButton from './NavButton';

import AccountIcon from './svg/icon_account27';

const navLinks = [
  { text: 'Home', url: '/' },
  { text: 'Updates', url: '/updates' },
  { text: 'Photo contest', url: '/photocontest' },
  { text: 'Calendar', url: '/calendar', secure: true },
];

const Nav = () => {
  const router = useRouter();
  const [path, setPath] = useState(' ');

  useEffect(() => {
    const m = router.asPath.match(/^\/[^/]*/);
    if (!m) return;
    setPath(m[0]);
  }, [router.asPath]);

  return (
    <div className="flex flex-row items-center justify-between rounded-2xl bg-emerald-900 py-0.5 px-7 shadow-nav">
      {/* logo */}
      <Link href="/">
        <div className="p-2.5">
          <Logo />
        </div>
      </Link>
      {/* nav buttons */}
      <div className="flex flex-row items-center gap-2.5 p-2.5">
        {navLinks.map((it, i) => (
          <NavButton
            key={i}
            text={it.text}
            url={it.url}
            selected={path === it.url}
            secure={it.secure}
          />
        ))}
        {/* profile button */}
        <div className="flex cursor-pointer flex-row items-center gap-2.5 rounded-full bg-account-green/90 p-1 px-[5px]">
          <div className="stroke-emerald-50">
            <AccountIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
