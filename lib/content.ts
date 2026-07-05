/* Central content data for the ShijimiWORKs single-page site. */

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Works", href: "#works" },
  { label: "Strength", href: "#strength" },
  { label: "Flow", href: "#flow" },
  { label: "Price", href: "#price" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  title: string;
  text: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Webサイト制作",
    text: "個人サイト、店舗サイト、サービス紹介サイト、ポートフォリオサイトなどを、目的に合わせて一から制作します。",
    icon: "browser",
  },
  {
    title: "LP制作",
    text: "商品・サービス・キャンペーン用のランディングページを、成果につながる構成で制作します。",
    icon: "layers",
  },
  {
    title: "フロントエンド実装",
    text: "HTML / CSS / JavaScript / React / Next.js を使った、デザインを忠実に再現する実装を行います。",
    icon: "code",
  },
  {
    title: "既存サイト改善",
    text: "レイアウト崩れ、スマホ対応、表示速度、UI調整など、いまあるサイトの気になる部分を改善します。",
    icon: "tune",
  },
  {
    title: "CMS・更新導線の整備",
    text: "記事、実績、お知らせなどを、公開後にご自身で更新しやすい構成に整えます。",
    icon: "refresh",
  },
  {
    title: "AI活用・作業効率化",
    text: "文章作成、構成整理、投稿管理、簡易自動化など、AIを活用した制作補助にも対応します。",
    icon: "spark",
  },
];

export type Work = {
  title: string;
  type: string;
  role: string;
  desc: string;
  tags: string[];
  theme: "green" | "beige" | "brown" | "grey" | "cream" | "sky";
};

export const works: Work[] = [
  {
    title: "個人事業主向けポートフォリオサイト",
    type: "Portfolio Site",
    role: "担当：構成・デザイン・実装",
    desc: "実績と人柄が伝わることを重視した、1ページ完結のポートフォリオ。問い合わせまで自然に導く導線を設計しました。",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    theme: "green",
  },
  {
    title: "カフェのサービス紹介サイト",
    type: "Shop Site",
    role: "担当：デザイン・実装",
    desc: "メニューや店内の雰囲気が伝わる写真中心の構成。スマホからの来店動機づくりを意識したレイアウトにしました。",
    tags: ["HTML", "CSS", "STUDIO"],
    theme: "beige",
  },
  {
    title: "ハンドメイド作家の作品紹介サイト",
    type: "Gallery Site",
    role: "担当：構成・実装",
    desc: "作品の世界観を邪魔しない余白設計と、作品数が増えても崩れないギャラリーグリッドを実装しました。",
    tags: ["Next.js", "TypeScript", "CSS"],
    theme: "brown",
  },
  {
    title: "小規模会社のコーポレートサイト",
    type: "Corporate Site",
    role: "担当：実装・CMS整備",
    desc: "会社情報・事業内容・採用をまとめたコーポレートサイト。お知らせを自社で更新できる仕組みを整えました。",
    tags: ["Next.js", "TypeScript", "WordPress"],
    theme: "grey",
  },
  {
    title: "note連携型メディアサイト",
    type: "Media Site",
    role: "担当：フロントエンド実装",
    desc: "noteの記事と連携し、読み物として楽しめるメディアサイト。読みやすい記事レイアウトを重視しました。",
    tags: ["React", "Next.js", "TypeScript"],
    theme: "cream",
  },
  {
    title: "Web制作会社からのフロントエンド実装案件",
    type: "Frontend Support",
    role: "担当：フロントエンド実装",
    desc: "デザインデータをもとに、レスポンシブ対応とアニメーションを含むフロントエンドをコンポーネント単位で実装しました。",
    tags: ["React", "TypeScript", "GitHub", "Figma"],
    theme: "sky",
  },
];

export type Strength = {
  title: string;
  text: string;
};

export const strengths: Strength[] = [
  {
    title: "小さく始められる制作",
    text: "1ページからでも、必要な部分だけでも。無理のない範囲からご一緒できます。",
  },
  {
    title: "相談しやすい進行",
    text: "専門用語をなるべく避け、状況にあわせて分かりやすくやりとりを進めます。",
  },
  {
    title: "スマホで見やすい設計",
    text: "スマートフォンでの見え方を前提に、どの画面でも読みやすい設計を行います。",
  },
  {
    title: "デザイン意図を崩さない実装",
    text: "余白や色、細部のニュアンスまで、デザインの意図を大切に再現します。",
  },
  {
    title: "公開後の運用まで考えた構成",
    text: "作って終わりではなく、更新や追加がしやすい構成を意識します。",
  },
  {
    title: "AIを活用したスピード感",
    text: "AIを制作の補助に取り入れ、品質を保ちながらスピード感を大切にします。",
  },
];

export type FlowStep = {
  title: string;
  text: string;
};

export const flowSteps: FlowStep[] = [
  {
    title: "お問い合わせ",
    text: "フォームからお気軽にご連絡ください。内容が固まっていなくても大丈夫です。",
  },
  {
    title: "ヒアリング",
    text: "目的やご要望、現在の状況をお聞きしながら、必要な形を一緒に整理します。",
  },
  {
    title: "構成・お見積り",
    text: "サイトの構成案と、内容に応じたお見積りをご提示します。",
  },
  {
    title: "デザイン確認",
    text: "方向性のすり合わせを行い、デザインのイメージを確認していただきます。",
  },
  {
    title: "実装",
    text: "確定したデザインをもとに、レスポンシブ対応を含めて実装します。",
  },
  {
    title: "確認・修正",
    text: "実際の表示をご確認いただき、細かな調整を行います。",
  },
  {
    title: "公開・納品",
    text: "公開作業を行い、納品します。公開後の運用についてもご相談いただけます。",
  },
];

export type Price = {
  name: string;
  desc: string;
  value: string;
};

export const prices: Price[] = [
  {
    name: "小規模サイト制作",
    desc: "数ページ程度のコンパクトなWebサイトやポートフォリオ。",
    value: "80,000円〜",
  },
  {
    name: "LP制作",
    desc: "商品・サービス・キャンペーン用の1ページ完結ページ。",
    value: "50,000円〜",
  },
  {
    name: "フロントエンド実装",
    desc: "デザインデータをもとにした実装・コーディング。",
    value: "30,000円〜",
  },
  {
    name: "既存サイト修正",
    desc: "レイアウト調整、スマホ対応、UI改善などの部分修正。",
    value: "10,000円〜",
  },
  {
    name: "継続サポート",
    desc: "更新代行や小さな修正を、月額で継続的にサポート。",
    value: "月額 15,000円〜",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "まだ内容が決まっていなくても相談できますか？",
    a: "もちろんです。「何から始めればいいか分からない」という段階からのご相談も歓迎しています。目的の整理からご一緒しますので、まずはお気軽にお問い合わせください。",
  },
  {
    q: "デザインだけある状態から実装できますか？",
    a: "はい、対応しています。Figmaなどのデザインデータをお預かりし、デザインの意図を崩さないよう忠実に実装します。レスポンシブ対応もあわせて行います。",
  },
  {
    q: "スマホ対応はできますか？",
    a: "すべての制作でスマートフォン表示を前提に設計しています。PC・タブレット・スマホそれぞれで見やすく操作しやすい状態に仕上げます。",
  },
  {
    q: "小さな修正だけでも依頼できますか？",
    a: "はい、1箇所の修正やちょっとした調整だけでもご依頼いただけます。内容に応じてお見積りしますので、まずはご相談ください。",
  },
  {
    q: "納期はどのくらいですか？",
    a: "内容やページ数によって変わりますが、LPなら2〜3週間、小規模サイトなら3〜5週間ほどが目安です。お急ぎの場合もまずはご相談ください。",
  },
  {
    q: "公開後の修正もお願いできますか？",
    a: "はい、公開後の修正や更新にも対応しています。都度のご依頼のほか、継続サポートとして月額でお引き受けすることも可能です。",
  },
];
