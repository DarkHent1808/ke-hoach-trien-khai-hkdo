import React from "react";
import Header from "../../components/Header";
import HKDKnowBeforePage from "./Hkd_2";
import HKDFlowPage from "./Hkd_3";
import HKDAfterDonePage from "./Hkd_4";
import HKDFAQPage from "./Hkd_5";
import HKDReadyPage from "./Hkd_6";

const featureCards = [
  {
    icon: <StoreFrontIcon />,
    title: "Tự mở cửa hàng",
    desc: "Đăng ký nhanh chóng, tạo cửa hàng chỉ trong vài bước đơn giản.",
  },
  {
    icon: <TimerIcon />,
    title: "Chuỗi 1+10 phút",
    desc: "Hoàn tất toàn bộ quy trình chỉ 1+10 phút, nhanh gọn, không phức tạp.",
  },
  {
    icon: <QrStandIcon />,
    title: "Tự dán QR tại điểm bán",
    desc: "Tự dán QR tại điểm bán, khách quét là bạn đã hiện diện số.",
  },
];

export default function HKDHomePage({ children }) {
  return (
    <div className="hkd-bg">
      <style>{css}</style>

      <main className="hkd-page">
        <Header activeKey="ho-kinh-doanh" />

        <section className="hkd-screen-one" id="hkd-home">
          <section className="hkd-hero-copy">
            <div className="hkd-screen-pill">MÀN 1</div>
            <h1>Trang dành cho hộ kinh doanh</h1>
            <p>Tự mở cửa hàng, tự hoàn tất chuỗi 1+10 phút, tự dán QR tại điểm bán và bắt đầu hiện diện số.</p>
          </section>

          <HeroIllustration />

          <section className="hkd-feature-grid" aria-label="Các lợi ích chính cho hộ kinh doanh">
            {featureCards.map((card) => (
              <article className="hkd-feature-card" key={card.title}>
                <div className="hkd-feature-icon">{card.icon}</div>
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
              </article>
            ))}
          </section>

          <section className="hkd-action-row" aria-label="Hành động nhanh">
            <a href="#hkd-bat-dau" className="hkd-action-primary">
              <RocketIcon />
              <span>Bắt đầu ngay</span>
            </a>

            <a href="#hkd-video-huong-dan" className="hkd-action-secondary">
              <PlayIcon />
              <span>Xem video hướng dẫn</span>
            </a>
          </section>

          <section className="hkd-bottom-cta-wrap">
            <a href="#hkd-bat-dau" className="hkd-bottom-cta">
              <RocketIcon />
              <span>Bắt đầu ngay</span>
            </a>

            <footer className="hkd-footer-brand">
              <div className="hkd-footer-logo">HKDO</div>
              <span>HKDO - Nền tảng số cho hộ kinh doanh</span>
            </footer>
          </section>
        </section>

        <div className="hkd-embedded-sections">
        <HKDKnowBeforePage />
        <HKDFlowPage />
        <HKDAfterDonePage />
        <HKDFAQPage />
        <HKDReadyPage />
        </div>
      </main>
    </div>
  );
}

function HeroIllustration() {
  return (
    <section className="hkd-hero-art" aria-hidden="true">
      <div className="hkd-city city-left"><i /><i /><i /></div>
      <div className="hkd-city city-right"><i /><i /><i /></div>
      <div className="hkd-cloud cloud-a" />
      <div className="hkd-cloud cloud-b" />
      <div className="hkd-tree tree-left" />
      <div className="hkd-tree tree-right" />
      <div className="hkd-plant plant-left" />
      <div className="hkd-plant plant-right" />
      <div className="hkd-coffee-cup" />

      <div className="hkd-shop">
        <div className="hkd-shop-sign">CỬA HÀNG<br />HỘ KINH DOANH</div>
        <div className="hkd-awning" />
        <div className="hkd-door-sign">MỞ CỬA</div>
        <div className="hkd-shop-window">
          {Array.from({ length: 21 }).map((_, index) => <i key={index} />)}
        </div>
      </div>

      <div className="hkd-owner">
        <div className="hair" />
        <div className="face" />
        <div className="ear" />
        <div className="neck" />
        <div className="shirt" />
        <div className="apron" />
        <div className="arm-left" />
        <div className="arm-right" />
        <div className="phone" />
      </div>

      <div className="hkd-laptop">
        <div className="logo">HKDO</div>
      </div>

      <div className="hkd-qr-stand">
        <div className="qr-stand-head">THANH TOÁN<br />QUÉT MÃ QR</div>
        <QrGraphic />
        <strong>HKDO</strong>
      </div>
    </section>
  );
}

function QrGraphic() {
  return (
    <svg className="hkd-qr-graphic" viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="5" fill="#fff" />
      {[
        [10, 10], [18, 10], [26, 10], [10, 18], [26, 18], [10, 26], [18, 26], [26, 26],
        [64, 10], [72, 10], [80, 10], [64, 18], [80, 18], [64, 26], [72, 26], [80, 26],
        [10, 64], [18, 64], [26, 64], [10, 72], [26, 72], [10, 80], [18, 80], [26, 80],
        [42, 42], [50, 42], [66, 42], [42, 50], [58, 50], [74, 50], [50, 58], [66, 58],
        [42, 66], [58, 66], [82, 66], [50, 74], [66, 74], [74, 82], [42, 82], [58, 82],
      ].map(([x, y], index) => <rect key={index} x={x} y={y} width="7" height="7" fill="#0b1b3d" />)}
    </svg>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function StoreFrontIcon() {
  return <Svg><path d="M4 10h16l-2-5H6l-2 5Z" fill="currentColor" opacity=".22"/><path d="M5 10v10h14V10M8 20v-6h4v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><path d="M4 10c.5 2 2.5 2.7 4 1 1.3 1.8 3.7 1.8 5 0 1.3 1.8 3.7 1.8 5 0 1.5 1.7 3.5 1 4-1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>;
}
function TimerIcon() {
  return <Svg><path d="M9 2h6M12 6a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><path d="M12 10v4l3 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/><text x="12" y="14" textAnchor="middle" fontSize="5" fontWeight="900" fill="currentColor">1+10</text></Svg>;
}
function QrStandIcon() {
  return <Svg><path d="M5 3h14v15H5V3Z" stroke="currentColor" strokeWidth="2.3"/><path d="M8 6h3v3H8V6Zm5 0h3v3h-3V6ZM8 11h3v3H8v-3Zm5 2h3v3h-3v-3Z" fill="currentColor"/><path d="M8 21h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></Svg>;
}
function RocketIcon() {
  return <Svg><path d="M13 4c3.2 1 5.4 3.2 6.4 6.4l-5.6 5.6-4.4-4.4L13 4Z" fill="currentColor"/><path d="M8.8 12.2 5 13l-2 4 4-.8M11.8 15.2 11 19l-4 2 .8-4" fill="currentColor" opacity=".85"/><circle cx="15" cy="9" r="1.8" fill="#fff"/></Svg>;
}
function PlayIcon() {
  return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4"/><path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor"/></Svg>;
}

const css = `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  background: #dfeefa;
  color: #10175c;
}
a { color: inherit; text-decoration: none; }
svg { width: 1em; height: 1em; display: block; }

.hkd-bg {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at top, #ffffff 0, #e8f6ff 46%, #dceefa 100%);
}
.hkd-page {
  width: min(100%, 928px);
  min-height: 100vh;
  overflow: hidden;
  border-radius: 0 0 28px 28px;
  background:
    radial-gradient(circle at 50% 5%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 52%, #fbfdff 100%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.72) inset;
}
.hkd-screen-one {
  position: relative;
  min-height: 1518px;
  overflow: hidden;
  padding-top: 36px;
}
.hkd-hero-copy {
  position: relative;
  z-index: 8;
  width: 760px;
  margin: 0 auto;
  text-align: center;
}
.hkd-screen-pill {
  width: 127px;
  height: 44px;
  margin: 0 auto 17px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #fff;
  border: 2px solid #9fc8fb;
  box-shadow: 0 8px 17px rgba(31,101,178,.08);
  font-size: 24px;
  line-height: 1;
  font-weight: 950;
}
.hkd-hero-copy h1 {
  width: 720px;
  margin: 0 auto 20px;
  color: #075bd2;
  font-size: 76px;
  line-height: 1.05;
  font-weight: 950;
  letter-spacing: -3.6px;
}
.hkd-hero-copy p {
  width: 620px;
  margin: 0 auto;
  color: #343948;
  font-size: 26px;
  line-height: 1.36;
  font-weight: 500;
}

.hkd-hero-art {
  position: relative;
  z-index: 3;
  height: 574px;
  margin-top: 10px;
  overflow: hidden;
}
.hkd-hero-art::before {
  content: "";
  position: absolute;
  inset: 140px -22px 0;
  background: linear-gradient(180deg, rgba(206,238,255,.7), rgba(255,255,255,.15));
  border-radius: 50% 50% 0 0;
}
.hkd-city { position: absolute; display: flex; align-items: flex-end; gap: 10px; opacity: .42; }
.hkd-city.city-left { left: 35px; bottom: 126px; }
.hkd-city.city-right { right: 145px; bottom: 122px; }
.hkd-city i {
  width: 38px;
  height: 86px;
  border-radius: 9px 9px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.22), rgba(85,154,219,.06));
}
.hkd-city i:nth-child(2) { height: 132px; }
.hkd-city i:nth-child(3) { height: 104px; }
.hkd-cloud,
.hkd-cloud::before,
.hkd-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.94);
}
.hkd-cloud.cloud-a { right: 83px; top: 92px; width: 121px; height: 24px; }
.hkd-cloud.cloud-a::before { width: 50px; height: 50px; left: 22px; top: -27px; }
.hkd-cloud.cloud-a::after { width: 70px; height: 70px; left: 63px; top: -44px; }
.hkd-cloud.cloud-b { left: 120px; top: 169px; width: 93px; height: 17px; opacity: .86; }
.hkd-cloud.cloud-b::before { width: 36px; height: 36px; left: 15px; top: -18px; }
.hkd-cloud.cloud-b::after { width: 54px; height: 54px; left: 43px; top: -31px; }
.hkd-tree {
  position: absolute;
  width: 69px;
  height: 138px;
  border-radius: 44px 44px 18px 18px;
  background: linear-gradient(180deg, #a6dc9f, #53b276);
}
.hkd-tree.tree-left { left: 10px; bottom: 77px; }
.hkd-tree.tree-right { right: 28px; bottom: 58px; }
.hkd-tree::after {
  content: "";
  position: absolute;
  left: 33px;
  top: 52px;
  width: 5px;
  height: 76px;
  border-radius: 999px;
  background: #307a58;
}
.hkd-plant {
  position: absolute;
  z-index: 7;
  width: 80px;
  height: 92px;
  bottom: 28px;
}
.hkd-plant.plant-left { left: 32px; }
.hkd-plant.plant-right { right: 30px; }
.hkd-plant::before,
.hkd-plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 43px;
  height: 80px;
  border-radius: 40px 40px 0 0;
  background: linear-gradient(180deg, #92d88f, #3ea869);
}
.hkd-plant::before { left: 3px; transform: rotate(-28deg); }
.hkd-plant::after { right: 3px; transform: rotate(27deg); }
.hkd-coffee-cup {
  position: absolute;
  z-index: 8;
  left: 112px;
  bottom: 11px;
  width: 50px;
  height: 69px;
  border-radius: 8px 8px 19px 19px;
  background: linear-gradient(180deg, #222, #f0d4ad 14%, #fff 18%);
  box-shadow: 0 9px 14px rgba(0,0,0,.1);
}
.hkd-coffee-cup::before {
  content: "";
  position: absolute;
  left: -3px;
  right: -3px;
  top: 0;
  height: 15px;
  border-radius: 999px;
  background: #222;
}

.hkd-shop {
  position: absolute;
  z-index: 4;
  left: 39px;
  bottom: 29px;
  width: 342px;
  height: 410px;
  border-radius: 11px 11px 0 0;
  background: linear-gradient(180deg, #9bd1f7, #4e89be 30%, #254e7d 100%);
  box-shadow: 0 18px 30px rgba(24,74,139,.22);
}
.hkd-shop-sign {
  position: absolute;
  left: 4px;
  right: 4px;
  top: -1px;
  height: 90px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #2c6fbd, #1d559d);
  border: 5px solid rgba(255,255,255,.18);
  font-size: 27px;
  line-height: 1.08;
  font-weight: 950;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,50,120,.22);
}
.hkd-awning {
  position: absolute;
  left: 0;
  right: 0;
  top: 91px;
  height: 72px;
  background: repeating-linear-gradient(90deg, #11458d 0 43px, #315f9e 43px 86px);
  border-radius: 0 0 28px 28px;
}
.hkd-awning::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -22px;
  height: 38px;
  background: repeating-radial-gradient(circle at 43px 0, #315f9e 0 35px, #11458d 36px 70px);
  clip-path: inset(0 0 0 0 round 0 0 24px 24px);
}
.hkd-door-sign {
  position: absolute;
  z-index: 3;
  left: 72px;
  top: 232px;
  width: 117px;
  height: 67px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #1164c7;
  border: 4px solid #b3d9ff;
  font-size: 20px;
  font-weight: 950;
  box-shadow: 0 10px 18px rgba(0,40,110,.25);
}
.hkd-door-sign::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -35px;
  width: 2px;
  height: 35px;
  background: #93b7dd;
  transform: translateX(-50%);
}
.hkd-shop-window {
  position: absolute;
  left: 29px;
  right: 29px;
  bottom: 45px;
  height: 170px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 9px;
  padding: 20px;
  border-radius: 12px;
  background: rgba(27,36,49,.48);
}
.hkd-shop-window i {
  border-radius: 4px 4px 12px 12px;
  background: linear-gradient(180deg, #ffcd74, #8d6331);
}

.hkd-owner {
  position: absolute;
  z-index: 8;
  left: 330px;
  bottom: 10px;
  width: 302px;
  height: 533px;
}
.hkd-owner .hair {
  position: absolute;
  left: 75px;
  top: 0;
  width: 135px;
  height: 96px;
  border-radius: 82px 82px 30px 30px;
  background: #16191c;
  transform: rotate(-7deg);
}
.hkd-owner .face {
  position: absolute;
  left: 101px;
  top: 77px;
  width: 92px;
  height: 116px;
  border-radius: 47%;
  background: #ffbd8c;
}
.hkd-owner .ear {
  position: absolute;
  left: 194px;
  top: 124px;
  width: 23px;
  height: 31px;
  border-radius: 50%;
  background: #ffbd8c;
}
.hkd-owner .neck {
  position: absolute;
  left: 124px;
  top: 176px;
  width: 46px;
  height: 53px;
  background: #f4a979;
}
.hkd-owner .shirt {
  position: absolute;
  left: 42px;
  top: 205px;
  width: 220px;
  height: 248px;
  border-radius: 80px 80px 0 0;
  background: #fff;
}
.hkd-owner .apron {
  position: absolute;
  left: 78px;
  top: 228px;
  width: 142px;
  height: 279px;
  border-radius: 60px 60px 0 0;
  background: #102e5a;
}
.hkd-owner .apron::before,
.hkd-owner .apron::after {
  content: "";
  position: absolute;
  top: -31px;
  width: 18px;
  height: 105px;
  border-radius: 999px;
  background: #102e5a;
}
.hkd-owner .apron::before { left: 10px; transform: rotate(-18deg); }
.hkd-owner .apron::after { right: 10px; transform: rotate(18deg); }
.hkd-owner .arm-left {
  position: absolute;
  left: 10px;
  top: 303px;
  width: 158px;
  height: 37px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(20deg);
}
.hkd-owner .arm-right {
  position: absolute;
  right: 12px;
  top: 281px;
  width: 122px;
  height: 37px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(-68deg);
}
.hkd-owner .phone {
  position: absolute;
  right: 19px;
  top: 203px;
  width: 50px;
  height: 91px;
  border-radius: 10px;
  background: #1c222b;
  transform: rotate(-10deg);
  box-shadow: 0 8px 12px rgba(0,0,0,.22);
}
.hkd-owner .phone::after {
  content: "";
  position: absolute;
  left: 27px;
  top: 9px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #485463;
}
.hkd-laptop {
  position: absolute;
  z-index: 12;
  left: 385px;
  bottom: 10px;
  width: 277px;
  height: 147px;
  border-radius: 10px;
  background: linear-gradient(135deg, #cfd5dc, #7f8d9c);
  box-shadow: 0 18px 24px rgba(0,42,92,.22);
  transform: perspective(220px) rotateX(4deg) skewX(-4deg);
}
.hkd-laptop::after {
  content: "";
  position: absolute;
  left: -30px;
  right: -30px;
  bottom: -14px;
  height: 16px;
  border-radius: 50%;
  background: rgba(61,84,105,.35);
}
.hkd-laptop .logo {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 67px;
  height: 67px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #075bd2;
  font-size: 17px;
  font-weight: 850;
  transform: translate(-50%, -50%);
}
.hkd-qr-stand {
  position: absolute;
  z-index: 9;
  right: 64px;
  bottom: 18px;
  width: 143px;
  height: 229px;
  padding: 0 12px 12px;
  border-radius: 11px;
  text-align: center;
  background: #fff;
  border: 4px solid #4e91df;
  box-shadow: 0 14px 26px rgba(16,83,170,.18);
  transform: rotate(-2deg);
}
.hkd-qr-stand .qr-stand-head {
  height: 53px;
  margin: -4px -12px 10px;
  border-radius: 9px 9px 0 0;
  display: grid;
  place-items: center;
  color: #fff;
  background: #116bd5;
  font-size: 13px;
  line-height: 1.15;
  font-weight: 950;
}
.hkd-qr-stand .hkd-qr-graphic {
  width: 108px;
  height: 108px;
  margin: 0 auto 12px;
}
.hkd-qr-stand strong {
  color: #075bd2;
  font-size: 22px;
  line-height: 1;
  font-weight: 950;
}

.hkd-feature-grid {
  position: relative;
  z-index: 15;
  width: calc(100% - 96px);
  margin: -2px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 19px;
}
.hkd-feature-card {
  min-height: 331px;
  padding: 32px 26px 22px;
  border-radius: 16px;
  text-align: center;
  background: rgba(255,255,255,.96);
  border: 1px solid rgba(211,230,248,.9);
  box-shadow: 0 14px 30px rgba(31,101,178,.12);
}
.hkd-feature-icon {
  width: 127px;
  height: 127px;
  margin: 0 auto 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #eaf5ff;
  font-size: 88px;
}
.hkd-feature-card h2 {
  margin: 0 0 17px;
  color: #075bd2;
  font-size: 27px;
  line-height: 1.13;
  font-weight: 950;
}
.hkd-feature-card p {
  margin: 0;
  color: #333d52;
  font-size: 18px;
  line-height: 1.45;
  font-weight: 500;
}
.hkd-action-row {
  position: relative;
  z-index: 16;
  width: calc(100% - 96px);
  margin: 22px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 19px;
}
.hkd-action-primary,
.hkd-action-secondary {
  height: 84px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 76px 1fr;
  align-items: center;
  padding: 0 34px;
  font-size: 27px;
  line-height: 1;
  font-weight: 900;
  transition: transform .18s ease, filter .18s ease;
}
.hkd-action-primary:hover,
.hkd-action-secondary:hover,
.hkd-bottom-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.hkd-action-primary {
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 12px 22px rgba(0,76,180,.22);
}
.hkd-action-primary svg,
.hkd-action-secondary svg { width: 46px; height: 46px; justify-self: center; }
.hkd-action-secondary {
  color: #075bd2;
  background: #fff;
  border: 3px solid #075bd2;
  box-shadow: 0 10px 20px rgba(31,101,178,.08);
}
.hkd-bottom-cta-wrap {
  position: relative;
  z-index: 16;
  width: calc(100% - 34px);
  margin: 28px auto 0;
  min-height: 164px;
  padding: 16px 18px 0;
  border-radius: 20px;
  background: rgba(255,255,255,.96);
  box-shadow: 0 10px 25px rgba(31,101,178,.11);
}
.hkd-bottom-cta {
  height: 86px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 300px 1fr 270px;
  align-items: center;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 12px 22px rgba(0,76,180,.22);
  font-size: 33px;
  line-height: 1;
  font-weight: 950;
  transition: transform .18s ease, filter .18s ease;
}
.hkd-bottom-cta svg {
  width: 57px;
  height: 57px;
  justify-self: end;
  margin-right: 23px;
}
.hkd-bottom-cta span { justify-self: start; }
.hkd-footer-brand {
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #242b40;
}
.hkd-footer-logo {
  width: 54px;
  height: 54px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #075bd2;
  font-size: 16px;
  font-weight: 950;
}
.hkd-footer-brand span {
  font-size: 21px;
  line-height: 1;
  font-weight: 650;
}
.hkd-embedded-sections { position: relative; z-index: 1; }

@media (max-width: 820px) {
  .hkd-screen-one { min-height: 1370px; }
  .hkd-hero-copy { width: calc(100% - 40px); }
  .hkd-hero-copy h1 { width: 100%; font-size: clamp(48px, 10vw, 76px); }
  .hkd-hero-copy p { width: min(100%, 620px); font-size: 22px; }
  .hkd-hero-art { transform: scale(.86); transform-origin: top center; width: 116%; left: -8%; height: 510px; }
  .hkd-feature-grid,
  .hkd-action-row { width: calc(100% - 56px); }
  .hkd-bottom-cta { grid-template-columns: 1fr 1fr 1fr; }
}

@media (max-width: 520px) {
  .hkd-screen-one { min-height: 1240px; padding-top: 28px; }
  .hkd-screen-pill { width: 105px; height: 38px; font-size: 20px; }
  .hkd-hero-copy h1 { font-size: 40px; }
  .hkd-hero-copy p { font-size: 17px; }
  .hkd-hero-art { transform: scale(.65); width: 150%; left: -25%; height: 400px; }
  .hkd-feature-grid { grid-template-columns: 1fr; width: calc(100% - 34px); gap: 12px; }
  .hkd-feature-card { min-height: auto; display: grid; grid-template-columns: 64px 1fr; text-align: left; gap: 7px 15px; padding: 16px; }
  .hkd-feature-icon { grid-row: 1 / 3; width: 58px; height: 58px; font-size: 41px; margin: 0; }
  .hkd-feature-card h2 { margin: 0; font-size: 21px; }
  .hkd-feature-card p { font-size: 15px; }
  .hkd-action-row { width: calc(100% - 34px); grid-template-columns: 1fr; gap: 12px; }
  .hkd-action-primary,
  .hkd-action-secondary { height: 68px; font-size: 20px; grid-template-columns: 52px 1fr; }
  .hkd-action-primary svg,
  .hkd-action-secondary svg { width: 36px; height: 36px; }
  .hkd-bottom-cta-wrap { width: calc(100% - 24px); min-height: 135px; }
  .hkd-bottom-cta { height: 70px; grid-template-columns: 74px 1fr; font-size: 24px; }
  .hkd-bottom-cta svg { justify-self: center; margin: 0; width: 39px; height: 39px; }
  .hkd-footer-brand span { font-size: 15px; }
}
`;
