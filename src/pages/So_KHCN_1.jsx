import React from "react";
import RoleHeader from "../components/Header";

const statCards = [
  {
    tone: "green",
    icon: <TargetIcon />,
    title: "Tiến độ triển khai",
    value: "",
    desc: "Đạt mục tiêu năm",
    progress: 68,
    note: "",
  },
  {
    tone: "blue",
    icon: <UsersIcon />,
    title: "Số hộ tham gia",
    value: "12.456",
    desc: "Hộ kinh doanh",
    progress: 72,
    note: "↑ 18% so với tháng trước",
  },
  {
    tone: "orange",
    icon: <MegaphoneIcon />,
    title: "Điểm truyền thông",
    value: "1.284",
    desc: "Điểm đã kích hoạt",
    progress: 78,
    note: "↑ 12% so với tháng trước",
  },
];

export default function SoKHCNPage() {
  return (
    <div className="page-wrap">
      <style>{css}</style>

      <main className="phone-page">
        <div className="header-bleed">
          <RoleHeader activeKey="so-khcn" />
        </div>

        <section className="hero-section">
          <div className="hero-copy">
            <h2>
              Trang điều phối của
              <span>Sở KHCN</span>
            </h2>
            <p>
              Theo dõi mục tiêu, tiến độ, kết quả và điều kiện mở rộng triển khai HKDO tại địa phương.
            </p>
          </div>

          <HeroIllustration />
        </section>

        <section className="stats-grid" aria-label="Chỉ số tổng quan">
          {statCards.map((card) => (
            <article key={card.title} className="stat-card">
              <div className={`stat-icon ${card.tone}`}>{card.icon}</div>
              <div className="stat-content">
                <h3>{card.title}</h3>
                <strong className={card.tone}>{card.value}</strong>
                <p>{card.desc}</p>
              </div>
              <div className="progress-track">
                <span className={card.tone} style={{ width: `${card.progress}%` }} />
              </div>
              {card.note && <div className={`stat-note ${card.tone}`}>{card.note}</div>}
            </article>
          ))}
        </section>

        <section className="realtime-card">
          <div className="shield-icon">
            <ShieldCheckIcon />
          </div>
          <div className="realtime-copy">
            <h3>Dữ liệu cập nhật theo thời gian thực</h3>
            <p>Hỗ trợ Sở KHCN theo dõi toàn cảnh, ra quyết định kịp thời và hiệu quả.</p>
          </div>
          <ServerCloudArt />
        </section>

        <a href="#dashboard" className="dashboard-cta">
          <PieIcon />
          <span>Xem dashboard</span>
          <ArrowRightIcon />
        </a>
      </main>
    </div>
  );
}


function HeroIllustration() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="skyline skyline-left"><i /><i /><i /></div>
      <div className="skyline skyline-right"><i /><i /><i /></div>

      <div className="gov-building">
        <div className="flag-pole" />
        <div className="flag-vn"><span>★</span></div>
        <div className="roof"><span>★</span></div>
        <div className="building-body">
          <div className="columns">
            <i /><i /><i /><i />
          </div>
          <div className="windows">
            {Array.from({ length: 8 }).map((_, i) => <b key={i} />)}
          </div>
          <div className="door" />
        </div>
        <div className="steps" />
      </div>

      <div className="tree tree-left" />
      <div className="tree tree-right" />
      <div className="bush bush-left" />
      <div className="bush bush-right" />

      <div className="dashboard-screen">
        <div className="screen-title">HKDO Dashboard</div>
        <div className="screen-top">
          <div className="mini-widget donut-widget">
            <b>Tiến độ triển khai</b>
            <div className="donut"></div>
            <small>Đạt mục tiêu</small>
          </div>
          <div className="mini-widget number-widget">
            <b>Số hộ tham gia</b>
            <strong>12.456</strong>
            <small>Hộ kinh doanh</small>
          </div>
          <div className="mini-widget number-widget">
            <b>Điểm truyền thông</b>
            <strong>1.284</strong>
            <small>Điểm đã kích hoạt</small>
          </div>
        </div>
        <div className="screen-bottom">
          <div className="map-widget">
            <b>Bản đồ triển khai theo địa phương</b>
            <MapShape />
            <ul>
              <li><span className="ok" />Hoàn thành tốt</li>
              <li><span className="run" />Đang triển khai</li>
              <li><span className="wait" />Cần hỗ trợ</li>
              <li><span className="none" />Chưa triển khai</li>
            </ul>
          </div>
          <div className="chart-widget">
            <b>Xu hướng tham gia</b>
            <div className="bars">
              {[22, 30, 26, 40, 37, 52, 48, 65, 60, 75].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
            </div>
            <div className="activity">
              <b>Hoạt động gần đây</b>
              <p>Phường A vừa cập nhật kết quả truyền thông</p>
              <p>Xã B đã kích hoạt 3 điểm truyền thông mới</p>
              <p>Xã C đề xuất hỗ trợ triển khai HKDO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="person woman">
        <div className="hair" />
        <div className="head" />
        <div className="body" />
        <div className="arm" />
      </div>
      <div className="person man-seated">
        <div className="hair" />
        <div className="head" />
        <div className="glasses" />
        <div className="body" />
      </div>
      <div className="person man-standing">
        <div className="hair" />
        <div className="head" />
        <div className="body" />
        <div className="tablet" />
      </div>

      <div className="laptop"><span>69%</span></div>
    </div>
  );
}

function ServerCloudArt() {
  return (
    <div className="server-art" aria-hidden="true">
      <div className="big-cloud"><UploadIcon /></div>
      <div className="server-rack">
        <i /><i /><i />
      </div>
      <div className="server-small"><i /><i /></div>
      <div className="plant" />
      <div className="check-bubble"><CheckIcon /></div>
    </div>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function NetworkIcon() { return <Svg viewBox="0 0 64 64"><path d="M32 5 13 16v23l19 11 19-11V16L32 5Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round"/><path d="M24 24h16M24 32h20M24 40h12" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/><circle cx="14" cy="16" r="5" fill="white" stroke="currentColor" strokeWidth="4"/><circle cx="50" cy="16" r="5" fill="white" stroke="currentColor" strokeWidth="4"/><circle cx="50" cy="39" r="5" fill="white" stroke="currentColor" strokeWidth="4"/></Svg>; }
function BellIcon() { return <Svg><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 21h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function TargetIcon() { return <Svg><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.4"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.4"/><path d="M15 9 21 3M18 3h3v3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function UsersIcon() { return <Svg><path d="M8.2 11a3.7 3.7 0 1 0 0-7.4 3.7 3.7 0 0 0 0 7.4Zm7.6 0a3.7 3.7 0 1 0 0-7.4 3.7 3.7 0 0 0 0 7.4Z" fill="currentColor"/><path d="M2.5 20c.5-4.6 2.7-7 5.8-7 3.2 0 5.5 2.4 5.9 7H2.5Zm8 0c.5-4.5 2.6-7 5.4-7 3 0 5.2 2.4 5.6 7h-11Z" fill="currentColor" opacity=".82"/></Svg>; }
function MegaphoneIcon() { return <Svg><path d="M4 14h3l9 4V6l-9 4H4v4Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/><path d="M7 14v4a2 2 0 0 0 2 2h1" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/><path d="M19 9c1 1.4 1 4.6 0 6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function ShieldCheckIcon() { return <Svg><path d="M12 3 5 6v5.4c0 4.5 2.8 7.7 7 9.6 4.2-1.9 7-5.1 7-9.6V6l-7-3Z" fill="currentColor"/><path d="m8.2 12 2.2 2.2 5.2-5.5" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function PieIcon() { return <Svg><path d="M12 3v9h9A9 9 0 0 0 12 3Z" fill="currentColor" opacity=".95"/><path d="M10 5a9 9 0 1 0 9 9h-9V5Z" fill="currentColor" opacity=".5"/></Svg>; }
function ArrowRightIcon() { return <Svg><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function UploadIcon() { return <Svg><path d="M12 19V6M7 11l5-5 5 5" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function CheckIcon() { return <Svg><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }

function MapShape() {
  return (
    <Svg viewBox="0 0 260 150" className="map-shape">
      {Array.from({ length: 48 }).map((_, i) => {
        const x = 24 + (i % 12) * 17 + (Math.floor(i / 12) % 2) * 6;
        const y = 26 + Math.floor(i / 12) * 22 + (i % 3) * 2;
        const tone = ["#55c6c7", "#91d9e4", "#4ba9ef", "#b9daf9"][i % 4];
        return <path key={i} d={`M${x},${y} l14,-5 l12,8 l-4,13 l-15,5 l-12,-7 z`} fill={tone} stroke="#fff" strokeWidth="2" />;
      })}
    </Svg>
  );
}

const css = `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  color: #0c174f;
  background: #dfeefa;
}
a { color: inherit; text-decoration: none; }
button { font: inherit; }
svg { width: 1em; height: 1em; display: block; }

.page-wrap {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at center top, #ffffff 0, #e8f6ff 42%, #dceefa 100%);
}

.phone-page {
  width: min(100%, 928px);
  min-height: 100vh;
  padding: 0 27px 27px;
  border-radius: 0 0 28px 28px;
  background:
    radial-gradient(circle at 84% 4%, rgba(255,255,255,.9) 0 14%, rgba(255,255,255,0) 34%),
    linear-gradient(180deg, #f9fdff 0%, #eef8ff 49%, #f8fdff 100%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.75) inset;
  overflow: hidden;
}

.header-bleed {
  margin: 0 -27px 47px;
}


.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 29px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 18px;
}
.brand-mark {
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
  color: #1268d3;
  font-size: 64px;
}
.brand h1 {
  margin: 0 0 7px;
  color: #111866;
  font-size: 32px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -.8px;
}
.brand p {
  margin: 0;
  color: #24316f;
  font-size: 19px;
  line-height: 1.2;
  font-weight: 520;
}
.bell {
  position: relative;
  width: 58px;
  height: 58px;
  margin-top: 12px;
  border: 0;
  background: transparent;
  color: #0a1554;
  font-size: 42px;
  cursor: pointer;
}
.bell span {
  position: absolute;
  top: 4px;
  right: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ff3346;
  box-shadow: 0 0 0 4px #f9fdff;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 47px;
  overflow-x: auto;
  scrollbar-width: none;
}
.tabs::-webkit-scrollbar { display: none; }
.tabs a {
  height: 63px;
  padding: 0 24px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: #151e61;
  background: rgba(255,255,255,.88);
  box-shadow: 0 8px 20px rgba(38, 99, 169, .11), inset 0 0 0 1px rgba(21, 85, 160, .08);
  font-size: 17.5px;
  font-weight: 850;
}
.tabs a.active {
  color: #fff;
  background: linear-gradient(180deg, #126de0, #055ac5);
  box-shadow: 0 10px 20px rgba(4, 91, 197, .28);
}

.hero-section {
  position: relative;
  min-height: 849px;
  margin: 0 -27px;
  padding: 0 27px;
}
.hero-copy {
  position: relative;
  z-index: 5;
  width: 455px;
  padding-left: 17px;
}
.hero-copy h2 {
  margin: 0 0 22px;
  color: #10165d;
  font-size: 63px;
  line-height: 1.12;
  letter-spacing: -2.8px;
  font-weight: 950;
}
.hero-copy h2 span {
  display: block;
  color: #075bd1;
}
.hero-copy p {
  margin: 0;
  color: #475684;
  font-size: 25px;
  line-height: 1.5;
  font-weight: 500;
}

.hero-art {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.cloud,
.cloud::before,
.cloud::after {
  position: absolute;
  border-radius: 999px;
  background: rgba(255,255,255,.95);
  content: "";
}
.cloud-1 { right: 28px; top: 112px; width: 75px; height: 14px; opacity: .9; }
.cloud-1::before { width: 26px; height: 26px; left: 14px; top: -13px; }
.cloud-1::after { width: 34px; height: 34px; left: 35px; top: -21px; }
.cloud-2 { left: 475px; top: 208px; width: 72px; height: 14px; opacity: .75; }
.cloud-2::before { width: 26px; height: 26px; left: 15px; top: -12px; }
.cloud-2::after { width: 32px; height: 32px; left: 37px; top: -19px; }
.skyline {
  position: absolute;
  display: flex;
  align-items: flex-end;
  gap: 13px;
  opacity: .62;
}
.skyline-left { left: 35px; bottom: 417px; }
.skyline-right { right: 9px; top: 119px; }
.skyline i {
  display: block;
  width: 42px;
  height: 113px;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, rgba(98, 166, 228, .18), rgba(98, 166, 228, .05));
}
.skyline i:nth-child(2) { height: 152px; }
.skyline i:nth-child(3) { height: 92px; }
.gov-building {
  position: absolute;
  right: 12px;
  top: 186px;
  width: 430px;
  height: 290px;
  filter: drop-shadow(0 14px 18px rgba(28, 104, 196, .16));
}
.flag-pole {
  position: absolute;
  right: 54px;
  top: 8px;
  width: 4px;
  height: 94px;
  border-radius: 999px;
  background: #1768d2;
}
.flag-vn {
  position: absolute;
  right: -2px;
  top: 24px;
  width: 72px;
  height: 50px;
  border-radius: 2px 14px 14px 2px;
  background: #f22b1d;
  transform: skewY(5deg);
  display: grid;
  place-items: center;
  color: #ffec3d;
  font-size: 18px;
}
.roof {
  position: absolute;
  left: 80px;
  top: 58px;
  width: 280px;
  height: 95px;
  clip-path: polygon(50% 0, 100% 72%, 92% 100%, 8% 100%, 0 72%);
  background: linear-gradient(180deg, #dcebff, #95caff 58%, #5ca2f2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 38px;
  color: #ffe336;
  font-size: 30px;
  text-shadow: 0 0 0 #e33222;
}
.roof::before {
  content: "";
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 11px;
  height: 12px;
  border-radius: 999px;
  background: #2a79d7;
}
.roof span {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #ef3124;
}
.building-body {
  position: absolute;
  left: 46px;
  top: 145px;
  width: 350px;
  height: 130px;
  border-radius: 10px 10px 2px 2px;
  background: linear-gradient(180deg, #d6ebff, #74b8fb);
  border-top: 10px solid #247ad8;
}
.columns {
  position: absolute;
  left: 74px;
  right: 74px;
  top: -4px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.columns i {
  height: 135px;
  border-radius: 5px 5px 0 0;
  background: linear-gradient(90deg, #eff8ff, #8cc5fb, #e8f5ff);
}
.windows {
  position: absolute;
  inset: 28px 21px 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px 35px;
}
.windows b {
  height: 34px;
  border-radius: 3px;
  background: linear-gradient(180deg, #65b8ff, #126ed3);
  box-shadow: inset 0 0 0 3px rgba(255,255,255,.16);
}
.door {
  position: absolute;
  left: 154px;
  bottom: 0;
  width: 42px;
  height: 64px;
  border-radius: 5px 5px 0 0;
  background: #064ea6;
}
.steps {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 0;
  height: 24px;
  border-radius: 4px;
  background: linear-gradient(180deg, #c7e4ff, #8cc8ff);
  box-shadow: 0 12px 0 rgba(112, 179, 239, .45);
}
.tree {
  position: absolute;
  width: 60px;
  height: 118px;
  border-radius: 44px 44px 14px 14px;
  background: linear-gradient(180deg, #76d28a, #3ba96a);
}
.tree::before {
  content: "";
  position: absolute;
  left: 28px;
  top: 45px;
  width: 5px;
  height: 70px;
  border-radius: 999px;
  background: #267556;
}
.tree-left { left: 450px; top: 409px; transform: scale(.72); }
.tree-right { right: 7px; top: 455px; transform: scale(.74); }
.bush {
  position: absolute;
  width: 100px;
  height: 42px;
  border-radius: 80px 80px 0 0;
  background: linear-gradient(180deg, #71ce84, #39a86a);
}
.bush-left { left: 805px; top: 539px; }
.bush-right { right: -12px; top: 529px; }
.dashboard-screen {
  position: absolute;
  z-index: 4;
  left: 127px;
  right: 176px;
  top: 471px;
  height: 461px;
  padding: 23px 35px 28px;
  border: 9px solid #08235a;
  border-radius: 18px;
  background: linear-gradient(180deg, #f7fbff, #eaf5ff);
  box-shadow: 0 26px 35px rgba(0, 38, 91, .26);
}
.screen-title {
  color: #075bd1;
  font-size: 16px;
  font-weight: 950;
  margin-bottom: 16px;
}
.screen-top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 15px;
}
.mini-widget {
  min-height: 128px;
  padding: 13px 15px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 20px rgba(41, 103, 181, .09);
}
.mini-widget b {
  display: block;
  margin-bottom: 11px;
  color: #14205e;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 900;
}
.donut {
  width: 71px;
  height: 71px;
  margin: 0 auto 2px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #075bd1;
  font-size: 20px;
  font-weight: 950;
  background: conic-gradient(#1b83e9 0 68%, #65c9ad 68% 100%);
  position: relative;
}
.donut::before {
  content: "";
  position: absolute;
  inset: 13px;
  border-radius: 50%;
  background: #fff;
}
.donut { isolation: isolate; }
.donut::after {
  content: "68%";
  position: relative;
  z-index: 1;
}
.number-widget strong {
  display: block;
  color: #075bd1;
  text-align: center;
  font-size: 31px;
  line-height: 1.1;
  font-weight: 950;
}
.mini-widget small {
  display: block;
  color: #24316f;
  text-align: center;
  font-size: 11px;
  line-height: 1.25;
  font-weight: 650;
}
.screen-bottom {
  display: grid;
  grid-template-columns: 1.25fr .95fr;
  gap: 15px;
}
.map-widget,
.chart-widget {
  height: 231px;
  padding: 13px 15px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 20px rgba(41, 103, 181, .09);
}
.map-widget b,
.chart-widget b {
  display: block;
  color: #14205e;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 900;
}
.map-shape {
  width: 220px;
  height: 121px;
  margin-top: 11px;
}
.map-widget ul {
  position: absolute;
  margin: -73px 0 0 208px;
  padding: 0;
  list-style: none;
  color: #14205e;
  font-size: 9px;
  line-height: 1.8;
  font-weight: 650;
}
.map-widget li { display: flex; align-items: center; gap: 6px; }
.map-widget li span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}
.map-widget .ok { background: #39c0a3; }
.map-widget .run { background: #6ed1d0; }
.map-widget .wait { background: #ffcf5f; }
.map-widget .none { background: #91bdf5; }
.bars {
  height: 85px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 17px 3px 0;
  border-left: 2px solid #d7e9fb;
  border-bottom: 2px solid #d7e9fb;
  margin: 15px 3px 13px;
}
.bars span {
  width: 12px;
  border-radius: 3px 3px 0 0;
  background: linear-gradient(180deg, #2b84ee, #d1e7fb);
}
.activity {
  padding: 8px 9px;
  border-radius: 8px;
  background: #f4f9ff;
}
.activity b { margin-bottom: 5px; font-size: 11px; }
.activity p {
  margin: 2px 0;
  color: #1e3974;
  font-size: 8.5px;
  line-height: 1.25;
  font-weight: 650;
}
.activity p::before {
  content: "";
  width: 6px;
  height: 6px;
  margin-right: 6px;
  border-radius: 50%;
  display: inline-block;
  background: #1b83e9;
}
.person {
  position: absolute;
  z-index: 6;
}
.woman {
  left: 13px;
  bottom: -1px;
  width: 205px;
  height: 330px;
}
.woman .hair {
  position: absolute;
  left: 34px;
  top: 19px;
  width: 104px;
  height: 135px;
  border-radius: 70px 70px 42px 42px;
  background: #061746;
}
.woman .head {
  position: absolute;
  left: 79px;
  top: 62px;
  width: 61px;
  height: 73px;
  border-radius: 45% 48% 48% 45%;
  background: #ffbe91;
}
.woman .body {
  position: absolute;
  left: 53px;
  top: 137px;
  width: 113px;
  height: 201px;
  border-radius: 54px 36px 0 0;
  background: linear-gradient(160deg, #0d74db, #0751ba);
}
.woman .arm {
  position: absolute;
  right: -11px;
  top: 178px;
  width: 114px;
  height: 35px;
  border-radius: 20px;
  background: #0b64ce;
  transform: rotate(-29deg);
}
.woman .arm::after {
  content: "";
  position: absolute;
  right: -16px;
  top: 0;
  width: 32px;
  height: 29px;
  border-radius: 50%;
  background: #ffbe91;
}
.man-seated {
  right: 143px;
  bottom: -17px;
  width: 240px;
  height: 302px;
}
.man-seated .hair {
  position: absolute;
  left: 74px;
  top: 1px;
  width: 92px;
  height: 58px;
  border-radius: 60px 60px 26px 26px;
  background: #07143c;
}
.man-seated .head {
  position: absolute;
  left: 86px;
  top: 42px;
  width: 64px;
  height: 76px;
  border-radius: 44%;
  background: #ffbd8c;
}
.man-seated .glasses {
  position: absolute;
  left: 78px;
  top: 75px;
  width: 74px;
  height: 16px;
  border-top: 4px solid #101a4e;
}
.man-seated .body {
  position: absolute;
  left: 10px;
  top: 121px;
  width: 218px;
  height: 205px;
  border-radius: 80px 72px 0 0;
  background: linear-gradient(150deg, #162c61, #071541);
}
.man-standing {
  right: -12px;
  bottom: -12px;
  width: 190px;
  height: 462px;
}
.man-standing .hair {
  position: absolute;
  left: 46px;
  top: 6px;
  width: 90px;
  height: 68px;
  border-radius: 66px 66px 26px 26px;
  background: #07143c;
}
.man-standing .head {
  position: absolute;
  left: 64px;
  top: 55px;
  width: 58px;
  height: 72px;
  border-radius: 46%;
  background: #ffbd8c;
}
.man-standing .body {
  position: absolute;
  left: 25px;
  top: 131px;
  width: 123px;
  height: 309px;
  border-radius: 44px 44px 0 0;
  background: linear-gradient(180deg, #7db7ff, #4a91ec);
}
.man-standing .tablet {
  position: absolute;
  left: 8px;
  top: 248px;
  width: 87px;
  height: 68px;
  border-radius: 9px;
  transform: rotate(8deg);
  background: linear-gradient(135deg, #627fa3, #243b5f);
}
.laptop {
  position: absolute;
  z-index: 7;
  left: 170px;
  bottom: 14px;
  width: 151px;
  height: 99px;
  border-radius: 6px;
  background: linear-gradient(180deg, #eaf5ff, #bfdffb);
  border: 8px solid #123a72;
  transform: skewX(-7deg);
  box-shadow: 0 10px 15px rgba(0,0,0,.13);
}
.laptop::after {
  content: "";
  position: absolute;
  left: -21px;
  right: -21px;
  bottom: -20px;
  height: 13px;
  border-radius: 50%;
  background: #a8c7e9;
}
.laptop span {
  position: absolute;
  left: 19px;
  top: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #075bd1;
  font-size: 13px;
  font-weight: 950;
  background: conic-gradient(#2c8df0 0 69%, #d2e9fb 69% 100%);
}

.stats-grid {
  position: relative;
  z-index: 7;
  margin-top: -1px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 17px;
}
.stat-card {
  min-height: 231px;
  padding: 23px 21px 19px;
  border-radius: 20px;
  background: rgba(255,255,255,.96);
  box-shadow: 0 15px 32px rgba(31, 101, 178, .13);
}
.stat-card {
  display: grid;
  grid-template-columns: 82px 1fr;
  align-content: start;
  column-gap: 16px;
}
.stat-icon {
  width: 81px;
  height: 81px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 52px;
}
.stat-icon.green { background: linear-gradient(135deg, #44c982, #24a96e); }
.stat-icon.blue { background: linear-gradient(135deg, #55a0ff, #1674e5); }
.stat-icon.orange { background: linear-gradient(135deg, #ffae38, #ff8216); }
.stat-content h3 {
  margin: 3px 0 10px;
  color: #151e61;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 850;
}
.stat-content strong {
  display: block;
  font-size: 42px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -1px;
}
.stat-content strong.green { color: #30b979; }
.stat-content strong.blue { color: #136de1; }
.stat-content strong.orange { color: #ff8a18; }
.stat-content p {
  margin: 8px 0 0;
  color: #3d4c7a;
  font-size: 18px;
  line-height: 1.25;
  font-weight: 500;
}
.progress-track {
  grid-column: 1 / -1;
  height: 11px;
  margin: 31px 0 0;
  border-radius: 999px;
  overflow: hidden;
  background: #dfeaf6;
}
.progress-track span {
  display: block;
  height: 100%;
  border-radius: 999px;
}
.progress-track .green { background: #35bd7b; }
.progress-track .blue { background: #1674e5; }
.progress-track .orange { background: #ff9b20; }
.stat-note {
  grid-column: 1 / -1;
  margin-top: 14px;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 780;
}
.stat-note.green { color: #30b979; }
.stat-note.blue { color: #1674e5; }
.stat-note.orange { color: #30b979; }

.realtime-card {
  min-height: 125px;
  margin-top: 23px;
  padding: 20px 22px 19px 31px;
  border-radius: 19px;
  display: grid;
  grid-template-columns: 94px 1fr 278px;
  align-items: center;
  gap: 14px;
  background: rgba(255,255,255,.9);
  box-shadow: 0 14px 32px rgba(31, 101, 178, .11), inset 0 0 0 1px rgba(26, 119, 220, .08);
}
.shield-icon {
  width: 74px;
  height: 78px;
  display: grid;
  place-items: center;
  color: #1979e8;
  font-size: 78px;
  filter: drop-shadow(0 8px 11px rgba(25, 121, 232, .22));
}
.realtime-copy h3 {
  margin: 0 0 7px;
  color: #161e60;
  font-size: 22px;
  line-height: 1.18;
  font-weight: 920;
}
.realtime-copy p {
  width: 430px;
  margin: 0;
  color: #3e4d7b;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
}
.server-art {
  position: relative;
  height: 104px;
}
.big-cloud {
  position: absolute;
  left: 0;
  bottom: 7px;
  width: 85px;
  height: 57px;
  border-radius: 50px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #6bbcff, #2388ee);
  font-size: 39px;
}
.big-cloud::before,
.big-cloud::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: inherit;
}
.big-cloud::before { width: 44px; height: 44px; left: 13px; top: -19px; }
.big-cloud::after { width: 52px; height: 52px; right: 10px; top: -24px; }
.big-cloud svg { position: relative; z-index: 1; }
.server-rack {
  position: absolute;
  left: 89px;
  top: 0;
  width: 69px;
  height: 103px;
  border-radius: 10px;
  padding: 14px 9px;
  background: linear-gradient(180deg, #2a7edc, #0a4ea5);
  box-shadow: inset 0 0 0 5px rgba(255,255,255,.14);
}
.server-rack i,
.server-small i {
  display: block;
  height: 16px;
  margin-bottom: 11px;
  border-radius: 4px;
  background: #163a74;
  position: relative;
}
.server-rack i::before,
.server-small i::before {
  content: "";
  position: absolute;
  left: 8px;
  top: 6px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #65de89;
}
.server-rack i::after,
.server-small i::after {
  content: "";
  position: absolute;
  right: 8px;
  top: 7px;
  width: 17px;
  height: 3px;
  border-radius: 999px;
  background: #76c4ff;
}
.server-small {
  position: absolute;
  left: 164px;
  bottom: 5px;
  width: 56px;
  height: 76px;
  border-radius: 9px;
  padding: 12px 8px;
  background: linear-gradient(180deg, #357bd0, #153f84);
}
.plant {
  position: absolute;
  right: 15px;
  bottom: 5px;
  width: 38px;
  height: 47px;
  border-radius: 30px 30px 0 0;
  background: linear-gradient(180deg, #8edb8b, #36aa68);
}
.plant::before,
.plant::after {
  content: "";
  position: absolute;
  bottom: 2px;
  width: 24px;
  height: 38px;
  border-radius: 25px 25px 0 0;
  background: #6ccf80;
}
.plant::before { left: -19px; transform: rotate(-32deg); }
.plant::after { right: -15px; transform: rotate(28deg); }
.check-bubble {
  position: absolute;
  right: 41px;
  bottom: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #37b975;
  font-size: 26px;
  box-shadow: 0 7px 14px rgba(55, 185, 117, .26);
}
.dashboard-cta {
  height: 83px;
  margin-top: 16px;
  padding: 0 36px 0 28px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 60px 1fr 52px;
  align-items: center;
  color: #fff;
  background: linear-gradient(180deg, #0a70e3, #0057d7);
  box-shadow: 0 15px 27px rgba(0, 84, 199, .28);
  transition: transform .18s ease, filter .18s ease;
}
.dashboard-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.dashboard-cta svg:first-child {
  width: 50px;
  height: 50px;
  opacity: .9;
}
.dashboard-cta span {
  text-align: center;
  font-size: 31px;
  line-height: 1;
  font-weight: 920;
  letter-spacing: -.8px;
}
.dashboard-cta svg:last-child {
  width: 43px;
  height: 43px;
  justify-self: end;
}

@media (max-width: 820px) {
  .phone-page { padding: 0 16px 24px; border-radius: 0; }
  .header-bleed { margin: 0 -16px 30px; }
  .tabs { margin-bottom: 30px; }
  .hero-section { min-height: 760px; margin: 0 -16px; padding: 0 16px; }
  .hero-copy { width: 100%; padding-left: 0; }
  .hero-copy h2 { font-size: clamp(44px, 10vw, 63px); }
  .hero-copy p { width: min(100%, 470px); font-size: 21px; }
  .hero-art { transform: scale(.82); transform-origin: center top; width: 112%; left: -6%; }
  .stats-grid { grid-template-columns: 1fr; }
  .realtime-card { grid-template-columns: 78px 1fr; }
  .server-art { grid-column: 1 / -1; width: 280px; justify-self: center; }
  .realtime-copy p { width: auto; }
}

@media (max-width: 540px) {
  .brand-mark { width: 54px; height: 54px; font-size: 48px; }
  .brand { gap: 11px; }
  .brand h1 { font-size: 25px; }
  .brand p { font-size: 14px; }
  .bell { width: 46px; height: 46px; font-size: 34px; }
  .tabs a { height: 51px; padding: 0 17px; font-size: 15px; }
  .hero-section { min-height: 650px; }
  .hero-copy h2 { font-size: 42px; }
  .hero-copy p { font-size: 18px; }
  .hero-art { transform: scale(.62); width: 146%; left: -23%; }
  .stat-card { grid-template-columns: 72px 1fr; padding: 20px 18px; }
  .stat-icon { width: 68px; height: 68px; font-size: 44px; }
  .stat-content strong { font-size: 35px; }
  .realtime-card { grid-template-columns: 1fr; text-align: center; padding: 20px; }
  .shield-icon { margin: 0 auto; }
  .dashboard-cta { grid-template-columns: 46px 1fr 40px; padding: 0 18px; }
  .dashboard-cta span { font-size: 23px; }
}
`;
