import '../../styles/globals.css'
import Link from 'next/link'
export default function Header() {
    return <header className="bg-neutral-900 text-emerald-300 flex justify-center shadow-md">
        <div className="p-4 flex justify-between lg:w-[1024px] w-full">
        <Link href="/">Namegen</Link>
        <Link href="/about">About</Link>
        </div>
    </header>
}