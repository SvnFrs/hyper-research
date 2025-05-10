"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconNotes, IconBrain, IconSearch, IconRobot } from "@tabler/icons-react";
import LayoutWrapper from "./_sections/Wrapper";
import { useTheme } from "./_contexts/ThemeContext";

export default function Home() {
  const router = useRouter();
  const { theme } = useTheme();
  const [isCreating, setIsCreating] = useState(false);
  const isDark = theme === "dark";

  const handleCreateNote = async () => {
    setIsCreating(true);

    try {
      setTimeout(() => {
        // Redirect to a new note with a mock ID
        const newNoteId = `note-${Date.now()}`;
        router.push(`/notes/${newNoteId}`);
      }, 300);
    } catch (error) {
      console.error("Failed to create note:", error);
      setIsCreating(false);
    }
  };

  return (
    <LayoutWrapper showFooter={false}>
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Empty state with improved research-focused content */}
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
            <IconBrain size={32} className="text-blue-600 dark:text-blue-400" />
          </div>

          <h1 className="text-2xl md:text-3xl font-medium mb-3">Welcome to Hyper Research</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
            Create your first research note to start collecting sources and insights with our AI research agent.
          </p>

          <div className="max-w-lg mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg flex flex-col items-center
              ${isDark
                ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
              }`}>
              <IconNotes className="mb-2 text-blue-500" size={20} />
              <h3 className="text-sm font-medium">Create Note</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Start your research document</p>
            </div>

            <div className={`p-4 rounded-lg flex flex-col items-center
              ${isDark
                ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
              }`}>
              <IconSearch className="mb-2 text-blue-500" size={20} />
              <h3 className="text-sm font-medium">Add Sources</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Specify web sources and topics</p>
            </div>

            <div className={`p-4 rounded-lg flex flex-col items-center
              ${isDark
                ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
              }`}>
              <IconRobot className="mb-2 text-blue-500" size={20} />
              <h3 className="text-sm font-medium">Generate Insights</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Let AI analyze and synthesize</p>
            </div>
          </div>

          <button
            onClick={handleCreateNote}
            disabled={isCreating}
            className={`px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition flex items-center justify-center min-w-[180px] ${isCreating ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isCreating ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating research note...
              </>
            ) : (
              "Create new research note"
            )}
          </button>
        </div>
      </main>
    </LayoutWrapper>
  );
}
