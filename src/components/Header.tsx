'use client';

import { usePathname } from 'next/navigation';

const getTitle = (pathname: string) => {
  if (pathname === '/') return 'Home';
  if (pathname.startsWith('/projects')) return 'Projects';
  if (pathname.startsWith('/skills')) return 'Skills';
  if (pathname.startsWith('/messages')) return 'Messages';
  return 'Dashboard';
};

export default function Header() {
  const pathname = usePathname();
  const title = getTitle(pathname);

  return (
    <header className="bg-gray-900 text-white shadow-md p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}
