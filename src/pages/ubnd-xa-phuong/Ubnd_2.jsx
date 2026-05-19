import React from "react";

const prepareItems = [
  {
    icon: <ListUserIcon />,
    text: "Chuẩn hóa danh sách hộ và số điện thoại",
  },
  {
    icon: <MessageBellIcon />,
    text: "Chuẩn bị nội dung nhắn tin, thông báo",
  },
  {
    icon: <MapPinIcon />,
    text: "Chốt địa điểm buổi ra quân",
  },
  {
    icon: <HandshakeIcon />,
    text: "Chốt đầu mối với Tổ CNSCĐ và EFFECT",
  },
  {
    icon: <MegaphonePeopleIcon />,
    text: "Xác định vị trí truyền thông cộng đồng",
  },
];

export default function UBNDPreparePage() {
  return (
    <section className="ubnd-prepare-page" aria-label="Địa phương cần chuẩn bị gì">
      <style>{css}</style>

      <div className="ubnd-prepare-inner">
        <section className="ubnd-prepare-hero">
          <div className="ubnd-prepare-copy">
            <div className="ubnd-prepare-pill">MÀN 2</div>
            <h1>Địa phương cần chuẩn bị gì?</h1>
            <p>
              UBND xã/phường là lực lượng tổ chức tại chỗ, giúp chương trình đi vào đúng địa bàn, đúng hộ và đúng thời điểm.
            </p>
          </div>

          <UBNDPrepareBuilding />
        </section>

        <section id="ubnd-checklist" className="ubnd-prepare-checklist" aria-label="Checklist chuẩn bị của địa phương">
          {prepareItems.map((item) => (
            <article className="ubnd-prepare-card" key={item.text}>
              <div className="ubnd-prepare-card-icon">{item.icon}</div>
              <h2>{item.text}</h2>
              <div className="ubnd-prepare-check"><CheckIcon /></div>
            </article>
          ))}
        </section>

        <a href="#ubnd-ngay-ra-quan" className="ubnd-prepare-cta">
          <ClipboardIcon />
          <span>Xem việc cần chuẩn bị</span>
          <ArrowRightIcon />
        </a>
      </div>

      <footer className="ubnd-prepare-footer">
        <div className="ubnd-prepare-footer-logo"><HexLogoIcon /></div>
        <div>
          <strong>HKDO</strong>
          <p>Đồng hành cùng hộ kinh doanh<br />Chuyển đổi - Minh bạch - Phát triển</p>
        </div>
        <div className="ubnd-prepare-footer-art">
          <div className="store" />
          <div className="phone-qr" />
        </div>
      </footer>
    </section>
  );
}

function UBNDPrepareBuilding() {
  return (
    <div className="ubnd-prepare-art" aria-hidden="true">
      <div className="ubnd-prepare-cloud cloud-a" />
      <div className="ubnd-prepare-cloud cloud-b" />
      <div className="ubnd-prepare-skyline skyline-a"><i /><i /><i /></div>
      <div className="ubnd-prepare-skyline skyline-b"><i /><i /><i /></div>
      <div className="ubnd-prepare-tree tree-left" />
      <div className="ubnd-prepare-tree tree-right" />
      <div className="ubnd-prepare-bush bush-left" />
      <div className="ubnd-prepare-bush bush-right" />
      <div className="ubnd-prepare-building">
        <div className="flag-pole" />
        <div className="flag-vn">★</div>
        <div className="roof"><span /></div>
        <div className="sign">UBND<br />XÃ / PHƯỜNG</div>
        <div className="body">
          <div className="columns"><i /><i /><i /><i /></div>
          <div className="windows">
            {Array.from({ length: 8 }).map((_, index) => <b key={index} />)}
          </div>
          <div className="door" />
        </div>
        <div className="steps" />
      </div>
    </div>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function CheckIcon() {
  return <Svg><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></Svg>;
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
  return <Svg><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>;
}

function ListUserIcon() {
  return (
    <Svg>
      <path d="M6 3h11a2 2 0 0 1 2 2v16H6V3Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M9 8h5M9 12h4M9 16h4" stroke="#36b56f" strokeWidth="2.2" strokeLinecap="round" />
      <path d="m5 8 1.3 1.3L8.5 7M5 12l1.3 1.3L8.5 11M5 16l1.3 1.3L8.5 15" stroke="#36b56f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16.5" cy="15" r="3" fill="currentColor" />
      <path d="M12.5 22c.4-3.2 1.9-4.9 4-4.9 2.2 0 3.8 1.7 4.1 4.9" fill="currentColor" />
      <path d="M9 2h6v3H9V2Z" fill="currentColor" />
    </Svg>
  );
}

function MessageBellIcon() {
  return (
    <Svg>
      <path d="M4 5h12a4 4 0 0 1 4 4v1.7a4 4 0 0 1-4 4h-5l-5 4v-4H4V5Z" fill="currentColor" />
      <path d="M8 10h.1M12 10h.1M16 10h.1" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M17 15.5a3.5 3.5 0 0 1 7 0c0 3-1.4 3.1-1.4 4h-4.2c0-.9-1.4-1-1.4-4Z" fill="#ffb22a" transform="translate(-1 0)" />
      <path d="M18.5 20.5h3" stroke="#c97800" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

function MapPinIcon() {
  return (
    <Svg>
      <path d="M4 16.5 9 14l5 2.5 6-3v6L14 22l-5-2.5L4 22v-5.5Z" fill="#8ed7a0" />
      <path d="M12 17.5V14M9 14v5.5M14 16.5V22" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 15s6-5.7 6-10A6 6 0 1 0 6 5c0 4.3 6 10 6 10Z" fill="#ef3827" />
      <circle cx="12" cy="5" r="2.1" fill="#fff" />
    </Svg>
  );
}

function HandshakeIcon() {
  return (
    <Svg>
      <path d="M7.5 9.5 11 6h3.5l4.5 4.5-2.7 2.7L13 10l-2 2 4 4-2 2-2.2-2.2-1.8 1.8-2-2 1.7-1.7-2.2-2.2 1-2.2Z" fill="#ffc17f" />
      <path d="m3 8 4-4 4 4-4 4-4-4Zm10 0 4-4 4 4-4 4-4-4Z" fill="currentColor" />
    </Svg>
  );
}

function MegaphonePeopleIcon() {
  return (
    <Svg>
      <path d="M4 13h3l8 3.5v-9L7 11H4v2Z" fill="currentColor" />
      <path d="M18 9.5c1 1.4 1 4.2 0 5.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="7" cy="18" r="2" fill="#55bd62" />
      <circle cx="12" cy="18" r="2" fill="#1974e8" />
      <circle cx="17" cy="18" r="2" fill="#55bd62" />
      <path d="M3.7 22c.2-1.8 1.4-2.8 3.3-2.8s3.1 1 3.3 2.8H3.7Zm5.1 0c.2-1.8 1.4-2.8 3.2-2.8 1.9 0 3.1 1 3.3 2.8H8.8Zm5.1 0c.2-1.8 1.4-2.8 3.2-2.8 1.9 0 3.1 1 3.3 2.8h-6.5Z" fill="#55bd62" />
    </Svg>
  );
}

function HexLogoIcon() {
  return (
    <Svg viewBox="0 0 80 80">
      <path d="M40 8 14 23v34l26 15 26-15V23L40 8Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <text x="40" y="47" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="900">HKDO</text>
    </Svg>
  );
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

.ubnd-prepare-page {
  position: relative;
  width: 100%;
  min-height: 1515px;
  overflow: hidden;
  background:
    radial-gradient(circle at 51% 9%, rgba(255,255,255,.96) 0 16%, rgba(255,255,255,0) 39%),
    linear-gradient(180deg, #f9fdff 0%, #edf8ff 66%, #f6fbff 100%);
}

.ubnd-prepare-inner {
  position: relative;
  z-index: 2;
  min-height: 1360px;
  margin: 14px 15px 0;
  border-radius: 28px 28px 0 0;
  overflow: hidden;
  background: rgba(255,255,255,.5);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.7);
}

.ubnd-prepare-hero {
  position: relative;
  min-height: 455px;
  padding: 27px 52px 0;
}

.ubnd-prepare-copy {
  position: relative;
  z-index: 5;
  width: 500px;
}
.ubnd-prepare-pill {
  width: 157px;
  height: 54px;
  margin: 0 0 27px 327px;
  border-radius: 18px;
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
.ubnd-prepare-copy h1 {
  margin: 0 0 30px;
  color: #10175c;
  font-size: 66px;
  line-height: 1.05;
  font-weight: 950;
  letter-spacing: -3px;
}
.ubnd-prepare-copy p {
  margin: 0;
  width: 430px;
  color: #253252;
  font-size: 25px;
  line-height: 1.45;
  font-weight: 500;
}

.ubnd-prepare-art {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.ubnd-prepare-cloud,
.ubnd-prepare-cloud::before,
.ubnd-prepare-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.95);
}
.ubnd-prepare-cloud.cloud-a { right: 92px; top: 74px; width: 100px; height: 18px; }
.ubnd-prepare-cloud.cloud-a::before { width: 42px; height: 42px; left: 18px; top: -23px; }
.ubnd-prepare-cloud.cloud-a::after { width: 62px; height: 62px; left: 48px; top: -37px; }
.ubnd-prepare-cloud.cloud-b { right: 214px; top: 121px; width: 45px; height: 9px; opacity: .75; }
.ubnd-prepare-cloud.cloud-b::before { width: 19px; height: 19px; left: 10px; top: -9px; }
.ubnd-prepare-cloud.cloud-b::after { width: 24px; height: 24px; left: 24px; top: -14px; }
.ubnd-prepare-skyline { position: absolute; display: flex; align-items: flex-end; gap: 13px; opacity: .46; }
.ubnd-prepare-skyline.skyline-a { right: 30px; top: 129px; }
.ubnd-prepare-skyline.skyline-b { right: 250px; top: 187px; }
.ubnd-prepare-skyline i { display: block; width: 42px; height: 106px; border-radius: 12px 12px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.2), rgba(85,154,219,.06)); }
.ubnd-prepare-skyline i:nth-child(2) { height: 143px; }
.ubnd-prepare-skyline i:nth-child(3) { height: 84px; }
.ubnd-prepare-building {
  position: absolute;
  right: 27px;
  top: 145px;
  width: 395px;
  height: 286px;
  filter: drop-shadow(0 14px 18px rgba(28,104,196,.15));
}
.ubnd-prepare-building .flag-pole { position: absolute; right: 123px; top: 0; width: 4px; height: 74px; background: #1768d2; border-radius: 999px; }
.ubnd-prepare-building .flag-vn { position: absolute; right: 60px; top: 11px; width: 64px; height: 43px; border-radius: 2px 12px 12px 2px; display: grid; place-items: center; color: #ffe33b; background: #e93c20; transform: skewY(5deg); }
.ubnd-prepare-building .roof { position: absolute; left: 55px; top: 59px; width: 285px; height: 90px; clip-path: polygon(50% 0, 100% 70%, 94% 100%, 6% 100%, 0 70%); background: linear-gradient(180deg, #dcebff, #84bffc 60%, #4b94ea); }
.ubnd-prepare-building .sign { position: absolute; z-index: 5; left: 134px; top: 120px; width: 130px; height: 67px; border-radius: 5px; display: grid; place-items: center; color: #fff; background: linear-gradient(180deg, #1370d7, #075ab8); font-size: 21px; line-height: 1.05; font-weight: 950; text-align: center; box-shadow: inset 0 0 0 2px rgba(255,255,255,.17); }
.ubnd-prepare-building .body { position: absolute; left: 28px; top: 141px; width: 340px; height: 124px; border-radius: 9px 9px 2px 2px; background: linear-gradient(180deg, #d5eaff, #7ebdf9); border-top: 9px solid #2379d7; }
.ubnd-prepare-building .columns { position: absolute; left: 101px; right: 101px; top: -3px; display: grid; grid-template-columns: repeat(4,1fr); gap: 13px; }
.ubnd-prepare-building .columns i { height: 125px; border-radius: 4px 4px 0 0; background: linear-gradient(90deg, #f2f9ff, #8cc5fb, #e8f5ff); }
.ubnd-prepare-building .windows { position: absolute; inset: 28px 18px 20px; display: grid; grid-template-columns: repeat(4,1fr); gap: 12px 54px; }
.ubnd-prepare-building .windows b { height: 31px; border-radius: 3px; background: linear-gradient(180deg, #65b8ff, #126ed3); }
.ubnd-prepare-building .door { position: absolute; left: 151px; bottom: 0; width: 39px; height: 60px; border-radius: 16px 16px 0 0; background: #064f9a; }
.ubnd-prepare-building .steps { position: absolute; left: 76px; right: 76px; bottom: 5px; height: 22px; border-radius: 4px; background: linear-gradient(180deg, #c7e4ff, #8cc8ff); box-shadow: 0 10px 0 rgba(112,179,239,.45); }
.ubnd-prepare-tree { position: absolute; width: 55px; height: 92px; border-radius: 44px 44px 14px 14px; background: linear-gradient(180deg, #76d28a, #3ba96a); z-index: 2; }
.ubnd-prepare-tree::before { content: ""; position: absolute; left: 26px; top: 38px; width: 4px; height: 52px; border-radius: 999px; background: #267556; }
.ubnd-prepare-tree.tree-left { right: 354px; top: 286px; }
.ubnd-prepare-tree.tree-right { right: 15px; top: 296px; }
.ubnd-prepare-bush { position: absolute; width: 104px; height: 39px; border-radius: 80px 80px 0 0; background: linear-gradient(180deg, #71ce84, #39a86a); z-index: 2; }
.ubnd-prepare-bush.bush-left { right: 317px; top: 363px; }
.ubnd-prepare-bush.bush-right { right: 9px; top: 373px; }

.ubnd-prepare-checklist {
  position: relative;
  z-index: 7;
  padding: 0 44px;
  display: grid;
  gap: 14px;
  scroll-margin-top: 18px;
}
.ubnd-prepare-card {
  min-height: 142px;
  padding: 16px 38px 16px 28px;
  border-radius: 18px;
  display: grid;
  grid-template-columns: 139px 1fr 82px;
  align-items: center;
  gap: 32px;
  background: rgba(255,255,255,.97);
  box-shadow: 0 14px 29px rgba(31,101,178,.13);
}
.ubnd-prepare-card-icon {
  width: 108px;
  height: 108px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  color: #126fe5;
  background: #e9f5ff;
  font-size: 77px;
}
.ubnd-prepare-card h2 {
  margin: 0;
  color: #10175c;
  font-size: 31px;
  line-height: 1.2;
  font-weight: 920;
  letter-spacing: -.5px;
}
.ubnd-prepare-check {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #075fd5;
  background: #dff0ff;
  font-size: 51px;
  justify-self: end;
}

.ubnd-prepare-cta {
  width: 648px;
  height: 95px;
  margin: 24px auto 54px;
  border-radius: 44px;
  display: grid;
  grid-template-columns: 70px 1fr 56px;
  align-items: center;
  padding: 0 42px 0 63px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 13px 0 #00449d, 0 19px 26px rgba(0,76,180,.24);
  transition: transform .18s ease, filter .18s ease;
}
.ubnd-prepare-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.ubnd-prepare-cta svg:first-child { width: 47px; height: 47px; justify-self: center; }
.ubnd-prepare-cta span { text-align: center; font-size: 34px; line-height: 1; font-weight: 920; letter-spacing: -.6px; }
.ubnd-prepare-cta svg:last-child { width: 42px; height: 42px; justify-self: end; }

.ubnd-prepare-footer {
  position: relative;
  z-index: 1;
  min-height: 118px;
  margin-top: 8px;
  padding: 18px 42px;
  display: grid;
  grid-template-columns: 112px 1fr 260px;
  align-items: center;
  gap: 14px;
  color: #fff;
  background:
    radial-gradient(circle at 90% 0%, rgba(93,178,255,.45), transparent 34%),
    linear-gradient(180deg, #0677e6, #0059cb);
}
.ubnd-prepare-footer::before {
  content: "";
  position: absolute;
  left: -40px;
  right: -40px;
  top: -8px;
  height: 22px;
  border-radius: 0 0 50% 50%;
  background: #f6fbff;
}
.ubnd-prepare-footer-logo {
  position: relative;
  z-index: 2;
  width: 96px;
  height: 96px;
  display: grid;
  place-items: center;
  font-size: 96px;
  justify-self: center;
}
.ubnd-prepare-footer-logo svg {
  width: 96px;
  height: 96px;
  overflow: visible;
}
.ubnd-prepare-footer > div:nth-of-type(2) {
  position: relative;
  z-index: 2;
  text-align: center;
  justify-self: center;
}
.ubnd-prepare-footer strong {
  position: relative;
  z-index: 2;
  display: block;
  font-size: 36px;
  line-height: 1;
  font-weight: 950;
}
.ubnd-prepare-footer p {
  position: relative;
  z-index: 2;
  margin: 7px 0 0;
  font-size: 15px;
  line-height: 1.35;
  font-weight: 520;
}
.ubnd-prepare-footer-art {
  position: relative;
  z-index: 2;
  height: 92px;
  opacity: .42;
}
.ubnd-prepare-footer-art .store {
  position: absolute;
  right: 34px;
  bottom: 0;
  width: 125px;
  height: 88px;
  border-radius: 8px 8px 0 0;
  border: 3px solid rgba(255,255,255,.55);
}
.ubnd-prepare-footer-art .store::before {
  content: "";
  position: absolute;
  left: -7px;
  right: -7px;
  top: -31px;
  height: 35px;
  border-radius: 14px 14px 6px 6px;
  background: repeating-linear-gradient(90deg, rgba(255,255,255,.55) 0 18px, rgba(255,255,255,.12) 18px 36px);
}
.ubnd-prepare-footer-art .phone-qr {
  position: absolute;
  right: 10px;
  bottom: 9px;
  width: 42px;
  height: 70px;
  border-radius: 8px;
  border: 3px solid rgba(255,255,255,.55);
}
.ubnd-prepare-footer-art .phone-qr::before {
  content: "QR";
  position: absolute;
  inset: 17px 7px;
  display: grid;
  place-items: center;
  color: rgba(255,255,255,.8);
  font-size: 10px;
  font-weight: 900;
}

@media (max-width: 820px) {
  .ubnd-prepare-page { min-height: 1320px; }
  .ubnd-prepare-inner { min-height: 1200px; margin-left: 10px; margin-right: 10px; }
  .ubnd-prepare-hero { min-height: 520px; padding: 25px 28px 0; }
  .ubnd-prepare-copy { width: 100%; }
  .ubnd-prepare-pill { margin-left: auto; margin-right: auto; }
  .ubnd-prepare-copy h1 { font-size: clamp(44px, 10vw, 66px); }
  .ubnd-prepare-copy p { width: min(100%, 430px); font-size: 22px; }
  .ubnd-prepare-art { transform: scale(.82); transform-origin: center top; width: 116%; left: -8%; top: 92px; }
  .ubnd-prepare-checklist { padding: 0 28px; }
  .ubnd-prepare-card { grid-template-columns: 98px 1fr 62px; gap: 22px; }
  .ubnd-prepare-card-icon { width: 88px; height: 88px; font-size: 60px; }
  .ubnd-prepare-card h2 { font-size: 25px; }
  .ubnd-prepare-check { width: 58px; height: 58px; font-size: 42px; }
  .ubnd-prepare-cta { width: calc(100% - 90px); }
}

@media (max-width: 520px) {
  .ubnd-prepare-page { min-height: 1185px; }
  .ubnd-prepare-inner { min-height: 1065px; }
  .ubnd-prepare-hero { min-height: 455px; padding-left: 18px; padding-right: 18px; }
  .ubnd-prepare-pill { width: 132px; height: 48px; font-size: 24px; }
  .ubnd-prepare-copy h1 { font-size: 39px; }
  .ubnd-prepare-copy p { font-size: 18px; }
  .ubnd-prepare-art { transform: scale(.62); width: 150%; left: -25%; top: 116px; }
  .ubnd-prepare-checklist { padding: 0 18px; gap: 11px; }
  .ubnd-prepare-card { min-height: 104px; grid-template-columns: 64px 1fr 42px; gap: 14px; padding: 14px 18px; }
  .ubnd-prepare-card-icon { width: 62px; height: 62px; border-radius: 15px; font-size: 40px; }
  .ubnd-prepare-card h2 { font-size: 18px; }
  .ubnd-prepare-check { width: 40px; height: 40px; font-size: 29px; }
  .ubnd-prepare-cta { width: calc(100% - 56px); height: 72px; grid-template-columns: 42px 1fr 34px; padding: 0 24px; }
  .ubnd-prepare-cta span { font-size: 23px; }
  .ubnd-prepare-footer { grid-template-columns: 86px 1fr; padding: 16px 22px; min-height: 100px; }
  .ubnd-prepare-footer-logo { width: 80px; height: 80px; font-size: 80px; }
  .ubnd-prepare-footer-logo svg { width: 80px; height: 80px; }
  .ubnd-prepare-footer strong { font-size: 28px; }
  .ubnd-prepare-footer p { font-size: 13px; }
  .ubnd-prepare-footer-art { display: none; }
}
`;
