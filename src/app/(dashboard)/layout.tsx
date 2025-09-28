import SideNav from '@/components/SideNav';

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex h-full w-full">
			<SideNav />
			<div>{children}</div>
		</main>
	);
}
