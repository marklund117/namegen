import '../../styles/globals.css'
import Link from 'next/link'
export default function Header() {
    return <header className="bg-neutral-900 text-emerald-300 flex justify-center">
        <div className="p-4 flex justify-between w-[70rem]">
        <Link href="/">Namegen</Link>
        <Link href="/about">About</Link>
        </div>
    </header>
}