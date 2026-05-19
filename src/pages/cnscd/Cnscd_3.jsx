import React from "react";

const launchTasks = [
  { icon: <WelcomeIcon />, title: "Mời hộ và hỗ trợ tiếp cận" },
  { icon: <OnlineSupportIcon />, title: "Hỗ trợ hộ trực tiếp hoặc trực tuyến" },
  { icon: <QrHandIcon />, title: "Nhận QR và bàn giao cho hộ" },
  { icon: <ChecklistIcon />, title: "Ghi nhận trạng thái từng hộ" },
  { icon: <MegaphoneIcon />, title: "Nhắc rõ: hộ tự dán QR tại điểm bán" },
];

export default function CnscdLaunchDayPage() {
  return (
    <section className="cnscd-launch-page" aria-label="Tổ làm gì trong ngày phát động">
      <style>{css}</style>

      <section className="cnscd-launch-hero">
        <div className="cnscd-launch-badge">
          <PeopleIcon />
          <span>★</span>
        </div>

        <div className="cnscd-launch-copy">
          <h1>Tổ làm gì trong ngày phát động?</h1>
          <p>Trong ngày ra quân, Tổ CNSCĐ là lực lượng hỗ trợ trực tiếp, giữ nhịp thực thi tại địa bàn.</p>
        </div>

        <HeroNetworkArt />
      </section>

      <section className="cnscd-launch-task-list" aria-label="Các việc tổ CNSCĐ cần làm trong ngày phát động">
        {launchTasks.map((task, index) => (
          <article className="cnscd-launch-task" key={task.title}>
            <div className="cnscd-launch-number">{index + 1}</div>
            <div className="cnscd-launch-icon">{task.icon}</div>
            <h2>{task.title}</h2>
            <div className="cnscd-launch-arrow"><ArrowRightIcon /></div>
          </article>
        ))}
      </section>

      <LaunchIllustration />

      <a href="#cnscd-bao-cao-sau-ra-quan" className="cnscd-launch-cta">
        <ClipboardListIcon />
        <span>Báo cáo trạng thái hộ</span>
        <ArrowRightIcon />
      </a>
    </section>
  );
}

function HeroNetworkArt() {
  return (
    <div className="cnscd-launch-network" aria-hidden="true">
      <div className="building b1" />
      <div className="building b2" />
      <div className="building b3" />
      <span className="pin p1" />
      <span className="pin p2" />
      <span className="pin p3" />
      <svg viewBox="0 0 300 170" fill="none">
        <path d="M20 118C62 68 103 96 135 52c39-54 72-13 126-38" stroke="#b9d8fa" strokeWidth="3" strokeDasharray="8 8" />
        <path d="M57 72 135 52 238 35M57 72 111 132 238 35M111 132 184 91" stroke="#d7eaff" strokeWidth="2" />
        {[57, 135, 238, 111, 184].map((x, index) => (
          <circle key={index} cx={x} cy={[72, 52, 35, 132, 91][index]} r="6" fill="#acd1f9" />
        ))}
      </svg>
    </div>
  );
}

function LaunchIllustration() {
  return (
    <section className="cnscd-launch-illustration" aria-hidden="true">
      <div className="cnscd-launch-shop">
        <div className="shop-bg" />
        <div className="shelves">{Array.from({ length: 28 }).map((_, i) => <i key={i} />)}</div>
        <div className="vegetable-row"><i /><i /><i /><i /><i /></div>
      </div>

      <div className="cnscd-launch-qr-poster">
        <strong>ĐIỂM BÁN<br />HÀNG</strong>
        <p>THAM GIA KINH<br />DOANH THỰC KINH DOANH</p>
        <QrMini />
        <span>Cảm ơn quý khách!</span>
      </div>

      <div className="cnscd-launch-worker">
        <div className="cap">TỔ<br />CNSCĐ</div>
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="sleeve" />
        <div className="badge" />
        <div className="arm-left" />
        <div className="arm-right" />
        <div className="qr-card"><QrMini /></div>
      </div>

      <div className="cnscd-launch-owner">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="apron" />
        <div className="arm" />
      </div>

      <div className="cnscd-launch-remote-box">
        <div className="remote-person">
          <div className="hair" />
          <div className="face" />
          <div className="body" />
          <div className="headset" />
          <div className="laptop" />
          <div className="bubble">•••</div>
        </div>
        <div className="remote-phone">
          <div className="phone-face" />
          <div className="phone-buttons"><span /><span /><span /></div>
        </div>
        <svg viewBox="0 0 200 300" className="remote-dash" fill="none">
          <path d="M10 70C55 70 55 122 92 122H178" stroke="#1875e7" strokeWidth="4" strokeDasharray="9 8" />
        </svg>
      </div>
    </section>
  );
}

function QrMini() {
  return (
    <svg className="qr-mini" viewBox="0 0 78 78" fill="none">
      <rect width="78" height="78" rx="5" fill="#fff" />
      {[
        [8, 8], [15, 8], [22, 8], [8, 15], [22, 15], [8, 22], [15, 22], [22, 22],
        [48, 8], [55, 8], [62, 8], [48, 15], [62, 15], [48, 22], [55, 22], [62, 22],
        [8, 48], [15, 48], [22, 48], [8, 55], [22, 55], [8, 62], [15, 62], [22, 62],
        [36, 34], [43, 34], [57, 34], [36, 41], [50, 41], [64, 41], [43, 48], [57, 48], [36, 55], [50, 55], [64, 55], [43, 62], [57, 62],
      ].map(([x, y], index) => <rect key={index} x={x} y={y} width="6" height="6" fill="#073f92" />)}
    </svg>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ArrowRightIcon() { return <Svg><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function PeopleIcon() { return <Svg><circle cx="12" cy="8" r="3.2" fill="currentColor"/><circle cx="5.7" cy="10" r="2.7" fill="currentColor" opacity=".78"/><circle cx="18.3" cy="10" r="2.7" fill="currentColor" opacity=".78"/><path d="M4 21c.5-4.5 3-6.7 8-6.7s7.5 2.2 8 6.7H4Z" fill="currentColor"/></Svg>; }
function WelcomeIcon() { return <Svg><circle cx="11" cy="8" r="4" fill="currentColor"/><path d="M5 22c.5-5 2.7-7.5 6-7.5s5.5 2.5 6 7.5H5Z" fill="currentColor"/><path d="M18 6v7M15 8l3-3 3 3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function OnlineSupportIcon() { return <Svg><path d="M5 13v-1a7 7 0 0 1 14 0v1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><rect x="3" y="12" width="5" height="7" rx="2" fill="currentColor"/><rect x="16" y="12" width="5" height="7" rx="2" fill="currentColor"/><path d="M9 20h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><rect x="8" y="7" width="11" height="7" rx="2" fill="currentColor" opacity=".18"/><path d="M11 10h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function QrHandIcon() { return <Svg><rect x="7" y="2" width="10" height="12" rx="1.8" stroke="currentColor" strokeWidth="2"/><path d="M9 4h2v2H9V4Zm4 0h2v2h-2V4ZM9 8h2v2H9V8Zm4 1h2v2h-2V9Z" fill="currentColor"/><path d="M2 16c2.4.5 4.2 1.2 5.6 2.4l2.4 2.1c1 .9 2.4 1.1 3.6.4L22 16" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function ChecklistIcon() { return <Svg><path d="M7 3h10v18H7V3Z" stroke="currentColor" strokeWidth="2.2"/><path d="m9 8 1.2 1.2L13 6.5M9 13l1.2 1.2L13 11.5M15 8h1M15 13h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="17" cy="17" r="4" fill="currentColor"/><path d="m15.4 17 1.1 1.1 2.2-2.4" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function MegaphoneIcon() { return <Svg><path d="M4 14h3l9 4V6l-9 4H4v4Z" fill="currentColor"/><path d="M19 9c1 1.4 1 4.6 0 6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/></Svg>; }
function ClipboardListIcon() { return <Svg><path d="M8 5h8M9 3h6v4H9V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6h12v15H6V6Z" stroke="currentColor" strokeWidth="2.3"/><path d="m9 12 1.5 1.5L14 10M9 17h6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }

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

.cnscd-launch-page {
  position: relative;
  width: 100%;
  min-height: 1378px;
  overflow: hidden;
  background:
    radial-gradient(circle at 72% 16%, rgba(255,255,255,.94) 0 12%, transparent 35%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 58%, #f9fdff 100%);
}
.cnscd-launch-hero {
  position: relative;
  z-index: 3;
  min-height: 360px;
  padding: 54px 45px 0;
}
.cnscd-launch-badge {
  position: absolute;
  left: 45px;
  top: 40px;
  width: 126px;
  height: 126px;
  clip-path: polygon(50% 0, 94% 24%, 94% 75%, 50% 100%, 6% 75%, 6% 24%);
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #197ef0, #0751bd);
  box-shadow: 0 14px 24px rgba(13,92,197,.22);
}
.cnscd-launch-badge svg { width: 64px; height: 64px; margin-top: -10px; }
.cnscd-launch-badge span {
  position: absolute;
  bottom: 21px;
  color: #fff;
  font-size: 20px;
}
.cnscd-launch-copy {
  position: relative;
  z-index: 7;
  width: 615px;
  margin-left: 142px;
}
.cnscd-launch-copy h1 {
  margin: 0 0 22px;
  color: #075bd2;
  font-size: 65px;
  line-height: 1.12;
  font-weight: 950;
  letter-spacing: -3.1px;
}
.cnscd-launch-copy p {
  width: 560px;
  margin: 0 0 0 -132px;
  color: #202638;
  font-size: 27px;
  line-height: 1.45;
  font-weight: 500;
}
.cnscd-launch-network {
  position: absolute;
  right: 0;
  top: 40px;
  width: 300px;
  height: 210px;
  opacity: .82;
}
.cnscd-launch-network svg { position: absolute; inset: 0; width: 300px; height: 170px; }
.cnscd-launch-network .building {
  position: absolute;
  bottom: 9px;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, #6bb2f1, #dcefff);
  opacity: .64;
}
.cnscd-launch-network .b1 { right: 132px; width: 58px; height: 113px; }
.cnscd-launch-network .b2 { right: 72px; width: 51px; height: 84px; }
.cnscd-launch-network .b3 { right: 12px; width: 49px; height: 73px; }
.cnscd-launch-network .pin {
  position: absolute;
  width: 35px;
  height: 35px;
  border-radius: 50% 50% 50% 5px;
  transform: rotate(-45deg);
  background: #8bc4f8;
}
.cnscd-launch-network .pin::after {
  content: "";
  position: absolute;
  inset: 11px;
  border-radius: 50%;
  background: #fff;
}
.cnscd-launch-network .p1 { left: 31px; top: 70px; }
.cnscd-launch-network .p2 { right: 47px; top: 13px; width: 50px; height: 50px; }
.cnscd-launch-network .p3 { left: 13px; top: 140px; width: 34px; height: 34px; }

.cnscd-launch-task-list {
  position: relative;
  z-index: 12;
  width: calc(100% - 88px);
  margin: 0 auto;
  display: grid;
  gap: 11px;
}
.cnscd-launch-task {
  min-height: 119px;
  padding: 14px 27px 14px 18px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 62px 111px 1fr 42px;
  align-items: center;
  gap: 16px;
  background: rgba(255,255,255,.97);
  box-shadow: 0 13px 27px rgba(31,101,178,.12);
}
.cnscd-launch-number {
  width: 57px;
  height: 57px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #0872e3, #0754bf);
  font-size: 31px;
  line-height: 1;
  font-weight: 950;
}
.cnscd-launch-icon {
  width: 92px;
  height: 92px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #e8f4ff;
  font-size: 62px;
}
.cnscd-launch-task h2 {
  margin: 0;
  color: #0b0f35;
  font-size: 30px;
  line-height: 1.17;
  font-weight: 920;
  letter-spacing: -.45px;
}
.cnscd-launch-arrow {
  color: #075fd5;
  font-size: 38px;
  justify-self: end;
}

.cnscd-launch-illustration {
  position: relative;
  z-index: 5;
  width: calc(100% - 78px);
  height: 426px;
  margin: 20px auto 0;
  border-radius: 10px;
  overflow: hidden;
}
.cnscd-launch-shop {
  position: absolute;
  left: 0;
  top: 0;
  width: 632px;
  height: 426px;
  border-radius: 10px;
  overflow: hidden;
  background: #d9e2d2;
}
.cnscd-launch-shop .shop-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(91,54,22,.28) 0 12%, transparent 12% 100%),
    linear-gradient(180deg, #9d6b3f, #d5ae73 30%, #efe4c8 100%);
}
.cnscd-launch-shop .shelves {
  position: absolute;
  right: 0;
  top: 0;
  width: 380px;
  height: 220px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 11px;
  padding: 26px 22px;
  background: rgba(79,63,39,.18);
}
.cnscd-launch-shop .shelves i {
  border-radius: 5px 5px 12px 12px;
  background: linear-gradient(180deg, #f0c059, #9b6a28);
}
.vegetable-row {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 72px;
  display: flex;
  align-items: flex-end;
  gap: 7px;
  padding: 0 18px 12px;
}
.vegetable-row i {
  width: 70px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(180deg, #78c851, #3b8f2f);
}
.vegetable-row i:nth-child(3), .vegetable-row i:nth-child(4) { background: linear-gradient(180deg, #ff755e, #cf3a24); }
.cnscd-launch-qr-poster {
  position: absolute;
  left: 26px;
  bottom: 78px;
  width: 121px;
  height: 231px;
  border-radius: 5px;
  padding: 21px 11px 9px;
  text-align: center;
  color: #fff;
  background: linear-gradient(180deg, #136bd4, #064fb1);
  box-shadow: 0 12px 22px rgba(15,81,178,.24);
}
.cnscd-launch-qr-poster strong { display: block; font-size: 23px; line-height: 1.08; font-weight: 950; }
.cnscd-launch-qr-poster p { margin: 15px 0 7px; font-size: 8px; line-height: 1.25; font-weight: 800; }
.cnscd-launch-qr-poster .qr-mini { width: 74px; height: 74px; margin: 0 auto 9px; }
.cnscd-launch-qr-poster span { font-size: 10px; font-weight: 800; }
.cnscd-launch-worker {
  position: absolute;
  z-index: 5;
  left: 160px;
  bottom: 9px;
  width: 205px;
  height: 380px;
}
.cnscd-launch-worker .cap {
  position: absolute;
  z-index: 4;
  left: 54px;
  top: 0;
  width: 91px;
  height: 48px;
  border-radius: 50% 50% 8px 8px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #075ed2;
  font-size: 12px;
  line-height: 1.05;
  font-weight: 950;
  text-align: center;
}
.cnscd-launch-worker .hair { position: absolute; left: 58px; top: 40px; width: 78px; height: 47px; border-radius: 50px 50px 18px 18px; background: #061746; }
.cnscd-launch-worker .face { position: absolute; left: 66px; top: 68px; width: 63px; height: 80px; border-radius: 45%; background: #ffbd8c; }
.cnscd-launch-worker .body { position: absolute; left: 30px; top: 153px; width: 132px; height: 230px; border-radius: 55px 55px 0 0; background: linear-gradient(180deg, #0d7be4, #0753be); }
.cnscd-launch-worker .sleeve { position: absolute; left: 7px; top: 172px; width: 58px; height: 96px; border-radius: 999px; background: #0f6bd3; transform: rotate(18deg); }
.cnscd-launch-worker .badge { position: absolute; left: 87px; top: 238px; width: 36px; height: 48px; border-radius: 4px; background: #d7ecff; border: 3px solid #1b6ad2; }
.cnscd-launch-worker .arm-left { position: absolute; left: 79px; top: 211px; width: 96px; height: 24px; border-radius: 999px; background: #0d73df; transform: rotate(26deg); }
.cnscd-launch-worker .arm-right { position: absolute; right: -12px; top: 223px; width: 92px; height: 24px; border-radius: 999px; background: #0d73df; transform: rotate(-21deg); }
.cnscd-launch-worker .arm-right::after { content: ""; position: absolute; right: -8px; top: -3px; width: 28px; height: 28px; border-radius: 50%; background: #ffbd8c; }
.cnscd-launch-worker .qr-card {
  position: absolute;
  right: -20px;
  top: 226px;
  width: 92px;
  height: 112px;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 11px 18px rgba(21,79,150,.18);
  transform: rotate(3deg);
}
.cnscd-launch-worker .qr-card .qr-mini { width: 76px; height: 76px; }
.cnscd-launch-owner {
  position: absolute;
  z-index: 5;
  left: 378px;
  bottom: 5px;
  width: 190px;
  height: 350px;
}
.cnscd-launch-owner .hair { position: absolute; left: 54px; top: 18px; width: 88px; height: 88px; border-radius: 56px 56px 27px 27px; background: #2b1a18; }
.cnscd-launch-owner .face { position: absolute; left: 76px; top: 67px; width: 57px; height: 73px; border-radius: 45%; background: #ffbd8c; }
.cnscd-launch-owner .body { position: absolute; left: 42px; top: 147px; width: 110px; height: 205px; border-radius: 48px 48px 0 0; background: #f1e4d2; }
.cnscd-launch-owner .apron { position: absolute; left: 55px; top: 154px; width: 84px; height: 197px; border-radius: 35px 35px 0 0; background: #a9845c; }
.cnscd-launch-owner .arm { position: absolute; left: -13px; top: 223px; width: 117px; height: 25px; border-radius: 999px; background: #f1e4d2; transform: rotate(22deg); }
.cnscd-launch-owner .arm::after { content: ""; position: absolute; left: -10px; top: -2px; width: 28px; height: 28px; border-radius: 50%; background: #ffbd8c; }
.cnscd-launch-remote-box {
  position: absolute;
  right: 0;
  top: 0;
  width: 238px;
  height: 426px;
  border-radius: 16px;
  border: 3px solid #1a73e8;
  overflow: hidden;
  background: linear-gradient(180deg, #e9f5ff, #d6ecff);
}
.remote-person {
  position: absolute;
  left: 45px;
  top: 28px;
  width: 146px;
  height: 170px;
}
.remote-person .hair { position: absolute; left: 44px; top: 0; width: 62px; height: 42px; border-radius: 42px 42px 15px 15px; background: #1b1517; }
.remote-person .face { position: absolute; left: 52px; top: 36px; width: 48px; height: 60px; border-radius: 45%; background: #ffbd8c; }
.remote-person .body { position: absolute; left: 26px; top: 102px; width: 94px; height: 85px; border-radius: 42px 42px 0 0; background: linear-gradient(180deg, #0d7be4, #0753be); }
.remote-person .headset { position: absolute; left: 42px; top: 35px; width: 65px; height: 35px; border: 6px solid #075bd2; border-bottom: 0; border-radius: 50px 50px 0 0; }
.remote-person .laptop { position: absolute; left: 13px; bottom: -13px; width: 118px; height: 67px; border-radius: 8px; background: #2d496f; }
.remote-person .bubble {
  position: absolute;
  right: -28px;
  top: 29px;
  width: 60px;
  height: 45px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #1979e9;
  font-size: 25px;
  font-weight: 900;
}
.remote-phone {
  position: absolute;
  left: 63px;
  bottom: 34px;
  width: 101px;
  height: 154px;
  border-radius: 18px;
  background: #07315f;
  box-shadow: 0 12px 20px rgba(0,45,100,.22);
  transform: rotate(-13deg);
}
.remote-phone::before { content: ""; position: absolute; inset: 9px; border-radius: 12px; background: #eaf6ff; }
.phone-face { position: absolute; z-index: 2; left: 32px; top: 30px; width: 42px; height: 50px; border-radius: 50%; background: #ffbd8c; }
.phone-face::before { content: ""; position: absolute; left: -3px; top: -11px; width: 48px; height: 28px; border-radius: 35px 35px 10px 10px; background: #061746; }
.phone-buttons { position: absolute; z-index: 2; left: 18px; right: 18px; bottom: 16px; display: flex; justify-content: space-between; }
.phone-buttons span { width: 18px; height: 18px; border-radius: 50%; background: #0b75e5; }
.phone-buttons span:nth-child(2) { background: #ef3349; }
.phone-buttons span:nth-child(3) { background: #1eb86e; }
.remote-dash { position: absolute; inset: 74px 18px; width: 200px; height: 300px; }

.cnscd-launch-cta {
  position: relative;
  z-index: 20;
  width: calc(100% - 78px);
  height: 98px;
  margin: 22px auto 31px;
  border-radius: 17px;
  display: grid;
  grid-template-columns: 96px 1fr 59px;
  align-items: center;
  padding: 0 44px 0 151px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 13px 24px rgba(0,76,180,.27);
  transition: transform .18s ease, filter .18s ease;
}
.cnscd-launch-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.cnscd-launch-cta svg:first-child { width: 58px; height: 58px; justify-self: center; }
.cnscd-launch-cta span {
  text-align: center;
  font-size: 41px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -.75px;
}
.cnscd-launch-cta svg:last-child { width: 44px; height: 44px; justify-self: end; }

@media (max-width: 820px) {
  .cnscd-launch-page { min-height: 1270px; }
  .cnscd-launch-hero { padding-left: 30px; padding-right: 30px; }
  .cnscd-launch-copy { margin-left: 120px; width: calc(100% - 120px); }
  .cnscd-launch-copy h1 { font-size: clamp(45px, 10vw, 65px); }
  .cnscd-launch-copy p { margin-left: -105px; width: min(100%, 560px); font-size: 23px; }
  .cnscd-launch-task-list { width: calc(100% - 56px); }
  .cnscd-launch-illustration { transform: scale(.92); transform-origin: top center; width: calc(109% - 56px); margin-left: -9px; }
  .cnscd-launch-cta { width: calc(100% - 56px); padding-left: 64px; }
}

@media (max-width: 520px) {
  .cnscd-launch-page { min-height: 1160px; }
  .cnscd-launch-hero { min-height: 310px; padding: 32px 20px 0; }
  .cnscd-launch-badge { width: 76px; height: 76px; left: 18px; top: 35px; }
  .cnscd-launch-badge svg { width: 38px; height: 38px; }
  .cnscd-launch-badge span { bottom: 10px; font-size: 13px; }
  .cnscd-launch-copy { margin-left: 88px; width: calc(100% - 88px); }
  .cnscd-launch-copy h1 { font-size: 36px; }
  .cnscd-launch-copy p { margin-left: -82px; width: calc(100vw - 40px); font-size: 17px; }
  .cnscd-launch-network { display: none; }
  .cnscd-launch-task-list { width: calc(100% - 34px); gap: 10px; }
  .cnscd-launch-task { min-height: 86px; grid-template-columns: 40px 58px 1fr 25px; gap: 9px; padding: 12px; }
  .cnscd-launch-number { width: 36px; height: 36px; font-size: 20px; }
  .cnscd-launch-icon { width: 54px; height: 54px; font-size: 36px; }
  .cnscd-launch-task h2 { font-size: 17px; }
  .cnscd-launch-arrow { font-size: 25px; }
  .cnscd-launch-illustration { height: 310px; transform: scale(.68); width: 145%; margin-left: -22%; }
  .cnscd-launch-cta { width: calc(100% - 36px); height: 74px; grid-template-columns: 42px 1fr 34px; padding: 0 22px; }
  .cnscd-launch-cta span { font-size: 24px; }
  .cnscd-launch-cta svg:first-child { width: 39px; height: 39px; }
}
`;
