import api from '@/lib/api';

export async function login(email: string, password: string): Promise<{ token: string }> {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Failed to login');
    }
    throw new Error('Failed to login');
  }
}
