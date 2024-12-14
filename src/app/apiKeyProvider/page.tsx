// app/apiKeyProvider/page.tsx
import { headers } from 'next/headers';

interface ApiKeyResponse {
  apiKey: string;
}

export default async function ApiKeyProvider(): Promise<ApiKeyResponse> {
  const headersList = await headers();
  const apiKey = process.env.MISTRAL_API_KEY

  if (!apiKey) {
    throw new Error('API key is missing');
  }

  return { apiKey };
}
