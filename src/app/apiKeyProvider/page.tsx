// app/apiKeyProvider/page.js - all from mistral large
import { headers } from 'next/headers';

import { ReactNode } from 'react';

interface ApiKeyProviderProps {
  children: (props: { apiKey: string | null }) => ReactNode;
}

export default async function ApiKeyProvider({ children }: ApiKeyProviderProps) {
  const headersList = await headers();
  const apiKey = headersList.get('x-api-key');

  // Pass the API key to the client component via props
  return children({ apiKey });
}
