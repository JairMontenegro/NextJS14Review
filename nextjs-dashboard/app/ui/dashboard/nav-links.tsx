'use client'; // is importat becouse all compnents that we are using, they are in de sever, so when i want to use some javascript logic i need use "use client"

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        // link
        const LinkIcon = link.icon;
        return (
          <Link // The Link component allows us to set up a Next.js navigation that does not reload the entire page, but rather only the part we need. Additionally, the Link component performs automatic code splitting, which makes your app divide into smaller chunks or bundles automatically. Next.js preloads any Link component that is visible in your viewport, so when the user clicks, the load will be faster.
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
              pathName === link.href ? 'bg-sky-100 text-blue-600' : ''
            }`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
