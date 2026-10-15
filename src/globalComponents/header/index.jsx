import { Menu, X, ShoppingBag, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const Header = ({ cart, menuOpen, setMenuOpen, goToProducts }) => {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#e9ddca] bg-[#fffaf1]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c7a66a] bg-[#f2e5ca] text-2xl">
              🌴
            </div>
            <div>
              <h1 className="font-bengali text-2xl font-extrabold tracking-tight text-[#4c2c19]">
                গুড়ের হাট
              </h1>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#92734d]">
                GURER HAAT
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-semibold text-[#4c2c19]">
              হোম
            </a>
            <a
              href="#categories"
              className="text-sm text-[#786958] transition hover:text-[#a16c27]"
            >
              ক্যাটাগরি
            </a>
            <a
              href="#products"
              className="text-sm text-[#786958] transition hover:text-[#a16c27]"
            >
              আমাদের পণ্য
            </a>
            <a
              href="#story"
              className="text-sm text-[#786958] transition hover:text-[#a16c27]"
            >
              আমাদের গল্প
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                document
                  .getElementById("cart")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="কার্ট দেখুন"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#e5d5bc] transition hover:bg-[#f4ead8]"
            >
              <ShoppingBag size={19} />
              {cart.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9b6429] px-1 text-[10px] text-white">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e5d5bc] md:hidden"
              aria-label="মেনু"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <button
              onClick={goToProducts}
              className="hidden items-center gap-2 rounded-full bg-[#29432d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f3523] sm:flex"
            >
              অর্ডার করুন <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#e9ddca] bg-[#fffaf1] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a onClick={() => setMenuOpen(false)} href="#">
                হোম
              </a>
              <a onClick={() => setMenuOpen(false)} href="#categories">
                ক্যাটাগরি
              </a>
              <a onClick={() => setMenuOpen(false)} href="#products">
                আমাদের পণ্য
              </a>
              <a onClick={() => setMenuOpen(false)} href="#story">
                আমাদের গল্প
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
