import { strengths } from "@/lib/content";

export function Strength() {
  return (
    <section className="section section--green" id="strength">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">Strength</p>
          <h2 className="section-title">ShijimiWORKsが大切にしていること</h2>
        </div>

        <div className="strength__grid">
          {strengths.map((item, i) => (
            <article key={item.title} className="strength__item">
              <span className="strength__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="strength__title">{item.title}</h3>
                <p className="strength__text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
