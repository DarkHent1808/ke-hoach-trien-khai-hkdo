import React from "react";

const afterDoneItems = [
  { icon: <QrStandIcon />, text: "Nhận QR" },
  { icon: <StoreFrontIcon />, text: "Tự dán tại quầy, cửa, xe hoặc điểm giao hàng" },
  { icon: <EyeIcon />, text: "Giữ QR tại vị trí dễ thấy" },
  { icon: <BagGearIcon />, text: "Cập nhật thêm sản phẩm" },
  { icon: <HeadsetIcon />, text: "Tiếp tục nhận hỗ trợ khi cần" },
];

export default function HKDAfterDonePage() {
  return (
    <section id="hkd-buoc-tiep-theo" className="hkd-after-page" aria-label="Sau khi xong hộ kinh doanh làm gì">
      <style>{css}</style>

      <section className="hkd-after-heading">
        <div className="hkd-after-pill">MÀN 4</div>
        <h1>Sau khi xong, anh/chị làm gì?</h1>
        <p>Ngay sau chuỗi thao tác, anh/chị gắn hiện diện số vào điểm bán thực và tiếp tục duy trì hoạt động.</p>
      </section>

      <section className="hkd-after-body">
        <section className="hkd-after-list" aria-label="Các việc cần làm sau khi hoàn tất">
          {afterDoneItems.map((item) => (
            <article className="hkd-after-item" key={item.text}>
              <div className="hkd-after-check"><CheckIcon /></div>
              <div className="hkd-after-icon">{item.icon}</div>
              <h2>{item.text}</h2>
            </article>
          ))}
        </section>

        <AfterIllustration />
      </section>

      <a href="#hkd-cau-hoi-thuong-gap" className="hkd-after-confirm">
        <CheckIcon />
        <span>Tôi đã nhận QR</span>
      </a>

      <section className="hkd-after-bottom-card">
        <a href="#hkd-cau-hoi-thuong-gap" className="hkd-after-cta">
          <RocketIcon />
          <span>Bắt đầu ngay</span>
        </a>

        <footer className="hkd-after-footer-brand">
          <div className="hkd-after-footer-logo">HKDO</div>
          <span>HKDO - Nền tảng số cho hộ kinh doanh</span>
        </footer>
      </section>
    </section>
  );
}

function AfterIllustration() {
  return (
    <section className="hkd-after-art" aria-hidden="true">
      <div className="hkd-after-city"><i /><i /><i /></div>
      <div className="hkd-after-cloud" />
      <div className="hkd-after-shop">
        <div className="hkd-after-shop-sign">CỬA HÀNG<br />HỘ KINH DOANH</div>
        <div className="hkd-after-awning" />
        <div className="hkd-after-shop-window">{Array.from({ length: 18 }).map((_, index) => <i key={index} />)}</div>
      </div>

      <div className="hkd-after-owner">
        <div className="hair" />
        <div className="face" />
        <div className="shirt" />
        <div className="apron" />
        <div className="arm-left" />
        <div className="arm-right" />
      </div>

      <div className="hkd-after-counter" />
      <div className="hkd-after-plant" />
      <div className="hkd-after-cup" />

      <div className="hkd-after-qr-desk">
        <div>THANH TOÁN<br />QUÉT MÃ QR</div>
        <QrGraphic />
        <strong>HKDO</strong>
      </div>

      <div className="hkd-after-van">
        <div className="window" />
        <div className="qr-label"><div>QUÉT MÃ QR</div><QrGraphic /><strong>HKDO</strong></div>
        <span className="wheel left" />
        <span className="wheel right" />
      </div>

      <div className="hkd-after-bike">
        <div className="box"><div>QUÉT MÃ QR</div><QrGraphic /></div>
        <span className="wheel a" />
        <span className="wheel b" />
      </div>
    </section>
  );
}

function QrGraphic() {
  return (
    <svg className="hkd-after-qr-graphic" viewBox="0 0 100 100" fill="none">
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

function CheckIcon() { return <Svg><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="m7.5 12.2 2.8 2.8 6.2-6.7" stroke="#fff" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function QrStandIcon() { return <Svg><path d="M5 3h14v15H5V3Z" stroke="currentColor" strokeWidth="2.3"/><path d="M8 6h3v3H8V6Zm5 0h3v3h-3V6ZM8 11h3v3H8v-3Zm5 2h3v3h-3v-3Z" fill="currentColor"/><path d="M8 21h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></Svg>; }
function StoreFrontIcon() { return <Svg><path d="M4 10h16l-2-5H6l-2 5Z" fill="currentColor" opacity=".22"/><path d="M5 10v10h14V10M8 20v-6h4v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><path d="M4 10c.5 2 2.5 2.7 4 1 1.3 1.8 3.7 1.8 5 0 1.3 1.8 3.7 1.8 5 0 1.5 1.7 3.5 1 4-1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function EyeIcon() { return <Svg><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" strokeWidth="2.5"/><circle cx="12" cy="12" r="3.4" fill="currentColor"/></Svg>; }
function BagGearIcon() { return <Svg><path d="M6 8h12l1 13H5L6 8Z" fill="currentColor" opacity=".22"/><path d="M8 8V6a4 4 0 0 1 8 0v2M6 8h12l1 13H5L6 8Z" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/><circle cx="17" cy="17" r="4" fill="currentColor"/><path d="M17 14v6M14 17h6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></Svg>; }
function HeadsetIcon() { return <Svg><path d="M5 13v-1a7 7 0 0 1 14 0v1" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><rect x="3" y="12" width="5" height="7" rx="2" fill="currentColor"/><rect x="16" y="12" width="5" height="7" rx="2" fill="currentColor"/><path d="M18 19c-.7 2-2.5 3-5.2 3H11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></Svg>; }
function RocketIcon() { return <Svg><path d="M13 4c3.2 1 5.4 3.2 6.4 6.4l-5.6 5.6-4.4-4.4L13 4Z" fill="currentColor"/><path d="M8.8 12.2 5 13l-2 4 4-.8M11.8 15.2 11 19l-4 2 .8-4" fill="currentColor" opacity=".85"/><circle cx="15" cy="9" r="1.8" fill="#fff"/></Svg>; }

const css = `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; background: #dfeefa; color: #10175c; }
a { color: inherit; text-decoration: none; }
svg { width: 1em; height: 1em; display: block; }

.hkd-after-page {
  position: relative;
  width: 100%;
  min-height: 1518px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 2%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%), linear-gradient(180deg, #fbfdff 0%, #eef8ff 55%, #fbfdff 100%);
}
.hkd-after-heading { position: relative; z-index: 8; width: 820px; margin: 0 auto; padding-top: 36px; text-align: center; }
.hkd-after-pill { width: 127px; height: 44px; margin: 0 auto 22px; border-radius: 999px; display: grid; place-items: center; color: #075bd2; background: #fff; border: 2px solid #9fc8fb; box-shadow: 0 8px 17px rgba(31,101,178,.08); font-size: 24px; line-height: 1; font-weight: 950; }
.hkd-after-heading h1 { width: 790px; margin: 0 auto 22px; color: #075bd2; font-size: 70px; line-height: 1.09; font-weight: 950; letter-spacing: -3.4px; }
.hkd-after-heading p { width: 620px; margin: 0 auto; color: #1d2742; font-size: 25px; line-height: 1.38; font-weight: 500; }
.hkd-after-body { position: relative; z-index: 3; min-height: 806px; margin-top: 25px; }
.hkd-after-list { position: relative; z-index: 12; width: 398px; margin-left: 47px; padding-top: 8px; display: grid; gap: 14px; }
.hkd-after-item { min-height: 139px; padding: 22px 24px 20px 8px; border-radius: 16px; display: grid; grid-template-columns: 34px 96px 1fr; align-items: center; gap: 16px; background: rgba(255,255,255,.97); box-shadow: 0 13px 27px rgba(31,101,178,.11); }
.hkd-after-check { width: 33px; height: 33px; color: #075bd2; }
.hkd-after-icon { width: 86px; height: 86px; border-radius: 50%; display: grid; place-items: center; color: #075bd2; background: #eaf5ff; font-size: 58px; }
.hkd-after-item h2 { margin: 0; color: #10175c; font-size: 25px; line-height: 1.25; font-weight: 650; letter-spacing: -.25px; }
.hkd-after-art { position: absolute; z-index: 3; inset: 0; overflow: hidden; }
.hkd-after-art::before { content: ""; position: absolute; right: -85px; top: 20px; width: 560px; height: 560px; border-radius: 54% 0 0 0; background: linear-gradient(180deg, rgba(206,238,255,.74), rgba(255,255,255,.14)); }
.hkd-after-city { position: absolute; right: 80px; top: 35px; display: flex; align-items: flex-end; gap: 10px; opacity: .42; }
.hkd-after-city i { width: 36px; height: 83px; border-radius: 9px 9px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.22), rgba(85,154,219,.06)); }
.hkd-after-city i:nth-child(2) { height: 124px; }
.hkd-after-city i:nth-child(3) { height: 96px; }
.hkd-after-cloud, .hkd-after-cloud::before, .hkd-after-cloud::after { position: absolute; content: ""; border-radius: 999px; background: rgba(255,255,255,.94); }
.hkd-after-cloud { right: 22px; top: 80px; width: 110px; height: 22px; }
.hkd-after-cloud::before { width: 46px; height: 46px; left: 20px; top: -24px; }
.hkd-after-cloud::after { width: 65px; height: 65px; left: 57px; top: -40px; }
.hkd-after-shop { position: absolute; z-index: 4; right: -5px; top: 5px; width: 414px; height: 444px; border-radius: 11px 11px 0 0; background: linear-gradient(180deg, #9bd1f7, #4e89be 30%, #254e7d 100%); box-shadow: 0 18px 30px rgba(24,74,139,.22); }
.hkd-after-shop-sign { position: absolute; left: 23px; right: 23px; top: -1px; height: 91px; border-radius: 11px; display: grid; place-items: center; color: #fff; background: linear-gradient(180deg, #2c6fbd, #1d559d); border: 5px solid rgba(255,255,255,.18); font-size: 25px; line-height: 1.08; font-weight: 950; text-align: center; box-shadow: 0 10px 20px rgba(0,50,120,.22); }
.hkd-after-awning { position: absolute; left: 0; right: 0; top: 91px; height: 78px; background: repeating-linear-gradient(90deg, #11458d 0 48px, #315f9e 48px 96px); border-radius: 0 0 30px 30px; }
.hkd-after-awning::after { content: ""; position: absolute; left: 0; right: 0; bottom: -22px; height: 39px; background: repeating-radial-gradient(circle at 48px 0, #315f9e 0 36px, #11458d 37px 72px); clip-path: inset(0 0 0 0 round 0 0 24px 24px); }
.hkd-after-shop-window { position: absolute; left: 57px; right: 42px; bottom: 42px; height: 210px; display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; padding: 22px; border-radius: 12px; background: rgba(27,36,49,.48); }
.hkd-after-shop-window i { border-radius: 4px 4px 12px 12px; background: linear-gradient(180deg, #ffcd74, #8d6331); }
.hkd-after-owner { position: absolute; z-index: 11; right: 44px; top: 184px; width: 236px; height: 360px; }
.hkd-after-owner .hair { position: absolute; left: 66px; top: 0; width: 111px; height: 79px; border-radius: 72px 72px 26px 26px; background: #16191c; transform: rotate(-7deg); }
.hkd-after-owner .face { position: absolute; left: 85px; top: 64px; width: 76px; height: 96px; border-radius: 47%; background: #ffbd8c; }
.hkd-after-owner .shirt { position: absolute; left: 35px; top: 170px; width: 176px; height: 190px; border-radius: 70px 70px 0 0; background: #fff; }
.hkd-after-owner .apron { position: absolute; left: 65px; top: 190px; width: 116px; height: 190px; border-radius: 50px 50px 0 0; background: #102e5a; }
.hkd-after-owner .arm-left { position: absolute; left: -1px; top: 232px; width: 121px; height: 30px; border-radius: 999px; background: #ffbd8c; transform: rotate(-77deg); }
.hkd-after-owner .arm-right { position: absolute; right: 5px; top: 247px; width: 120px; height: 30px; border-radius: 999px; background: #ffbd8c; transform: rotate(13deg); }
.hkd-after-counter { position: absolute; z-index: 10; right: 0; left: 452px; top: 520px; height: 61px; background: linear-gradient(180deg, #efc48b, #ce9660); border-radius: 24px 0 0 24px; }
.hkd-after-plant { position: absolute; z-index: 12; right: 382px; top: 411px; width: 60px; height: 75px; }
.hkd-after-plant::before, .hkd-after-plant::after { content: ""; position: absolute; bottom: 0; width: 34px; height: 66px; border-radius: 35px 35px 0 0; background: linear-gradient(180deg, #92d88f, #3ea869); }
.hkd-after-plant::before { left: 0; transform: rotate(-28deg); }
.hkd-after-plant::after { right: 0; transform: rotate(27deg); }
.hkd-after-cup { position: absolute; z-index: 13; right: 62px; top: 466px; width: 46px; height: 62px; border-radius: 8px 8px 18px 18px; background: linear-gradient(180deg, #222, #f0d4ad 14%, #fff 18%); }
.hkd-after-cup::before { content: ""; position: absolute; left: -3px; right: -3px; top: 0; height: 15px; border-radius: 999px; background: #222; }
.hkd-after-qr-desk { position: absolute; z-index: 13; right: 284px; top: 348px; width: 115px; height: 166px; padding: 0 9px 8px; border-radius: 9px; text-align: center; background: #fff; border: 4px solid #4e91df; box-shadow: 0 14px 26px rgba(16,83,170,.18); }
.hkd-after-qr-desk div { height: 43px; margin: -4px -9px 8px; border-radius: 8px 8px 0 0; display: grid; place-items: center; color: #fff; background: #116bd5; font-size: 10px; line-height: 1.15; font-weight: 950; }
.hkd-after-qr-desk .hkd-after-qr-graphic { width: 78px; height: 78px; margin: 0 auto 7px; }
.hkd-after-qr-desk strong { color: #075bd2; font-size: 17px; line-height: 1; font-weight: 950; }
.hkd-after-van { position: absolute; z-index: 7; right: 68px; bottom: 92px; width: 360px; height: 193px; border-radius: 40px 16px 18px 18px; background: #f7f7f4; box-shadow: 0 16px 24px rgba(0,50,120,.17); }
.hkd-after-van::before { content: ""; position: absolute; left: 0; top: 47px; width: 96px; height: 84px; border-radius: 20px 0 0 10px; background: #dcecf7; }
.hkd-after-van .window { position: absolute; left: 32px; top: 32px; width: 94px; height: 67px; border-radius: 18px 6px 6px 6px; background: #9fc9e4; }
.hkd-after-van .qr-label { position: absolute; right: 62px; top: 42px; width: 91px; height: 105px; padding: 0 8px 6px; border-radius: 6px; background: #116bd5; color: #fff; text-align: center; transform: rotate(1deg); }
.hkd-after-van .qr-label div { font-size: 9px; line-height: 1.1; font-weight: 950; margin: 5px 0; }
.hkd-after-van .qr-label .hkd-after-qr-graphic { width: 55px; height: 55px; margin: 0 auto 3px; }
.hkd-after-van .qr-label strong { font-size: 10px; }
.hkd-after-van .wheel, .hkd-after-bike .wheel { position: absolute; bottom: -15px; width: 45px; height: 45px; border-radius: 50%; background: #2b2f36; border: 8px solid #8b969d; }
.hkd-after-van .wheel.left { left: 57px; }
.hkd-after-van .wheel.right { right: 47px; }
.hkd-after-bike { position: absolute; z-index: 14; right: -35px; bottom: 39px; width: 230px; height: 176px; }
.hkd-after-bike::before { content: ""; position: absolute; right: 47px; bottom: 35px; width: 132px; height: 42px; border-radius: 999px; background: #0d3b7a; }
.hkd-after-bike .box { position: absolute; left: 17px; top: 13px; width: 112px; height: 92px; padding: 6px; border-radius: 9px; background: #0b50b2; color: #fff; text-align: center; }
.hkd-after-bike .box div { font-size: 8px; font-weight: 950; margin-bottom: 3px; }
.hkd-after-bike .box .hkd-after-qr-graphic { width: 55px; height: 55px; margin: 0 auto; }
.hkd-after-bike .wheel.a { left: 0; bottom: 3px; }
.hkd-after-bike .wheel.b { right: 34px; bottom: 3px; }
.hkd-after-confirm { position: relative; z-index: 18; width: 430px; height: 86px; margin: 0 auto 28px; border-radius: 12px; border: 2px solid #075bd2; display: flex; align-items: center; justify-content: center; gap: 25px; color: #075bd2; background: #fff; box-shadow: 0 10px 20px rgba(31,101,178,.08); font-size: 28px; line-height: 1; font-weight: 850; }
.hkd-after-confirm svg { width: 47px; height: 47px; flex: 0 0 auto; }
.hkd-after-bottom-card { position: relative; z-index: 18; width: calc(100% - 34px); margin: 0 auto; min-height: 164px; padding: 16px 18px 0; border-radius: 20px; background: rgba(255,255,255,.96); box-shadow: 0 10px 25px rgba(31,101,178,.11); }
.hkd-after-cta { height: 86px; border-radius: 14px; display: grid; grid-template-columns: 300px 1fr 270px; align-items: center; color: #fff; background: linear-gradient(180deg, #086feb, #0055cb); box-shadow: 0 12px 22px rgba(0,76,180,.22); font-size: 33px; line-height: 1; font-weight: 950; transition: transform .18s ease, filter .18s ease; }
.hkd-after-cta:hover, .hkd-after-confirm:hover { transform: translateY(-2px); filter: brightness(1.03); }
.hkd-after-cta svg { width: 57px; height: 57px; justify-self: end; margin-right: 23px; }
.hkd-after-cta span { justify-self: start; }
.hkd-after-footer-brand { height: 58px; display: flex; align-items: center; justify-content: center; gap: 14px; color: #242b40; }
.hkd-after-footer-logo { width: 54px; height: 54px; border-radius: 9px; display: grid; place-items: center; color: #fff; background: #075bd2; font-size: 16px; font-weight: 950; }
.hkd-after-footer-brand span { font-size: 21px; line-height: 1; font-weight: 650; }

@media (max-width: 820px) {
  .hkd-after-page { min-height: 1370px; }
  .hkd-after-heading { width: calc(100% - 40px); }
  .hkd-after-heading h1 { width: 100%; font-size: clamp(45px, 10vw, 70px); }
  .hkd-after-heading p { width: min(100%, 620px); font-size: 22px; }
  .hkd-after-body { transform: scale(.88); transform-origin: top center; width: 114%; margin-left: -7%; min-height: 710px; }
  .hkd-after-confirm { margin-top: -18px; }
  .hkd-after-cta { grid-template-columns: 1fr 1fr 1fr; }
}

@media (max-width: 520px) {
  .hkd-after-page { min-height: 1240px; }
  .hkd-after-heading { padding-top: 28px; }
  .hkd-after-pill { width: 105px; height: 38px; font-size: 20px; }
  .hkd-after-heading h1 { font-size: 38px; }
  .hkd-after-heading p { font-size: 17px; }
  .hkd-after-body { transform: none; width: 100%; margin-left: 0; min-height: 630px; }
  .hkd-after-list { width: calc(100% - 34px); margin: 0 auto; gap: 10px; }
  .hkd-after-item { min-height: 82px; grid-template-columns: 31px 56px 1fr; gap: 10px; padding: 12px; }
  .hkd-after-icon { width: 54px; height: 54px; font-size: 37px; }
  .hkd-after-item h2 { font-size: 17px; }
  .hkd-after-art { transform: scale(.62); transform-origin: bottom right; right: -115px; top: 230px; left: auto; width: 760px; height: 560px; }
  .hkd-after-confirm { width: calc(100% - 60px); height: 68px; font-size: 20px; margin-top: 0; }
  .hkd-after-bottom-card { width: calc(100% - 24px); min-height: 135px; }
  .hkd-after-cta { height: 70px; grid-template-columns: 74px 1fr; font-size: 24px; }
  .hkd-after-cta svg { justify-self: center; margin: 0; width: 39px; height: 39px; }
  .hkd-after-footer-brand span { font-size: 15px; }
}
`;
