import React from "react";

const learnItems = [
  {
    icon: <TargetIcon />,
    title: "Hiểu mục tiêu và thông điệp triển khai",
  },
  {
    icon: <PeopleIcon />,
    title: "Hiểu vai trò của Tổ trong từng bước",
  },
  {
    icon: <TapPhoneIcon />,
    title: "Thực hành chuỗi thao tác trên HKDO",
  },
  {
    icon: <WebIcon />,
    title: "Thực hành trải nghiệm trên dothithongminh1.vn",
  },
  {
    icon: <HeadsetIcon />,
    title: "Nắm 7 kênh hỗ trợ của HKDO",
  },
];

export default function CnscdLearnPage() {
  return (
    <section className="cnscd-learn-page" aria-label="Tổ CNSCĐ cần học gì trước ra quân">
      <style>{css}</style>

      <section className="cnscd-learn-hero">
        <div className="cnscd-learn-dots" />
        <div className="cnscd-learn-copy">
          <div className="cnscd-learn-pill">MÀN 2</div>
          <h1>Tổ cần học gì trước ra quân?</h1>
          <p>
            Tổ CNSCĐ là lực lượng hỗ trợ gần hộ nhất. Muốn làm tốt, phải nắm rõ mục tiêu, quy trình và cách chuyển vướng mắc.
          </p>
        </div>

        <TrainingIllustration />
      </section>

      <section className="cnscd-learn-list" aria-label="Nội dung tổ CNSCĐ cần học">
        {learnItems.map((item, index) => (
          <article className="cnscd-learn-card" key={item.title}>
            <div className="cnscd-learn-number">{index + 1}</div>
            <div className="cnscd-learn-icon">{item.icon}</div>
            <h2>{item.title}</h2>
          </article>
        ))}
      </section>

      <a href="#cnscd-quy-trinh-ho-tro" className="cnscd-learn-cta">
        <ClipboardListIcon />
        <span>Báo cáo trạng thái hộ</span>
        <ArrowRightIcon />
      </a>
    </section>
  );
}

function TrainingIllustration() {
  return (
    <section className="cnscd-learn-art" aria-hidden="true">
      <div className="window-frame">
        <div className="window-sky" />
        <div className="window-line line-a" />
        <div className="window-line line-b" />
      </div>
      <div className="poster-board">CÙNG NHAU<br />VÌ DỮ LIỆU<br />CHÍNH XÁC<br />– HIỆU QUẢ</div>
      <div className="plant" />

      <div className="training-screen">
        <strong>QUY TRÌNH HỖ TRỢ HỘ DÂN</strong>
        {[
          ["1", "TIẾP CẬN & GIỚI THIỆU", <UserIcon />],
          ["2", "HƯỚNG DẪN THỰC HIỆN", <PhoneIcon />],
          ["3", "KIỂM TRA & XÁC NHẬN", <ChecklistMiniIcon />],
          ["4", "GHI NHẬN VƯỚNG MẮC", <QuestionIcon />],
          ["5", "CHUYỂN VƯỚNG MẮC", <PaperPlaneIcon />],
        ].map(([step, text, icon]) => (
          <div className="screen-row" key={step}>
            <span>{icon}</span>
            <b>{step}</b>
            <em>{text}</em>
          </div>
        ))}
      </div>

      <div className="trainer-person">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="logo">CNSCĐ</div>
        <div className="lanyard" />
        <div className="badge" />
        <div className="arm-left" />
        <div className="arm-right" />
      </div>

      <div className="student student-left">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="chair" />
      </div>
      <div className="student student-mid">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="chair" />
      </div>
      <div className="student student-right">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="chair" />
      </div>

      <div className="training-table" />
      <div className="open-book" />
    </section>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ArrowRightIcon() { return <Svg><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function TargetIcon() { return <Svg><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.4"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.4"/><path d="M15 9 21 3M18 3h3v3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function PeopleIcon() { return <Svg><circle cx="12" cy="8" r="3.2" fill="currentColor"/><circle cx="5.7" cy="10" r="2.7" fill="currentColor" opacity=".78"/><circle cx="18.3" cy="10" r="2.7" fill="currentColor" opacity=".78"/><path d="M4 21c.5-4.5 3-6.7 8-6.7s7.5 2.2 8 6.7H4Z" fill="currentColor"/></Svg>; }
function TapPhoneIcon() { return <Svg><rect x="7" y="2" width="10" height="17" rx="2.2" stroke="currentColor" strokeWidth="2.4"/><path d="M12 6v5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><path d="M10 12.5c2.7 0 4.8 2.1 4.8 4.8v4.2h-3.6v-3.8l-3.1-2.8c-.7-.7-.3-2.4 1.9-2.4Z" fill="currentColor"/></Svg>; }
function WebIcon() { return <Svg><rect x="3" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2.4"/><circle cx="12" cy="11.5" r="4" stroke="currentColor" strokeWidth="2.1"/><path d="M8 11.5h8M12 7.5c1.2 1.3 1.8 2.7 1.8 4s-.6 2.7-1.8 4c-1.2-1.3-1.8-2.7-1.8-4s.6-2.7 1.8-4ZM7 21h10" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/></Svg>; }
function HeadsetIcon() { return <Svg><path d="M5 13v-1a7 7 0 0 1 14 0v1" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><rect x="3" y="12" width="5" height="7" rx="2" fill="currentColor"/><rect x="16" y="12" width="5" height="7" rx="2" fill="currentColor"/><path d="M18 19c-.7 2-2.5 3-5.2 3H11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></Svg>; }
function ClipboardListIcon() { return <Svg><path d="M8 5h8M9 3h6v4H9V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6h12v15H6V6Z" stroke="currentColor" strokeWidth="2.3"/><path d="m9 12 1.5 1.5L14 10M9 17h6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function UserIcon() { return <Svg><circle cx="12" cy="8" r="3.2" fill="currentColor"/><path d="M5 21c.5-4.6 2.8-6.8 7-6.8s6.5 2.2 7 6.8H5Z" fill="currentColor"/></Svg>; }
function PhoneIcon() { return <Svg><rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2.2"/><circle cx="12" cy="18" r="1" fill="currentColor"/></Svg>; }
function ChecklistMiniIcon() { return <Svg><path d="M7 3h10v18H7V3Z" stroke="currentColor" strokeWidth="2.2"/><path d="m9 8 1.2 1.2L13 6.5M9 13l1.2 1.2L13 11.5M15 8h1M15 13h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function QuestionIcon() { return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.3"/><path d="M9.5 9a2.7 2.7 0 1 1 4.1 2.3c-1 .7-1.6 1.1-1.6 2.2" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/><circle cx="12" cy="17" r="1.2" fill="currentColor"/></Svg>; }
function PaperPlaneIcon() { return <Svg><path d="M3 11 21 3l-7 18-3-7-8-3Z" fill="currentColor"/></Svg>; }

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

.cnscd-learn-page {
  position: relative;
  width: 100%;
  min-height: 1378px;
  overflow: hidden;
  background:
    radial-gradient(circle at 70% 18%, rgba(255,255,255,.95) 0 13%, transparent 35%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 48%, #f9fdff 100%);
}
.cnscd-learn-hero {
  position: relative;
  min-height: 1185px;
  overflow: hidden;
  padding: 38px 0 0;
}
.cnscd-learn-hero::before {
  content: "";
  position: absolute;
  right: -20px;
  top: 175px;
  width: 620px;
  height: 780px;
  background: linear-gradient(140deg, rgba(231,246,255,.82), rgba(187,222,249,.28));
  clip-path: polygon(32% 0, 100% 9%, 100% 100%, 4% 100%, 0 35%);
}
.cnscd-learn-dots {
  position: absolute;
  right: 24px;
  top: 46px;
  width: 114px;
  height: 94px;
  background-image: radial-gradient(#c9e1fb 3px, transparent 4px);
  background-size: 22px 22px;
  opacity: .85;
}
.cnscd-learn-copy {
  position: relative;
  z-index: 7;
  width: 470px;
  margin-left: 39px;
}
.cnscd-learn-pill {
  width: 151px;
  height: 54px;
  margin-bottom: 25px;
  border-radius: 24px;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #fff;
  border: 3px solid #075bd2;
  font-size: 31px;
  line-height: 1;
  font-weight: 950;
}
.cnscd-learn-copy h1 {
  margin: 0 0 25px;
  color: #070d4c;
  font-size: 69px;
  line-height: 1.05;
  font-weight: 950;
  letter-spacing: -3.2px;
}
.cnscd-learn-copy p {
  margin: 0;
  width: 470px;
  color: #2e3344;
  font-size: 28px;
  line-height: 1.46;
  font-weight: 500;
}

.cnscd-learn-art {
  position: absolute;
  inset: 0;
}
.window-frame {
  position: absolute;
  right: 34px;
  top: 182px;
  width: 420px;
  height: 320px;
  border: 8px solid rgba(107,177,236,.42);
  border-radius: 7px;
  background: rgba(255,255,255,.2);
  transform: skewY(-4deg);
}
.window-frame::before,
.window-frame::after {
  content: "";
  position: absolute;
  background: rgba(107,177,236,.35);
}
.window-frame::before { left: 42%; top: 0; width: 7px; height: 100%; }
.window-frame::after { left: 0; right: 0; top: 46%; height: 7px; }
.window-sky {
  position: absolute;
  inset: 14px;
  background: linear-gradient(135deg, rgba(193,231,255,.55), rgba(255,255,255,.12));
}
.poster-board {
  position: absolute;
  right: 17px;
  top: 314px;
  width: 116px;
  height: 152px;
  border-radius: 5px;
  display: grid;
  place-items: center;
  color: #1f66c3;
  background: #fff;
  border: 4px solid #c6d7e8;
  font-size: 14px;
  line-height: 1.28;
  font-weight: 950;
  text-align: center;
}
.plant {
  position: absolute;
  right: 4px;
  top: 510px;
  width: 66px;
  height: 144px;
}
.plant::before,
.plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 42px;
  height: 112px;
  border-radius: 40px 40px 0 0;
  background: linear-gradient(180deg, #91d69c, #3aa66c);
}
.plant::before { left: 0; transform: rotate(-24deg); }
.plant::after { right: 0; transform: rotate(22deg); }
.training-screen {
  position: absolute;
  z-index: 4;
  right: 132px;
  top: 421px;
  width: 333px;
  height: 347px;
  padding: 24px 24px 18px;
  border-radius: 6px;
  background: #fff;
  border: 8px solid #06285b;
  box-shadow: 0 22px 34px rgba(18,65,132,.22);
}
.training-screen strong {
  display: block;
  margin-bottom: 17px;
  color: #075bd2;
  font-size: 18px;
  line-height: 1;
  font-weight: 950;
  text-align: center;
}
.screen-row {
  height: 45px;
  margin: 8px 0;
  border: 2px solid #cde2fa;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 42px 33px 1fr;
  align-items: center;
  gap: 9px;
  padding: 0 11px;
  color: #0b58c6;
  background: #fff;
}
.screen-row span { font-size: 28px; }
.screen-row b {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #075bd2;
  font-size: 14px;
  font-weight: 950;
}
.screen-row em {
  color: #133676;
  font-size: 12px;
  line-height: 1;
  font-style: normal;
  font-weight: 950;
}
.trainer-person {
  position: absolute;
  z-index: 7;
  right: 16px;
  top: 474px;
  width: 188px;
  height: 410px;
}
.trainer-person .hair { position: absolute; left: 51px; top: 0; width: 84px; height: 61px; border-radius: 55px 55px 22px 22px; background: #061746; }
.trainer-person .face { position: absolute; left: 67px; top: 51px; width: 59px; height: 76px; border-radius: 45%; background: #ffbd8c; }
.trainer-person .body { position: absolute; left: 31px; top: 133px; width: 126px; height: 257px; border-radius: 55px 55px 0 0; background: linear-gradient(180deg, #0d7be4, #0753be); }
.trainer-person .logo {
  position: absolute;
  right: 31px;
  top: 165px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  border: 3px solid rgba(255,255,255,.8);
  font-size: 8px;
  font-weight: 950;
}
.trainer-person .lanyard { position: absolute; left: 85px; top: 151px; width: 2px; height: 102px; background: #b8e1ff; transform: rotate(-18deg); box-shadow: 32px 0 0 #b8e1ff; }
.trainer-person .badge { position: absolute; left: 84px; top: 245px; width: 37px; height: 50px; border-radius: 4px; background: #e2f3ff; border: 3px solid #5faef6; }
.trainer-person .arm-left { position: absolute; left: 9px; top: 174px; width: 73px; height: 25px; border-radius: 999px; background: #0d73df; transform: rotate(59deg); }
.trainer-person .arm-left::after { content: ""; position: absolute; left: -11px; top: -2px; width: 27px; height: 27px; border-radius: 50%; background: #ffbd8c; }
.trainer-person .arm-right { position: absolute; right: 59px; top: 184px; width: 87px; height: 25px; border-radius: 999px; background: #0d73df; transform: rotate(-50deg); }
.trainer-person .arm-right::after { content: ""; position: absolute; right: -11px; top: -2px; width: 27px; height: 27px; border-radius: 50%; background: #ffbd8c; }
.student {
  position: absolute;
  z-index: 8;
  bottom: 39px;
  width: 150px;
  height: 268px;
}
.student-left { left: 454px; }
.student-mid { left: 619px; }
.student-right { right: -1px; }
.student .hair { position: absolute; left: 32px; top: 0; width: 78px; height: 64px; border-radius: 52px 52px 20px 20px; background: #061746; }
.student .face { position: absolute; left: 50px; top: 44px; width: 51px; height: 64px; border-radius: 45%; background: #ffbd8c; }
.student .body { position: absolute; left: 15px; top: 105px; width: 120px; height: 159px; border-radius: 50px 50px 0 0; background: linear-gradient(180deg, #0d7be4, #0753be); }
.student .body::after {
  content: "TỔ CNSCĐ";
  white-space: pre;
  position: absolute;
  left: 15px;
  right: 15px;
  top: 45px;
  color: #fff;
  font-size: 14px;
  line-height: 1.15;
  font-weight: 950;
  text-align: center;
}
.student .chair { position: absolute; left: 6px; right: 5px; bottom: 0; height: 68px; border-radius: 16px 16px 0 0; background: #08458f; }
.student-right .hair { background: #241616; }
.training-table {
  position: absolute;
  z-index: 6;
  right: 0;
  bottom: 51px;
  width: 522px;
  height: 104px;
  border-radius: 50% 50% 0 0;
  background: linear-gradient(180deg, #d8a268, #9c6334);
}

.cnscd-learn-list {
  position: absolute;
  z-index: 10;
  left: 25px;
  top: 462px;
  width: 424px;
  display: grid;
  gap: 13px;
}
.cnscd-learn-card {
  position: relative;
  min-height: 145px;
  padding: 24px 20px 24px 86px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 96px 1fr;
  align-items: center;
  gap: 5px;
  background: rgba(255,255,255,.98);
  box-shadow: 0 13px 26px rgba(31,101,178,.13);
}
.cnscd-learn-number {
  position: absolute;
  left: 14px;
  top: 22px;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #0872e3, #0754bf);
  font-size: 28px;
  font-weight: 950;
}
.cnscd-learn-icon {
  width: 87px;
  height: 87px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #e8f4ff;
  font-size: 61px;
}
.cnscd-learn-card h2 {
  margin: 0;
  color: #10175c;
  font-size: 27px;
  line-height: 1.25;
  font-weight: 920;
  letter-spacing: -.5px;
}
.cnscd-learn-cta {
  position: absolute;
  z-index: 20;
  left: 34px;
  right: 34px;
  bottom: 32px;
  height: 95px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 96px 1fr 59px;
  align-items: center;
  padding: 0 44px 0 151px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 13px 24px rgba(0,76,180,.27);
  transition: transform .18s ease, filter .18s ease;
}
.cnscd-learn-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.cnscd-learn-cta svg:first-child { width: 58px; height: 58px; justify-self: center; }
.cnscd-learn-cta span {
  text-align: center;
  font-size: 41px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -.75px;
}
.cnscd-learn-cta svg:last-child { width: 44px; height: 44px; justify-self: end; }

@media (max-width: 820px) {
  .cnscd-learn-page { min-height: 1240px; }
  .cnscd-learn-hero { min-height: 1085px; }
  .cnscd-learn-copy { width: calc(100% - 50px); margin-left: 30px; }
  .cnscd-learn-copy h1 { font-size: clamp(45px, 10vw, 69px); }
  .cnscd-learn-copy p { width: min(100%, 470px); font-size: 23px; }
  .cnscd-learn-art { transform: scale(.86); transform-origin: top center; width: 116%; left: -8%; top: 70px; }
  .cnscd-learn-list { top: 430px; left: 24px; width: 390px; }
  .cnscd-learn-card { min-height: 125px; }
  .cnscd-learn-cta { padding-left: 64px; }
}

@media (max-width: 520px) {
  .cnscd-learn-page { min-height: 1120px; }
  .cnscd-learn-hero { min-height: 980px; padding-top: 28px; }
  .cnscd-learn-pill { width: 128px; height: 47px; font-size: 24px; }
  .cnscd-learn-copy h1 { font-size: 39px; }
  .cnscd-learn-copy p { font-size: 18px; }
  .cnscd-learn-art { transform: scale(.64); width: 150%; left: -25%; top: 120px; }
  .cnscd-learn-list { position: relative; top: auto; left: auto; width: calc(100% - 34px); margin: 20px auto 0; gap: 10px; }
  .cnscd-learn-card { min-height: 86px; grid-template-columns: 58px 1fr; padding: 14px 14px 14px 58px; }
  .cnscd-learn-number { left: 10px; top: 18px; width: 36px; height: 36px; font-size: 20px; }
  .cnscd-learn-icon { width: 54px; height: 54px; font-size: 37px; }
  .cnscd-learn-card h2 { font-size: 17px; }
  .cnscd-learn-cta { left: 22px; right: 22px; height: 74px; grid-template-columns: 42px 1fr 34px; padding: 0 22px; }
  .cnscd-learn-cta span { font-size: 24px; }
  .cnscd-learn-cta svg:first-child { width: 39px; height: 39px; }
}
`;
