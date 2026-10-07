import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import type { CSSProperties } from "react";
import logo from "../../assets/logo.png";
import footerBackground from "../../assets/footer.jpg";
import "./Footer.css";

const footerLinks = [
  { label: "Sự kiện", href: "#su-kien" },
  { label: "Trải nghiệm", href: "#cong-nghe" },
  { label: "Công nghệ", href: "#cong-nghe" },
  { label: "Đối tác", href: "#doi-tac" },
  { label: "Liên hệ", href: "#lien-he" },
];

const socialIcons = [
  { label: "Facebook", Icon: FaFacebookF },
  { label: "Instagram", Icon: FaInstagram },
  { label: "YouTube", Icon: FaYoutube },
  { label: "LinkedIn", Icon: FaLinkedinIn },
];

export function Footer() {
  return (
    <footer
      className="site-footer"
      id="lien-he"
      style={{ "--footer-background": `url(${footerBackground})` } as CSSProperties}
    >
      <div className="footer-overlay" />
      <div className="footer-content container">
        <img className="footer-logo" src={logo} alt="Gem Center" />

        <nav className="footer-navigation" aria-label="Điều hướng cuối trang">
          {footerLinks.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
        </nav>

        <div className="footer-socials" aria-label="Mạng xã hội Gem Center">
          {socialIcons.map(({ label, Icon }) => (
            <button className="social-icon" type="button" aria-label={label} key={label}>
              <Icon aria-hidden="true" />
            </button>
          ))}
        </div>

        <p className="copyright">© 2026 GEM Center. All rights reserved.</p>
      </div>
    </footer>
  );
}
