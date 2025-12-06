import React, { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import logo from '../../logo-ico.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const darkPref = localStorage.getItem('theme') === 'dark'
    setIsDark(darkPref)
    document.documentElement.classList.toggle('dark', darkPref)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDark
    setIsDark(newMode)
    document.documentElement.classList.toggle('dark', newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative grid grid-flow-col h-14 items-center justify-between gap-3 rounded-2xl dark:bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Logo */}
          <div className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <img src={logo} className="app-logo" alt="logo" width={38} />
          </div>

          {/* Desktop Nav */}
          <nav className="space-x-6 hidden md:flex">
            {['Home', 'Features', 'Portfolio', 'Blog', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          {/* <div className="hidden md:block">
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="m-menu">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {['Home', 'Features', 'Portfolio', 'Blog', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                {item}
              </a>
            ))}

            {/* Mobile Dark Mode Toggle */}
            {/* <button
              onClick={toggleDarkMode}
              className="mt-2 flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button> */}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
