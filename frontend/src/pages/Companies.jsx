import { useNavigate } from "react-router-dom";

const companies = [
  { name: "Google", logo: "/company-logos/google.png" },
  { name: "Amazon", logo: "/company-logos/amazon.png" },
  { name: "Microsoft", logo: "/company-logos/microsoft.png" },
  { name: "Meta", logo: "/company-logos/meta.png" },
  { name: "Apple", logo: "/company-logos/apple.png" },
  { name: "Netflix", logo: "/company-logos/netflix.png" },
];

export default function Companies() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative text-white">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]"></div>

      <div className="relative px-6 py-12">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-2">
          Companies 🚀
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Select a company to practice DSA questions
        </p>

        {/* Grid wrapper */}
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {companies.map((company) => (
              <div
                key={company.name}
                className="bg-gradient-to-br from-gray-800 to-gray-900
                           rounded-2xl p-6 shadow-lg
                           hover:shadow-blue-500/20
                           hover:-translate-y-2 hover:scale-[1.02]
                           transition-all duration-300"
              >
                {/* Logo */}
                <div className="h-24 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-14 max-w-[120px] object-contain"
                  />
                </div>

                {/* Company name */}
                <h2 className="text-xl font-semibold text-center mt-4">
                  {company.name}
                </h2>

                {/* Button */}
                <button
                  onClick={() =>
                    navigate(`/companies/${company.name.toLowerCase()}`)
                  }
                  className="mt-6 w-full py-2 rounded-lg font-semibold
                             bg-gradient-to-r from-blue-600 to-blue-500
                             hover:from-blue-500 hover:to-blue-600
                             active:scale-95 transition"
                >
                  Practice DSA →
                </button>
              </div>
            ))}
          </div>

          {/* Footer filler */}
          <p className="text-center text-gray-500 mt-20">
            More companies coming soon 🚧
          </p>
        </div>
      </div>
    </div>
  );
}
