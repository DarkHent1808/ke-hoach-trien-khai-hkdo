import React from "react";

const maintainSteps = [
  {
    icon: <MonitorSearchIcon />,
    number: "1.",
    title: "Theo dõi hộ dừng thao tác",
    desc: "Giám sát liên tục trạng thái thao tác của từng hộ kinh doanh.",
    side: <StatusMiniCard />,
  },
  {
    icon: <BellAlertIcon />,
    number: "2.",
    title: "Chủ động phát hiện ca cần hỗ trợ",
    desc: "Hệ thống cảnh báo sớm các ca gián đoạn, giúp can thiệp kịp thời.",
    side: <WarningMiniCard />,
  },
  {
    icon: <PeopleTalkIcon />,
    number: "3.",
    title: "Phối hợp Tổ CNSCĐ xử lý ca khó",
    desc: "EFFECT phối hợp Tổ CNSCĐ địa phương liên hệ, hỗ trợ và hướng dẫn lại.",
    side: <SupportMiniCard />,
  },
  {
    icon: <CalendarIcon />,
    number: "4.",
    title: "Theo dõi chỉ số 7 ngày và 30 ngày",
    desc: "Đo lường tỷ lệ duy trì để đánh giá hiệu quả và cải thiện liên tục.",
    side: <KpiMiniPair />,
  },
  {
    icon: <ReportIcon />,
    number: "5.",
    title: "Báo cáo lại cho địa phương và Sở",
    desc: "Tổng hợp kết quả duy trì và báo cáo định kỳ để cùng nhau đưa ra giải pháp.",
    side: <ReportFlowMini />,
  },
];

export default function EffectMaintainPage() {
  return (
    <section id="effect-trung-tam-dieu-phoi" className="effect4-page" aria-label="EFFECT duy trì sau phát động">
      <style>{css}</style>

      <section className="effect4-heading">
        <div className="effect4-pill">MÀN 4</div>
        <h1>EFFECT duy trì gì sau phát động?</h1>
        <p>Sau buổi đầu, EFFECT tiếp tục theo dõi dữ liệu, phát hiện ca dừng thao tác và phối hợp địa phương hỗ trợ lại.</p>
      </section>

      <section className="effect4-hero" aria-label="Trung tâm duy trì sau phát động">
        <div className="effect4-city"><i /><i /><i /></div>

        <section className="effect4-dashboard">
          <div className="effect4-dashboard-header">
            <ShieldMiniIcon />
            <span>TRUNG TÂM DUY TRÌ SAU PHÁT ĐỘNG</span>
          </div>

          <div className="effect4-dashboard-grid">
            <article className="effect4-panel overview">
              <h2>TỔNG QUAN DUY TRÌ</h2>
              <small>Hộ kinh doanh đang theo dõi</small>
              <strong>12.458</strong>
              <ul>
                <li><CheckDotIcon /><span className="effect4-overview-line"><span>Duy trì bình thường</span><b>10.236 (82%)</b></span></li>
                <li><WarningDotIcon /><span className="effect4-overview-line"><span>Dừng thao tác</span><b>1.125 (9%)</b></span></li>
                <li><AlertDotIcon /><span className="effect4-overview-line"><span>Cần hỗ trợ</span><b>1.097 (9%)</b></span></li>
              </ul>
            </article>

            <article className="effect4-panel trend">
              <h2>XU HƯỚNG DUY TRÌ THEO NGÀY</h2>
              <TrendLineChart />
            </article>

            <article className="effect4-panel alerts">
              <h2>CẢNH BÁO & THÔNG BÁO</h2>
              <div className="alert-row red"><AlertDotIcon /><p><b>Hộ KD chưa thao tác 3 ngày</b><span>Mã hộ: HKD001234</span></p><small>2 phút trước</small></div>
              <div className="alert-row orange"><WarningDotIcon /><p><b>Hộ KD gián đoạn 7 ngày</b><span>Mã hộ: HKD005678</span></p><small>15 phút trước</small></div>
              <div className="alert-row orange"><WarningDotIcon /><p><b>Dữ liệu chưa đồng bộ</b><span>Mã hộ: HKD009876</span></p><small>30 phút trước</small></div>
              <a href="#effect-du-lieu-duy-tri">Xem tất cả cảnh báo <ChevronRightIcon /></a>
            </article>

            <article className="effect4-panel support">
              <h2>TRẠNG THÁI HỖ TRỢ</h2>
              <div className="support-body">
                <DonutChart />
                <ul>
                  <li><i className="teal" />Đã hỗ trợ <b>862 (65%)</b></li>
                  <li><i className="orange" />Đang xử lý <b>314 (24%)</b></li>
                  <li><i className="red" />Chờ xử lý <b>110 (8%)</b></li>
                  <li><i className="dark" />Không liên hệ được <b>39 (3%)</b></li>
                </ul>
              </div>
              <a href="#effect-du-lieu-duy-tri">Xem chi tiết hỗ trợ <ChevronRightIcon /></a>
            </article>
          </div>
        </section>

        <div className="effect4-operator">
          <div className="hair" />
          <div className="face" />
          <div className="shirt" />
          <div className="logo">EFFECT</div>
          <div className="arm-left" />
          <div className="arm-right" />
        </div>

        <div className="effect4-kpi-card">
          <h3>KPI DUY TRÌ</h3>
          <div className="kpi-row">
            <p><small>7 NGÀY</small><strong>92%</strong><span>Duy trì thao tác</span></p>
            <MiniBars />
            <em>↑ 4%</em>
          </div>
          <div className="kpi-row">
            <p><small>30 NGÀY</small><strong>88%</strong><span>Duy trì thao tác</span></p>
            <MiniBars />
            <em>↑ 3%</em>
          </div>
        </div>
      </section>

      <section className="effect4-maintain-list" aria-label="Các việc duy trì sau phát động">
        {maintainSteps.map((step) => (
          <article className="effect4-maintain-row" key={step.title}>
            <div className="effect4-row-icon">{step.icon}</div>
            <div className="effect4-row-copy">
              <h2><span>{step.number}</span> {step.title}</h2>
              <p>{step.desc}</p>
            </div>
            <div className="effect4-row-side">{step.side}</div>
          </article>
        ))}
      </section>

      <a href="#effect-du-lieu-duy-tri" className="effect4-cta">
        <ChartGrowthIcon />
        <span>Xem dữ liệu duy trì</span>
      </a>
    </section>
  );
}

function TrendLineChart() {
  return (
    <svg className="effect4-trend-chart" viewBox="0 0 380 180" fill="none">
      {[30, 65, 100, 135].map((y) => <path key={y} d={`M30 ${y}H360`} stroke="#e6eef8" strokeWidth="2" />)}
      <path d="M35 130 78 98 120 118 165 82 208 45 250 76 290 38 326 52 358 22" stroke="#126ee8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35 130 78 98 120 118 165 82 208 45 250 76 290 38 326 52 358 22V160H35V130Z" fill="url(#effect4TrendFill)" />
      {[35,78,120,165,208,250,290,326,358].map((x, index) => {
        const y = [130,98,118,82,45,76,38,52,22][index];
        return <circle key={x} cx={x} cy={y} r="5" fill="#126ee8" stroke="#fff" strokeWidth="2" />;
      })}
      {['05/05','06/05','07/05','08/05','09/05','10/05','11/05'].map((label, index) => <text key={label} x={48 + index * 48} y="174" textAnchor="middle" fontSize="13" fontWeight="700" fill="#6b7c94">{label}</text>)}
      <text x="15" y="66" fontSize="12" fontWeight="700" fill="#6b7c94">4K</text>
      <text x="15" y="31" fontSize="12" fontWeight="700" fill="#6b7c94">6K</text>
      <text x="20" y="136" fontSize="12" fontWeight="700" fill="#6b7c94">0</text>
      <defs>
        <linearGradient id="effect4TrendFill" x1="190" y1="22" x2="190" y2="160">
          <stop stopColor="#126ee8" stopOpacity=".18" />
          <stop offset="1" stopColor="#126ee8" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DonutChart() {
  return <div className="effect4-donut"><span /></div>;
}

function MiniBars() {
  const bars = [12, 17, 22, 28, 34, 42, 30, 48];
  return (
    <svg className="effect4-mini-bars" viewBox="0 0 120 55" fill="none">
      {bars.map((height, index) => <rect key={index} x={8 + index * 13} y={50 - height} width="7" height={height} rx="3" fill="#0fb19e" />)}
    </svg>
  );
}

function StatusMiniCard() {
  return (
    <div className="effect4-side-status">
      <div><UserIcon /><span /></div>
      <p><CheckDotIcon />Duy trì</p>
      <div><UserIcon /><span /></div>
      <p><AlertDotIcon />Dừng thao tác</p>
    </div>
  );
}

function WarningMiniCard() {
  return (
    <div className="effect4-side-warning">
      <AlertDotIcon />
      <p><b>Cảnh báo</b><span>Hộ KD chưa thao tác 3 ngày</span><strong>HKD001234</strong></p>
    </div>
  );
}

function SupportMiniCard() {
  return (
    <div className="effect4-side-support">
      <div className="person-effect"><UserIcon /><span>EFFECT</span></div>
      <div className="arrows">↔</div>
      <div className="person-cnscd"><UserIcon /><span>Tổ CNSCĐ</span></div>
    </div>
  );
}

function KpiMiniPair() {
  return (
    <div className="effect4-side-kpis">
      <div><small>7 NGÀY</small><strong>92%</strong><MiniBars /></div>
      <div><small>30 NGÀY</small><strong>88%</strong><MiniBars /></div>
    </div>
  );
}

function ReportFlowMini() {
  return (
    <div className="effect4-side-flow">
      <div><BuildingIcon /><span>UBND XÃ</span></div>
      <ShieldMiniIcon />
      <div><BuildingIcon /><span>SỞ KHCN</span></div>
    </div>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ShieldMiniIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="m9 12 2 2 4-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function CheckDotIcon() { return <Svg><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="m8 12 2.3 2.3L16 8.7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function WarningDotIcon() { return <Svg><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M12 6v8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/><circle cx="12" cy="17" r="1.4" fill="#fff"/></Svg>; }
function AlertDotIcon() { return <Svg><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M12 7v7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/><circle cx="12" cy="17" r="1.4" fill="#fff"/></Svg>; }
function ChevronRightIcon() { return <Svg><path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function MonitorSearchIcon() { return <Svg><rect x="3" y="4" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="2.2"/><path d="M8 20h6M11 15v5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2.2"/><path d="m19 19 3 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><path d="M7 11l3-3 2 2 3-4" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function BellAlertIcon() { return <Svg><path d="M6 10a6 6 0 1 1 12 0v4l2 3H4l2-3v-4Z" fill="currentColor"/><path d="M10 20h4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><circle cx="18" cy="7" r="4" fill="#ef4444"/><path d="M18 5v3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/><circle cx="18" cy="10" r=".8" fill="#fff"/></Svg>; }
function PeopleTalkIcon() { return <Svg><circle cx="8" cy="9" r="3" fill="currentColor"/><circle cx="16" cy="9" r="3" fill="currentColor" opacity=".75"/><path d="M3 21c.5-4 2.3-6 5-6s4.5 2 5 6" fill="currentColor"/><path d="M11 21c.5-4 2.3-6 5-6s4.5 2 5 6" fill="currentColor" opacity=".75"/><path d="M14 3h7v5h-3l-2 2V8h-2V3Z" fill="currentColor" opacity=".35"/></Svg>; }
function CalendarIcon() { return <Svg><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="2.2"/><path d="M8 3v4M16 3v4M4 9h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><text x="8" y="17" fontSize="6" fontWeight="900" fill="currentColor">7</text><text x="13" y="17" fontSize="6" fontWeight="900" fill="currentColor">30</text></Svg>; }
function ReportIcon() { return <Svg><path d="M6 3h9l3 3v15H6V3Z" stroke="currentColor" strokeWidth="2.2"/><path d="M15 3v4h4M9 16v-4M12 16V9M15 16v-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><path d="M9 18h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function ChartGrowthIcon() { return <Svg><path d="M5 19V12M11 19V8M17 19V5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><path d="M4 20h17M5 10l5-4 4 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function UserIcon() { return <Svg><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4.5 21c.6-4.8 3-7.2 7.5-7.2s6.9 2.4 7.5 7.2h-15Z" fill="currentColor"/></Svg>; }
function BuildingIcon() { return <Svg><path d="M4 21V8l8-5 8 5v13" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/><path d="M8 12h2M14 12h2M8 16h2M14 16h2" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }

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

.effect4-page {
  position: relative;
  width: 100%;
  min-height: 1518px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 2%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 55%, #fbfdff 100%);
}
.effect4-heading {
  position: relative;
  z-index: 8;
  width: 830px;
  margin: 0 auto;
  padding-top: 36px;
  text-align: center;
}
.effect4-pill {
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
.effect4-heading h1 {
  width: 760px;
  margin: 0 auto 16px;
  color: #075bd2;
  font-size: 68px;
  line-height: 1.08;
  font-weight: 950;
  letter-spacing: -3.2px;
}
.effect4-heading p {
  width: 680px;
  margin: 0 auto;
  color: #1d2742;
  font-size: 23px;
  line-height: 1.38;
  font-weight: 500;
}
.effect4-hero {
  position: relative;
  z-index: 5;
  height: 540px;
  margin-top: 22px;
  overflow: hidden;
}
.effect4-hero::before {
  content: "";
  position: absolute;
  inset: 110px -22px 0;
  background: linear-gradient(180deg, rgba(206,238,255,.72), rgba(255,255,255,.14));
  border-radius: 50% 50% 0 0;
}
.effect4-city {
  position: absolute;
  right: 28px;
  top: 35px;
  display: flex;
  align-items: flex-end;
  gap: 11px;
  opacity: .34;
}
.effect4-city i {
  width: 39px;
  height: 92px;
  border-radius: 9px 9px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.26), rgba(85,154,219,.07));
}
.effect4-city i:nth-child(2) { height: 136px; }
.effect4-city i:nth-child(3) { height: 106px; }
.effect4-plant {
  position: absolute;
  z-index: 7;
  right: 14px;
  top: 180px;
  width: 82px;
  height: 174px;
}
.effect4-plant::before,
.effect4-plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 50px;
  height: 140px;
  border-radius: 48px 48px 0 0;
  background: linear-gradient(180deg, #a0dca0, #42aa72);
}
.effect4-plant::before { left: 0; transform: rotate(-25deg); }
.effect4-plant::after { right: 0; transform: rotate(25deg); }
.effect4-dashboard {
  position: absolute;
  z-index: 8;
  left: 37px;
  top: 20px;
  width: 625px;
  height: 510px;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #d7e7f8;
  box-shadow: 0 15px 32px rgba(20,77,150,.15);
}
.effect4-dashboard-header {
  height: 46px;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 0 21px;
  color: #fff;
  background: #063f9c;
  font-size: 18px;
  font-weight: 950;
}
.effect4-dashboard-header svg {
  width: 27px;
  height: 27px;
}
.effect4-dashboard-grid {
  padding: 18px 16px 17px;
  display: grid;
  grid-template-columns: 265px 1fr;
  grid-template-rows: 210px 216px;
  gap: 14px;
}
.effect4-panel {
  position: relative;
  padding: 18px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #dcebf8;
  box-shadow: 0 7px 16px rgba(33,95,166,.08);
  overflow: hidden;
}
.effect4-panel h2 {
  margin: 0 0 11px;
  color: #113071;
  font-size: 15px;
  line-height: 1.1;
  font-weight: 950;
}
.effect4-panel.overview small {
  display: block;
  width: auto;
  color: #3b4d65;
  font-size: 12px;
  line-height: 1.25;
  font-weight: 650;
}
.effect4-panel.overview strong {
  display: block;
  width: auto;
  margin: 3px 0 11px;
  color: #075bd2;
  font-size: 25px;
  line-height: 1;
  font-weight: 950;
  text-align: left;
}
.effect4-panel.overview ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 9px;
}
.effect4-panel.overview li {
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr);
  align-items: start;
  gap: 7px;
  color: #22324e;
  font-size: 11px;
  line-height: 1.15;
  font-weight: 750;
}
.effect4-overview-line {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
  width: 100%;
}
.effect4-overview-line > span {
  min-width: 0;
  line-height: 1.15;
}
.effect4-panel.overview li svg {
  width: 22px;
  height: 22px;
  align-self: start;
  margin-top: -2px;
}
.effect4-panel.overview li:nth-child(1) svg { color: #0fb19e; }
.effect4-panel.overview li:nth-child(2) svg { color: #f59e0b; }
.effect4-panel.overview li:nth-child(3) svg { color: #ef4444; }
.effect4-panel.overview li b {
  display: block;
  flex: 0 0 auto;
  width: auto;
  color: #0f4a9a;
  font-size: 11px;
  line-height: 1.15;
  font-weight: 950;
  text-align: right;
  white-space: nowrap;
  align-self: flex-start;
  padding-top: 0;
  margin-top: 0;
}
.effect4-trend-chart {
  width: 100%;
  height: 168px;
}
.effect4-panel.alerts {
  padding-bottom: 36px;
}
.alert-row {
  min-height: 47px;
  display: grid;
  grid-template-columns: 25px 1fr 65px;
  align-items: center;
  gap: 9px;
  border-bottom: 1px solid #edf3fa;
}
.alert-row svg { width: 24px; height: 24px; }
.alert-row.red svg { color: #ef4444; }
.alert-row.orange svg { color: #f59e0b; }
.alert-row p {
  margin: 0;
  min-width: 0;
}
.alert-row b {
  display: block;
  color: #24314a;
  font-size: 11px;
  line-height: 1.15;
  font-weight: 900;
}
.alert-row span {
  display: block;
  color: #2c5da6;
  font-size: 10px;
  line-height: 1.1;
  font-weight: 750;
}
.alert-row small {
  color: #76879d;
  font-size: 9px;
  text-align: right;
  font-weight: 700;
}
.effect4-panel a {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #075bd2;
  font-size: 12px;
  line-height: 1;
  font-weight: 850;
}
.effect4-panel a svg {
  width: 19px;
  height: 19px;
}
.support-body {
  display: grid;
  grid-template-columns: 88px 1fr;
  align-items: center;
  gap: 10px;
}
.effect4-donut {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background: conic-gradient(#0fb19e 0 65%, #f59e0b 65% 89%, #ef4444 89% 97%, #64748b 97% 100%);
  display: grid;
  place-items: center;
}
.effect4-donut span {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
}
.support-body ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 7px;
}
.support-body li {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #273750;
  font-size: 10px;
  line-height: 1.12;
  font-weight: 750;
  white-space: nowrap;
}
.support-body li i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex: 0 0 auto;
}
.support-body li i.teal { background: #0fb19e; }
.support-body li i.orange { background: #f59e0b; }
.support-body li i.red { background: #ef4444; }
.support-body li i.dark { background: #64748b; }
.support-body li b {
  display: inline;
  width: auto;
  margin-left: auto;
  color: #0f4a9a;
  font-size: 10px;
  line-height: 1;
  font-weight: 950;
  text-align: right;
  white-space: nowrap;
}
.effect4-operator {
  position: absolute;
  z-index: 10;
  right: 25px;
  top: 35px;
  width: 270px;
  height: 365px;
}
.effect4-operator .hair {
  position: absolute;
  left: 80px;
  top: 0;
  width: 105px;
  height: 78px;
  border-radius: 66px 66px 24px 24px;
  background: #141a23;
  transform: rotate(-5deg);
}
.effect4-operator .face {
  position: absolute;
  left: 99px;
  top: 64px;
  width: 75px;
  height: 98px;
  border-radius: 47%;
  background: #ffbd8c;
}
.effect4-operator .shirt {
  position: absolute;
  left: 41px;
  top: 166px;
  width: 204px;
  height: 199px;
  border-radius: 78px 78px 0 0;
  background: #063f9c;
}
.effect4-operator .logo {
  position: absolute;
  right: 38px;
  top: 249px;
  color: #fff;
  font-size: 17px;
  font-weight: 950;
}
.effect4-operator .arm-left {
  position: absolute;
  left: 13px;
  top: 247px;
  width: 124px;
  height: 32px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(8deg);
}
.effect4-operator .arm-right {
  position: absolute;
  right: 3px;
  top: 252px;
  width: 103px;
  height: 32px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(63deg);
}
.effect4-operator .laptop {
  position: absolute;
  left: -14px;
  bottom: 0;
  width: 234px;
  height: 117px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  color: #0b3a86;
  background: linear-gradient(135deg, #cfd5dc, #7f8d9c);
  box-shadow: 0 18px 24px rgba(0,42,92,.22);
}
.effect4-operator .laptop svg {
  width: 42px;
  height: 42px;
}
.effect4-kpi-card {
  position: absolute;
  z-index: 14;
  right: 0px;
  bottom: 30px;
  width: 300px;
  min-height: 218px;
  padding: 17px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid #d8e8f8;
  box-shadow: 0 15px 30px rgba(20,77,150,.15);
}
.effect4-kpi-card h3 {
  margin: 0 0 12px;
  color: #113071;
  font-size: 15px;
  font-weight: 950;
}
.kpi-row {
  position: relative;
  min-height: 76px;
  border-radius: 10px;
  border: 1px solid #e3eef9;
  padding: 12px 10px;
  display: grid;
  grid-template-columns: 95px 1fr 52px;
  align-items: center;
  gap: 7px;
  margin-top: 9px;
}
.kpi-row p {
  margin: 0;
}
.kpi-row small {
  display: block;
  color: #62748d;
  font-size: 11px;
  font-weight: 850;
}
.kpi-row strong {
  display: block;
  color: #075bd2;
  font-size: 29px;
  line-height: 1;
  font-weight: 950;
}
.kpi-row span {
  display: block;
  color: #364a62;
  font-size: 11px;
  font-weight: 700;
}
.kpi-row em {
  width: 47px;
  height: 30px;
  border-radius: 7px;
  display: grid;
  place-items: center;
  color: #0fb19e;
  background: #e8fbf6;
  font-size: 13px;
  font-style: normal;
  font-weight: 900;
}
.effect4-mini-bars {
  width: 88px;
  height: 43px;
}
.effect4-maintain-list {
  position: relative;
  z-index: 15;
  width: calc(100% - 92px);
  margin: 0 auto 22px;
  display: grid;
  gap: 11px;
}
.effect4-maintain-row {
  min-height: 115px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 128px 1fr 302px;
  align-items: center;
  background: rgba(255,255,255,.97);
  border: 1px solid #e0ebf7;
  box-shadow: 0 10px 22px rgba(31,101,178,.08);
  overflow: hidden;
}
.effect4-row-icon {
  width: 128px;
  height: 100%;
  display: grid;
  place-items: center;
  color: #0a9f97;
  background: #e9fbf8;
  font-size: 78px;
}
.effect4-row-icon svg {
  width: 72px;
  height: 72px;
}
.effect4-row-copy {
  padding: 18px 15px 18px 28px;
}
.effect4-row-copy h2 {
  margin: 0 0 8px;
  color: #0a9f97;
  font-size: 24px;
  line-height: 1.15;
  font-weight: 950;
}
.effect4-row-copy h2 span {
  color: #0a9f97;
}
.effect4-row-copy p {
  margin: 0;
  color: #22324e;
  font-size: 17px;
  line-height: 1.35;
  font-weight: 500;
}
.effect4-row-side {
  padding: 14px 16px;
}
.effect4-side-status,
.effect4-side-warning,
.effect4-side-support,
.effect4-side-kpis,
.effect4-side-flow {
  min-height: 86px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #e0ebf7;
  box-shadow: 0 8px 18px rgba(31,101,178,.07);
}
.effect4-side-status {
  padding: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px 15px;
  align-items: center;
}
.effect4-side-status > div {
  display: grid;
  grid-template-columns: 29px 1fr;
  gap: 7px;
  align-items: center;
}
.effect4-side-status > div svg {
  width: 28px;
  height: 28px;
  color: #1f7be9;
}
.effect4-side-status > div span {
  height: 12px;
  border-radius: 999px;
  background: #dce9f6;
}
.effect4-side-status p {
  margin: 0;
  display: flex;
  gap: 7px;
  align-items: center;
  color: #253454;
  font-size: 12px;
  font-weight: 800;
}
.effect4-side-status p svg {
  width: 19px;
  height: 19px;
  color: #0fb19e;
}
.effect4-side-status p:nth-of-type(2) svg { color: #ef4444; }
.effect4-side-warning {
  padding: 19px 18px;
  display: grid;
  grid-template-columns: 39px 1fr;
  gap: 12px;
  align-items: center;
  background: #fff5f5;
  border-color: #ffc9c9;
}
.effect4-side-warning > svg {
  width: 37px;
  height: 37px;
  color: #ef4444;
}
.effect4-side-warning p {
  margin: 0;
  color: #ef4444;
}
.effect4-side-warning b,
.effect4-side-warning span,
.effect4-side-warning strong {
  display: block;
}
.effect4-side-warning b {
  font-size: 16px;
  font-weight: 950;
}
.effect4-side-warning span,
.effect4-side-warning strong {
  font-size: 12px;
  line-height: 1.2;
  font-weight: 750;
}
.effect4-side-support {
  padding: 12px 14px;
  display: grid;
  grid-template-columns: 1fr 42px 1fr;
  align-items: center;
  text-align: center;
}
.effect4-side-support .person-effect,
.effect4-side-support .person-cnscd {
  color: #075bd2;
}
.effect4-side-support svg {
  width: 42px;
  height: 42px;
  margin: 0 auto 4px;
}
.effect4-side-support span {
  display: block;
  font-size: 10px;
  font-weight: 900;
}
.effect4-side-support .arrows {
  color: #0a9f97;
  font-size: 31px;
  font-weight: 950;
}
.effect4-side-kpis {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
}
.effect4-side-kpis div {
  min-height: 88px;
  padding: 12px;
  border-radius: 9px;
  border: 1px solid #e0ebf7;
  background: #fff;
  box-shadow: 0 8px 18px rgba(31,101,178,.07);
}
.effect4-side-kpis small {
  color: #3873de;
  font-size: 12px;
  font-weight: 850;
}
.effect4-side-kpis strong {
  display: block;
  color: #075bd2;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 950;
}
.effect4-side-kpis .effect4-mini-bars {
  width: 95px;
  height: 36px;
}
.effect4-side-flow {
  display: grid;
  grid-template-columns: 1fr 52px 1fr;
  align-items: center;
  text-align: center;
  color: #075bd2;
}
.effect4-side-flow > svg {
  width: 48px;
  height: 48px;
  color: #0fb19e;
  justify-self: center;
}
.effect4-side-flow div svg {
  width: 58px;
  height: 58px;
  margin: 0 auto 2px;
}
.effect4-side-flow span {
  display: block;
  font-size: 11px;
  font-weight: 900;
}
.effect4-cta {
  position: relative;
  z-index: 18;
  width: calc(100% - 60px);
  height: 89px;
  margin: 0 auto 31px;
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
.effect4-cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}
.effect4-cta svg {
  width: 57px;
  height: 57px;
  flex: 0 0 auto;
}
.effect4-cta span {
  display: inline-block;
  line-height: 1;
}

@media (max-width: 820px) {
  .effect4-page { min-height: 1370px; }
  .effect4-heading { width: calc(100% - 40px); }
  .effect4-heading h1 { width: 100%; font-size: clamp(45px, 10vw, 68px); }
  .effect4-heading p { width: min(100%, 680px); font-size: 21px; }
  .effect4-hero { transform: scale(.88); transform-origin: top center; width: 114%; left: -7%; height: 485px; }
  .effect4-maintain-list { width: calc(100% - 56px); margin-top: -20px; }
  .effect4-maintain-row { grid-template-columns: 100px 1fr 260px; }
  .effect4-row-icon { width: 100px; }
  .effect4-row-copy h2 { font-size: 21px; }
  .effect4-row-copy p { font-size: 15px; }
  .effect4-cta { gap: 18px; }
}

@media (max-width: 520px) {
  .effect4-page { min-height: 1240px; }
  .effect4-heading { padding-top: 28px; }
  .effect4-pill { width: 105px; height: 38px; font-size: 20px; }
  .effect4-heading h1 { font-size: 38px; }
  .effect4-heading p { font-size: 16px; }
  .effect4-hero { transform: scale(.62); width: 160%; left: -30%; height: 385px; }
  .effect4-maintain-list { width: calc(100% - 34px); margin-top: -75px; }
  .effect4-maintain-row { grid-template-columns: 68px 1fr; min-height: 96px; }
  .effect4-row-icon { width: 68px; font-size: 42px; }
  .effect4-row-icon svg { width: 42px; height: 42px; }
  .effect4-row-copy { padding: 12px; }
  .effect4-row-copy h2 { font-size: 17px; }
  .effect4-row-copy p { font-size: 13px; }
  .effect4-row-side { grid-column: 1 / -1; padding: 0 10px 12px 78px; }
  .effect4-cta {
    width: calc(100% - 34px);
    height: 72px;
    font-size: 22px;
    gap: 12px;
  }
  .effect4-cta svg { width: 40px; height: 40px; }
}
`;
