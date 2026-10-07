import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navigation.css";

const navigationItems = [
  { label: "Trang chủ", href: "#trang-chu" },
  { label: "Sự kiện", href: "#su-kien" },
  { label: "Công nghệ", href: "#cong-nghe" },
  { label: "Đối tác", href: "#doi-tac" },
  { label: "Liên hệ", href: "#lien-he" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navigation container" aria-label="Điều hướng chính">
        <a className="brand" href="#trang-chu" aria-label="Gem Center - Trang chủ">
          <img className="brand-logo" src={logo} alt="Gem Center" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Mở menu</span>
        </button>

        <div className={`navigation-links ${isMenuOpen ? "is-open" : ""}`} id="main-menu">
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="navigation-cta" href="#dang-ky" onClick={closeMenu}>
            Đăng ký
          </a>
        </div>
      </nav>
    </header>
  );
}
