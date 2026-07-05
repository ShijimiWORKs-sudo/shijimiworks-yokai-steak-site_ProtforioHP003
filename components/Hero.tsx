import { HeroIllustration } from "./illustrations/HeroIllustration";
import { ArrowRightIcon } from "./Icons";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__brandline">Freelance Frontend Engineer</p>
          <p className="hero__logo">ShijimiWORKs</p>
          <h1 className="hero__title">
            小さく、速く、
            <br />
            <span>伝わるWebサイト</span>をつくります。
          </h1>
          <p className="hero__lead">
            Web制作・LP制作・フロントエンド実装・サイト改善を、
            プロジェクト単位でお手伝いします。
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#contact">
              制作を相談する
              <ArrowRightIcon width={18} height={18} />
            </a>
            <a className="btn btn-ghost" href="#works">
              実績を見る
            </a>
          </div>
          <p className="hero__note">
            <span aria-hidden="true">✦</span>
            まだ内容が決まっていない段階のご相談も歓迎しています。
          </p>
        </div>

        <div className="hero__figure">
          <HeroIllustration className="hero__illust" />
          <span className="hero__badge hero__badge--tl">
            <span className="dot" aria-hidden="true" />
            スマホ対応
          </span>
          <span className="hero__badge hero__badge--br">
            <span className="dot" aria-hidden="true" />
            プロジェクト単位で対応
          </span>
        </div>
      </div>
    </section>
  );
}
