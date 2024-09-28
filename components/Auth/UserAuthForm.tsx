import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const UserAuthForm = () => {
  return (
    <div>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          <button className={cn(buttonVariants())}>
            メールアドレスでログイン
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserAuthForm;
