import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await api.get("/code/history", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setReviews(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHistory();
  }, []);

  const languages = [...new Set(reviews.map((item) => item.language))];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-cyan-400">
        CodeSense AI Dashboard 🚀
      </h1>

      <p className="text-gray-300 mt-3 text-lg">
        Welcome back 👋 Analyze your code with AI.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-cyan-400 transition">
          <p className="text-gray-400">📊 Total Reviews</p>
          <h2 className="text-4xl font-bold text-cyan-400 mt-3">
            {reviews.length}
          </h2>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-green-400 transition">
          <p className="text-gray-400">🌍 Languages</p>
          <h2 className="text-4xl font-bold text-green-400 mt-3">
            {languages.length}
          </h2>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-yellow-400 transition">
          <p className="text-gray-400">🤖 AI Reviews</p>
          <h2 className="text-4xl font-bold text-yellow-400 mt-3">
            100%
          </h2>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-purple-400 transition">
          <p className="text-gray-400">⚡ Status</p>
          <h2 className="text-4xl font-bold text-purple-400 mt-3">
            Active
          </h2>
        </div>
      </div>

      <button
        onClick={() => navigate("/review")}
        className="mt-10 bg-cyan-400 hover:bg-cyan-300 transition duration-300 text-black px-8 py-4 rounded-xl font-bold shadow-lg"
      >
        🚀 Analyze New Code
      </button>

      <h2 className="text-3xl font-bold mt-12 mb-6">
        Recent Reviews
      </h2>

      {reviews.length === 0 ? (
        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
          <p className="text-gray-300">
            No reviews yet. Start analyzing your code!
          </p>
        </div>
      ) : (
        reviews.map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/review/${item._id}`)}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-6 mb-5 cursor-pointer hover:border-cyan-400 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <span className="bg-cyan-500/20 text-cyan-400 px-4 py-1 rounded-full text-sm font-semibold">
                {item.language.toUpperCase()}
              </span>

              <span className="text-gray-400 text-sm">
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </div>

            <p className="mt-5 text-gray-300 leading-7">
              {item.review.slice(0, 180)}...
            </p>

            <div className="mt-6 flex justify-end">
              <span className="text-cyan-400 font-semibold">
                View Details →
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;