import { FiMapPin } from "react-icons/fi";
import "./LocationSection.css";

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=GEM+Center%2C+08+Nguy%E1%BB%85n+B%E1%BB%89nh+Khi%C3%AAm%2C+Ph%C6%B0%E1%BB%9Dng+S%C3%A0i+G%C3%B2n%2C+TP.HCM";
const mapUrl = "https://www.google.com/maps?q=GEM+Center,+08+Nguy%E1%BB%85n+B%E1%BB%89nh+Khi%C3%AAm,+Ph%C6%B0%E1%BB%9Dng+S%C3%A0i+G%C3%B2n,+TP.HCM&output=embed";

export function LocationSection() {
  return (
    <section className="location-section" aria-labelledby="location-title">
      <div className="location-content container">
        <div className="map-frame">
          <iframe
            title="Bản đồ đến GEM Center"
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="location-copy">
          <FiMapPin aria-hidden="true" />
          <h2 id="location-title">Địa điểm</h2>
          <p><strong>GEM Center</strong><br />08 Nguyễn Bỉnh Khiêm, Phường Sài Gòn, TP.HCM</p>
          <a className="directions-button" href={directionsUrl} target="_blank" rel="noreferrer">
            Xem chỉ đường
          </a>
        </div>
      </div>
    </section>
  );
}
