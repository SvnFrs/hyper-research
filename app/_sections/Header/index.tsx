"use client";

import Modal from "@/app/_components/reusable/modal";
import { useModal } from "@/app/_contexts/ModalContext";
import { useTheme } from "@/app/_contexts/ThemeContext";
import {
  IconBrain,
  IconLogin,
  IconMenu2,
  IconMoon,
  IconSun
} from "@tabler/icons-react";
import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  // const router = useRouter();
  // const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { modalType, isModalOpen, openModal, closeModal } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = theme === 'dark';


  return (
    <>
      <header className={`sticky top-0 z-50 flex flex-row justify-between py-4 px-3 sm:py-5 sm:px-5 items-center border-b transition-colors ${isDark ? 'border-[var(--border-color)] bg-[var(--background)]' : 'border-[var(--border-color)] bg-white'
        }`}>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className={`p-1.5 rounded ${isDark ? 'bg-blue-900' : 'bg-blue-100'}`}>
              <IconBrain
                size={20}
                className={isDark ? 'text-blue-300' : 'text-blue-700'}
                stroke={2}
              />
            </div>
            <div className="text-xl font-bold">Hyper Research</div>
          </Link>
        </div>



        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <IconMenu2 size={22} />
        </button>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          <button
            className={`p-2 rounded-md transition-colors ${isDark
              ? 'bg-[var(--muted-bg)] text-yellow-300 hover:bg-[#2a2a2a]'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            onClick={toggleTheme}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label="Toggle theme"
          >
            {isDark ? <IconSun size={20} stroke={1.5} /> : <IconMoon size={20} stroke={1.5} />}
          </button>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              className={`py-1.5 px-3 text-sm rounded-md transition-colors flex items-center gap-1.5 ${isDark
                ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                }`}
              onClick={() => openModal('login')}
            >
              <IconLogin size={16} stroke={1.5} />
              Login
            </button>
            <button
              className={`py-1.5 px-3 text-sm rounded-md transition-colors flex items-center gap-1.5 ${'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              onClick={() => openModal('signup')}
            >
              Sign up
            </button>
          </div>

          {/* User Profile Button */}
          {/* <button
            className={`p-2 rounded-md transition-colors ${isDark ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
              }`}
            title="User profile"
            aria-label="User profile"
          >
            <IconUser size={20} stroke={1.5} />
          </button> */}
        </div>
      </header>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden fixed z-40 inset-x-0 top-[61px] border-b shadow-lg ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'}`}>
          <div className="px-4 py-3">


            {/* Mobile action buttons */}
            <div className="flex items-center justify-between pt-3 border-t border-zinc-700">
              <button
                className={`p-2 rounded-md transition-colors ${isDark ? 'text-yellow-300' : 'text-zinc-800'}`}
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {isDark ? <IconSun size={20} stroke={1.5} /> : <IconMoon size={20} stroke={1.5} />}
              </button>

              <div className="flex gap-2">
                <button
                  className={`py-1.5 px-3 text-sm rounded-md transition-colors ${isDark
                    ? 'bg-zinc-800 text-zinc-200'
                    : 'bg-zinc-100 text-zinc-800'}`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal('login');
                  }}
                >
                  Login
                </button>
                <button
                  className={`py-1.5 px-3 text-sm rounded-md transition-colors bg-blue-600 text-white`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal('signup');
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <Modal
        opened={isModalOpen && modalType === 'login'}
        onClose={closeModal}
        className={`w-full max-w-md ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Log in to Hyper Research</h2>
            <button
              onClick={closeModal}
              className={`p-1 rounded-full hover:${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}
            >
              &times;
            </button>
          </div>

          <form className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-3 py-2 border rounded-md ${isDark
                  ? 'bg-zinc-800 border-zinc-700 text-white'
                  : 'bg-white border-zinc-300 text-black'
                  }`}
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className={`w-full px-3 py-2 border rounded-md ${isDark
                  ? 'bg-zinc-800 border-zinc-700 text-white'
                  : 'bg-white border-zinc-300 text-black'
                  }`}
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700`}
            >
              Log in
            </button>
          </form>

          <div className="text-center text-sm">
            <p className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>
              Don&apos;t have an account?{' '}
              <button
                className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                onClick={() => {
                  closeModal();
                  setTimeout(() => openModal('signup'), 100);
                }}
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </Modal>

      {/* Signup Modal */}
      <Modal
        opened={isModalOpen && modalType === 'signup'}
        onClose={closeModal}
        className={`w-full max-w-md ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Create an account</h2>
            <button
              onClick={closeModal}
              className={`p-1 rounded-full hover:${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>

          <form className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="signup-email"
                className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}
              >
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                className={`w-full px-3 py-2 border rounded-md ${isDark
                  ? 'bg-zinc-800 border-zinc-700 text-white'
                  : 'bg-white border-zinc-300 text-black'
                  }`}
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="signup-password"
                className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}
              >
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                className={`w-full px-3 py-2 border rounded-md ${isDark
                  ? 'bg-zinc-800 border-zinc-700 text-white'
                  : 'bg-white border-zinc-300 text-black'
                  }`}
                placeholder="••••••••"
                required
              />
              <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Minimum 8 characters with at least one number
              </p>
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                className={`w-full px-3 py-2 border rounded-md ${isDark
                  ? 'bg-zinc-800 border-zinc-700 text-white'
                  : 'bg-white border-zinc-300 text-black'
                  }`}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700"
              >
                Create account
              </button>
            </div>
          </form>

          <div className="text-center text-sm">
            <p className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>
              Already have an account?{' '}
              <button
                className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'} hover:underline`}
                onClick={() => {
                  closeModal();
                  setTimeout(() => openModal('login'), 100);
                }}
                type="button"
              >
                Log in
              </button>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
