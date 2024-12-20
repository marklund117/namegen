import '../../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Header() {
    return <header className="bg-neutral-900 text-emerald-300 flex justify-center shadow-md">
        <div className="p-4 flex flex-row justify-between align-middle lg:w-[1024px] w-full">
        <Link href="/" title="namegen.space"><Image src="/headerlogo.png" alt="Logo" width="32" height="32" /></Link>
        <Link href="/about" className="font-mono text-xl mt-0.5">About</Link>
        </div>
    </header>
}