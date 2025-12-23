import React from "react";

export type User = {
  username?: string;
  email?: string;
};

interface HeaderProps {
  isAuthenticated: boolean;
  user: User | null;
  logout: () => Promise<void>;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, user, logout }) => (
  <header className="bg-[#fdfaf3] w-full border-b border-transparent font-[Afacad]">
    <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-8">
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://static.crumb.pet/build/1.0.15/static/images/header-logo.svg"
            alt="Crumb Logo"
            className="h-10 w-auto"
          />
        </a>
        <nav className="flex items-center gap-8 font-[Afacad]">
          <div className="relative flex items-center">
            <span className="text-[18px] font-medium text-[#23201c] cursor-pointer flex items-center gap-1">
              Features
              <svg
                className="w-4 h-4 text-[#23201c]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <a
            href="https://crumb.pet/en/pricing"
            className="text-[18px] font-medium text-[#23201c]"
          >
            Pricing
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <span className="text-[18px] text-[#23201c] font-medium mr-2">
              {user?.username || user?.email}
            </span>
            <button
              onClick={logout}
              className="rounded-full border border-[#6a0934] px-8 py-2 text-[18px] font-semibold text-[#6a0934] bg-transparent hover:bg-[#f5e6ef] transition-colors"
            >
              Log Out
            </button>
          </>
        ) : (
          <a
            href="https://crumb.pet/en/login"
            className="rounded-full border border-[#6a0934] px-8 py-2 text-[18px] font-semibold text-[#6a0934] bg-transparent hover:bg-[#f5e6ef] transition-colors"
          >
            Log In
          </a>
        )}
        <a
          href="https://crumb.pet/en/order"
          className="rounded-full px-8 py-2 text-[18px] font-semibold text-white bg-[#6a0934] hover:bg-[#8a1150] transition-colors"
        >
          Get a free tag
        </a>
      </div>
    </div>
  </header>
);

export default Header;
