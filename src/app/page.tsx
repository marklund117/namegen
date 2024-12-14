// app/page.js
import ApiKeyProvider from './apiKeyProvider/page';
import UsernameGenerator from './components/UsernameGenerator/UsernameGenerator'

export default async function HomePage() {
  const { apiKey } = await ApiKeyProvider();

  return <UsernameGenerator apiKey={apiKey} />;
}

// we need to bring both things in here because this is a server component and only child components can be client



