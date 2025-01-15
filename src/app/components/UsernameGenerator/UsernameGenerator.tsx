'use client'
// username generator component
import { Mistral } from '@mistralai/mistralai'
import { useState } from 'react'
import styles from './UsernameGenerator.module.css'

// generic function to copy text of a specific button to clipboard
function copyToClipboard(btnClass: string) {
  const buttonToCopy = document.getElementsByClassName(btnClass)[0]
  if (buttonToCopy) {
    navigator.clipboard.writeText(buttonToCopy.innerHTML.split(' <')[0]) // we don't want them to copy the html
    const originalText = buttonToCopy.innerHTML
    const originalClasses = buttonToCopy.className
    buttonToCopy.innerHTML = 'Copied!'
    buttonToCopy.className = `${btnClass} shadow-md p-2 rounded-md w-full bg-emerald-300`
    setTimeout(() => {
      buttonToCopy.innerHTML = originalText
      buttonToCopy.className = originalClasses
    }, 1000)  // 1 second delay
  }
}

// typescript needs apiKey to be specified as a string
interface GenProps {
  apiKey: string;
}

export default function UsernameGenerator({ apiKey }: GenProps) {

  // loading state
  const [isLoading, setIsLoading] = useState(false)

  const generateUsernames = async () => {
    console.log('Generating usernames...')
    setIsLoading(true)

    // create a Mistral instance
    const client = new Mistral({ apiKey: apiKey })

    // get values from the customization panel
    const givenKeyword = (document.getElementById('keywordfield') as HTMLInputElement)?.value ?? ''
    const givenTopics = (document.getElementById('topicfield') as HTMLInputElement)?.value ?? ''

    const chatResponse = await client.chat.complete({
      model: 'mistral-large-latest',
      messages: [{ role: 'user', content: `list exactly 12 unique internet usernames including the specific keyword(s) ${givenKeyword} with theming/tone related to ${givenTopics}, keep in mind tone and theming are more flexible. The usernames should be separated by commas (comma only, no spaces or newlines). The usernames should be a maximum of 16 characters in length and may optionally contain underscores and uppercase or lowercase letters but no spaces or special characters. No other text should be present in your response besides the list of comma separated usernames. Do not begin or end the response with a comma.` }]
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
        newName.className = `username${splitArray.indexOf(username)} text-black shadow-md pt-2 pb-2 pl-4 pr-4 rounded-md w-full bg-white border-2 border-solid border-neutral-700 hover:border-emerald-300 flex flex-row justify-between`
        newName.innerHTML = `${username} <img src="/copylarge.png" alt="copy icon" width="16" height="20" />`
        // and add a click handler to each
        newName.onclick = () => copyToClipboard(`username${splitArray.indexOf(username)}`)
        console.log('newName:', newName)
        if (nameList) {
          console.log('appending username')
          nameList.appendChild(newName)
        }
      })
    }
    setIsLoading(false)
  }
  return (
    <div className="p-4 flex lg:w-[1024px] w-full m-auto flex-col items-center bg-white">
      <div className="border-2 border-solid border-neutral-700 rounded-md w-full p-4 shadow-md">
      <form className="flex flex-col items-center">
      <h3 className="mb-4 text-lg text-black">Keyword(s)</h3>
      <input type="text" id="keywordfield" className={`${styles.customfocus} text-black w-full p-2 border-2 border-solid border-neutral-700 custom-focus rounded-md mb-4 text-center`} placeholder="enter specific keyword(s) to include here"/>
      <h3 className="mb-4 text-lg text-black">Style/Topic/Tone</h3>
      <input type="text" id="topicfield" className={`${styles.customfocus} text-black w-full p-2 border-2 border-solid border-neutral-700 custom-focus rounded-md mb-4 text-center`} placeholder="enter your desired topic(s) or style here"/>
      </form>
      <button className={`text-xl text-black p-4 w-full bg-emerald-300 rounded-md ${isLoading ? 'bg-neutral-300' : 'bg-emerald-300 hover:bg-emerald-400'}`} onClick={generateUsernames} disabled={isLoading}>
      {isLoading ? 'Generating...' : 'Generate Usernames'}
      </button>
      </div>
      <div id="usernamebox" className="w-full mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
    </div>
  )
}
