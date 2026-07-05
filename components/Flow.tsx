import { flowSteps } from "@/lib/content";

export function Flow() {
  return (
    <section className="section" id="flow">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">Flow</p>
          <h2 className="section-title">ご依頼から納品までの流れ</h2>
          <p className="section-lead">
            はじめての方でも進めやすいよう、各ステップで確認しながら進行します。
          </p>
        </div>

        <ol className="flow">
          {flowSteps.map((step, i) => (
            <li key={step.title} className="flow__item">
              <span className="flow__step" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="flow__title">
                  <span className="visually-hidden">ステップ{i + 1}：</span>
                  {step.title}
                </h3>
                <p className="flow__text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
