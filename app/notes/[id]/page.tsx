"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconArrowLeft, IconShare, IconSearch, IconPlus, IconBrain, IconFileAnalytics } from "@tabler/icons-react";
import LayoutWrapper from "@/app/_sections/Wrapper";
import { useTheme } from "@/app/_contexts/ThemeContext";

export default function NotePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [title, setTitle] = useState("Untitled Research");
  const [sources, setSources] = useState<string[]>([]);
  const [newSource, setNewSource] = useState("");
  const [topics, setTopics] = useState<string[]>([]);
  const [newTopic, setNewTopic] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState("");

  const handleAddSource = () => {
    if (newSource.trim()) {
      setSources([...sources, newSource.trim()]);
      setNewSource("");
    }
  };

  const handleAddTopic = () => {
    if (newTopic.trim()) {
      setTopics([...topics, newTopic.trim()]);
      setNewTopic("");
    }
  };

  const handleStartResearch = () => {
    if (sources.length === 0 || topics.length === 0) {
      alert("Please add at least one source and one research topic");
      return;
    }

    setIsAnalyzing(true);

    // Simulate AI processing with timeout
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisResults("Analysis complete! This is where your AI-generated research results would appear.");
    }, 3000);
  };

  return (
    <LayoutWrapper showFooter={false} maxWidth="w-full">
      <div className="flex flex-col h-screen">

        <main className="flex-1 px-4 overflow-hidden flex flex-col">

          <div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden">
            {/* Sources section - 3/12 width */}
            <div className={`col-span-3 rounded-lg p-5 overflow-auto flex flex-col ${isDark ? 'bg-zinc-800/50 text-zinc-200' : 'bg-zinc-100 text-zinc-800'
              }`}>
              <h2 className="text-lg font-medium mb-4 flex items-center">
                <IconSearch size={20} className="mr-2 text-blue-500 dark:text-blue-400" />
                Sources
              </h2>

              <div className="mb-4">
                <div className="flex mb-2">
                  <input
                    type="text"
                    className={`flex-1 px-3 py-2 rounded-l-md text-sm border ${isDark ? 'bg-zinc-800 border-gray-700 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    placeholder="Add URL or source name"
                    value={newSource}
                    onChange={(e) => setNewSource(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddSource()}
                  />
                  <button
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md transition"
                    onClick={handleAddSource}
                  >
                    <IconPlus size={16} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Add websites, articles, or data sources for AI to research
                </p>
              </div>

              <div className="flex-1 overflow-auto">
                {sources.length > 0 ? (
                  <ul className="space-y-2">
                    {sources.map((source, index) => (
                      <li
                        key={index}
                        className={`p-2 rounded text-sm flex justify-between items-center ${isDark ? 'bg-zinc-700 text-zinc-100'
                          : 'bg-white text-zinc-800 border border-gray-200'
                          }`}
                      >
                        <span className="truncate">{source}</span>
                        <button
                          className="text-red-500 hover:text-red-700 dark:hover:text-red-300"
                          onClick={() => setSources(sources.filter((_, i) => i !== index))}
                        >
                          &times;
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
                    No sources added yet
                  </div>
                )}
              </div>
            </div>

            {/* Topics section - 6/12 width */}
            <div className={`col-span-6 rounded-lg p-5 overflow-auto flex flex-col ${isDark ? 'bg-zinc-800/50 text-zinc-200' : 'bg-zinc-100 text-zinc-800'
              }`}>
              <h2 className="text-lg font-medium mb-4 flex items-center">
                <IconBrain size={20} className="mr-2 text-blue-500 dark:text-blue-400" />
                Research Topics
              </h2>

              <div className="mb-4">
                <div className="flex mb-2">
                  <input
                    type="text"
                    className={`flex-1 px-3 py-2 rounded-l-md text-sm border ${isDark ? 'bg-zinc-800 border-gray-700 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    placeholder="Add topic or question"
                    value={newTopic}
                    onChange={(e) => setNewTopic(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTopic()}
                  />
                  <button
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md transition"
                    onClick={handleAddTopic}
                  >
                    <IconPlus size={16} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Specify research questions or topics for analysis
                </p>
              </div>

              <div className="flex-1 overflow-auto">
                {topics.length > 0 ? (
                  <ul className="space-y-2">
                    {topics.map((topic, index) => (
                      <li
                        key={index}
                        className={`p-2 rounded text-sm flex justify-between items-center ${isDark ? 'bg-zinc-700 text-zinc-100'
                          : 'bg-white text-zinc-800 border border-gray-200'
                          }`}
                      >
                        <span className="truncate">{topic}</span>
                        <button
                          className="text-red-500 hover:text-red-700 dark:hover:text-red-300"
                          onClick={() => setTopics(topics.filter((_, i) => i !== index))}
                        >
                          &times;
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
                    No topics added yet
                  </div>
                )}
              </div>

              {/* Action button */}
              <div className="pt-4 mt-auto">
                <button
                  onClick={handleStartResearch}
                  disabled={isAnalyzing || sources.length === 0 || topics.length === 0}
                  className={`w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition flex items-center justify-center ${(isAnalyzing || sources.length === 0 || topics.length === 0)
                    ? 'opacity-60 cursor-not-allowed'
                    : ''
                    }`}
                >
                  {isAnalyzing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      AI is analyzing data...
                    </>
                  ) : (
                    <>
                      <IconBrain size={20} className="mr-2" />
                      Start AI Research
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Analysis Results section - 3/12 width */}
            <div className={`col-span-3 rounded-lg p-5 overflow-auto flex flex-col ${isDark ? 'bg-zinc-800/50 text-zinc-200' : 'bg-zinc-100 text-zinc-800'
              }`}>
              <h2 className="text-lg font-medium mb-4 flex items-center">
                <IconFileAnalytics size={20} className="mr-2 text-blue-500 dark:text-blue-400" />
                Analysis Results
              </h2>

              <div className="flex-1 overflow-auto">
                {analysisResults ? (
                  <div className={`p-3 rounded text-sm ${isDark ? 'bg-zinc-700 text-zinc-100' : 'bg-white text-zinc-800 border border-gray-200'
                    }`}>
                    {analysisResults}
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm flex flex-col items-center">
                    <IconFileAnalytics size={40} className="mb-2 opacity-50" />
                    <p>Research results will appear here after analysis</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutWrapper>
  );
}
