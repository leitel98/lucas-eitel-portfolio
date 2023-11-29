'use client';

import { NAV_TABS } from '@/constants';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Tab } from '@headlessui/react';
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function NavBar() {
  return (
    <nav className="flex w-full max-w-7xl mx-auto rounded-full items-center justify-between px-6 md:px-12">
      <p className="text-3xl font-semibold text-royal-100 my-6">Lucas Eitel</p>
      <Tab.Group>
        <Tab.List className="flex w-1/2 space-x-1 rounded-xl bg-royal-950/30 p-1">
          {NAV_TABS.map((tab) => (
            <Link href="/" className="flex w-full">
              <Tab
                key={tab}
                className={({ selected }) => classNames(
                  'w-full rounded-lg py-2.5 font-semibold leading-5 whitespace-nowrap',
                  'focus:outline-none',
                  selected
                    ? 'bg-gradient-to-br from-royal-400 to-royal-600 shadow-sm text-royal-950'
                    : 'text-blue-100 hover:bg-gradient-to-br from-royal-200 to-royal-400 hover:text-royal-950',
                )}
              >
                {tab}
              </Tab>
            </Link>
          ))}
        </Tab.List>
      </Tab.Group>
    </nav>
  );
}

export default NavBar;
