import "./EventSection.css";

export function EventSection() {
  return (
    <section className="event-section content-section container" id="su-kien" aria-labelledby="event-title">
      <div className="event-copy">
        <h2 id="event-title">Khám phá tương lai<br />của trải nghiệm yến tiệc đa giác quan</h2>
        <p>
          Khám phá hàng loạt giải pháp công nghệ biến bàn tiệc thành sản phẩm không thể thiếu
          trong trải nghiệm sự kiện quy mô, ứng dụng công nghệ tối tân lần đầu tiên xuất hiện tại Việt Nam:
        </p>
        <ul>
          <li>Bàn LED Đa Trải Nghiệm, Bàn LED Vô Cực, Khăn Trải Bàn Quang Dẫn</li>
          <li>Duy nhất trong 01 ngày duy nhất.</li>
        </ul>
        <p className="event-callout"><strong>Đăng ký tham dự ngay</strong> để trở thành một trong những vị khách đầu tiên chạm vào những trải nghiệm yến tiệc.</p>
      </div>

      <div className="media-placeholder event-media" aria-label="Hình ảnh sự kiện">
        <span>Hình ảnh</span>
      </div>
    </section>
  );
}
