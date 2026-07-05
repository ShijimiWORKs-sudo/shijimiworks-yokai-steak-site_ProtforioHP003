import { AboutIllustration } from "./illustrations/AboutIllustration";

const points = ["個人・小規模事業者向け", "制作会社のパートナーとして", "目的の整理からご一緒します"];

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about__grid">
        <div className="about__card">
          <AboutIllustration className="about__illust" />
        </div>
        <div className="about__body">
          <p className="eyebrow">About</p>
          <h2 className="section-title">ShijimiWORKsについて</h2>
          <div style={{ marginTop: 20 }}>
            <p>
              ShijimiWORKsは、個人・小規模事業者・制作会社向けに、Webサイト制作やフロントエンド実装を行う個人制作スタジオです。
            </p>
            <p>
              デザインの意図を大切にしながら、見やすく、使いやすく、更新しやすいWebサイトを制作します。
            </p>
            <p>
              「何から相談すればいいかわからない」という段階からでも、目的の整理、構成、実装、公開まで一緒に進めます。
            </p>
          </div>
          <ul className="about__points">
            {points.map((p) => (
              <li key={p} className="chip">
                <span aria-hidden="true">◍</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
