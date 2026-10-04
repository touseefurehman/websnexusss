import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebsNexus - Professional Website Builder',
  description: 'Create stunning, responsive websites in minutes with WebsNexus. No coding required.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">WebsNexus</div>
          <div className="space-x-6">
            <a href="/features" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600">Blog</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
          </div>
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Build Your Web Presence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create beautiful, responsive websites without any coding. WebsNexus makes it easy to launch your online presence.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold">
              Get Started Free
            </button>
          </div>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Website Hero Image</span>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose WebsNexus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Easy to Use', description: 'Drag-and-drop editor with no coding required' },
              { title: 'Responsive Design', description: 'Looks perfect on all devices automatically' },
              { title: 'SEO Optimized', description: 'Built-in SEO tools to rank higher in search' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2024 WebsNexus. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
