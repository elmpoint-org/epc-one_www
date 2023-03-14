import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
import { useWindowSize } from '../utils/windowSize';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';

import { motion, AnimatePresence } from 'framer-motion';

import NavButton from './NavButton';

import Logo from './svg/logo';
import AccountIcon from './svg/icon_account27';
import MenuIcon from './svg/icon_menu29';

const navLinks = [
  { text: 'Home', url: '/' },
  { text: 'Updates', url: '/updates' },
  { text: 'Photo contest', url: '/photocontest' },
  { text: 'Calendar', url: '/calendar', secure: true },
];

const { theme: themeTW } = resolveConfig(tailwindConfig);
const screens = (s) => parseFloat(themeTW.screens[s].match(/[\d.]+/));

const op = {
  initial: 'closed',
  animate: 'open',
  exit: 'closed',
};

const variants = {
  open: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const Nav = () => {
  const router = useRouter();
  const [path, setPath] = useState(' ');
  const [open, setOpen] = useState(false);

  const windowSize = useWindowSize();

  useEffect(() => {
    const m = router.asPath.match(/^\/[^/]*/);
    if (!m) return;
    setPath(m[0]);
  }, [router.asPath]);

  return (
    <>
      <div className="z-20 flex flex-row items-center justify-between rounded-2xl bg-emerald-900 py-2 px-7 shadow-nav lg:py-0.5">
        {/* logo */}
        <Link href="/">
          <div className="p-2.5">
            <Logo />
          </div>
        </Link>

        <button
          className="stroke-emerald-50 lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <MenuIcon />
        </button>

        {/* size lg nav buttons */}
        <div className="hidden flex-row items-center gap-2.5 p-2.5 lg:flex">
          {navLinks.map((props, i) => (
            <NavButton
              key={i}
              selected={path === props.url}
              onClick={() => setOpen(false)}
              {...props}
            />
          ))}
          <div className="flex cursor-pointer flex-row items-center justify-end gap-2.5 rounded-full bg-account-green/90 p-1 px-[5px]">
            <div className="stroke-emerald-50">
              <AccountIcon />
            </div>
          </div>
        </div>
      </div>

      {/* nav buttons */}
      {windowSize.width < screens('lg') && (
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                {...op}
                variants={{
                  open: {
                    opacity: 1,
                    transition: {
                      delay: 0.2,
                    },
                  },
                  closed: {
                    opacity: 0,
                  },
                }}
                className="absolute top-24 left-0 z-20 flex w-full flex-col items-stretch gap-2.5 p-2.5 px-7 lg:static lg:hidden lg:w-auto lg:flex-row lg:items-center"
              >
                {navLinks.map((props, i) => (
                  <NavButton
                    key={i}
                    selected={path === props.url}
                    center
                    onClick={() => setOpen(false)}
                    {...props}
                  />
                ))}

                <div className="flex cursor-pointer flex-row items-center justify-end gap-2.5 rounded-full bg-emerald-800">
                  <div className="rounded-full bg-account-green/90 stroke-emerald-50 p-2">
                    <AccountIcon />
                  </div>
                </div>
              </motion.div>
              <motion.div
                {...op}
                variants={{
                  open: {
                    opacity: 1,
                  },
                  closed: {
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                    },
                  },
                }}
                className="fixed top-0 left-0 z-10 h-full w-full bg-nav-backdrop/[.89] backdrop-blur-sm lg:hidden"
                onClick={() => setOpen(false)}
              ></motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default Nav;
