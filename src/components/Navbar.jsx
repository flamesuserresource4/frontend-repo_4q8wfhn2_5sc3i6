import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg">Flare Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#services" className="hover:text-gray-900 transition">Services</a>
            <a href="#work" className="hover:text-gray-900 transition">Work</a>
            <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex h-9 items-center rounded-lg px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 border border-gray-200">Talk to us</a>
            <a href="#pricing" className="inline-flex h-9 items-center rounded-lg px-4 text-sm font-medium text-white bg-gray-900 hover:bg-black">Get started</a>
          </div>
        </div>
      </div>
    </header>
  );
}
