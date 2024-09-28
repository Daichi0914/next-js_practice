import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Icons from '@/components/icons';

const UserAuthForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <form>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          <button className={cn(buttonVariants())}>
            メールアドレスでログイン
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

      <button className={cn(buttonVariants({ variant: 'outline' }))}>
        <Icons.github width="20" height="20" className="mr-2" />
        GitHub
      </button>
    </div>
  );
};

export default UserAuthForm;
