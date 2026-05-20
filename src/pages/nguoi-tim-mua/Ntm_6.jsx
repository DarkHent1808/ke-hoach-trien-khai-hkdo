import React from "react";

const ntm6Benefits = [
  { icon: <PinIcon />, title: "Gần bạn", desc: "Nhanh chóng", tone: "blue" },
  { icon: <ShieldLeafIcon />, title: "Hộ kinh doanh", desc: "Uy tín", tone: "green" },
  { icon: <HeartIcon />, title: "Sản phẩm", desc: "Chất lượng", tone: "orange" },
  { icon: <CardShieldIcon />, title: "Thanh toán", desc: "An toàn", tone: "blue" },
];

const ntm6Products = [
  { name: "Mật ong nguyên chất", shop: "Hộ KD Thanh Xuân", distance: "120 m", rating: "4.9", color: "#d47a18" },
  { name: "Trà thảo mộc", shop: "Hộ KD An Nhiên", distance: "250 m", rating: "4.9", color: "#68a96f" },
  { name: "Rau sạch Đà Lạt", shop: "Hộ KD Nông Xanh", distance: "350 m", rating: "4.8", color: "#4c9d3f" },
];

export default function Ntm_6() {
  return (
    <section id="ntm-san-sang-tim-mua" className="ntm6-page" aria-label="Tìm đúng sản phẩm đúng hộ kinh doanh đúng gần bạn">
      <style>{css}</style>

      <main className="ntm6-main">
        <section className="ntm6-copy">
          <div className="ntm6-badge-row">
            <span>Page 6</span>
            <span>Màn 6</span>
          </div>

          <h1>Tìm đúng sản phẩm, đúng hộ kinh doanh, đúng gần bạn</h1>
          <p>Bắt đầu tìm mua trên <strong>dothithongminh1.vn</strong> hoặc quét QR tại các điểm bán trong khu vực của bạn.</p>

          <a href="#ntm-search-products" className="ntm6-main-cta">
            <SearchIcon />
            <span>Tìm sản phẩm</span>
          </a>
          <a href="#ntm-qr" className="ntm6-qr-link">
            <QrIcon />
            <span>Quét QR hoặc vào dothithongminh1.vn</span>
          </a>
        </section>

        <section className="ntm6-visual" aria-label="Minh họa tìm mua địa phương">
          <div className="ntm6-bg-city"><i /><i /><i /><i /></div>
          <div className="ntm6-cloud cloud-a" />
          <div className="ntm6-cloud cloud-b" />
          <div className="ntm6-route"><em>Gần bạn ›</em></div>
          <div className="ntm6-pin-float"><PinIcon /></div>

          <div className="ntm6-left-shop">
            <div className="sign">CỬA HÀNG<br />ĐỊA PHƯƠNG<br />UY TÍN</div>
            <div className="awning" />
            <div className="body" />
            <SellerWoman />
            <div className="qr-stand">
              <strong>QUÉT ĐỂ XEM<br />SẢN PHẨM</strong>
              <QrGraphic />
              <span>TÌM ĐÚNG - MUA DỄ<br />HỖ TRỢ KINH DOANH<br />ĐỊA PHƯƠNG ♥</span>
            </div>
          </div>

          <div className="ntm6-right-shop">
            <div className="sign">HỘ KINH DOANH<br />ĐỒNG HÀNH<br />CÙNG CỘNG ĐỒNG<br /><span>♥</span></div>
            <div className="awning" />
            <div className="body" />
          </div>

          <PhoneMockup />
          <HappyGroup />
          <div className="ntm6-local-sign">SẢN PHẨM<br />ĐỊA PHƯƠNG<br />TƯƠI NGON<br />AN TOÀN</div>
          <div className="ntm6-support-bubble">ỦNG HỘ<br />HỘ KINH DOANH<br />ĐỊA PHƯƠNG<br />♥</div>
        </section>

        <section className="ntm6-benefits" aria-label="Lợi ích chính">
          {ntm6Benefits.map((item) => (
            <article className={`ntm6-benefit ${item.tone}`} key={item.title}>
              <div>{item.icon}</div>
              <section>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </section>
            </article>
          ))}
        </section>

        <a href="#ntm-search-products" className="ntm6-bottom-cta">
          <SearchIcon />
          <span>Tìm sản phẩm</span>
        </a>
      </main>
    </section>
  );
}

function PhoneMockup() {
  return (
    <section className="ntm6-phone" aria-label="Giao diện tìm mua trên điện thoại">
      <div className="ntm6-phone-speaker" />
      <div className="ntm6-phone-screen">
        <div className="ntm6-status"><span>9:41</span><i /></div>
        <div className="ntm6-browser"><LockIcon /><span>dothithongminh1.vn</span><BellIcon /></div>
        <div className="ntm6-mobile-search"><SearchIcon /><span>Tìm sản phẩm, cửa hàng...</span><TuneIcon /></div>

        <div className="ntm6-location-row">
          <PinSmallIcon />
          <div><strong>Vị trí của bạn</strong><span>Phường Bình Thạnh, TP. Hồ Chí Minh</span></div>
          <TargetIcon />
        </div>

        <div className="ntm6-map">
          <div className="ntm6-map-circle" />
          {[1, 2, 3, 4, 5].map((item) => <span key={item} className={`ntm6-map-pin pin-${item}`}><StoreIcon /></span>)}
          <div className="ntm6-map-main-pin"><StoreIcon /></div>
        </div>

        <div className="ntm6-suggest-head"><strong>Gợi ý gần bạn</strong><a href="#ntm-more-products">Xem tất cả ›</a></div>
        <div className="ntm6-products">
          {ntm6Products.map((item) => (
            <article className="ntm6-product" key={item.name}>
              <div className="ntm6-product-img" style={{ background: item.color }} />
              <h3>{item.name}</h3>
              <p>{item.shop}</p>
              <div><span><PinSmallIcon />{item.distance}</span><b>★ {item.rating}</b></div>
            </article>
          ))}
        </div>

        <div className="ntm6-phone-features">
          <div><LeafIcon /><span>Sản phẩm<br />địa phương</span></div>
          <div><ShieldMiniIcon /><span>Hộ kinh doanh<br />uy tín</span></div>
          <div><TargetIcon /><span>Vị trí<br />chính xác</span></div>
          <div><CardShieldIcon /><span>Thanh toán<br />an toàn</span></div>
        </div>
      </div>
    </section>
  );
}

function SellerWoman() {
  return <div className="ntm6-seller-woman" aria-hidden="true"><div className="hair" /><div className="face" /><div className="body" /><div className="arm" /></div>;
}
function HappyGroup() {
  return (
    <div className="ntm6-group" aria-hidden="true">
      <div className="person old"><div className="hair" /><div className="face" /><div className="body" /></div>
      <div className="person girl"><div className="hair" /><div className="face" /><div className="body" /><div className="phone" /></div>
      <div className="person boy"><div className="hair" /><div className="face" /><div className="body" /></div>
      <div className="crate" />
    </div>
  );
}

function QrGraphic() {
  return (
    <svg className="ntm6-qr" viewBox="0 0 100 100" fill="none">
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
function LockIcon() { return <Svg><rect x="5" y="10" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function BellIcon() { return <Svg><path d="M6 10a6 6 0 1 1 12 0v4l2 3H4l2-3v-4Z" fill="currentColor"/><path d="M10 20h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function TuneIcon() { return <Svg><path d="M4 7h10M18 7h2M4 17h2M10 17h10M8 4v6M16 14v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function TargetIcon() { return <Svg><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function LeafIcon() { return <Svg><path d="M5 19c9 0 14-6 14-15C10 4 5 9 5 19Z" fill="currentColor"/><path d="M5 19c3-5 7-8 12-10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function ShieldMiniIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="m9 12 2 2 4-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function ShieldLeafIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="M9 13c4-6 8-4 8-4s-1 6-7 7c0 0-1-1.5-1-3Z" fill="#fff" opacity=".9"/></Svg>; }
function HeartIcon() { return <Svg><path d="M12 21S4 16.4 4 9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 3.5C20 16.4 12 21 12 21Z" fill="currentColor"/></Svg>; }
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

.ntm6-page {
  position: relative;
  width: min(100%, 928px);
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background:
    radial-gradient(circle at 88% 2%, rgba(255,255,255,.95) 0 17%, transparent 36%),
    linear-gradient(180deg, #fbfdff 0%, #edf8ff 58%, #fbfdff 100%);
}
.ntm6-main {
  position: relative;
  min-height: 1518px;
  overflow: hidden;
}
.ntm6-copy {
  position: relative;
  z-index: 18;
  width: 660px;
  padding-top: 42px;
  margin-left: 48px;
}
.ntm6-badge-row {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;
}
.ntm6-badge-row span {
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
.ntm6-copy h1 {
  margin: 0 0 23px;
  color: #050d4e;
  font-size: 61px;
  line-height: 1.09;
  letter-spacing: -2.8px;
  font-weight: 950;
}
.ntm6-copy p {
  width: 520px;
  margin: 0 0 26px;
  color: #26374f;
  font-size: 24px;
  line-height: 1.43;
  font-weight: 500;
}
.ntm6-copy p strong {
  color: #126ee8;
  font-weight: 900;
}
.ntm6-main-cta {
  width: 382px;
  height: 74px;
  margin: 0 0 10px 217px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 19px;
  color: #fff;
  background: linear-gradient(180deg, #ff7b11, #ff5f00);
  box-shadow: 0 14px 25px rgba(255,104,0,.26);
  font-size: 32px;
  line-height: 1;
  font-weight: 950;
}
.ntm6-main-cta svg { width: 42px; height: 42px; }
.ntm6-qr-link {
  width: 382px;
  height: 36px;
  margin-left: 217px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #126ee8;
  background: #fff;
  border: 1px solid #b8d8ff;
  box-shadow: 0 6px 14px rgba(31,101,178,.08);
  font-size: 15px;
  font-weight: 850;
}
.ntm6-qr-link svg { width: 20px; height: 20px; }
.ntm6-visual {
  position: absolute;
  inset: 0;
  z-index: 2;
}
.ntm6-bg-city {
  position: absolute;
  right: 6px;
  top: 210px;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  opacity: .34;
}
.ntm6-bg-city i {
  width: 45px;
  height: 112px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.28), rgba(85,154,219,.08));
}
.ntm6-bg-city i:nth-child(2) { height: 178px; }
.ntm6-bg-city i:nth-child(3) { height: 133px; }
.ntm6-bg-city i:nth-child(4) { height: 150px; }
.ntm6-cloud,
.ntm6-cloud::before,
.ntm6-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.92);
}
.ntm6-cloud.cloud-a { right: 110px; top: 225px; width: 135px; height: 25px; }
.ntm6-cloud.cloud-a::before { width: 55px; height: 55px; left: 24px; top: -30px; }
.ntm6-cloud.cloud-a::after { width: 74px; height: 74px; left: 71px; top: -46px; }
.ntm6-cloud.cloud-b { right: 294px; top: 325px; width: 95px; height: 18px; opacity: .82; }
.ntm6-cloud.cloud-b::before { width: 40px; height: 40px; left: 17px; top: -18px; }
.ntm6-cloud.cloud-b::after { width: 52px; height: 52px; left: 43px; top: -31px; }
.ntm6-route {
  position: absolute;
  z-index: 8;
  right: 209px;
  top: 235px;
  width: 255px;
  height: 152px;
  border: 3px dashed #5b9df4;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  transform: rotate(-23deg);
}
.ntm6-route em {
  position: absolute;
  right: 8px;
  top: 36px;
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
  transform: rotate(23deg);
}
.ntm6-pin-float {
  position: absolute;
  z-index: 9;
  right: 165px;
  top: 205px;
  color: #ff7609;
}
.ntm6-pin-float svg { width: 76px; height: 76px; filter: drop-shadow(0 8px 12px rgba(255,113,0,.25)); }
.ntm6-left-shop,
.ntm6-right-shop {
  position: absolute;
  z-index: 4;
}
.ntm6-left-shop { left: -33px; top: 565px; width: 250px; height: 450px; }
.ntm6-right-shop { right: -18px; top: 418px; width: 300px; height: 560px; }
.ntm6-left-shop .sign,
.ntm6-right-shop .sign {
  position: absolute;
  z-index: 8;
  border-radius: 9px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #3c7658;
  border: 7px solid #c3d5bf;
  text-align: center;
  font-weight: 950;
  box-shadow: 0 12px 18px rgba(28,72,62,.22);
}
.ntm6-left-shop .sign {
  left: 15px;
  top: 0;
  width: 210px;
  height: 103px;
  font-size: 24px;
  line-height: 1.12;
  transform: rotate(-6deg);
}
.ntm6-right-shop .sign {
  right: 20px;
  top: 0;
  width: 250px;
  height: 148px;
  font-size: 22px;
  line-height: 1.18;
  transform: rotate(1deg);
}
.ntm6-right-shop .sign span { color: #fff; font-size: 27px; }
.ntm6-left-shop .awning,
.ntm6-right-shop .awning {
  position: absolute;
  z-index: 5;
  left: 0;
  right: -15px;
  background: repeating-linear-gradient(115deg, #2f795b 0 44px, #f4ead8 44px 88px);
  box-shadow: 0 12px 20px rgba(42,90,67,.2);
}
.ntm6-left-shop .awning { top: 91px; height: 88px; border-radius: 12px 12px 31px 31px; }
.ntm6-right-shop .awning { top: 134px; height: 98px; border-radius: 12px 12px 35px 35px; }
.ntm6-left-shop .body,
.ntm6-right-shop .body {
  position: absolute;
  z-index: 3;
  left: 18px;
  right: -15px;
  bottom: 0;
  background: linear-gradient(180deg, rgba(116,82,52,.43), rgba(88,64,43,.76));
}
.ntm6-left-shop .body { top: 144px; }
.ntm6-right-shop .body { top: 205px; }
.ntm6-seller-woman {
  position: absolute;
  z-index: 12;
  left: 72px;
  top: 190px;
  width: 150px;
  height: 236px;
}
.ntm6-seller-woman .hair { position: absolute; left: 33px; top: 0; width: 85px; height: 74px; border-radius: 50%; background: #1f1714; }
.ntm6-seller-woman .face { position: absolute; left: 40px; top: 57px; width: 67px; height: 82px; border-radius: 47%; background: #ffbd8c; }
.ntm6-seller-woman .body { position: absolute; left: 10px; bottom: 0; width: 125px; height: 135px; border-radius: 60px 60px 0 0; background: #ece2ce; }
.ntm6-seller-woman .arm { position: absolute; left: 0; top: 126px; width: 108px; height: 24px; border-radius: 999px; background: #ffbd8c; transform: rotate(-20deg); }
.ntm6-left-shop .qr-stand {
  position: absolute;
  z-index: 17;
  left: 6px;
  top: 260px;
  width: 153px;
  min-height: 228px;
  border-radius: 10px;
  padding: 14px 11px 12px;
  background: #fff;
  border: 1px solid #d5e6f7;
  box-shadow: 0 12px 22px rgba(23,79,162,.18);
  text-align: center;
}
.ntm6-left-shop .qr-stand strong { display: block; color: #1e2940; font-size: 15px; line-height: 1.15; font-weight: 950; margin-bottom: 9px; }
.ntm6-left-shop .qr-stand .ntm6-qr { width: 98px; height: 98px; margin: 0 auto 10px; }
.ntm6-left-shop .qr-stand span { display: block; padding: 8px 7px; border-radius: 0 0 8px 8px; color: #fff; background: #126ee8; font-size: 12px; line-height: 1.2; font-weight: 850; }
.ntm6-phone {
  position: absolute;
  z-index: 16;
  left: 272px;
  top: 570px;
  width: 382px;
  height: 710px;
  border-radius: 48px;
  background: #151515;
  padding: 15px;
  box-shadow: 0 22px 33px rgba(0,0,0,.28);
}
.ntm6-phone-speaker {
  position: absolute;
  left: 50%;
  top: 10px;
  width: 116px;
  height: 25px;
  border-radius: 999px;
  background: #060606;
  transform: translateX(-50%);
  z-index: 4;
}
.ntm6-phone-screen {
  position: relative;
  height: 100%;
  border-radius: 34px;
  overflow: hidden;
  background: #f8fbff;
  border: 1px solid #dce7f5;
  padding: 17px 17px 14px;
}
.ntm6-status { display: flex; justify-content: space-between; align-items: center; height: 32px; color: #0e1628; font-size: 13px; font-weight: 900; }
.ntm6-status i { width: 52px; height: 13px; border-radius: 999px; background: linear-gradient(90deg, #111 0 17px, transparent 17px 22px, #111 22px 30px, transparent 30px 34px, #111 34px 52px); }
.ntm6-browser { height: 38px; border-radius: 18px; display: grid; grid-template-columns: 23px 1fr 24px; align-items: center; gap: 8px; padding: 0 14px; background: #eef3f8; color: #566579; font-size: 14px; font-weight: 700; }
.ntm6-browser svg { width: 18px; height: 18px; }
.ntm6-mobile-search { height: 48px; margin-top: 15px; border-radius: 14px; display: grid; grid-template-columns: 30px 1fr 30px; align-items: center; gap: 7px; padding: 0 13px; background: #fff; border: 2px solid #d9e7fa; color: #7b8ba2; font-size: 13px; font-weight: 650; }
.ntm6-mobile-search svg { color: #1c5fce; width: 23px; height: 23px; }
.ntm6-location-row { min-height: 58px; margin-top: 12px; border-radius: 12px; display: grid; grid-template-columns: 30px 1fr 30px; align-items: center; gap: 7px; padding: 10px 12px; background: #eaf4ff; color: #126ee8; }
.ntm6-location-row svg { width: 23px; height: 23px; }
.ntm6-location-row strong { display: block; color: #183153; font-size: 11px; line-height: 1.1; font-weight: 850; }
.ntm6-location-row span { display: block; margin-top: 2px; color: #39536f; font-size: 9px; line-height: 1.15; font-weight: 650; }
.ntm6-map { position: relative; height: 157px; margin-top: 12px; border-radius: 13px; overflow: hidden; background: linear-gradient(30deg, transparent 0 45%, rgba(167,204,180,.44) 45% 53%, transparent 53%), linear-gradient(110deg, transparent 0 35%, rgba(189,210,231,.75) 35% 39%, transparent 39%), linear-gradient(170deg, transparent 0 46%, rgba(189,210,231,.75) 46% 50%, transparent 50%), #eef5f2; border: 1px solid #d9e7fa; }
.ntm6-map-circle { position: absolute; left: 82px; top: 22px; width: 132px; height: 132px; border-radius: 50%; background: rgba(54,149,238,.16); border: 1px solid rgba(54,149,238,.2); }
.ntm6-map-pin { position: absolute; width: 20px; height: 20px; color: #299867; }
.ntm6-map-pin svg { width: 20px; height: 20px; }
.ntm6-map-pin.pin-1 { left: 76px; top: 44px; }
.ntm6-map-pin.pin-2 { left: 254px; top: 48px; }
.ntm6-map-pin.pin-3 { left: 210px; top: 22px; }
.ntm6-map-pin.pin-4 { left: 54px; top: 92px; }
.ntm6-map-pin.pin-5 { left: 277px; top: 108px; }
.ntm6-map-main-pin { position: absolute; left: 151px; top: 80px; width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center; color: #fff; background: #ff6c00; box-shadow: 0 7px 14px rgba(255,108,0,.24); }
.ntm6-map-main-pin svg { width: 25px; height: 25px; }
.ntm6-suggest-head { height: 34px; display: flex; align-items: end; justify-content: space-between; color: #12234a; }
.ntm6-suggest-head strong { font-size: 15px; font-weight: 950; }
.ntm6-suggest-head a { color: #126ee8; font-size: 12px; font-weight: 800; }
.ntm6-products { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 8px; }
.ntm6-product { min-height: 143px; border-radius: 11px; background: #fff; overflow: hidden; box-shadow: 0 4px 11px rgba(30,90,160,.08); }
.ntm6-product-img { height: 59px; }
.ntm6-product h3 { margin: 7px 7px 2px; color: #14284a; font-size: 10px; line-height: 1.16; font-weight: 850; }
.ntm6-product p { margin: 0 7px 7px; color: #5a6c80; font-size: 9px; line-height: 1.1; font-weight: 650; }
.ntm6-product div:last-child { display: flex; align-items: center; justify-content: space-between; padding: 0 7px; color: #126ee8; font-size: 9px; font-weight: 800; }
.ntm6-product div:last-child span { display: flex; align-items: center; gap: 2px; }
.ntm6-product div:last-child svg { width: 10px; height: 10px; }
.ntm6-product div:last-child b { padding: 3px 6px; border-radius: 999px; color: #1c9b60; background: #e8fbf1; font-size: 9px; }
.ntm6-phone-features { position: absolute; left: 17px; right: 17px; bottom: 17px; height: 78px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; border-radius: 17px; background: #fff; box-shadow: 0 -4px 14px rgba(20,80,150,.07); padding: 9px 8px; }
.ntm6-phone-features div { display: grid; place-items: center; text-align: center; color: #126ee8; font-size: 8px; line-height: 1.1; font-weight: 800; }
.ntm6-phone-features svg { width: 23px; height: 23px; margin-bottom: 4px; }
.ntm6-phone-features div:nth-child(1) svg { color: #0fae8a; }
.ntm6-group { position: absolute; z-index: 18; right: 0; top: 770px; width: 300px; height: 330px; }
.ntm6-group .person { position: absolute; bottom: 0; width: 100px; height: 230px; }
.ntm6-group .person .hair { position: absolute; left: 26px; top: 0; width: 55px; height: 48px; border-radius: 50%; background: #1c1c22; }
.ntm6-group .person .face { position: absolute; left: 29px; top: 38px; width: 50px; height: 62px; border-radius: 47%; background: #ffbd8c; }
.ntm6-group .person .body { position: absolute; left: 4px; bottom: 0; width: 92px; height: 128px; border-radius: 45px 45px 0 0; background: #dbe6ec; }
.ntm6-group .old { left: 0; }
.ntm6-group .old .hair { background: #dad2bf; }
.ntm6-group .girl { left: 70px; height: 245px; }
.ntm6-group .girl .body { background: #f2eee3; }
.ntm6-group .girl .phone { position: absolute; left: 55px; top: 116px; width: 28px; height: 54px; border-radius: 6px; background: #13284d; transform: rotate(-12deg); }
.ntm6-group .boy { right: 0; height: 270px; }
.ntm6-group .boy .hair { width: 65px; left: 22px; border-radius: 42px 42px 16px 16px; }
.ntm6-group .boy .face { width: 58px; height: 70px; left: 25px; }
.ntm6-group .boy .body { width: 110px; left: -3px; background: #4c6f85; }
.ntm6-group .crate { position: absolute; left: 30px; bottom: 0; width: 185px; height: 95px; border-radius: 8px; background: radial-gradient(circle at 20% 15%, #f04e29 0 12px, transparent 13px), radial-gradient(circle at 46% 9%, #54a93d 0 17px, transparent 18px), radial-gradient(circle at 72% 16%, #ff6a2c 0 14px, transparent 15px), linear-gradient(180deg, #c88442, #875229); }
.ntm6-local-sign { position: absolute; z-index: 19; right: 20px; top: 1060px; width: 150px; min-height: 130px; padding: 15px 10px; border-radius: 6px; display: grid; place-items: center; color: #466c32; background: #fff8d9; border: 4px solid #c6a46d; text-align: center; font-size: 16px; line-height: 1.2; font-weight: 950; }
.ntm6-support-bubble { position: absolute; z-index: 19; right: 710px; top: 1135px; width: 145px; min-height: 100px; padding: 13px 10px; border-radius: 28px; display: grid; place-items: center; color: #fff; background: #1c79ef; border: 5px solid #fff; text-align: center; font-size: 13px; line-height: 1.2; font-weight: 950; box-shadow: 0 10px 16px rgba(0,80,180,.18); }
.ntm6-benefits {
  position: absolute;
  z-index: 28;
  left: 26px;
  right: 26px;
  bottom: 146px;
  min-height: 108px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: rgba(255,255,255,.98);
  box-shadow: 0 16px 28px rgba(23,79,162,.14);
  overflow: hidden;
}
.ntm6-benefit {
  position: relative;
  display: grid;
  grid-template-columns: 62px 1fr;
  align-items: center;
  gap: 11px;
  padding: 20px 17px;
}
.ntm6-benefit:not(:last-child)::after { content: ""; position: absolute; right: 0; top: 23px; bottom: 23px; width: 1px; background: #d9e5f2; }
.ntm6-benefit > div { width: 56px; height: 56px; border-radius: 50%; display: grid; place-items: center; color: #fff; background: #126ee8; }
.ntm6-benefit.green > div { background: #0fbf8a; }
.ntm6-benefit.orange > div { background: #ff7a00; }
.ntm6-benefit svg { width: 35px; height: 35px; }
.ntm6-benefit h2 { margin: 0 0 5px; color: #20324e; font-size: 18px; line-height: 1.05; font-weight: 950; }
.ntm6-benefit p { margin: 0; color: #55677f; font-size: 15px; line-height: 1.1; font-weight: 600; }
.ntm6-bottom-cta {
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
.ntm6-bottom-cta svg { width: 45px; height: 45px; }
.ntm6-main-cta:hover,
.ntm6-qr-link:hover,
.ntm6-bottom-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }

@media (max-width: 820px) {
  .ntm6-main { min-height: 1430px; }
  .ntm6-copy { width: 610px; margin-left: 34px; }
  .ntm6-copy h1 { font-size: 54px; }
  .ntm6-copy p { font-size: 22px; }
  .ntm6-visual { transform: scale(.9); transform-origin: top center; width: 111%; left: -5.5%; }
  .ntm6-benefits { left: 18px; right: 18px; }
  .ntm6-benefit { grid-template-columns: 52px 1fr; padding: 16px 11px; gap: 8px; }
  .ntm6-benefit > div { width: 48px; height: 48px; }
  .ntm6-benefit h2 { font-size: 15px; }
  .ntm6-benefit p { font-size: 13px; }
}

@media (max-width: 520px) {
  .ntm6-main { min-height: 1280px; }
  .ntm6-copy { width: calc(100% - 34px); margin: 0 auto; padding-top: 28px; }
  .ntm6-badge-row { gap: 12px; }
  .ntm6-badge-row span { width: 82px; height: 36px; font-size: 16px; }
  .ntm6-copy h1 { width: 100%; font-size: 37px; letter-spacing: -1.6px; }
  .ntm6-copy p { width: 100%; font-size: 17px; }
  .ntm6-main-cta, .ntm6-qr-link { margin-left: 0; width: 270px; }
  .ntm6-main-cta { height: 62px; font-size: 23px; }
  .ntm6-main-cta svg { width: 33px; height: 33px; }
  .ntm6-visual { transform: scale(.68); width: 147%; left: -23.5%; top: 10px; }
  .ntm6-benefits { left: 14px; right: 14px; bottom: 132px; grid-template-columns: 1fr 1fr; min-height: auto; }
  .ntm6-benefit { min-height: 72px; }
  .ntm6-benefit:not(:last-child)::after { display: none; }
  .ntm6-bottom-cta { left: 18px; right: 18px; bottom: 30px; height: 68px; font-size: 24px; }
  .ntm6-bottom-cta svg { width: 34px; height: 34px; }
}
`;
