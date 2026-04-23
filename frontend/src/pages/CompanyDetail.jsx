


import { useParams, Link } from "react-router-dom";
import questions from "../data/questions";
import { useState, useEffect } from "react";

export default function CompanyDetail() {
  const { name } = useParams();

  const companyQuestions = questions[name] || [];

  const [completed, setCompleted] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("completed")) || [];
    setCompleted(saved);
  }, []);

  // Toggle done
  const toggleDone = (title) => {
    let updated;

    if (completed.includes(title)) {
      updated = completed.filter((q) => q !== title);
    } else {
      updated = [...completed, title];
    }

    setCompleted(updated);
    localStorage.setItem("completed", JSON.stringify(updated));
  };

  // 📊 PROGRESS CALCULATION
  const total = companyQuestions.length;
  const doneCount = completed.filter((q) =>
    companyQuestions.some((item) => item.title === q)
  ).length;

  const percentage = total ? (doneCount / total) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6">
      
      {/* BACK BUTTON */}
      <Link to="/companies" className="text-blue-400 hover:underline">
        ← Back to Companies
      </Link>

      {/* HEADING */}
      <h1 className="text-4xl font-bold mt-4 mb-6 animate-pulse">
        {name.toUpperCase()} DSA Questions 🚀
      </h1>

      {/* 📊 PROGRESS BAR */}
      <div className="mb-8">
        <div className="flex justify-between mb-2 text-sm text-gray-300">
          <span>🚀 Progress</span>
          <span>{doneCount} / {total} completed</span>
        </div>

        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      {/* QUESTIONS LIST */}
      <div className="space-y-5">
        {companyQuestions.map((q, index) => {
          const isDone = completed.includes(q.title);

          return (
            <div
              key={index}
              className={`p-5 rounded-2xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl ${
                isDone
                  ? "bg-green-700"
                  : "bg-gradient-to-r from-gray-800 to-gray-900"
              }`}
            >
              <div className="flex justify-between items-center">
                
                {/* QUESTION LINK */}
                <a
                  href={q.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl font-semibold hover:text-blue-400"
                >
                  {q.title}
                </a>

                {/* DONE BUTTON */}
                <button
                  onClick={() => toggleDone(q.title)}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    isDone
                      ? "bg-green-500"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {isDone ? "✔ Done" : "Mark Done"}
                </button>
              </div>

              {/* DIFFICULTY */}
              <p
                className={`mt-2 text-sm ${
                  q.difficulty === "Easy"
                    ? "text-green-400"
                    : q.difficulty === "Medium"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                Difficulty: {q.difficulty}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}