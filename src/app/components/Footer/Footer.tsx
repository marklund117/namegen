import '../../styles/globals.css'
import Link from 'next/link'

export default function Footer() {
    return <footer className="bg-neutral-900 text-emerald-300 flex justify-center">
        <div className="p-4 flex justify-center w-[70rem]">
        <h3 className="text-neutral-100">Designed and developed by <Link className="text-emerald-300" href="https://github.com/marklund117/" target="_blank">Mark Lund</Link></h3>
        </div>
    </footer>
}