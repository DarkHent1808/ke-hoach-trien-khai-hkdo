import React from "react";

const dayTasks = [
  {
    icon: <WelcomePersonIcon />,
    title: "Tiếp đón hộ tham gia",
  },
  {
    icon: <AttendanceIcon />,
    title: "Hỗ trợ điểm danh trực tiếp và trực tuyến",
  },
  {
    icon: <QrHandIcon />,
    title: "Phối hợp bàn giao QR",
  },
  {
    icon: <SupportGroupIcon />,
    title: "Ghi nhận nhóm hộ cần hỗ trợ thêm",
  },
  {
    icon: <PhoneIcon />,
    title: "Chốt đầu mối liên hệ sau phát động",
  },
];

export default function UBNDLaunchDayPage() {
  return (
    <section className="ubnd-day-page" aria-label="Trong ngày ra quân địa phương làm gì">
      <style>{css}</style>

      <div className="ubnd-day-inner">
        <section className="ubnd-day-hero">
          <div className="ubnd-day-copy">
            <div className="ubnd-day-pill">MÀN 3</div>
            <h1>Trong ngày ra quân, địa phương làm gì?</h1>
            <p>
              Địa phương cần điều phối buổi phát động gọn, rõ, có điểm đầu mối và có ghi nhận trạng thái hộ.
            </p>
          </div>

          <LaunchEventArt />
        </section>

        <section id="ubnd-ngay-ra-quan" className="ubnd-day-task-list" aria-label="Quy trình trong ngày ra quân">
          {dayTasks.map((task, index) => (
            <article className="ubnd-day-task-card" key={task.title}>
              <div className="ubnd-day-task-icon">{task.icon}</div>
              <div className="ubnd-day-task-number">{index + 1}</div>
              <h2>{task.title}</h2>
              <div className="ubnd-day-arrow"><ArrowRightIcon /></div>
            </article>
          ))}
        </section>

        <a href="#ubnd-quy-trinh-trong-ngay" className="ubnd-day-cta">
          <CalendarIcon />
          <span>Xem quy trình trong ngày</span>
          <ArrowRightIcon />
        </a>
      </div>

      <footer className="ubnd-day-footer">
        <div className="ubnd-day-logo"><HexLogoIcon /></div>
        <strong>HKDO</strong>
        <i />
        <p>ĐỒNG HÀNH CÙNG HỘ KINH DOANH<br />CHUYỂN ĐỔI SỐ - BỨT PHÁ PHÁT TRIỂN</p>
        <div className="ubnd-day-shield"><ShieldIcon /></div>
        <div className="ubnd-day-pager">3 / 6</div>
      </footer>
    </section>
  );
}

function LaunchEventArt() {
  return (
    <div className="ubnd-day-art" aria-hidden="true">
      <div className="ubnd-day-cloud cloud-a" />
      <div className="ubnd-day-cloud cloud-b" />
      <div className="ubnd-day-skyline skyline-left"><i /><i /><i /></div>
      <div className="ubnd-day-skyline skyline-right"><i /><i /><i /></div>
      <div className="ubnd-day-tree tree-left" />
      <div className="ubnd-day-tree tree-right" />
      <div className="ubnd-day-bush bush-left" />
      <div className="ubnd-day-bush bush-right" />

      <div className="ubnd-day-building">
        <div className="flag-pole" />
        <div className="flag-vn">★</div>
        <div className="roof" />
        <div className="sign">UBND XÃ/PHƯỜNG</div>
        <div className="body">
          <div className="columns"><i /><i /><i /><i /></div>
          <div className="windows">{Array.from({ length: 8 }).map((_, index) => <b key={index} />)}</div>
          <div className="door" />
        </div>
        <div className="steps" />
      </div>

      <div className="stage-board">
        <strong>LỄ PHÁT ĐỘNG</strong>
        <span>CHƯƠNG TRÌNH HKDO</span>
        <p>ĐỒNG HÀNH CÙNG HỘ KINH DOANH<br />CHUYỂN ĐỔI SỐ - BỨT PHÁ PHÁT TRIỂN</p>
      </div>

      <div className="presenter">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="arm-left" />
        <div className="arm-right" />
        <div className="microphone" />
      </div>

    
      <div className="audience group-two"><i /><i /><i /></div>

      <div className="qr-stand">
        <strong>HKDO</strong>
        <QrMini />
        <span>QUÉT QR<br />THAM GIA NGAY</span>
      </div>
    </div>
  );
}

function QrMini() {
  return (
    <svg viewBox="0 0 72 72" className="qr-mini" fill="none">
      <rect width="72" height="72" rx="5" fill="#fff" />
      {[
        [8, 8], [14, 8], [20, 8], [8, 14], [20, 14], [8, 20], [14, 20], [20, 20],
        [44, 8], [50, 8], [56, 8], [44, 14], [56, 14], [44, 20], [50, 20], [56, 20],
        [8, 44], [14, 44], [20, 44], [8, 50], [20, 50], [8, 56], [14, 56], [20, 56],
        [34, 34], [40, 34], [52, 34], [34, 40], [46, 40], [58, 40], [40, 46], [52, 46], [34, 52], [46, 52], [58, 52], [40, 58], [52, 58]
      ].map(([x, y], index) => <rect key={index} x={x} y={y} width="5" height="5" fill="#073f92" />)}
    </svg>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ArrowRightIcon() {
  return <Svg><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>;
}

function CalendarIcon() {
  return <Svg><rect x="4" y="5" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2.3" /><path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" /><circle cx="8" cy="14" r="1" fill="currentColor" /><circle cx="12" cy="14" r="1" fill="currentColor" /><circle cx="16" cy="14" r="1" fill="currentColor" /></Svg>;
}

function WelcomePersonIcon() {
  return (
    <Svg>
      <circle cx="11" cy="8" r="4" fill="#ffbd8c" />
      <path d="M5 22c.5-5 2.7-7.5 6-7.5s5.5 2.5 6 7.5H5Z" fill="#1678e8" />
      <path d="M7 7c.6-3.2 2.5-4.8 5.3-4.6 2.9.2 4.6 2 4.7 5.3-3.1-.8-5.8-1.8-10-.7Z" fill="#061746" />
      <path d="M18 6v7M15 8l3-3 3 3" stroke="#ffbd8c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function AttendanceIcon() {
  return (
    <Svg>
      <path d="M6 3h12v18H6V3Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M9 8h5M9 12h5M9 16h3" stroke="#36b56f" strokeWidth="2.2" strokeLinecap="round" />
      <path d="m5 8 1.2 1.2L8.3 7M5 12l1.2 1.2L8.3 11M5 16l1.2 1.2L8.3 15" stroke="#36b56f" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="16" r="4" fill="currentColor" />
      <path d="M13 23c.3-3.5 1.8-5.2 4-5.2s3.7 1.7 4 5.2" fill="currentColor" />
    </Svg>
  );
}

function QrHandIcon() {
  return (
    <Svg>
      <rect x="6" y="2" width="12" height="13" rx="1.8" fill="#fff" stroke="currentColor" strokeWidth="2" />
      <path d="M8 4h3v3H8V4Zm5 0h3v3h-3V4ZM8 9h3v3H8V9Zm5 1h2v2h-2v-2Zm3 2h2v2h-2v-2Z" fill="currentColor" />
      <path d="M2 16c2.4.5 4.2 1.2 5.6 2.4l2.4 2.1c1 .9 2.4 1.1 3.6.4L22 16" stroke="#ffbd8c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 20c2.4.7 5.3 2.4 8 2.4" stroke="#ffbd8c" strokeWidth="3" strokeLinecap="round" />
    </Svg>
  );
}

function SupportGroupIcon() {
  return (
    <Svg>
      <circle cx="12" cy="7" r="4" fill="currentColor" />
      <circle cx="5.5" cy="10" r="3" fill="currentColor" opacity=".82" />
      <circle cx="18.5" cy="10" r="3" fill="currentColor" opacity=".82" />
      <path d="M4 21c.4-4 3.2-6.2 8-6.2s7.6 2.2 8 6.2H4Z" fill="currentColor" />
      <circle cx="18" cy="18" r="5" fill="#ffb22a" />
      <path d="M18 15v4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" /><circle cx="18" cy="21" r="1" fill="#fff" />
    </Svg>
  );
}

function PhoneIcon() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M8.5 7.6c.3-.5 1-.7 1.5-.4l1.7 1.1c.5.3.7 1 .4 1.5l-.7 1.2c.7 1.2 1.6 2.1 2.8 2.8l1.2-.7c.5-.3 1.2-.1 1.5.4l1.1 1.7c.3.5.1 1.2-.4 1.5-1.1.7-2.2 1-3.2.6-3.7-1.1-6.1-3.5-7.2-7.2-.3-1 .1-2.1 1.3-3Z" fill="#fff" />
    </Svg>
  );
}

function HexLogoIcon() {
  return <Svg viewBox="0 0 64 64"><path d="M32 7 11 19v26l21 12 21-12V19L32 7Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" /><circle cx="32" cy="32" r="5" fill="#ffb22a" /></Svg>;
}

function ShieldIcon() {
  return <Svg><path d="M12 3 5 6v5.4c0 4.5 2.8 7.7 7 9.6 4.2-1.9 7-5.1 7-9.6V6l-7-3Z" fill="currentColor" /><path d="m8.2 12 2.2 2.2 5.2-5.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></Svg>;
}

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

.ubnd-day-page {
  position: relative;
  width: 100%;
  min-height: 1515px;
  overflow: hidden;
  background: linear-gradient(180deg, #066ede 0 116px, #eff8ff 116px, #f8fdff 88%, #0061d2 88% 100%);
}

.ubnd-day-inner {
  position: relative;
  z-index: 2;
  min-height: 1260px;
  border-radius: 28px;
  overflow: hidden;
  background:
    radial-gradient(circle at 74% 9%, rgba(255,255,255,.95) 0 15%, rgba(255,255,255,0) 39%),
    linear-gradient(180deg, #f9fdff 0%, #edf8ff 67%, #f8fcff 100%);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.72);
}

.ubnd-day-hero {
  position: relative;
  min-height: 516px;
  padding: 42px 52px 0;
}
.ubnd-day-copy {
  position: relative;
  z-index: 5;
  width: 525px;
}
.ubnd-day-pill {
  width: 145px;
  height: 54px;
  margin: 0 0 22px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #1679eb, #075bd2);
  box-shadow: 0 10px 21px rgba(7,91,210,.25);
  font-size: 30px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: .3px;
}
.ubnd-day-copy h1 {
  margin: 0 0 25px;
  color: #10175c;
  font-size: 59px;
  line-height: 1.08;
  font-weight: 950;
  letter-spacing: -2.5px;
}
.ubnd-day-copy p {
  width: 390px;
  margin: 0;
  color: #333333;
  font-size: 27px;
  line-height: 1.36;
  font-weight: 500;
}

.ubnd-day-art {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.ubnd-day-cloud,
.ubnd-day-cloud::before,
.ubnd-day-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.96);
}
.ubnd-day-cloud.cloud-a { right: 58px; top: 94px; width: 113px; height: 18px; }
.ubnd-day-cloud.cloud-a::before { width: 50px; height: 50px; left: 19px; top: -27px; }
.ubnd-day-cloud.cloud-a::after { width: 72px; height: 72px; left: 56px; top: -43px; }
.ubnd-day-cloud.cloud-b { right: 253px; top: 113px; width: 83px; height: 14px; opacity: .78; }
.ubnd-day-cloud.cloud-b::before { width: 33px; height: 33px; left: 15px; top: -16px; }
.ubnd-day-cloud.cloud-b::after { width: 43px; height: 43px; left: 39px; top: -24px; }
.ubnd-day-skyline { position: absolute; display: flex; align-items: flex-end; gap: 12px; opacity: .42; }
.ubnd-day-skyline.skyline-left { right: 295px; top: 184px; }
.ubnd-day-skyline.skyline-right { right: 22px; top: 130px; }
.ubnd-day-skyline i { display: block; width: 38px; height: 92px; border-radius: 11px 11px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.2), rgba(85,154,219,.06)); }
.ubnd-day-skyline i:nth-child(2) { height: 132px; }
.ubnd-day-skyline i:nth-child(3) { height: 82px; }
.ubnd-day-building {
  position: absolute;
  right: 14px;
  top: 165px;
  width: 338px;
  height: 244px;
  filter: drop-shadow(0 14px 18px rgba(28,104,196,.15));
}
.ubnd-day-building .flag-pole { position: absolute; right: 134px; top: -26px; width: 4px; height: 75px; border-radius: 999px; background: #1768d2; }
.ubnd-day-building .flag-vn { position: absolute; right: 73px; top: -16px; width: 62px; height: 41px; border-radius: 2px 12px 12px 2px; display: grid; place-items: center; color: #ffe33b; background: #ef3124; transform: skewY(5deg); }
.ubnd-day-building .roof { position: absolute; left: 45px; top: 35px; width: 250px; height: 71px; clip-path: polygon(50% 0, 100% 72%, 92% 100%, 8% 100%, 0 72%); background: linear-gradient(180deg, #dcebff, #8bc6ff 58%, #5ca2f2); }
.ubnd-day-building .sign { position: absolute; z-index: 4; left: 111px; top: 84px; width: 131px; height: 34px; border-radius: 4px; display: grid; place-items: center; color: #fff; background: #116ed6; font-size: 14px; font-weight: 950; }
.ubnd-day-building .body { position: absolute; left: 27px; top: 107px; width: 286px; height: 110px; border-radius: 8px 8px 2px 2px; border-top: 8px solid #2379d7; background: linear-gradient(180deg, #d6ebff, #74b8fb); }
.ubnd-day-building .columns { position: absolute; left: 76px; right: 76px; top: -3px; display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
.ubnd-day-building .columns i { height: 111px; border-radius: 4px 4px 0 0; background: linear-gradient(90deg, #f2f9ff, #8cc5fb, #e8f5ff); }
.ubnd-day-building .windows { position: absolute; inset: 23px 16px 18px; display: grid; grid-template-columns: repeat(4,1fr); gap: 11px 43px; }
.ubnd-day-building .windows b { height: 27px; border-radius: 3px; background: linear-gradient(180deg, #65b8ff, #126ed3); }
.ubnd-day-building .door { position: absolute; left: 126px; bottom: 0; width: 35px; height: 53px; border-radius: 5px 5px 0 0; background: #064ea6; }
.ubnd-day-building .steps { position: absolute; left: 59px; right: 59px; bottom: 2px; height: 19px; border-radius: 4px; background: linear-gradient(180deg, #c7e4ff, #8cc8ff); }
.ubnd-day-tree { position: absolute; width: 56px; height: 98px; border-radius: 42px 42px 13px 13px; background: linear-gradient(180deg, #76d28a, #3ba96a); z-index: 2; }
.ubnd-day-tree::before { content: ""; position: absolute; left: 27px; top: 40px; width: 4px; height: 55px; border-radius: 999px; background: #267556; }
.ubnd-day-tree.tree-left { right: 346px; top: 333px; }
.ubnd-day-tree.tree-right { right: 0; top: 312px; }
.ubnd-day-bush { position: absolute; width: 95px; height: 37px; border-radius: 80px 80px 0 0; background: linear-gradient(180deg, #71ce84, #39a86a); z-index: 2; }
.ubnd-day-bush.bush-left { right: 314px; top: 416px; }
.ubnd-day-bush.bush-right { right: -4px; top: 407px; }
.stage-board {
  position: absolute;
  z-index: 4;
  right: 116px;
  top: 257px;
  width: 287px;
  height: 145px;
  padding: 17px 18px;
  text-align: center;
  color: #fff;
  background: linear-gradient(180deg, #1477df, #0756bf);
  border-radius: 4px;
  box-shadow: 0 13px 24px rgba(16, 91, 196, .24);
}
.stage-board strong { display: block; font-size: 24px; line-height: 1.05; font-weight: 950; }
.stage-board span { display: block; margin-top: 8px; font-size: 17px; line-height: 1; font-weight: 900; }
.stage-board p { margin: 14px 0 0; font-size: 11px; line-height: 1.25; font-weight: 860; }
.presenter { position: absolute; z-index: 6; left: 460px; top: 305px; width: 112px; height: 190px; }
.presenter .hair { position: absolute; left: 39px; top: 0; width: 53px; height: 42px; border-radius: 35px 35px 14px 14px; background: #061746; }
.presenter .face { position: absolute; left: 50px; top: 35px; width: 38px; height: 48px; border-radius: 45%; background: #ffbd8c; }
.presenter .body { position: absolute; left: 27px; top: 87px; width: 71px; height: 98px; border-radius: 31px 31px 0 0; background: linear-gradient(180deg, #1781ec, #0755ba); }
.presenter .arm-left { position: absolute; left: 10px; top: 94px; width: 68px; height: 17px; border-radius: 999px; background: #0f71d5; transform: rotate(55deg); }
.presenter .arm-right { position: absolute; right: -32px; top: 92px; width: 87px; height: 19px; border-radius: 999px; background: #0f71d5; transform: rotate(-29deg); }
.presenter .arm-right::after { content: ""; position: absolute; right: -10px; top: -3px; width: 22px; height: 22px; border-radius: 50%; background: #ffbd8c; }
.presenter .microphone { position: absolute; left: 15px; top: 60px; width: 8px; height: 36px; background: #112f62; border-radius: 999px; transform: rotate(-18deg); }
.presenter .microphone::before { content: ""; position: absolute; left: -7px; top: -10px; width: 21px; height: 21px; border-radius: 50%; background: #0e2448; }
.audience { position: absolute; z-index: 6; display: flex; align-items: flex-end; gap: 16px; }
.audience.group-one { left: 372px; top: 430px; }
.audience.group-two { right: 126px; top: 432px; }
.audience i { display: block; width: 47px; height: 88px; border-radius: 30px 30px 0 0; background: linear-gradient(180deg, #1b72c8, #083a73); position: relative; }
.audience i::before { content: ""; position: absolute; left: 7px; top: -28px; width: 34px; height: 39px; border-radius: 50%; background: #ffbd8c; }
.audience i:nth-child(2) { height: 95px; background: linear-gradient(180deg, #f5f0e5, #e2d5bd); }
.audience i:nth-child(3) { height: 86px; background: linear-gradient(180deg, #5dbf7e, #308e54); }
.qr-stand { position: absolute; z-index: 5; right: 29px; top: 339px; width: 91px; height: 188px; border-radius: 5px; padding: 18px 12px 8px; text-align: center; color: #fff; background: linear-gradient(180deg, #1476df, #064fb1); box-shadow: 0 12px 20px rgba(18, 95, 193, .23); }
.qr-stand strong { font-size: 22px; line-height: 1; font-weight: 950; }
.qr-mini { width: 61px; height: 61px; margin: 10px auto 7px; }
.qr-stand span { font-size: 10px; line-height: 1.15; font-weight: 900; }

.ubnd-day-task-list {
  position: relative;
  z-index: 8;
  padding: 0 51px;
  display: grid;
  gap: 12px;
}
.ubnd-day-task-card {
  min-height: 124px;
  padding: 12px 31px;
  border-radius: 18px;
  display: grid;
  grid-template-columns: 125px 62px 1fr 45px;
  align-items: center;
  gap: 19px;
  background: rgba(255,255,255,.97);
  box-shadow: 0 14px 29px rgba(31,101,178,.13);
}
.ubnd-day-task-icon {
  width: 101px;
  height: 101px;
  border-radius: 21px;
  display: grid;
  place-items: center;
  color: #126fe5;
  background: #e8f5ff;
  font-size: 75px;
}
.ubnd-day-task-number {
  width: 51px;
  height: 51px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #1578e8, #075bd2);
  font-size: 31px;
  line-height: 1;
  font-weight: 950;
}
.ubnd-day-task-card h2 {
  margin: 0;
  color: #10205c;
  font-size: 31px;
  line-height: 1.2;
  font-weight: 920;
  letter-spacing: -.45px;
}
.ubnd-day-arrow {
  color: #075fd5;
  font-size: 40px;
  justify-self: end;
}
.ubnd-day-cta {
  width: calc(100% - 102px);
  height: 92px;
  margin: 24px auto 31px;
  border-radius: 18px;
  display: grid;
  grid-template-columns: 75px 1fr 52px;
  align-items: center;
  padding: 0 35px 0 142px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 13px 23px rgba(0,76,180,.26);
  transition: transform .18s ease, filter .18s ease;
}
.ubnd-day-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.ubnd-day-cta svg:first-child { width: 51px; height: 51px; justify-self: center; }
.ubnd-day-cta span { text-align: center; font-size: 34px; line-height: 1; font-weight: 920; letter-spacing: -.6px; }
.ubnd-day-cta svg:last-child { width: 43px; height: 43px; justify-self: end; }

.ubnd-day-footer {
  position: relative;
  min-height: 204px;
  padding: 30px 80px 42px;
  display: grid;
  grid-template-columns: 83px 190px 1px 1fr 110px;
  align-items: center;
  gap: 22px;
  color: #fff;
  background:
    radial-gradient(circle at 85% 0, rgba(79,178,255,.35), transparent 36%),
    linear-gradient(180deg, #006ce0, #004fb8);
  overflow: hidden;
}
.ubnd-day-footer::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: .23;
  background-image:
    radial-gradient(circle at 20px 20px, #4cc3ff 3px, transparent 4px),
    linear-gradient(90deg, transparent 0 20%, rgba(76,195,255,.45) 20% 20.5%, transparent 20.5% 100%);
  background-size: 65px 55px, 140px 100%;
}
.ubnd-day-logo { position: relative; z-index: 2; font-size: 76px; }
.ubnd-day-footer strong { position: relative; z-index: 2; font-size: 54px; line-height: 1; font-weight: 950; letter-spacing: -1px; }
.ubnd-day-footer i { position: relative; z-index: 2; width: 1px; height: 65px; background: rgba(255,255,255,.5); }
.ubnd-day-footer p { position: relative; z-index: 2; margin: 0; font-size: 17px; line-height: 1.35; font-weight: 800; }
.ubnd-day-shield { position: relative; z-index: 2; justify-self: end; width: 80px; height: 80px; display: grid; place-items: center; color: #fff; font-size: 72px; opacity: .95; }
.ubnd-day-pager { position: absolute; left: 50%; bottom: 14px; transform: translateX(-50%); width: 118px; height: 33px; border-radius: 999px; display: grid; place-items: center; color: #fff; background: rgba(0,68,157,.55); border: 1px solid rgba(255,255,255,.28); font-size: 20px; font-weight: 800; }


@media (max-width: 820px) {
  .ubnd-day-page { min-height: 1340px; }
  .ubnd-day-inner { min-height: 1135px; }
  .ubnd-day-hero { min-height: 600px; padding: 36px 28px 0; }
  .ubnd-day-copy { width: 100%; }
  .ubnd-day-copy h1 { font-size: clamp(43px, 10vw, 59px); }
  .ubnd-day-copy p { width: min(100%, 390px); font-size: 22px; }
  .ubnd-day-art { transform: scale(.82); transform-origin: center top; width: 116%; left: -8%; top: 100px; }
  .ubnd-day-task-list { padding: 0 28px; }
  .ubnd-day-task-card { grid-template-columns: 88px 48px 1fr 35px; gap: 14px; }
  .ubnd-day-task-icon { width: 78px; height: 78px; font-size: 55px; }
  .ubnd-day-task-number { width: 44px; height: 44px; font-size: 25px; }
  .ubnd-day-task-card h2 { font-size: 24px; }
  .ubnd-day-cta { width: calc(100% - 56px); padding-left: 42px; }
  .ubnd-day-footer { grid-template-columns: 75px 155px 1px 1fr 82px; padding-left: 35px; padding-right: 35px; }
}

@media (max-width: 520px) {
  .ubnd-day-page { min-height: 1180px; }
  .ubnd-day-inner { min-height: 1010px; }
  .ubnd-day-hero { min-height: 510px; padding: 30px 18px 0; }
  .ubnd-day-pill { width: 126px; height: 48px; font-size: 24px; }
  .ubnd-day-copy h1 { font-size: 38px; }
  .ubnd-day-copy p { font-size: 18px; }
  .ubnd-day-art { transform: scale(.62); width: 150%; left: -25%; top: 130px; }
  .ubnd-day-task-list { padding: 0 18px; gap: 10px; }
  .ubnd-day-task-card { min-height: 94px; grid-template-columns: 58px 36px 1fr 28px; gap: 10px; padding: 12px 14px; }
  .ubnd-day-task-icon { width: 56px; height: 56px; border-radius: 14px; font-size: 38px; }
  .ubnd-day-task-number { width: 34px; height: 34px; font-size: 20px; }
  .ubnd-day-task-card h2 { font-size: 17px; }
  .ubnd-day-arrow { font-size: 27px; }
  .ubnd-day-cta { height: 72px; grid-template-columns: 42px 1fr 34px; padding: 0 24px; margin-bottom: 24px; }
  .ubnd-day-cta span { font-size: 22px; }
  .ubnd-day-footer { min-height: 155px; grid-template-columns: 60px 1fr; gap: 14px; padding: 24px 24px 42px; }
  .ubnd-day-logo { font-size: 58px; }
  .ubnd-day-footer strong { font-size: 38px; }
  .ubnd-day-footer i, .ubnd-day-shield { display: none; }
  .ubnd-day-footer p { grid-column: 1 / -1; font-size: 13px; text-align: center; }
}
`;
