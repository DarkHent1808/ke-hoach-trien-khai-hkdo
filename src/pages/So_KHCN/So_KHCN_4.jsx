import React from "react";
import Header from "../../components/Header";

const resultCards = [
  {
    type: "line",
    tone: "blue",
    icon: <UserCheckIcon />,
    title: "Tỷ lệ hộ còn hoạt động sau 7 ngày",
    value: "72%",
    change: "Tăng 14% so với tuần trước",
    values: [8, 18, 33, 38, 52, 60, 82],
  },
  {
    type: "line",
    tone: "green",
    icon: <CalendarIcon />,
    title: "Tỷ lệ hộ còn hoạt động sau 30 ngày",
    value: "58%",
    change: "Tăng 9% so với tháng trước",
    values: [4, 15, 33, 43, 53, 60, 86],
  },
  {
    type: "donut",
    tone: "purple",
    icon: <QrIcon />,
    title: "Tỷ lệ hộ giữ QR tại điểm bán",
    value: "81%",
    change: "Tăng 11% so với tháng trước",
  },
  {
    type: "bar",
    tone: "orange",
    icon: <CartPlusIcon />,
    title: "Số hộ phát sinh thêm sản phẩm hoặc đơn hàng",
    value: "1.246",
    change: "Tăng 23% so với tháng trước",
    values: [20, 28, 39, 52, 53, 64, 49, 82, 100],
  },
  {
    type: "bar",
    tone: "teal",
    icon: <MegaphoneIcon />,
    title: "Số điểm truyền thông cộng đồng đã kích hoạt",
    value: "1.284",
    change: "Tăng 12% so với tháng trước",
    values: [18, 27, 39, 25, 52, 68, 48, 90, 118],
  },
];

export default function SoKHCNResultPage({ embedded = false }) {
  const Wrapper = embedded ? "section" : "div";
  const Content = embedded ? "div" : "main";

  return (
    <Wrapper
      id="so-nhin-ket-qua"
      className={embedded ? "result-bg result-bg--embedded" : "result-bg"}
    >
      <style>{css}</style>

      <Content className={embedded ? "result-page result-page--embedded" : "result-page"}>
        {!embedded && <Header activeKey="so-khcn" />}

        <section className="result-hero">
          <div className="result-hero-copy">
            <h1>
              Sở cần nhìn vào <span>kết quả nào?</span>
            </h1>
            <p>
              Sau buổi phát động, trọng tâm là duy trì, đo hiệu quả thực tế và rút kinh nghiệm để mở rộng.
            </p>
          </div>

          <HeroBuilding />
        </section>

        <section className="result-card-stack">
          {resultCards.map((card) => (
            <article className={`result-card result-card--${card.type}`} key={card.title}>
              <div className={`result-card-icon ${card.tone}`}>{card.icon}</div>

              <div className="result-card-copy">
                <h2>{card.title}</h2>
                <strong className={card.tone}>{card.value}</strong>
                <p><span>↑</span>{card.change}</p>
              </div>

              <div className="result-card-visual">
                {card.type === "line" && <ResultLineChart values={card.values} tone={card.tone} />}
                {card.type === "bar" && <ResultBarChart values={card.values} tone={card.tone} />}
                {card.type === "donut" && <QrRetentionDonut />}
              </div>
            </article>
          ))}

          <article className="report-card">
            <div className="report-icon"><ReportIcon /></div>
            <div className="report-copy">
              <h2>Tải mẫu báo cáo</h2>
              <p>Tải mẫu báo cáo tổng hợp kết quả triển khai HKDO dành cho Sở KHCN.</p>
            </div>
            <a href="#tai-mau-bao-cao" className="report-button">
              <DownloadIcon />
              <span>Tải mẫu báo cáo</span>
            </a>
          </article>
        </section>

        <a href="#dashboard" className="result-primary-cta">
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
    <div className="result-hero-art" aria-hidden="true">
      <div className="result-cloud cloud-a" />
      <div className="result-cloud cloud-b" />
      <div className="result-skyline skyline-a"><i /><i /><i /></div>
      <div className="result-skyline skyline-b"><i /><i /><i /></div>
      <div className="result-tree tree-a" />
      <div className="result-tree tree-b" />
      <div className="result-building">
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

function ResultLineChart({ values, tone }) {
  const color = tone === "green" ? "#28a968" : "#176ff2";
  const points = values.map((value, index) => {
    const x = 12 + index * 58;
    const y = 112 - value;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg className="result-line-chart" viewBox="0 0 380 125" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`lineArea-${tone}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.18" />
          <stop offset="1" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {[0, 1, 2].map((row) => <line key={row} x1="8" x2="372" y1={28 + row * 34} y2={28 + row * 34} />)}
      <polygon points={`12,112 ${points} 360,112`} fill={`url(#lineArea-${tone})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {values.map((value, index) => (
        <circle key={index} cx={12 + index * 58} cy={112 - value} r="5.5" fill={color} stroke="#fff" strokeWidth="3" />
      ))}
    </svg>
  );
}

function ResultBarChart({ values, tone }) {
  const color = tone === "teal" ? "#26a8bc" : "#ff8a18";

  return (
    <svg className="result-bar-chart" viewBox="0 0 310 125" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`barGradient-${tone}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="1" />
          <stop offset="1" stopColor={color} stopOpacity="0.72" />
        </linearGradient>
      </defs>
      {values.map((value, index) => {
        const h = Math.max(10, value * 0.82);
        const x = 18 + index * 31;
        return <rect key={index} x={x} y={113 - h} width="21" height={h} rx="4" fill={`url(#barGradient-${tone})`} />;
      })}
      <line x1="12" x2="296" y1="113" y2="113" stroke="#d8e7f6" strokeWidth="2" />
    </svg>
  );
}

function QrRetentionDonut() {
  return (
    <div className="qr-retention-wrap">
      <div className="qr-retention-donut">
        <span />
      </div>
      <ul className="qr-retention-legend">
        <li><span className="keep" />Giữ QR <b>81%</b></li>
        <li><span className="drop" />Không giữ <b>19%</b></li>
      </ul>
    </div>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function UserCheckIcon() { return <Svg><path d="M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="currentColor"/><path d="M3 21c.6-5 3-7.6 7-7.6 2.3 0 4.1.9 5.2 2.7" fill="currentColor" opacity=".82"/><circle cx="17" cy="16" r="5" fill="currentColor"/><path d="m14.8 16 1.5 1.5 3-3.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function CalendarIcon() { return <Svg><rect x="4" y="5" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2.3"/><path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/><text x="7" y="18" fill="currentColor" fontSize="7" fontWeight="900">30</text></Svg>; }
function QrIcon() { return <Svg><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function CartPlusIcon() { return <Svg><path d="M5 5h2l2 11h8l2-7H9" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="20" r="1.7" fill="currentColor"/><circle cx="17" cy="20" r="1.7" fill="currentColor"/><path d="M18 13h4M20 11v4" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function MegaphoneIcon() { return <Svg><path d="M4 14h3l9 4V6l-9 4H4v4Z" fill="currentColor"/><path d="M7 14v4a2 2 0 0 0 2 2h1" stroke="#fff" strokeWidth="2.1" strokeLinecap="round"/><path d="M19 9c1 1.4 1 4.6 0 6" stroke="#fff" strokeWidth="2.1" strokeLinecap="round"/></Svg>; }
function ReportIcon() { return <Svg><path d="M6 3h9l4 4v14H6V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/><path d="M15 3v5h4M9 12h6M9 16h6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function DownloadIcon() { return <Svg><path d="M12 4v10M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 18v2h14v-2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
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

.result-bg {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at top, #fff 0, #e9f6ff 47%, #dceefa 100%);
}
.result-bg--embedded {
  min-height: auto;
  display: block;
  background: transparent;
}
.result-page {
  width: min(100%, 928px);
  min-height: 100vh;
  overflow: hidden;
  border-radius: 0 0 28px 28px;
  background:
    radial-gradient(circle at 77% 8%, rgba(255,255,255,.9) 0 13%, rgba(255,255,255,0) 35%),
    linear-gradient(180deg, #f9fdff 0%, #eef8ff 58%, #f8fdff 100%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.72) inset;
}
.result-page--embedded {
  width: 100%;
  min-height: auto;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.result-hero {
  position: relative;
  min-height: 420px;
  padding: 51px 27px 0;
}
.result-page--embedded .result-hero { padding-top: 70px; }
.result-hero-copy {
  position: relative;
  z-index: 5;
  width: 520px;
  padding-left: 14px;
}
.result-hero-copy h1 {
  margin: 0 0 24px;
  color: #10175c;
  font-size: 61px;
  line-height: 1.12;
  font-weight: 950;
  letter-spacing: -2.6px;
}
.result-hero-copy h1 span {
  display: block;
  color: #075bd1;
}
.result-hero-copy p {
  width: 520px;
  margin: 0;
  color: #4a5885;
  font-size: 22px;
  line-height: 1.48;
  font-weight: 500;
}

.result-hero-art {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.result-cloud,
.result-cloud::before,
.result-cloud::after {
  position: absolute;
  border-radius: 999px;
  background: rgba(255,255,255,.95);
  content: "";
}
.result-cloud.cloud-a { right: 22px; top: 93px; width: 73px; height: 14px; }
.result-cloud.cloud-a::before { width: 30px; height: 30px; left: 13px; top: -15px; }
.result-cloud.cloud-a::after { width: 39px; height: 39px; left: 38px; top: -24px; }
.result-cloud.cloud-b { right: 342px; top: 134px; width: 74px; height: 14px; opacity: .7; }
.result-cloud.cloud-b::before { width: 28px; height: 28px; left: 16px; top: -13px; }
.result-cloud.cloud-b::after { width: 37px; height: 37px; left: 39px; top: -22px; }
.result-skyline { position: absolute; display: flex; align-items: flex-end; gap: 12px; opacity: .58; }
.result-skyline.skyline-a { right: 25px; top: 111px; }
.result-skyline.skyline-b { right: 316px; top: 167px; }
.result-skyline i { display: block; width: 38px; height: 96px; border-radius: 11px 11px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.2), rgba(85,154,219,.06)); }
.result-skyline i:nth-child(2) { height: 132px; }
.result-skyline i:nth-child(3) { height: 80px; }
.result-building {
  position: absolute;
  right: 13px;
  bottom: 0;
  width: 405px;
  height: 285px;
  filter: drop-shadow(0 14px 18px rgba(28,104,196,.15));
}
.result-building .flag-pole { position: absolute; right: 54px; top: 18px; width: 4px; height: 82px; border-radius: 999px; background: #1768d2; }
.result-building .flag-vn { position: absolute; right: -2px; top: 32px; width: 67px; height: 46px; border-radius: 2px 12px 12px 2px; display: grid; place-items: center; color: #ffe33b; background: #ef3124; transform: skewY(5deg); }
.result-building .roof { position: absolute; left: 66px; top: 50px; width: 272px; height: 93px; clip-path: polygon(50% 0, 100% 72%, 92% 100%, 8% 100%, 0 72%); background: linear-gradient(180deg, #edf7ff, #9acfff 58%, #5ca2f2); display: flex; align-items: center; justify-content: center; padding-top: 37px; }
.result-building .roof span { width: 55px; height: 55px; border-radius: 50%; display: grid; place-items: center; color: #ffe33b; background: #ef3124; font-size: 27px; }
.result-building .body { position: absolute; left: 38px; top: 138px; width: 328px; height: 124px; border-radius: 9px 9px 2px 2px; border-top: 9px solid #2379d7; background: linear-gradient(180deg, #d6ebff, #74b8fb); }
.result-building .columns { position: absolute; left: 70px; right: 70px; top: -3px; display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
.result-building .columns i { height: 127px; border-radius: 5px 5px 0 0; background: linear-gradient(90deg, #f2f9ff, #8cc5fb, #e8f5ff); }
.result-building .windows { position: absolute; inset: 28px 19px 20px; display: grid; grid-template-columns: repeat(4,1fr); gap: 12px 32px; }
.result-building .windows b { height: 31px; border-radius: 3px; background: linear-gradient(180deg, #65b8ff, #126ed3); }
.result-building .door { position: absolute; left: 143px; bottom: 0; width: 41px; height: 62px; border-radius: 5px 5px 0 0; background: #064ea6; }
.result-building .steps { position: absolute; left: 15px; right: 15px; bottom: 0; height: 22px; border-radius: 4px; background: linear-gradient(180deg, #c7e4ff, #8cc8ff); }
.result-tree { position: absolute; width: 62px; height: 116px; border-radius: 44px 44px 14px 14px; background: linear-gradient(180deg, #76d28a, #3ba96a); }
.result-tree::before { content: ""; position: absolute; left: 29px; top: 43px; width: 5px; height: 72px; border-radius: 999px; background: #267556; }
.result-tree.tree-a { right: 397px; bottom: 5px; transform: scale(.78); }
.result-tree.tree-b { right: -3px; bottom: 7px; transform: scale(.85); }

.result-card-stack {
  position: relative;
  z-index: 6;
  padding: 0 33px;
  display: grid;
  gap: 12px;
}
.result-card,
.report-card {
  min-height: 166px;
  border-radius: 18px;
  background: rgba(255,255,255,.97);
  box-shadow: 0 13px 27px rgba(31,101,178,.12);
}
.result-card {
  display: grid;
  grid-template-columns: 125px 1fr 390px;
  align-items: center;
  column-gap: 20px;
  padding: 25px 26px 22px;
}
.result-card-icon {
  width: 108px;
  height: 108px;
  border-radius: 24px;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 68px;
}
.result-card-icon.blue { background: linear-gradient(135deg, #55a0ff, #0867e1); }
.result-card-icon.green { background: linear-gradient(135deg, #5fcf85, #21a866); }
.result-card-icon.purple { background: linear-gradient(135deg, #8d74f5, #6547d5); }
.result-card-icon.orange { background: linear-gradient(135deg, #ffaf37, #ff8216); }
.result-card-icon.teal { background: linear-gradient(135deg, #52cbd2, #17a2b7); }
.result-card-copy h2 {
  margin: 0 0 14px;
  color: #111a63;
  font-size: 22px;
  line-height: 1.22;
  font-weight: 900;
}
.result-card-copy strong {
  display: block;
  font-size: 43px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -1px;
}
.result-card-copy strong.blue { color: #176ff2; }
.result-card-copy strong.green { color: #24a969; }
.result-card-copy strong.purple { color: #765ee8; }
.result-card-copy strong.orange { color: #ff8a18; }
.result-card-copy strong.teal { color: #26a8bc; }
.result-card-copy p {
  margin: 12px 0 0;
  color: #4e5c88;
  font-size: 17px;
  line-height: 1.2;
  font-weight: 580;
}
.result-card-copy p span {
  margin-right: 8px;
  color: #22ad6c;
  font-size: 26px;
  line-height: 0;
  font-weight: 900;
}
.result-card-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}
.result-line-chart {
  width: 380px;
  height: 125px;
}
.result-line-chart line {
  stroke: #dbe9f7;
  stroke-width: 1.5;
}
.result-bar-chart {
  width: 310px;
  height: 125px;
  align-self: end;
}
.qr-retention-wrap {
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
}
.qr-retention-donut {
  width: 111px;
  height: 111px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(#765ee8 0 81%, #d7d2f7 81% 100%);
}
.qr-retention-donut span {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #fff;
  box-shadow: inset 0 0 0 1px #e1e8f5;
}
.qr-retention-legend {
  margin: 0;
  padding: 0;
  list-style: none;
  color: #4e5c88;
  font-size: 17px;
  line-height: 2;
  font-weight: 650;
}
.qr-retention-legend li {
  display: grid;
  grid-template-columns: 16px 88px 42px;
  align-items: center;
  column-gap: 10px;
}
.qr-retention-legend span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
}
.qr-retention-legend .keep { background: #765ee8; }
.qr-retention-legend .drop { background: #d7d2f7; }
.qr-retention-legend b {
  color: #111a63;
  font-weight: 900;
}

.report-card {
  min-height: 113px;
  padding: 19px 22px;
  display: grid;
  grid-template-columns: 109px 1fr 285px;
  align-items: center;
  gap: 18px;
}
.report-icon {
  width: 74px;
  height: 74px;
  margin-left: 1px;
  border-radius: 19px;
  display: grid;
  place-items: center;
  color: #176ff2;
  background: #eaf4ff;
  font-size: 48px;
}
.report-copy h2 {
  margin: 0 0 8px;
  color: #111a63;
  font-size: 21px;
  line-height: 1.2;
  font-weight: 900;
}
.report-copy p {
  margin: 0;
  color: #4e5c88;
  font-size: 17px;
  line-height: 1.38;
  font-weight: 520;
}
.report-button {
  height: 65px;
  padding: 0 22px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  color: #176ff2;
  background: #fff;
  border: 2px solid #b9d8ff;
  box-shadow: 0 8px 18px rgba(31,101,178,.09);
  font-size: 20px;
  font-weight: 900;
}
.report-button svg {
  width: 33px;
  height: 33px;
}

.result-primary-cta {
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
.result-primary-cta:hover,
.report-button:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}
.result-primary-cta svg:first-child {
  width: 50px;
  height: 50px;
  opacity: .9;
}
.result-primary-cta span {
  text-align: center;
  font-size: 31px;
  line-height: 1;
  font-weight: 920;
  letter-spacing: -.8px;
}
.result-primary-cta svg:last-child {
  width: 43px;
  height: 43px;
  justify-self: end;
}

@media (max-width: 820px) {
  .result-page { border-radius: 0; }
  .result-hero { min-height: 560px; padding: 50px 18px 0; }
  .result-hero-copy { width: 100%; padding-left: 0; }
  .result-hero-copy h1 { font-size: clamp(42px, 10vw, 61px); }
  .result-hero-copy p { width: min(100%, 520px); font-size: 20px; }
  .result-hero-art { transform: scale(.82); transform-origin: center top; width: 116%; left: -8%; top: 115px; }
  .result-card-stack { padding: 0 18px; }
  .result-card { grid-template-columns: 92px 1fr; row-gap: 16px; padding: 22px 20px; }
  .result-card-icon { width: 82px; height: 82px; font-size: 52px; }
  .result-card-visual { grid-column: 1 / -1; }
  .result-line-chart { width: 100%; }
  .qr-retention-wrap { width: 100%; }
  .report-card { grid-template-columns: 82px 1fr; }
  .report-button { grid-column: 1 / -1; }
}

@media (max-width: 520px) {
  .result-hero { min-height: 510px; }
  .result-hero-copy h1 { font-size: 40px; }
  .result-hero-copy p { font-size: 18px; }
  .result-hero-art { transform: scale(.62); width: 150%; left: -25%; top: 132px; }
  .result-card-copy h2 { font-size: 18px; }
  .result-card-copy strong { font-size: 35px; }
  .result-card-copy p { font-size: 15px; }
  .result-card { grid-template-columns: 72px 1fr; }
  .result-card-icon { width: 64px; height: 64px; border-radius: 17px; font-size: 39px; }
  .qr-retention-wrap { flex-direction: column; gap: 15px; }
  .report-card { grid-template-columns: 64px 1fr; padding: 18px; }
  .report-icon { width: 60px; height: 60px; font-size: 38px; }
  .report-button { font-size: 17px; }
  .result-primary-cta { height: 76px; margin-left: 18px; margin-right: 18px; grid-template-columns: 48px 1fr 38px; padding: 0 22px; }
  .result-primary-cta span { font-size: 24px; }
}
`;
