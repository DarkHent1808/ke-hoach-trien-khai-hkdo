import React from "react";

const followItems = [
  { tone: "green", icon: <DocumentDoneIcon />, title: "Hộ đã hoàn tất chuỗi 1+10 phút" },
  { tone: "blue", icon: <QrIcon />, title: "Hộ đã tự dán QR" },
  { tone: "orange", icon: <BellAlertIcon />, title: "Hộ cần nhắc lại" },
  { tone: "purple", icon: <CommunityIcon />, title: "Điểm cộng đồng đã dán A3, A4, QR" },
  { tone: "red", icon: <FeedbackIcon />, title: "Phản ánh cần chuyển EFFECT" },
];

const stats = [
  { label: "Hộ đã hoàn tất chuỗi 1+10 phút", value: "128", sub: "(68%)", tone: "green" },
  { label: "Hộ đã tự dán QR", value: "56", sub: "(30%)", tone: "blue" },
  { label: "Hộ cần nhắc lại", value: "14", sub: "(7%)", tone: "orange" },
  { label: "Điểm cộng đồng đã dán", value: "23", sub: "(100%)", tone: "purple" },
  { label: "Phản ánh cần chuyển EFFECT", value: "3", sub: "(2%)", tone: "red" },
];

export default function UBNDFollowPage() {
  return (
    <section id="ubnd-sau-phat-dong" className="ubnd-follow-page" aria-label="Sau phát động địa phương theo dõi gì">
      <style>{css}</style>

      <div className="ubnd-follow-inner">
        <div className="ubnd-follow-pager">4 / 6</div>

        <section className="ubnd-follow-heading">
          <div className="ubnd-follow-pill">MÀN 4</div>
          <h1>Sau phát động, địa phương theo dõi gì?</h1>
          <p>
            Sau buổi đầu, địa phương cần nắm rõ hộ nào đã xong, hộ nào cần nhắc lại và cụm dân cư nào đã có truyền thông.
          </p>
        </section>

        <section id="ubnd-quy-trinh-trong-ngay" className="ubnd-follow-list" aria-label="Các nhóm cần theo dõi">
          {followItems.map((item, index) => (
            <article className="ubnd-follow-card" key={item.title}>
              <div className={`ubnd-follow-icon ${item.tone}`}>{item.icon}</div>
              <div className={`ubnd-follow-number ${item.tone}`}>{index + 1}</div>
              <h2>{item.title}</h2>
              <div className="ubnd-follow-arrow"><ArrowRightIcon /></div>
            </article>
          ))}
        </section>

        <section className="ubnd-follow-dashboard" aria-label="Theo dõi địa bàn">
          <div className="ubnd-follow-sidebar">
            <span><GaugeIcon /></span>
            <span className="active"><ListIcon /></span>
            <span><UsersIcon /></span>
            <span><MegaphoneIcon /></span>
            <span><ChartIcon /></span>
            <span><GearIcon /></span>
          </div>

          <div className="ubnd-follow-board">
            <h3>THEO DÕI ĐỊA BÀN</h3>
            <div className="ubnd-follow-stat-grid">
              {stats.map((stat) => (
                <div className={`ubnd-follow-stat ${stat.tone}`} key={stat.label}>
                  <p>{stat.label}</p>
                  <strong>{stat.value}</strong>
                  <span>{stat.sub}</span>
                </div>
              ))}
            </div>

            <div className="ubnd-follow-board-bottom">
              <MiniAreaMap />
              <div className="ubnd-follow-top-list">
                <h4>TOP CỤM DÂN CƯ</h4>
                {[
                  ["Cụm 1", "92%", "green", 92],
                  ["Cụm 2", "75%", "blue", 75],
                  ["Cụm 3", "48%", "orange", 48],
                  ["Cụm 4", "30%", "purple", 30],
                ].map(([name, percent, tone, width]) => (
                  <div className="ubnd-follow-progress" key={name}>
                    <span>{name}</span>
                    <i><em className={tone} style={{ width: `${width}%` }} /></i>
                    <b>{percent}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <a href="#ubnd-mau-theo-doi-dia-ban" className="ubnd-follow-cta">
          <BarSmallIcon />
          <span>Xem mẫu theo dõi địa bàn</span>
          <ArrowRightIcon />
        </a>
      </div>

      <footer className="ubnd-follow-footer">
        <div className="ubnd-follow-footer-logo"><ShieldLogoIcon /></div>
        <strong>HKDO</strong>
        <i />
        <p>Chương trình Hỗ trợ hộ kinh doanh<br />chuyển đổi số</p>
      </footer>
    </section>
  );
}

function MiniAreaMap() {
  return (
    <div className="ubnd-follow-map">
      <svg viewBox="0 0 360 170" fill="none">
        <rect width="360" height="170" rx="12" fill="#f1f6f1" />
        <path d="M0 30h360M0 82h360M0 132h360M60 0v170M118 0v170M181 0v170M244 0v170M306 0v170" stroke="#fff" strokeWidth="9" />
        <path d="M0 122C50 92 76 77 122 93c38 13 56 39 101 16 37-19 58-53 137-64" stroke="#d3e8db" strokeWidth="22" strokeLinecap="round" />
        <path d="M0 122C50 92 76 77 122 93c38 13 56 39 101 16 37-19 58-53 137-64" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeDasharray="16 14" />
      </svg>
      <MapPin className="green p1" />
      <MapPin className="blue p2" />
      <MapPin className="green p3" />
      <MapPin className="orange p4" />
      <MapPin className="green p5" />
      <MapPin className="blue p6" />
    </div>
  );
}

function MapPin({ className }) {
  return <span className={`ubnd-follow-map-pin ${className}`} />;
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ArrowRightIcon() { return <Svg><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function DocumentDoneIcon() { return <Svg><path d="M6 3h9l4 4v14H6V3Z" fill="currentColor" opacity=".18"/><path d="M6 3h9l4 4v14H6V3Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/><path d="M15 3v5h4" stroke="currentColor" strokeWidth="2.2"/><circle cx="13" cy="15" r="4" fill="currentColor"/><path d="m11.2 15 1.2 1.2 2.5-2.7" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function QrIcon() { return <Svg><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function BellAlertIcon() { return <Svg><path d="M6 10a6 6 0 0 1 12 0c0 5 2 5 2 8H4c0-3 2-3 2-8Z" fill="currentColor"/><path d="M9.5 19a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="2"/><circle cx="17" cy="7" r="4" fill="#ff4056"/><path d="M17 5v3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/><circle cx="17" cy="10" r=".8" fill="#fff"/></Svg>; }
function CommunityIcon() { return <Svg><path d="M3 11h18L12 5 3 11Z" fill="currentColor"/><path d="M5 11v8M9 11v8M15 11v8M19 11v8M3 20h18" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/></Svg>; }
function FeedbackIcon() { return <Svg><path d="M4 5h16v11H9l-5 4V5Z" fill="currentColor"/><path d="M12 8v4" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"/><circle cx="12" cy="14.5" r="1.2" fill="#fff"/></Svg>; }
function GaugeIcon() { return <Svg><path d="M5 15a7 7 0 1 1 14 0" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><path d="m12 15 4-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></Svg>; }
function ListIcon() { return <Svg><path d="M8 7h12M8 12h12M8 17h12" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><circle cx="4" cy="7" r="1.5" fill="currentColor"/><circle cx="4" cy="12" r="1.5" fill="currentColor"/><circle cx="4" cy="17" r="1.5" fill="currentColor"/></Svg>; }
function UsersIcon() { return <Svg><circle cx="9" cy="8" r="3" fill="currentColor"/><circle cx="16" cy="8" r="3" fill="currentColor" opacity=".75"/><path d="M4 20c.5-4 2.4-6 5-6s4.5 2 5 6H4Zm8 0c.4-3.5 2.1-5.4 4.2-5.4 2.4 0 4.1 1.9 4.5 5.4H12Z" fill="currentColor"/></Svg>; }
function MegaphoneIcon() { return <Svg><path d="M4 14h3l9 4V6l-9 4H4v4Z" fill="currentColor"/><path d="M19 9c1 1.4 1 4.6 0 6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/></Svg>; }
function ChartIcon() { return <Svg><path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></Svg>; }
function GearIcon() { return <Svg><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" stroke="currentColor" strokeWidth="2.2"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function BarSmallIcon() { return <Svg><path d="M5 19V12M10 19V8M15 19V5M20 19V3" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><path d="M4 20h17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></Svg>; }
function ShieldLogoIcon() { return <Svg><path d="M12 3 5 6v5.4c0 4.5 2.8 7.7 7 9.6 4.2-1.9 7-5.1 7-9.6V6l-7-3Z" stroke="currentColor" strokeWidth="2.5" fill="none"/><path d="m8.2 12 2.2 2.2 5.2-5.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }

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

.ubnd-follow-page {
  position: relative;
  width: 100%;
  min-height: 1520px;
  overflow: hidden;
  background: linear-gradient(180deg, #f8fdff 0%, #eef8ff 82%, #0064d7 82% 100%);
}

.ubnd-follow-inner {
  position: relative;
  z-index: 2;
  min-height: 1325px;
  padding-top: 34px;
  border-radius: 0 0 28px 28px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 2%, rgba(255,255,255,.95) 0 16%, rgba(255,255,255,0) 38%),
    linear-gradient(180deg, #fbfdff 0%, #f4fbff 100%);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.72);
}
.ubnd-follow-inner::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: #d6e5f6;
}

.ubnd-follow-pager {
  position: absolute;
  right: 54px;
  top: 28px;
  z-index: 7;
  width: 87px;
  height: 44px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #eef6ff;
  font-size: 24px;
  line-height: 1;
  font-weight: 950;
}

.ubnd-follow-heading {
  position: relative;
  z-index: 5;
  width: 760px;
  margin: 0 auto 24px;
  text-align: center;
}
.ubnd-follow-pill {
  width: 153px;
  height: 54px;
  margin: 0 auto 18px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #1679eb, #075bd2);
  box-shadow: 0 10px 21px rgba(7,91,210,.25);
  font-size: 30px;
  line-height: 1;
  font-weight: 950;
}
.ubnd-follow-heading h1 {
  width: 690px;
  margin: 0 auto 23px;
  color: #10175c;
  font-size: 59px;
  line-height: 1.12;
  font-weight: 950;
  letter-spacing: -2.4px;
}
.ubnd-follow-heading p {
  width: 690px;
  margin: 0 auto;
  color: #333333;
  font-size: 24px;
  line-height: 1.38;
  font-weight: 500;
}

.ubnd-follow-list {
  position: relative;
  z-index: 5;
  padding: 0 64px;
  display: grid;
  gap: 14px;
}
.ubnd-follow-card {
  min-height: 121px;
  padding: 13px 29px 13px 34px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 106px 72px 1fr 45px;
  align-items: center;
  gap: 22px;
  background: rgba(255,255,255,.97);
  border: 1px solid #d5e7f9;
  box-shadow: 0 10px 24px rgba(31,101,178,.09);
}
.ubnd-follow-icon {
  width: 79px;
  height: 79px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 52px;
}
.ubnd-follow-icon.green { background: linear-gradient(135deg, #4fcb83, #24a96d); }
.ubnd-follow-icon.blue { background: linear-gradient(135deg, #55a0ff, #0867e1); }
.ubnd-follow-icon.orange { background: linear-gradient(135deg, #ffbb38, #ff9500); }
.ubnd-follow-icon.purple { background: linear-gradient(135deg, #9a78f5, #7650dd); }
.ubnd-follow-icon.red { background: linear-gradient(135deg, #ff6170, #f93449); }
.ubnd-follow-number {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 33px;
  line-height: 1;
  font-weight: 950;
}
.ubnd-follow-number.green { background: linear-gradient(135deg, #4fcb83, #24a96d); }
.ubnd-follow-number.blue { background: linear-gradient(135deg, #55a0ff, #0867e1); }
.ubnd-follow-number.orange { background: linear-gradient(135deg, #ffbb38, #ff9500); }
.ubnd-follow-number.purple { background: linear-gradient(135deg, #9a78f5, #7650dd); }
.ubnd-follow-number.red { background: linear-gradient(135deg, #ff6170, #f93449); }
.ubnd-follow-card h2 {
  margin: 0;
  color: #10175c;
  font-size: 29px;
  line-height: 1.2;
  font-weight: 920;
  letter-spacing: -.5px;
}
.ubnd-follow-arrow {
  color: #075fd5;
  font-size: 38px;
  justify-self: end;
}

.ubnd-follow-dashboard {
  position: relative;
  z-index: 5;
  margin: 18px 64px 0;
  min-height: 335px;
  border: 2px solid #a9d2ff;
  border-radius: 16px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 12px 27px rgba(31,101,178,.1);
}
.ubnd-follow-sidebar {
  position: absolute;
  left: 18px;
  top: 0;
  bottom: 0;
  width: 72px;
  padding: 20px 0;
  border-radius: 0 0 18px 18px;
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 13px;
  color: #fff;
  background: linear-gradient(180deg, #075fd5, #0046a8);
}
.ubnd-follow-sidebar span {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 29px;
  opacity: .95;
}
.ubnd-follow-sidebar .active {
  background: rgba(255,255,255,.16);
}
.ubnd-follow-board {
  margin-left: 114px;
  padding: 18px 19px 16px;
}
.ubnd-follow-board h3 {
  margin: 0 0 11px;
  color: #075bd2;
  font-size: 19px;
  line-height: 1;
  font-weight: 950;
}
.ubnd-follow-stat-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  margin-bottom: 15px;
}
.ubnd-follow-stat {
  min-height: 104px;
  border: 1px solid #cae0f7;
  border-radius: 9px;
  padding: 10px 9px 8px;
  text-align: center;
  background: #fff;
}
.ubnd-follow-stat p {
  min-height: 32px;
  margin: 0 0 7px;
  font-size: 11px;
  line-height: 1.22;
  font-weight: 900;
}
.ubnd-follow-stat strong {
  display: block;
  font-size: 31px;
  line-height: 1;
  font-weight: 950;
}
.ubnd-follow-stat span {
  display: block;
  margin-top: 4px;
  font-size: 13px;
  font-weight: 900;
}
.ubnd-follow-stat.green { color: #26a96a; }
.ubnd-follow-stat.blue { color: #176ff2; }
.ubnd-follow-stat.orange { color: #ff8a18; }
.ubnd-follow-stat.purple { color: #765ee8; }
.ubnd-follow-stat.red { color: #ff4056; }
.ubnd-follow-board-bottom {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 14px;
}
.ubnd-follow-map {
  position: relative;
  min-height: 145px;
  border-radius: 11px;
  overflow: hidden;
}
.ubnd-follow-map svg {
  width: 100%;
  height: 145px;
}
.ubnd-follow-map-pin {
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50% 50% 50% 4px;
  transform: rotate(-45deg);
}
.ubnd-follow-map-pin::after {
  content: "";
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  background: #fff;
}
.ubnd-follow-map-pin.green { background: #28a96a; }
.ubnd-follow-map-pin.blue { background: #176ff2; }
.ubnd-follow-map-pin.orange { background: #ff9500; }
.ubnd-follow-map-pin.p1 { left: 62px; top: 22px; }
.ubnd-follow-map-pin.p2 { left: 31px; top: 85px; }
.ubnd-follow-map-pin.p3 { left: 130px; top: 91px; width: 34px; height: 34px; }
.ubnd-follow-map-pin.p4 { right: 112px; top: 80px; }
.ubnd-follow-map-pin.p5 { right: 72px; top: 32px; }
.ubnd-follow-map-pin.p6 { right: 154px; bottom: 18px; width: 34px; height: 34px; }
.ubnd-follow-top-list {
  min-height: 145px;
  padding: 13px 15px;
  border: 1px solid #cae0f7;
  border-radius: 10px;
  background: #fff;
}
.ubnd-follow-top-list h4 {
  margin: 0 0 11px;
  color: #10205c;
  font-size: 14px;
  font-weight: 950;
}
.ubnd-follow-progress {
  display: grid;
  grid-template-columns: 58px 1fr 38px;
  align-items: center;
  gap: 9px;
  margin: 12px 0;
  color: #23346d;
  font-size: 12px;
  font-weight: 800;
}
.ubnd-follow-progress i {
  height: 8px;
  border-radius: 999px;
  background: #e3edf8;
  overflow: hidden;
}
.ubnd-follow-progress em {
  display: block;
  height: 100%;
  border-radius: inherit;
}
.ubnd-follow-progress em.green { background: #28a96a; }
.ubnd-follow-progress em.blue { background: #176ff2; }
.ubnd-follow-progress em.orange { background: #ff9500; }
.ubnd-follow-progress em.purple { background: #765ee8; }
.ubnd-follow-cta {
  width: calc(100% - 308px);
  height: 82px;
  margin: 23px auto 33px;
  border-radius: 17px;
  display: grid;
  grid-template-columns: 58px 1fr 45px;
  align-items: center;
  padding: 0 37px 0 51px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 13px 23px rgba(0,76,180,.26);
  transition: transform .18s ease, filter .18s ease;
}
.ubnd-follow-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.ubnd-follow-cta svg:first-child { width: 45px; height: 45px; justify-self: center; }
.ubnd-follow-cta span { text-align: center; font-size: 33px; line-height: 1; font-weight: 920; letter-spacing: -.6px; }
.ubnd-follow-cta svg:last-child { width: 40px; height: 40px; justify-self: end; }

.ubnd-follow-footer {
  position: relative;
  z-index: 1;
  min-height: 170px;
  padding: 36px 210px;
  display: grid;
  grid-template-columns: 74px 144px 1px 1fr;
  align-items: center;
  gap: 20px;
  color: #fff;
  background: linear-gradient(180deg, #006ce0, #004fb8);
}
.ubnd-follow-footer-logo { font-size: 70px; }
.ubnd-follow-footer strong { font-size: 42px; line-height: 1; font-weight: 950; }
.ubnd-follow-footer i { width: 1px; height: 58px; background: rgba(255,255,255,.55); }
.ubnd-follow-footer p { margin: 0; font-size: 18px; line-height: 1.25; font-weight: 520; }

@media (max-width: 820px) {
  .ubnd-follow-page { min-height: 1380px; }
  .ubnd-follow-inner { min-height: 1210px; }
  .ubnd-follow-heading { width: calc(100% - 40px); }
  .ubnd-follow-heading h1, .ubnd-follow-heading p { width: 100%; }
  .ubnd-follow-heading h1 { font-size: clamp(42px, 10vw, 59px); }
  .ubnd-follow-heading p { font-size: 21px; }
  .ubnd-follow-list { padding: 0 30px; }
  .ubnd-follow-card { grid-template-columns: 76px 52px 1fr 32px; gap: 16px; }
  .ubnd-follow-icon { width: 64px; height: 64px; font-size: 42px; }
  .ubnd-follow-number { width: 48px; height: 48px; font-size: 27px; }
  .ubnd-follow-card h2 { font-size: 24px; }
  .ubnd-follow-dashboard { margin-left: 30px; margin-right: 30px; }
  .ubnd-follow-stat-grid { grid-template-columns: repeat(2, 1fr); }
  .ubnd-follow-board-bottom { grid-template-columns: 1fr; }
  .ubnd-follow-dashboard { min-height: auto; }
  .ubnd-follow-cta { width: calc(100% - 70px); }
  .ubnd-follow-footer { padding-left: 70px; padding-right: 70px; }
}

@media (max-width: 520px) {
  .ubnd-follow-page { min-height: 1260px; }
  .ubnd-follow-inner { min-height: 1110px; }
  .ubnd-follow-pager { right: 22px; top: 22px; width: 70px; height: 38px; font-size: 20px; }
  .ubnd-follow-pill { width: 128px; height: 48px; font-size: 24px; }
  .ubnd-follow-heading h1 { font-size: 35px; }
  .ubnd-follow-heading p { font-size: 17px; }
  .ubnd-follow-list { padding: 0 18px; gap: 10px; }
  .ubnd-follow-card { min-height: 91px; grid-template-columns: 52px 37px 1fr 24px; gap: 9px; padding: 12px 14px; }
  .ubnd-follow-icon { width: 50px; height: 50px; font-size: 33px; }
  .ubnd-follow-number { width: 35px; height: 35px; font-size: 20px; }
  .ubnd-follow-card h2 { font-size: 17px; }
  .ubnd-follow-arrow { font-size: 27px; }
  .ubnd-follow-dashboard { margin: 14px 18px 0; }
  .ubnd-follow-sidebar { left: 0; width: 52px; gap: 8px; }
  .ubnd-follow-sidebar span { width: 37px; height: 37px; font-size: 23px; }
  .ubnd-follow-board { margin-left: 62px; padding: 13px; }
  .ubnd-follow-stat-grid { grid-template-columns: 1fr; }
  .ubnd-follow-cta { width: calc(100% - 48px); height: 70px; grid-template-columns: 42px 1fr 34px; padding: 0 22px; }
  .ubnd-follow-cta span { font-size: 22px; }
  .ubnd-follow-footer { min-height: 140px; grid-template-columns: 60px 1fr; padding: 24px 26px; }
  .ubnd-follow-footer-logo { font-size: 58px; }
  .ubnd-follow-footer strong { font-size: 37px; }
  .ubnd-follow-footer i { display: none; }
  .ubnd-follow-footer p { grid-column: 1 / -1; text-align: center; font-size: 14px; }
}
`;
