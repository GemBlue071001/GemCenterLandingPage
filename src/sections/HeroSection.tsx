import futureBanquetArtwork from "../assets/FBanquet.png";
import { RegistrationForm } from "../components/form/RegistrationForm";
import { LuCalendarDays } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import "./HeroSection.css";

export function HeroSection() {
  return (
    <section className="hero" id="trang-chu" aria-labelledby="hero-title">
      <div className="hero-overlay" />
      <div className="hero-content container">
        <div className="hero-introduction">
          {/* <h1 className="sr-only" id="hero-title">Future Banquet Experience</h1> */}
          <div className="hero-title-artwork">
            <img src={futureBanquetArtwork} alt="Future Banquet Experience" />
          </div>

          <div className="hero-event-summary">
            <p>TRẢI NGHIỆM CÔNG NGHỆ</p>
            <p>KIẾN TẠO TƯƠNG LAI YẾN TIỆC</p>
          </div>

          <div className="hero-details">
            <p><span className="hero-detail-icon" aria-hidden="true"><LuCalendarDays /></span>09:00 - 16:00 | 20.10.2026</p>
            <p><span className="hero-detail-icon" aria-hidden="true"><FaLocationDot /></span>GEM Center<br />08 Nguyễn Bỉnh Khiêm, Phường Sài Gòn, TP.HCM</p>
          </div>

          <a className="outline-button" href="#su-kien">Xem thêm chương trình</a>
        </div>

        <RegistrationForm />
      </div>
    </section>
  );
}
