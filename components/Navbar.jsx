'use client'
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.total);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/shop?search=${search}`);
    setMenuOpen(false);
  };

  return (
    <nav className="relative bg-white shadow-sm">
      <div className="mx-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4 transition-all">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex items-center gap-3 text-4xl font-semibold text-slate-800 hover:text-green-600 transition-colors"
          >
            <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md">
              🌾
            </div>
            <div className="leading-tight">
              <div className="relative flex items-end">
                <span className="text-green-600">চাষী</span>&nbsp;ভাই
                <span className="text-green-600 text-5xl leading-none ml-1">.</span>
                <span className="absolute -top-2 -right-10 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold shadow-md">
                  PLUS
                </span>
              </div>
              <p className="text-[12px] font-medium text-green-500 mt-0.5">
                কৃষকের বিশ্বস্ত সঙ্গী
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600">
            <Link href="/">হোম</Link>
            <Link href="/shop">দোকান</Link>
            <Link href="/about-shop">আমাদের সম্পর্কে</Link>
            <Link href="/contract-us">যোগাযোগ</Link>

            <form
              onSubmit={handleSearch}
              className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full"
            >
              <Search size={18} className="text-slate-600" />
              <input
                className="w-full bg-transparent outline-none placeholder-slate-600"
                type="text"
                placeholder="সার্চ করুন"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
            </form>

            <Link href="/cart" className="relative flex items-center gap-2 text-slate-600">
              <ShoppingCart size={18} />
              পছন্দ
              <button className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 rounded-full">
                {cartCount}
              </button>
            </Link>

            <Link href="/login">
              <button className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-3 sm:hidden">
            {/* Cart Button */}
            <Link href="/cart" className="relative">
              <ShoppingCart size={22} className="text-slate-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 text-[10px] bg-slate-700 text-white rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <button className="w-full px-5 py-2 mt-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full">
                Login
              </button>
            </Link>
            {/* Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-slate-50 text-slate-700 px-6 pb-4 shadow-md">
          <div className="flex flex-col gap-3 mt-2">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              হোম
            </Link>
            <Link href="/shop" onClick={() => setMenuOpen(false)}>
              দোকান
            </Link>
            <Link href="/about-shop" onClick={() => setMenuOpen(false)}>
              আমাদের সম্পর্কে
            </Link>
            <Link href="/contract-us" onClick={() => setMenuOpen(false)}>
              যোগাযোগ
            </Link>

            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mt-2"
            >
              <Search size={18} className="text-slate-600" />
              <input
                className="w-full bg-transparent outline-none placeholder-slate-600"
                type="text"
                placeholder="সার্চ করুন"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
            </form>

            
          </div>
        </div>
      )}

      <hr className="border-gray-300" />
    </nav>
  );
};

export default Navbar;
