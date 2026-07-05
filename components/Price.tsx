import { prices } from "@/lib/content";

export function Price() {
  return (
    <section className="section section--tint" id="price">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">Price</p>
          <h2 className="section-title">料金の目安</h2>
          <p className="section-lead">
            内容に応じた目安の金額です。ご予算にあわせた進め方もご相談いただけます。
          </p>
        </div>

        <div className="price__grid">
          {prices.map((price) => (
            <div key={price.name} className="price__item">
              <div>
                <p className="price__name">{price.name}</p>
                <p className="price__desc">{price.desc}</p>
              </div>
              <p className="price__value">{price.value}</p>
            </div>
          ))}
        </div>

        <p className="price__note">
          内容やページ数により変動します。まずはお気軽にご相談ください。
        </p>
      </div>
    </section>
  );
}
