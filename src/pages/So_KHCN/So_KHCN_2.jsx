import React from "react";
import Header from "../../components/Header";

const checklistItems = [
  {
    icon: <LocationIcon />,
    text: "Chọn địa bàn triển khai",
  },
  {
    icon: <TargetIcon />,
    text: "Thống nhất mục tiêu và thông điệp",
  },
  {
    icon: <GroupIcon />,
    text: "Chốt đầu mối phối hợp",
  },
  {
    icon: <SupportIcon />,
    text: "Kiểm tra độ sẵn sàng của lực lượng hỗ trợ",
  },
  {
    icon: <QrIcon />,
    text: "Kiểm tra độ sẵn sàng của nền tảng và bộ QR",
  },
];

export default function SoKHCNPreparePage({ embedded = false }) {
  const rootClassName = embedded ? "sk-page-bg sk-page-bg--embedded" : "sk-page-bg";
  const pageClassName = embedded ? "sk-page sk-page--embedded" : "sk-page";

  return (
    <section id="so-can-chuan-bi" className={rootClassName}>
      <style>{css}</style>

      <main className={pageClassName}>
        {!embedded && <Header activeKey="so-khcn" />}

        <section className="sk-hero">
          <div className="sk-hero-copy">
            <h1>Sở cần chuẩn bị gì?</h1>
            <p>
              Sở KHCN là đầu mối điều phối chung, thống nhất cách làm và bảo đảm các bên cùng vận hành theo một logic thống nhất.
            </p>
          </div>

          <HeroArtwork />
        </section>

        <section className="sk2-checklist-section" aria-label="Danh sách việc cần chuẩn bị">
          {checklistItems.map((item) => (
            <article className="sk2-checklist-card" key={item.text}>
              <div className="sk2-checklist-icon">{item.icon}</div>
              <h2>{item.text}</h2>
              <div className="sk2-check-mark"><CheckIcon /></div>
            </article>
          ))}
        </section>

        <a href="#checklist-dieu-phoi" className="sk2-outline-cta">
          <ClipboardIcon />
          <span>Xem checklist điều phối</span>
          <ArrowRightIcon />
        </a>

        <a href="#dashboard" className="sk2-primary-cta">
          <PieIcon />
          <span>Xem dashboard</span>
          <ArrowRightIcon />
        </a>
      </main>
    </section>
  );
}

function HeroArtwork() {
  return (
    <div className="sk2-hero-art" aria-hidden="true">
      <div className="sk2-cloud sk2-cloud-a" />
      <div className="sk2-cloud sk2-cloud-b" />
      <div className="sk2-skyline sk2-skyline-a"><i /><i /><i /></div>
      <div className="sk2-skyline sk2-skyline-b"><i /><i /><i /></div>
      <GovBuilding />
      <div className="sk2-table-map">
        <div className="sk2-map-line sk2-line-1" />
        <div className="sk2-map-line sk2-line-2" />
        <div className="sk2-map-line sk2-line-3" />
        <div className="sk2-map-pin"><LocationIcon /></div>
      </div>
      <div className="sk2-man-center">
        <div className="sk2-hair" />
        <div className="sk2-face" />
        <div className="sk2-body" />
        <div className="sk2-clipboard">
          <span /><span /><span />
        </div>
      </div>
      <div className="sk2-man-right">
        <div className="sk2-hair" />
        <div className="sk2-face" />
        <div className="sk2-glasses" />
        <div className="sk2-body" />
        <div className="sk2-laptop" />
      </div>
      <div className="sk2-plant" />
    </div>
  );
}

function GovBuilding() {
  return (
    <div className="sk2-gov-building">
      <div className="sk2-roof"><span>★</span></div>
      <div className="sk2-body">
        <div className="sk2-columns"><i /><i /><i /><i /></div>
        <div className="sk2-windows">
          {Array.from({ length: 8 }).map((_, index) => <b key={index} />)}
        </div>
        <div className="sk2-door" />
      </div>
      <div className="sk2-steps" />
    </div>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function LocationIcon() {
  return (
    <Svg>
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" fill="currentColor" />
      <circle cx="12" cy="10" r="2.6" fill="#fff" />
    </Svg>
  );
}

function TargetIcon() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.4" />
      <path d="M15 9 21 3M18 3h3v3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function GroupIcon() {
  return (
    <Svg>
      <path d="M8.5 11a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Zm7 0a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z" fill="currentColor" />
      <path d="M2.8 20c.4-4.4 2.7-6.8 5.8-6.8s5.3 2.4 5.7 6.8H2.8Zm7.7 0c.4-4.3 2.6-6.8 5.2-6.8 3 0 5.2 2.4 5.5 6.8H10.5Z" fill="currentColor" opacity=".78" />
    </Svg>
  );
}

function SupportIcon() {
  return (
    <Svg>
      <path d="M4 13a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M4 13h4v5H4v-5Zm12 0h4v5h-4v-5Z" fill="currentColor" />
      <path d="M17 19c-.9 1.4-2.5 2-5 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </Svg>
  );
}

function QrIcon() {
  return (
    <Svg>
      <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2" />
      <path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor" />
    </Svg>
  );
}

function CheckIcon() {
  return (
    <Svg>
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function ClipboardIcon() {
  return (
    <Svg>
      <path d="M8 5h8M9 3h6v4H9V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 6h12v15H6V6Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M9 11h6M9 15h6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    </Svg>
  );
}

function ArrowRightIcon() {
  return (
    <Svg>
      <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function PieIcon() {
  return (
    <Svg>
      <path d="M12 3v9h9A9 9 0 0 0 12 3Z" fill="currentColor" opacity=".98" />
      <path d="M10 5a9 9 0 1 0 9 9h-9V5Z" fill="currentColor" opacity=".45" />
    </Svg>
  );
}

const css = `
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  background: #dfeefa;
  color: #10175c;
}
a { color: inherit; text-decoration: none; }
svg { width: 1em; height: 1em; display: block; }

.sk-page-bg {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at top, #ffffff 0, #e9f6ff 46%, #dceefa 100%);
}

.sk-page {
  width: min(100%, 928px);
  min-height: 100vh;
  overflow: hidden;
  border-radius: 0 0 28px 28px;
  background:
    radial-gradient(circle at 75% 8%, rgba(255,255,255,.9) 0 13%, rgba(255,255,255,0) 35%),
    linear-gradient(180deg, #f9fdff 0%, #eef8ff 58%, #f8fdff 100%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.72) inset;
}

.sk-page > :global(.role-header),
.sk-page > header:first-child {
  flex-shrink: 0;
}

.sk-hero {
  position: relative;
  min-height: 503px;
  padding: 71px 27px 0;
}

.sk-hero-copy {
  position: relative;
  z-index: 5;
  width: 462px;
  padding-left: 18px;
}

.sk-hero-copy h1 {
  margin: 0 0 24px;
  color: #10175c;
  font-size: 61px;
  line-height: 1.12;
  font-weight: 950;
  letter-spacing: -2.5px;
}

.sk-hero-copy p {
  margin: 0;
  color: #4a5885;
  font-size: 25px;
  line-height: 1.5;
  font-weight: 500;
}

.sk2-hero-art {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.sk2-cloud,
.sk2-cloud::before,
.sk2-cloud::after {
  position: absolute;
  border-radius: 999px;
  background: rgba(255,255,255,.95);
  content: "";
}

.sk2-cloud-a {
  right: 84px;
  top: 78px;
  width: 85px;
  height: 16px;
}
.sk2-cloud-a::before {
  width: 34px;
  height: 34px;
  left: 14px;
  top: -17px;
}
.sk2-cloud-a::after {
  width: 43px;
  height: 43px;
  left: 41px;
  top: -26px;
}
.sk2-cloud-b {
  left: 614px;
  top: 96px;
  width: 78px;
  height: 14px;
  opacity: .72;
}
.sk2-cloud-b::before {
  width: 27px;
  height: 27px;
  left: 15px;
  top: -12px;
}
.sk2-cloud-b::after {
  width: 38px;
  height: 38px;
  left: 38px;
  top: -22px;
}

.sk2-skyline {
  position: absolute;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  opacity: .6;
}
.sk2-skyline-a {
  right: 99px;
  top: 139px;
}
.sk2-skyline-b {
  left: 420px;
  top: 176px;
}
.sk2-skyline i {
  width: 38px;
  height: 103px;
  border-radius: 12px 12px 0 0;
  display: block;
  background: linear-gradient(180deg, rgba(85,154,219,.19), rgba(85,154,219,.05));
}
.sk2-skyline i:nth-child(2) { height: 137px; }
.sk2-skyline i:nth-child(3) { height: 83px; }

.sk2-gov-building {
  position: absolute;
  right: 36px;
  top: 149px;
  width: 278px;
  height: 188px;
  filter: drop-shadow(0 13px 16px rgba(21, 97, 192, .15));
  opacity: .95;
}
.sk2-gov-building .sk2-roof {
  position: absolute;
  left: 46px;
  top: 0;
  width: 188px;
  height: 74px;
  clip-path: polygon(50% 0, 100% 70%, 92% 100%, 8% 100%, 0 70%);
  background: linear-gradient(180deg, #edf7ff, #9acfff 58%, #5ca2f2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 28px;
}
.sk2-gov-building .sk2-roof span {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #ffe33b;
  background: #ef3124;
  font-size: 21px;
}
.sk2-gov-building .sk2-body {
  position: absolute;
  left: 24px;
  top: 71px;
  width: 232px;
  height: 94px;
  border-radius: 8px 8px 2px 2px;
  border-top: 8px solid #2379d7;
  background: linear-gradient(180deg, #d6ebff, #74b8fb);
}
.sk2-gov-building .sk2-columns {
  position: absolute;
  left: 50px;
  right: 50px;
  top: -2px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 11px;
}
.sk2-gov-building .sk2-columns i {
  height: 96px;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(90deg, #f2f9ff, #8cc5fb, #e8f5ff);
}
.sk2-gov-building .sk2-windows {
  position: absolute;
  inset: 22px 14px 17px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 9px 24px;
}
.sk2-gov-building .sk2-windows b {
  height: 24px;
  border-radius: 3px;
  background: linear-gradient(180deg, #65b8ff, #126ed3);
}
.sk2-gov-building .sk2-door {
  position: absolute;
  left: 101px;
  bottom: 0;
  width: 31px;
  height: 46px;
  border-radius: 4px 4px 0 0;
  background: #064ea6;
}
.sk2-gov-building .sk2-steps {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  height: 18px;
  border-radius: 4px;
  background: linear-gradient(180deg, #c7e4ff, #8cc8ff);
}

.sk2-table-map {
  position: absolute;
  right: 162px;
  bottom: 6px;
  width: 286px;
  height: 103px;
  transform: skewX(-16deg);
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(255,255,255,.88), rgba(214,236,255,.72));
  border: 2px solid rgba(142, 192, 242, .35);
}
.sk2-table-map::before,
.sk2-table-map::after,
.sk2-map-line {
  content: "";
  position: absolute;
  height: 3px;
  border-radius: 999px;
  background: rgba(93, 166, 232, .55);
}
.sk2-table-map::before { left: 16px; right: 23px; top: 33px; transform: rotate(13deg); }
.sk2-table-map::after { left: 44px; right: 49px; bottom: 33px; transform: rotate(-17deg); }
.sk2-map-line.line-1 { left: 33px; top: 16px; width: 83px; transform: rotate(-26deg); }
.sk2-map-line.line-2 { left: 129px; top: 48px; width: 112px; transform: rotate(20deg); }
.sk2-map-line.line-3 { left: 181px; top: 14px; width: 67px; transform: rotate(-13deg); }
.sk2-map-pin {
  position: absolute;
  left: 164px;
  top: 8px;
  color: #126fe5;
  font-size: 46px;
  transform: skewX(16deg);
}

.sk2-woman {
  position: absolute;
  right: 419px;
  bottom: 12px;
  width: 180px;
  height: 264px;
  z-index: 4;
}
.sk2-woman .sk2-hair {
  position: absolute;
  left: 39px;
  top: 10px;
  width: 82px;
  height: 98px;
  border-radius: 54px 54px 35px 35px;
  background: #061746;
}
.sk2-woman .sk2-face {
  position: absolute;
  left: 75px;
  top: 45px;
  width: 49px;
  height: 60px;
  border-radius: 45%;
  background: #ffbd8c;
}
.sk2-woman .sk2-body {
  position: absolute;
  left: 39px;
  top: 110px;
  width: 101px;
  height: 142px;
  border-radius: 42px 42px 0 0;
  background: linear-gradient(160deg, #1685ef, #0752bb);
}
.sk2-woman .sk2-paper {
  position: absolute;
  left: 64px;
  bottom: 17px;
  width: 99px;
  height: 43px;
  border-radius: 6px;
  transform: rotate(7deg);
  background: #f9fcff;
  border: 3px solid #9fcdf6;
}

.sk2-man-center {
  position: absolute;
  right: 261px;
  bottom: 5px;
  width: 190px;
  height: 315px;
  z-index: 5;
}
.sk2-man-center .sk2-hair {
  position: absolute;
  left: 74px;
  top: 2px;
  width: 65px;
  height: 54px;
  border-radius: 42px 42px 18px 18px;
  background: #07143c;
}
.sk2-man-center .sk2-face {
  position: absolute;
  left: 84px;
  top: 43px;
  width: 47px;
  height: 59px;
  border-radius: 45%;
  background: #ffbd8c;
}
.sk2-man-center .sk2-body {
  position: absolute;
  left: 53px;
  top: 105px;
  width: 92px;
  height: 196px;
  border-radius: 38px 38px 0 0;
  background: linear-gradient(160deg, #102b63, #061541);
}
.sk2-man-center .sk2-clipboard {
  position: absolute;
  left: 33px;
  top: 95px;
  width: 95px;
  height: 126px;
  border-radius: 11px;
  transform: rotate(-5deg);
  background: #eff8ff;
  border: 7px solid #145fbd;
  box-shadow: 0 10px 18px rgba(0,0,0,.15);
}
.sk2-man-center .sk2-clipboard span {
  position: relative;
  display: block;
  height: 10px;
  margin: 17px 15px;
  border-radius: 999px;
  background: #9cc8f1;
}
.sk2-man-center .sk2-clipboard span::before {
  content: "✓";
  position: absolute;
  left: -8px;
  top: -6px;
  color: #1eb96d;
  font-weight: 950;
  font-size: 19px;
}

.sk2-man-right {
  position: absolute;
  right: 58px;
  bottom: 14px;
  width: 179px;
  height: 252px;
  z-index: 4;
}
.sk2-man-right .sk2-hair {
  position: absolute;
  left: 56px;
  top: 8px;
  width: 65px;
  height: 47px;
  border-radius: 45px 45px 17px 17px;
  background: #07143c;
}
.sk2-man-right .sk2-face {
  position: absolute;
  left: 67px;
  top: 45px;
  width: 47px;
  height: 58px;
  border-radius: 45%;
  background: #ffbd8c;
}
.sk2-man-right .sk2-glasses {
  position: absolute;
  left: 62px;
  top: 68px;
  width: 61px;
  height: 12px;
  border-top: 3px solid #101a4e;
  z-index: 2;
}
.sk2-man-right .sk2-body {
  position: absolute;
  left: 39px;
  top: 109px;
  width: 96px;
  height: 132px;
  border-radius: 36px 36px 0 0;
  background: linear-gradient(180deg, #8bc3ff, #4a91ec);
}
.sk2-man-right .sk2-laptop {
  position: absolute;
  left: 0;
  bottom: 3px;
  width: 129px;
  height: 75px;
  border-radius: 8px;
  transform: rotate(6deg);
  background: linear-gradient(135deg, #6f8fb4, #263f67);
}
.sk2-plant {
  position: absolute;
  right: 15px;
  bottom: 27px;
  width: 51px;
  height: 64px;
  border-radius: 34px 34px 0 0;
  background: linear-gradient(180deg, #83d88b, #37a866);
  z-index: 3;
}
.sk2-plant::before,
.sk2-plant::after {
  content: "";
  position: absolute;
  bottom: 2px;
  width: 35px;
  height: 54px;
  border-radius: 30px 30px 0 0;
  background: #61c879;
}
.sk2-plant::before { left: -23px; transform: rotate(-31deg); }
.sk2-plant::after { right: -20px; transform: rotate(30deg); }

.sk2-checklist-section {
  position: relative;
  z-index: 8;
  padding: 0 27px;
  display: grid;
  gap: 15px;
}
.sk2-checklist-card {
  min-height: 126px;
  padding: 18px 40px 18px 24px;
  border-radius: 21px;
  display: grid;
  grid-template-columns: 99px 1fr 54px;
  align-items: center;
  gap: 38px;
  background: rgba(255,255,255,.97);
  box-shadow: 0 13px 27px rgba(31, 101, 178, .12);
}
.sk2-checklist-icon {
  width: 98px;
  height: 98px;
  border-radius: 21px;
  display: grid;
  place-items: center;
  color: #0874e9;
  background: #e8f4ff;
  font-size: 57px;
}
.sk2-checklist-card h2 {
  margin: 0;
  color: #111a63;
  font-size: 30px;
  line-height: 1.22;
  font-weight: 900;
  letter-spacing: -.45px;
}
.sk2-check-mark {
  width: 49px;
  height: 49px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  justify-self: end;
  color: #fff;
  background: linear-gradient(180deg, #117aec, #005bd3);
  font-size: 31px;
  box-shadow: 0 7px 13px rgba(0, 91, 211, .22);
}

.sk2-outline-cta {
  width: 480px;
  height: 63px;
  margin: 21px auto 20px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 43px 1fr 40px;
  align-items: center;
  padding: 0 30px;
  color: #075fdf;
  background: rgba(255,255,255,.95);
  border: 2px solid #075fdf;
  font-size: 26px;
  line-height: 1;
  font-weight: 860;
  box-shadow: 0 8px 18px rgba(31, 101, 178, .09);
}
.sk2-outline-cta svg {
  width: 34px;
  height: 34px;
}
.sk2-outline-cta span {
  text-align: center;
}
.sk2-outline-cta svg:last-child {
  justify-self: end;
}

.sk2-primary-cta {
  height: 91px;
  margin: 0 27px 26px;
  padding: 0 36px 0 29px;
  border-radius: 17px;
  display: grid;
  grid-template-columns: 62px 1fr 48px;
  align-items: center;
  color: #fff;
  background: linear-gradient(180deg, #0a70e3, #0057d7);
  box-shadow: 0 15px 27px rgba(0, 84, 199, .28);
  transition: transform .18s ease, filter .18s ease;
}
.sk2-primary-cta:hover,
.sk2-outline-cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}
.sk2-primary-cta svg:first-child {
  width: 56px;
  height: 56px;
  opacity: .9;
}
.sk2-primary-cta span {
  text-align: center;
  font-size: 32px;
  line-height: 1;
  font-weight: 920;
  letter-spacing: -.8px;
}
.sk2-primary-cta svg:last-child {
  width: 43px;
  height: 43px;
  justify-self: end;
}

@media (max-width: 820px) {
  .sk-page { border-radius: 0; }
  .sk-hero {
    min-height: 690px;
    padding: 52px 18px 0;
  }
  .sk-hero-copy {
    width: 100%;
    padding-left: 0;
  }
  .sk-hero-copy h1 {
    font-size: clamp(42px, 10vw, 61px);
  }
  .sk-hero-copy p {
    max-width: 490px;
    font-size: 22px;
  }
  .sk2-hero-art {
    transform: scale(.82);
    transform-origin: center top;
    width: 116%;
    left: -8%;
    top: 100px;
  }
  .sk2-checklist-section {
    padding: 0 18px;
  }
  .sk2-checklist-card {
    grid-template-columns: 82px 1fr 45px;
    gap: 20px;
    padding: 16px 22px 16px 18px;
  }
  .sk2-checklist-icon {
    width: 82px;
    height: 82px;
    font-size: 48px;
  }
  .sk2-checklist-card h2 {
    font-size: 24px;
  }
  .sk2-outline-cta {
    width: calc(100% - 60px);
  }
  .sk2-primary-cta {
    margin-left: 18px;
    margin-right: 18px;
  }
}

@media (max-width: 520px) {
  .sk-hero {
    min-height: 620px;
  }
  .sk-hero-copy h1 {
    font-size: 40px;
  }
  .sk-hero-copy p {
    font-size: 18px;
  }
  .sk2-hero-art {
    transform: scale(.62);
    width: 150%;
    left: -25%;
    top: 118px;
  }
  .sk2-checklist-card {
    min-height: 104px;
    grid-template-columns: 62px 1fr 38px;
    gap: 15px;
    border-radius: 18px;
  }
  .sk2-checklist-icon {
    width: 62px;
    height: 62px;
    border-radius: 16px;
    font-size: 37px;
  }
  .sk2-checklist-card h2 {
    font-size: 18px;
  }
  .sk2-check-mark {
    width: 38px;
    height: 38px;
    font-size: 24px;
  }
  .sk2-outline-cta {
    width: calc(100% - 36px);
    height: 58px;
    grid-template-columns: 32px 1fr 30px;
    padding: 0 20px;
    font-size: 19px;
  }
  .sk2-primary-cta {
    height: 78px;
    grid-template-columns: 48px 1fr 38px;
    padding: 0 22px;
  }
  .sk2-primary-cta span {
    font-size: 25px;
  }
  .sk2-primary-cta svg:first-child {
    width: 46px;
    height: 46px;
  }
}


.sk-page-bg--embedded {
  min-height: auto;
  display: block;
  background: transparent;
}

.sk-page--embedded {
  width: 100%;
  min-height: auto;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  overflow: visible;
}

.sk-page--embedded .sk-hero {
  margin-top: 10px;
  padding-top: 70px;
}

.sk-page--embedded .sk2-checklist-section {
  padding-left: 0;
  padding-right: 0;
}

.sk-page--embedded .sk2-primary-cta {
  margin-left: 0;
  margin-right: 0;
}

`;
