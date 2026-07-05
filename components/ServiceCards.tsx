import { services } from "@/lib/content";
import { ServiceIcon } from "./Icons";

export function ServiceCards() {
  return (
    <section className="section section--tint" id="service">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">Service</p>
          <h2 className="section-title">できること</h2>
          <p className="section-lead">
            Webサイトにまつわる制作から改善、運用のサポートまで。
            必要な部分だけのご依頼も承ります。
          </p>
        </div>

        <div className="grid grid--3">
          {services.map((service) => (
            <article key={service.title} className="card">
              <div className="service__icon" aria-hidden="true">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__text">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
