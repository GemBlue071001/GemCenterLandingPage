import "./TechnologySection.css";

const technologies = [
  "Bàn LED đa trải nghiệm",
  "Bàn LED vô cực",
  "Khăn bàn quang dẫn",
];

export function TechnologySection() {
  return (
    <section className="technology-section content-section container" id="cong-nghe" aria-labelledby="technology-title">
      <h2 id="technology-title">Trải nghiệm trong 01 ngày duy nhất</h2>
      <div className="technology-grid">
        {technologies.map((technology) => (
          <article className="technology-card" key={technology}>
            <div className="media-placeholder technology-media" aria-label={`Hình ảnh ${technology}`}>
              <span>Hình ảnh</span>
            </div>
            <h3>{technology}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
