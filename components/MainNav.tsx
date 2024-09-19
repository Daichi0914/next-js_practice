import Link from 'next/link';

const MainNav = () => {
  return (
    <div className="flex items-center md:gap-10">
      <Link href={'/'} className="hidden md:flex items-center space-x-2">
        <span className="font-bold">
          Post Writer
        </span>
      </Link>
      <nav className="md:flex gap-6 hidden">
        <Link
          href={'/blog'}
          className="text-black text-lg sm:text-sm font-medium hover:text-black/80"
        >
          ブログ
        </Link>
        <Link
          href={'#feature'}
          className="text-black text-lg sm:text-sm font-medium hover:text-black/80"
        >
          特徴
        </Link>
      </nav>
    </div>
  );
};

export default MainNav;
