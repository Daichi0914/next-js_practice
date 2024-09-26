import Link from 'next/link';
import { siteConfig } from '@/config/site';

const ContactSection = () => {
  return (
    <section id="contact" className="container p-8 md:py-12 lg:py-24 mx-auto">
      <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4 items-center">
        <h2 className="font-extrabold text-3xl mdLtext-6xl">Contact Me</h2>
        <p className="text-muted-foreground sm:text-lg sm:leading-7">
          もしもWebサービスが気に入った場合はかきXからDMでご連絡ください。
          <br />
          お仕事のご連絡をお待ちしております。
        </p>
        <Link
          href={siteConfig.links.x}
          className="underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          お仕事はXまで
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
