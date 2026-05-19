import React from "react";

const capabilityPills = [
  { icon: <ShieldCheckIcon />, label: "Sẵn sàng" },
  { icon: <QrIcon />, label: "QR" },
  { icon: <ChartBarsIcon />, label: "Dữ liệu" },
];

const deploySteps = [
  {
    icon: <TrainingBoardIcon />,
    number: "01",
    title: "Trình diễn thao tác mẫu",
    desc: "Hướng dẫn quy trình thao tác chuẩn, dễ hiểu, dễ làm.",
  },
  {
    icon: <QrHandoverIcon />,
    number: "02",
    title: "Bàn giao QR",
    desc: "Đảm bảo QR được bàn giao đúng người, đúng chuẩn.",
  },
  {
    icon: <HeadsetIcon />,
    number: "03",
    title: "Hỗ trợ các ca trực tiếp và trực tuyến",
    desc: "Giải đáp, xử lý kịp thời mọi vướng mắc trong ngày triển khai.",
  },
  {
    icon: <ClipboardChartIcon />,
    number: "04",
    title: "Ghi nhận dữ liệu mở cửa hàng, tạo sản phẩm, ra đơn",
    desc: "Theo dõi và cập nhật dữ liệu chính xác, liên tục.",
  },
  {
    icon: <MegaphoneIcon />,
    number: "05",
    title: "Gửi thông tin các kênh hỗ trợ",
    desc: "Chia sẻ nhanh các kênh hỗ trợ để hộ kinh doanh dễ dàng liên hệ.",
  },
];

export default function EffectDeployDayPage() {
  return (
    <section id="effect-kiem-tra-readiness" className="effect3-page" aria-label="EFFECT làm gì trong ngày triển khai">
      <style>{css}</style>

      <section className="effect3-heading">
        <div className="effect3-pill">MÀN 3</div>
        <h1>EFFECT làm gì trong ngày triển khai?</h1>
        <p>Trong ngày ra quân, EFFECT cần vừa hỗ trợ thao tác mẫu, vừa bảo đảm công cụ, dữ liệu và QR được bàn giao đúng.</p>
      </section>

      <section className="effect3-capability-row" aria-label="Trọng tâm trong ngày triển khai">
        {capabilityPills.map((pill) => (
          <div className="effect3-capability-pill" key={pill.label}>
            {pill.icon}
            <span>{pill.label}</span>
          </div>
        ))}
      </section>

      <HeroIllustration />

      <section className="effect3-step-list" aria-label="Các việc EFFECT làm trong ngày triển khai">
        {deploySteps.map((step, index) => (
          <article className="effect3-step-card" key={step.title}>
            <div className="effect3-step-visual">{step.icon}</div>
            <div className="effect3-step-index">
              <span>{step.number}</span>
              {index < deploySteps.length - 1 && <i />}
            </div>
            <div className="effect3-step-content">
              <h2>{step.title}</h2>
              <p>{step.desc}</p>
            </div>
          </article>
        ))}
      </section>

      <a href="#effect-trung-tam-dieu-phoi" className="effect3-cta">
        <RocketIcon />
        <span>Xem trung tâm điều phối</span>
      </a>
    </section>
  );
}

function HeroIllustration() {
  return (
    <section className="effect3-hero" aria-label="Minh họa ngày triển khai EFFECT">
      <div className="effect3-city city-left"><i /><i /><i /></div>
      <div className="effect3-city city-right"><i /><i /><i /></div>
      <div className="effect3-cloud cloud-a" />
      <div className="effect3-cloud cloud-b" />
      <div className="effect3-shop-bg left" />
      <div className="effect3-shop-bg right" />
      <div className="effect3-plant left" />
      <div className="effect3-plant right" />

      <div className="effect3-presentation-screen">
        <div className="screen-title">TRIỂN KHAI NGÀY RA QUÂN</div>
        <ul>
          <li><CheckDotIcon />Thao tác mẫu</li>
          <li><CheckDotIcon />Bàn giao QR</li>
          <li><CheckDotIcon />Hỗ trợ trực tiếp & trực tuyến</li>
          <li><CheckDotIcon />Ghi nhận dữ liệu</li>
          <li><CheckDotIcon />Gửi thông tin hỗ trợ</li>
        </ul>
      </div>

      <div className="effect3-person trainer">
        <div className="hair" />
        <div className="face" />
        <div className="shirt" />
        <div className="back-text">EFFECT</div>
        <div className="arm-left" />
        <div className="arm-right" />
      </div>

      <div className="effect3-attendee attendee-a"><div className="hair" /><div className="head" /><div className="body" /></div>
      <div className="effect3-attendee attendee-b"><div className="hair" /><div className="head" /><div className="body" /></div>

      <div className="effect3-person supporter">
        <div className="hair" />
        <div className="face" />
        <div className="shirt" />
        <div className="badge" />
        <div className="arm-left" />
        <div className="arm-right" />
        <div className="qr-sheet"><QrGraphic /></div>
      </div>

      <div className="effect3-owner">
        <div className="hair" />
        <div className="face" />
        <div className="shirt" />
        <div className="apron" />
        <div className="arm-left" />
        <div className="arm-right" />
      </div>

      <div className="effect3-support-box">
        <div className="agent">
          <div className="agent-hair" />
          <div className="agent-face" />
          <div className="agent-shirt" />
          <HeadsetIcon />
        </div>
        <WifiIcon />
      </div>

      <div className="effect3-dashboard-tablet">
        <strong>DASHBOARD ĐIỀU PHỐI</strong>
        <div className="tablet-grid">
          <div><small>Điểm triển khai</small><b>128</b></div>
          <div><small>Hộ kinh doanh</small><b>12.458</b></div>
        </div>
        <div className="tablet-bottom">
          <p><span>Tiến độ bàn giao QR</span><b>98%</b></p>
          <MiniLineChart />
        </div>
      </div>
    </section>
  );
}

function QrGraphic() {
  return (
    <svg className="effect3-qr-graphic" viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="5" fill="#fff" />
      {[
        [10,10],[18,10],[26,10],[10,18],[26,18],[10,26],[18,26],[26,26],
        [64,10],[72,10],[80,10],[64,18],[80,18],[64,26],[72,26],[80,26],
        [10,64],[18,64],[26,64],[10,72],[26,72],[10,80],[18,80],[26,80],
        [42,42],[50,42],[66,42],[42,50],[58,50],[74,50],[50,58],[66,58],
        [42,66],[58,66],[82,66],[50,74],[66,74],[74,82],[42,82],[58,82],
      ].map(([x, y], index) => <rect key={index} x={x} y={y} width="7" height="7" fill="#0b1b3d" />)}
    </svg>
  );
}

function MiniLineChart() {
  return (
    <svg className="effect3-mini-line" viewBox="0 0 120 62" fill="none">
      <path d="M8 46 25 36 42 41 61 25 80 30 103 12" stroke="#126ee8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 46 25 36 42 41 61 25 80 30 103 12V62H8V46Z" fill="url(#effect3LineFill)" />
      <defs>
        <linearGradient id="effect3LineFill" x1="55" y1="12" x2="55" y2="62">
          <stop stopColor="#126ee8" stopOpacity=".22" />
          <stop offset="1" stopColor="#126ee8" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ShieldCheckIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="m8.5 12 2.2 2.2 4.8-5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function QrIcon() { return <Svg><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function ChartBarsIcon() { return <Svg><path d="M5 19V10M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round"/><path d="M3 21h18" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function CheckDotIcon() { return <Svg><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="m8 12 2.3 2.3L16 8.7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function RocketIcon() { return <Svg><path d="M13 4c3.2 1 5.4 3.2 6.4 6.4l-5.6 5.6-4.4-4.4L13 4Z" fill="currentColor"/><path d="M8.8 12.2 5 13l-2 4 4-.8M11.8 15.2 11 19l-4 2 .8-4" fill="currentColor" opacity=".85"/><circle cx="15" cy="9" r="1.8" fill="#fff"/></Svg>; }
function TrainingBoardIcon() { return <Svg><path d="M4 5h16v10H4V5Z" stroke="currentColor" strokeWidth="2.3"/><path d="M7 9h10M7 12h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><circle cx="8" cy="20" r="3" fill="currentColor"/><path d="M2 23c.8-3 2.8-4.5 6-4.5s5.2 1.5 6 4.5" fill="currentColor" opacity=".8"/></Svg>; }
function QrHandoverIcon() { return <Svg><path d="M4 15c3 0 5 1.4 7 3l2-5c-2.8-1.5-5.8-2.3-9-2.4" fill="currentColor" opacity=".35"/><path d="M12 4h8v12h-8V4Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 6h2v2h-2V6Zm3 0h1v2h-1V6Zm-3 4h2v2h-2v-2Zm3 3h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function HeadsetIcon() { return <Svg><path d="M5 13v-1a7 7 0 0 1 14 0v1" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><rect x="3" y="12" width="5" height="7" rx="2" fill="currentColor"/><rect x="16" y="12" width="5" height="7" rx="2" fill="currentColor"/><path d="M18 19c-.7 2-2.5 3-5.2 3H11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></Svg>; }
function ClipboardChartIcon() { return <Svg><path d="M7 4h10v17H7V4Z" stroke="currentColor" strokeWidth="2.2"/><path d="M10 3h4a2 2 0 0 1 2 2H8a2 2 0 0 1 2-2Z" fill="currentColor"/><path d="M10 17v-4M14 17V9M18 17v-6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function MegaphoneIcon() { return <Svg><path d="M4 13h3l10 5V6L7 11H4v2Z" fill="currentColor"/><path d="M7 13v5a2 2 0 0 0 4 0v-3" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/><path d="M20 9v6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function WifiIcon() { return <Svg><path d="M5 10a10 10 0 0 1 14 0M8 13a6 6 0 0 1 8 0M11 16a2 2 0 0 1 2 0" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></Svg>; }

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

.effect3-page {
  position: relative;
  width: 100%;
  min-height: 1518px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 2%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 55%, #fbfdff 100%);
}
.effect3-heading {
  position: relative;
  z-index: 8;
  width: 840px;
  margin: 0 auto;
  padding-top: 36px;
  text-align: center;
}
.effect3-pill {
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
.effect3-heading h1 {
  width: 780px;
  margin: 0 auto 22px;
  color: #075bd2;
  font-size: 66px;
  line-height: 1.07;
  font-weight: 950;
  letter-spacing: -3.2px;
}
.effect3-heading p {
  width: 745px;
  margin: 0 auto;
  color: #1d2742;
  font-size: 23px;
  line-height: 1.38;
  font-weight: 500;
}
.effect3-capability-row {
  position: relative;
  z-index: 12;
  width: 650px;
  margin: 31px auto 24px;
  display: grid;
  grid-template-columns: 1.2fr .85fr 1.05fr;
  gap: 25px;
}
.effect3-capability-pill {
  height: 82px;
  border-radius: 999px;
  border: 2px solid #20b9b2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: #10a9a4;
  background: rgba(255,255,255,.96);
  box-shadow: 0 10px 23px rgba(31,101,178,.09);
  font-size: 26px;
  line-height: 1;
  font-weight: 900;
}
.effect3-capability-pill:nth-child(2) {
  color: #075bd2;
  border-color: #6baaff;
}
.effect3-capability-pill svg {
  width: 40px;
  height: 40px;
}
.effect3-hero {
  position: relative;
  z-index: 5;
  width: calc(100% - 60px);
  height: 459px;
  margin: 0 auto 23px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(180deg, #e9f6ff, #d9efff 62%, #cce8fb);
  box-shadow: 0 14px 29px rgba(31,101,178,.1);
}
.effect3-city {
  position: absolute;
  display: flex;
  align-items: flex-end;
  gap: 11px;
  opacity: .35;
}
.effect3-city.city-left { left: 28px; top: 38px; }
.effect3-city.city-right { right: 22px; top: 34px; }
.effect3-city i {
  width: 42px;
  height: 102px;
  border-radius: 9px 9px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.34), rgba(85,154,219,.1));
}
.effect3-city i:nth-child(2) { height: 145px; }
.effect3-city i:nth-child(3) { height: 118px; }
.effect3-cloud,
.effect3-cloud::before,
.effect3-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.9);
}
.effect3-cloud.cloud-a { right: 112px; top: 67px; width: 98px; height: 19px; }
.effect3-cloud.cloud-a::before { width: 41px; height: 41px; left: 18px; top: -22px; }
.effect3-cloud.cloud-a::after { width: 58px; height: 58px; left: 51px; top: -34px; }
.effect3-cloud.cloud-b { left: 36px; top: 190px; width: 78px; height: 15px; opacity: .75; }
.effect3-cloud.cloud-b::before { width: 32px; height: 32px; left: 13px; top: -16px; }
.effect3-cloud.cloud-b::after { width: 47px; height: 47px; left: 36px; top: -27px; }
.effect3-shop-bg {
  position: absolute;
  z-index: 1;
  top: 105px;
  width: 157px;
  height: 219px;
  border-radius: 12px 12px 0 0;
  background: rgba(255,255,255,.35);
  border: 1px solid rgba(255,255,255,.55);
}
.effect3-shop-bg.left { left: 20px; }
.effect3-shop-bg.right { right: 8px; }
.effect3-shop-bg::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 42px;
  border-radius: 12px 12px 20px 20px;
  background: repeating-linear-gradient(90deg, rgba(9,92,201,.22) 0 30px, rgba(255,255,255,.34) 30px 60px);
}
.effect3-plant {
  position: absolute;
  z-index: 4;
  bottom: 0;
  width: 58px;
  height: 116px;
}
.effect3-plant.left { left: 20px; }
.effect3-plant.right { right: 13px; }
.effect3-plant::before,
.effect3-plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 34px;
  height: 94px;
  border-radius: 35px 35px 0 0;
  background: linear-gradient(180deg, #93d894, #42aa72);
}
.effect3-plant::before { left: 0; transform: rotate(-26deg); }
.effect3-plant::after { right: 0; transform: rotate(24deg); }
.effect3-presentation-screen {
  position: absolute;
  z-index: 6;
  left: 147px;
  top: 45px;
  width: 335px;
  height: 204px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  border: 6px solid #0a306e;
  box-shadow: 0 12px 22px rgba(0,43,100,.2);
}
.effect3-presentation-screen .screen-title {
  height: 44px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #075bd2;
  font-size: 19px;
  font-weight: 950;
}
.effect3-presentation-screen ul {
  list-style: none;
  margin: 16px 25px;
  padding: 0;
  display: grid;
  gap: 9px;
}
.effect3-presentation-screen li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #164fc7;
  font-size: 14px;
  font-weight: 850;
}
.effect3-presentation-screen li svg {
  width: 20px;
  height: 20px;
  color: #0fb19e;
}
.effect3-person,
.effect3-attendee,
.effect3-owner {
  position: absolute;
  z-index: 8;
}
.effect3-person .hair,
.effect3-owner .hair,
.effect3-attendee .hair {
  position: absolute;
  background: #141a23;
}
.effect3-person.trainer {
  left: 44px;
  bottom: 0;
  width: 182px;
  height: 306px;
}
.effect3-person.trainer .hair {
  left: 44px;
  top: 0;
  width: 80px;
  height: 66px;
  border-radius: 47px 47px 22px 22px;
}
.effect3-person.trainer .face {
  position: absolute;
  left: 65px;
  top: 51px;
  width: 58px;
  height: 74px;
  border-radius: 47%;
  background: #ffbd8c;
}
.effect3-person.trainer .shirt {
  position: absolute;
  left: 18px;
  top: 130px;
  width: 129px;
  height: 176px;
  border-radius: 54px 54px 0 0;
  background: #063f9c;
}
.effect3-person.trainer .back-text {
  position: absolute;
  left: 53px;
  top: 207px;
  color: #fff;
  font-size: 13px;
  font-weight: 950;
}
.effect3-person.trainer .arm-left {
  position: absolute;
  left: 114px;
  top: 158px;
  width: 120px;
  height: 24px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(-26deg);
}
.effect3-person.trainer .arm-right {
  position: absolute;
  left: 117px;
  top: 205px;
  width: 85px;
  height: 23px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(24deg);
}
.effect3-attendee {
  bottom: 0;
  width: 130px;
  height: 192px;
}
.effect3-attendee.attendee-a { left: 127px; }
.effect3-attendee.attendee-b { left: 231px; }
.effect3-attendee .hair {
  left: 30px;
  top: 0;
  width: 70px;
  height: 58px;
  border-radius: 45px 45px 18px 18px;
}
.effect3-attendee .head {
  position: absolute;
  left: 42px;
  top: 45px;
  width: 48px;
  height: 58px;
  border-radius: 47%;
  background: #ffbd8c;
}
.effect3-attendee .body {
  position: absolute;
  left: 6px;
  top: 102px;
  width: 117px;
  height: 91px;
  border-radius: 55px 55px 0 0;
  background: #147a85;
}
.effect3-attendee.attendee-b .hair {
  width: 75px;
  height: 66px;
  border-radius: 45px 45px 14px 14px;
}
.effect3-attendee.attendee-b .body { background: #0e7280; }
.effect3-person.supporter {
  right: 260px;
  bottom: 0;
  width: 161px;
  height: 289px;
}
.effect3-person.supporter .hair {
  left: 47px;
  top: 0;
  width: 72px;
  height: 58px;
  border-radius: 45px 45px 18px 18px;
}
.effect3-person.supporter .face {
  position: absolute;
  left: 63px;
  top: 48px;
  width: 51px;
  height: 64px;
  border-radius: 47%;
  background: #ffbd8c;
}
.effect3-person.supporter .shirt {
  position: absolute;
  left: 22px;
  top: 118px;
  width: 120px;
  height: 171px;
  border-radius: 51px 51px 0 0;
  background: #063f9c;
}
.effect3-person.supporter .badge {
  position: absolute;
  left: 73px;
  top: 154px;
  width: 26px;
  height: 35px;
  border-radius: 5px;
  background: #fff;
}
.effect3-person.supporter .arm-left {
  position: absolute;
  left: 13px;
  top: 170px;
  width: 100px;
  height: 23px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(16deg);
}
.effect3-person.supporter .arm-right {
  position: absolute;
  right: -50px;
  top: 151px;
  width: 118px;
  height: 23px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(14deg);
}
.effect3-person.supporter .qr-sheet {
  position: absolute;
  right: -70px;
  top: 137px;
  width: 70px;
  height: 93px;
  padding: 9px;
  border-radius: 8px;
  background: #fff;
  border: 2px solid #bbd8f5;
  transform: rotate(7deg);
  box-shadow: 0 8px 15px rgba(0,70,150,.14);
}
.effect3-person.supporter .qr-sheet .effect3-qr-graphic {
  width: 50px;
  height: 50px;
}
.effect3-owner {
  right: 68px;
  bottom: 0;
  width: 177px;
  height: 250px;
}
.effect3-owner .hair {
  left: 61px;
  top: 0;
  width: 68px;
  height: 56px;
  border-radius: 44px 44px 17px 17px;
}
.effect3-owner .face {
  position: absolute;
  left: 75px;
  top: 45px;
  width: 50px;
  height: 64px;
  border-radius: 47%;
  background: #ffbd8c;
}
.effect3-owner .shirt {
  position: absolute;
  left: 34px;
  top: 116px;
  width: 118px;
  height: 134px;
  border-radius: 50px 50px 0 0;
  background: #fff;
}
.effect3-owner .apron {
  position: absolute;
  left: 56px;
  top: 128px;
  width: 78px;
  height: 122px;
  border-radius: 34px 34px 0 0;
  background: #1e8a77;
}
.effect3-owner .arm-left,
.effect3-owner .arm-right {
  position: absolute;
  width: 80px;
  height: 20px;
  border-radius: 999px;
  background: #ffbd8c;
}
.effect3-owner .arm-left { left: -5px; top: 145px; transform: rotate(-17deg); }
.effect3-owner .arm-right { right: 12px; top: 140px; transform: rotate(33deg); }
.effect3-support-box {
  position: absolute;
  z-index: 9;
  right: 28px;
  top: 25px;
  width: 176px;
  height: 150px;
  border-radius: 14px;
  background: rgba(255,255,255,.88);
  border: 2px solid #2f8ff0;
  box-shadow: 0 13px 24px rgba(29,101,200,.13);
}
.effect3-support-box > svg {
  position: absolute;
  right: 15px;
  top: 12px;
  color: #0fb19e;
  width: 31px;
  height: 31px;
}
.effect3-support-box .agent {
  position: absolute;
  left: 34px;
  top: 18px;
  width: 90px;
  height: 128px;
}
.effect3-support-box .agent-hair {
  position: absolute;
  left: 23px;
  top: 0;
  width: 49px;
  height: 39px;
  border-radius: 30px 30px 14px 14px;
  background: #141a23;
}
.effect3-support-box .agent-face {
  position: absolute;
  left: 33px;
  top: 31px;
  width: 36px;
  height: 44px;
  border-radius: 47%;
  background: #ffbd8c;
}
.effect3-support-box .agent-shirt {
  position: absolute;
  left: 10px;
  top: 79px;
  width: 75px;
  height: 49px;
  border-radius: 35px 35px 0 0;
  background: #063f9c;
}
.effect3-support-box .agent svg {
  position: absolute;
  left: 22px;
  top: 16px;
  width: 58px;
  height: 58px;
  color: #075bd2;
}
.effect3-dashboard-tablet {
  position: absolute;
  z-index: 15;
  left: 355px;
  bottom: 22px;
  width: 229px;
  height: 160px;
  padding: 11px;
  border-radius: 9px;
  background: #fff;
  border: 5px solid #192d5d;
  box-shadow: 0 12px 20px rgba(0,43,100,.18);
  transform: rotate(4deg);
}
.effect3-dashboard-tablet strong {
  display: block;
  color: #1d49b5;
  font-size: 11px;
  line-height: 1;
  font-weight: 950;
  margin-bottom: 8px;
}
.effect3-dashboard-tablet .tablet-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
}
.effect3-dashboard-tablet .tablet-grid div {
  padding: 7px;
  border-radius: 7px;
  background: #eef6ff;
}
.effect3-dashboard-tablet small {
  display: block;
  color: #526885;
  font-size: 8px;
  font-weight: 800;
}
.effect3-dashboard-tablet b {
  display: block;
  color: #075bd2;
  font-size: 18px;
  line-height: 1.1;
  font-weight: 950;
}
.effect3-dashboard-tablet .tablet-bottom {
  margin-top: 6px;
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 7px;
}
.effect3-dashboard-tablet p {
  margin: 0;
}
.effect3-dashboard-tablet p span {
  display: block;
  color: #5b6d83;
  font-size: 8px;
  font-weight: 800;
}
.effect3-dashboard-tablet p b {
  color: #0fb19e;
  font-size: 18px;
}
.effect3-dashboard-tablet .effect3-mini-line {
  width: 85px;
  height: 44px;
}
.effect3-step-list {
  position: relative;
  z-index: 12;
  width: calc(100% - 60px);
  margin: 0 auto 22px;
  display: grid;
  gap: 11px;
}
.effect3-step-card {
  min-height: 96px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 154px 70px 1fr;
  align-items: center;
  background: rgba(255,255,255,.97);
  border: 1px solid #e0ebf7;
  box-shadow: 0 10px 22px rgba(31,101,178,.08);
  overflow: hidden;
}
.effect3-step-visual {
  width: 154px;
  height: 100%;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #eef7ff;
  font-size: 76px;
}
.effect3-step-visual svg {
  width: 74px;
  height: 74px;
}
.effect3-step-index {
  position: relative;
  width: 70px;
  height: 100%;
  display: grid;
  place-items: center;
}
.effect3-step-index span {
  position: relative;
  z-index: 2;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #0fb19e;
  font-size: 19px;
  line-height: 1;
  font-weight: 950;
}
.effect3-step-index i {
  position: absolute;
  top: 66px;
  bottom: -27px;
  left: 50%;
  width: 2px;
  background: repeating-linear-gradient(180deg, #0fb19e 0 8px, transparent 8px 16px);
  transform: translateX(-50%);
}
.effect3-step-content {
  padding: 14px 24px 14px 14px;
}
.effect3-step-content h2 {
  margin: 0 0 8px;
  color: #075bd2;
  font-size: 25px;
  line-height: 1.13;
  font-weight: 950;
}
.effect3-step-content p {
  margin: 0;
  color: #22324e;
  font-size: 17px;
  line-height: 1.32;
  font-weight: 500;
}
.effect3-cta {
  position: relative;
  z-index: 18;
  width: calc(100% - 60px);
  height: 89px;
  margin: 0 auto 31px;
  border-radius: 13px;
  display: grid;
  grid-template-columns: 235px 1fr 160px;
  align-items: center;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 12px 22px rgba(0,76,180,.22);
  font-size: 32px;
  line-height: 1;
  font-weight: 950;
  transition: transform .18s ease, filter .18s ease;
}
.effect3-cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}
.effect3-cta svg {
  width: 57px;
  height: 57px;
  justify-self: end;
  margin-right: 23px;
}
.effect3-cta span { justify-self: start; }

@media (max-width: 820px) {
  .effect3-page { min-height: 1370px; }
  .effect3-heading { width: calc(100% - 40px); }
  .effect3-heading h1 { width: 100%; font-size: clamp(45px, 10vw, 66px); }
  .effect3-heading p { width: min(100%, 745px); font-size: 21px; }
  .effect3-capability-row { width: calc(100% - 80px); gap: 14px; }
  .effect3-hero { transform: scale(.88); transform-origin: top center; width: 107%; margin-left: -3.5%; height: 410px; }
  .effect3-step-card { grid-template-columns: 120px 62px 1fr; }
  .effect3-step-visual { width: 120px; }
  .effect3-step-content h2 { font-size: 22px; }
  .effect3-cta { grid-template-columns: 1fr 1fr 1fr; }
}

@media (max-width: 520px) {
  .effect3-page { min-height: 1240px; }
  .effect3-heading { padding-top: 28px; }
  .effect3-pill { width: 105px; height: 38px; font-size: 20px; }
  .effect3-heading h1 { font-size: 38px; }
  .effect3-heading p { font-size: 16px; }
  .effect3-capability-row { width: calc(100% - 34px); grid-template-columns: 1fr; gap: 10px; }
  .effect3-capability-pill { height: 58px; font-size: 20px; }
  .effect3-capability-pill svg { width: 31px; height: 31px; }
  .effect3-hero { transform: scale(.66); transform-origin: top center; width: 150%; margin-left: -25%; height: 325px; }
  .effect3-step-list { width: calc(100% - 34px); }
  .effect3-step-card { grid-template-columns: 70px 52px 1fr; min-height: 92px; }
  .effect3-step-visual { width: 70px; font-size: 46px; }
  .effect3-step-visual svg { width: 44px; height: 44px; }
  .effect3-step-index { width: 52px; }
  .effect3-step-index span { width: 36px; height: 36px; font-size: 15px; }
  .effect3-step-content { padding: 12px 10px; }
  .effect3-step-content h2 { font-size: 17px; }
  .effect3-step-content p { font-size: 13px; }
  .effect3-cta { width: calc(100% - 34px); height: 72px; grid-template-columns: 70px 1fr; font-size: 22px; }
  .effect3-cta svg { justify-self: center; margin: 0; width: 40px; height: 40px; }
}
`;
