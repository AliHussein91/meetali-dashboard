'use client';

import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import {deleteCookie} from 'cookies-next';
import {
	HomeIcon,
	ProjectIcon,
	SkillIcon,
	MessageIcon,
	LogoutIcon,
} from '@/components/Icons';
import {Limelight} from 'next/font/google';

const navItems = [
	{href: '/', label: 'Home', icon: HomeIcon},
	{href: '/projects', label: 'Projects', icon: ProjectIcon},
	{href: '/skills', label: 'Skills', icon: SkillIcon},
	{href: '/messages', label: 'Messages', icon: MessageIcon},
];

const limelight = Limelight({
	subsets: ['latin'],
	weight: '400',
});
export default function SideNav() {
	const pathname = usePathname();
	const router = useRouter();

	const handleLogout = () => {
		deleteCookie('token', {path: '/'});
		router.push('/login');
	};

	return (
		<nav className="h-full flex flex-col bg-space-900 text-white shadow-lgx">
			<div className="p-4 mb-4">
				<h1 className={`${limelight.className} text-2xl font-bold uppercase px-3`}>
					Dashboard
				</h1>
			</div>
			<ul className="flex-grow">
				{navItems.map(({href, label, icon: Icon}) => (
					<li key={href}>
						<Link
							href={href}
							className={`flex items-center p-4 text-lg hover:bg-gray-700 transition-colors duration-300 ${
								pathname === href ? 'bg-gray-700' : ''
							}`}
						>
							<Icon className="mr-3" />
							{label}
						</Link>
					</li>
				))}
			</ul>
			<div className="p-4 mt-auto text-center">
				<button
					onClick={handleLogout}
					className="mx-auto bg-midnight-100 px-7 rounded-full py-1 text-lg hover:border border border-transparent hover:border-midnight-100 hover:bg-transparent hover:text-midnight-100 cursor-pointer text-space-100 transition-all duration-300"
				>
					Logout
				</button>
			</div>
		</nav>
	);
}
