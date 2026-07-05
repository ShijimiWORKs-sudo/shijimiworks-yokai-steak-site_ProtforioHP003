"use client";

import { useState } from "react";
import { CheckIcon, MailIcon, ClockIcon } from "./Icons";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Front-end only: no data is sent anywhere.
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section className="section section--green" id="contact">
      <div className="container contact__grid">
        <div className="contact__aside">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">制作のご相談はこちら</h2>
          <p>
            まだ具体的に決まっていなくても大丈夫です。
            目的や現在の状況をお聞きしながら、必要な形を一緒に整理します。
          </p>
          <ul className="contact__list">
            <li>
              <MailIcon />
              フォームから24時間受け付けています
            </li>
            <li>
              <ClockIcon />
              通常2〜3営業日以内にご返信します
            </li>
            <li>
              <CheckIcon />
              ご相談・お見積りは無料です
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit} noValidate>
          {submitted && (
            <div className="form__success" role="status">
              <CheckIcon width={20} height={20} />
              送信ありがとうございます。内容を確認のうえ、折り返しご連絡します。
            </div>
          )}

          <div className="field">
            <label htmlFor="name">
              お名前<span className="req">必須</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="山田 花子"
            />
          </div>

          <div className="field">
            <label htmlFor="email">
              メールアドレス<span className="req">必須</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="example@mail.com"
            />
          </div>

          <div className="form__row">
            <div className="field">
              <label htmlFor="deadline">希望納期</label>
              <select id="deadline" name="deadline" defaultValue="">
                <option value="" disabled>
                  選択してください
                </option>
                <option>できるだけ早く</option>
                <option>1ヶ月以内</option>
                <option>2〜3ヶ月</option>
                <option>まだ未定</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="budget">予算感</label>
              <select id="budget" name="budget" defaultValue="">
                <option value="" disabled>
                  選択してください
                </option>
                <option>〜5万円</option>
                <option>5〜10万円</option>
                <option>10〜30万円</option>
                <option>30万円以上</option>
                <option>相談したい</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">
              相談内容<span className="req">必須</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="制作したいものや、現在の状況・お困りごとなどをお書きください。"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            この内容で送信する
          </button>
          <p className="form__hint">
            ※ こちらはポートフォリオ用のサンプルフォームです。実際の送信は行われません。
          </p>
        </form>
      </div>
    </section>
  );
}
