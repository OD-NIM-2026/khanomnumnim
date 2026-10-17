import type { ReactNode } from "react";

const LINE_URL = "https://line.me/R/ti/p/~0846448761";
const PHONE = "0846448761";
const PHONE_DISPLAY = "084-644-8761";
const FACEBOOK_URL = "https://www.facebook.com/search/top?q=%E0%B8%9B%E0%B8%B5%E0%B8%A3%E0%B8%8D%E0%B8%B2";

const features = [
  {
    title: "สีสันสดใส",
    text: "ขนมหลากสีน่ารัก เห็นแล้วเด็ก ๆ ยิ้มได้ทันที ทำให้เวลากินขนมสนุกขึ้นเยอะ",
    bg: "bg-blush",
    icon: <IconRainbow />,
  },
  {
    title: "เคี้ยวง่าย",
    text: "เนื้อนุ่มนิ่ม เคี้ยวง่าย ไม่แข็ง เหมาะกับฟันน้อย ๆ ของเด็กเล็ก",
    bg: "bg-mint",
    icon: <IconSmile />,
  },
  {
    title: "กลิ่นหอม อร่อย",
    text: "หอมกรุ่นทุกชิ้น รสชาติกลมกล่อม กินเพลินจนต้องขอเพิ่ม",
    bg: "bg-lemon",
    icon: <IconHeart />,
  },
];

const prices = [
  { name: "ขนมนุ่มนิ่ม 1 ชิ้น", note: "ลองชิมก่อนได้", price: "5", highlight: false, art: <ArtSingle /> },
  { name: "ชุด 10 ชิ้น", note: "แบ่งกินได้ทั้งอาทิตย์", price: "50", highlight: true, art: <ArtBag /> },
  { name: "ชุด 20 ชิ้น", note: "เหมาะกับงานวันเกิด แจกเพื่อน ๆ", price: "100", highlight: false, art: <ArtBox /> },
];

const candyColors = ["var(--pink)", "#f6c343", "#4cc59a", "#6cb6f5", "#b58cf0", "#ff9a6b"];

const faqs = [
  {
    q: "เด็กอายุเท่าไหร่กินได้บ้าง?",
    a: "เหมาะกับเด็กอายุ 2-12 ขวบ เนื้อขนมนุ่ม เคี้ยวง่าย แต่สำหรับเด็กเล็กแนะนำให้ผู้ปกครองดูแลขณะกินด้วยนะคะ",
  },
  {
    q: "สั่งซื้อได้อย่างไร?",
    a: "กดปุ่ม “ทักไลน์เลย” แล้วบอกจำนวนที่ต้องการได้เลยค่ะ หรือโทรหาเราก็ได้",
  },
  {
    q: "สั่งจำนวนมากสำหรับงานวันเกิด หรือโรงเรียนได้ไหม?",
    a: "ได้ค่ะ ทักไลน์มาบอกจำนวนและวันที่ต้องการล่วงหน้า เราจะเตรียมให้ทันแน่นอน",
  },
  {
    q: "ขนมเก็บได้นานแค่ไหน?",
    a: "แนะนำให้เก็บในที่แห้ง ไม่โดนแดด และทานให้หมดภายในวันที่ระบุบนห่อ เพื่อความอร่อยที่สุด",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* แถบด้านบน */}
      <header className="sticky top-0 z-30 border-b border-pink/15 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold text-pink-deep">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-pink text-white">
              <IconCandy className="h-5 w-5" />
            </span>
            ขนมนุ่มนิ่ม
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-line px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:brightness-95"
          >
            ทักไลน์เลย
          </a>
        </div>
      </header>

      <main>
        {/* ส่วนหัว */}
        <section className="relative">
          <div className="pointer-events-none absolute -left-20 -top-10 h-64 w-64 rounded-full bg-blush blur-2xl" />
          <div className="pointer-events-none absolute -right-16 top-40 h-56 w-56 rounded-full bg-lemon/70 blur-2xl" />
          <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-2 md:pb-24 md:pt-16">
            <div className="text-center md:text-left">
              <p className="mb-3 inline-block rounded-full bg-white px-4 py-1 text-sm text-pink-deep shadow-sm">
                ขนมขบเคี้ยวสำหรับเด็ก 2-12 ขวบ
              </p>
              <h1 className="font-display text-hero font-bold text-berry">
                ขนม<span className="text-pink">นุ่มนิ่ม</span>
              </h1>
              <p className="mt-4 text-lead text-ink">
                ขนมสีสดใส เคี้ยวง่าย หอมอร่อย
                <br className="hidden sm:block" /> ให้ทุกช่วงเวลาของหนู ๆ มีแต่รอยยิ้ม
              </p>
              <p className="mt-3 text-muted">
                เริ่มต้นเพียง <span className="font-display text-2xl font-bold text-pink-deep">ชิ้นละ 5 บาท</span>
              </p>
              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <LineButton large />
                <a
                  href="#price"
                  className="rounded-full border-2 border-pink/40 px-6 py-3 font-medium text-pink-deep transition hover:bg-blush"
                >
                  ดูราคา
                </a>
              </div>
            </div>
            <HeroArt />
          </div>
        </section>

        {/* จุดเด่น */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <SectionTitle kicker="ทำไมเด็ก ๆ ถึงชอบ" title="3 เหตุผลที่ต้องลอง" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className={`${f.bg} rounded-3xl p-6 text-center`}>
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-white text-pink-deep shadow-sm">
                    {f.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-berry">{f.title}</h3>
                  <p className="mt-2 text-ink/80">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ราคา */}
        <section id="price" className="scroll-mt-20 py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <SectionTitle kicker="ราคาน่ารัก จับต้องได้" title="ชิ้นละ 5 บาทเท่านั้น" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {prices.map((p) => (
                <div
                  key={p.name}
                  className={`candy-card relative rounded-3xl p-6 text-center ${
                    p.highlight ? "bg-pink text-white shadow-lg shadow-pink/30" : "bg-white shadow-sm"
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lemon px-3 py-0.5 text-sm font-medium text-berry">
                      ยอดนิยม
                    </span>
                  )}
                  <div
                    className={`mx-auto mb-4 grid aspect-[4/3] w-full max-w-56 place-items-center rounded-2xl ${
                      p.highlight ? "bg-white/20" : "bg-blush"
                    }`}
                  >
                    {p.art}
                  </div>
                  <h3 className={`font-display text-xl font-bold ${p.highlight ? "text-white" : "text-berry"}`}>
                    {p.name}
                  </h3>
                  <p className={`mt-1 text-sm ${p.highlight ? "text-white/90" : "text-muted"}`}>{p.note}</p>
                  <p className="mt-4 font-display text-5xl font-bold">
                    {p.price}
                    <span className="ml-1 text-lg font-semibold">บาท</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted">สั่งจำนวนมากสำหรับงานวันเกิดหรือโรงเรียน ทักไลน์สอบถามได้เลย</p>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <SectionTitle kicker="มีคำถาม?" title="คำถามที่พบบ่อย" />
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl bg-cream p-5 open:bg-blush">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-berry">
                    {f.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-pink-deep transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-ink/80">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-[2rem] bg-gradient-to-br from-pink to-pink-deep px-6 py-12 text-center text-white md:px-12">
              <h2 className="font-display text-title font-bold">อยากให้หนู ๆ ได้ลองแล้วใช่ไหม?</h2>
              <p className="mt-2 text-white/90">ทักมาคุยกันได้เลย ตอบไว เป็นกันเองค่ะ</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <ContactCard href={LINE_URL} label="LINE" value="0846448761" external icon={<IconChat />} />
                <ContactCard href={`tel:${PHONE}`} label="โทร" value={PHONE_DISPLAY} icon={<IconPhone />} />
                <ContactCard href={FACEBOOK_URL} label="Facebook" value="ปีรญา" external icon={<IconFacebook />} />
              </div>
              <div className="mt-6 grid gap-2 text-sm text-white/90 sm:grid-cols-2">
                <p>เวลาเปิด: ทุกวัน 9:00 - 18:00 น.</p>
                <p>ส่งได้ทั่วประเทศ / นัดรับได้</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ส่วนท้าย */}
      <footer className="border-t border-pink/15 py-8 pb-24 text-center text-sm text-muted md:pb-8">
        <p className="font-display text-lg font-bold text-pink-deep">ขนมนุ่มนิ่ม</p>
        <p>ขนมขบเคี้ยวสีสดใส เพื่อรอยยิ้มของเด็ก ๆ</p>
        <p className="mt-2">© 2026 ขนมนุ่มนิ่ม</p>
      </footer>

      {/* ปุ่มไลน์ลอย (มือถือ) */}
      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-line py-3.5 text-lg font-medium text-white shadow-lg shadow-black/15"
        >
          <IconChat className="h-6 w-6" />
          ทักไลน์เลย
        </a>
      </div>
    </div>
  );
}

function LineButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-line font-medium text-white shadow-lg shadow-line/30 transition hover:-translate-y-0.5 hover:brightness-95 ${
        large ? "px-8 py-3.5 text-lg" : "px-5 py-2"
      }`}
    >
      <IconChat className="h-6 w-6" />
      ทักไลน์เลย
    </a>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-pink-deep">{kicker}</p>
      <h2 className="mt-1 font-display text-title font-bold text-berry">{title}</h2>
    </div>
  );
}

function ContactCard({
  href,
  label,
  value,
  icon,
  external = false,
}: {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-left text-ink transition hover:-translate-y-0.5"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blush text-pink-deep">{icon}</span>
      <span className="min-w-0">
        <span className="block text-sm text-muted">{label}</span>
        <span className="block truncate font-medium text-berry">{value}</span>
      </span>
    </a>
  );
}

/* ===== ภาพประกอบและไอคอน (วาดเอง ไม่ใช้รูปจากเว็บอื่น) ===== */

function HeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <div className="absolute inset-4 rounded-full bg-blush" />
      <svg viewBox="0 0 300 300" className="relative h-full w-full" aria-hidden="true">
        {/* ลูกอมชมพูตรงกลาง */}
        <g transform="translate(150 150) rotate(-15)">
          <g className="wiggle">
            <path d="M-62 0 L-100 -30 L-96 0 L-100 30 Z" fill="var(--pink)" />
            <path d="M62 0 L100 -30 L96 0 L100 30 Z" fill="var(--pink)" />
            <circle r="64" fill="var(--pink)" />
            <path d="M-40 -48 Q0 0 -40 48" stroke="#fff" strokeWidth="10" fill="none" opacity=".6" strokeLinecap="round" />
            <path d="M0 -64 Q40 0 0 64" stroke="#fff" strokeWidth="10" fill="none" opacity=".6" strokeLinecap="round" />
            <g className="blink">
              <circle cx="-22" cy="-8" r="6" fill="var(--berry)" />
              <circle cx="22" cy="-8" r="6" fill="var(--berry)" />
            </g>
            <path d="M-14 14 Q0 28 14 14" stroke="var(--berry)" strokeWidth="5" fill="none" strokeLinecap="round" />
            <circle cx="-36" cy="10" r="7" fill="#fff" opacity=".5" />
            <circle cx="36" cy="10" r="7" fill="#fff" opacity=".5" />
          </g>
        </g>
        {/* ขนมชิ้นเล็กรอบ ๆ ลอยขึ้นลง */}
        <g className="float" style={{ animationDelay: "-0.5s" }}>
          <rect x="36" y="44" width="46" height="46" rx="14" fill="var(--mint)" transform="rotate(-12 59 67)" />
        </g>
        <g className="float" style={{ animationDelay: "-1.6s" }}>
          <rect x="222" y="212" width="44" height="44" rx="14" fill="var(--sky)" transform="rotate(14 244 234)" />
        </g>
        <g className="float" style={{ animationDelay: "-2.2s" }}>
          <circle cx="244" cy="62" r="24" fill="var(--lemon)" />
          <circle cx="244" cy="62" r="10" fill="#fff" opacity=".7" />
        </g>
        <g className="float" style={{ animationDelay: "-1s" }}>
          <circle cx="58" cy="236" r="20" fill="var(--lemon)" />
        </g>
        <path className="twinkle" d="M150 18 l6 12 13 2 -9 9 2 13 -12 -6 -12 6 2 -13 -9 -9 13 -2z" fill="var(--pink-deep)" opacity=".8" />
        <circle className="twinkle" style={{ animationDelay: "-0.7s" }} cx="34" cy="150" r="6" fill="var(--pink-deep)" opacity=".5" />
        <circle className="twinkle" style={{ animationDelay: "-1.4s" }} cx="270" cy="150" r="8" fill="var(--pink)" opacity=".5" />
      </svg>
    </div>
  );
}

/* ขนม 1 ชิ้น หน้ายิ้ม */
function CandyPiece({
  x,
  y,
  color,
  r = 0,
  s = 1,
  delay = 0,
}: {
  x: number;
  y: number;
  color: string;
  r?: number;
  s?: number;
  delay?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <g className="hop" style={{ animationDelay: `${delay}s` }}>
      <rect x="-22" y="-18" width="44" height="36" rx="14" fill={color} />
      <rect x="-15" y="-13" width="12" height="6" rx="3" fill="#fff" opacity=".55" />
      <g className="blink" style={{ animationDelay: `${delay * 2}s` }}>
        <circle cx="-7" cy="0" r="2.6" fill="var(--berry)" />
        <circle cx="7" cy="0" r="2.6" fill="var(--berry)" />
      </g>
      <path d="M-5 6 Q0 10 5 6" stroke="var(--berry)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </g>
    </g>
  );
}

function ArtSingle() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" role="img" aria-label="ขนมนุ่มนิ่ม 1 ชิ้น">
      <ellipse cx="80" cy="96" rx="36" ry="6" fill="var(--berry)" opacity=".12" />
      <CandyPiece x={80} y={62} color="var(--pink)" r={-8} s={1.7} />
      <path className="twinkle" d="M128 26 l3 6 6 1 -4.5 4 1 6 -5.5 -3 -5.5 3 1 -6 -4.5 -4 6 -1z" fill="#f6c343" />
      <circle className="twinkle" style={{ animationDelay: "-0.8s" }} cx="34" cy="34" r="4" fill="#4cc59a" />
      <circle className="twinkle" style={{ animationDelay: "-1.3s" }} cx="132" cy="88" r="3" fill="#6cb6f5" />
    </svg>
  );
}

function ArtBag() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" role="img" aria-label="ขนมนุ่มนิ่ม ชุด 10 ชิ้น">
      <ellipse cx="80" cy="108" rx="44" ry="6" fill="var(--berry)" opacity=".15" />
      {/* ถุงใส */}
      <path d="M44 30 h72 l6 72 a6 6 0 0 1 -6 6 H44 a6 6 0 0 1 -6 -6z" fill="#fff" opacity=".9" />
      <path d="M40 22 h80 v10 H40z" fill="var(--pink-deep)" />
      <path d="M68 22 q12 -14 24 0" stroke="var(--pink-deep)" strokeWidth="4" fill="none" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <CandyPiece key={i} x={58 + (i % 3) * 22} y={56 + Math.floor(i / 3) * 28} color={candyColors[i]} r={(i % 2 ? 1 : -1) * 10} s={0.5} delay={-i * 0.27} />
      ))}
      <rect x="54" y="38" width="52" height="10" rx="5" fill="var(--lemon)" />
      <text x="80" y="46" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--berry)">x10</text>
    </svg>
  );
}

function ArtBox() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" role="img" aria-label="ขนมนุ่มนิ่ม ชุด 20 ชิ้น">
      <ellipse cx="80" cy="110" rx="56" ry="6" fill="var(--berry)" opacity=".12" />
      {/* ขนมกองอยู่บนกล่อง */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <CandyPiece key={i} x={38 + i * 14} y={i % 2 ? 44 : 52} color={candyColors[i % candyColors.length]} r={(i % 2 ? 1 : -1) * 14} s={0.48} delay={-i * 0.23} />
      ))}
      <rect x="26" y="58" width="108" height="48" rx="10" fill="var(--pink)" />
      <rect x="26" y="58" width="108" height="12" rx="6" fill="var(--pink-deep)" />
      <rect x="74" y="58" width="12" height="48" fill="var(--lemon)" />
      <path d="M80 58 q-18 -16 -22 -4 q2 8 22 4 q18 -16 22 -4 q-2 8 -22 4" fill="#f6c343" />
      <text x="50" y="94" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">x20</text>
      <circle cx="112" cy="88" r="5" fill="#fff" opacity=".6" />
    </svg>
  );
}

type IconProps = { className?: string };

function IconCandy({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <path d="M7.5 12 3 8.5v7zM16.5 12 21 8.5v7z" />
    </svg>
  );
}

function IconRainbow({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M3 18a9 9 0 0 1 18 0" stroke="var(--pink)" />
      <path d="M6.5 18a5.5 5.5 0 0 1 11 0" stroke="#f6c343" />
      <path d="M10 18a2 2 0 0 1 4 0" stroke="#4cc59a" />
    </svg>
  );
}

function IconSmile({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14a5 5 0 0 0 8 0" />
      <path d="M9 9.5h.01M15 9.5h.01" strokeWidth="3" />
    </svg>
  );
}

function IconHeart({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3.3 5 6.8 5c2 0 3.4 1.1 5.2 3 1.8-1.9 3.2-3 5.2-3 3.5 0 5.6 3.6 4.3 6.8C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

function IconChat({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6C21.4 14.3 22 12.7 22 11c0-4.4-4.5-8-10-8z" />
    </svg>
  );
}

function IconPhone({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
    </svg>
  );
}

function IconFacebook({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z" />
    </svg>
  );
}
