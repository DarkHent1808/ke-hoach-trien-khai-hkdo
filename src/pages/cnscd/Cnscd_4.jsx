import React from "react";

const statusCards = [
  {
    tone: "green",
    icon: <CheckCircleIcon />,
    title: "Đã hoàn tất chuỗi 1+10 phút",
    desc: "Tiếp tục nhắc duy trì sử dụng",
  },
  {
    tone: "orange",
    icon: <QrIcon />,
    title: "Đã nhận QR nhưng chưa dán",
    desc: "Nhắc hoàn tất bước công bố tại điểm bán",
  },
  {
    tone: "blue",
    icon: <ChecklistIcon />,
    title: "Đã đăng ký nhưng chưa thao tác hết",
    desc: "Hỗ trợ nhắc lại đúng bước còn thiếu",
  },
  {
    tone: "purple",
    icon: <UserQuestionIcon />,
    title: "Chưa tham gia hoặc cần hỗ trợ lại",
    desc: "Đưa vào danh sách tiếp cận lại",
  },
];

const overview = [
  ["Đã hoàn tất", "128", "green"],
  ["Đã nhận QR chưa dán", "64", "orange"],
  ["Đăng ký chưa hoàn tất", "42", "blue"],
  ["Chưa tham gia/cần hỗ trợ", "38", "purple"],
];

export default function CnscdStatusPage() {
  return (
    <section className="cnscd-status-page" aria-label="Tổ bám hộ theo 4 trạng thái">
      <style>{css}</style>

      <section className="cnscd-status-heading">
        <div className="cnscd-status-pill">MÀN 4</div>
        <h1>Tổ bám hộ theo 4 trạng thái</h1>
        <p>Sau buổi đầu, Tổ cần rà soát lại hộ theo trạng thái để nhắc đúng việc, đúng thời điểm.</p>
      </section>

      <section className="cnscd-status-grid" aria-label="Bốn trạng thái bám hộ">
        {statusCards.map((card) => (
          <article className={`cnscd-status-card ${card.tone}`} key={card.title}>
            <div className="cnscd-status-icon">{card.icon}</div>
            <div>
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="cnscd-status-timeline" aria-label="Các mốc theo dõi">
        {["Sau 1 ngày", "3 ngày", "7 ngày", "30 ngày"].map((item, index) => (
          <React.Fragment key={item}>
            <div className="cnscd-status-time-item">
              <CalendarIcon />
              <span>{item}</span>
            </div>
            {index < 3 && <i className="cnscd-status-time-dots" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </section>

      <section className="cnscd-status-map-panel" aria-label="Bản đồ bám hộ">
        <div className="cnscd-status-map-head">
          <h3>Bản đồ bám hộ</h3>
          <div className="cnscd-status-filters">
            <button>Tất cả thôn <ChevronDownIcon /></button>
            <button>Trạng thái <ChevronDownIcon /></button>
          </div>
        </div>

        <div className="cnscd-status-legend">
          {[
            ["Đã hoàn tất", "green"],
            ["Đã nhận QR nhưng chưa dán", "orange"],
            ["Đã đăng ký chưa thao tác hết", "blue"],
            ["Chưa tham gia hoặc cần hỗ trợ", "purple"],
          ].map(([label, tone]) => (
            <span key={label}><i className={tone} />{label}</span>
          ))}
        </div>

        <div className="cnscd-status-map-content">
          <MiniNeighborhoodMap />

          <aside className="cnscd-status-overview">
            <h4>Tổng quan</h4>
            {overview.map(([label, value, tone]) => (
              <div className="cnscd-status-overview-row" key={label}>
                <span><i className={tone} />{label}</span>
                <b className={tone}>{value}</b>
              </div>
            ))}
            <div className="cnscd-status-total">
              <strong>Tổng số hộ</strong>
              <b>272</b>
            </div>
          </aside>
        </div>
      </section>

      <div className="cnscd-status-tip">
        <InfoIcon />
        <span>Ưu tiên hộ màu cam và tím để tăng tỷ lệ hoàn tất.</span>
      </div>

      <a href="#cnscd-mau-bao-cao" className="cnscd-status-cta">
        <DocumentIcon />
        <span>Báo cáo trạng thái hộ</span>
        <ArrowRightIcon />
      </a>
    </section>
  );
}

function MiniNeighborhoodMap() {
  const pins = [
    [9, 25, "green"], [16, 70, "blue"], [25, 39, "purple"], [35, 63, "orange"],
    [48, 30, "green"], [56, 67, "blue"], [70, 43, "orange"], [82, 73, "green"],
    [73, 21, "purple"], [42, 85, "purple"], [20, 87, "blue"], [88, 32, "orange"],
  ];

  return (
    <div className="cnscd-status-map">
      <svg viewBox="0 0 560 300" fill="none" aria-hidden="true">
        <rect width="560" height="300" rx="12" fill="#f3f7f4" />
        <path d="M0 48h560M0 102h560M0 158h560M0 215h560M60 0v300M122 0v300M186 0v300M248 0v300M312 0v300M376 0v300M438 0v300M504 0v300" stroke="#fff" strokeWidth="11" />
        <path d="M0 240C78 189 135 161 206 180c57 15 97 61 158 28 58-31 91-101 196-130" stroke="#d4e7d6" strokeWidth="32" strokeLinecap="round" opacity=".9" />
        <path d="M0 240C78 189 135 161 206 180c57 15 97 61 158 28 58-31 91-101 196-130" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeDasharray="19 16" />
        <path d="M494 0C494 86 464 131 457 188c-5 41 6 76 39 112" stroke="#c7e0f9" strokeWidth="33" opacity=".85" />
      </svg>
      {pins.map(([left, top, tone], index) => (
        <span key={index} className={`cnscd-status-house ${tone}`} style={{ left: `${left}%`, top: `${top}%` }}>
          <HouseIcon />
        </span>
      ))}
    </div>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ArrowRightIcon() { return <Svg><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function ChevronDownIcon() { return <Svg><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function CheckCircleIcon() { return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.8"/><path d="m7.8 12 2.8 2.8 5.8-6.2" stroke="currentColor" strokeWidth="2.9" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function QrIcon() { return <Svg><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function ChecklistIcon() { return <Svg><path d="M7 3h10v18H7V3Z" stroke="currentColor" strokeWidth="2.2"/><path d="m9 8 1.2 1.2L13 6.5M9 13l1.2 1.2L13 11.5M15 8h1M15 13h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function UserQuestionIcon() { return <Svg><circle cx="10" cy="8" r="4" fill="currentColor"/><path d="M3.5 21c.5-4.6 2.7-7 6.5-7 2.6 0 4.5 1.1 5.6 3.2" fill="currentColor"/><circle cx="17" cy="16" r="5" fill="currentColor" opacity=".92"/><path d="M15.7 14.6a1.7 1.7 0 1 1 2.4 1.5c-.7.4-1.1.8-1.1 1.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/><circle cx="17" cy="19" r=".8" fill="#fff"/></Svg>; }
function CalendarIcon() { return <Svg><rect x="4" y="5" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2.3"/><path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function InfoIcon() { return <Svg><circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M12 10v7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/><circle cx="12" cy="7" r="1.4" fill="#fff"/></Svg>; }
function DocumentIcon() { return <Svg><path d="M6 3h8l4 4v14H6V3Z" fill="currentColor" opacity=".2"/><path d="M6 3h8l4 4v14H6V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/><path d="M14 3v5h4M9 13h6M9 17h5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function HouseIcon() { return <Svg><path d="M3 11 12 4l9 7v9H5v-9Z" fill="currentColor"/><path d="M10 20v-6h4v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }

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
button { font: inherit; }
svg { width: 1em; height: 1em; display: block; }

.cnscd-status-page {
  position: relative;
  width: 100%;
  min-height: 1378px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 3%, rgba(255,255,255,.98) 0 18%, transparent 40%),
    linear-gradient(180deg, #fbfdff 0%, #f2faff 100%);
}
.cnscd-status-heading {
  position: relative;
  z-index: 5;
  width: 780px;
  margin: 0 auto;
  padding-top: 58px;
  text-align: center;
}
.cnscd-status-pill {
  width: 142px;
  height: 49px;
  margin: 0 auto 20px;
  border-radius: 19px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #1679eb, #075bd2);
  box-shadow: 0 10px 21px rgba(7,91,210,.25);
  font-size: 27px;
  line-height: 1;
  font-weight: 950;
}
.cnscd-status-heading h1 {
  margin: 0 0 18px;
  color: #10175c;
  font-size: 55px;
  line-height: 1.12;
  font-weight: 950;
  letter-spacing: -2.4px;
}
.cnscd-status-heading p {
  width: 620px;
  margin: 0 auto;
  color: #2f3344;
  font-size: 24px;
  line-height: 1.36;
  font-weight: 500;
}

.cnscd-status-grid {
  position: relative;
  z-index: 6;
  width: calc(100% - 88px);
  margin: 34px auto 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px 14px;
}
.cnscd-status-card {
  min-height: 193px;
  padding: 30px 24px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 128px 1fr;
  align-items: center;
  gap: 14px;
  background: var(--tone-bg);
  box-shadow: 0 13px 27px rgba(31,101,178,.11);
  border: 1px solid var(--tone-light);
}
.cnscd-status-card.green {
  --tone: #25a84f;
  --tone-light: #9de4ad;
  --tone-bg: #effaf2;
}

.cnscd-status-card.orange {
  --tone: #ff7d05;
  --tone-light: #ffc36f;
  --tone-bg: #fff5e8;
}

.cnscd-status-card.blue {
  --tone: #075fdc;
  --tone-light: #acd1ff;
  --tone-bg: #eef6ff;
}

.cnscd-status-card.purple {
  --tone: #754bdc;
  --tone-light: #cbb3ff;
  --tone-bg: #f5f0ff;
}
.cnscd-status-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: radial-gradient(circle at 30% 25%, rgba(255,255,255,.22), transparent 36%), var(--tone);
  box-shadow: 0 12px 24px color-mix(in srgb, var(--tone), transparent 72%);
  font-size: 72px;
}
.cnscd-status-card h2 {
  margin: 0 0 14px;
  color: var(--tone);
  font-size: 27px;
  line-height: 1.18;
  font-weight: 950;
  letter-spacing: -.45px;
}
.cnscd-status-card p {
  margin: 0;
  color: #1f2440;
  font-size: 21px;
  line-height: 1.32;
  font-weight: 500;
}

.cnscd-status-timeline {
  position: relative;
  z-index: 7;
  width: calc(100% - 88px);
  height: 72px;
  margin: 0 auto 18px;
  border-radius: 18px;
  display: grid;
  grid-template-columns: 1fr 48px 1fr 48px 1fr 48px 1fr;
  align-items: center;
  padding: 0 28px;
  background: rgba(255,255,255,.94);
  box-shadow: 0 9px 21px rgba(31,101,178,.09);
  border: 1px solid #d7e7f8;
}
.cnscd-status-time-item {
  display: flex;
  align-items: center;
  gap: 13px;
  color: #075bd2;
  font-size: 20px;
  font-weight: 850;
  white-space: nowrap;
}
.cnscd-status-time-item svg {
  width: 40px;
  height: 40px;
  padding: 7px;
  border-radius: 50%;
  color: #fff;
  background: #075bd2;
}
.cnscd-status-time-dots {
  height: 6px;
  background-image: radial-gradient(#075bd2 3px, transparent 4px);
  background-size: 16px 6px;
  background-repeat: repeat-x;
  opacity: .9;
}

.cnscd-status-map-panel {
  position: relative;
  z-index: 6;
  width: calc(100% - 88px);
  margin: 0 auto 18px;
  padding: 24px 16px 16px;
  border-radius: 15px;
  background: rgba(255,255,255,.97);
  border: 1px solid #d1e4f7;
  box-shadow: 0 12px 26px rgba(31,101,178,.1);
}
.cnscd-status-map-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 6px 17px;
}
.cnscd-status-map-head h3 {
  margin: 0;
  color: #0b124e;
  font-size: 28px;
  line-height: 1;
  font-weight: 950;
}
.cnscd-status-filters {
  display: flex;
  gap: 18px;
}
.cnscd-status-filters button {
  width: 143px;
  height: 43px;
  border-radius: 9px;
  border: 1px solid #c7dcf3;
  display: grid;
  grid-template-columns: 1fr 20px;
  align-items: center;
  padding: 0 12px;
  color: #263252;
  background: #fff;
  font-size: 16px;
  font-weight: 650;
}
.cnscd-status-legend {
  display: grid;
  grid-template-columns: 120px 190px 186px 192px;
  gap: 10px;
  padding: 0 6px 18px;
  color: #1d2746;
  font-size: 14px;
  line-height: 1.25;
  font-weight: 600;
}
.cnscd-status-legend span {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.cnscd-status-legend i,
.cnscd-status-overview-row i {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: inline-block;
  flex: 0 0 auto;
  margin-top: 2px;
}
.cnscd-status-legend i.green,
.cnscd-status-overview-row i.green {
  background: #2db453;
}

.cnscd-status-legend i.orange,
.cnscd-status-overview-row i.orange {
  background: #ff7d05;
}

.cnscd-status-legend i.blue,
.cnscd-status-overview-row i.blue {
  background: #075fdc;
}

.cnscd-status-legend i.purple,
.cnscd-status-overview-row i.purple {
  background: #754bdc;
}

.cnscd-status-overview-row b.green {
  color: #2db453;
  background: transparent;
}

.cnscd-status-overview-row b.orange {
  color: #ff7d05;
  background: transparent;
}

.cnscd-status-overview-row b.blue {
  color: #075fdc;
  background: transparent;
}

.cnscd-status-overview-row b.purple {
  color: #754bdc;
  background: transparent;
}

.cnscd-status-house.green {
  color: #2db453;
}

.cnscd-status-house.orange {
  color: #ff7d05;
}

.cnscd-status-house.blue {
  color: #075fdc;
}

.cnscd-status-house.purple {
  color: #754bdc;
}
.cnscd-status-map-content {
  display: grid;
  grid-template-columns: 1fr 290px;
  gap: 13px;
  align-items: stretch;
}
.cnscd-status-map {
  position: relative;
  min-height: 266px;
  border-radius: 8px;
  overflow: hidden;
}
.cnscd-status-map svg:first-child {
  width: 100%;
  height: 266px;
}
.cnscd-status-house {
  position: absolute;
  width: 38px;
  height: 38px;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  padding: 7px;
  border-radius: 50%;
  color: #fff;
  background: currentColor;
  box-shadow: 0 8px 15px rgba(25,80,155,.16);
}
.cnscd-status-house svg { width: 26px; height: 26px; color: #fff; }
.cnscd-status-overview {
  min-height: 266px;
  padding: 23px 17px 18px;
  border-radius: 9px;
  border: 1px solid #d0e2f5;
  background: #fff;
}
.cnscd-status-overview h4 {
  margin: 0 0 18px;
  color: #111a50;
  font-size: 22px;
  line-height: 1;
  font-weight: 950;
}
.cnscd-status-overview-row {
  display: grid;
  grid-template-columns: 1fr 45px;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
  color: #1f2848;
  font-size: 16px;
  font-weight: 620;
}
.cnscd-status-overview-row span {
  display: flex;
  align-items: center;
  gap: 9px;
}
.cnscd-status-overview-row b {
  justify-self: end;
  font-size: 18px;
  background: transparent;
}
.cnscd-status-total {
  margin-top: 19px;
  padding-top: 19px;
  border-top: 1px solid #d7e7f8;
  display: grid;
  grid-template-columns: 1fr 60px;
  align-items: center;
}
.cnscd-status-total strong {
  color: #111a50;
  font-size: 19px;
  font-weight: 950;
}
.cnscd-status-total b {
  justify-self: end;
  color: #075bd2;
  font-size: 24px;
  line-height: 1;
  font-weight: 950;
}
.cnscd-status-tip {
  position: relative;
  z-index: 6;
  width: calc(100% - 88px);
  height: 61px;
  margin: 0 auto 15px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 54px 1fr;
  align-items: center;
  gap: 12px;
  padding: 0 25px;
  color: #075bd2;
  background: #e9f3ff;
  font-size: 17px;
  font-weight: 650;
}
.cnscd-status-tip svg { width: 37px; height: 37px; }
.cnscd-status-cta {
  position: relative;
  z-index: 20;
  width: calc(100% - 88px);
  height: 91px;
  margin: 0 auto 29px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 90px 1fr 56px;
  align-items: center;
  padding: 0 42px 0 151px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 13px 24px rgba(0,76,180,.27);
  transition: transform .18s ease, filter .18s ease;
}
.cnscd-status-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.cnscd-status-cta svg:first-child { width: 55px; height: 55px; justify-self: center; }
.cnscd-status-cta span {
  text-align: center;
  font-size: 39px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -.75px;
}
.cnscd-status-cta svg:last-child { width: 43px; height: 43px; justify-self: end; }

@media (max-width: 820px) {
  .cnscd-status-page { min-height: 1280px; }
  .cnscd-status-heading { width: calc(100% - 56px); }
  .cnscd-status-heading h1 { font-size: clamp(42px, 9vw, 55px); }
  .cnscd-status-heading p { width: min(100%, 620px); font-size: 21px; }
  .cnscd-status-grid,
  .cnscd-status-timeline,
  .cnscd-status-map-panel,
  .cnscd-status-tip,
  .cnscd-status-cta { width: calc(100% - 56px); }
  .cnscd-status-card { grid-template-columns: 105px 1fr; }
  .cnscd-status-icon { width: 82px; height: 82px; font-size: 58px; }
  .cnscd-status-legend { grid-template-columns: repeat(2, 1fr); }
  .cnscd-status-map-content { grid-template-columns: 1fr; }
  .cnscd-status-cta { padding-left: 70px; }
}

@media (max-width: 520px) {
  .cnscd-status-page { min-height: 1190px; }
  .cnscd-status-heading { padding-top: 36px; }
  .cnscd-status-pill { width: 126px; height: 45px; font-size: 23px; }
  .cnscd-status-heading h1 { font-size: 36px; }
  .cnscd-status-heading p { font-size: 17px; }
  .cnscd-status-grid { grid-template-columns: 1fr; gap: 11px; }
  .cnscd-status-card { min-height: 112px; grid-template-columns: 72px 1fr; padding: 16px; }
  .cnscd-status-icon { width: 60px; height: 60px; font-size: 40px; }
  .cnscd-status-card h2 { font-size: 19px; margin-bottom: 7px; }
  .cnscd-status-card p { font-size: 15px; }
  .cnscd-status-timeline { height: auto; min-height: 88px; grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 14px; }
  .cnscd-status-time-dots { display: none; }
  .cnscd-status-time-item { font-size: 15px; }
  .cnscd-status-time-item svg { width: 32px; height: 32px; }
  .cnscd-status-map-head { flex-direction: column; align-items: flex-start; }
  .cnscd-status-filters { width: 100%; }
  .cnscd-status-filters button { width: 50%; }
  .cnscd-status-legend { grid-template-columns: 1fr; font-size: 13px; }
  .cnscd-status-map svg:first-child { height: 210px; }
  .cnscd-status-overview { min-height: auto; }
  .cnscd-status-tip { height: auto; min-height: 56px; padding: 12px 16px; font-size: 14px; }
  .cnscd-status-cta { height: 74px; grid-template-columns: 42px 1fr 34px; padding: 0 22px; }
  .cnscd-status-cta span { font-size: 24px; }
  .cnscd-status-cta svg:first-child { width: 39px; height: 39px; }
}
`;
