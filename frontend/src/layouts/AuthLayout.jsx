export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-black to-purple-900 px-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT – Brand Section */}
        <div className="hidden md:flex flex-col justify-center px-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <h1 className="text-4xl font-extrabold mb-4">
            Fast<span className="text-yellow-300">Prep</span> 🚀
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Prepare faster. Crack interviews smarter.
          </p>
          <ul className="space-y-3 text-blue-100">
            <li>✅ Company-wise DSA</li>
            <li>✅ Structured prep</li>
            <li>✅ Placement focused</li>
          </ul>
        </div>

        {/* RIGHT – Form Section */}
        <div className="bg-gray-900/90 backdrop-blur p-10 text-white">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-400 mb-8">{subtitle}</p>

          {children}
        </div>
      </div>
    </div>
  );
}
