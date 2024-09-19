"use client";

import Link from 'next/link';
import { NavItem } from '@/types';
import { ReactNode, useState } from 'react';
import MobileNav from '@/components/MobileNav';

interface MainNavProps {
  items: NavItem[];
  children?: ReactNode;
}

const MainNav = ({ items }: MainNavProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex items-center md:gap-10">
      <Link href={'/'} className="hidden md:flex items-center space-x-2">
        <span className="font-bold">
          Post Writer
        </span>
      </Link>
      <nav className="md:flex gap-6 hidden">
        {items?.map((item, index) =>
          <Link
            key={index}
            href={item.href}
            className="text-black text-lg sm:text-sm font-medium hover:text-black/80"
          >
            {item.title}
          </Link>
        )}
      </nav>
      <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav items={items} />}
    </div>
  );
};

export default MainNav;
