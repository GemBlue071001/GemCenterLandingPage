import logo from "../assets/logo.png";
import partnerLogos from "../assets/partner-logos.svg";
import "./PartnerSection.css";

export function PartnerSection() {
  return (
    <section className="partner-section content-section container" id="doi-tac" aria-labelledby="partner-title">
      <div className="partner-introduction">
        <img className="partner-gem-logo" src={logo} alt="Gem Center" />
        <h2 id="partner-title">Inspire to illuminate</h2>
        <p>
          Với tinh thần tiên phong, GEM Center không ngừng kiến tạo những trải nghiệm mới cho ngành sự kiện, kết nối công nghệ, <br className="partner-copy-break" />
          sáng tạo và nghệ thuật để truyền cảm hứng và mở ra những khả năng mới cho tương lai.
        </p>
      </div>

      <div className="partner-groups">
        <img
          className="partner-logos-artwork"
          src={partnerLogos}
          width={1530}
          height={570}
          alt="Đơn vị đồng tổ chức: Lá Trường Xuân. Đối tác đồng hành: The Bros cùng các đối tác trong chương trình."
          loading="lazy"
        />
      </div>
    </section>
  );
}
