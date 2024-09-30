import UserAuthForm from '@/components/Auth/UserAuthForm';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const Register = () => {
  return (
    <div className="container grid flex-col lg:grid-cols-2 h-screen w-screen items-center justify-center lg:max-w-none mx-auto">
      <Link
        href={'/login'}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 md:left-8 top-8'
        )}
      >
        ログイン
      </Link>
      <div className="h-full bg-muted lg:block hidden" />
      <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6 px-6 sm:px-0">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            アカウントの作成
          </h1>
          <p className="text-sm text-muted-foreground">
            メールアドレスを入力してアカウントを作成してください。
          </p>
        </div>

        <UserAuthForm buttonText="アカウントを作成" />

        <p className="text-muted-foreground text-center text-sm">
          続けてクリックすれば私たちの
          <Link href={'/terms'} className="underline underline-offset-4">
            利用規約
          </Link>
          と
          <Link href={'/privacy'} className="underline underline-offset-4">
            プライバシーポリシー
          </Link>
          に同意したことになります。
        </p>
      </div>
    </div>
  );
};

export default Register;
