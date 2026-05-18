import React from "react";
import Header from "../../components/Header";

const invitedTrend = [8, 20, 39, 57, 74, 88];
const completedTrend = [28, 40, 51, 68, 78, 74, 88];
const mapRegions = Array.from({ length: 46 }).map((_, index) => ({
  id: index,
  tone: ["#2d7fe9", "#5aa4f0", "#8bc2f5", "#b8d9fa", "#d6e9fc"][index % 5],
}));

export default function SoKHCNMonitorPage({ embedded = false }) {
  const Wrapper = embedded ? "section" : "div";
  const Content = embedded ? "div" : "main";

  return (
    <Wrapper
      id="so-theo-doi-ngay-trien-khai"
      className={embedded ? "monitor-bg monitor-bg--embedded" : "monitor-bg"}
    >
      <style>{css}</style>

      <Content className={embedded ? "monitor-page monitor-page--embedded" : "monitor-page"}>
        {!embedded && <Header activeKey="so-khcn" />}

        <section className="monitor-hero">
          <div className="monitor-hero-copy">
            <h1>
              Sở theo dõi gì trong <span>ngày triển khai?</span>
            </h1>
            <p>
              Trong ngày ra quân, Sở cần nhìn vào bức tranh tổng thể để bảo đảm chương trình đi đúng nhịp.
            </p>
          </div>

          <HeroBuilding />
        </section>

        <section className="dashboard-stack">
          <article className="wide-card invited-card">
            <div className="metric-summary">
              <h2>Số hộ được mời</h2>
              <div className="summary-row">
                <div className="circle-icon blue"><MegaphoneIcon /></div>
                <div>
                  <strong>25.680</strong>
                  <p>Hộ</p>
                </div>
              </div>
              <div className="change-pill green">↑ 14% <span>so với ngày trước</span></div>
            </div>
            <div className="divider" />
            <div className="chart-area line-chart-card">
              <h3>Xu hướng số hộ được mời theo giờ</h3>
              <LineChart values={invitedTrend} labels={["06h", "09h", "12h", "15h", "18h", "21h"]} color="#176ff2" />
              <div className="chart-callout"><strong>25.680</strong><span>Hộ</span></div>
            </div>
          </article>

          <div className="two-col">
            <article className="mini-card direct-card">
              <MetricHeader
                icon={<UsersIcon />}
                tone="green"
                title="Số hộ tham gia trực tiếp"
                value="12.456"
                unit="Hộ"
              />
              <Donut percent={48.5} tone="green" />
              <PercentNote percent="48,5%" text="so với số hộ được mời" tone="green" />
              <div className="change-pill green">↑ 18% <span>so với ngày trước</span></div>
            </article>

            <article className="mini-card online-card">
              <MetricHeader
                icon={<ComputerIcon />}
                tone="blue"
                title="Số hộ tham gia trực tuyến"
                value="3.128"
                unit="Hộ"
              />
              <Donut percent={12.2} tone="blue" />
              <PercentNote percent="12,2%" text="so với số hộ được mời" tone="blue" />
              <div className="change-pill green">↑ 16% <span>so với ngày trước</span></div>
            </article>
          </div>

          <article className="wide-card completed-card">
            <div className="metric-summary compact">
              <h2>Số hộ hoàn tất chuỗi 1+10 phút</h2>
              <div className="summary-row">
                <div className="circle-icon purple"><ClipboardCheckIcon /></div>
                <div>
                  <strong className="purple-text">8.742</strong>
                  <p>Hộ</p>
                </div>
              </div>
              <PercentNote percent="70,3%" text="so với số hộ tham gia trực tiếp" tone="purple" />
              <div className="change-pill green">↑ 22% <span>so với ngày trước</span></div>
            </div>
            <div className="divider" />
            <div className="chart-area bar-chart-card">
              <h3>Xu hướng hoàn tất theo giờ</h3>
              <BarChart values={completedTrend} color="#765ee8" />
            </div>
            <div className="completion-box">
              <h3>Tỷ lệ hoàn tất chuỗi 1+10 phút</h3>
              <strong>70,3%</strong>
              <p>Hôm nay</p>
              <div>↑ 8,6 điểm %<span>so với ngày trước</span></div>
            </div>
          </article>

          <article className="wide-card qr-card">
            <div className="metric-summary compact">
              <h2>Số hộ nhận QR và tự dán tại điểm bán</h2>
              <div className="summary-row">
                <div className="circle-icon orange"><QrIcon /></div>
                <div>
                  <strong className="orange-text">6.231</strong>
                  <p>Hộ</p>
                </div>
              </div>
              <PercentNote percent="57,1%" text="so với số hộ tham gia trực tiếp" tone="orange" />
              <div className="change-pill green">↑ 19% <span>so với ngày trước</span></div>
            </div>
            <div className="divider" />
            <div className="map-card">
              <h3>Phân bố theo địa bàn</h3>
              <MiniMap />
              <MapLegend />
            </div>
            <div className="priority-box">
              <h3>Điểm cần ưu tiên</h3>
              <strong><TargetSmallIcon /> 32</strong>
              <p>xã/phường</p>
              <span>Tỷ lệ nhận QR &lt; 40%</span>
              <a href="#danh-sach-uu-tien">Xem danh sách <ArrowRightIcon /></a>
            </div>
          </article>
        </section>

        <a href="#dashboard" className="monitor-primary-cta">
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
    <div className="monitor-hero-art" aria-hidden="true">
      <div className="cloud mh-cloud-1" />
      <div className="cloud mh-cloud-2" />
      <div className="skyline mh-skyline-1"><i /><i /><i /></div>
      <div className="skyline mh-skyline-2"><i /><i /><i /></div>
      <div className="mh-tree left" />
      <div className="mh-tree right" />
      <div className="mh-bush left" />
      <div className="mh-bush right" />
      <div className="mh-building">
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

function MetricHeader({ icon, tone, title, value, unit }) {
  return (
    <div className="metric-header">
      <h2>{title}</h2>
      <div className="metric-main-row">
        <div className={`circle-icon ${tone}`}>{icon}</div>
        <div className="metric-number">
          <strong className={`${tone}-text`}>{value}</strong>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  );
}

function PercentNote({ percent, text, tone }) {
  return (
    <div className={`percent-note ${tone}`}>
      <b>{percent}</b> <span>{text}</span>
      <i />
    </div>
  );
}

function Donut({ percent, tone }) {
  const color = tone === "green" ? "#30b979" : "#176ff2";
  return (
    <div
      className={`monitor-donut ${tone}`}
      style={{ background: `conic-gradient(${color} 0 ${percent}%, #deebfb ${percent}% 100%)` }}
    >
      <span>{String(percent).replace(".", ",")}%</span>
    </div>
  );
}

function LineChart({ values, labels, color }) {
  const points = values.map((value, index) => {
    const x = 34 + index * 75;
    const y = 138 - value * 1.2;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="line-chart">
      <svg viewBox="0 0 455 170" preserveAspectRatio="none">
        {[0, 1, 2, 3, 4, 5].map((row) => <line key={row} x1="34" x2="425" y1={28 + row * 24} y2={28 + row * 24} />)}
        {["30K", "25K", "20K", "15K", "10K", "5K", "0"].map((label, index) => (
          <text key={label} x="2" y={18 + index * 22}>{label}</text>
        ))}
        <polyline points={points} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {values.map((value, index) => {
          const x = 34 + index * 75;
          const y = 138 - value * 1.2;
          return <circle key={index} cx={x} cy={y} r="6" fill={color} stroke="#fff" strokeWidth="3" />;
        })}
        {labels.map((label, index) => <text key={label} x={27 + index * 75} y="164" className="x-label">{label}</text>)}
      </svg>
    </div>
  );
}

function BarChart({ values, color }) {
  const labels = ["06h", "09h", "12h", "15h", "18h", "21h"];
  return (
    <div className="bar-chart">
      <svg viewBox="0 0 390 160" preserveAspectRatio="none">
        {[0, 1, 2, 3, 4].map((row) => <line key={row} x1="38" x2="370" y1={24 + row * 28} y2={24 + row * 28} />)}
        {["10K", "8K", "6K", "4K", "2K", "0"].map((label, index) => <text key={label} x="5" y={21 + index * 25}>{label}</text>)}
        {values.slice(0, 6).map((value, index) => {
          const x = 55 + index * 53;
          const h = value * 1.08;
          return <rect key={index} x={x} y={132 - h} width="22" height={h} rx="5" fill={color} opacity=".65" />;
        })}
        <polyline
          points={values.map((v, i) => `${66 + i * 53},${132 - v * 1.08}`).join(" ")}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeDasharray="8 6"
          strokeLinecap="round"
        />
        {values.map((value, index) => <circle key={index} cx={66 + index * 53} cy={132 - value * 1.08} r="6" fill={color} stroke="#fff" strokeWidth="3" />)}
        {labels.map((label, index) => <text key={label} x={50 + index * 53} y="154" className="x-label">{label}</text>)}
      </svg>
    </div>
  );
}

function MiniMap() {
  return (
    <svg className="mini-map" viewBox="0 0 255 150" fill="none">
      {mapRegions.map((region, index) => {
        const col = index % 10;
        const row = Math.floor(index / 10);
        const x = 20 + col * 19 + (row % 2) * 8;
        const y = 16 + row * 24 + (col % 3) * 4;
        return <path key={region.id} d={`M${x},${y} l16,-7 l15,8 l-4,17 l-18,6 l-15,-10 z`} fill={region.tone} stroke="#fff" strokeWidth="2" />;
      })}
    </svg>
  );
}

function MapLegend() {
  const items = [
    ["> 1.000", "#235fe4"],
    ["501 - 1.000", "#5aa4f0"],
    ["201 - 500", "#8bc2f5"],
    ["101 - 200", "#b8d9fa"],
    ["≤ 100", "#d6e9fc"],
  ];

  return (
    <ul className="map-legend">
      {items.map(([label, color]) => (
        <li key={label}><span style={{ background: color }} />{label}</li>
      ))}
    </ul>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function MegaphoneIcon() { return <Svg><path d="M4 14h3l9 4V6l-9 4H4v4Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/><path d="M7 14v4a2 2 0 0 0 2 2h1" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/><path d="M19 9c1 1.4 1 4.6 0 6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function UsersIcon() { return <Svg><path d="M8.5 11a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Zm7 0a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z" fill="currentColor"/><path d="M2.8 20c.4-4.4 2.7-6.8 5.8-6.8s5.3 2.4 5.7 6.8H2.8Zm7.7 0c.4-4.3 2.6-6.8 5.2-6.8 3 0 5.2 2.4 5.5 6.8H10.5Z" fill="currentColor" opacity=".78"/></Svg>; }
function ComputerIcon() { return <Svg><rect x="4" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="2.3"/><path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/><circle cx="12" cy="10.5" r="2.6" stroke="currentColor" strokeWidth="2"/><path d="M9.5 10.5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function ClipboardCheckIcon() { return <Svg><path d="M8 5h8M9 3h6v4H9V3Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6h12v15H6V6Z" stroke="currentColor" strokeWidth="2.2"/><path d="m9 12 1.5 1.5L14 10M9 17h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function QrIcon() { return <Svg><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function TargetSmallIcon() { return <Svg><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.4"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.4"/><path d="M15 9 21 3M18 3h3v3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
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

.monitor-bg {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at top, #fff 0, #e9f6ff 47%, #dceefa 100%);
}
.monitor-bg--embedded {
  min-height: auto;
  display: block;
  background: transparent;
}
.monitor-page {
  width: min(100%, 928px);
  min-height: 100vh;
  overflow: hidden;
  border-radius: 0 0 28px 28px;
  background:
    radial-gradient(circle at 77% 8%, rgba(255,255,255,.9) 0 13%, rgba(255,255,255,0) 35%),
    linear-gradient(180deg, #f9fdff 0%, #eef8ff 58%, #f8fdff 100%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.72) inset;
}
.monitor-page--embedded {
  width: 100%;
  min-height: auto;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.monitor-hero {
  position: relative;
  min-height: 403px;
  padding: 51px 27px 0;
}
.monitor-page--embedded .monitor-hero { padding-top: 70px; }
.monitor-hero-copy {
  position: relative;
  z-index: 5;
  width: 610px;
  padding-left: 14px;
}
.monitor-hero-copy h1 {
  margin: 0 0 23px;
  color: #10175c;
  font-size: 58px;
  line-height: 1.12;
  font-weight: 950;
  letter-spacing: -2.4px;
}
.monitor-hero-copy h1 span { color: #075bd1; }
.monitor-hero-copy p {
  width: 560px;
  margin: 0;
  color: #4a5885;
  font-size: 23px;
  line-height: 1.47;
  font-weight: 500;
}
.monitor-hero-art {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.cloud, .cloud::before, .cloud::after {
  position: absolute;
  border-radius: 999px;
  background: rgba(255,255,255,.95);
  content: "";
}
.mh-cloud-1 { right: 30px; top: 86px; width: 72px; height: 14px; }
.mh-cloud-1::before { width: 30px; height: 30px; left: 14px; top: -15px; }
.mh-cloud-1::after { width: 40px; height: 40px; left: 38px; top: -24px; }
.mh-cloud-2 { right: 323px; top: 122px; width: 74px; height: 14px; opacity: .72; }
.mh-cloud-2::before { width: 28px; height: 28px; left: 16px; top: -13px; }
.mh-cloud-2::after { width: 37px; height: 37px; left: 39px; top: -22px; }
.skyline { position: absolute; display: flex; align-items: flex-end; gap: 11px; opacity: .58; }
.mh-skyline-1 { right: 28px; top: 101px; }
.mh-skyline-2 { right: 300px; top: 157px; }
.skyline i { display: block; width: 39px; height: 99px; border-radius: 11px 11px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.2), rgba(85,154,219,.06)); }
.skyline i:nth-child(2) { height: 135px; }
.skyline i:nth-child(3) { height: 82px; }
.mh-building {
  position: absolute;
  right: 20px;
  bottom: 4px;
  width: 392px;
  height: 273px;
  filter: drop-shadow(0 14px 18px rgba(28,104,196,.15));
}
.flag-pole { position: absolute; right: 54px; top: 16px; width: 4px; height: 78px; border-radius: 999px; background: #1768d2; }
.flag-vn { position: absolute; right: -2px; top: 28px; width: 66px; height: 45px; border-radius: 2px 12px 12px 2px; display: grid; place-items: center; color: #ffe33b; background: #ef3124; transform: skewY(5deg); }
.mh-building .roof { position: absolute; left: 64px; top: 46px; width: 264px; height: 91px; clip-path: polygon(50% 0, 100% 72%, 92% 100%, 8% 100%, 0 72%); background: linear-gradient(180deg, #edf7ff, #9acfff 58%, #5ca2f2); display: flex; align-items: center; justify-content: center; padding-top: 36px; }
.mh-building .roof span { width: 54px; height: 54px; border-radius: 50%; display: grid; place-items: center; color: #ffe33b; background: #ef3124; font-size: 27px; }
.mh-building .body { position: absolute; left: 37px; top: 132px; width: 319px; height: 121px; border-radius: 9px 9px 2px 2px; border-top: 9px solid #2379d7; background: linear-gradient(180deg, #d6ebff, #74b8fb); }
.mh-building .columns { position: absolute; left: 68px; right: 68px; top: -3px; display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
.mh-building .columns i { height: 124px; border-radius: 5px 5px 0 0; background: linear-gradient(90deg, #f2f9ff, #8cc5fb, #e8f5ff); }
.mh-building .windows { position: absolute; inset: 27px 18px 20px; display: grid; grid-template-columns: repeat(4,1fr); gap: 12px 31px; }
.mh-building .windows b { height: 31px; border-radius: 3px; background: linear-gradient(180deg, #65b8ff, #126ed3); }
.mh-building .door { position: absolute; left: 139px; bottom: 0; width: 40px; height: 60px; border-radius: 5px 5px 0 0; background: #064ea6; }
.mh-building .steps { position: absolute; left: 15px; right: 15px; bottom: 0; height: 22px; border-radius: 4px; background: linear-gradient(180deg, #c7e4ff, #8cc8ff); }
.mh-tree { position: absolute; width: 62px; height: 116px; border-radius: 44px 44px 14px 14px; background: linear-gradient(180deg, #76d28a, #3ba96a); }
.mh-tree::before { content: ""; position: absolute; left: 29px; top: 43px; width: 5px; height: 72px; border-radius: 999px; background: #267556; }
.mh-tree.left { right: 390px; bottom: 25px; transform: scale(.82); }
.mh-tree.right { right: 0; bottom: 29px; transform: scale(.88); }
.mh-bush { position: absolute; width: 103px; height: 42px; border-radius: 80px 80px 0 0; background: linear-gradient(180deg, #71ce84, #39a86a); }
.mh-bush.left { right: 392px; bottom: 0; }
.mh-bush.right { right: -18px; bottom: 0; }

.dashboard-stack { position: relative; z-index: 6; padding: 0 22px; display: grid; gap: 14px; }
.wide-card, .mini-card {
  border-radius: 16px;
  background: rgba(255,255,255,.97);
  box-shadow: 0 13px 27px rgba(31,101,178,.12);
}
.wide-card { min-height: 248px; padding: 24px 25px; display: grid; align-items: stretch; }
.invited-card { grid-template-columns: 285px 1px 1fr; gap: 22px; }
.metric-summary h2, .mini-card h2, .chart-area h3, .map-card h3, .completion-box h3, .priority-box h3 {
  margin: 0;
  color: #111a63;
  font-size: 19px;
  line-height: 1.25;
  font-weight: 890;
}
.summary-row { display: flex; align-items: center; gap: 21px; margin-top: 22px; }
.circle-icon { width: 73px; height: 73px; border-radius: 50%; display: grid; place-items: center; color: #fff; font-size: 43px; flex: 0 0 auto; }
.circle-icon.blue { background: linear-gradient(135deg,#2d8eff,#075fdf); }
.circle-icon.green { background: linear-gradient(135deg,#49cc83,#24a96e); }
.circle-icon.orange { background: linear-gradient(135deg,#ffae38,#ff8216); }
.circle-icon.purple { background: linear-gradient(135deg,#8b70f4,#6547d5); }
.summary-row strong, .metric-header strong { display: block; color: #176ff2; font-size: 41px; line-height: 1; font-weight: 950; letter-spacing: -1px; }
.summary-row p, .metric-header p { margin: 9px 0 0; color: #3d4c7a; font-size: 18px; line-height: 1; font-weight: 500; }
.green-text { color: #30b979 !important; }
.blue-text { color: #176ff2 !important; }
.orange-text { color: #ff8a18 !important; }
.purple-text { color: #765ee8 !important; }
.change-pill { height: 46px; margin-top: 24px; padding: 0 14px; border-radius: 7px; display: flex; align-items: center; gap: 8px; background: #f0f6fd; font-size: 17px; font-weight: 900; }
.change-pill.green { color: #24b26f; }
.change-pill span { color: #354576; font-size: 14.5px; font-weight: 700; }
.divider { width: 1px; background: #d4e5f6; }
.chart-area { position: relative; min-width: 0; }
.chart-area h3 { font-size: 16px; margin-bottom: 10px; }
.line-chart, .bar-chart { width: 100%; height: 172px; }
.line-chart svg, .bar-chart svg { width: 100%; height: 100%; overflow: visible; }
.line-chart line, .bar-chart line { stroke: #d9e7f6; stroke-width: 1.5; }
.line-chart text, .bar-chart text { fill: #40517e; font-size: 12px; font-weight: 700; }
.line-chart .x-label, .bar-chart .x-label { font-size: 13px; }
.chart-callout { position: absolute; right: 10px; top: 47px; width: 86px; height: 54px; border-radius: 9px; display: grid; place-items: center; color: #176ff2; background: #f0f6ff; box-shadow: 0 8px 16px rgba(31,101,178,.12); }
.chart-callout strong { display: block; font-size: 18px; line-height: 1; }
.chart-callout span { font-size: 12px; color: #354576; }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.mini-card { min-height: 269px; position: relative; padding: 22px 24px 20px; }
.metric-header { display: block; }
.metric-header h2 { margin-bottom: 18px; }
.metric-main-row { display: flex; align-items: center; gap: 18px; }
.metric-header .circle-icon { width: 70px; height: 70px; font-size: 42px; }
.metric-number strong { margin-top: 0; }
.metric-number p { margin-top: 9px; }
.monitor-donut { position: absolute; right: 31px; top: 56px; width: 118px; height: 118px; border-radius: 50%; display: grid; place-items: center; }
.monitor-donut::before { content: ""; position: absolute; inset: 21px; border-radius: 50%; background: #fff; box-shadow: inset 0 0 0 1px #e0ebf6; }
.monitor-donut::after { content: none !important; display: none !important; }
.monitor-donut span { position: relative; z-index: 1; color: #176ff2; font-size: 22px; font-weight: 950; }
.monitor-donut.green span { color: #30b979; }
.percent-note { margin-top: 25px; color: #334574; font-size: 15px; font-weight: 760; }
.percent-note b { font-size: 18px; }
.percent-note.green b { color: #30b979; }
.percent-note.blue b { color: #176ff2; }
.percent-note.purple b { color: #765ee8; }
.percent-note.orange b { color: #ff8a18; }
.percent-note i { display: block; height: 8px; margin-top: 12px; border-radius: 999px; background: linear-gradient(90deg, currentColor 0 48%, #dfeaf7 48% 100%); opacity: .75; }
.completed-card { grid-template-columns: 285px 1px 1fr 145px; gap: 18px; min-height: 232px; }
.metric-summary.compact .summary-row { margin-top: 17px; }
.metric-summary.compact .circle-icon { width: 70px; height: 70px; font-size: 42px; }
.metric-summary.compact .change-pill { margin-top: 15px; }
.bar-chart-card h3 { font-size: 16px; }
.completion-box, .priority-box { border: 1px solid #d6e7f9; border-radius: 12px; padding: 18px 16px; background: #fff; box-shadow: 0 8px 18px rgba(31,101,178,.07); }
.completion-box h3, .priority-box h3 { font-size: 14px; line-height: 1.35; }
.completion-box strong { display: block; margin: 17px 0 4px; color: #765ee8; font-size: 32px; line-height: 1; font-weight: 950; }
.completion-box p, .priority-box p { margin: 0; color: #40517e; font-size: 13px; font-weight: 650; }
.completion-box div { margin-top: 20px; color: #22ad6c; font-size: 15px; font-weight: 900; }
.completion-box div span { display: block; margin-top: 7px; color: #40517e; font-size: 12px; font-weight: 650; }
.qr-card { grid-template-columns: 285px 1px 1fr 161px; gap: 18px; min-height: 232px; }
.map-card {
  min-width: 0;
  overflow: hidden;
}

.map-card h3 {
  font-size: 16px;
  margin-bottom: 4px;
}

.mini-map {
  display: block;
  width: 245px;
  height: 112px;
  margin: 4px auto 2px;
}

.map-legend {
  position: static;
  margin: 2px 0 0;
  padding: 0;
  list-style: none;
  color: #40517e;
  font-size: 11px;
  line-height: 1.45;
  font-weight: 700;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
  column-gap: 16px;
  row-gap: 3px;
}

.map-legend li {
  display: flex;
  align-items: center;
  gap: 6px;
}

.map-legend span {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
}
.priority-box strong { display: flex; align-items: center; gap: 8px; margin: 18px 0 5px; color: #176ff2; font-size: 30px; line-height: 1; font-weight: 950; }
.priority-box strong svg { width: 28px; height: 28px; }
.priority-box > span { display: block; margin: 22px 0 14px; color: #40517e; font-size: 13px; line-height: 1.3; font-weight: 750; }
.priority-box a { height: 42px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 6px; color: #176ff2; border: 1.5px solid #176ff2; font-size: 14px; font-weight: 850; }
.priority-box a svg { width: 17px; height: 17px; }
.monitor-primary-cta {
  height: 82px;
  margin: 14px 30px 27px;
  padding: 0 35px 0 29px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 60px 1fr 52px;
  align-items: center;
  color: #fff;
  background: linear-gradient(180deg, #0a70e3, #0057d7);
  box-shadow: 0 15px 27px rgba(0,84,199,.28);
  transition: transform .18s ease, filter .18s ease;
}
.monitor-primary-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.monitor-primary-cta svg:first-child { width: 50px; height: 50px; opacity: .9; }
.monitor-primary-cta span { text-align: center; font-size: 31px; line-height: 1; font-weight: 920; letter-spacing: -.8px; }
.monitor-primary-cta svg:last-child { width: 43px; height: 43px; justify-self: end; }

@media (max-width: 820px) {
  .monitor-page { border-radius: 0; }
  .monitor-hero { min-height: 565px; padding: 50px 18px 0; }
  .monitor-hero-copy { width: 100%; padding-left: 0; }
  .monitor-hero-copy h1 { font-size: clamp(42px, 10vw, 58px); }
  .monitor-hero-copy p { width: min(100%, 560px); font-size: 20px; }
  .monitor-hero-art { transform: scale(.82); transform-origin: center top; width: 116%; left: -8%; top: 95px; }
  .invited-card, .completed-card, .qr-card { grid-template-columns: 1fr; gap: 16px; }
  .divider { width: 100%; height: 1px; }
  .two-col { grid-template-columns: 1fr; }
  .monitor-donut { right: 28px; }
  .map-legend { position: static; margin: 0; display: grid; grid-template-columns: repeat(2, max-content); column-gap: 18px; }
}

@media (max-width: 520px) {
  .monitor-hero { min-height: 510px; }
  .monitor-hero-copy h1 { font-size: 38px; }
  .monitor-hero-copy p { font-size: 18px; }
  .monitor-hero-art { transform: scale(.62); width: 150%; left: -25%; top: 124px; }
  .dashboard-stack { padding: 0 14px; }
  .wide-card, .mini-card { padding: 20px 18px; }
  .summary-row strong, .metric-header strong { font-size: 34px; }
  .circle-icon, .metric-header .circle-icon { width: 62px; height: 62px; font-size: 37px; }
  .metric-header { align-items: flex-start; }
  .monitor-donut { position: relative; right: auto; top: auto; margin: 20px auto 0; }
  .completion-box, .priority-box { margin-top: 6px; }
  .mini-map { width: 100%; }
  .monitor-primary-cta { height: 76px; margin-left: 18px; margin-right: 18px; grid-template-columns: 48px 1fr 38px; padding: 0 22px; }
  .monitor-primary-cta span { font-size: 24px; }
}
`;
