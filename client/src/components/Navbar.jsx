import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const linkClass = (path) =>
    `transition duration-300 ${
      location.pathname === path
        ? "text-cyan-400 font-semibold"
        : "text-gray-300 hover:text-cyan-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-700 shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <Link
          to="/dashboard"
          className="text-3xl font-extrabold text-cyan-400 tracking-wide hover:scale-105 transition"
        >
          🚀 CodeSense AI
        </Link>

        <div className="flex items-center gap-8">

          <Link
            to="/dashboard"
            className={linkClass("/dashboard")}
          >
            Dashboard
          </Link>

          <Link
            to="/review"
            className={linkClass("/review")}
          >
            Review Code
          </Link>

          <button
            onClick={logout}
            className="bg-cyan-400 hover:bg-cyan-300 transition text-black px-5 py-2 rounded-lg font-semibold shadow-md"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;