import React from "react";
import Header from "../../components/Header";
import EffectReadyPage from "./Effect_2";
import EffectDeployDayPage from "./Effect_3";
import EffectMaintainPage from "./Effect_4";
import EffectFaqPage from "./Effect_5";
import EffectFinalPage from "./Effect_6";

const capabilityPills = [
  { icon: <ShieldCheckIcon />, label: "Readiness" },
  { icon: <QrIcon />, label: "QR" },
  { icon: <ChartBarsIcon />, label: "Dữ liệu" },
];

const featureCards = [
  {
    icon: <TrainingIcon />,
    title: "Đào tạo & hỗ trợ",
    desc: "Đào tạo lực lượng hỗ trợ và tài liệu hướng dẫn cập nhật liên tục.",
  },
  {
    icon: <QrHandoverIcon />,
    title: "Bàn giao QR",
    desc: "Quản lý, xác nhận bàn giao và theo dõi tình trạng theo thời gian thực.",
  },
  {
    icon: <HeadsetIcon />,
    title: "Duy trì & hỗ trợ",
    desc: "Hỗ trợ kỹ thuật, xử lý vấn đề và duy trì hệ thống ổn định.",
  },
];

export default function EffectHomePage({ children }) {
  return (
    <div className="effect-bg">
      <style>{css}</style>

      <main className="effect-page">
        <Header activeKey="effect" />

        <section id="effect-home" className="effect-screen-one">
          <section className="effect-hero-copy">
            <div className="effect-screen-pill">MÀN 1</div>
            <h1>Trang vận hành của EFFECT</h1>
            <p>Quản lý kiểm tra hệ thống, đào tạo lực lượng hỗ trợ, bàn giao QR, theo dõi dữ liệu và duy trì sau phát động.</p>
          </section>

          <section className="effect-capability-row" aria-label="Năng lực vận hành chính">
            {capabilityPills.map((pill) => (
              <div className="effect-capability-pill" key={pill.label}>
                {pill.icon}
                <span>{pill.label}</span>
              </div>
            ))}
          </section>

          <HeroDashboard />

          <section className="effect-feature-grid" aria-label="Các nhiệm vụ chính của EFFECT">
            {featureCards.map((card) => (
              <article className="effect-feature-card" key={card.title}>
                <div className="effect-feature-visual">{card.icon}</div>
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
              </article>
            ))}
          </section>

          <section className="effect-message-strip" aria-label="Thông điệp vận hành">
            <ShieldLeafIcon />
            <div>
              <strong>Vận hành chủ động – Dữ liệu minh bạch – Hỗ trợ kịp thời</strong>
              <span>Cùng EFFECT đảm bảo chuyển đổi số hiệu quả và bền vững.</span>
            </div>
          </section>

          <a href="#effect-trung-tam-van-hanh" className="effect-main-cta">
            <RocketIcon />
            <span>Vào trung tâm vận hành</span>
          </a>
        </section>

        <div className="effect-embedded-sections">
        <EffectReadyPage />
        <EffectDeployDayPage />
        <EffectMaintainPage />
        <EffectFaqPage />
        <EffectFinalPage />
        </div>
      </main>
    </div>
  );
}

function HeroDashboard() {
  return (
    <section className="effect-hero-area" aria-label="Minh họa trung tâm vận hành EFFECT">
      <div className="effect-city city-left"><i /><i /><i /></div>
      <div className="effect-city city-right"><i /><i /><i /></div>
      <div className="effect-cloud cloud-a" />
      <div className="effect-cloud cloud-b" />
      

      <section className="effect-dashboard-card">
        <div className="effect-dashboard-title">
          <ShieldMiniIcon />
          <span>EFFECT OPERATIONS CENTER</span>
        </div>

        <div className="effect-dashboard-grid">
          <article className="effect-widget readiness">
            <h3>KIỂM TRA HỆ THỐNG</h3>
            <div className="readiness-body">
              <div className="readiness-ring"><span>92%</span><small>Sẵn sàng</small></div>
              <ul>
                {['Hạ tầng', 'Kết nối', 'Thiết bị', 'Quy trình', 'Nhân sự'].map((item) => (
                  <li key={item}><CheckDotIcon /> <span>{item}</span><i /></li>
                ))}
              </ul>
            </div>
          </article>

          <article className="effect-widget overview">
            <h3>TỔNG QUAN</h3>
            <strong>12.458</strong>
            <small>Hộ kinh doanh</small>
            <b>98%</b>
            <small>Đã bàn giao QR</small>
            <MiniLineChart />
          </article>

          <article className="effect-widget qr-handover">
            <h3>BÀN GIAO QR</h3>
            <div className="qr-stats">
              <QrIcon />
              <div><strong>12.180</strong><span>Đã bàn giao</span></div>
              <div><strong>278</strong><span>Chưa bàn giao</span></div>
            </div>
            <div className="qr-stack"><QrGraphic /></div>
          </article>

          <article className="effect-widget data-track">
            <h3>DỮ LIỆU & THEO DÕI</h3>
            <MiniBarChart />
            <ul>
              <li><CheckDotIcon /> Giao dịch</li>
              <li><CheckDotIcon /> Doanh thu</li>
              <li><CheckDotIcon /> Tăng trưởng</li>
            </ul>
            <small>Cập nhật: 10:30 25/05</small>
          </article>
        </div>
      </section>

      <div className="effect-operator">
        <div className="hair" />
        <div className="face" />
        <div className="shirt" />
        <div className="logo">EFFECT</div>
        <div className="arm-left" />
        <div className="arm-right" />
        <div className="laptop"><ShieldMiniIcon /></div>
      </div>
    </section>
  );
}

function QrGraphic() {
  return (
    <svg className="effect-qr-graphic" viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="5" fill="#fff" />
      {[
        [10,10],[18,10],[26,10],[10,18],[26,18],[10,26],[18,26],[26,26],
        [64,10],[72,10],[80,10],[64,18],[80,18],[64,26],[72,26],[80,26],
        [10,64],[18,64],[26,64],[10,72],[26,72],[10,80],[18,80],[26,80],
        [42,42],[50,42],[66,42],[42,50],[58,50],[74,50],[50,58],[66,58],
        [42,66],[58,66],[82,66],[50,74],[66,74],[74,82],[42,82],[58,82],
      ].map(([x, y], index) => <rect key={index} x={x} y={y} width="7" height="7" fill="#0b1b3d" />)}
    </svg>
  );
}

function MiniLineChart() {
  return (
    <svg className="effect-mini-line" viewBox="0 0 180 95" fill="none">
      <path d="M7 74C25 65 39 78 57 60C74 42 92 57 108 30C124 4 143 50 173 21" stroke="#227be8" strokeWidth="4" strokeLinecap="round" />
      <path d="M7 74C25 65 39 78 57 60C74 42 92 57 108 30C124 4 143 50 173 21V95H7V74Z" fill="url(#effectLineFill)" />
      <defs><linearGradient id="effectLineFill" x1="90" y1="21" x2="90" y2="95"><stop stopColor="#227be8" stopOpacity=".2"/><stop offset="1" stopColor="#227be8" stopOpacity="0"/></linearGradient></defs>
    </svg>
  );
}

function MiniBarChart() {
  const bars = [28, 39, 34, 52, 67, 83];
  return (
    <svg className="effect-mini-bars" viewBox="0 0 180 100" fill="none">
      {bars.map((height, index) => (
        <rect key={index} x={14 + index * 25} y={92 - height} width="16" height={height} rx="3" fill="url(#effectBarFill)" />
      ))}
      <path d="M13 82 38 62 63 70 88 47 113 53 151 21" stroke="#1077e7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <defs><linearGradient id="effectBarFill" x1="0" y1="0" x2="0" y2="100"><stop stopColor="#1d84ef"/><stop offset="1" stopColor="#23b6a9"/></linearGradient></defs>
    </svg>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ShieldCheckIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="m8.5 12 2.2 2.2 4.8-5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function QrIcon() { return <Svg><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function ChartBarsIcon() { return <Svg><path d="M5 19V10M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round"/><path d="M3 21h18" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function TrainingIcon() { return <Svg viewBox="0 0 80 80"><rect x="8" y="10" width="64" height="39" rx="8" fill="#eaf5ff"/><path d="M16 28h26M16 38h18" stroke="#075bd2" strokeWidth="5" strokeLinecap="round"/><circle cx="25" cy="58" r="9" fill="#075bd2"/><circle cx="49" cy="58" r="9" fill="#15b8ad"/><circle cx="61" cy="53" r="8" fill="#075bd2"/><path d="M12 72c2-10 9-15 21-15s19 5 21 15" fill="#075bd2" opacity=".85"/><path d="M38 72c2-10 9-15 21-15 8 0 14 4 17 12" fill="#15b8ad" opacity=".85"/></Svg>; }
function QrHandoverIcon() { return <Svg viewBox="0 0 80 80"><path d="M11 44c12 1 18 6 28 12l8-16c-10-5-19-8-33-9" fill="#ffbd8c"/><rect x="34" y="16" width="28" height="38" rx="5" fill="#fff" stroke="#075bd2" strokeWidth="4"/><path d="M40 23h6v6h-6v-6Zm10 0h6v6h-6v-6ZM40 34h6v6h-6v-6Zm10 6h6v6h-6v-6Z" fill="#075bd2"/><path d="M8 36h13v25H8z" fill="#075bd2"/></Svg>; }
function HeadsetIcon() { return <Svg><path d="M5 13v-1a7 7 0 0 1 14 0v1" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><rect x="3" y="12" width="5" height="7" rx="2" fill="currentColor"/><rect x="16" y="12" width="5" height="7" rx="2" fill="currentColor"/><path d="M18 19c-.7 2-2.5 3-5.2 3H11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></Svg>; }
function ShieldLeafIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="M9 13c3.8-.2 6.3-2 7.5-5.5C11.5 8 9 10 9 13Zm0 0c.5 2.3 2 3.7 4.5 4" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function RocketIcon() { return <Svg><path d="M13 4c3.2 1 5.4 3.2 6.4 6.4l-5.6 5.6-4.4-4.4L13 4Z" fill="currentColor"/><path d="M8.8 12.2 5 13l-2 4 4-.8M11.8 15.2 11 19l-4 2 .8-4" fill="currentColor" opacity=".85"/><circle cx="15" cy="9" r="1.8" fill="#fff"/></Svg>; }
function ShieldMiniIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="m9 12 2 2 4-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function CheckDotIcon() { return <Svg><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="m8 12 2.3 2.3L16 8.7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }

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

.effect-bg {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at top, #ffffff 0, #e8f6ff 46%, #dceefa 100%);
}
.effect-page {
  width: min(100%, 928px);
  min-height: 100vh;
  overflow: hidden;
  border-radius: 0 0 28px 28px;
  background: radial-gradient(circle at 50% 5%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%), linear-gradient(180deg, #fbfdff 0%, #eef8ff 52%, #fbfdff 100%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.72) inset;
}
.effect-screen-one {
  position: relative;
  min-height: 1410px;
  overflow: hidden;
  padding-top: 36px;
}
.effect-hero-copy {
  position: relative;
  z-index: 8;
  width: 760px;
  margin: 0 auto;
  text-align: center;
}
.effect-screen-pill {
  width: 127px;
  height: 44px;
  margin: 0 auto 18px;
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
.effect-hero-copy h1 {
  width: 710px;
  margin: 0 auto 22px;
  color: #075bd2;
  font-size: 74px;
  line-height: 1.05;
  font-weight: 950;
  letter-spacing: -3.5px;
}
.effect-hero-copy p {
  width: 690px;
  margin: 0 auto;
  color: #1d2742;
  font-size: 25px;
  line-height: 1.38;
  font-weight: 500;
}
.effect-capability-row {
  position: relative;
  z-index: 12;
  width: 650px;
  margin: 35px auto 15px;
  display: grid;
  grid-template-columns: 1.2fr .85fr 1.05fr;
  gap: 25px;
}
.effect-capability-pill {
  height: 82px;
  border-radius: 999px;
  border: 2px solid #20b9b2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: #10a9a4;
  background: rgba(255,255,255,.96);
  box-shadow: 0 10px 23px rgba(31,101,178,.09);
  font-size: 26px;
  line-height: 1;
  font-weight: 900;
}
.effect-capability-pill:nth-child(2) {
  color: #075bd2;
  border-color: #6baaff;
}
.effect-capability-pill svg {
  width: 40px;
  height: 40px;
}
.effect-hero-area {
  position: relative;
  z-index: 3;
  height: 566px;
  overflow: hidden;
}
.effect-hero-area::before {
  content: "";
  position: absolute;
  inset: 130px -28px 0;
  border-radius: 50% 50% 0 0;
  background: linear-gradient(180deg, rgba(206,238,255,.72), rgba(255,255,255,.14));
}
.effect-city { position: absolute; display: flex; align-items: flex-end; gap: 12px; opacity: .42; }
.effect-city.city-left { left: 35px; bottom: 72px; }
.effect-city.city-right { right: 18px; top: 80px; }
.effect-city i { width: 39px; height: 92px; border-radius: 9px 9px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.22), rgba(85,154,219,.06)); }
.effect-city i:nth-child(2) { height: 134px; }
.effect-city i:nth-child(3) { height: 107px; }
.effect-cloud, .effect-cloud::before, .effect-cloud::after { position: absolute; content: ""; border-radius: 999px; background: rgba(255,255,255,.94); }
.effect-cloud.cloud-a { right: 97px; top: 111px; width: 112px; height: 22px; }
.effect-cloud.cloud-a::before { width: 46px; height: 46px; left: 20px; top: -24px; }
.effect-cloud.cloud-a::after { width: 65px; height: 65px; left: 57px; top: -40px; }
.effect-cloud.cloud-b { left: 92px; top: 175px; width: 93px; height: 18px; opacity: .85; }
.effect-cloud.cloud-b::before { width: 36px; height: 36px; left: 15px; top: -18px; }
.effect-cloud.cloud-b::after { width: 54px; height: 54px; left: 43px; top: -31px; }
.effect-plant {
  position: absolute;
  z-index: 15;
  right: 11px;
  top: 282px;
  width: 80px;
  height: 160px;
}
.effect-plant::before, .effect-plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 48px;
  height: 128px;
  border-radius: 45px 45px 0 0;
  background: linear-gradient(180deg, #a0dca0, #42aa72);
}
.effect-plant::before { left: 0; transform: rotate(-26deg); }
.effect-plant::after { right: 0; transform: rotate(23deg); }
.effect-dashboard-card {
  position: absolute;
  z-index: 7;
  left: 34px;
  top: 0px;
  width: 686px;
  height: 515px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid #cfe2f8;
  box-shadow: 0 18px 35px rgba(20,77,150,.18);
  overflow: hidden;
  transform: rotate(4deg);
  transform-origin: left bottom;
}
.effect-dashboard-title {
  height: 52px;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 31px;
  color: #fff;
  background: #063f9c;
  font-size: 22px;
  font-weight: 950;
  letter-spacing: .2px;
}
.effect-dashboard-title svg { width: 30px; height: 30px; }
.effect-dashboard-grid {
  padding: 25px 20px 22px;
  display: grid;
  grid-template-columns: 1.06fr .88fr;
  grid-template-rows: 200px 200px;
  gap: 17px;
}
.effect-widget {
  position: relative;
  border-radius: 13px;
  background: rgba(255,255,255,.98);
  border: 1px solid #dcebf8;
  box-shadow: 0 9px 18px rgba(33,95,166,.09);
  overflow: hidden;
  padding: 19px;
}
.effect-widget h3 {
  margin: 0 0 13px;
  color: #113071;
  font-size: 17px;
  line-height: 1;
  font-weight: 950;
}
.readiness-body {
  display: grid;
  grid-template-columns: 122px 1fr;
  gap: 18px;
  align-items: start;
}
.readiness-ring {
  width: 118px;
  height: 118px;
  margin-top: -5px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  align-content: center;
  color: #08988d;
  background: conic-gradient(#16b8aa 0 92%, #e7f3ff 92% 100%);
  position: relative;
}
.readiness-ring::before {
  content: "";
  position: absolute;
  inset: 14px;
  border-radius: 50%;
  background: #fff;
}
.readiness-ring span, .readiness-ring small { position: relative; z-index: 2; }
.readiness-ring span { font-size: 33px; line-height: 1; font-weight: 950; }
.readiness-ring small { color: #20324e; font-size: 13px; margin-top: 5px; font-weight: 800; }
.readiness ul, .data-track ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.readiness li { display: grid; grid-template-columns: 22px 65px 1fr; align-items: center; gap: 9px; color: #31415c; font-size: 13px; font-weight: 800; }
.readiness li svg, .data-track li svg { color: #12a99f; width: 21px; height: 21px; }
.readiness li i { height: 8px; border-radius: 999px; background: #e4edf6; }
.overview h3,
.overview strong,
.overview b,
.overview small {
  position: relative;
  z-index: 2;
}
.overview strong, .overview b {
  display: block;
  width: 98px;
  color: #075bd2;
  font-size: 30px;
  line-height: 1;
  font-weight: 950;
  text-align: left;
}
.overview b { color: #10a99f; margin-top: 19px; }
.overview small {
  display: block;
  width: 118px;
  margin-top: 6px;
  color: #263552;
  font-size: 13px;
  font-weight: 700;
  text-align: left;
}
.effect-mini-line {
  position: absolute;
  right: 8px;
  bottom: 27px;
  width: 112px;
  height: 68px;
  z-index: 1;
}
.qr-stats {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  align-items: start;
  justify-items: start;
  width: 118px;
  padding-left: 0;
  text-align: left;
}
.qr-stats > svg { display: none; }
.qr-stats div {
  grid-column: 1;
  width: 118px;
  text-align: left;
  justify-self: start;
}
.qr-stats div:nth-of-type(1) { grid-row: 1; }
.qr-stats div:nth-of-type(2) { grid-row: 2; }
.qr-stats strong {
  display: block;
  width: 96px;
  color: #075bd2;
  font-size: 25px;
  line-height: 1;
  font-weight: 950;
  text-align: left;
}
.qr-stats span {
  display: block;
  width: 118px;
  margin-top: 6px;
  color: #20314e;
  font-size: 13px;
  font-weight: 700;
  text-align: left;
}
.qr-stack {
  position: absolute;
  right: 20px;
  bottom: 25px;
  width: 104px;
  height: 134px;
  padding: 14px;
  border-radius: 11px;
  background: #fff;
  border: 6px solid #dfeeff;
  box-shadow: 8px 8px 0 #4d83dc, 16px 16px 0 #87b9f0;
  transform: rotate(10deg);
}
.qr-stack .effect-qr-graphic { width: 72px; height: 72px; }
.data-track .effect-mini-bars { width: 143px; height: 92px; }
.data-track ul {
  position: absolute;
  right: 16px;
  top: 58px;
  gap: 12px;
  color: #31415c;
  font-size: 12px;
  font-weight: 800;
}
.data-track li { display: flex; align-items: center; gap: 7px; }
.data-track small {
  position: absolute;
  left: 20px;
  bottom: 14px;
  color: #5c7190;
  font-size: 11px;
  font-weight: 700;
}
.effect-operator {
  position: absolute;
  z-index: 12;
  right: -38px;
  bottom: 0;
  width: 300px;
  height: 382px;
  transform: scale(.9);
  transform-origin: bottom right;
}
.effect-operator .hair {
  position: absolute;
  left: 96px;
  top: 0;
  width: 125px;
  height: 90px;
  border-radius: 76px 76px 27px 27px;
  background: #16191c;
  transform: rotate(-7deg);
}
.effect-operator .face {
  position: absolute;
  left: 121px;
  top: 74px;
  width: 84px;
  height: 107px;
  border-radius: 47%;
  background: #ffbd8c;
}
.effect-operator .shirt {
  position: absolute;
  left: 50px;
  top: 185px;
  width: 240px;
  height: 240px;
  border-radius: 90px 90px 0 0;
  background: #073f92;
}
.effect-operator .logo {
  position: absolute;
  right: 52px;
  top: 265px;
  color: #fff;
  font-size: 22px;
  font-weight: 950;
}
.effect-operator .arm-left {
  position: absolute;
  left: 7px;
  top: 270px;
  width: 144px;
  height: 38px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(7deg);
}
.effect-operator .arm-right {
  position: absolute;
  right: -5px;
  top: 284px;
  width: 123px;
  height: 38px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(68deg);
}
.effect-operator .laptop {
  position: absolute;
  left: 23px;
  bottom: 0;
  width: 238px;
  height: 126px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  color: #0b3a86;
  background: linear-gradient(135deg, #cfd5dc, #7f8d9c);
  box-shadow: 0 18px 24px rgba(0,42,92,.22);
  transform: perspective(220px) rotateX(4deg) skewX(-3deg);
}
.effect-operator .laptop svg { width: 48px; height: 48px; }
.effect-feature-grid {
  position: relative;
  z-index: 16;
  width: calc(100% - 96px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 19px;
}
.effect-feature-card {
  min-height: 252px;
  padding: 19px 24px 21px;
  border-radius: 16px;
  text-align: center;
  background: rgba(255,255,255,.96);
  border: 1px solid rgba(211,230,248,.9);
  box-shadow: 0 14px 30px rgba(31,101,178,.12);
}
.effect-feature-visual {
  height: 81px;
  margin-bottom: 20px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #eaf5ff;
  font-size: 70px;
}
.effect-feature-card h2 {
  margin: 0 0 14px;
  color: #075bd2;
  font-size: 25px;
  line-height: 1.16;
  font-weight: 950;
}
.effect-feature-card p {
  margin: 0;
  color: #333d52;
  font-size: 18px;
  line-height: 1.42;
  font-weight: 500;
}
.effect-message-strip {
  position: relative;
  z-index: 17;
  width: calc(100% - 116px);
  min-height: 88px;
  margin: 24px auto 22px;
  border-radius: 15px;
  border: 1px solid rgba(20,185,176,.45);
  display: grid;
  grid-template-columns: 93px 1fr;
  align-items: center;
  padding: 13px 30px;
  color: #0a9a93;
  background: rgba(240,255,253,.95);
  box-shadow: 0 10px 24px rgba(31,101,178,.08);
}
.effect-message-strip svg {
  width: 55px;
  height: 55px;
  justify-self: center;
}
.effect-message-strip strong {
  display: block;
  color: #0a8782;
  font-size: 24px;
  line-height: 1.25;
  font-weight: 950;
}
.effect-message-strip span {
  display: block;
  margin-top: 4px;
  color: #177d7b;
  font-size: 18px;
  line-height: 1.28;
  font-weight: 550;
}
.effect-main-cta {
  position: relative;
  z-index: 18;
  width: calc(100% - 60px);
  height: 90px;
  margin: 0 auto 26px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 250px 1fr 170px;
  align-items: center;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 12px 22px rgba(0,76,180,.22);
  font-size: 32px;
  line-height: 1;
  font-weight: 950;
  transition: transform .18s ease, filter .18s ease;
}
.effect-main-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.effect-main-cta svg {
  width: 58px;
  height: 58px;
  justify-self: end;
  margin-right: 24px;
}
.effect-main-cta span { justify-self: start; }
.effect-embedded-sections { position: relative; z-index: 1; }

@media (max-width: 820px) {
  .effect-screen-one { min-height: 1320px; }
  .effect-hero-copy { width: calc(100% - 40px); }
  .effect-hero-copy h1 { width: 100%; font-size: clamp(48px, 10vw, 74px); }
  .effect-hero-copy p { width: min(100%, 690px); font-size: 22px; }
  .effect-capability-row { width: calc(100% - 80px); gap: 14px; }
  .effect-hero-area { transform: scale(.87); transform-origin: top center; width: 115%; left: -7.5%; height: 505px; }
  .effect-feature-grid { width: calc(100% - 56px); }
  .effect-message-strip { width: calc(100% - 56px); }
  .effect-main-cta { width: calc(100% - 56px); grid-template-columns: 1fr 1fr 1fr; }
}

@media (max-width: 520px) {
  .effect-screen-one { min-height: 1190px; padding-top: 28px; }
  .effect-screen-pill { width: 105px; height: 38px; font-size: 20px; }
  .effect-hero-copy h1 { font-size: 38px; }
  .effect-hero-copy p { font-size: 16px; }
  .effect-capability-row { width: calc(100% - 34px); grid-template-columns: 1fr; margin-top: 22px; }
  .effect-capability-pill { height: 56px; font-size: 19px; }
  .effect-capability-pill svg { width: 30px; height: 30px; }
  .effect-hero-area { transform: scale(.64); width: 150%; left: -25%; height: 390px; }
  .effect-feature-grid { grid-template-columns: 1fr; width: calc(100% - 34px); gap: 12px; }
  .effect-feature-card { min-height: auto; display: grid; grid-template-columns: 80px 1fr; text-align: left; gap: 8px 15px; padding: 15px; }
  .effect-feature-visual { grid-row: 1 / 3; height: 70px; margin: 0; font-size: 50px; }
  .effect-feature-card h2 { margin: 0; font-size: 21px; }
  .effect-feature-card p { font-size: 15px; }
  .effect-message-strip { width: calc(100% - 34px); grid-template-columns: 55px 1fr; padding: 12px 16px; }
  .effect-message-strip svg { width: 39px; height: 39px; }
  .effect-message-strip strong { font-size: 18px; }
  .effect-message-strip span { font-size: 14px; }
  .effect-main-cta { width: calc(100% - 34px); height: 72px; grid-template-columns: 70px 1fr; font-size: 22px; }
  .effect-main-cta svg { justify-self: center; margin: 0; width: 40px; height: 40px; }
}
`;
