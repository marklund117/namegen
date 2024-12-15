// app/page.js
import UsernameGenerator from './components/UsernameGenerator/UsernameGenerator'

// wait... if this is a server component this isn't visible to the client, right?
const apiKey = process.env.MISTRAL_API_KEY || ''

export default async function HomePage() {
  return <UsernameGenerator apiKey={apiKey} />
}



