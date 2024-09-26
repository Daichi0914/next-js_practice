import Link from 'next/link';
import { siteConfig } from '@/config/site';

const Footer = () => {
  return (
    <footer>
      <div className="container py-10 md:py-0 md:h-20 mx-auto">
        <p className="text-center text-sm">
          Built by {""}
          <Link
            href={siteConfig.links.github}
            className="underline underline-offset-4 font-medium"
            target="_blank"
            rel="noreferrer"
          >
            Daichi0914
          </Link>
          . Hosted on {""}
          <Link
            href={"https://vercel.com"}
            className="underline underline-offset-4 font-medium"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
