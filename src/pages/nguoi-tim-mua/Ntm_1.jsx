import React from "react";
import Header from "../../components/Header";
import Ntm_2 from "./Ntm_2";
import Ntm_3 from "./Ntm_3";
import Ntm_4 from "./Ntm_4";
import Ntm_5 from "./Ntm_5";
import Ntm_6 from "./Ntm_6";

const ntm1Benefits = [
  {
    icon: <PinIcon />,
    title: "Tìm đúng nơi",
    desc: "Gần bạn, nhanh chóng",
    tone: "blue",
  },
  {
    icon: <ShieldLeafIcon />,
    title: "Mua hàng an tâm",
    desc: "Hộ kinh doanh uy tín",
    tone: "green",
  },
  {
    icon: <HeartIcon />,
    title: "Ủng hộ địa phương",
    desc: "Kết nối cộng đồng",
    tone: "orange",
  },
];

const ntm1Products = [
  { name: "Mật ong nguyên chất", shop: "Hộ KD Thanh Xuân", distance: "120 m", rating: "4.8", color: "#d37b16" },
  { name: "Trà thảo mộc", shop: "Hộ KD An Nhiên", distance: "250 m", rating: "4.9", color: "#5ca46b" },
  { name: "Rau sạch Đà Lạt", shop: "Hộ KD Nông Xanh", distance: "350 m", rating: "4.7", color: "#4d9f42" },
];

export default function Ntm_1({ children }) {
  return (
    <section id="nguoi-tim-mua" className="ntm1-page" aria-label="Trang dành cho người tìm mua">
      <style>{css}</style>
      <Header activeKey="nguoi-tim-mua" />

      <main className="ntm1-main">
        <section className="ntm1-hero-copy">
          <div className="ntm1-page-badge">Page 6</div>
          <h1>Trang dành cho người tìm mua</h1>
          <p>
            Tìm đúng sản phẩm, đúng hộ kinh doanh, đúng vị trí gần bạn trên{" "}
            <strong>dothithongminh1.vn.</strong>
          </p>
          <a href="https://dothithongminh1.vn/search/" className="ntm1-search-btn">
            <SearchIcon />
            <span>Tìm sản phẩm</span>
          </a>
        </section>

        <section className="ntm1-visual" aria-label="Minh họa tìm mua sản phẩm gần bạn">
          <div className="ntm1-bg-city left"><i /><i /><i /></div>
          <div className="ntm1-bg-city right"><i /><i /><i /></div>
          <div className="ntm1-cloud cloud-a" />
          <div className="ntm1-cloud cloud-b" />
          <div className="ntm1-route">
            <span />
            <em>Gần bạn ›</em>
          </div>
          <div className="ntm1-location-pin"><PinIcon /></div>

          <div className="ntm1-shop">
            <div className="ntm1-shop-sign">CỬA HÀNG<br />ĐỊA PHƯƠNG</div>
            <div className="ntm1-awning" />
            <div className="ntm1-shop-body" />
          </div>

          <div className="ntm1-qr-stand">
            <strong>QUÉT ĐỂ XEM<br />SẢN PHẨM</strong>
            <QrGraphic />
          </div>

          <div className="ntm1-store-marker"><StoreIcon /></div>

          <PhoneMockup />
          <BuyerIllustration />
        </section>

        <section className="ntm1-benefits" aria-label="Lợi ích cho người tìm mua">
          {ntm1Benefits.map((item) => (
            <article className={`ntm1-benefit-card ${item.tone}`} key={item.title}>
              <div className="ntm1-benefit-icon">{item.icon}</div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </section>

        <a href="https://dothithongminh1.vn/search/" className="ntm1-bottom-cta">
          <SearchIcon />
          <span>Tìm sản phẩm</span>
        </a>
      </main>
      <div className="ntm1-embedded-sections">
        <Ntm_2 />
        <Ntm_3 />
        <Ntm_4 />
        <Ntm_5 />
        <Ntm_6 />
        {children}
      </div>

    </section>
  );
}

function PhoneMockup() {
  return (
    <section className="ntm1-phone" aria-label="Giao diện tìm sản phẩm trên điện thoại">
      <div className="ntm1-phone-speaker" />
      <div className="ntm1-phone-screen">
        <div className="ntm1-phone-status"><span>9:41</span><i /></div>
        <div className="ntm1-browser-bar"><LockIcon /><span>dothithongminh1.vn</span><BellIcon /></div>
        <div className="ntm1-mobile-search"><SearchIcon /><span>Tìm sản phẩm, cửa hàng...</span><TuneIcon /></div>
        <div className="ntm1-location-row"><PinIcon /><div><strong>Vị trí của bạn</strong><span>Phường Bình Thạnh, TP. Hồ Chí Minh</span></div><TargetIcon /></div>
        <div className="ntm1-map">
          <div className="ntm1-map-circle" />
          {[1, 2, 3, 4, 5].map((item) => <span key={item} className={`ntm1-map-pin pin-${item}`}><StoreIcon /></span>)}
          <div className="ntm1-map-main-pin"><StoreIcon /></div>
        </div>
        <div className="ntm1-suggest-head"><strong>Gợi ý gần bạn</strong><a href="#ntm1-more">Xem tất cả ›</a></div>
        <div className="ntm1-products">
          {ntm1Products.map((item) => (
            <article className="ntm1-product" key={item.name}>
              <div className="ntm1-product-img" style={{ background: item.color }} />
              <h3>{item.name}</h3>
              <p>{item.shop}</p>
              <div><span><PinSmallIcon />{item.distance}</span><b>★ {item.rating}</b></div>
            </article>
          ))}
        </div>
        <div className="ntm1-phone-features">
          <div><LeafIcon /><span>Sản phẩm<br />địa phương</span></div>
          <div><ShieldMiniIcon /><span>Hộ kinh doanh<br />uy tín</span></div>
          <div><TargetIcon /><span>Vị trí<br />chính xác</span></div>
          <div><CardShieldIcon /><span>Thanh toán<br />an toàn</span></div>
        </div>
      </div>
    </section>
  );
}

function BuyerIllustration() {
  return (
    <div className="ntm1-buyer" aria-hidden="true">
      <div className="ntm1-hair" />
      <div className="ntm1-face" />
      <div className="ntm1-neck" />
      <div className="ntm1-body" />
      <div className="ntm1-strap" />
      <div className="ntm1-arm" />
    </div>
  );
}

function QrGraphic() {
  return (
    <svg className="ntm1-qr" viewBox="0 0 100 100" fill="none">
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
function PinIcon() { return <Svg><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" fill="currentColor"/><circle cx="12" cy="10" r="3" fill="#fff"/></Svg>; }
function PinSmallIcon() { return <Svg><path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" fill="currentColor"/><circle cx="12" cy="10" r="2.2" fill="#fff"/></Svg>; }
function StoreIcon() { return <Svg><path d="M4 10h16l-1-5H5l-1 5Z" fill="currentColor" opacity=".22"/><path d="M5 10v10h14V10M3 10h18L19 5H5l-2 5Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round"/><path d="M8 20v-6h4v6M15 14h2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/></Svg>; }
function ShieldLeafIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="M9 13c4-6 8-4 8-4s-1 6-7 7c0 0-1-1.5-1-3Z" fill="#fff" opacity=".9"/><path d="M8 16c2-2.4 4.6-3.8 8-4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></Svg>; }
function HeartIcon() { return <Svg><path d="M12 21S4 16.4 4 9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 3.5C20 16.4 12 21 12 21Z" fill="currentColor"/></Svg>; }
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

.ntm1-page {
  position: relative;
  width: min(100%, 928px);
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background:
    radial-gradient(circle at 90% 5%, rgba(255,255,255,.95) 0 17%, transparent 35%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 58%, #fbfdff 100%);
}
.ntm1-main {
  position: relative;
  min-height: 1710px;
  overflow: hidden;
}
.ntm1-hero-copy {
  position: relative;
  z-index: 12;
  width: 570px;
  padding-top: 40px;
  margin-left: 50px;
}
.ntm1-page-badge {
  width: 102px;
  height: 44px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  color: #1557bd;
  background: #dbeafe;
  font-size: 22px;
  line-height: 1;
  font-weight: 850;
  margin-bottom: 24px;
}
.ntm1-hero-copy h1 {
  margin: 0 0 22px;
  color: #050d4e;
  font-size: 70px;
  line-height: 1.08;
  letter-spacing: -3px;
  font-weight: 950;
}
.ntm1-hero-copy p {
  margin: 0 0 30px;
  color: #26374f;
  font-size: 25px;
  line-height: 1.43;
  font-weight: 500;
}
.ntm1-hero-copy p strong {
  color: #126ee8;
  font-weight: 850;
}
.ntm1-search-btn {
  width: 357px;
  height: 82px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 19px;
  color: #fff;
  background: linear-gradient(180deg, #ff7b11, #ff5f00);
  box-shadow: 0 14px 25px rgba(255,104,0,.26);
  font-size: 34px;
  line-height: 1;
  font-weight: 950;
}
.ntm1-search-btn svg {
  width: 45px;
  height: 45px;
}
.ntm1-visual {
  position: absolute;
  z-index: 3;
  inset: 150px 0 0;
}
.ntm1-visual::before {
  content: "";
  position: absolute;
  right: -120px;
  top: -86px;
  width: 545px;
  height: 545px;
  border-radius: 50%;
  background: rgba(215,237,255,.68);
}
.ntm1-bg-city {
  position: absolute;
  display: flex;
  align-items: flex-end;
  gap: 13px;
  opacity: .34;
}
.ntm1-bg-city.left { left: 24px; top: 450px; }
.ntm1-bg-city.right { right: 14px; top: 170px; }
.ntm1-bg-city i {
  width: 45px;
  height: 112px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.28), rgba(85,154,219,.08));
}
.ntm1-bg-city i:nth-child(2) { height: 165px; }
.ntm1-bg-city i:nth-child(3) { height: 130px; }
.ntm1-cloud,
.ntm1-cloud::before,
.ntm1-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.9);
}
.ntm1-cloud.cloud-a { right: 122px; top: 165px; width: 145px; height: 25px; }
.ntm1-cloud.cloud-a::before { width: 58px; height: 58px; left: 24px; top: -31px; }
.ntm1-cloud.cloud-a::after { width: 77px; height: 77px; left: 70px; top: -47px; }
.ntm1-cloud.cloud-b { right: 270px; top: 265px; width: 105px; height: 18px; opacity: .8; }
.ntm1-cloud.cloud-b::before { width: 38px; height: 38px; left: 18px; top: -18px; }
.ntm1-cloud.cloud-b::after { width: 55px; height: 55px; left: 45px; top: -31px; }
.ntm1-route {
  position: absolute;
  z-index: 6;
  right: 206px;
  top: 290px;
  width: 230px;
  height: 140px;
  border: 3px dashed #5b9df4;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  transform: rotate(-28deg);
}
.ntm1-route span {
  position: absolute;
  left: -8px;
  top: 61px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #2e78eb;
}
.ntm1-route em {
  position: absolute;
  right: -3px;
  top: 50px;
  width: 110px;
  height: 36px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #2b74e8;
  font-size: 17px;
  font-weight: 850;
  font-style: normal;
  transform: rotate(28deg);
}
.ntm1-location-pin {
  position: absolute;
  z-index: 9;
  right: 221px;
  top: 243px;
  color: #ff7609;
}
.ntm1-location-pin svg {
  width: 82px;
  height: 82px;
  filter: drop-shadow(0 8px 12px rgba(255,113,0,.25));
}
.ntm1-shop {
  position: absolute;
  z-index: 5;
  right: 0;
  top: 370px;
  width: 300px;
  height: 485px;
}
.ntm1-shop-sign {
  position: absolute;
  z-index: 4;
  left: 18px;
  top: 0;
  width: 230px;
  height: 106px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #3c7658;
  border: 7px solid #c3d5bf;
  font-size: 27px;
  line-height: 1.14;
  text-align: center;
  font-weight: 950;
  transform: rotate(-5deg);
  box-shadow: 0 12px 18px rgba(28,72,62,.22);
}
.ntm1-awning {
  position: absolute;
  z-index: 2;
  left: 0;
  right: -20px;
  top: 90px;
  height: 98px;
  border-radius: 12px 12px 35px 35px;
  background: repeating-linear-gradient(115deg, #2f795b 0 46px, #f4ead8 46px 92px);
  box-shadow: 0 12px 20px rgba(42,90,67,.2);
}
.ntm1-shop-body {
  position: absolute;
  left: 20px;
  right: -10px;
  bottom: 0;
  top: 150px;
  border-radius: 12px 0 0 0;
  background: linear-gradient(180deg, rgba(109,77,49,.42), rgba(88,64,43,.72));
  box-shadow: inset 0 0 0 999px rgba(255,255,255,.06);
}
.ntm1-qr-stand {
  position: absolute;
  z-index: 11;
  left: 13px;
  top: 802px;
  width: 147px;
  height: 228px;
  padding: 18px 12px 14px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #d5e6f7;
  box-shadow: 0 12px 22px rgba(23,79,162,.18);
  text-align: center;
}
.ntm1-qr-stand strong {
  display: block;
  color: #1e2940;
  font-size: 15px;
  line-height: 1.2;
  font-weight: 950;
  margin-bottom: 12px;
}
.ntm1-qr-stand .ntm1-qr {
  width: 103px;
  height: 103px;
  margin: 0 auto;
}
.ntm1-tea-box {
  position: absolute;
  z-index: 10;
  left: 41px;
  top: 1030px;
  width: 125px;
  height: 98px;
  padding-top: 21px;
  color: #fff;
  background: #586c2d;
  border-radius: 3px;
  text-align: center;
  font-size: 15px;
  line-height: 1.18;
  font-weight: 850;
  box-shadow: 0 10px 18px rgba(51,70,28,.25);
}
.ntm1-store-marker {
  position: absolute;
  z-index: 8;
  left: 58px;
  top: 650px;
  width: 99px;
  height: 99px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #126ee8;
  background: #fff;
  border: 4px solid #3c88ee;
  box-shadow: 0 12px 22px rgba(18,110,232,.18);
}
.ntm1-store-marker svg {
  width: 61px;
  height: 61px;
}
.ntm1-phone {
  position: absolute;
  z-index: 16;
  left: 183px;
  top: 500px;
  width: 425px;
  height: 775px;
  border-radius: 48px;
  background: #151515;
  padding: 17px;
  box-shadow: 0 22px 33px rgba(0,0,0,.28);
}
.ntm1-phone-speaker {
  position: absolute;
  left: 50%;
  top: 11px;
  width: 110px;
  height: 19px;
  border-radius: 999px;
  background: #060606;
  transform: translateX(-50%);
  z-index: 4;
}
.ntm1-phone-screen {
  position: relative;
  height: 100%;
  border-radius: 34px;
  overflow: hidden;
  background: #f8fbff;
  border: 1px solid #dce7f5;
  padding: 18px 18px 14px;
}
.ntm1-phone-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  color: #0e1628;
  font-size: 13px;
  font-weight: 900;
}
.ntm1-phone-status i {
  width: 52px;
  height: 13px;
  border-radius: 999px;
  background: linear-gradient(90deg, #111 0 17px, transparent 17px 22px, #111 22px 30px, transparent 30px 34px, #111 34px 52px);
}
.ntm1-browser-bar {
  height: 39px;
  border-radius: 18px;
  display: grid;
  grid-template-columns: 23px 1fr 24px;
  align-items: center;
  gap: 8px;
  padding: 0 14px;
  background: #eef3f8;
  color: #566579;
  font-size: 16px;
  font-weight: 700;
}
.ntm1-browser-bar svg { width: 19px; height: 19px; }
.ntm1-mobile-search {
  height: 49px;
  margin-top: 16px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  align-items: center;
  gap: 7px;
  padding: 0 13px;
  background: #fff;
  border: 2px solid #d9e7fa;
  color: #7b8ba2;
  font-size: 14px;
  font-weight: 650;
}
.ntm1-mobile-search svg { color: #1c5fce; width: 24px; height: 24px; }
.ntm1-location-row {
  min-height: 59px;
  margin-top: 13px;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 31px 1fr 30px;
  align-items: center;
  gap: 7px;
  padding: 10px 12px;
  background: #eaf4ff;
  color: #126ee8;
}
.ntm1-location-row svg { width: 24px; height: 24px; }
.ntm1-location-row strong {
  display: block;
  color: #183153;
  font-size: 12px;
  line-height: 1.1;
  font-weight: 850;
}
.ntm1-location-row span {
  display: block;
  margin-top: 2px;
  color: #39536f;
  font-size: 10px;
  line-height: 1.15;
  font-weight: 650;
}
.ntm1-map {
  position: relative;
  height: 161px;
  margin-top: 13px;
  border-radius: 13px;
  overflow: hidden;
  background:
    linear-gradient(30deg, transparent 0 45%, rgba(167,204,180,.44) 45% 53%, transparent 53%),
    linear-gradient(110deg, transparent 0 35%, rgba(189,210,231,.75) 35% 39%, transparent 39%),
    linear-gradient(170deg, transparent 0 46%, rgba(189,210,231,.75) 46% 50%, transparent 50%),
    #eef5f2;
  border: 1px solid #d9e7fa;
}
.ntm1-map-circle {
  position: absolute;
  left: 91px;
  top: 24px;
  width: 133px;
  height: 133px;
  border-radius: 50%;
  background: rgba(54,149,238,.16);
  border: 1px solid rgba(54,149,238,.2);
}
.ntm1-map-pin {
  position: absolute;
  width: 20px;
  height: 20px;
  color: #299867;
}
.ntm1-map-pin svg { width: 20px; height: 20px; }
.ntm1-map-pin.pin-1 { left: 86px; top: 42px; }
.ntm1-map-pin.pin-2 { left: 262px; top: 48px; }
.ntm1-map-pin.pin-3 { left: 218px; top: 22px; }
.ntm1-map-pin.pin-4 { left: 60px; top: 92px; }
.ntm1-map-pin.pin-5 { left: 281px; top: 110px; }
.ntm1-map-main-pin {
  position: absolute;
  left: 163px;
  top: 83px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #ff6c00;
  box-shadow: 0 7px 14px rgba(255,108,0,.24);
}
.ntm1-map-main-pin svg { width: 25px; height: 25px; }
.ntm1-suggest-head {
  height: 34px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  color: #12234a;
}
.ntm1-suggest-head strong {
  font-size: 15px;
  font-weight: 950;
}
.ntm1-suggest-head a {
  color: #126ee8;
  font-size: 12px;
  font-weight: 800;
}
.ntm1-products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 8px;
}
.ntm1-product {
  min-height: 143px;
  border-radius: 11px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 4px 11px rgba(30,90,160,.08);
}
.ntm1-product-img {
  height: 59px;
  background: #d37b16;
}
.ntm1-product h3 {
  margin: 7px 7px 2px;
  color: #14284a;
  font-size: 10px;
  line-height: 1.16;
  font-weight: 850;
}
.ntm1-product p {
  margin: 0 7px 7px;
  color: #5a6c80;
  font-size: 9px;
  line-height: 1.1;
  font-weight: 650;
}
.ntm1-product div:last-child {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7px;
  color: #126ee8;
  font-size: 9px;
  font-weight: 800;
}
.ntm1-product div:last-child span {
  display: flex;
  align-items: center;
  gap: 2px;
}
.ntm1-product div:last-child svg {
  width: 10px;
  height: 10px;
}
.ntm1-product div:last-child b {
  padding: 3px 6px;
  border-radius: 999px;
  color: #1c9b60;
  background: #e8fbf1;
  font-size: 9px;
}
.ntm1-phone-features {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  height: 82px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  border-radius: 17px;
  background: #fff;
  box-shadow: 0 -4px 14px rgba(20,80,150,.07);
  padding: 10px 8px;
}
.ntm1-phone-features div {
  display: grid;
  place-items: center;
  text-align: center;
  color: #126ee8;
  font-size: 9px;
  line-height: 1.1;
  font-weight: 800;
}
.ntm1-phone-features svg {
  width: 25px;
  height: 25px;
  margin-bottom: 4px;
}
.ntm1-phone-features div:nth-child(1) svg { color: #0fae8a; }
.ntm1-buyer {
  position: absolute;
  z-index: 18;
  right: -14px;
  top: 620px;
  width: 350px;
  height: 636px;
}
.ntm1-hair {
  position: absolute;
  right: 22px;
  top: 0;
  width: 280px;
  height: 318px;
  border-radius: 140px 140px 70px 90px;
  background: radial-gradient(circle at 68% 38%, #342336 0 38%, #211928 70%);
  transform: rotate(-16deg);
}
.ntm1-face {
  position: absolute;
  right: 67px;
  top: 118px;
  width: 148px;
  height: 193px;
  border-radius: 47%;
  background: #ffbd8c;
  transform: rotate(-12deg);
}
.ntm1-neck {
  position: absolute;
  right: 114px;
  top: 290px;
  width: 72px;
  height: 74px;
  border-radius: 0 0 30px 30px;
  background: #f4a978;
}
.ntm1-body {
  position: absolute;
  right: 20px;
  bottom: 0;
  width: 270px;
  height: 320px;
  border-radius: 118px 118px 0 0;
  background: linear-gradient(180deg, #246cc2, #0b57b2);
}
.ntm1-strap {
  position: absolute;
  right: 0;
  top: 356px;
  width: 42px;
  height: 268px;
  border-radius: 999px;
  border: 13px solid #dac2a5;
  border-left: 0;
  background: transparent;
}
.ntm1-arm {
  position: absolute;
  left: 23px;
  top: 388px;
  width: 220px;
  height: 41px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(-18deg);
}
.ntm1-hand {
  position: absolute;
  left: 11px;
  top: 370px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #ffbd8c;
}
.ntm1-benefits {
  position: absolute;
  z-index: 24;
  left: 16px;
  right: 16px;
  bottom: 154px;
  min-height: 123px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  background: rgba(255,255,255,.98);
  box-shadow: 0 16px 28px rgba(23,79,162,.14);
  overflow: hidden;
}
.ntm1-benefit-card {
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  gap: 14px;
  padding: 26px 25px;
  position: relative;
}
.ntm1-benefit-card:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 25px;
  bottom: 25px;
  width: 1px;
  background: #d9e5f2;
}
.ntm1-benefit-icon {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #126ee8;
}
.ntm1-benefit-icon svg {
  width: 42px;
  height: 42px;
}
.ntm1-benefit-card.green .ntm1-benefit-icon { background: #0fbf8a; }
.ntm1-benefit-card.orange .ntm1-benefit-icon { background: #ff7a00; }
.ntm1-benefit-card h2 {
  margin: 0 0 6px;
  color: #20324e;
  font-size: 18px;
  line-height: 1.1;
  font-weight: 950;
}
.ntm1-benefit-card p {
  margin: 0;
  color: #55677f;
  font-size: 15px;
  line-height: 1.15;
  font-weight: 600;
}
.ntm1-bottom-cta {
  position: absolute;
  z-index: 25;
  left: 32px;
  right: 32px;
  bottom: 40px;
  height: 80px;
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
.ntm1-bottom-cta svg {
  width: 45px;
  height: 45px;
}
.ntm1-search-btn:hover,
.ntm1-bottom-cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}
.ntm1-embedded-sections {
  position: relative;
  z-index: 2;
  width: 100%;
}

@media (max-width: 820px) {
  .ntm1-main { min-height: 1570px; }
  .ntm1-hero-copy { width: 520px; margin-left: 34px; }
  .ntm1-hero-copy h1 { font-size: 60px; }
  .ntm1-hero-copy p { font-size: 22px; }
  .ntm1-visual { transform: scale(.9); transform-origin: top center; width: 111%; left: -5.5%; }
  .ntm1-benefits { bottom: 140px; }
  .ntm1-benefit-card { grid-template-columns: 58px 1fr; padding: 18px 14px; gap: 10px; }
  .ntm1-benefit-icon { width: 54px; height: 54px; }
  .ntm1-benefit-icon svg { width: 34px; height: 34px; }
  .ntm1-benefit-card h2 { font-size: 16px; }
  .ntm1-benefit-card p { font-size: 13px; }
}

@media (max-width: 520px) {
  .ntm1-main { min-height: 1420px; }
  .ntm1-hero-copy { width: calc(100% - 34px); margin: 0 auto; padding-top: 28px; }
  .ntm1-page-badge { width: 90px; height: 38px; font-size: 18px; }
  .ntm1-hero-copy h1 { font-size: 40px; letter-spacing: -1.6px; }
  .ntm1-hero-copy p { font-size: 17px; }
  .ntm1-search-btn { width: 260px; height: 62px; font-size: 24px; }
  .ntm1-search-btn svg { width: 34px; height: 34px; }
  .ntm1-visual { transform: scale(.67); width: 150%; left: -25%; top: 165px; }
  .ntm1-benefits { left: 14px; right: 14px; bottom: 132px; grid-template-columns: 1fr; min-height: auto; }
  .ntm1-benefit-card { min-height: 74px; }
  .ntm1-benefit-card:not(:last-child)::after { left: 18px; right: 18px; top: auto; bottom: 0; width: auto; height: 1px; }
  .ntm1-bottom-cta { left: 18px; right: 18px; bottom: 36px; height: 68px; font-size: 24px; }
  .ntm1-bottom-cta svg { width: 34px; height: 34px; }
}
`;
