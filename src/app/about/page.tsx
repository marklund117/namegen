import Link from 'next/link'

export default function About() {
    return (
        <div className="p-4 flex lg:w-[1024px] w-full m-auto flex-col items-center">
        <p className="mb-4">Namegen is a <Link href="https://nextjs.org/" target="_blank" className="text-emerald-400 underline">Next.js</Link> based web application which uses <Link href="https://mistral.ai/" target="_blank" className="text-emerald-400 underline">Mistral AI</Link> (specifically the mistral-large model) to generate unique usernames based on user input. The project is styled with <Link href="https://tailwindcss.com/" target="_blank" className="text-emerald-400 underline">Tailwind CSS</Link></p>
        <p>For best results, specify only 1-2 keywords, to allow space for style and tone influence.</p>
        </div>
    )
  }