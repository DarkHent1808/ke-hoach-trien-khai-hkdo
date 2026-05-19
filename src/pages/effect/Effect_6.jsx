import React from "react";

const effect6Pills = [
  { icon: <GlobeIcon />, label: "HKDO.vn" },
  { icon: <QrIcon />, label: "QR" },
  { icon: <ChartBarsIcon />, label: "Dữ liệu" },
  { icon: <HeadsetIcon />, label: "Hỗ trợ" },
];

const effect6Cards = [
  {
    icon: <ShieldCheckIcon />,
    title: "Tiến độ hệ thống",
    desc: "Theo dõi trạng thái, sẵn sàng vận hành mọi lúc, mọi nơi.",
    note: "92% Sẵn sàng",
    tone: "teal",
  },
  {
    icon: <PeopleIcon />,
    title: "Điều phối triển khai",
    desc: "Phân công nhiệm vụ, điều phối hỗ trợ nhanh chóng và hiệu quả.",
    note: "Tối ưu nguồn lực",
    tone: "blue",
  },
  {
    icon: <TrendUpIcon />,
    title: "Theo dõi & duy trì",
    desc: "Theo dõi dữ liệu theo thời gian thực và duy trì liên tục, ổn định.",
    note: "Dữ liệu luôn cập nhật",
    tone: "teal",
  },
];

export default function EffectFinalPage() {
  return (
    <section id="effect-trung-tam-van-hanh-cuoi" className="effect6-page" aria-label="Sẵn sàng vận hành cùng EFFECT">
      <style>{css}</style>

      <section className="effect6-heading">
        <div className="effect6-pill">MÀN 6</div>
        <h1>Sẵn sàng vận hành cùng EFFECT</h1>
        <p>Theo dõi tiến độ, điều phối lực lượng hỗ trợ, bàn giao QR và duy trì dữ liệu trong một trung tâm vận hành thống nhất.</p>
      </section>

      <section className="effect6-pill-row" aria-label="Các trụ cột vận hành EFFECT">
        {effect6Pills.map((pill) => (
          <div className="effect6-info-pill" key={pill.label}>
            {pill.icon}
            <span>{pill.label}</span>
          </div>
        ))}
      </section>

      <section className="effect6-card-grid" aria-label="Năng lực vận hành EFFECT">
        {effect6Cards.map((card) => (
          <article className={`effect6-summary-card ${card.tone}`} key={card.title}>
            <div className="effect6-summary-icon">{card.icon}</div>
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
            <div className="effect6-summary-note">{card.note}</div>
          </article>
        ))}
      </section>

      <OperationsCenterIllustration />

      <a href="#effect-home" className="effect6-cta">
        <RocketIcon />
        <span>Vào trung tâm vận hành</span>
      </a>
    </section>
  );
}

function OperationsCenterIllustration() {
  return (
    <section className="effect6-ops-wrap" aria-label="Minh họa trung tâm vận hành EFFECT">
      <div className="effect6-city left"><i /><i /><i /></div>
      <div className="effect6-city right"><i /><i /><i /></div>
      <div className="effect6-plant plant-left" />
      <div className="effect6-plant plant-right" />
      <div className="effect6-control-room" />

      <section className="effect6-dashboard">
        <div className="effect6-dashboard-header">
          <ShieldMiniIcon />
          <span>EFFECT OPERATIONS CENTER</span>
        </div>

        <div className="effect6-dashboard-grid">
          <article className="effect6-widget readiness">
            <h3>TIẾN ĐỘ HỆ THỐNG</h3>
            <div className="effect6-readiness-body">
              <div className="effect6-ring"><span>92%</span><small>Sẵn sàng</small></div>
              <ul>
                {['Hạ tầng', 'Kết nối', 'Thiết bị', 'Quy trình', 'Nhân sự'].map((item) => (
                  <li key={item}><CheckDotIcon /><span>{item}</span><i /></li>
                ))}
              </ul>
            </div>
          </article>

          <article className="effect6-widget overview">
            <h3>TỔNG QUAN</h3>
            <strong>12.458</strong>
            <small>Hộ kinh doanh</small>
            <b>98%</b>
            <small>Đã bàn giao QR</small>
            <MiniLineChart />
          </article>

          <article className="effect6-widget data-track">
            <h3>DỮ LIỆU & THEO DÕI</h3>
            <MiniBarLineChart />
            <ul>
              <li><CheckDotIcon /> Giao dịch</li>
              <li><CheckDotIcon /> Doanh thu</li>
              <li><CheckDotIcon /> Tăng trưởng</li>
            </ul>
            <small>Cập nhật: 10:30 25/05</small>
          </article>

          <article className="effect6-widget qr-handover">
            <h3>BÀN GIAO QR</h3>
            <div className="effect6-qr-stats">
              <div><strong>12.180</strong><span>Đã bàn giao</span></div>
              <div><strong>278</strong><span>Chưa bàn giao</span></div>
            </div>
            <div className="effect6-qr-stack"><QrGraphic /></div>
          </article>

          <article className="effect6-widget deploy-map">
            <h3>BẢN ĐỒ TRIỂN KHAI</h3>
            <MapMini />
          </article>

          <article className="effect6-widget support">
            <h3>ĐIỀU PHỐI HỖ TRỢ</h3>
            <ul>
              <li><UserIcon />Tổ CNSCĐ <em>Đang hoạt động</em></li>
              <li><UserIcon />Tổ hỗ trợ <em>Đang hoạt động</em></li>
              <li><UserIcon />Kỹ thuật <em>Đang hoạt động</em></li>
              <li><ClockIcon />Hotline 24/7 <em>Sẵn sàng</em></li>
            </ul>
          </article>
        </div>
      </section>

      <div className="effect6-team team-left">
        <div className="hair" />
        <div className="face" />
        <div className="shirt" />
        <div className="chair" />
        <div className="screen" />
        <span>EFFECT</span>
      </div>

      <div className="effect6-team team-center">
        <div className="hair" />
        <div className="face" />
        <div className="shirt" />
        <div className="chair" />
        <div className="screen" />
        <span>EFFECT</span>
      </div>

      <div className="effect6-team team-right">
        <div className="hair" />
        <div className="face" />
        <div className="headset" />
        <div className="shirt" />
        <div className="chair" />
        <div className="screen" />
        <span>EFFECT</span>
      </div>
    </section>
  );
}

function QrGraphic() {
  return (
    <svg className="effect6-qr-graphic" viewBox="0 0 100 100" fill="none">
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
    <svg className="effect6-mini-line" viewBox="0 0 150 80" fill="none">
      <path d="M8 58 26 47 42 53 61 35 78 42 96 22 116 31 140 10" stroke="#126ee8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 58 26 47 42 53 61 35 78 42 96 22 116 31 140 10V80H8V58Z" fill="url(#effect6LineFill)" />
      <defs>
        <linearGradient id="effect6LineFill" x1="75" y1="10" x2="75" y2="80">
          <stop stopColor="#126ee8" stopOpacity=".2" />
          <stop offset="1" stopColor="#126ee8" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MiniBarLineChart() {
  const bars = [22, 31, 40, 52, 46, 63];
  return (
    <svg className="effect6-mini-bar-line" viewBox="0 0 170 100" fill="none">
      {bars.map((height, index) => (
        <rect key={index} x={14 + index * 23} y={92 - height} width="14" height={height} rx="3" fill="url(#effect6BarFill)" />
      ))}
      <path d="M13 74 36 60 60 68 85 42 109 50 144 20" stroke="#126ee8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="effect6BarFill" x1="0" y1="0" x2="0" y2="100">
          <stop stopColor="#1d84ef" />
          <stop offset="1" stopColor="#23b6a9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MapMini() {
  return (
    <svg className="effect6-map-mini" viewBox="0 0 210 100" fill="none">
      <path d="M25 51 54 28l39 8 31-22 51 22-17 37-46 9-30-18-31 21-37-10 11-24Z" fill="#dcecff" />
      <path d="M45 52 68 39l25 8 23-16 33 12-13 24-31 6-22-12-24 16-24-7 10-18Z" fill="#2f86ed" opacity=".78" />
      {[40,78,118,154].map((x, i) => (
        <g key={x} transform={`translate(${x} ${[42,63,36,58][i]})`}>
          <path d="M0 0c0-6 5-11 11-11s11 5 11 11c0 9-11 18-11 18S0 9 0 0Z" fill="#126ee8" />
          <circle cx="11" cy="0" r="4" fill="#fff" />
        </g>
      ))}
    </svg>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function GlobeIcon() { return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4"/><path d="M3 12h18M12 3c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></Svg>; }
function QrIcon() { return <Svg><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function ChartBarsIcon() { return <Svg><path d="M5 19V10M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round"/><path d="M3 21h18" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function HeadsetIcon() { return <Svg><path d="M5 13v-1a7 7 0 0 1 14 0v1" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><rect x="3" y="12" width="5" height="7" rx="2" fill="currentColor"/><rect x="16" y="12" width="5" height="7" rx="2" fill="currentColor"/><path d="M18 19c-.7 2-2.5 3-5.2 3H11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></Svg>; }
function ShieldCheckIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="m8.5 12 2.2 2.2 4.8-5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function PeopleIcon() { return <Svg><circle cx="12" cy="8" r="4" fill="currentColor"/><circle cx="5" cy="10" r="3" fill="currentColor" opacity=".72"/><circle cx="19" cy="10" r="3" fill="currentColor" opacity=".72"/><path d="M4 21c.6-4 3.3-6 8-6s7.4 2 8 6" fill="currentColor"/><path d="M1 21c.4-3 1.9-4.6 4.5-4.8M23 21c-.4-3-1.9-4.6-4.5-4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function TrendUpIcon() { return <Svg><path d="M5 19V12M11 19V8M17 19V5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><path d="M4 20h17M5 10l5-4 4 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function ShieldMiniIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="m9 12 2 2 4-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function CheckDotIcon() { return <Svg><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="m8 12 2.3 2.3L16 8.7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function UserIcon() { return <Svg><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4.5 21c.6-4.8 3-7.2 7.5-7.2s6.9 2.4 7.5 7.2h-15Z" fill="currentColor"/></Svg>; }
function ClockIcon() { return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function RocketIcon() { return <Svg><path d="M13 4c3.2 1 5.4 3.2 6.4 6.4l-5.6 5.6-4.4-4.4L13 4Z" fill="currentColor"/><path d="M8.8 12.2 5 13l-2 4 4-.8M11.8 15.2 11 19l-4 2 .8-4" fill="currentColor" opacity=".85"/><circle cx="15" cy="9" r="1.8" fill="#fff"/></Svg>; }

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

.effect6-page {
  position: relative;
  width: 100%;
  min-height: 1518px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 2%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 55%, #fbfdff 100%);
}
.effect6-heading {
  position: relative;
  z-index: 8;
  width: 820px;
  margin: 0 auto;
  padding-top: 36px;
  text-align: center;
}
.effect6-pill {
  width: 127px;
  height: 44px;
  margin: 0 auto 22px;
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
.effect6-heading h1 {
  width: 800px;
  margin: 0 auto 20px;
  color: #075bd2;
  font-size: 74px;
  line-height: 1.05;
  font-weight: 950;
  letter-spacing: -3.6px;
}
.effect6-heading p {
  width: 695px;
  margin: 0 auto;
  color: #1d2742;
  font-size: 25px;
  line-height: 1.38;
  font-weight: 500;
}
.effect6-pill-row {
  position: relative;
  z-index: 12;
  width: calc(100% - 116px);
  margin: 35px auto 24px;
  display: grid;
  grid-template-columns: 1fr .76fr 1fr .92fr;
  gap: 20px;
}
.effect6-info-pill {
  height: 76px;
  border-radius: 999px;
  border: 2px solid #20b9b2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #10a9a4;
  background: rgba(255,255,255,.96);
  box-shadow: 0 10px 23px rgba(31,101,178,.09);
  font-size: 25px;
  line-height: 1;
  font-weight: 900;
}
.effect6-info-pill:nth-child(2) {
  color: #075bd2;
  border-color: #6baaff;
}
.effect6-info-pill svg {
  width: 39px;
  height: 39px;
}
.effect6-card-grid {
  position: relative;
  z-index: 15;
  width: calc(100% - 92px);
  margin: 0 auto 27px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.effect6-summary-card {
  min-height: 295px;
  padding: 28px 22px 21px;
  border-radius: 16px;
  text-align: center;
  background: rgba(255,255,255,.97);
  border: 1px solid rgba(211,230,248,.9);
  box-shadow: 0 14px 30px rgba(31,101,178,.12);
}
.effect6-summary-icon {
  width: 94px;
  height: 94px;
  margin: 0 auto 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #16beb3, #069b96);
  font-size: 60px;
}
.effect6-summary-card.blue .effect6-summary-icon {
  background: linear-gradient(180deg, #126ee8, #0655d8);
}
.effect6-summary-card h2 {
  margin: 0 0 13px;
  color: #0a9f97;
  font-size: 25px;
  line-height: 1.16;
  font-weight: 950;
}
.effect6-summary-card.blue h2 { color: #075bd2; }
.effect6-summary-card p {
  margin: 0 auto;
  width: 220px;
  color: #263650;
  font-size: 17px;
  line-height: 1.35;
  font-weight: 500;
}
.effect6-summary-note {
  height: 42px;
  margin: 26px auto 0;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #0a9f97;
  background: #dff8f6;
  font-size: 17px;
  line-height: 1;
  font-weight: 950;
}
.effect6-summary-card.blue .effect6-summary-note {
  margin-top: 0px;
  color: #075bd2;
  background: #e9f2ff;
}
.effect6-ops-wrap {
  position: relative;
  z-index: 8;
  height: 532px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(232,246,255,.2), rgba(210,235,252,.65));
}
.effect6-ops-wrap::before {
  content: "";
  position: absolute;
  inset: 135px -40px 0;
  border-radius: 50% 50% 0 0;
  background: linear-gradient(180deg, rgba(222,244,255,.9), rgba(255,255,255,.08));
}
.effect6-city {
  position: absolute;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  opacity: .3;
}
.effect6-city.left { left: 0; bottom: 115px; }
.effect6-city.right { right: 0; bottom: 115px; }
.effect6-city i {
  width: 42px;
  height: 103px;
  border-radius: 9px 9px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.28), rgba(85,154,219,.08));
}
.effect6-city i:nth-child(2) { height: 146px; }
.effect6-city i:nth-child(3) { height: 118px; }
.effect6-plant {
  position: absolute;
  z-index: 6;
  bottom: 88px;
  width: 74px;
  height: 155px;
}
.effect6-plant.plant-left { left: 43px; }
.effect6-plant.plant-right { right: 43px; }
.effect6-plant::before,
.effect6-plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 43px;
  height: 122px;
  border-radius: 42px 42px 0 0;
  background: linear-gradient(180deg, #a0dca0, #42aa72);
}
.effect6-plant::before { left: 0; transform: rotate(-25deg); }
.effect6-plant::after { right: 0; transform: rotate(25deg); }
.effect6-control-room {
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  bottom: 0;
  height: 196px;
  background:
    linear-gradient(90deg, rgba(15,92,185,.18) 0 2px, transparent 2px 90px),
    linear-gradient(180deg, rgba(28,126,216,.18), rgba(255,255,255,.1));
}
.effect6-control-room::before {
  content: "";
  position: absolute;
  left: 68px;
  right: 68px;
  bottom: 0;
  height: 155px;
  border-radius: 50% 50% 0 0;
  background: rgba(255,255,255,.28);
  border: 1px solid rgba(255,255,255,.55);
}
.effect6-dashboard {
  position: absolute;
  z-index: 10;
  left: 74px;
  right: 74px;
  top: 10px;
  height: 405px;
  border-radius: 13px;
  overflow: hidden;
  background: #fff;
  border: 8px solid #1e64c8;
  border-bottom-width: 0;
  box-shadow: 0 18px 35px rgba(20,77,150,.2);
}
.effect6-dashboard-header {
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #fff;
  background: #063f9c;
  font-size: 25px;
  font-weight: 950;
  letter-spacing: .2px;
}
.effect6-dashboard-header svg {
  width: 33px;
  height: 33px;
}
.effect6-dashboard-grid {
  padding: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 150px 150px;
  gap: 14px;
}
.effect6-widget {
  position: relative;
  padding: 13px;
  border-radius: 9px;
  background: #fff;
  border: 1px solid #dcebf8;
  box-shadow: 0 7px 14px rgba(33,95,166,.07);
  overflow: hidden;
}
.effect6-widget h3 {
  margin: 0 0 9px;
  color: #113071;
  font-size: 12px;
  line-height: 1.1;
  font-weight: 950;
}
.effect6-readiness-body {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 8px;
  align-items: start;
}
.effect6-ring {
  position: relative;
  width: 64px;
  height: 64px;
  margin-top: -2px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  align-content: center;
  color: #08988d;
  background: conic-gradient(#16b8aa 0 92%, #e7f3ff 92% 100%);
}
.effect6-ring::before {
  content: "";
  position: absolute;
  inset: 9px;
  border-radius: 50%;
  background: #fff;
}
.effect6-ring span,
.effect6-ring small {
  position: relative;
  z-index: 2;
  display: block;
  text-align: center;
}
.effect6-ring span {
  margin-top: 10px;
  font-size: 15px;
  line-height: 0.5;
  font-weight: 950;
}
.effect6-ring small {
  margin-top: 0px;
  color: #20324e;
  font-size: 7px;
  font-weight: 850;
}
.effect6-readiness-body ul,
.effect6-widget.data-track ul,
.effect6-widget.support ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.effect6-readiness-body ul {
  display: grid;
  gap: 3px;
  min-width: 0;
  padding-top: 1px;
}
.effect6-readiness-body li {
  display: grid;
  grid-template-columns: 14px minmax(0, 1fr) 28px;
  align-items: center;
  gap: 4px;
  color: #334059;
  font-size: 8px;
  line-height: 1.05;
  font-weight: 800;
  min-width: 0;
}
.effect6-readiness-body li svg,
.effect6-widget.data-track li svg {
  width: 13px;
  height: 13px;
  color: #0fb19e;
  flex: 0 0 auto;
}
.effect6-readiness-body li span {
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.effect6-readiness-body li i {
  height: 4px;
  border-radius: 999px;
  background: #dce9f6;
  min-width: 0;
}
.effect6-widget.overview strong,
.effect6-widget.overview b {
  display: block;
  color: #075bd2;
  font-size: 24px;
  line-height: 1;
  font-weight: 950;
}
.effect6-widget.overview b {
  color: #10a99f;
  margin-top: 14px;
}
.effect6-widget.overview small {
  display: block;
  margin-top: 4px;
  color: #253454;
  font-size: 10px;
  font-weight: 700;
}
.effect6-mini-line {
  position: absolute;
  right: 8px;
  bottom: 14px;
  width: 105px;
  height: 58px;
}
.effect6-mini-bar-line {
  width: 112px;
  height: 70px;
}
.effect6-widget.data-track ul {
  position: absolute;
  right: 9px;
  top: 42px;
  display: grid;
  gap: 8px;
  color: #31415c;
  font-size: 9px;
  font-weight: 800;
}
.effect6-widget.data-track li {
  display: flex;
  align-items: center;
  gap: 5px;
}
.effect6-widget.data-track small {
  position: absolute;
  left: 13px;
  bottom: 8px;
  color: #5c7190;
  font-size: 8px;
  font-weight: 700;
}
.effect6-qr-stats {
  display: grid;
  gap: 12px;
}
.effect6-qr-stats strong {
  display: block;
  color: #075bd2;
  font-size: 22px;
  line-height: 1;
  font-weight: 950;
}
.effect6-qr-stats span {
  display: block;
  margin-top: 4px;
  color: #20314e;
  font-size: 10px;
  font-weight: 700;
}
.effect6-qr-stack {
  position: absolute;
  right: 20px;
  bottom: 16px;
  width: 75px;
  height: 94px;
  padding: 10px;
  border-radius: 8px;
  background: #fff;
  border: 4px solid #dfeeff;
  box-shadow: 7px 7px 0 #4d83dc, 13px 13px 0 #87b9f0;
  transform: rotate(8deg);
}
.effect6-qr-graphic {
  width: 52px;
  height: 52px;
}
.effect6-map-mini {
  width: 100%;
  height: 86px;
}
.effect6-widget.support ul {
  display: grid;
  gap: 8px;
}
.effect6-widget.support li {
  display: grid;
  grid-template-columns: 17px 1fr auto;
  align-items: center;
  gap: 6px;
  color: #253454;
  font-size: 9px;
  font-weight: 800;
}
.effect6-widget.support li svg {
  width: 16px;
  height: 16px;
  color: #075bd2;
}
.effect6-widget.support li em {
  padding: 5px 7px;
  border-radius: 999px;
  color: #0a9f97;
  background: #dff8f6;
  font-size: 7px;
  font-style: normal;
  font-weight: 900;
}
.effect6-team {
  position: absolute;
  z-index: 15;
  bottom: 0;
  width: 180px;
  height: 210px;
}
.effect6-team.team-left { left: 145px; }
.effect6-team.team-center { left: 380px; }
.effect6-team.team-right { right: 130px; }
.effect6-team .hair {
  position: absolute;
  left: 59px;
  top: 0;
  width: 64px;
  height: 50px;
  border-radius: 40px 40px 16px 16px;
  background: #111827;
}
.effect6-team .face {
  position: absolute;
  left: 70px;
  top: 41px;
  width: 45px;
  height: 58px;
  border-radius: 47%;
  background: #ffbd8c;
}
.effect6-team .shirt {
  position: absolute;
  left: 30px;
  top: 103px;
  width: 120px;
  height: 107px;
  border-radius: 50px 50px 0 0;
  background: #063f9c;
}
.effect6-team .chair {
  position: absolute;
  left: 15px;
  bottom: 0;
  width: 150px;
  height: 97px;
  border-radius: 20px 20px 0 0;
  background: #10214a;
  opacity: .92;
}
.effect6-team .screen {
  position: absolute;
  left: -8px;
  bottom: 20px;
  width: 96px;
  height: 62px;
  border-radius: 7px;
  background: linear-gradient(180deg, #f7fbff, #d7e9fb);
  border: 4px solid #1f376a;
  transform: rotate(5deg);
}
.effect6-team.team-center .screen {
  left: -25px;
  width: 116px;
  height: 74px;
  transform: rotate(-1deg);
}
.effect6-team.team-right .screen {
  left: -20px;
  transform: rotate(-6deg);
}
.effect6-team span {
  position: absolute;
  z-index: 18;
  left: 58px;
  top: 134px;
  color: #fff;
  font-size: 16px;
  font-weight: 950;
}
.effect6-team .headset {
  position: absolute;
  left: 53px;
  top: 32px;
  width: 74px;
  height: 54px;
  border: 6px solid #075bd2;
  border-bottom-color: transparent;
  border-radius: 999px;
  z-index: 18;
}
.effect6-cta {
  position: relative;
  z-index: 18;
  width: calc(100% - 60px);
  height: 89px;
  margin: 27px auto 31px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 12px 22px rgba(0,76,180,.22);
  font-size: 32px;
  line-height: 1;
  font-weight: 950;
  transition: transform .18s ease, filter .18s ease;
}
.effect6-cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}
.effect6-cta svg {
  width: 57px;
  height: 57px;
  flex: 0 0 auto;
}
.effect6-cta span {
  display: inline-block;
  line-height: 1;
}

@media (max-width: 820px) {
  .effect6-page { min-height: 1370px; }
  .effect6-heading { width: calc(100% - 40px); }
  .effect6-heading h1 { width: 100%; font-size: clamp(45px, 10vw, 74px); }
  .effect6-heading p { width: min(100%, 695px); font-size: 22px; }
  .effect6-pill-row { width: calc(100% - 70px); gap: 12px; }
  .effect6-info-pill { font-size: 20px; }
  .effect6-card-grid { width: calc(100% - 56px); }
  .effect6-summary-card p { width: auto; }
  .effect6-ops-wrap { transform: scale(.88); transform-origin: top center; width: 114%; left: -7%; height: 480px; }
  .effect6-cta { width: calc(100% - 56px); margin-top: -10px; }
}

@media (max-width: 520px) {
  .effect6-page { min-height: 1240px; }
  .effect6-heading { padding-top: 28px; }
  .effect6-pill { width: 105px; height: 38px; font-size: 20px; }
  .effect6-heading h1 { font-size: 40px; letter-spacing: -1.8px; }
  .effect6-heading p { font-size: 16px; }
  .effect6-pill-row { width: calc(100% - 34px); grid-template-columns: 1fr 1fr; gap: 10px; }
  .effect6-info-pill { height: 58px; font-size: 18px; gap: 9px; }
  .effect6-info-pill svg { width: 31px; height: 31px; }
  .effect6-card-grid { grid-template-columns: 1fr; width: calc(100% - 34px); gap: 12px; }
  .effect6-summary-card { min-height: auto; display: grid; grid-template-columns: 72px 1fr; text-align: left; gap: 7px 15px; padding: 16px; }
  .effect6-summary-icon { grid-row: 1 / 4; width: 62px; height: 62px; font-size: 40px; margin: 0; }
  .effect6-summary-card h2 { font-size: 21px; margin: 0; }
  .effect6-summary-card p { font-size: 15px; }
  .effect6-summary-note { height: 34px; margin: 4px 0 0; font-size: 14px; }
  .effect6-ops-wrap { transform: scale(.62); width: 160%; left: -30%; height: 400px; }
  .effect6-cta { width: calc(100% - 34px); height: 72px; font-size: 22px; gap: 12px; margin-top: -120px; }
  .effect6-cta svg { width: 40px; height: 40px; }
}
`;
