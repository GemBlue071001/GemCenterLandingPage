import logo from "../assets/logo.png";
import "./PartnerSection.css";

export function PartnerSection() {
  return (
    <section className="partner-section content-section container" id="doi-tac" aria-labelledby="partner-title">
      <div className="partner-introduction">
        <img className="partner-gem-logo" src={logo} alt="Gem Center" />
        <h2 id="partner-title">Inspire to illuminate</h2>
        <p>
          Với tinh thần tiên phong, GEM Center không ngừng kiến tạo những trải nghiệm mới
          cho ngành sự kiện, kết nối công nghệ, sáng tạo và nghệ thuật để truyền cảm hứng
          và mở ra những khả năng mới cho tương lai.
        </p>
      </div>

      <div className="partner-groups">
        <div className="partner-group">
          <p className="partner-label">Đơn vị đồng tổ chức</p>
          <p className="partner-placeholder">Đối tác</p>
        </div>

        <div className="partner-group">
          <p className="partner-label">Đối tác đồng hành</p>
          <div className="partner-placeholder-grid" aria-label="Danh sách đối tác sẽ cập nhật">
            {Array.from({ length: 8 }, (_, index) => (
              <span className="partner-placeholder" key={index}>Đối tác</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
