// api key thingy
interface ApiKeyResponse {
  apiKey: string;
}

export default async function ApiKeyProvider(): Promise<ApiKeyResponse> {
  const apiKey = process.env.MISTRAL_API_KEY

  if (!apiKey) {
    throw new Error('API key is missing');
  }

  return { apiKey };
}
