import { works } from "@/lib/content";
import { WorkThumb } from "./illustrations/WorkThumb";

export function WorksGrid() {
  return (
    <section className="section" id="works">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">Works</p>
          <h2 className="section-title">制作実績</h2>
          <p className="section-lead">
            ポートフォリオ用に制作したサンプルです。ジャンルや担当範囲の一例としてご覧ください。
          </p>
        </div>

        <div className="grid grid--3">
          {works.map((work) => (
            <article key={work.title} className="card work">
              <div className="work__thumb" aria-hidden="true">
                <WorkThumb theme={work.theme} />
              </div>
              <div className="work__body">
                <span className="work__type">{work.type}</span>
                <h3 className="work__title">{work.title}</h3>
                <p className="work__role">{work.role}</p>
                <p className="work__desc">{work.desc}</p>
                <ul className="work__tags">
                  {work.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
