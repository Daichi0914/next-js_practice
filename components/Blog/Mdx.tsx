"use client"

import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Callout from '@/components/Blog/Callout';

const components = {
  Image,
  Callout
}

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component components={components} />
    </div>
  );
};

export default Mdx;
