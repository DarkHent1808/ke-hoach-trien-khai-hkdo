import React from "react";

const ntm4Values = [
  { icon: <SearchIcon />, title: "Tìm đúng hàng mình cần", tone: "blue" },
  { icon: <StoreIcon />, title: "Biết rõ nơi bán", tone: "blue" },
  { icon: <PinIcon />, title: "Biết đúng địa chỉ", tone: "blue" },
  { icon: <QrIcon />, title: "Quét QR là vào đúng trang", tone: "blue" },
  { icon: <HandshakeIcon />, title: "Kết nối mua bán ngay trong địa phương", tone: "blue" },
];

const ntm4Products = [
  { name: "Mật ong nguyên chất", shop: "Hộ KD Thanh Xuân", distance: "120 m", rating: "4.8", color: "#d47a18" },
  { name: "Trà thảo mộc", shop: "Hộ KD An Nhiên", distance: "250 m", rating: "4.9", color: "#68a96f" },
  { name: "Rau sạch Đà Lạt", shop: "Hộ KD Nông Xanh", distance: "350 m", rating: "4.7", color: "#4c9d3f" },
];

export default function Ntm_4() {
  return (
    <section id="ntm-gia-tri" className="ntm4-page" aria-label="Giá trị người dân nhận được là gì">
      <style>{css}</style>

      <main className="ntm4-main">
        <section className="ntm4-copy">
          <div className="ntm4-badge-row">
            <span>Page 6</span>
            <span>Màn 4</span>
          </div>

          <h1>Giá trị người dân nhận được là gì?</h1>
          <p>Khi hệ thống đi vào hoạt động, người dân có thêm một cách tìm mua thuận tiện và gần mình hơn.</p>
        </section>

        <section className="ntm4-layout" aria-label="Các giá trị chính cho người dân">
          <div className="ntm4-value-list">
            {ntm4Values.map((item) => (
              <article className="ntm4-value-card" key={item.title}>
                <div className={`ntm4-value-icon ${item.tone}`}>{item.icon}</div>
                <h2>{item.title}</h2>
              </article>
            ))}
          </div>

          <section className="ntm4-visual" aria-label="Minh họa mua hàng địa phương">
            <div className="ntm4-bg-city"><i /><i /><i /></div>
            <div className="ntm4-cloud cloud-a" />
            <div className="ntm4-cloud cloud-b" />
            <div className="ntm4-route"><em>Gần bạn ›</em></div>
            <div className="ntm4-pin-float"><PinIcon /></div>

            <div className="ntm4-shop">
              <div className="ntm4-shop-sign">MUA HÀNG<br />ĐỊA PHƯƠNG</div>
              <div className="ntm4-awning" />
              <div className="ntm4-shop-body" />
            </div>

            <div className="ntm4-family">
              <Grandma />
              <YoungBuyer />
              <DadBuyer />
              <ChildBuyer />
            </div>

            <PhoneMockup />
            <div className="ntm4-qr-board">
              <strong>QUÉT ĐỂ XEM<br />SẢN PHẨM</strong>
              <QrGraphic />
            </div>
          </section>
        </section>

        <section className="ntm4-bottom-scene" aria-label="Ủng hộ hộ kinh doanh địa phương">
          <div className="ntm4-blue-strip">
            <QrIcon />
            <span>Quét QR hoặc vào <strong>dothithongminh1.vn</strong></span>
          </div>
        </section>

        <a href="https://dothithongminh1.vn/search/" className="ntm4-bottom-cta">
          <SearchIcon />
          <span>Tìm sản phẩm</span>
        </a>
      </main>
    </section>
  );
}

function PhoneMockup() {
  return (
    <section className="ntm4-phone" aria-label="Giao diện tìm mua trên điện thoại">
      <div className="ntm4-phone-speaker" />
      <div className="ntm4-phone-screen">
        <div className="ntm4-status"><span>9:41</span><i /></div>
        <div className="ntm4-browser"><LockIcon /><span>dothithongminh1.vn</span><BellIcon /></div>
        <div className="ntm4-mobile-search"><SearchIcon /><span>Tìm sản phẩm, cửa hàng...</span><TuneIcon /></div>

        <div className="ntm4-location-row">
          <PinSmallIcon />
          <div><strong>Vị trí của bạn</strong><span>Phường Bình Thạnh, TP. Hồ Chí Minh</span></div>
          <TargetIcon />
        </div>

        <div className="ntm4-map">
          <div className="ntm4-map-circle" />
          {[1, 2, 3, 4, 5].map((item) => <span key={item} className={`ntm4-map-pin pin-${item}`}><StoreIcon /></span>)}
          <div className="ntm4-map-main-pin"><StoreIcon /></div>
        </div>

        <div className="ntm4-suggest-head"><strong>Gợi ý gần bạn</strong><a href="#ntm-more-products">Xem tất cả ›</a></div>
        <div className="ntm4-products">
          {ntm4Products.map((item) => (
            <article className="ntm4-product" key={item.name}>
              <div className="ntm4-product-img" style={{ background: item.color }} />
              <h3>{item.name}</h3>
              <p>{item.shop}</p>
              <div><span><PinSmallIcon />{item.distance}</span><b>★ {item.rating}</b></div>
            </article>
          ))}
        </div>

        <div className="ntm4-phone-features">
          <div><LeafIcon /><span>Sản phẩm<br />địa phương</span></div>
          <div><ShieldMiniIcon /><span>Hộ kinh doanh<br />uy tín</span></div>
          <div><TargetIcon /><span>Vị trí<br />chính xác</span></div>
          <div><CardShieldIcon /><span>Thanh toán<br />an toàn</span></div>
        </div>
      </div>
    </section>
  );
}

function Grandma() {
  return <div className="ntm4-grandma" aria-hidden="true"><div className="hair" /><div className="face" /><div className="body" /><div className="basket" /></div>;
}
function YoungBuyer() {
  return <div className="ntm4-young" aria-hidden="true"><div className="hair" /><div className="face" /><div className="body" /><div className="phone" /></div>;
}
function DadBuyer() {
  return <div className="ntm4-dad" aria-hidden="true"><div className="hair" /><div className="face" /><div className="body" /><div className="bag" /></div>;
}
function ChildBuyer() {
  return <div className="ntm4-child" aria-hidden="true"><div className="hair" /><div className="face" /><div className="body" /><div className="plant" /></div>;
}

function QrGraphic() {
  return (
    <svg className="ntm4-qr" viewBox="0 0 100 100" fill="none">
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
function SearchIcon() { return <Svg><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2.7"/><path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round"/></Svg>; }
function StoreIcon() { return <Svg><path d="M4 10h16l-1-5H5l-1 5Z" fill="currentColor" opacity=".22"/><path d="M5 10v10h14V10M3 10h18L19 5H5l-2 5Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round"/><path d="M8 20v-6h4v6M15 14h2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/></Svg>; }
function PinIcon() { return <Svg><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" fill="currentColor"/><circle cx="12" cy="10" r="3" fill="#fff"/></Svg>; }
function PinSmallIcon() { return <Svg><path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" fill="currentColor"/><circle cx="12" cy="10" r="2.2" fill="#fff"/></Svg>; }
function QrIcon() { return <Svg><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function HandshakeIcon() { return <Svg><path d="M7 12 3 8l4-4 4 4M17 12l4-4-4-4-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="m8 13 3 3c1 1 2.4 1 3.4 0l2.6-2.6M10 11l2.2 2.2M13 10l2.2 2.2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function LockIcon() { return <Svg><rect x="5" y="10" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function BellIcon() { return <Svg><path d="M6 10a6 6 0 1 1 12 0v4l2 3H4l2-3v-4Z" fill="currentColor"/><path d="M10 20h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function TuneIcon() { return <Svg><path d="M4 7h10M18 7h2M4 17h2M10 17h10M8 4v6M16 14v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function TargetIcon() { return <Svg><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function LeafIcon() { return <Svg><path d="M5 19c9 0 14-6 14-15C10 4 5 9 5 19Z" fill="currentColor"/><path d="M5 19c3-5 7-8 12-10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function ShieldMiniIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="m9 12 2 2 4-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function CardShieldIcon() { return <Svg><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2.2"/><path d="M4 10h16" stroke="currentColor" strokeWidth="2.2"/><path d="M16 12.5 13.5 14v2c0 1.7.9 2.8 2.5 3.5 1.6-.7 2.5-1.8 2.5-3.5v-2L16 12.5Z" fill="currentColor"/></Svg>; }

const css = `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  background: #dfeefa;
  color: #06114d;
}
a { color: inherit; text-decoration: none; }
svg { width: 1em; height: 1em; display: block; }

.ntm4-page {
  position: relative;
  width: min(100%, 928px);
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background:
    radial-gradient(circle at 87% 3%, rgba(255,255,255,.95) 0 17%, transparent 36%),
    linear-gradient(180deg, #fbfdff 0%, #edf8ff 60%, #fbfdff 100%);
}
.ntm4-main {
  position: relative;
  min-height: 1350px;
  overflow: hidden;
}
.ntm4-copy {
  position: relative;
  z-index: 12;
  width: 590px;
  padding-top: 42px;
  margin-left: 38px;
}
.ntm4-badge-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
}
.ntm4-badge-row span {
  width: 103px;
  height: 44px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  color: #1557bd;
  background: #dbeafe;
  font-size: 22px;
  line-height: 1;
  font-weight: 850;
}
.ntm4-copy h1 {
  margin: 0 0 21px;
  color: #050d4e;
  font-size: 62px;
  line-height: 1.13;
  letter-spacing: -2.8px;
  font-weight: 950;
}
.ntm4-copy p {
  width: 525px;
  margin: 0;
  color: #26374f;
  font-size: 24px;
  line-height: 1.45;
  font-weight: 500;
}
.ntm4-layout {
  position: relative;
  z-index: 10;
}
.ntm4-value-list {
  position: relative;
  z-index: 18;
  width: 330px;
  margin: 33px 0 0 38px;
  display: grid;
  gap: 14px;
}
.ntm4-value-card {
  min-height: 124px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 86px 1fr;
  align-items: center;
  gap: 18px;
  padding: 18px 23px;
  background: rgba(255,255,255,.98);
  border: 1px solid #e0ebf7;
  box-shadow: 0 12px 25px rgba(31,101,178,.1);
}
.ntm4-value-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #4288ff, #126ee8);
}
.ntm4-value-icon svg {
  width: 46px;
  height: 46px;
}
.ntm4-value-card h2 {
  margin: 0;
  color: #0b2363;
  font-size: 23px;
  line-height: 1.18;
  font-weight: 950;
}
.ntm4-visual {
  position: absolute;
  inset: 0;
  z-index: 2;
}
.ntm4-bg-city {
  position: absolute;
  right: 20px;
  top: 8px;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  opacity: .34;
}
.ntm4-bg-city i {
  width: 45px;
  height: 112px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.28), rgba(85,154,219,.08));
}
.ntm4-bg-city i:nth-child(2) { height: 178px; }
.ntm4-bg-city i:nth-child(3) { height: 133px; }
.ntm4-cloud,
.ntm4-cloud::before,
.ntm4-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.92);
}
.ntm4-cloud.cloud-a { right: 145px; top: 56px; width: 135px; height: 25px; }
.ntm4-cloud.cloud-a::before { width: 55px; height: 55px; left: 24px; top: -30px; }
.ntm4-cloud.cloud-a::after { width: 74px; height: 74px; left: 71px; top: -46px; }
.ntm4-cloud.cloud-b { right: 45px; top: 124px; width: 82px; height: 16px; opacity: .82; }
.ntm4-cloud.cloud-b::before { width: 35px; height: 35px; left: 15px; top: -17px; }
.ntm4-cloud.cloud-b::after { width: 48px; height: 48px; left: 39px; top: -28px; }
.ntm4-route {
  position: absolute;
  z-index: 8;
  right: 217px;
  top: 170px;
  width: 195px;
  height: 140px;
  border: 3px dashed #5b9df4;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  transform: rotate(-38deg);
}
.ntm4-route em {
  position: absolute;
  right: -8px;
  top: 25px;
  width: 111px;
  height: 36px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #2b74e8;
  font-size: 17px;
  font-weight: 850;
  font-style: normal;
  transform: rotate(38deg);
}
.ntm4-pin-float {
  position: absolute;
  z-index: 9;
  right: 180px;
  top: 123px;
  color: #ff7609;
}
.ntm4-pin-float svg {
  width: 76px;
  height: 76px;
  filter: drop-shadow(0 8px 12px rgba(255,113,0,.25));
}
.ntm4-shop {
  position: absolute;
  z-index: 3;
  right: 0;
  top: 250px;
  width: 300px;
  height: 480px;
  margin-top: -500px;
}
.ntm4-shop-sign {
  position: absolute;
  z-index: 6;
  left: 25px;
  top: 0;
  width: 215px;
  height: 94px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #3c7658;
  border: 7px solid #c3d5bf;
  font-size: 25px;
  line-height: 1.1;
  text-align: center;
  font-weight: 950;
  transform: rotate(-3deg);
  box-shadow: 0 12px 18px rgba(28,72,62,.22);
}
.ntm4-awning {
  position: absolute;
  z-index: 4;
  left: 0;
  right: -25px;
  top: 82px;
  height: 93px;
  border-radius: 12px 12px 35px 35px;
  background: repeating-linear-gradient(115deg, #2f795b 0 45px, #f4ead8 45px 90px);
  box-shadow: 0 12px 20px rgba(42,90,67,.2);
}
.ntm4-shop-body {
  position: absolute;
  left: 18px;
  right: -25px;
  bottom: 0;
  top: 143px;
  border-radius: 12px 0 0 0;
  background:
    linear-gradient(90deg, rgba(255,255,255,.18) 0 2px, transparent 2px 58px),
    linear-gradient(180deg, rgba(116,82,52,.42), rgba(88,64,43,.76));
}
.ntm4-family {
  position: absolute;
  z-index: 11;
  right: 15px;
  top: 380px;
  width: 520px;
  height: 430px;
  margin-top: -500px;
}
.ntm4-grandma { position: absolute; left: 0; bottom: 0; width: 160px; height: 300px; }
.ntm4-grandma .hair { position: absolute; left: 45px; top: 0; width: 78px; height: 70px; border-radius: 50%; background: #4b4f55; }
.ntm4-grandma .face { position: absolute; left: 51px; top: 55px; width: 70px; height: 82px; border-radius: 47%; background: #eab487; }
.ntm4-grandma .body { position: absolute; left: 20px; bottom: 0; width: 118px; height: 180px; border-radius: 60px 60px 0 0; background: #6c4f8c; }
.ntm4-grandma .basket { position: absolute; left: 0; bottom: 74px; width: 95px; height: 65px; border-radius: 50% 50% 18px 18px; background: radial-gradient(circle at 25% 20%, #53aa3d 0 14px, transparent 15px), radial-gradient(circle at 60% 16%, #ee5430 0 10px, transparent 11px), linear-gradient(180deg, #c88442, #875229); }
.ntm4-young { position: absolute; left: 138px; bottom: 0; width: 150px; height: 340px; }
.ntm4-young .hair { position: absolute; left: 35px; top: 0; width: 88px; height: 82px; border-radius: 55px; background: #211928; }
.ntm4-young .face { position: absolute; left: 45px; top: 61px; width: 70px; height: 88px; border-radius: 47%; background: #ffbd8c; }
.ntm4-young .body { position: absolute; left: 12px; bottom: 0; width: 125px; height: 208px; border-radius: 60px 60px 0 0; background: #7fb4df; }
.ntm4-young .phone { position: absolute; left: 68px; top: 144px; width: 28px; height: 54px; border-radius: 6px; background: #13284d; transform: rotate(-8deg); }
.ntm4-dad { position: absolute; right: 32px; bottom: 0; width: 160px; height: 340px; }
.ntm4-dad .hair { position: absolute; left: 42px; top: 0; width: 84px; height: 65px; border-radius: 50px 50px 20px 20px; background: #151a22; }
.ntm4-dad .face { position: absolute; left: 52px; top: 54px; width: 70px; height: 88px; border-radius: 47%; background: #ffbd8c; }
.ntm4-dad .body { position: absolute; left: 13px; bottom: 0; width: 126px; height: 210px; border-radius: 65px 65px 0 0; background: #387b39; }
.ntm4-dad .bag { position: absolute; left: 23px; bottom: 86px; width: 114px; height: 90px; border-radius: 20px; background: radial-gradient(circle at 20% 15%, #f04e29 0 10px, transparent 11px), radial-gradient(circle at 48% 8%, #54a93d 0 15px, transparent 16px), linear-gradient(180deg, #ba8c44, #80512a); }
.ntm4-child { position: absolute; right: 135px; bottom: 0; width: 108px; height: 210px; }
.ntm4-child .hair { position: absolute; left: 26px; top: 0; width: 55px; height: 48px; border-radius: 50%; background: #2c1f1c; }
.ntm4-child .face { position: absolute; left: 29px; top: 38px; width: 50px; height: 62px; border-radius: 47%; background: #ffbd8c; }
.ntm4-child .body { position: absolute; left: 10px; bottom: 0; width: 90px; height: 116px; border-radius: 45px 45px 0 0; background: #f5b41c; }
.ntm4-child .plant { position: absolute; left: 31px; bottom: 48px; width: 45px; height: 45px; border-radius: 50%; background: #4fb454; }
.ntm4-phone {
  position: absolute;
  z-index: 15;
  right: 252px;
  top: 585px;
  width: 315px;
  height: 565px;
  border-radius: 38px;
  background: #151515;
  padding: 12px;
  box-shadow: 0 22px 33px rgba(0,0,0,.28);
  margin-top: -450px;
}
.ntm4-phone-speaker {
  position: absolute;
  left: 50%;
  top: 9px;
  width: 82px;
  height: 14px;
  border-radius: 999px;
  background: #060606;
  transform: translateX(-50%);
  z-index: 4;
}
.ntm4-phone-screen {
  position: relative;
  height: 100%;
  border-radius: 28px;
  overflow: hidden;
  background: #f8fbff;
  border: 1px solid #dce7f5;
  padding: 13px 13px 10px;
}
.ntm4-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  color: #0e1628;
  font-size: 10px;
  font-weight: 900;
}
.ntm4-status i {
  width: 42px;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(90deg, #111 0 14px, transparent 14px 18px, #111 18px 25px, transparent 25px 29px, #111 29px 42px);
}
.ntm4-browser {
  height: 31px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 18px 1fr 19px;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  background: #eef3f8;
  color: #566579;
  font-size: 11px;
  font-weight: 700;
}
.ntm4-browser svg { width: 15px; height: 15px; }
.ntm4-mobile-search {
  height: 38px;
  margin-top: 11px;
  border-radius: 11px;
  display: grid;
  grid-template-columns: 23px 1fr 24px;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
  background: #fff;
  border: 2px solid #d9e7fa;
  color: #7b8ba2;
  font-size: 10px;
  font-weight: 650;
}
.ntm4-mobile-search svg { color: #1c5fce; width: 19px; height: 19px; }
.ntm4-location-row {
  min-height: 47px;
  margin-top: 10px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  align-items: center;
  gap: 6px;
  padding: 8px 9px;
  background: #eaf4ff;
  color: #126ee8;
}
.ntm4-location-row svg { width: 19px; height: 19px; }
.ntm4-location-row strong { display: block; color: #183153; font-size: 9px; line-height: 1.1; font-weight: 850; }
.ntm4-location-row span { display: block; margin-top: 2px; color: #39536f; font-size: 8px; line-height: 1.15; font-weight: 650; }
.ntm4-map {
  position: relative;
  height: 105px;
  margin-top: 10px;
  border-radius: 11px;
  overflow: hidden;
  background:
    linear-gradient(30deg, transparent 0 45%, rgba(167,204,180,.44) 45% 53%, transparent 53%),
    linear-gradient(110deg, transparent 0 35%, rgba(189,210,231,.75) 35% 39%, transparent 39%),
    linear-gradient(170deg, transparent 0 46%, rgba(189,210,231,.75) 46% 50%, transparent 50%),
    #eef5f2;
  border: 1px solid #d9e7fa;
}
.ntm4-map-circle { position: absolute; left: 70px; top: 0; width: 105px; height: 105px; border-radius: 50%; background: rgba(54,149,238,.16); border: 1px solid rgba(54,149,238,.2); }
.ntm4-map-pin { position: absolute; width: 16px; height: 16px; color: #299867; }
.ntm4-map-pin svg { width: 16px; height: 16px; }
.ntm4-map-pin.pin-1 { left: 67px; top: 32px; }
.ntm4-map-pin.pin-2 { left: 212px; top: 35px; }
.ntm4-map-pin.pin-3 { left: 176px; top: 14px; }
.ntm4-map-pin.pin-4 { left: 45px; top: 70px; }
.ntm4-map-pin.pin-5 { left: 232px; top: 75px; }
.ntm4-map-main-pin { position: absolute; left: 130px; top: 47px; width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; color: #fff; background: #ff6c00; box-shadow: 0 7px 14px rgba(255,108,0,.24); }
.ntm4-map-main-pin svg { width: 21px; height: 21px; }
.ntm4-suggest-head { height: 28px; display: flex; align-items: end; justify-content: space-between; color: #12234a; }
.ntm4-suggest-head strong { font-size: 12px; font-weight: 950; }
.ntm4-suggest-head a { color: #126ee8; font-size: 9px; font-weight: 800; }
.ntm4-products { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 6px; }
.ntm4-product { min-height: 116px; border-radius: 9px; background: #fff; overflow: hidden; box-shadow: 0 4px 11px rgba(30,90,160,.08); }
.ntm4-product-img { height: 47px; }
.ntm4-product h3 { margin: 5px 5px 2px; color: #14284a; font-size: 8px; line-height: 1.14; font-weight: 850; }
.ntm4-product p { margin: 0 5px 5px; color: #5a6c80; font-size: 7px; line-height: 1.1; font-weight: 650; }
.ntm4-product div:last-child { display: flex; align-items: center; justify-content: space-between; padding: 0 5px; color: #126ee8; font-size: 7px; font-weight: 800; }
.ntm4-product div:last-child span { display: flex; align-items: center; gap: 2px; }
.ntm4-product div:last-child svg { width: 8px; height: 8px; }
.ntm4-product div:last-child b { padding: 2px 4px; border-radius: 999px; color: #1c9b60; background: #e8fbf1; font-size: 7px; }
.ntm4-phone-features { position: absolute; left: 13px; right: 13px; bottom: 13px; height: 62px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; border-radius: 13px; background: #fff; box-shadow: 0 -4px 14px rgba(20,80,150,.07); padding: 7px 5px; }
.ntm4-phone-features div { display: grid; place-items: center; text-align: center; color: #126ee8; font-size: 7px; line-height: 1.1; font-weight: 800; }
.ntm4-phone-features svg { width: 19px; height: 19px; margin-bottom: 3px; }
.ntm4-phone-features div:nth-child(1) svg { color: #0fae8a; }
.ntm4-qr-board {
  position: absolute;
  z-index: 22;
  right: 17px;
  top: 415px;
  width: 160px;
  height: 228px;
  border-radius: 10px;
  padding: 18px 12px 14px;
  background: #fff;
  border: 1px solid #d5e6f7;
  box-shadow: 0 12px 22px rgba(23,79,162,.18);
  text-align: center;
}
.ntm4-qr-board strong { display: block; color: #1e2940; font-size: 17px; line-height: 1.15; font-weight: 950; margin-bottom: 13px; }
.ntm4-qr-board .ntm4-qr { width: 108px; height: 108px; margin: 0 auto; }
.ntm4-bottom-scene {
  position: absolute;
  z-index: 20;
  left: 0;
  right: 0;
  bottom: 138px;
  height: 260px;
}
.ntm4-crates {
  position: absolute;
  left: 0;
  bottom: 40px;
  width: 385px;
  height: 120px;
  background: radial-gradient(circle at 8% 2%, #ef5430 0 13px, transparent 14px), radial-gradient(circle at 22% 0%, #6aaf3c 0 22px, transparent 23px), radial-gradient(circle at 39% 0%, #ff7442 0 15px, transparent 16px), linear-gradient(180deg, #c88442, #875229);
  border-radius: 8px 8px 0 0;
}
.ntm4-signboard {
  position: absolute;
  left: 110px;
  bottom: 51px;
  width: 175px;
  height: 102px;
  padding-top: 14px;
  border-radius: 5px;
  display: grid;
  place-items: center;
  color: #2e6a36;
  background: #fff7d8;
  border: 4px solid #c9a065;
  text-align: center;
  font-size: 17px;
  line-height: 1.14;
  font-weight: 950;
  transform: rotate(-2deg);
}
.ntm4-signboard span { color: #e43e31; font-size: 24px; line-height: 1; }
.ntm4-blue-strip {
  position: absolute;
  left: 67px;
  right: 67px;
  bottom: 0;
  height: 79px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 19px;
  color: #fff;
  background: linear-gradient(180deg, #177cff, #075bd2);
  box-shadow: 0 14px 25px rgba(0,83,190,.23);
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
}
.ntm4-blue-strip svg { width: 47px; height: 47px; }
.ntm4-blue-strip strong { color: #ffe63d; }
.ntm4-bottom-cta {
  position: absolute;
  z-index: 30;
  left: 30px;
  right: 30px;
  bottom: 31px;
  height: 82px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  color: #fff;
  background: linear-gradient(180deg, #ff7b11, #ff5f00);
  box-shadow: 0 14px 25px rgba(255,104,0,.26);
  font-size: 34px;
  line-height: 1;
  font-weight: 950;
}
.ntm4-bottom-cta svg { width: 45px; height: 45px; }
.ntm4-bottom-cta:hover,
.ntm4-blue-strip:hover { transform: translateY(-2px); filter: brightness(1.03); }

@media (max-width: 820px) {
  .ntm4-main { min-height: 1430px; }
  .ntm4-copy { width: 540px; margin-left: 34px; }
  .ntm4-copy h1 { font-size: 56px; }
  .ntm4-copy p { width: 490px; font-size: 22px; }
  .ntm4-layout { transform: scale(.9); transform-origin: top center; width: 111%; left: -5.5%; }
  .ntm4-bottom-scene { transform: scale(.9); transform-origin: bottom center; width: 111%; left: -5.5%; }
  .ntm4-bottom-cta { left: 24px; right: 24px; }
}

@media (max-width: 520px) {
  .ntm4-main { min-height: 1280px; }
  .ntm4-copy { width: calc(100% - 34px); margin: 0 auto; padding-top: 28px; }
  .ntm4-badge-row { gap: 12px; }
  .ntm4-badge-row span { width: 82px; height: 36px; font-size: 16px; }
  .ntm4-copy h1 { width: 100%; font-size: 38px; letter-spacing: -1.6px; }
  .ntm4-copy p { width: 100%; font-size: 17px; }
  .ntm4-layout { transform: scale(.68); width: 147%; left: -23.5%; top: -15px; }
  .ntm4-value-list { width: 330px; }
  .ntm4-value-card { min-height: 104px; }
  .ntm4-bottom-scene { transform: scale(.7); width: 143%; left: -21.5%; bottom: 100px; }
  .ntm4-bottom-cta { left: 18px; right: 18px; bottom: 30px; height: 68px; font-size: 24px; }
  .ntm4-bottom-cta svg { width: 34px; height: 34px; }
}
`;
