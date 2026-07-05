"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">よくあるご質問</h2>
        </div>

        <div className="faq">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-button-${i}`;
            return (
              <div key={item.q} className="faq__item">
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    id={btnId}
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__q-icon" aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="faq__a"
                  style={{ maxHeight: isOpen ? "260px" : "0" }}
                >
                  <p className="faq__a-inner">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
