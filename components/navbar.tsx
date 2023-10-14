import { UserButton } from '@clerk/nextjs';

import MobileSidebar from './mobile-sidebar';
import { getApiLimit } from '../lib/api-limit';

const Navbar = async () => {
  const apiLimitCount = await getApiLimit();
  return (
    <div className="flex item-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
