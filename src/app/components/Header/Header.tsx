import '../../styles/globals.css'

export default function Header() {
    return <header className="bg-neutral-900 text-emerald-300 flex justify-center">
        <div className="p-4 flex justify-between w-[70rem]">
        <a href="/">Namegen</a>
        <a href="/about">About</a>
        </div>
    </header>
}