'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Icons from '@/components/icons';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const UserAuthForm = ({ buttonText }: { buttonText: string }) => {
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);

  const handleGitHubClick = () => {
    setIsGithubLoading(true);
    signIn('github').then();
  };

  const handleGoogleClick = () => {
    setIsGoogleLoading(true);
    signIn('google').then();
  };

  return (
    <div className="flex flex-col gap-6">
      <form>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          <button className={cn(buttonVariants())}>
            {buttonText}
          </button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground px-2 bg-white">
            または
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          className={cn(buttonVariants({ variant: 'outline' }))}
          onClick={handleGitHubClick}
        >
          {isGithubLoading ? (
            <Icons.spinner width="20" height="20" className="mr-2 animate-spin" />
          ) : (
            <Icons.github width="20" height="20" className="mr-2" />
          )}
          GitHub
        </button>

        <button
          className={cn(buttonVariants({ variant: 'outline' }))}
          onClick={handleGoogleClick}
        >
          {isGoogleLoading ? (
            <Icons.spinner width="20" height="20" className="mr-2 animate-spin" />
          ) : (
            <Icons.google width="20" height="20" className="mr-2" />
          )}
          Google
        </button>
      </div>
    </div>
  );
};

export default UserAuthForm;
