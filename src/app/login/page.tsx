'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {setCookie} from 'cookies-next';
import {login} from '@/services/auth';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');

		try {
			const data = await login(email, password);
			setCookie('token', data.token, {path: '/'});
			router.push('/');
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError('An unknown error occurred');
			}
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center gap-5"
			>
				<h1 className="text-4xl font-bold uppercase mb-3">Sing in</h1>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="rounded-full py-2 px-4 w-70 border border-midnight-100"
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					className="rounded-full py-2 px-4 w-70 border border-midnight-100"
				/>
				{error && <p className="text-midnight-100  text-xs">{error}</p>}
				<button
					type="submit"
					className=" bg-midnight-100 px-7 rounded-full py-1 text-lg hover:border border border-transparent hover:border-midnight-100 hover:bg-transparent hover:text-midnight-100 cursor-pointer text-space-100 transition-all duration-300"
				>
					Login
				</button>
			</form>
		</div>
	);
}
