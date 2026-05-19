import React from "react";

const readyCards = [
  {
    icon: <RegisterIcon />,
    title: "Đăng ký",
    desc: "Vào HKDO.vn và mở cửa hàng",
  },
  {
    icon: <TimerIcon />,
    title: "Thực hiện 1+10 phút",
    desc: "Tạo sản phẩm, xuất đơn, kiểm chứng đầu ra",
  },
  {
    icon: <QrStandIcon />,
    title: "Công bố QR",
    desc: "Tự dán QR tại điểm bán để người mua dễ tìm thấy",
  },
];

export default function HKDReadyPage() {
  return (
    <section id="hkd-san-sang-kinh-doanh-so" className="hkd-ready-page" aria-label="Sẵn sàng bắt đầu kinh doanh số">
      <style>{css}</style>

      <section className="hkd-ready-heading">
        <div className="hkd-ready-pill">MÀN 6</div>
        <h1>Sẵn sàng bắt đầu kinh doanh số?</h1>
        <p>Tự mở cửa hàng, hoàn tất chuỗi 1+10 phút, tự dán QR tại điểm bán và kết nối với người mua.</p>
      </section>

      <section className="hkd-ready-card-grid" aria-label="Ba bước sẵn sàng kinh doanh số">
        {readyCards.map((card) => (
          <article className="hkd-ready-card" key={card.title}>
            <div className="hkd-ready-icon">{card.icon}</div>
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
          </article>
        ))}
      </section>

      <ReadyIllustration />

      <a href="#hkd-home" className="hkd-ready-cta">
        <RocketIcon />
        <span>Bắt đầu ngay</span>
      </a>

      <a href="#hkd-video-huong-dan" className="hkd-ready-video-btn">
        <PlayCircleIcon />
        <span>Xem video hướng dẫn</span>
      </a>

      <footer className="hkd-ready-footer-brand">
        <div className="hkd-ready-footer-logo">HKDO</div>
        <span>HKDO - Nền tảng số cho hộ kinh doanh</span>
      </footer>
    </section>
  );
}

function ReadyIllustration() {
  return (
    <section className="hkd-ready-art" aria-hidden="true">
      <div className="hkd-ready-city city-left"><i /><i /><i /></div>
      <div className="hkd-ready-city city-right"><i /><i /><i /></div>
      <div className="hkd-ready-cloud cloud-a" />
      <div className="hkd-ready-cloud cloud-b" />
      <div className="hkd-ready-plant plant-left" />
      <div className="hkd-ready-plant plant-right" />
      <div className="hkd-ready-cup" />

      <div className="hkd-ready-shop">
        <div className="hkd-ready-shop-sign">CỬA HÀNG<br />HỘ KINH DOANH</div>
        <div className="hkd-ready-awning" />
        <div className="hkd-ready-door-sign">MỞ CỬA</div>
        <div className="hkd-ready-shop-window">{Array.from({ length: 18 }).map((_, index) => <i key={index} />)}</div>
      </div>

      <div className="hkd-ready-owner">
        <div className="hair" />
        <div className="face" />
        <div className="shirt" />
        <div className="apron" />
        <div className="arm-left" />
        <div className="arm-right" />
        <div className="phone">HKDO</div>
      </div>

      <div className="hkd-ready-laptop"><div>HKDO</div></div>

      <div className="hkd-ready-qr-stand">
        <div className="qr-stand-head">THANH TOÁN<br />QUÉT MÃ QR</div>
        <QrGraphic />
        <strong>HKDO</strong>
      </div>
    </section>
  );
}

function QrGraphic() {
  return (
    <svg className="hkd-ready-qr-graphic" viewBox="0 0 100 100" fill="none">
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

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function RegisterIcon() { return <Svg><path d="M7 3h10v18H7V3Z" stroke="currentColor" strokeWidth="2.2"/><path d="M10 8h4M10 12h4M10 16h3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><circle cx="17" cy="17" r="4" fill="currentColor"/><path d="m15.4 17 1.1 1.1 2.2-2.4" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function TimerIcon() { return <Svg><path d="M9 2h6M12 6a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><path d="M12 10v4l3 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/><text x="12" y="14" textAnchor="middle" fontSize="5" fontWeight="900" fill="currentColor">1+10</text></Svg>; }
function QrStandIcon() { return <Svg><path d="M5 3h14v15H5V3Z" stroke="currentColor" strokeWidth="2.3"/><path d="M8 6h3v3H8V6Zm5 0h3v3h-3V6ZM8 11h3v3H8v-3Zm5 2h3v3h-3v-3Z" fill="currentColor"/><path d="M8 21h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></Svg>; }
function RocketIcon() { return <Svg><path d="M13 4c3.2 1 5.4 3.2 6.4 6.4l-5.6 5.6-4.4-4.4L13 4Z" fill="currentColor"/><path d="M8.8 12.2 5 13l-2 4 4-.8M11.8 15.2 11 19l-4 2 .8-4" fill="currentColor" opacity=".85"/><circle cx="15" cy="9" r="1.8" fill="#fff"/></Svg>; }
function PlayCircleIcon() { return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4"/><path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor"/></Svg>; }

const css = `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; background: #dfeefa; color: #10175c; }
a { color: inherit; text-decoration: none; }
svg { width: 1em; height: 1em; display: block; }

.hkd-ready-page {
  position: relative;
  width: 100%;
  min-height: 1518px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 2%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%), linear-gradient(180deg, #fbfdff 0%, #eef8ff 55%, #fbfdff 100%);
}
.hkd-ready-heading { position: relative; z-index: 8; width: 820px; margin: 0 auto; padding-top: 36px; text-align: center; }
.hkd-ready-pill { width: 127px; height: 44px; margin: 0 auto 22px; border-radius: 999px; display: grid; place-items: center; color: #075bd2; background: #fff; border: 2px solid #9fc8fb; box-shadow: 0 8px 17px rgba(31,101,178,.08); font-size: 24px; line-height: 1; font-weight: 950; }
.hkd-ready-heading h1 { width: 760px; margin: 0 auto 24px; color: #075bd2; font-size: 71px; line-height: 1.08; font-weight: 950; letter-spacing: -3.4px; }
.hkd-ready-heading p { width: 650px; margin: 0 auto; color: #1d2742; font-size: 25px; line-height: 1.38; font-weight: 500; }
.hkd-ready-card-grid { position: relative; z-index: 15; width: calc(100% - 96px); margin: 33px auto 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.hkd-ready-card { min-height: 329px; padding: 34px 25px 24px; border-radius: 16px; text-align: center; background: rgba(255,255,255,.96); border: 1px solid rgba(211,230,248,.9); box-shadow: 0 14px 30px rgba(31,101,178,.12); }
.hkd-ready-icon { width: 127px; height: 127px; margin: 0 auto 22px; border-radius: 50%; display: grid; place-items: center; color: #075bd2; background: #eaf5ff; font-size: 88px; }
.hkd-ready-card h2 { margin: 0 0 14px; color: #075bd2; font-size: 29px; line-height: 1.13; font-weight: 950; }
.hkd-ready-card p { margin: 0; color: #333d52; font-size: 20px; line-height: 1.42; font-weight: 500; }
.hkd-ready-art { position: relative; z-index: 4; height: 530px; margin-top: 11px; overflow: hidden; }
.hkd-ready-art::before { content: ""; position: absolute; inset: 137px -22px 0; background: linear-gradient(180deg, rgba(206,238,255,.7), rgba(255,255,255,.15)); border-radius: 50% 50% 0 0; }
.hkd-ready-city { position: absolute; display: flex; align-items: flex-end; gap: 10px; opacity: .42; }
.hkd-ready-city.city-left { left: 35px; bottom: 110px; }
.hkd-ready-city.city-right { right: 86px; bottom: 108px; }
.hkd-ready-city i { width: 36px; height: 83px; border-radius: 9px 9px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.22), rgba(85,154,219,.06)); }
.hkd-ready-city i:nth-child(2) { height: 124px; }
.hkd-ready-city i:nth-child(3) { height: 96px; }
.hkd-ready-cloud, .hkd-ready-cloud::before, .hkd-ready-cloud::after { position: absolute; content: ""; border-radius: 999px; background: rgba(255,255,255,.94); }
.hkd-ready-cloud.cloud-a { right: 78px; top: 94px; width: 112px; height: 22px; }
.hkd-ready-cloud.cloud-a::before { width: 46px; height: 46px; left: 20px; top: -24px; }
.hkd-ready-cloud.cloud-a::after { width: 65px; height: 65px; left: 57px; top: -40px; }
.hkd-ready-cloud.cloud-b { left: 126px; top: 154px; width: 88px; height: 16px; opacity: .86; }
.hkd-ready-cloud.cloud-b::before { width: 35px; height: 35px; left: 15px; top: -17px; }
.hkd-ready-cloud.cloud-b::after { width: 50px; height: 50px; left: 40px; top: -29px; }
.hkd-ready-shop { position: absolute; z-index: 4; left: 42px; bottom: 28px; width: 322px; height: 385px; border-radius: 11px 11px 0 0; background: linear-gradient(180deg, #9bd1f7, #4e89be 30%, #254e7d 100%); box-shadow: 0 18px 30px rgba(24,74,139,.22); }
.hkd-ready-shop-sign { position: absolute; left: 7px; right: 7px; top: -1px; height: 84px; border-radius: 11px; display: grid; place-items: center; color: #fff; background: linear-gradient(180deg, #2c6fbd, #1d559d); border: 5px solid rgba(255,255,255,.18); font-size: 24px; line-height: 1.08; font-weight: 950; text-align: center; box-shadow: 0 10px 20px rgba(0,50,120,.22); }
.hkd-ready-awning { position: absolute; left: 0; right: 0; top: 84px; height: 64px; background: repeating-linear-gradient(90deg, #11458d 0 40px, #315f9e 40px 80px); border-radius: 0 0 25px 25px; }
.hkd-ready-awning::after { content: ""; position: absolute; left: 0; right: 0; bottom: -20px; height: 35px; background: repeating-radial-gradient(circle at 40px 0, #315f9e 0 32px, #11458d 33px 65px); clip-path: inset(0 0 0 0 round 0 0 24px 24px); }
.hkd-ready-door-sign { position: absolute; z-index: 3; left: 67px; top: 220px; width: 109px; height: 61px; border-radius: 8px; display: grid; place-items: center; color: #fff; background: #1164c7; border: 4px solid #b3d9ff; font-size: 18px; font-weight: 950; box-shadow: 0 10px 18px rgba(0,40,110,.25); }
.hkd-ready-door-sign::before { content: ""; position: absolute; left: 50%; top: -31px; width: 2px; height: 31px; background: #93b7dd; transform: translateX(-50%); }
.hkd-ready-shop-window { position: absolute; left: 27px; right: 27px; bottom: 41px; height: 160px; display: grid; grid-template-columns: repeat(6, 1fr); gap: 9px; padding: 19px; border-radius: 12px; background: rgba(27,36,49,.48); }
.hkd-ready-shop-window i { border-radius: 4px 4px 12px 12px; background: linear-gradient(180deg, #ffcd74, #8d6331); }
.hkd-ready-owner { position: absolute; z-index: 8; left: 316px; bottom: 9px; width: 312px; height: 520px; }
.hkd-ready-owner .hair { position: absolute; left: 83px; top: 0; width: 134px; height: 94px; border-radius: 82px 82px 30px 30px; background: #16191c; transform: rotate(-7deg); }
.hkd-ready-owner .face { position: absolute; left: 108px; top: 76px; width: 91px; height: 114px; border-radius: 47%; background: #ffbd8c; }
.hkd-ready-owner .shirt { position: absolute; left: 50px; top: 202px; width: 216px; height: 246px; border-radius: 80px 80px 0 0; background: #fff; }
.hkd-ready-owner .apron { position: absolute; left: 87px; top: 225px; width: 140px; height: 276px; border-radius: 60px 60px 0 0; background: #102e5a; }
.hkd-ready-owner .apron::before, .hkd-ready-owner .apron::after { content: ""; position: absolute; top: -30px; width: 18px; height: 102px; border-radius: 999px; background: #102e5a; }
.hkd-ready-owner .apron::before { left: 10px; transform: rotate(-18deg); }
.hkd-ready-owner .apron::after { right: 10px; transform: rotate(18deg); }
.hkd-ready-owner .arm-left { position: absolute; left: 11px; top: 268px; width: 112px; height: 37px; border-radius: 999px; background: #ffbd8c; transform: rotate(-58deg); }
.hkd-ready-owner .arm-right { position: absolute; right: 15px; top: 230px; width: 132px; height: 37px; border-radius: 999px; background: #ffbd8c; transform: rotate(-64deg); }
.hkd-ready-owner .phone { position: absolute; right: 20px; top: 137px; width: 54px; height: 93px; border-radius: 11px; display: grid; place-items: center; color: #fff; background: #075bd2; font-size: 13px; font-weight: 950; transform: rotate(-8deg); box-shadow: 0 8px 12px rgba(0,0,0,.22); }
.hkd-ready-laptop { position: absolute; z-index: 12; left: 368px; bottom: 10px; width: 285px; height: 143px; border-radius: 10px; background: linear-gradient(135deg, #cfd5dc, #7f8d9c); box-shadow: 0 18px 24px rgba(0,42,92,.22); transform: perspective(220px) rotateX(4deg) skewX(-4deg); }
.hkd-ready-laptop::after { content: ""; position: absolute; left: -30px; right: -30px; bottom: -14px; height: 16px; border-radius: 50%; background: rgba(61,84,105,.35); }
.hkd-ready-laptop div { position: absolute; left: 50%; top: 50%; width: 66px; height: 66px; border-radius: 50%; display: grid; place-items: center; color: #fff; background: #075bd2; font-size: 16px; font-weight: 850; transform: translate(-50%, -50%); }
.hkd-ready-qr-stand { position: absolute; z-index: 13; right: 58px; bottom: 18px; width: 138px; height: 212px; padding: 0 11px 12px; border-radius: 11px; text-align: center; background: #fff; border: 4px solid #4e91df; box-shadow: 0 14px 26px rgba(16,83,170,.18); transform: rotate(-2deg); }
.hkd-ready-qr-stand .qr-stand-head { height: 49px; margin: -4px -11px 9px; border-radius: 9px 9px 0 0; display: grid; place-items: center; color: #fff; background: #116bd5; font-size: 12px; line-height: 1.15; font-weight: 950; }
.hkd-ready-qr-stand .hkd-ready-qr-graphic { width: 101px; height: 101px; margin: 0 auto 10px; }
.hkd-ready-qr-stand strong { color: #075bd2; font-size: 20px; line-height: 1; font-weight: 950; }
.hkd-ready-plant { position: absolute; z-index: 7; width: 73px; height: 86px; bottom: 27px; }
.hkd-ready-plant.plant-left { left: 31px; }
.hkd-ready-plant.plant-right { right: 34px; }
.hkd-ready-plant::before, .hkd-ready-plant::after { content: ""; position: absolute; bottom: 0; width: 40px; height: 77px; border-radius: 40px 40px 0 0; background: linear-gradient(180deg, #92d88f, #3ea869); }
.hkd-ready-plant::before { left: 2px; transform: rotate(-28deg); }
.hkd-ready-plant::after { right: 2px; transform: rotate(27deg); }
.hkd-ready-cup { position: absolute; z-index: 8; left: 108px; bottom: 12px; width: 48px; height: 64px; border-radius: 8px 8px 18px 18px; background: linear-gradient(180deg, #222, #f0d4ad 14%, #fff 18%); box-shadow: 0 9px 14px rgba(0,0,0,.1); }
.hkd-ready-cup::before { content: ""; position: absolute; left: -3px; right: -3px; top: 0; height: 15px; border-radius: 999px; background: #222; }
.hkd-ready-cta { position: relative; z-index: 18; width: calc(100% - 96px); height: 89px; margin: 2px auto 18px; border-radius: 13px; display: grid; grid-template-columns: 300px 1fr 270px; align-items: center; color: #fff; background: linear-gradient(180deg, #086feb, #0055cb); box-shadow: 0 12px 22px rgba(0,76,180,.22); font-size: 33px; line-height: 1; font-weight: 950; transition: transform .18s ease, filter .18s ease; }
.hkd-ready-cta:hover, .hkd-ready-video-btn:hover { transform: translateY(-2px); filter: brightness(1.03); }
.hkd-ready-cta svg { width: 57px; height: 57px; justify-self: end; margin-right: 23px; }
.hkd-ready-cta span { justify-self: start; }
.hkd-ready-video-btn { position: relative; z-index: 18; width: calc(100% - 96px); height: 70px; margin: 0 auto 21px; border-radius: 10px; border: 2px solid #075bd2; display: flex; align-items: center; justify-content: center; gap: 16px; color: #075bd2; background: #fff; font-size: 24px; line-height: 1; font-weight: 850; white-space: nowrap; transition: transform .18s ease, filter .18s ease; }
.hkd-ready-video-btn svg { width: 41px; height: 41px; flex: 0 0 auto; }
.hkd-ready-footer-brand { height: 58px; display: flex; align-items: center; justify-content: center; gap: 14px; color: #242b40; }
.hkd-ready-footer-logo { width: 54px; height: 54px; border-radius: 9px; display: grid; place-items: center; color: #fff; background: #075bd2; font-size: 16px; font-weight: 950; }
.hkd-ready-footer-brand span { font-size: 21px; line-height: 1; font-weight: 650; }

@media (max-width: 820px) {
  .hkd-ready-page { min-height: 1370px; }
  .hkd-ready-heading { width: calc(100% - 40px); }
  .hkd-ready-heading h1 { width: 100%; font-size: clamp(47px, 10vw, 71px); }
  .hkd-ready-heading p { width: min(100%, 650px); font-size: 22px; }
  .hkd-ready-card-grid { width: calc(100% - 56px); }
  .hkd-ready-art { transform: scale(.88); transform-origin: top center; width: 114%; left: -7%; height: 480px; }
  .hkd-ready-cta { grid-template-columns: 1fr 1fr 1fr; }
}

@media (max-width: 520px) {
  .hkd-ready-page { min-height: 1240px; }
  .hkd-ready-heading { padding-top: 28px; }
  .hkd-ready-pill { width: 105px; height: 38px; font-size: 20px; }
  .hkd-ready-heading h1 { font-size: 38px; }
  .hkd-ready-heading p { font-size: 17px; }
  .hkd-ready-card-grid { grid-template-columns: 1fr; width: calc(100% - 34px); gap: 12px; }
  .hkd-ready-card { min-height: auto; display: grid; grid-template-columns: 64px 1fr; text-align: left; gap: 7px 15px; padding: 16px; }
  .hkd-ready-icon { grid-row: 1 / 3; width: 58px; height: 58px; font-size: 41px; margin: 0; }
  .hkd-ready-card h2 { margin: 0; font-size: 21px; }
  .hkd-ready-card p { font-size: 15px; }
  .hkd-ready-art { transform: scale(.65); width: 150%; left: -25%; height: 400px; }
  .hkd-ready-cta { width: calc(100% - 34px); height: 70px; grid-template-columns: 74px 1fr; font-size: 24px; }
  .hkd-ready-cta svg { justify-self: center; margin: 0; width: 39px; height: 39px; }
  .hkd-ready-video-btn { width: calc(100% - 34px); height: 60px; font-size: 18px; gap: 10px; }
  .hkd-ready-video-btn svg { width: 34px; height: 34px; }
  .hkd-ready-footer-brand span { font-size: 15px; }
}
`;
