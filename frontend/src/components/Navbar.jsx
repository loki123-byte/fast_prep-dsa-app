import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide navbar on login/signup pages
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("token"); // or "user"
    navigate("/login");
  };

  return (
    <nav className="w-full bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      {/* Left: Logo / App Name */}
      <h1
        onClick={() => navigate("/companies")}
        className="text-xl font-bold text-white cursor-pointer"
      >
        DSA<span className="text-blue-500">Practice</span>
      </h1>

      {/* Right: Logout */}
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg font-semibold
                   bg-red-600 hover:bg-red-700
                   transition active:scale-95"
      >
        Logout
      </button>
    </nav>
  );
}
