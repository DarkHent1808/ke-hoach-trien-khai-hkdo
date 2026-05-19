import React from "react";
import Header from "../../components/Header";
import CnscdLearnPage from "./Cnscd_2";
import CnscdLaunchDayPage from "./Cnscd_3";
import CnscdStatusPage from "./Cnscd_4";
import CnscdFAQPage from "./Cnscd_5";
import CnscdReadyPage from "./Cnscd_6";

const actionCards = [
  {
    icon: <SupportIcon />,
    title: "Hỗ trợ tại chỗ",
    desc: "Hướng dẫn, giải đáp và hỗ trợ hộ kinh doanh kích hoạt, sử dụng HKDO.",
  },
  {
    icon: <QrIcon />,
    title: "Bàn giao QR",
    desc: "Trao QR HKDO cho hộ kinh doanh để tăng độ tin cậy và minh bạch.",
  },
  {
    icon: <ChartIcon />,
    title: "Theo dõi kết quả",
    desc: "Cập nhật, theo dõi và báo cáo kết quả thực tế trên địa bàn.",
  },
];

export default function CNSCDHomePage({ children }) {
  return (
    <div className="cnscd-bg">
      <style>{css}</style>

      <main className="cnscd-page">
        <Header activeKey="to-cnscd" />

        <section className="cnscd-screen-one">
          <section className="cnscd-hero-copy">
            <div className="cnscd-pill-wrap">
              <i />
              <i />
              <div className="cnscd-screen-pill">MÀN 1</div>
              <i />
              <i />
            </div>

            <h1>Trang tác nghiệp của Tổ CNSCĐ</h1>
            <p>
              Dành cho lực lượng bám địa bàn để hỗ trợ hộ kinh doanh, bàn giao QR và theo dõi kết quả thực tế.
            </p>
          </section>

          <HeroIllustration />

          <section className="cnscd-action-grid" aria-label="Nhiệm vụ chính của Tổ CNSCĐ">
            {actionCards.map((card) => (
              <article className="cnscd-action-card" key={card.title}>
                <div className="cnscd-action-icon">{card.icon}</div>
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
              </article>
            ))}
          </section>

          <section className="cnscd-message-card">
            <div className="cnscd-shield"><ShieldCheckIcon /></div>
            <p>
              <strong>Tổ CNSCĐ</strong> - Đồng hành cùng hộ kinh doanh trên hành trình chuyển đổi số, phát triển bền vững.
            </p>
            <MiniCityIcon />
          </section>

          <a href="#cnscd-bao-cao-trang-thai" className="cnscd-primary-cta">
            <ClipboardIcon />
            <span>Báo cáo trạng thái hộ</span>
            <ArrowRightIcon />
          </a>

          <footer className="cnscd-footer-brand">
            <strong>HKDO</strong>
            <span>Nền tảng số hỗ trợ hộ kinh doanh</span>
          </footer>
        </section>

        <div className="cnscd-embedded-sections">
        <CnscdLearnPage />
        <CnscdLaunchDayPage />
        <CnscdStatusPage />
        <CnscdFAQPage />
        <CnscdReadyPage />
        </div>
      </main>
    </div>
  );
}

function HeroIllustration() {
  return (
    <section className="cnscd-hero-art" aria-hidden="true">
      <div className="cnscd-cloud cloud-left" />
      <div className="cnscd-cloud cloud-mid" />
      <div className="cnscd-cloud cloud-right" />
      <div className="cnscd-tree tree-left" />
      <div className="cnscd-tree tree-right" />
      <div className="cnscd-shop">
        <div className="awning" />
        <div className="shop-sign">TẠP HÓA<br />MINH AN</div>
        <div className="shelves">
          {Array.from({ length: 18 }).map((_, index) => <i key={index} />)}
        </div>
      </div>

      <div className="cnscd-map-board">
        <strong>BẢN ĐỒ KHU DÂN CƯ</strong>
        <MiniMap />
        <span className="pin pin-1" />
        <span className="pin pin-2" />
        <span className="pin pin-3" />
        <span className="pin pin-4" />
      </div>

      <div className="cnscd-member member-left">
        <div className="cap">TỔ<br />CNSCĐ</div>
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="lanyard" />
        <div className="badge" />
        <div className="tablet" />
        <div className="arm" />
      </div>

      <div className="cnscd-member member-center">
        <div className="cap">TỔ<br />CNSCĐ</div>
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="lanyard" />
        <div className="badge" />
        <div className="arm" />
      </div>

      <div className="cnscd-owner">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="apron" />
        <QrBoard />
      </div>

      <div className="cnscd-member member-right">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="lanyard" />
        <div className="badge" />
        <div className="phone" />
      </div>
    </section>
  );
}

function MiniMap() {
  return (
    <svg viewBox="0 0 230 150" className="cnscd-mini-map" fill="none">
      <rect width="230" height="150" rx="10" fill="#eaf7ff" />
      <path d="M0 34h230M0 80h230M0 124h230M45 0v150M94 0v150M143 0v150M191 0v150" stroke="#fff" strokeWidth="8" />
      <path d="M10 126C47 104 57 72 93 71c36-1 47 31 82 19 22-8 33-31 45-54" stroke="#8cc9f5" strokeWidth="8" strokeLinecap="round" />
      <path d="M10 126C47 104 57 72 93 71c36-1 47 31 82 19 22-8 33-31 45-54" stroke="#fff" strokeWidth="3" strokeDasharray="8 8" strokeLinecap="round" />
    </svg>
  );
}

function QrBoard() {
  return (
    <div className="qr-board">
      <strong>HKDO</strong>
      <small>HỘ KINH DOANH</small>
      <svg viewBox="0 0 78 78" fill="none">
        <rect width="78" height="78" rx="5" fill="#fff" />
        {[
          [8, 8], [15, 8], [22, 8], [8, 15], [22, 15], [8, 22], [15, 22], [22, 22],
          [48, 8], [55, 8], [62, 8], [48, 15], [62, 15], [48, 22], [55, 22], [62, 22],
          [8, 48], [15, 48], [22, 48], [8, 55], [22, 55], [8, 62], [15, 62], [22, 62],
          [36, 34], [43, 34], [57, 34], [36, 41], [50, 41], [64, 41], [43, 48], [57, 48], [36, 55], [50, 55], [64, 55], [43, 62], [57, 62],
        ].map(([x, y], index) => <rect key={index} x={x} y={y} width="6" height="6" fill="#073f92" />)}
      </svg>
      <em>Quét để dùng HKDO</em>
    </div>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ArrowRightIcon() { return <Svg><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function SupportIcon() { return <Svg><path d="M5 13v-1a7 7 0 0 1 14 0v1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><rect x="3" y="12" width="5" height="7" rx="2" fill="currentColor"/><rect x="16" y="12" width="5" height="7" rx="2" fill="currentColor"/><path d="M18 19c-.7 2-2.5 3-5.2 3H11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M10 9h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></Svg>; }
function QrIcon() { return <Svg><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function ChartIcon() { return <Svg><path d="M5 19V12M10 19V8M15 19V5M20 19V3" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><path d="M4 20h17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="m5 10 4-3 4 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function ShieldCheckIcon() { return <Svg><path d="M12 3 5 6v5.4c0 4.5 2.8 7.7 7 9.6 4.2-1.9 7-5.1 7-9.6V6l-7-3Z" fill="currentColor"/><path d="m8.2 12 2.2 2.2 5.2-5.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function ClipboardIcon() { return <Svg><path d="M8 5h8M9 3h6v4H9V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6h12v15H6V6Z" stroke="currentColor" strokeWidth="2.3"/><path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function MiniCityIcon() { return <Svg viewBox="0 0 150 60" className="cnscd-city-icon"><path d="M5 52h140" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".25"/><path d="M28 52V25h32v27M70 52V13h35v39M113 52V31h25v21" fill="currentColor" opacity=".2"/><path d="M10 52c20-27 52-29 73-9 18 17 36 13 57-6" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity=".45"/><path d="M125 10c7 0 12 5 12 12" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity=".75"/><path d="M125 19c2 0 4 2 4 4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity=".75"/></Svg>; }

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

.cnscd-bg {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at top, #ffffff 0, #e8f6ff 46%, #dceefa 100%);
}
.cnscd-page {
  width: min(100%, 928px);
  min-height: 100vh;
  overflow: hidden;
  border-radius: 0 0 28px 28px;
  background:
    radial-gradient(circle at 50% 5%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 50%, #fbfdff 100%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.72) inset;
}
.cnscd-screen-one {
  position: relative;
  min-height: 1510px;
  overflow: hidden;
  padding-top: 34px;
}
.cnscd-hero-copy {
  position: relative;
  z-index: 8;
  width: 720px;
  margin: 0 auto;
  text-align: center;
}
.cnscd-pill-wrap {
  width: 310px;
  height: 70px;
  margin: 0 auto 22px;
  display: grid;
  grid-template-columns: 14px 14px 1fr 14px 14px;
  align-items: center;
  gap: 10px;
  color: #6fb2f5;
}
.cnscd-pill-wrap i {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: currentColor;
  opacity: .8;
}
.cnscd-screen-pill {
  height: 59px;
  border-radius: 24px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #238bf5, #075bd2);
  box-shadow: 0 10px 21px rgba(7,91,210,.25);
  font-size: 33px;
  font-weight: 950;
}
.cnscd-hero-copy h1 {
  margin: 0;
  color: #10175c;
  font-size: 73px;
  line-height: 1.03;
  font-weight: 950;
  letter-spacing: -3.7px;
}
.cnscd-hero-copy p {
  width: 610px;
  margin: 24px auto 0;
  color: #333846;
  font-size: 28px;
  line-height: 1.42;
  font-weight: 500;
}

.cnscd-hero-art {
  position: relative;
  z-index: 3;
  height: 520px;
  margin-top: 4px;
  overflow: hidden;
}
.cnscd-hero-art::before {
  content: "";
  position: absolute;
  inset: 125px -20px 0;
  background: linear-gradient(180deg, rgba(205,236,255,.6), rgba(255,255,255,.2));
  border-radius: 50% 50% 0 0;
}
.cnscd-cloud,
.cnscd-cloud::before,
.cnscd-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.95);
}
.cnscd-cloud.cloud-left { left: 63px; top: 115px; width: 118px; height: 24px; }
.cnscd-cloud.cloud-left::before { width: 50px; height: 50px; left: 20px; top: -28px; }
.cnscd-cloud.cloud-left::after { width: 68px; height: 68px; left: 62px; top: -42px; }
.cnscd-cloud.cloud-mid { left: 435px; top: 101px; width: 85px; height: 18px; }
.cnscd-cloud.cloud-mid::before { width: 38px; height: 38px; left: 16px; top: -20px; }
.cnscd-cloud.cloud-mid::after { width: 55px; height: 55px; left: 44px; top: -33px; }
.cnscd-cloud.cloud-right { right: 40px; top: 147px; width: 89px; height: 17px; opacity: .82; }
.cnscd-cloud.cloud-right::before { width: 33px; height: 33px; left: 16px; top: -16px; }
.cnscd-cloud.cloud-right::after { width: 48px; height: 48px; left: 42px; top: -28px; }
.cnscd-tree { position: absolute; width: 66px; height: 143px; border-radius: 40px 40px 18px 18px; background: linear-gradient(180deg, #99d590, #43a96d); }
.cnscd-tree.tree-left { left: -15px; bottom: 78px; }
.cnscd-tree.tree-right { right: 0; bottom: 95px; }
.cnscd-tree::after { content: ""; position: absolute; left: 31px; top: 55px; width: 5px; height: 82px; border-radius: 999px; background: #327858; }
.cnscd-shop {
  position: absolute;
  right: 18px;
  top: 145px;
  width: 330px;
  height: 267px;
  border-radius: 8px;
  background: linear-gradient(180deg, #ebefe5, #cfe3d1);
  box-shadow: 0 16px 22px rgba(42,91,150,.13);
}
.cnscd-shop::before {
  content: "";
  position: absolute;
  left: -12px;
  right: -12px;
  top: -38px;
  height: 58px;
  border-radius: 20px 20px 5px 5px;
  background: repeating-linear-gradient(110deg, #2c8a7d 0 32px, #78b7ae 32px 64px);
  transform: skewX(-12deg);
}
.cnscd-shop .shop-sign {
  position: absolute;
  right: 16px;
  top: -86px;
  width: 204px;
  height: 83px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  color: #9a805b;
  background: #f2e5cf;
  border: 5px solid #d4c2a4;
  font-size: 29px;
  line-height: 1.1;
  font-weight: 950;
  transform: rotate(-3deg);
  text-align: center;
}
.cnscd-shop .shelves {
  position: absolute;
  right: 22px;
  bottom: 27px;
  width: 150px;
  height: 145px;
  display: grid;
  grid-template-columns: repeat(6,1fr);
  gap: 8px;
}
.cnscd-shop .shelves i {
  border-radius: 4px;
  background: linear-gradient(180deg, #e6b45e, #8a6b35);
}
.cnscd-map-board {
  position: absolute;
  left: 193px;
  top: 105px;
  width: 250px;
  height: 189px;
  padding: 35px 13px 10px;
  border-radius: 12px;
  background: #fff;
  border: 5px solid #1b79de;
  box-shadow: 0 17px 25px rgba(31,101,178,.18);
}
.cnscd-map-board strong {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 36px;
  border-radius: 7px 7px 0 0;
  display: grid;
  place-items: center;
  color: #fff;
  background: #1d7edb;
  font-size: 17px;
  font-weight: 950;
}
.cnscd-mini-map { width: 100%; height: 100%; }
.cnscd-map-board .pin {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50% 50% 50% 4px;
  background: #2c8ff0;
  transform: rotate(-45deg);
}
.cnscd-map-board .pin::after {
  content: "";
  position: absolute;
  inset: 7px;
  border-radius: 50%;
  background: #fff;
}
.cnscd-map-board .pin-1 { left: 61px; top: 75px; }
.cnscd-map-board .pin-2 { right: 66px; top: 82px; }
.cnscd-map-board .pin-3 { left: 103px; bottom: 48px; }
.cnscd-map-board .pin-4 { right: 33px; bottom: 73px; }

.cnscd-member,
.cnscd-owner { position: absolute; z-index: 8; }
.cnscd-member .cap {
  position: absolute;
  z-index: 4;
  height: 46px;
  border-radius: 50% 50% 8px 8px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #075ed2;
  font-size: 14px;
  line-height: 1.05;
  font-weight: 950;
  text-align: center;
}
.member-left {
  left: 18px;
  bottom: 5px;
  width: 190px;
  height: 344px;
}
.member-left .cap { left: 51px; top: 0; width: 91px; }
.member-left .hair { position: absolute; left: 57px; top: 36px; width: 78px; height: 46px; border-radius: 48px 48px 18px 18px; background: #061746; }
.member-left .face { position: absolute; left: 64px; top: 63px; width: 64px; height: 83px; border-radius: 45%; background: #ffbd8c; }
.member-left .body { position: absolute; left: 24px; top: 151px; width: 131px; height: 196px; border-radius: 54px 54px 0 0; background: linear-gradient(180deg, #0d7be4, #0753be); }
.member-left .lanyard { position: absolute; left: 86px; top: 166px; width: 2px; height: 89px; background: #8bd0ff; transform: rotate(-18deg); box-shadow: 31px 0 0 #8bd0ff; }
.member-left .badge { position: absolute; left: 85px; top: 244px; width: 36px; height: 48px; border-radius: 4px; background: #d7ecff; border: 3px solid #1b6ad2; }
.member-left .tablet { position: absolute; right: -14px; top: 179px; width: 93px; height: 87px; border-radius: 9px; background: #253c62; transform: rotate(7deg); }
.member-left .arm { position: absolute; right: 20px; top: 198px; width: 72px; height: 23px; border-radius: 999px; background: #0f6bd3; transform: rotate(-20deg); }
.member-center {
  left: 282px;
  bottom: 1px;
  width: 176px;
  height: 315px;
}
.member-center .cap { left: 46px; top: 0; width: 86px; }
.member-center .hair { position: absolute; left: 54px; top: 39px; width: 66px; height: 43px; border-radius: 44px 44px 17px 17px; background: #061746; }
.member-center .face { position: absolute; left: 61px; top: 63px; width: 55px; height: 70px; border-radius: 45%; background: #ffbd8c; }
.member-center .body { position: absolute; left: 25px; top: 141px; width: 125px; height: 176px; border-radius: 52px 52px 0 0; background: linear-gradient(180deg, #0d7be4, #0753be); }
.member-center .lanyard { position: absolute; left: 83px; top: 155px; width: 2px; height: 74px; background: #8bd0ff; transform: rotate(-18deg); box-shadow: 29px 0 0 #8bd0ff; }
.member-center .badge { position: absolute; left: 81px; top: 219px; width: 34px; height: 45px; border-radius: 4px; background: #d7ecff; border: 3px solid #1b6ad2; }
.member-center .arm { position: absolute; right: -31px; top: 155px; width: 95px; height: 26px; border-radius: 999px; background: #0f6bd3; transform: rotate(-23deg); }
.member-center .arm::after { content: ""; position: absolute; right: -10px; top: -2px; width: 27px; height: 27px; border-radius: 50%; background: #ffbd8c; }
.cnscd-owner {
  left: 505px;
  bottom: 3px;
  width: 190px;
  height: 321px;
}
.cnscd-owner .hair { position: absolute; left: 57px; top: 21px; width: 78px; height: 50px; border-radius: 45px 45px 18px 18px; background: #151515; }
.cnscd-owner .face { position: absolute; left: 67px; top: 66px; width: 61px; height: 75px; border-radius: 45%; background: #ffbd8c; }
.cnscd-owner .body { position: absolute; left: 40px; top: 145px; width: 112px; height: 176px; border-radius: 47px 47px 0 0; background: #e6d5bd; }
.cnscd-owner .apron { position: absolute; left: 55px; top: 153px; width: 82px; height: 168px; border-radius: 34px 34px 0 0; background: #795a3b; }
.qr-board {
  position: absolute;
  left: -31px;
  top: 170px;
  width: 113px;
  height: 137px;
  padding: 9px 8px;
  border-radius: 10px;
  text-align: center;
  background: #fff;
  border: 4px solid #6cb6f8;
  box-shadow: 0 12px 20px rgba(25,99,180,.16);
  transform: rotate(4deg);
}
.qr-board strong { display: block; color: #116cde; font-size: 16px; font-weight: 950; line-height: 1; }
.qr-board small { display: block; color: #0f4c9b; font-size: 9px; font-weight: 900; margin: 2px 0 5px; }
.qr-board svg { width: 72px; height: 72px; margin: 0 auto; }
.qr-board em { display: block; color: #2d6ab9; font-size: 8px; font-style: normal; font-weight: 800; margin-top: 4px; }
.member-right {
  right: 16px;
  bottom: 0;
  width: 179px;
  height: 324px;
}
.member-right .hair { position: absolute; left: 50px; top: 0; width: 92px; height: 96px; border-radius: 60px 60px 25px 25px; background: #2b1a18; }
.member-right .face { position: absolute; left: 71px; top: 56px; width: 57px; height: 71px; border-radius: 45%; background: #ffbd8c; }
.member-right .body { position: absolute; left: 34px; top: 135px; width: 120px; height: 190px; border-radius: 50px 50px 0 0; background: linear-gradient(180deg, #0d7be4, #0753be); }
.member-right .lanyard { position: absolute; left: 91px; top: 150px; width: 2px; height: 79px; background: #8bd0ff; transform: rotate(-18deg); box-shadow: 29px 0 0 #8bd0ff; }
.member-right .badge { position: absolute; left: 88px; top: 219px; width: 34px; height: 45px; border-radius: 4px; background: #d7ecff; border: 3px solid #1b6ad2; }
.member-right .phone { position: absolute; left: 18px; top: 187px; width: 50px; height: 79px; border-radius: 9px; background: #293d5f; transform: rotate(-15deg); }

.cnscd-action-grid {
  position: relative;
  z-index: 10;
  width: 812px;
  margin: -3px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 13px;
}
.cnscd-action-card {
  min-height: 319px;
  padding: 34px 25px 24px;
  border-radius: 16px;
  text-align: center;
  background: rgba(255,255,255,.97);
  box-shadow: 0 14px 30px rgba(31,101,178,.13);
}
.cnscd-action-icon {
  width: 102px;
  height: 102px;
  margin: 0 auto 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #eaf5ff;
  font-size: 70px;
}
.cnscd-action-card h2 {
  margin: 0 0 17px;
  color: #075bd2;
  font-size: 29px;
  line-height: 1.13;
  font-weight: 950;
}
.cnscd-action-card p {
  margin: 0;
  color: #34405c;
  font-size: 18px;
  line-height: 1.48;
  font-weight: 500;
}
.cnscd-message-card {
  position: relative;
  z-index: 10;
  width: 838px;
  height: 91px;
  margin: 20px auto 0;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 76px 1fr 210px;
  align-items: center;
  gap: 19px;
  padding: 0 21px;
  background: rgba(255,255,255,.93);
  border: 1px solid #c8e1fa;
  box-shadow: 0 10px 22px rgba(31,101,178,.08);
}
.cnscd-shield {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #e7f3ff;
  font-size: 53px;
}
.cnscd-message-card p {
  margin: 0;
  color: #1b2e65;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 650;
}
.cnscd-message-card strong { color: #0a56be; }
.cnscd-city-icon {
  width: 194px;
  height: 76px;
  color: #2b8ae9;
  justify-self: end;
}
.cnscd-primary-cta {
  position: relative;
  z-index: 10;
  width: 837px;
  height: 97px;
  margin: 20px auto 0;
  border-radius: 17px;
  display: grid;
  grid-template-columns: 89px 1fr 66px;
  align-items: center;
  padding: 0 52px 0 116px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 13px 24px rgba(0,76,180,.27);
  transition: transform .18s ease, filter .18s ease;
}
.cnscd-primary-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.cnscd-primary-cta svg:first-child { width: 57px; height: 57px; justify-self: center; }
.cnscd-primary-cta span {
  text-align: center;
  font-size: 43px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -.8px;
}
.cnscd-primary-cta svg:last-child { width: 48px; height: 48px; justify-self: end; }
.cnscd-footer-brand {
  position: relative;
  z-index: 10;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  color: #075bd2;
}
.cnscd-footer-brand strong {
  font-size: 26px;
  line-height: 1;
  font-weight: 950;
}
.cnscd-footer-brand span {
  color: #8d98ad;
  font-size: 16px;
  font-weight: 650;
}
.cnscd-embedded-sections { position: relative; z-index: 1; }

@media (max-width: 820px) {
  .cnscd-screen-one { min-height: 1340px; }
  .cnscd-hero-copy { width: calc(100% - 40px); }
  .cnscd-hero-copy h1 { font-size: clamp(46px, 10vw, 73px); }
  .cnscd-hero-copy p { width: min(100%, 610px); font-size: 23px; }
  .cnscd-hero-art { transform: scale(.86); transform-origin: top center; width: 116%; left: -8%; height: 465px; }
  .cnscd-action-grid { width: calc(100% - 56px); }
  .cnscd-message-card,
  .cnscd-primary-cta { width: calc(100% - 56px); }
  .cnscd-primary-cta { padding-left: 58px; }
}

@media (max-width: 520px) {
  .cnscd-screen-one { min-height: 1180px; }
  .cnscd-pill-wrap { width: 230px; grid-template-columns: 9px 9px 1fr 9px 9px; gap: 7px; }
  .cnscd-screen-pill { height: 50px; font-size: 25px; }
  .cnscd-hero-copy h1 { font-size: 39px; }
  .cnscd-hero-copy p { font-size: 18px; }
  .cnscd-hero-art { transform: scale(.65); width: 150%; left: -25%; height: 380px; }
  .cnscd-action-grid { grid-template-columns: 1fr; width: calc(100% - 36px); gap: 12px; }
  .cnscd-action-card { min-height: auto; display: grid; grid-template-columns: 65px 1fr; text-align: left; gap: 8px 15px; padding: 17px; }
  .cnscd-action-icon { grid-row: 1 / 3; width: 58px; height: 58px; font-size: 40px; margin: 0; }
  .cnscd-action-card h2 { font-size: 22px; margin: 0; }
  .cnscd-action-card p { font-size: 15px; }
  .cnscd-message-card { width: calc(100% - 36px); height: auto; min-height: 86px; grid-template-columns: 54px 1fr; padding: 14px; }
  .cnscd-message-card .cnscd-city-icon { display: none; }
  .cnscd-shield { width: 50px; height: 50px; font-size: 43px; }
  .cnscd-message-card p { font-size: 14px; }
  .cnscd-primary-cta { width: calc(100% - 36px); height: 76px; grid-template-columns: 42px 1fr 32px; padding: 0 22px; }
  .cnscd-primary-cta span { font-size: 25px; }
  .cnscd-primary-cta svg:first-child { width: 40px; height: 40px; }
  .cnscd-footer-brand { height: 62px; flex-direction: column; gap: 4px; }
}
`;
