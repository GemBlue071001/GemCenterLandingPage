import futureBanquetArtwork from "../assets/FBanquet.png";
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
            <p><span aria-hidden="true">◉</span> 09:00 - 16:00 | 20.10.2026</p>
            <p><span aria-hidden="true">●</span> GEM Center<br />08 Nguyễn Bỉnh Khiêm, Phường Sài Gòn, TP.HCM</p>
          </div>

          <a className="outline-button" href="#su-kien">Xem thêm chương trình</a>
        </div>

        <form className="registration-card" id="dang-ky">
          <div className="registration-heading">
            <h2>Đăng ký tham dự</h2>
            <p>Trở thành một phần của hành trình tiên phong</p>
          </div>
          <div className="form-fields">
            <label>
              <span className="sr-only">Họ và tên</span>
              <input name="fullName" placeholder="Họ và tên *" autoComplete="name" required />
            </label>
            <label>
              <span className="sr-only">Công ty hoặc tổ chức</span>
              <input name="company" placeholder="Công ty / Tổ chức *" autoComplete="organization" required />
            </label>
            <label>
              <span className="sr-only">Chức danh</span>
              <input name="position" placeholder="Chức danh" autoComplete="organization-title" />
            </label>
            <label>
              <span className="sr-only">Email</span>
              <input name="email" type="email" placeholder="Email *" autoComplete="email" required />
            </label>
            <label>
              <span className="sr-only">Số điện thoại</span>
              <input name="phone" type="tel" placeholder="Số điện thoại *" autoComplete="tel" required />
            </label>
          </div>
          <button className="submit-button" type="submit">Đăng ký ngay</button>
        </form>
      </div>
    </section>
  );
}
