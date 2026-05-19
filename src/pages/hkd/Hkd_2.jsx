import React from "react";

const knowItems = [
  {
    icon: <PeopleIcon />,
    text: "Có thể tham gia trực tiếp hoặc trực tuyến",
  },
  {
    icon: <GlobeIcon />,
    text: <>Vào <strong>HKDO.vn</strong><br />để đăng ký</>,
  },
  {
    icon: <StoreFrontIcon />,
    text: "Tự mở cửa hàng theo hướng dẫn",
  },
  {
    icon: <StepsIcon />,
    text: "Sau đó đi qua chuỗi thao tác cốt lõi",
  },
  {
    icon: <QrIcon />,
    text: "Nhận QR để tự công bố tại điểm bán",
  },
];

export default function HKDKnowBeforePage() {
  return (
    <section id="hkd-bat-dau" className="hkd-know-page" aria-label="Hộ kinh doanh cần biết gì trước khi bắt đầu">
      <style>{css}</style>

      <section className="hkd-know-heading">
        <div className="hkd-know-pill">MÀN 2</div>
        <h1>Anh/chị cần biết gì trước khi bắt đầu?</h1>
        <p>HKDO được thiết kế để hộ kinh doanh có thể tự làm được bằng điện thoại, nhanh, rõ và có hỗ trợ liên tục.</p>
      </section>

      <section className="hkd-know-body">
        <section className="hkd-know-list" aria-label="Các thông tin cần biết trước khi bắt đầu">
          {knowItems.map((item) => (
            <article className="hkd-know-item" key={typeof item.text === "string" ? item.text : "HKDO.vn"}>
              <div className="hkd-know-check"><CheckIcon /></div>
              <div className="hkd-know-icon">{item.icon}</div>
              <h2>{item.text}</h2>
            </article>
          ))}
        </section>

        <HeroIllustration />
      </section>

      <a href="#hkd-video-huong-dan" className="hkd-know-video-btn">
        <PlayIcon />
        <span>Xem 1+10 phút gồm những gì</span>
      </a>

      <section className="hkd-know-bottom-card">
        <a href="#hkd-chuoi-1-10" className="hkd-know-cta">
          <RocketIcon />
          <span>Bắt đầu ngay</span>
        </a>

        <footer className="hkd-know-footer-brand">
          <div className="hkd-know-footer-logo">HKDO</div>
          <span>HKDO - Nền tảng số cho hộ kinh doanh</span>
        </footer>
      </section>
    </section>
  );
}

function HeroIllustration() {
  return (
    <section className="hkd-know-art" aria-hidden="true">
      <div className="hkd-know-city city-left"><i /><i /><i /></div>
      <div className="hkd-know-city city-right"><i /><i /><i /></div>
      <div className="hkd-know-cloud cloud-a" />
      <div className="hkd-know-cloud cloud-b" />
      <div className="hkd-know-tree tree-left" />
      <div className="hkd-know-tree tree-right" />
      <div className="hkd-know-plant" />

      <div className="hkd-know-shop">
        <div className="hkd-know-shop-sign">CỬA HÀNG<br />HỘ KINH DOANH</div>
        <div className="hkd-know-awning" />
        <div className="hkd-know-shop-window">
          {Array.from({ length: 18 }).map((_, index) => <i key={index} />)}
        </div>
      </div>

      <div className="hkd-know-owner">
        <div className="hair" />
        <div className="face" />
        <div className="neck" />
        <div className="shirt" />
        <div className="apron" />
        <div className="arm-left" />
        <div className="arm-right" />
      </div>

      <div className="hkd-know-phone">
        <div className="phone-top">HKDO</div>
        <strong>Bắt đầu<br />cùng HKDO</strong>
        <p><b>1</b>Đăng ký</p>
        <p><b>2</b>Mở cửa hàng</p>
        <p><b>3</b>Thao tác cốt lõi</p>
        <p><b>4</b>Nhận QR</p>
        <button>Tiếp tục</button>
      </div>

      <div className="hkd-know-qr-stand">
        <div>QUÉT MÃ QR<br />TẠI ĐIỂM BÁN</div>
        <QrGraphic />
        <strong>HKDO</strong>
      </div>
    </section>
  );
}

function QrGraphic() {
  return (
    <svg className="hkd-know-qr-graphic" viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="5" fill="#fff" />
      {[
        [10, 10], [18, 10], [26, 10], [10, 18], [26, 18], [10, 26], [18, 26], [26, 26],
        [64, 10], [72, 10], [80, 10], [64, 18], [80, 18], [64, 26], [72, 26], [80, 26],
        [10, 64], [18, 64], [26, 64], [10, 72], [26, 72], [10, 80], [18, 80], [26, 80],
        [42, 42], [50, 42], [66, 42], [42, 50], [58, 50], [74, 50], [50, 58], [66, 58],
        [42, 66], [58, 66], [82, 66], [50, 74], [66, 74], [74, 82], [42, 82], [58, 82],
      ].map(([x, y], index) => <rect key={index} x={x} y={y} width="7" height="7" fill="#0b1b3d" />)}
    </svg>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function CheckIcon() {
  return <Svg><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="m7.5 12.2 2.8 2.8 6.2-6.7" stroke="#fff" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"/></Svg>;
}
function PeopleIcon() {
  return <Svg><circle cx="12" cy="8" r="3.2" fill="currentColor"/><circle cx="5.8" cy="10" r="2.6" fill="currentColor" opacity=".82"/><circle cx="18.2" cy="10" r="2.6" fill="currentColor" opacity=".82"/><path d="M4 21c.5-4.5 3-6.7 8-6.7s7.5 2.2 8 6.7H4Z" fill="currentColor"/></Svg>;
}
function GlobeIcon() {
  return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4"/><path d="M3 12h18M12 3c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></Svg>;
}
function StoreFrontIcon() {
  return <Svg><path d="M4 10h16l-2-5H6l-2 5Z" fill="currentColor" opacity=".22"/><path d="M5 10v10h14V10M8 20v-6h4v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><path d="M4 10c.5 2 2.5 2.7 4 1 1.3 1.8 3.7 1.8 5 0 1.3 1.8 3.7 1.8 5 0 1.5 1.7 3.5 1 4-1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>;
}
function StepsIcon() {
  return <Svg><path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><text x="2.3" y="8.4" fontSize="5.5" fontWeight="900" fill="currentColor">1</text><text x="2.3" y="13.4" fontSize="5.5" fontWeight="900" fill="currentColor">2</text><text x="2.3" y="18.4" fontSize="5.5" fontWeight="900" fill="currentColor">3</text></Svg>;
}
function QrIcon() {
  return <Svg><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor"/></Svg>;
}
function PlayIcon() {
  return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4"/><path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor"/></Svg>;
}
function RocketIcon() {
  return <Svg><path d="M13 4c3.2 1 5.4 3.2 6.4 6.4l-5.6 5.6-4.4-4.4L13 4Z" fill="currentColor"/><path d="M8.8 12.2 5 13l-2 4 4-.8M11.8 15.2 11 19l-4 2 .8-4" fill="currentColor" opacity=".85"/><circle cx="15" cy="9" r="1.8" fill="#fff"/></Svg>;
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

.hkd-know-page {
  position: relative;
  width: 100%;
  min-height: 1518px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 2%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 55%, #fbfdff 100%);
}
.hkd-know-heading {
  position: relative;
  z-index: 8;
  width: 760px;
  margin: 0 auto;
  padding-top: 36px;
  text-align: center;
}
.hkd-know-pill {
  width: 127px;
  height: 44px;
  margin: 0 auto 25px;
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
.hkd-know-heading h1 {
  width: 760px;
  margin: 0 auto 24px;
  color: #075bd2;
  font-size: 67px;
  line-height: 1.14;
  font-weight: 950;
  letter-spacing: -3px;
}
.hkd-know-heading p {
  width: 620px;
  margin: 0 auto;
  color: #343948;
  font-size: 26px;
  line-height: 1.38;
  font-weight: 500;
}

.hkd-know-body {
  position: relative;
  z-index: 3;
  min-height: 738px;
  margin-top: 18px;
}
.hkd-know-list {
  position: relative;
  z-index: 12;
  width: 405px;
  margin-left: 31px;
  padding-top: 14px;
  display: grid;
  gap: 14px;
}
.hkd-know-item {
  min-height: 122px;
  padding: 19px 22px 18px 26px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 38px 92px 1fr;
  align-items: center;
  gap: 16px;
  background: rgba(255,255,255,.97);
  box-shadow: 0 13px 27px rgba(31,101,178,.11);
}
.hkd-know-check {
  width: 38px;
  height: 38px;
  color: #075bd2;
}
.hkd-know-icon {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #eaf5ff;
  font-size: 58px;
}
.hkd-know-item h2 {
  margin: 0;
  color: #23283c;
  font-size: 24px;
  line-height: 1.25;
  font-weight: 520;
  letter-spacing: -.2px;
}
.hkd-know-item h2 strong {
  color: #075bd2;
  font-weight: 850;
}

.hkd-know-art {
  position: absolute;
  z-index: 3;
  inset: 0;
  overflow: hidden;
}
.hkd-know-art::before {
  content: "";
  position: absolute;
  right: -55px;
  bottom: 20px;
  width: 630px;
  height: 505px;
  border-radius: 60% 0 0 0;
  background: linear-gradient(180deg, rgba(206,238,255,.72), rgba(255,255,255,.12));
}
.hkd-know-city { position: absolute; display: flex; align-items: flex-end; gap: 10px; opacity: .42; }
.hkd-know-city.city-left { left: 402px; top: 120px; }
.hkd-know-city.city-right { right: 53px; top: 130px; }
.hkd-know-city i {
  width: 36px;
  height: 83px;
  border-radius: 9px 9px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.22), rgba(85,154,219,.06));
}
.hkd-know-city i:nth-child(2) { height: 124px; }
.hkd-know-city i:nth-child(3) { height: 96px; }
.hkd-know-cloud,
.hkd-know-cloud::before,
.hkd-know-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.94);
}
.hkd-know-cloud.cloud-a { right: 7px; top: 92px; width: 112px; height: 22px; }
.hkd-know-cloud.cloud-a::before { width: 46px; height: 46px; left: 20px; top: -24px; }
.hkd-know-cloud.cloud-a::after { width: 65px; height: 65px; left: 57px; top: -40px; }
.hkd-know-cloud.cloud-b { left: 457px; top: 185px; width: 78px; height: 15px; opacity: .86; }
.hkd-know-cloud.cloud-b::before { width: 33px; height: 33px; left: 15px; top: -16px; }
.hkd-know-cloud.cloud-b::after { width: 47px; height: 47px; left: 39px; top: -28px; }
.hkd-know-tree {
  position: absolute;
  width: 68px;
  height: 137px;
  border-radius: 44px 44px 18px 18px;
  background: linear-gradient(180deg, #a6dc9f, #53b276);
}
.hkd-know-tree.tree-left { left: 455px; bottom: 126px; }
.hkd-know-tree.tree-right { right: 14px; bottom: 86px; }
.hkd-know-tree::after {
  content: "";
  position: absolute;
  left: 32px;
  top: 52px;
  width: 5px;
  height: 76px;
  border-radius: 999px;
  background: #307a58;
}
.hkd-know-plant {
  position: absolute;
  z-index: 7;
  right: 34px;
  bottom: 73px;
  width: 70px;
  height: 83px;
}
.hkd-know-plant::before,
.hkd-know-plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 39px;
  height: 73px;
  border-radius: 40px 40px 0 0;
  background: linear-gradient(180deg, #92d88f, #3ea869);
}
.hkd-know-plant::before { left: 2px; transform: rotate(-27deg); }
.hkd-know-plant::after { right: 2px; transform: rotate(26deg); }

.hkd-know-shop {
  position: absolute;
  z-index: 4;
  right: 38px;
  top: 142px;
  width: 358px;
  height: 425px;
  border-radius: 11px 11px 0 0;
  background: linear-gradient(180deg, #9bd1f7, #4e89be 30%, #254e7d 100%);
  box-shadow: 0 18px 30px rgba(24,74,139,.22);
}
.hkd-know-shop-sign {
  position: absolute;
  left: 7px;
  right: 7px;
  top: -1px;
  height: 83px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #2c6fbd, #1d559d);
  border: 5px solid rgba(255,255,255,.18);
  font-size: 23px;
  line-height: 1.08;
  font-weight: 950;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,50,120,.22);
}
.hkd-know-awning {
  position: absolute;
  left: 0;
  right: 0;
  top: 82px;
  height: 68px;
  background: repeating-linear-gradient(90deg, #11458d 0 44px, #315f9e 44px 88px);
  border-radius: 0 0 27px 27px;
}
.hkd-know-awning::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -21px;
  height: 37px;
  background: repeating-radial-gradient(circle at 44px 0, #315f9e 0 35px, #11458d 36px 70px);
  clip-path: inset(0 0 0 0 round 0 0 24px 24px);
}
.hkd-know-shop-window {
  position: absolute;
  left: 34px;
  right: 34px;
  bottom: 48px;
  height: 190px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding: 22px;
  border-radius: 12px;
  background: rgba(27,36,49,.48);
}
.hkd-know-shop-window i {
  border-radius: 4px 4px 12px 12px;
  background: linear-gradient(180deg, #ffcd74, #8d6331);
}

.hkd-know-owner {
  position: absolute;
  z-index: 9;
  right: 53px;
  bottom: 55px;
  width: 295px;
  height: 501px;
}
.hkd-know-owner .hair {
  position: absolute;
  left: 82px;
  top: 0;
  width: 133px;
  height: 94px;
  border-radius: 82px 82px 30px 30px;
  background: #16191c;
  transform: rotate(-7deg);
}
.hkd-know-owner .face {
  position: absolute;
  left: 108px;
  top: 76px;
  width: 90px;
  height: 113px;
  border-radius: 47%;
  background: #ffbd8c;
}
.hkd-know-owner .neck {
  position: absolute;
  left: 131px;
  top: 174px;
  width: 44px;
  height: 52px;
  background: #f4a979;
}
.hkd-know-owner .shirt {
  position: absolute;
  left: 48px;
  top: 203px;
  width: 212px;
  height: 245px;
  border-radius: 80px 80px 0 0;
  background: #fff;
}
.hkd-know-owner .apron {
  position: absolute;
  left: 84px;
  top: 225px;
  width: 137px;
  height: 274px;
  border-radius: 60px 60px 0 0;
  background: #102e5a;
}
.hkd-know-owner .apron::before,
.hkd-know-owner .apron::after {
  content: "";
  position: absolute;
  top: -31px;
  width: 18px;
  height: 102px;
  border-radius: 999px;
  background: #102e5a;
}
.hkd-know-owner .apron::before { left: 10px; transform: rotate(-18deg); }
.hkd-know-owner .apron::after { right: 10px; transform: rotate(18deg); }
.hkd-know-owner .arm-left {
  position: absolute;
  left: -31px;
  top: 284px;
  width: 118px;
  height: 36px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(-73deg);
}
.hkd-know-owner .arm-right {
  position: absolute;
  right: -1px;
  top: 289px;
  width: 105px;
  height: 36px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(-48deg);
}
.hkd-know-phone {
  position: absolute;
  z-index: 13;
  left: 448px;
  bottom: 178px;
  width: 123px;
  height: 255px;
  padding: 27px 11px 12px;
  border-radius: 21px;
  color: #133676;
  background: #111b2b;
  box-shadow: 0 16px 24px rgba(0,35,90,.28);
  transform: rotate(-8deg);
}
.hkd-know-phone::before {
  content: "";
  position: absolute;
  inset: 8px;
  border-radius: 14px;
  background: #fff;
}
.hkd-know-phone .phone-top,
.hkd-know-phone strong,
.hkd-know-phone p,
.hkd-know-phone button {
  position: relative;
  z-index: 3;
}
.hkd-know-phone .phone-top {
  height: 22px;
  text-align: center;
  color: #075bd2;
  font-size: 11px;
  font-weight: 950;
}
.hkd-know-phone strong {
  display: block;
  margin: 5px 0 9px;
  text-align: center;
  color: #1b2c5d;
  font-size: 14px;
  line-height: 1.12;
  font-weight: 950;
}
.hkd-know-phone p {
  margin: 7px 0;
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  gap: 6px;
  color: #293654;
  font-size: 8.5px;
  font-weight: 800;
}
.hkd-know-phone p b {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #1684eb;
  font-size: 9px;
}
.hkd-know-phone button {
  width: 84px;
  height: 28px;
  margin: 7px auto 0;
  border: 0;
  border-radius: 999px;
  display: block;
  color: #fff;
  background: #075bd2;
  font-size: 10px;
  font-weight: 900;
}
.hkd-know-qr-stand {
  position: absolute;
  z-index: 14;
  right: 55px;
  bottom: 53px;
  width: 112px;
  height: 159px;
  padding: 0 9px 8px;
  border-radius: 8px;
  text-align: center;
  background: #fff;
  border: 4px solid #4e91df;
  box-shadow: 0 14px 26px rgba(16,83,170,.18);
  transform: rotate(-4deg);
}
.hkd-know-qr-stand div {
  height: 42px;
  margin: -4px -9px 7px;
  border-radius: 8px 8px 0 0;
  display: grid;
  place-items: center;
  color: #fff;
  background: #116bd5;
  font-size: 10px;
  line-height: 1.15;
  font-weight: 950;
}
.hkd-know-qr-stand .hkd-know-qr-graphic {
  width: 76px;
  height: 76px;
  margin: 0 auto 6px;
}
.hkd-know-qr-stand strong {
  color: #075bd2;
  font-size: 17px;
  line-height: 1;
  font-weight: 950;
}

.hkd-know-video-btn {
  position: relative;
  z-index: 18;
  width: 500px;
  height: 81px;
  margin: 0 auto 22px;
  border-radius: 10px;
  border: 3px solid #075bd2;
  display: grid;
  grid-template-columns: 89px 1fr;
  align-items: center;
  padding: 0 35px;
  color: #075bd2;
  background: #fff;
  box-shadow: 0 10px 20px rgba(31,101,178,.08);
  font-size: 24px;
  line-height: 1;
  font-weight: 850;
  transition: transform .18s ease, filter .18s ease;
}
.hkd-know-video-btn:hover,
.hkd-know-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.hkd-know-video-btn svg {
  width: 48px;
  height: 48px;
  justify-self: center;
}
.hkd-know-bottom-card {
  position: relative;
  z-index: 18;
  width: calc(100% - 34px);
  margin: 0 auto;
  min-height: 164px;
  padding: 16px 18px 0;
  border-radius: 20px;
  background: rgba(255,255,255,.96);
  box-shadow: 0 10px 25px rgba(31,101,178,.11);
}
.hkd-know-cta {
  height: 86px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 300px 1fr 270px;
  align-items: center;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 12px 22px rgba(0,76,180,.22);
  font-size: 33px;
  line-height: 1;
  font-weight: 950;
  transition: transform .18s ease, filter .18s ease;
}
.hkd-know-cta svg {
  width: 57px;
  height: 57px;
  justify-self: end;
  margin-right: 23px;
}
.hkd-know-cta span { justify-self: start; }
.hkd-know-footer-brand {
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #242b40;
}
.hkd-know-footer-logo {
  width: 54px;
  height: 54px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #075bd2;
  font-size: 16px;
  font-weight: 950;
}
.hkd-know-footer-brand span {
  font-size: 21px;
  line-height: 1;
  font-weight: 650;
}

@media (max-width: 820px) {
  .hkd-know-page { min-height: 1370px; }
  .hkd-know-heading { width: calc(100% - 40px); }
  .hkd-know-heading h1 { width: 100%; font-size: clamp(45px, 10vw, 67px); }
  .hkd-know-heading p { width: min(100%, 620px); font-size: 22px; }
  .hkd-know-body { transform: scale(.88); transform-origin: top center; width: 114%; margin-left: -7%; min-height: 660px; }
  .hkd-know-video-btn { margin-top: -15px; }
  .hkd-know-cta { grid-template-columns: 1fr 1fr 1fr; }
}

@media (max-width: 520px) {
  .hkd-know-page { min-height: 1240px; }
  .hkd-know-heading { padding-top: 28px; }
  .hkd-know-pill { width: 105px; height: 38px; font-size: 20px; }
  .hkd-know-heading h1 { font-size: 37px; }
  .hkd-know-heading p { font-size: 17px; }
  .hkd-know-body { transform: none; width: 100%; margin-left: 0; min-height: 640px; }
  .hkd-know-list { width: calc(100% - 34px); margin: 0 auto; gap: 10px; }
  .hkd-know-item { min-height: 82px; grid-template-columns: 34px 56px 1fr; gap: 11px; padding: 12px; }
  .hkd-know-icon { width: 54px; height: 54px; font-size: 37px; }
  .hkd-know-item h2 { font-size: 17px; }
  .hkd-know-art { transform: scale(.62); transform-origin: bottom right; right: -115px; top: 210px; left: auto; width: 760px; height: 540px; }
  .hkd-know-video-btn { width: calc(100% - 34px); height: 68px; grid-template-columns: 50px 1fr; font-size: 18px; padding: 0 20px; }
  .hkd-know-video-btn svg { width: 38px; height: 38px; }
  .hkd-know-bottom-card { width: calc(100% - 24px); min-height: 135px; }
  .hkd-know-cta { height: 70px; grid-template-columns: 74px 1fr; font-size: 24px; }
  .hkd-know-cta svg { justify-self: center; margin: 0; width: 39px; height: 39px; }
  .hkd-know-footer-brand span { font-size: 15px; }
}
`;
