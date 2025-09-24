'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';
import {
  HomeIcon,
  ProjectIcon,
  SkillIcon,
  MessageIcon,
  LogoutIcon,
} from '@/components/Icons';

const navItems = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/projects', label: 'Projects', icon: ProjectIcon },
  { href: '/skills', label: 'Skills', icon: SkillIcon },
  { href: '/messages', label: 'Messages', icon: MessageIcon },
];

export default function SideNav() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie('token', { path: '/' });
    router.push('/login');
  };

  return (
    <nav className="h-full flex flex-col bg-gray-900 text-white shadow-lg">
      <div className="p-4 mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <ul className="flex-grow">
        {navItems.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link href={href}>
              <a
                className={`flex items-center p-4 text-lg hover:bg-gray-700 transition-colors duration-300 ${
                  pathname === href ? 'bg-gray-700' : ''
                }`}
              >
                <Icon className="mr-3" />
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="p-4 mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center p-4 text-lg hover:bg-gray-700 transition-colors duration-300 w-full"
        >
          <LogoutIcon className="mr-3" />
          Logout
        </button>
      </div>
    </nav>
  );
}
