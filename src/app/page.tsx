'use client'
// primary namegen file - will be experimenting with Mistral
import { Mistral } from '@mistralai/mistralai'

export default function Home() {

  const generateUsernames = async () => {
    console.log('Generating usernames...')
    // get our API key fron .env
    const apiKey = process.env.NEXT_PUBLIC_MISTRAL_API_KEY

    // create a Mistral instance
    const client = new Mistral({apiKey: apiKey})

    const chatResponse = await client.chat.complete({
      model: 'mistral-large-latest',
      messages: [{role: 'user', content: 'list 10 unique internet usernames, separated by commas (comma only, no spaces or newlines). The usernames may optionally contain underscores and uppercase or lowercase letters but no spaces or special characters. No other text should be present in your response.'}]
    })
    if (chatResponse.choices && chatResponse.choices.length > 0) {
      console.log('Chat:', chatResponse.choices[0])
      // remember this is returning a structured OBJECT which we must convert
      const usernamesObj = chatResponse.choices[0]
      const stringified = (usernamesObj.message?.content ?? '').toString()
      // and also split
      const splitArray = stringified.split(',')
      // now for each element in the split array, we generate an element
      splitArray.forEach((username) => {
        const nameList = document.getElementById('usernamebox')
        const newName = document.createElement('h5')
        newName.innerHTML = username
        console.log('newName:', newName)
        if (nameList) {
          console.log('appending username')
          nameList.appendChild(newName)
        }
      })
    }
  }
  return (
      <div className="p-4 flex w-[70rem] m-auto">
      <h1>Namegen.space - Under Construction!</h1>
      <button className="p-4 bg-emerald-300" onClick={generateUsernames}>Generate Usernames</button>
      <div id="usernamebox"></div>
      </div>
  )
}