import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <footer className="py-16 border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} Flare Studio — All rights reserved.</div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Twitter</a>
              <a href="#" className="hover:text-gray-900">Dribbble</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
