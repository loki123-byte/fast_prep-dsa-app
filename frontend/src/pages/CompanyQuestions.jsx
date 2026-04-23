import { useParams } from "react-router-dom";
import { questions } from "../data/questions";
import { useState, useEffect } from "react";

export default function CompanyQuestions() {
  const { company } = useParams();

  const companyQuestions = questions[company] || [];

  const [solved, setSolved] = useState([]);

  // Load solved questions from localStorage
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem(company)) || [];
    setSolved(saved);
  }, [company]);

  // Mark question as solved (TRUST SYSTEM)
  const markSolved = (id) => {
    if (solved.includes(id)) return;

    const updated = [...solved, id];
    setSolved(updated);
    localStorage.setItem(company, JSON.stringify(updated));
  };

  // Open LeetCode problem
  const solveOnLeetCode = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold capitalize mb-2">
          {company} DSA Questions
        </h1>
        <p className="text-gray-400 mb-6">
          Solve on LeetCode and mark as solved here
        </p>

        {/* Progress */}
        <div className="mb-8">
          <p className="text-sm text-gray-300">
            Progress: {solved.length} / {companyQuestions.length}
          </p>
          <div className="w-full h-2 bg-gray-700 rounded mt-2">
            <div
              className="h-2 bg-green-500 rounded"
              style={{
                width: `${
                  (solved.length / companyQuestions.length) * 100
                }%`
              }}
            />
          </div>
        </div>

        {/* Question List */}
        <div className="space-y-4">
          {companyQuestions.map((q) => (
            <div
              key={q.id}
              className="bg-gray-800 rounded-xl p-5
                         flex items-center justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">
                  {q.title}
                </h2>

                <span
                  className={`text-sm px-3 py-1 rounded-full mt-2 inline-block
                    ${
                      q.difficulty === "Easy"
                        ? "bg-green-600/20 text-green-400"
                        : q.difficulty === "Medium"
                        ? "bg-yellow-600/20 text-yellow-400"
                        : "bg-red-600/20 text-red-400"
                    }`}
                >
                  {q.difficulty}
                </span>
              </div>

              <div className="flex gap-3">
                {/* Solve */}
                <button
                  onClick={() => solveOnLeetCode(q.leetcode)}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
                >
                  Solve
                </button>

                {/* Mark Solved */}
                <button
                  onClick={() => markSolved(q.id)}
                  disabled={solved.includes(q.id)}
                  className={`px-4 py-2 rounded-lg
                    ${
                      solved.includes(q.id)
                        ? "bg-green-700 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                >
                  {solved.includes(q.id)
                    ? "Solved ✔"
                    : "Mark as Solved"}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
