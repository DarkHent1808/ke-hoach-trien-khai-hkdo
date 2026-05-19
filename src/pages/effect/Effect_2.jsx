import React from "react";

const readinessList = [
  "HKDO.vn sẵn sàng",
  "dothithongminh1.vn sẵn sàng",
  "Chuỗi 1+10 phút tối ưu",
  "Video, AI, Zalo OA, chỉ dẫn trên màn hình",
  "Bộ QR và tài liệu hướng dẫn",
];

const readinessGroups = [
  { icon: <ServerIcon />, title: "Hạ tầng", status: "Sẵn sàng" },
  { icon: <DocIcon />, title: "Nội dung", status: "Sẵn sàng" },
  { icon: <HeadsetIcon />, title: "Hỗ trợ", status: "Sẵn sàng" },
  { icon: <ChartIcon />, title: "Dữ liệu", status: "Sẵn sàng" },
];

export default function EffectReadyPage() {
  return (
    <section id="effect-trung-tam-van-hanh" className="effect2-page" aria-label="EFFECT cần sẵn sàng gì">
      <style>{css}</style>

      <section className="effect2-heading">
        <div className="effect2-pill">MÀN 2</div>
        <h1>EFFECT cần sẵn sàng gì?</h1>
        <p>EFFECT là đơn vị vận hành nền tảng và bảo đảm chuỗi khởi động diễn ra ngắn, rõ, ít ma sát.</p>
      </section>

      <section className="effect2-hero" aria-label="Trung tâm vận hành readiness EFFECT">
        <div className="effect2-city city-left"><i /><i /><i /></div>
        <div className="effect2-city city-right"><i /><i /><i /></div>
        <div className="effect2-cloud cloud-a" />
        <div className="effect2-cloud cloud-b" />

        <div className="effect2-clipboard">
          <div className="clip-head" />
          <strong>CHECKLIST SẴN SÀNG</strong>
          <p><CheckDotIcon /><span /></p>
          <p><CheckDotIcon /><span /></p>
          <p><CheckDotIcon /><span /></p>
          <p><CheckDotIcon /><span /></p>
        </div>

        <div className="effect2-qr-stand">
          <div className="qr-title">BỘ QR</div>
          <QrGraphic />
          <strong>HKDO</strong>
          <em><CheckIcon /></em>
        </div>

        <section className="effect2-dashboard">
          <div className="effect2-dashboard-header">
            <ShieldMiniIcon />
            <span>EFFECT OPERATIONS CENTER</span>
          </div>

          <div className="effect2-dashboard-grid">
            <article className="effect2-panel readiness-panel">
              <h2>KIỂM TRA TỔNG THỂ</h2>
              <div className="effect2-readiness-main">
                <div className="effect2-ring"><span>92%</span><small>Sẵn sàng</small></div>
                <ul>
                  {['Hạ tầng', 'Nội dung', 'Hỗ trợ', 'Dữ liệu'].map((item) => (
                    <li key={item}><CheckDotIcon /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="effect2-panel progress-panel">
              <h2>TIẾN ĐỘ CHUỖI KHỞI ĐỘNG</h2>
              <div className="effect2-progress-line">
                <div><CheckIcon /></div>
                <span />
                <div><CheckIcon /></div>
                <span />
                <div className="active"><CheckIcon /></div>
                <FlagIcon />
              </div>
              <div className="effect2-progress-labels">
                <span>Chuẩn bị</span>
                <span>Thiết lập</span>
                <span>Sẵn sàng</span>
              </div>
            </article>

            <article className="effect2-panel performance-panel">
              <h2>THEO DÕI HIỆU SUẤT</h2>
              <MiniLineBarChart />
              <strong>98%</strong>
              <small>Đã sẵn sàng</small>
            </article>

            <article className="effect2-panel infra-panel">
              <h2>THIẾT BỊ & HẠ TẦNG</h2>
              <div className="effect2-infra-row">
                <CloudIcon />
                <ServerIcon />
                <ShieldCheckIcon />
              </div>
            </article>
          </div>
        </section>

        <div className="effect2-guide-card">
          <div>TÀI LIỆU<br />HƯỚNG DẪN</div>
          <GearIcon />
          <p /><p /><p />
        </div>

        <div className="effect2-laptop">
          <div><ShieldMiniIcon /></div>
        </div>

        <div className="effect2-headset"><HeadsetIcon /></div>
        <div className="effect2-chat"><span>•••</span></div>
      </section>

      <section className="effect2-checklist" aria-label="Danh sách readiness">
        {readinessList.map((item) => (
          <article className="effect2-check-item" key={item}>
            <div className="effect2-check-left">
              <div className="effect2-check-icon"><ReadinessIconByText text={item} /></div>
              <h2>{item}</h2>
            </div>
            <div className="effect2-check-mark"><CheckIcon /></div>
          </article>
        ))}
      </section>

      <section className="effect2-readiness-box" aria-label="Các hạng mục readiness">
        <h2>CÁC HẠNG MỤC SẴN SÀNG</h2>
        <div className="effect2-readiness-groups">
          {readinessGroups.map((item) => (
            <article className="effect2-readiness-item" key={item.title}>
              <div className="effect2-readiness-icon">{item.icon}</div>
              <div>
                <strong>{item.title}</strong>
                <span>{item.status}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <a href="#effect-kiem-tra-readiness" className="effect2-cta">
        <RocketIcon />
        <span>Kiểm tra readiness</span>
      </a>
    </section>
  );
}

function ReadinessIconByText({ text }) {
  if (text.includes("HKDO")) return <GlobeIcon />;
  if (text.includes("dothithongminh")) return <BuildingIcon />;
  if (text.includes("1+10")) return <ClockIcon />;
  if (text.includes("Video")) return <VideoIcon />;
  return <QrDocIcon />;
}

function QrGraphic() {
  return (
    <svg className="effect2-qr-graphic" viewBox="0 0 100 100" fill="none">
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

function MiniLineBarChart() {
  const bars = [18, 28, 38, 52];
  return (
    <svg className="effect2-mini-chart" viewBox="0 0 150 86" fill="none">
      {bars.map((height, index) => (
        <rect key={index} x={30 + index * 25} y={74 - height} width="13" height={height} rx="2" fill="url(#effect2BarFill)" />
      ))}
      <path d="M16 59 38 40 63 49 88 25 111 32 136 10" stroke="#126ee8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="effect2BarFill" x1="0" y1="0" x2="0" y2="86">
          <stop stopColor="#1d84ef" />
          <stop offset="1" stopColor="#28b9bd" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function CheckIcon() { return <Svg><path d="m6.8 12.3 3.3 3.3 7.1-7.4" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function CheckDotIcon() { return <Svg><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="m8 12 2.3 2.3L16 8.7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function ShieldMiniIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="m9 12 2 2 4-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function ShieldCheckIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="2.3"/><path d="m8.5 12 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function FlagIcon() { return <Svg><path d="M7 21V4M8 5h10l-2 4 2 4H8" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></Svg>; }
function CloudIcon() { return <Svg><path d="M7 18h10a4 4 0 0 0 .8-7.9A6 6 0 0 0 6.2 8.8 4.7 4.7 0 0 0 7 18Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function ServerIcon() { return <Svg><rect x="4" y="4" width="16" height="6" rx="2" fill="currentColor"/><rect x="4" y="14" width="16" height="6" rx="2" fill="currentColor"/><circle cx="8" cy="7" r="1" fill="#fff"/><circle cx="8" cy="17" r="1" fill="#fff"/></Svg>; }
function GearIcon() { return <Svg><path d="M12 8.3a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Z" fill="currentColor"/><path d="M4 13.5v-3l2.4-.5.7-1.7L5.8 6.2l2.1-2.1L10 5.4l1.7-.7.5-2.4h3l.5 2.4 1.7.7 2.1-1.3 2.1 2.1-1.3 2.1.7 1.7 2.4.5v3l-2.4.5-.7 1.7 1.3 2.1-2.1 2.1-2.1-1.3-1.7.7-.5 2.4h-3l-.5-2.4-1.7-.7-2.1 1.3-2.1-2.1 1.3-2.1-.7-1.7L4 13.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></Svg>; }
function HeadsetIcon() { return <Svg><path d="M5 13v-1a7 7 0 0 1 14 0v1" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><rect x="3" y="12" width="5" height="7" rx="2" fill="currentColor"/><rect x="16" y="12" width="5" height="7" rx="2" fill="currentColor"/><path d="M18 19c-.7 2-2.5 3-5.2 3H11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></Svg>; }
function ChartIcon() { return <Svg><path d="M5 19V10M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round"/><path d="M3 21h18" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function DocIcon() { return <Svg><path d="M6 3h9l3 3v15H6V3Z" fill="currentColor" opacity=".2"/><path d="M6 3h9l3 3v15H6V3Z" stroke="currentColor" strokeWidth="2.3"/><path d="M9 11h6M9 15h5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function GlobeIcon() { return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4"/><path d="M3 12h18M12 3c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></Svg>; }
function BuildingIcon() { return <Svg><path d="M4 21V5l8-3 8 3v16" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round"/><path d="M8 9h2M14 9h2M8 13h2M14 13h2M8 17h2M14 17h2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></Svg>; }
function ClockIcon() { return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function VideoIcon() { return <Svg><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2.3"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor"/></Svg>; }
function QrDocIcon() { return <Svg><path d="M6 3h12v18H6V3Z" stroke="currentColor" strokeWidth="2.2"/><path d="M9 7h3v3H9V7Zm5 0h2v3h-2V7Zm-5 5h3v3H9v-3Zm5 3h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
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

.effect2-page {
  position: relative;
  width: 100%;
  min-height: 1518px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 2%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 55%, #fbfdff 100%);
}
.effect2-heading {
  position: relative;
  z-index: 8;
  width: 850px;
  margin: 0 auto;
  padding-top: 36px;
  text-align: center;
}
.effect2-pill {
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
.effect2-heading h1 {
  margin: 0 auto 18px;
  color: #075bd2;
  font-size: 68px;
  line-height: 1.08;
  font-weight: 950;
  letter-spacing: -3.2px;
}
.effect2-heading p {
  width: 690px;
  margin: 0 auto;
  color: #1d2742;
  font-size: 24px;
  line-height: 1.38;
  font-weight: 500;
}
.effect2-hero {
  position: relative;
  z-index: 3;
  height: 590px;
  margin-top: 22px;
  overflow: hidden;
}
.effect2-hero::before {
  content: "";
  position: absolute;
  inset: 160px -22px 0;
  background: linear-gradient(180deg, rgba(206,238,255,.72), rgba(255,255,255,.14));
  border-radius: 50% 50% 0 0;
}
.effect2-city {
  position: absolute;
  display: flex;
  align-items: flex-end;
  gap: 11px;
  opacity: .36;
}
.effect2-city.city-left { left: 29px; top: 190px; }
.effect2-city.city-right { right: 6px; top: 60px; }
.effect2-city i {
  width: 39px;
  height: 92px;
  border-radius: 9px 9px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.22), rgba(85,154,219,.06));
}
.effect2-city i:nth-child(2) { height: 136px; }
.effect2-city i:nth-child(3) { height: 106px; }
.effect2-cloud,
.effect2-cloud::before,
.effect2-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.94);
}
.effect2-cloud.cloud-a { right: 99px; top: 74px; width: 112px; height: 22px; }
.effect2-cloud.cloud-a::before { width: 46px; height: 46px; left: 20px; top: -24px; }
.effect2-cloud.cloud-a::after { width: 65px; height: 65px; left: 57px; top: -40px; }
.effect2-cloud.cloud-b { left: 115px; top: 247px; width: 90px; height: 17px; opacity: .82; }
.effect2-cloud.cloud-b::before { width: 36px; height: 36px; left: 15px; top: -18px; }
.effect2-cloud.cloud-b::after { width: 51px; height: 51px; left: 43px; top: -29px; }
.effect2-plant {
  position: absolute;
  z-index: 10;
  right: 18px;
  top: 182px;
  width: 88px;
  height: 190px;
}
.effect2-plant::before,
.effect2-plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 53px;
  height: 152px;
  border-radius: 50px 50px 0 0;
  background: linear-gradient(180deg, #a0dca0, #42aa72);
}
.effect2-plant::before { left: 0; transform: rotate(-25deg); }
.effect2-plant::after { right: 0; transform: rotate(25deg); }
.effect2-clipboard {
  position: absolute;
  z-index: 8;
  left: 80px;
  top: 125px;
  width: 137px;
  height: 198px;
  padding: 31px 16px 12px;
  border-radius: 13px;
  border: 5px solid #1b66de;
  background: #fff;
  box-shadow: 0 12px 23px rgba(30,89,188,.12);
}
.effect2-clipboard .clip-head {
  position: absolute;
  top: -20px;
  left: 50%;
  width: 48px;
  height: 27px;
  border-radius: 16px 16px 8px 8px;
  background: #1b66de;
  transform: translateX(-50%);
}
.effect2-clipboard .clip-head::after {
  content: "";
  position: absolute;
  left: 17px;
  top: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #0a4fc4;
}
.effect2-clipboard strong {
  display: block;
  color: #1952d5;
  font-size: 12px;
  line-height: 1.12;
  text-align: center;
  font-weight: 950;
  margin-bottom: 13px;
}
.effect2-clipboard p {
  margin: 9px 0;
  display: grid;
  grid-template-columns: 21px 1fr;
  align-items: center;
  gap: 9px;
  color: #10a99f;
}
.effect2-clipboard p svg { width: 20px; height: 20px; }
.effect2-clipboard p span {
  height: 6px;
  border-radius: 999px;
  background: #dce9f6;
}
.effect2-qr-stand {
  position: absolute;
  z-index: 12;
  left: 49px;
  top: 330px;
  width: 142px;
  height: 210px;
  padding: 13px 13px 11px;
  border-radius: 17px;
  text-align: center;
  background: #fff;
  border: 1px solid #d5e6f7;
  box-shadow: 0 15px 25px rgba(22,78,181,.15);
  transform: rotate(-3deg);
}
.effect2-qr-stand .qr-title {
  color: #204bcd;
  font-size: 17px;
  font-weight: 950;
  margin-bottom: 8px;
}
.effect2-qr-stand .effect2-qr-graphic {
  width: 88px;
  height: 88px;
  margin: 0 auto 7px;
}
.effect2-qr-stand strong {
  color: #075bd2;
  font-size: 21px;
  font-weight: 950;
}
.effect2-qr-stand em {
  position: absolute;
  right: -11px;
  bottom: 19px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #0fb19e;
  font-style: normal;
}
.effect2-dashboard {
  position: absolute;
  z-index: 7;
  left: 235px;
  top: 45px;
  width: 527px;
  height: 415px;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #d7e7f8;
  box-shadow: 0 15px 32px rgba(20,77,150,.15);
}
.effect2-dashboard-header {
  height: 42px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0 20px;
  color: #fff;
  background: #063f9c;
  font-size: 17px;
  font-weight: 950;
}
.effect2-dashboard-header svg { width: 24px; height: 24px; }
.effect2-dashboard-grid {
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 169px 169px;
  gap: 14px;
}
.effect2-panel {
  border-radius: 12px;
  background: #fff;
  border: 1px solid #dcebf8;
  box-shadow: 0 7px 16px rgba(33,95,166,.08);
  padding: 15px;
  overflow: hidden;
}
.effect2-panel h2 {
  margin: 0 0 12px;
  color: #113071;
  font-size: 13px;
  line-height: 1.1;
  font-weight: 950;
}
.effect2-readiness-main {
  display: grid;
  grid-template-columns: 102px 1fr;
  gap: 13px;
  align-items: center;
}
.effect2-ring {
  position: relative;
  width: 101px;
  height: 101px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  align-content: center;
  color: #08988d;
  background: conic-gradient(#16b8aa 0 92%, #e7f3ff 92% 100%);
}
.effect2-ring::before {
  content: "";
  position: absolute;
  inset: 13px;
  border-radius: 50%;
  background: #fff;
}
.effect2-ring span,
.effect2-ring small {
  position: relative;
  z-index: 2;
  display: block;
  text-align: center;
}
.effect2-ring span {
  font-size: 28px;
  line-height: 1;
  font-weight: 950;
}
.effect2-ring small {
  margin-top: 5px;
  color: #20324e;
  font-size: 11px;
  font-weight: 850;
}
.effect2-readiness-main ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
}
.effect2-readiness-main li {
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  gap: 8px;
  color: #334059;
  font-size: 12px;
  font-weight: 800;
}
.effect2-readiness-main li svg {
  width: 19px;
  height: 19px;
  color: #0fb19e;
}
.effect2-progress-line {
  position: relative;
  height: 66px;
  display: grid;
  grid-template-columns: 31px 1fr 31px 1fr 31px 23px;
  align-items: center;
  color: #fff;
}
.effect2-progress-line div {
  width: 31px;
  height: 31px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #126ee8;
}
.effect2-progress-line div.active { background: #10a99f; }
.effect2-progress-line div svg { width: 21px; height: 21px; }
.effect2-progress-line span {
  height: 4px;
  background: #126ee8;
}
.effect2-progress-line > svg {
  width: 26px;
  height: 26px;
  color: #10a99f;
}
.effect2-progress-labels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  color: #253454;
  font-size: 11px;
  line-height: 1;
  font-weight: 800;
}
.effect2-mini-chart {
  width: 132px;
  height: 76px;
  display: block;
}
.performance-panel strong {
  display: block;
  color: #10a99f;
  font-size: 24px;
  line-height: 1;
  font-weight: 950;
  margin-top: -4px;
}
.performance-panel small {
  color: #253454;
  font-size: 12px;
  font-weight: 800;
}
.effect2-infra-row {
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #0fb19e;
}
.effect2-infra-row svg {
  width: 50px;
  height: 50px;
}
.effect2-guide-card {
  position: absolute;
  z-index: 8;
  right: 63px;
  top: 271px;
  width: 132px;
  height: 194px;
  padding: 0 14px 14px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #d5e6f7;
  box-shadow: 0 15px 25px rgba(22,78,181,.15);
  transform: rotate(4deg);
}
.effect2-guide-card div {
  height: 62px;
  margin: 0 -14px 16px;
  border-radius: 12px 12px 0 0;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #eff7ff;
  font-size: 16px;
  line-height: 1.12;
  text-align: center;
  font-weight: 950;
}
.effect2-guide-card svg {
  width: 52px;
  height: 52px;
  margin: 0 auto 10px;
  color: #075bd2;
}
.effect2-guide-card p {
  height: 7px;
  border-radius: 999px;
  background: #dce9f6;
  margin: 8px 0;
}
.effect2-laptop {
  position: absolute;
  z-index: 11;
  left: 358px;
  bottom: -10px;
  width: 257px;
  height: 145px;
}
.effect2-laptop div {
  height: 118px;
  border-radius: 8px 8px 3px 3px;
  border: 7px solid #252d3b;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #fff;
  box-shadow: 0 10px 16px rgba(19,39,82,.08);
}
.effect2-laptop div svg { width: 58px; height: 58px; }
.effect2-laptop::after {
  content: "";
  display: block;
  height: 18px;
  border-radius: 0 0 18px 18px;
  background: linear-gradient(180deg, #a7b1bc, #7d8692);
}
.effect2-headset {
  position: absolute;
  z-index: 12;
  right: 205px;
  bottom: 54px;
  color: #075bd2;
}
.effect2-headset svg { width: 88px; height: 88px; }
.effect2-chat {
  position: absolute;
  z-index: 12;
  right: 152px;
  bottom: 18px;
  width: 62px;
  height: 54px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #126ee8;
  font-size: 24px;
  font-weight: 950;
  box-shadow: 0 8px 16px rgba(32,96,240,.25);
}
.effect2-checklist {
  position: relative;
  z-index: 15;
  width: calc(100% - 96px);
  margin: 0 auto;
  display: grid;
  gap: 14px;
}
.effect2-check-item {
  min-height: 78px;
  border-radius: 15px;
  border: 1px solid #e0ebf7;
  display: grid;
  grid-template-columns: 1fr 54px;
  align-items: center;
  padding: 0 24px 0 27px;
  background: #fff;
  box-shadow: 0 10px 22px rgba(31,101,178,.08);
}
.effect2-check-left {
  display: flex;
  align-items: center;
  gap: 26px;
}
.effect2-check-icon,
.effect2-check-mark {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #0fb19e;
}
.effect2-check-icon svg { width: 30px; height: 30px; }
.effect2-check-mark {
  width: 39px;
  height: 39px;
  justify-self: end;
}
.effect2-check-mark svg { width: 29px; height: 29px; }
.effect2-check-item h2 {
  margin: 0;
  color: #10175c;
  font-size: 25px;
  line-height: 1.2;
  font-weight: 850;
}
.effect2-readiness-box {
  position: relative;
  z-index: 16;
  width: calc(100% - 96px);
  margin: 20px auto 21px;
  padding: 18px 18px 16px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid #dbe8f7;
  box-shadow: 0 10px 22px rgba(31,101,178,.08);
}
.effect2-readiness-box > h2 {
  margin: 0 0 18px;
  color: #254bc0;
  text-align: center;
  font-size: 17px;
  line-height: 1;
  font-weight: 950;
}
.effect2-readiness-groups {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.effect2-readiness-item {
  position: relative;
  min-height: 76px;
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
}
.effect2-readiness-item:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: #dfeaf6;
}
.effect2-readiness-icon {
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  color: #0fb19e;
  font-size: 45px;
}
.effect2-readiness-icon svg {
  width: 48px;
  height: 48px;
}
.effect2-readiness-item strong {
  display: block;
  color: #20314e;
  font-size: 18px;
  line-height: 1.1;
  font-weight: 900;
}
.effect2-readiness-item span {
  display: block;
  margin-top: 5px;
  color: #5d708a;
  font-size: 15px;
  line-height: 1;
  font-weight: 650;
}
.effect2-cta {
  position: relative;
  z-index: 18;
  width: calc(100% - 96px);
  height: 89px;
  margin: 0 auto 31px;
  border-radius: 13px;
  display: grid;
  grid-template-columns: 285px 1fr 240px;
  align-items: center;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 12px 22px rgba(0,76,180,.22);
  font-size: 33px;
  line-height: 1;
  font-weight: 950;
  transition: transform .18s ease, filter .18s ease;
}
.effect2-cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}
.effect2-cta svg {
  width: 57px;
  height: 57px;
  justify-self: end;
  margin-right: 23px;
}
.effect2-cta span { justify-self: start; }

@media (max-width: 820px) {
  .effect2-page { min-height: 1370px; }
  .effect2-heading { width: calc(100% - 40px); }
  .effect2-heading h1 { font-size: clamp(45px, 10vw, 68px); }
  .effect2-heading p { width: min(100%, 690px); font-size: 22px; }
  .effect2-hero { transform: scale(.88); transform-origin: top center; width: 114%; left: -7%; height: 520px; }
  .effect2-checklist,
  .effect2-readiness-box,
  .effect2-cta { width: calc(100% - 56px); }
  .effect2-readiness-item { grid-template-columns: 48px 1fr; padding: 0 9px; }
  .effect2-readiness-item strong { font-size: 15px; }
  .effect2-readiness-item span { font-size: 13px; }
  .effect2-cta { grid-template-columns: 1fr 1fr 1fr; }
}

@media (max-width: 520px) {
  .effect2-page { min-height: 1240px; }
  .effect2-heading { padding-top: 28px; }
  .effect2-pill { width: 105px; height: 38px; font-size: 20px; }
  .effect2-heading h1 { font-size: 38px; }
  .effect2-heading p { font-size: 17px; }
  .effect2-hero { transform: scale(.62); width: 160%; left: -30%; height: 410px; }
  .effect2-checklist { width: calc(100% - 34px); gap: 10px; }
  .effect2-check-item { min-height: 70px; padding: 0 13px; grid-template-columns: 1fr 36px; }
  .effect2-check-left { gap: 12px; }
  .effect2-check-icon { width: 44px; height: 44px; }
  .effect2-check-mark { width: 34px; height: 34px; }
  .effect2-check-item h2 { font-size: 17px; }
  .effect2-readiness-box { width: calc(100% - 34px); }
  .effect2-readiness-groups { grid-template-columns: 1fr; gap: 10px; }
  .effect2-readiness-item:not(:last-child)::after { display: none; }
  .effect2-cta { width: calc(100% - 34px); height: 72px; grid-template-columns: 70px 1fr; font-size: 22px; }
  .effect2-cta svg { justify-self: center; margin: 0; width: 40px; height: 40px; }
}
`;
