import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import partnerLogos from "../assets/partner-logos.svg";
import "./PartnerSection.css";

function useDesktopPartnerArtwork() {
  // The source SVG embeds many raster logos. Do not mount it on mobile devices,
  // where decoding all of them at once can freeze or crash the browser.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 981px)");
    const updateLayout = () => setIsDesktop(mediaQuery.matches);

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  return isDesktop;
}

export function PartnerSection() {
  const isDesktop = useDesktopPartnerArtwork();

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
        {isDesktop ? (
          <img
            className="partner-logos-artwork"
            src={partnerLogos}
            width={1530}
            height={570}
            alt="Đơn vị đồng tổ chức: Lá Trường Xuân. Đối tác đồng hành: The Bros cùng các đối tác trong chương trình."
            loading="lazy"
          />
        ) : (
          <div className="partner-mobile-list" aria-label="Danh sách đối tác">
            <p className="partner-mobile-heading">Đơn vị đồng tổ chức</p>
            <p className="partner-mobile-name">Đối tác</p>
            <p className="partner-mobile-heading">Đối tác đồng hành</p>
            <div className="partner-mobile-grid">
              {Array.from({ length: 8 }, (_, index) => (
                <span key={index}>Đối tác</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
