import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition";
  const linkActive = "text-white bg-blue-600";
  const linkIdle = "text-gray-300 hover:text-white hover:bg-gray-700";

  return (
    <div className="tech-bg text-gray-200 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-900/80 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-blue-400 font-bold text-xl glow-text">
                DEV<span className="text-white">PORTFOLIO</span>
              </span>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to="/" end
                    className={({isActive}) => `${linkBase} ${isActive?linkActive:linkIdle}`}>
                    首頁
                  </NavLink>
                  <NavLink to="/projects"
                    className={({isActive}) => `${linkBase} ${isActive?linkActive:linkIdle}`}>
                    作品集
                  </NavLink>
                  <NavLink to="/skills"
                    className={({isActive}) => `${linkBase} ${isActive?linkActive:linkIdle}`}>
                    技能
                  </NavLink>
                  <NavLink to="/about"
                    className={({isActive}) => `${linkBase} ${isActive?linkActive:linkIdle}`}>
                    關於我
                  </NavLink>
                  <NavLink to="/contact"
                    className={({isActive}) => `${linkBase} ${isActive?linkActive:linkIdle}`}>
                    聯繫
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <a href="/resume.pdf" download
                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                下載履歷
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="-mr-2 md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              onClick={() => setOpen(v => !v)}
              aria-label="打開主菜單"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden" onClick={() => setOpen(false)}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                {to:"/", label:"首頁"},
                {to:"/projects", label:"作品集"},
                {to:"/skills", label:"技能"},
                {to:"/about", label:"關於我"},
                {to:"/contact", label:"聯繫"},
              ].map(x=>(
                <NavLink key={x.to} to={x.to} end={x.to === "/"}
                  className={({isActive}) =>
                    `block ${linkBase} ${isActive?linkActive:linkIdle}`}>
                  {x.label}
                </NavLink>
              ))}
              <a href="/resume.pdf" className={`block ${linkBase} ${linkIdle}`}>
                下載履歷
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* 頁面內容 */}
      <div className="pt-16 pb-12">
        <Outlet />
      </div>
    </div>
  );
}
