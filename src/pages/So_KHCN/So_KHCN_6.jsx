import React from "react";
import Header from "../../components/Header";

const readyCards = [
  {
    tone: "blue",
    icon: <TargetIcon />,
    title: "Theo dõi mục tiêu",
    desc: "Cập nhật và theo dõi chỉ tiêu theo thời gian thực, dễ dàng nắm bắt tổng quan.",
  },
  {
    tone: "green",
    icon: <GrowthIcon />,
    title: "Giám sát tiến độ",
    desc: "Theo dõi tiến độ triển khai theo từng khu vực, đơn vị, đảm bảo bám sát kế hoạch.",
  },
  {
    tone: "orange",
    icon: <ClipboardCheckIcon />,
    title: "Đánh giá kết quả",
    desc: "Đo lường hiệu quả triển khai, phân tích kết quả và đề xuất giải pháp kịp thời.",
  },
];

export default function SoKHCNReadyPage({ embedded = false }) {
  const Wrapper = embedded ? "section" : "div";
  const Content = embedded ? "div" : "main";

  return (
    <Wrapper
      id="so-khcn-san-sang-dieu-phoi"
      className={embedded ? "ready-bg ready-bg--embedded" : "ready-bg"}
    >
      <style>{css}</style>

      <Content className={embedded ? "ready-page ready-page--embedded" : "ready-page"}>
        {!embedded && <Header activeKey="so-khcn" />}

        <section className="ready-hero">
          <div className="ready-hero-copy">
            <h1>
              Sẵn sàng điều phối <span>triển khai HKDO?</span>
            </h1>
            <p>
              Từ dữ liệu tổng quan đến theo dõi kết quả thực tế, Sở KHCN có thể điều hành triển khai một cách tập trung, minh bạch và hiệu quả.
            </p>
          </div>

          <HeroBuilding />
        </section>

        <section className="ready-card-grid" aria-label="Năng lực điều phối">
          {readyCards.map((card) => (
            <article className="ready-card" key={card.title}>
              <div className={`ready-card-icon ${card.tone}`}>{card.icon}</div>
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
              <span className={`ready-card-line ${card.tone}`} />
            </article>
          ))}
        </section>

        <section className="ready-benefit-bar">
          <div className="ready-shield"><ShieldCheckIcon /></div>
          <strong>Chủ động điều phối</strong>
          <i />
          <strong>Ra quyết định kịp thời</strong>
          <i />
          <strong>Hỗ trợ mở rộng địa bàn</strong>
        </section>

        <section className="ready-dashboard-scene" aria-label="Minh họa dashboard điều phối">
          <DashboardScene />
        </section>

        <a href="#dashboard" className="ready-primary-cta">
          <PieIcon />
          <span>Xem dashboard</span>
          <ArrowRightIcon />
        </a>
      </Content>
    </Wrapper>
  );
}

function HeroBuilding() {
  return (
    <div className="ready-hero-art" aria-hidden="true">
      <div className="ready-cloud cloud-a" />
      <div className="ready-cloud cloud-b" />
      <div className="ready-skyline skyline-a"><i /><i /><i /></div>
      <div className="ready-skyline skyline-b"><i /><i /><i /></div>
      <div className="ready-tree tree-a" />
      <div className="ready-tree tree-b" />
      <div className="ready-building">
        <div className="flag-pole" />
        <div className="flag-vn">★</div>
        <div className="roof"><span>★</span></div>
        <div className="body">
          <div className="columns"><i /><i /><i /><i /></div>
          <div className="windows">{Array.from({ length: 8 }).map((_, i) => <b key={i} />)}</div>
          <div className="door" />
        </div>
        <div className="steps" />
      </div>
    </div>
  );
}

function DashboardScene() {
  return (
    <div className="ready-dashboard-art" aria-hidden="true">
      <div className="dash-cloud cloud-left" />
      <div className="dash-skyline left"><i /><i /></div>
      <div className="dash-skyline right"><i /><i /></div>

      <div className="ready-dashboard-screen">
        <div className="ready-screen-title">HKDO Dashboard</div>
        <div className="ready-screen-top">
          <div className="ready-mini-widget ready-donut-widget">
            <b>Tiến độ triển khai</b>
            <div className="ready-mini-donut"><span>68%</span></div>
            <small>Đạt mục tiêu</small>
          </div>
          <div className="ready-mini-widget ready-number-widget">
            <b>Số hộ tham gia</b>
            <strong>12.456</strong>
            <small>Hộ kinh doanh</small>
            <em>↑ 18% so với tháng trước</em>
          </div>
          <div className="ready-mini-widget ready-number-widget">
            <b>Điểm truyền thông</b>
            <strong>1.284</strong>
            <small>Điểm đã kích hoạt</small>
            <em>↑ 12% so với tháng trước</em>
          </div>
        </div>
        <div className="ready-screen-bottom">
          <div className="ready-map-widget">
            <b>Bản đồ triển khai theo địa phương</b>
            <MiniMap />
            <ul>
              <li><span className="ok" />Hoàn thành tốt</li>
              <li><span className="run" />Đang triển khai</li>
              <li><span className="wait" />Cần hỗ trợ</li>
              <li><span className="none" />Chưa triển khai</li>
            </ul>
          </div>
          <div className="ready-chart-widget">
            <b>Xu hướng tham gia</b>
            <div className="ready-tiny-bars">
              {[24, 36, 31, 48, 42, 65, 58, 83].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
            </div>
            <div className="ready-activity-widget">
              <b>Hoạt động gần đây</b>
              <p>Phường An Lạc cập nhật kết quả truyền thông</p>
              <p>Xã Bình Hòa báo cáo kết quả mở rộng địa bàn</p>
              <p>Xã Cát Lái kích hoạt tính năng HKDO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ready-province-map">
        {Array.from({ length: 30 }).map((_, i) => {
          const col = i % 6;
          const row = Math.floor(i / 6);
          const x = 18 + col * 25 + (row % 2) * 9;
          const y = 10 + row * 25 + (col % 2) * 4;
          const fill = ["#2f8ff0", "#63adf4", "#8ac4f6", "#badcf9"][i % 4];
          return <path key={i} d={`M${x},${y} l22,-9 l19,12 l-6,21 l-22,7 l-19,-13 z`} fill={fill} stroke="#fff" strokeWidth="2" />;
        })}
        <div className="ready-map-pin ready-pin-blue" />
        <div className="ready-map-pin ready-pin-green" />
      </div>

      <div className="ready-woman">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="arm" />
      </div>
      <div className="ready-man-seated">
        <div className="hair" />
        <div className="face" />
        <div className="glasses" />
        <div className="body" />
      </div>
      <div className="ready-man-standing">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="tablet" />
      </div>
      <div className="ready-dash-laptop"><span>68%</span></div>
      <div className="ready-dash-plant" />
    </div>
  );
}

function MiniMap() {
  return (
    <svg className="ready-mini-map" viewBox="0 0 230 130" fill="none">
      {Array.from({ length: 40 }).map((_, i) => {
        const x = 18 + (i % 10) * 17 + (Math.floor(i / 10) % 2) * 7;
        const y = 20 + Math.floor(i / 10) * 22 + (i % 3) * 2;
        const tone = ["#52bde0", "#8bd3e6", "#4ba9ef", "#b7d9f8"][i % 4];
        return <path key={i} d={`M${x},${y} l14,-6 l13,8 l-4,14 l-15,5 l-13,-8 z`} fill={tone} stroke="#fff" strokeWidth="2" />;
      })}
    </svg>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function TargetIcon() { return <Svg><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.4"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.4"/><path d="M15 9 21 3M18 3h3v3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function GrowthIcon() { return <Svg><path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><path d="M5 15c3.5-5 8-6.5 14-9" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/><path d="M16 5h3v3" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function ClipboardCheckIcon() { return <Svg><path d="M8 5h8M9 3h6v4H9V3Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6h12v15H6V6Z" stroke="currentColor" strokeWidth="2.2"/><path d="m9 12 1.5 1.5L14 10M9 17h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function ShieldCheckIcon() { return <Svg><path d="M12 3 5 6v5.4c0 4.5 2.8 7.7 7 9.6 4.2-1.9 7-5.1 7-9.6V6l-7-3Z" fill="currentColor"/><path d="m8.2 12 2.2 2.2 5.2-5.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function PieIcon() { return <Svg><path d="M12 3v9h9A9 9 0 0 0 12 3Z" fill="currentColor" opacity=".98"/><path d="M10 5a9 9 0 1 0 9 9h-9V5Z" fill="currentColor" opacity=".45"/></Svg>; }
function ArrowRightIcon() { return <Svg><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }

const css = `
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  background: #dfeefa;
  color: #111a63;
}
a { color: inherit; text-decoration: none; }
svg { width: 1em; height: 1em; display: block; }

.ready-bg {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at top, #fff 0, #e9f6ff 47%, #dceefa 100%);
}
.ready-bg--embedded {
  min-height: auto;
  display: block;
  background: transparent;
}
.ready-page {
  width: min(100%, 928px);
  min-height: 100vh;
  overflow: hidden;
  border-radius: 0 0 28px 28px;
  background:
    radial-gradient(circle at 77% 8%, rgba(255,255,255,.9) 0 13%, rgba(255,255,255,0) 35%),
    linear-gradient(180deg, #f9fdff 0%, #eef8ff 58%, #f8fdff 100%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.72) inset;
}
.ready-page--embedded {
  width: 100%;
  min-height: auto;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.ready-hero {
  position: relative;
  min-height: 424px;
  padding: 53px 39px 0;
}
.ready-page--embedded .ready-hero { padding-top: 74px; }
.ready-hero-copy {
  position: relative;
  z-index: 5;
  width: 590px;
}
.ready-hero-copy h1 {
  margin: 0 0 24px;
  color: #10175c;
  font-size: 60px;
  line-height: 1.16;
  font-weight: 950;
  letter-spacing: -2.6px;
}
.ready-hero-copy h1 span {
  display: block;
  color: #075bd1;
}
.ready-hero-copy p {
  width: 560px;
  margin: 0;
  color: #4a5885;
  font-size: 23px;
  line-height: 1.48;
  font-weight: 500;
}
.ready-hero-art {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.ready-cloud,
.ready-cloud::before,
.ready-cloud::after {
  position: absolute;
  border-radius: 999px;
  background: rgba(255,255,255,.95);
  content: "";
}
.ready-cloud.cloud-a { right: 22px; top: 93px; width: 73px; height: 14px; }
.ready-cloud.cloud-a::before { width: 30px; height: 30px; left: 13px; top: -15px; }
.ready-cloud.cloud-a::after { width: 39px; height: 39px; left: 38px; top: -24px; }
.ready-cloud.cloud-b { right: 442px; top: 143px; width: 74px; height: 14px; opacity: .7; }
.ready-cloud.cloud-b::before { width: 28px; height: 28px; left: 16px; top: -13px; }
.ready-cloud.cloud-b::after { width: 37px; height: 37px; left: 39px; top: -22px; }
.ready-skyline { position: absolute; display: flex; align-items: flex-end; gap: 12px; opacity: .56; }
.ready-skyline.skyline-a { right: 25px; top: 111px; }
.ready-skyline.skyline-b { right: 316px; top: 167px; }
.ready-skyline i { display: block; width: 38px; height: 96px; border-radius: 11px 11px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.2), rgba(85,154,219,.06)); }
.ready-skyline i:nth-child(2) { height: 132px; }
.ready-skyline i:nth-child(3) { height: 80px; }
.ready-building {
  position: absolute;
  right: 12px;
  bottom: 0;
  width: 405px;
  height: 285px;
  filter: drop-shadow(0 14px 18px rgba(28,104,196,.15));
}
.ready-building .flag-pole { position: absolute; right: 54px; top: 18px; width: 4px; height: 82px; border-radius: 999px; background: #1768d2; }
.ready-building .flag-vn { position: absolute; right: -2px; top: 32px; width: 67px; height: 46px; border-radius: 2px 12px 12px 2px; display: grid; place-items: center; color: #ffe33b; background: #ef3124; transform: skewY(5deg); }
.ready-building .roof { position: absolute; left: 66px; top: 50px; width: 272px; height: 93px; clip-path: polygon(50% 0, 100% 72%, 92% 100%, 8% 100%, 0 72%); background: linear-gradient(180deg, #edf7ff, #9acfff 58%, #5ca2f2); display: flex; align-items: center; justify-content: center; padding-top: 37px; }
.ready-building .roof span { width: 55px; height: 55px; border-radius: 50%; display: grid; place-items: center; color: #ffe33b; background: #ef3124; font-size: 27px; }
.ready-building .body { position: absolute; left: 38px; top: 138px; width: 328px; height: 124px; border-radius: 9px 9px 2px 2px; border-top: 9px solid #2379d7; background: linear-gradient(180deg, #d6ebff, #74b8fb); }
.ready-building .columns { position: absolute; left: 70px; right: 70px; top: -3px; display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
.ready-building .columns i { height: 127px; border-radius: 5px 5px 0 0; background: linear-gradient(90deg, #f2f9ff, #8cc5fb, #e8f5ff); }
.ready-building .windows { position: absolute; inset: 28px 19px 20px; display: grid; grid-template-columns: repeat(4,1fr); gap: 12px 32px; }
.ready-building .windows b { height: 31px; border-radius: 3px; background: linear-gradient(180deg, #65b8ff, #126ed3); }
.ready-building .door { position: absolute; left: 143px; bottom: 0; width: 41px; height: 62px; border-radius: 5px 5px 0 0; background: #064ea6; }
.ready-building .steps { position: absolute; left: 15px; right: 15px; bottom: 0; height: 22px; border-radius: 4px; background: linear-gradient(180deg, #c7e4ff, #8cc8ff); }
.ready-tree { position: absolute; width: 62px; height: 116px; border-radius: 44px 44px 14px 14px; background: linear-gradient(180deg, #76d28a, #3ba96a); }
.ready-tree::before { content: ""; position: absolute; left: 29px; top: 43px; width: 5px; height: 72px; border-radius: 999px; background: #267556; }
.ready-tree.tree-a { right: 397px; bottom: 5px; transform: scale(.78); }
.ready-tree.tree-b { right: -3px; bottom: 7px; transform: scale(.85); }

.ready-card-grid {
  position: relative;
  z-index: 6;
  padding: 0 39px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 13px;
}
.ready-card {
  min-height: 326px;
  padding: 25px 25px 22px;
  border-radius: 20px;
  text-align: center;
  background: rgba(255,255,255,.96);
  box-shadow: 0 13px 27px rgba(31,101,178,.12);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ready-card-icon {
  width: 112px;
  height: 112px;
  margin-bottom: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 72px;
}
.ready-card-icon.blue { background: linear-gradient(135deg, #57a2ff, #0768e1); }
.ready-card-icon.green { background: linear-gradient(135deg, #59cc84, #21a866); }
.ready-card-icon.orange { background: linear-gradient(135deg, #ffae38, #ff8216); }
.ready-card h2 {
  margin: 0 0 14px;
  color: #111a63;
  font-size: 23px;
  line-height: 1.2;
  font-weight: 920;
}
.ready-card p {
  margin: 0;
  color: #384a81;
  font-size: 17.5px;
  line-height: 1.5;
  font-weight: 500;
}
.ready-card-line {
  width: 65px;
  height: 5px;
  margin-top: auto;
  border-radius: 999px;
}
.ready-card-line.blue { background: #2188f3; }
.ready-card-line.green { background: #25ad6d; }
.ready-card-line.orange { background: #ff8a18; }

.ready-benefit-bar {
  min-height: 88px;
  margin: 17px 39px 18px;
  padding: 15px 26px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;
  background: rgba(255,255,255,.96);
  box-shadow: 0 13px 27px rgba(31,101,178,.12);
}
.ready-shield {
  width: 57px;
  height: 57px;
  border-radius: 15px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #3d95f4, #0768e1);
  font-size: 43px;
  flex: 0 0 auto;
}
.ready-benefit-bar strong {
  color: #111a63;
  font-size: 21px;
  line-height: 1.2;
  font-weight: 900;
  white-space: nowrap;
}
.ready-benefit-bar i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #111a63;
  flex: 0 0 auto;
}

.ready-dashboard-scene {
  position: relative;
  height: 508px;
  overflow: hidden;
}
.ready-dashboard-art {
  position: absolute;
  inset: 0;
}
.dash-cloud,
.dash-cloud::before,
.dash-cloud::after {
  position: absolute;
  border-radius: 999px;
  background: rgba(255,255,255,.9);
  content: "";
}
.dash-cloud.cloud-left { left: 39px; top: 139px; width: 78px; height: 14px; opacity: .7; }
.dash-cloud.cloud-left::before { width: 32px; height: 32px; left: 12px; top: -16px; }
.dash-cloud.cloud-left::after { width: 40px; height: 40px; left: 39px; top: -24px; }
.dash-skyline { position: absolute; display: flex; align-items: flex-end; gap: 13px; opacity: .45; }
.dash-skyline.left { left: 37px; bottom: 111px; }
.dash-skyline.right { right: 22px; bottom: 116px; }
.dash-skyline i { display: block; width: 42px; height: 112px; border-radius: 12px 12px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.2), rgba(85,154,219,.06)); }
.dash-skyline i:nth-child(2) { height: 150px; }
.ready-dashboard-screen {
  position: absolute;
  z-index: 4;
  left: 127px;
  right: 249px;
  top: 26px;
  height: 380px;
  padding: 17px 27px 23px;
  border: 8px solid #08235a;
  border-radius: 17px;
  background: linear-gradient(180deg, #f7fbff, #eaf5ff);
  box-shadow: 0 26px 35px rgba(0,38,91,.26);
}
.ready-screen-title {
  color: #075bd1;
  font-size: 13px;
  font-weight: 950;
  margin-bottom: 12px;
}
.ready-screen-top {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 10px;
  margin-bottom: 11px;
}
.ready-mini-widget {
  min-height: 101px;
  padding: 10px 12px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 20px rgba(41,103,181,.09);
}
.ready-mini-widget b {
  display: block;
  margin-bottom: 8px;
  color: #14205e;
  font-size: 10.5px;
  line-height: 1.2;
  font-weight: 900;
}
.ready-mini-donut {
  width: 57px;
  height: 57px;
  margin: 0 auto 2px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #075bd1;
  font-size: 16px;
  font-weight: 950;
  background: conic-gradient(#1b83e9 0 68%, #65c9ad 68% 100%);
  position: relative;
  isolation: isolate;
}
.ready-mini-donut::before {
  content: "";
  position: absolute;
  inset: 11px;
  border-radius: 50%;
  background: #fff;
}
.ready-mini-donut::after {
  content: none !important;
  display: none !important;
}
.ready-mini-donut span {
  position: relative;
  z-index: 1;
}
.ready-number-widget strong {
  display: block;
  color: #075bd1;
  text-align: center;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 950;
}
.ready-mini-widget small {
  display: block;
  color: #24316f;
  text-align: center;
  font-size: 9px;
  line-height: 1.25;
  font-weight: 650;
}
.ready-mini-widget em {
  display: block;
  margin-top: 8px;
  color: #24b26f;
  font-size: 9px;
  font-style: normal;
  font-weight: 800;
}
.ready-screen-bottom {
  display: grid;
  grid-template-columns: 1.2fr .95fr;
  gap: 10px;
}
.ready-map-widget,
.ready-chart-widget {
  height: 191px;
  padding: 10px 12px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 20px rgba(41,103,181,.09);
}
.ready-map-widget {
  overflow: hidden;
}
.ready-map-widget b,
.ready-chart-widget b {
  display: block;
  color: #14205e;
  font-size: 10.5px;
  line-height: 1.2;
  font-weight: 900;
}
.ready-mini-map {
  display: block;
  width: 174px;
  height: 84px;
  margin: 7px auto 0;
}
.ready-map-widget ul {
  position: static;
  margin: 3px 0 0;
  padding: 0;
  list-style: none;
  color: #14205e;
  font-size: 7px;
  line-height: 1.35;
  font-weight: 650;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
  column-gap: 11px;
  row-gap: 2px;
}
.ready-map-widget li { display: flex; align-items: center; gap: 4px; }
.ready-map-widget li span { width: 6px; height: 6px; border-radius: 50%; display: inline-block; flex: 0 0 auto; }
.ready-map-widget .ok { background: #39c0a3; }
.ready-map-widget .run { background: #6ed1d0; }
.ready-map-widget .wait { background: #ffcf5f; }
.ready-map-widget .none { background: #91bdf5; }
.ready-tiny-bars {
  height: 70px;
  display: flex;
  align-items: flex-end;
  gap: 7px;
  padding: 13px 2px 0;
  border-left: 2px solid #d7e9fb;
  border-bottom: 2px solid #d7e9fb;
  margin: 12px 2px 9px;
}
.ready-tiny-bars span {
  width: 10px;
  border-radius: 3px 3px 0 0;
  background: linear-gradient(180deg, #2b84ee, #d1e7fb);
}
.ready-activity-widget {
  padding: 7px 8px;
  border-radius: 7px;
  background: #f4f9ff;
}
.ready-activity-widget b { margin-bottom: 4px; font-size: 9px; }
.ready-activity-widget p {
  margin: 2px 0;
  color: #1e3974;
  font-size: 7px;
  line-height: 1.25;
  font-weight: 650;
}
.ready-activity-widget p::before {
  content: "";
  width: 5px;
  height: 5px;
  margin-right: 5px;
  border-radius: 50%;
  display: inline-block;
  background: #1b83e9;
}
.ready-province-map {
  position: absolute;
  right: 21px;
  top: 35px;
  width: 216px;
  height: 186px;
  z-index: 3;
}
.ready-province-map svg,
.ready-province-map path { position: relative; }
.ready-map-pin {
  position: absolute;
  width: 34px;
  height: 34px;
  border-radius: 50% 50% 50% 4px;
  transform: rotate(-45deg);
}
.ready-map-pin::after {
  content: "";
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  background: #fff;
}
.ready-pin-blue { left: 40px; top: 85px; background: #176ff2; }
.ready-pin-green { right: 9px; top: 40px; background: #29b66f; }
.ready-woman {
  position: absolute;
  z-index: 6;
  left: 13px;
  bottom: -5px;
  width: 205px;
  height: 310px;
}
.ready-woman .hair { position: absolute; left: 34px; top: 19px; width: 104px; height: 135px; border-radius: 70px 70px 42px 42px; background: #061746; }
.ready-woman .face { position: absolute; left: 79px; top: 62px; width: 61px; height: 73px; border-radius: 45% 48% 48% 45%; background: #ffbe91; }
.ready-woman .body { position: absolute; left: 53px; top: 137px; width: 113px; height: 201px; border-radius: 54px 36px 0 0; background: linear-gradient(160deg,#0d74db,#0751ba); }
.ready-woman .arm { position: absolute; right: -11px; top: 178px; width: 114px; height: 35px; border-radius: 20px; background: #0b64ce; transform: rotate(-29deg); }
.ready-woman .arm::after { content: ""; position: absolute; right: -16px; top: 0; width: 32px; height: 29px; border-radius: 50%; background: #ffbe91; }
.ready-man-seated {
  position: absolute;
  z-index: 6;
  right: 149px;
  bottom: -21px;
  width: 230px;
  height: 286px;
}
.ready-man-seated .hair { position: absolute; left: 74px; top: 1px; width: 92px; height: 58px; border-radius: 60px 60px 26px 26px; background: #07143c; }
.ready-man-seated .face { position: absolute; left: 86px; top: 42px; width: 64px; height: 76px; border-radius: 44%; background: #ffbd8c; }
.ready-man-seated .glasses { position: absolute; left: 78px; top: 75px; width: 74px; height: 16px; border-top: 4px solid #101a4e; }
.ready-man-seated .body { position: absolute; left: 10px; top: 121px; width: 218px; height: 205px; border-radius: 80px 72px 0 0; background: linear-gradient(150deg,#162c61,#071541); }
.ready-man-standing {
  position: absolute;
  z-index: 6;
  right: 3px;
  bottom: -10px;
  width: 178px;
  height: 354px;
}
.ready-man-standing .hair { position: absolute; left: 46px; top: 6px; width: 85px; height: 64px; border-radius: 66px 66px 26px 26px; background: #07143c; }
.ready-man-standing .face { position: absolute; left: 64px; top: 55px; width: 56px; height: 70px; border-radius: 46%; background: #ffbd8c; }
.ready-man-standing .body { position: absolute; left: 25px; top: 131px; width: 116px; height: 222px; border-radius: 44px 44px 0 0; background: linear-gradient(180deg,#7db7ff,#4a91ec); }
.ready-man-standing .tablet { position: absolute; left: 2px; top: 224px; width: 83px; height: 65px; border-radius: 9px; transform: rotate(8deg); background: linear-gradient(135deg,#627fa3,#243b5f); }
.ready-dash-laptop {
  position: absolute;
  z-index: 7;
  left: 170px;
  bottom: 10px;
  width: 151px;
  height: 99px;
  border-radius: 6px;
  background: linear-gradient(180deg,#eaf5ff,#bfdffb);
  border: 8px solid #123a72;
  transform: skewX(-7deg);
  box-shadow: 0 10px 15px rgba(0,0,0,.13);
}
.ready-dash-laptop::after { content: ""; position: absolute; left: -21px; right: -21px; bottom: -20px; height: 13px; border-radius: 50%; background: #a8c7e9; }
.ready-dash-laptop span { position: absolute; left: 19px; top: 24px; width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; color: #075bd1; font-size: 13px; font-weight: 950; background: conic-gradient(#2c8df0 0 68%, #d2e9fb 68% 100%); }
.ready-dash-plant { position: absolute; right: 0; bottom: 17px; width: 52px; height: 78px; border-radius: 38px 38px 0 0; background: linear-gradient(180deg,#82d88a,#37a866); z-index: 4; }
.ready-dash-plant::before,.ready-dash-plant::after { content: ""; position: absolute; bottom: 0; width: 34px; height: 60px; border-radius: 30px 30px 0 0; background: #61c879; }
.ready-dash-plant::before { left: -25px; transform: rotate(-30deg); }
.ready-dash-plant::after { right: -20px; transform: rotate(29deg); }

.ready-primary-cta {
  height: 82px;
  margin: 0 30px 27px;
  padding: 0 35px 0 29px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 60px 1fr 52px;
  align-items: center;
  color: #fff;
  background: linear-gradient(180deg,#0a70e3,#0057d7);
  box-shadow: 0 15px 27px rgba(0,84,199,.28);
  transition: transform .18s ease, filter .18s ease;
}
.ready-primary-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.ready-primary-cta svg:first-child { width: 50px; height: 50px; opacity: .9; }
.ready-primary-cta span { text-align: center; font-size: 31px; line-height: 1; font-weight: 920; letter-spacing: -.8px; }
.ready-primary-cta svg:last-child { width: 43px; height: 43px; justify-self: end; }

@media (max-width: 820px) {
  .ready-page { border-radius: 0; }
  .ready-hero { min-height: 560px; padding: 50px 18px 0; }
  .ready-hero-copy { width: 100%; }
  .ready-hero-copy h1 { font-size: clamp(42px, 10vw, 60px); }
  .ready-hero-copy p { width: min(100%, 560px); font-size: 20px; }
  .ready-hero-art { transform: scale(.82); transform-origin: center top; width: 116%; left: -8%; top: 112px; }
  .ready-card-grid { padding: 0 18px; grid-template-columns: 1fr; }
  .ready-card { min-height: auto; }
  .ready-benefit-bar { margin-left: 18px; margin-right: 18px; flex-wrap: wrap; }
  .ready-dashboard-scene { height: 650px; }
  .ready-dashboard-art { transform: scale(.82); transform-origin: top center; width: 118%; left: -9%; }
}

@media (max-width: 520px) {
  .ready-hero { min-height: 520px; }
  .ready-hero-copy h1 { font-size: 39px; }
  .ready-hero-copy p { font-size: 18px; }
  .ready-hero-art { transform: scale(.62); width: 150%; left: -25%; top: 132px; }
  .ready-card-icon { width: 90px; height: 90px; font-size: 58px; }
  .ready-benefit-bar { justify-content: flex-start; gap: 14px; }
  .ready-benefit-bar strong { font-size: 17px; white-space: normal; }
  .ready-benefit-bar i { display: none; }
  .ready-dashboard-scene { height: 520px; }
  .ready-dashboard-art { transform: scale(.62); width: 150%; left: -25%; }
  .ready-primary-cta { height: 76px; margin-left: 18px; margin-right: 18px; grid-template-columns: 48px 1fr 38px; padding: 0 22px; }
  .ready-primary-cta span { font-size: 24px; }
}
`;
