'use client'
// username generator component
import { Mistral } from '@mistralai/mistralai'

// generic function to copy text of a specific button to clipboard
function copyToClipboard(btnClass: string) {
  const buttonToCopy = document.getElementsByClassName(btnClass)[0]
  if (buttonToCopy) {
    navigator.clipboard.writeText(buttonToCopy.innerHTML)
  }
}

// typescript needs apiKey to be specified as a string
interface GenProps {
  apiKey: string;
}

export default function UsernameGenerator({ apiKey }: GenProps) {

  const generateUsernames = async () => {
    console.log('Generating usernames...')

    // create a Mistral instance
    const client = new Mistral({ apiKey: apiKey })

    // get values from the customization panel (later)


    const chatResponse = await client.chat.complete({
      model: 'mistral-large-latest',
      messages: [{ role: 'user', content: 'list 10 unique internet usernames, separated by commas (comma only, no spaces or newlines). The usernames may optionally contain underscores and uppercase or lowercase letters but no spaces or special characters. No other text should be present in your response.' }]
    })
    if (chatResponse.choices && chatResponse.choices.length > 0) {
      console.log('Chat:', chatResponse.choices[0])
      // remember this is returning a structured OBJECT which we must convert
      const usernamesObj = chatResponse.choices[0]
      const stringified = (usernamesObj.message?.content ?? '').toString()
      // and also split
      const splitArray = stringified.split(',')
      const nameList = document.getElementById('usernamebox')
      // clear the list if it's not empty
      if (nameList) {
        nameList.innerHTML = ''
      }
      // now for each element in the split array, we generate an element
      splitArray.forEach((username) => {
        const newName = document.createElement('button')
        // and give each one a class name corresponding to their position in the list
        newName.className = `username${splitArray.indexOf(username)} shadow-md p-2 rounded-md w-full bg-white border-2 border-solid border-emerald-300 hover:border-emerald-400 hover:bg-emerald-100`
        newName.innerHTML = username
        // and add a click handler to each
        newName.onclick = () => copyToClipboard(`username${splitArray.indexOf(username)}`)
        console.log('newName:', newName)
        if (nameList) {
          console.log('appending username')
          nameList.appendChild(newName)
        }
      })
    }
  }
  return (
    <div className="p-4 flex lg:w-[1024px] w-full m-auto flex-col items-center bg-white">
      <h1 className="mb-4 text-center">Namegen.space - Under Construction! Click a generated username to copy.</h1>
      <button className="p-4 w-full bg-emerald-300 rounded-md hover:bg-emerald-400 shadow-md" onClick={generateUsernames}>Generate Usernames</button>
      <div id="usernamebox" className="w-full mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"></div>
    </div>
  )
}
