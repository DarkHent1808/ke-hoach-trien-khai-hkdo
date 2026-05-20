import React from "react";

const ntm2Items = [
  {
    icon: <SearchBagIcon />,
    title: "Có thể tìm theo sản phẩm",
    desc: "Tìm nhanh sản phẩm bạn cần trong nhiều danh mục phong phú.",
    tone: "blue",
  },
  {
    icon: <StoreIcon />,
    title: "Có thể tìm theo hộ kinh doanh",
    desc: "Xem thông tin, sản phẩm của các hộ kinh doanh uy tín.",
    tone: "green",
  },
  {
    icon: <PinIcon />,
    title: "Có thể tìm theo vị trí",
    desc: "Tìm nơi bán gần bạn nhất, tiện đường và phù hợp nhu cầu.",
    tone: "orange",
  },
  {
    icon: <QrIcon />,
    title: "Có thể quét QR tại điểm bán",
    desc: "Quét mã QR để xem thông tin sản phẩm và hộ kinh doanh.",
    tone: "purple",
  },
  {
    icon: <BagHeartIcon />,
    title: "Có thể mua gần hơn, rõ hơn",
    desc: "Chọn đúng nơi, đúng sản phẩm, tiết kiệm thời gian và chi phí.",
    tone: "pink",
  },
];

const ntm2Categories = [
  { icon: <LeafIcon />, label: "Rau củ" },
  { icon: <BagIcon />, label: "Thực phẩm\nkhô" },
  { icon: <JarIcon />, label: "Đặc sản\nđịa phương" },
  { icon: <CupIcon />, label: "Đồ uống" },
  { icon: <MoreIcon />, label: "Xem thêm" },
];

const ntm2Products = [
  { name: "Mật ong nguyên chất", shop: "Hộ KD Thanh Xuân", distance: "120 m", rating: "4.9", color: "#d47a18" },
  { name: "Trà thảo mộc", shop: "Hộ KD An Nhiên", distance: "250 m", rating: "4.9", color: "#68a96f" },
  { name: "Rau sạch Đà Lạt", shop: "Hộ KD Nông Xanh", distance: "350 m", rating: "4.8", color: "#4c9d3f" },
];

export default function Ntm_2() {
  return (
    <section id="ntm-can-biet" className="ntm2-page" aria-label="Người dân cần biết gì">
      <style>{css}</style>

      <main className="ntm2-main">
        <section className="ntm2-copy">
          <div className="ntm2-badge-row">
            <span>Page 6</span>
            <span>Màn 2</span>
          </div>

          <h1>Người dân cần biết gì?</h1>
          <p>
            Địa phương đang hình thành một kênh <strong>tìm mua mới</strong>, giúp người dân nhìn thấy rõ sản phẩm,
            nơi bán và vị trí phù hợp.
          </p>
        </section>

        <section className="ntm2-content" aria-label="Các cách người dân tìm mua">
          <div className="ntm2-list">
            {ntm2Items.map((item) => (
              <article className="ntm2-info-card" key={item.title}>
                <div className={`ntm2-info-icon ${item.tone}`}>{item.icon}</div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <section className="ntm2-visual" aria-label="Minh họa cửa hàng địa phương và điện thoại tìm mua">
            <div className="ntm2-city"><i /><i /><i /></div>
            <div className="ntm2-cloud cloud-a" />
            <div className="ntm2-cloud cloud-b" />

            <div className="ntm2-shop">
              <div className="ntm2-shop-sign">CỬA HÀNG<br />ĐỊA PHƯƠNG</div>
              <div className="ntm2-awning" />
              <div className="ntm2-shop-body" />
            </div>

            <div className="ntm2-qr-board">
              <strong>QUÉT ĐỂ XEM<br />THÔNG TIN</strong>
              <QrGraphic />
            </div>

            <div className="ntm2-dashed-line" />
            <BuyerIllustration />
            <PhoneMockup />
          </section>
        </section>

        <a href="#ntm-search-products" className="ntm2-bottom-cta">
          <SearchIcon />
          <span>Tìm sản phẩm</span>
        </a>
      </main>
    </section>
  );
}

function PhoneMockup() {
  return (
    <section className="ntm2-phone" aria-label="Giao diện dothithongminh1.vn trên điện thoại">
      <div className="ntm2-phone-speaker" />
      <div className="ntm2-phone-screen">
        <div className="ntm2-status"><span>9:41</span><i /></div>
        <div className="ntm2-browser"><LockIcon /><span>dothithongminh1.vn</span><BellIcon /></div>
        <div className="ntm2-mobile-search"><SearchIcon /><span>Tìm sản phẩm, cửa hàng...</span><TuneIcon /></div>

        <div className="ntm2-categories">
          {ntm2Categories.map((item) => (
            <div key={item.label}>
              <em>{item.icon}</em>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="ntm2-near-head">
          <strong>Gần bạn</strong>
          <a href="#ntm-all-nearby">Xem tất cả</a>
        </div>
        <div className="ntm2-location-row"><PinSmallIcon /><span>Phường Bình Thạnh, TP. Hồ Chí Minh</span></div>

        <div className="ntm2-map">
          <div className="ntm2-map-circle" />
          {[1, 2, 3, 4, 5].map((item) => <span key={item} className={`ntm2-map-pin pin-${item}`}><StoreIcon /></span>)}
          <div className="ntm2-map-main-pin"><StoreIcon /></div>
        </div>

        <div className="ntm2-suggest-head"><strong>Sản phẩm nổi bật</strong><a href="#ntm-more-products">Xem tất cả ›</a></div>
        <div className="ntm2-products">
          {ntm2Products.map((item) => (
            <article className="ntm2-product" key={item.name}>
              <div className="ntm2-product-img" style={{ background: item.color }} />
              <h3>{item.name}</h3>
              <p>{item.shop}</p>
              <div><span><PinSmallIcon />{item.distance}</span><b>★ {item.rating}</b></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuyerIllustration() {
  return (
    <div className="ntm2-buyer" aria-hidden="true">
      <div className="hair" />
      <div className="face" />
      <div className="neck" />
      <div className="body" />
      <div className="strap" />
      <div className="arm-left" />
      <div className="phone-hand" />
      <div className="phone" />
    </div>
  );
}

function QrGraphic() {
  return (
    <svg className="ntm2-qr" viewBox="0 0 100 100" fill="none">
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
function SearchBagIcon() { return <Svg><circle cx="9.5" cy="9.5" r="5.5" stroke="currentColor" strokeWidth="2.5"/><path d="m14 14 4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M15 11h5l1 9H13l1-9Z" fill="currentColor" opacity=".24"/><path d="M16 11a2 2 0 0 1 4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function StoreIcon() { return <Svg><path d="M4 10h16l-1-5H5l-1 5Z" fill="currentColor" opacity=".22"/><path d="M5 10v10h14V10M3 10h18L19 5H5l-2 5Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round"/><path d="M8 20v-6h4v6M15 14h2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/></Svg>; }
function PinIcon() { return <Svg><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" fill="currentColor"/><circle cx="12" cy="10" r="3" fill="#fff"/></Svg>; }
function PinSmallIcon() { return <Svg><path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" fill="currentColor"/><circle cx="12" cy="10" r="2.2" fill="#fff"/></Svg>; }
function QrIcon() { return <Svg><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function BagHeartIcon() { return <Svg><path d="M6 8h12l1 13H5L6 8Z" fill="currentColor" opacity=".22"/><path d="M6 8h12l1 13H5L6 8Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/><path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><path d="M12 18s-4-2.2-4-5.1A2.2 2.2 0 0 1 12 11a2.2 2.2 0 0 1 4 1.9c0 2.9-4 5.1-4 5.1Z" fill="currentColor"/></Svg>; }
function LeafIcon() { return <Svg><path d="M5 19c9 0 14-6 14-15C10 4 5 9 5 19Z" fill="currentColor"/><path d="M5 19c3-5 7-8 12-10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function BagIcon() { return <Svg><path d="M6 8h12l1 12H5L6 8Z" fill="currentColor"/><path d="M9 8a3 3 0 0 1 6 0" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function JarIcon() { return <Svg><path d="M8 3h8v4H8V3Z" fill="currentColor"/><path d="M7 8h10l1 11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L7 8Z" fill="currentColor" opacity=".75"/><path d="M8 13h8" stroke="#fff" strokeWidth="2"/></Svg>; }
function CupIcon() { return <Svg><path d="M7 5h10l-1 15H8L7 5Z" fill="currentColor"/><path d="M6 5h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><path d="M8 9h8" stroke="#fff" strokeWidth="2"/></Svg>; }
function MoreIcon() { return <Svg><circle cx="6" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="18" cy="12" r="2" fill="currentColor"/></Svg>; }
function LockIcon() { return <Svg><rect x="5" y="10" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function BellIcon() { return <Svg><path d="M6 10a6 6 0 1 1 12 0v4l2 3H4l2-3v-4Z" fill="currentColor"/><path d="M10 20h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function TuneIcon() { return <Svg><path d="M4 7h10M18 7h2M4 17h2M10 17h10M8 4v6M16 14v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }

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

.ntm2-page {
  position: relative;
  width: min(100%, 928px);
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background:
    radial-gradient(circle at 88% 0%, rgba(255,255,255,.94) 0 17%, transparent 36%),
    linear-gradient(180deg, #fbfdff 0%, #edf8ff 60%, #fbfdff 100%);
}
.ntm2-main {
  position: relative;
  min-height: 1400px;
  overflow: hidden;
}
.ntm2-copy {
  position: relative;
  z-index: 12;
  width: 565px;
  padding-top: 42px;
  margin-left: 45px;
}
.ntm2-badge-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% + 280px);
  margin-bottom: 28px;
}
.ntm2-badge-row span {
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
.ntm2-copy h1 {
  margin: 0 0 24px;
  color: #050d4e;
  font-size: 70px;
  line-height: 1.08;
  letter-spacing: -3px;
  font-weight: 950;
}
.ntm2-copy p {
  margin: 0;
  color: #26374f;
  font-size: 25px;
  line-height: 1.44;
  font-weight: 500;
}
.ntm2-copy p strong {
  color: #126ee8;
  font-weight: 900;
}
.ntm2-content {
  position: relative;
  z-index: 9;
}
.ntm2-list {
  position: relative;
  z-index: 18;
  width: 450px;
  margin: 35px 0 0 45px;
  display: grid;
  gap: 14px;
}
.ntm2-info-card {
  min-height: 132px;
  border-radius: 19px;
  display: grid;
  grid-template-columns: 114px 1fr;
  align-items: center;
  gap: 14px;
  padding: 19px 24px;
  background: rgba(255,255,255,.98);
  border: 1px solid #e0ebf7;
  box-shadow: 0 12px 25px rgba(31,101,178,.1);
}
.ntm2-info-icon {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #4288ff, #126ee8);
}
.ntm2-info-icon svg {
  width: 55px;
  height: 55px;
}
.ntm2-info-icon.green { background: linear-gradient(180deg, #19c38c, #0ca66f); }
.ntm2-info-icon.orange { background: linear-gradient(180deg, #ff8b1a, #ff6a00); }
.ntm2-info-icon.purple { background: linear-gradient(180deg, #9a62f0, #7045db); }
.ntm2-info-icon.pink { background: linear-gradient(180deg, #ff6f93, #ee416d); }
.ntm2-info-card h2 {
  margin: 0 0 10px;
  color: #0b2363;
  font-size: 23px;
  line-height: 1.12;
  font-weight: 950;
}
.ntm2-info-card p {
  margin: 0;
  color: #2e3f57;
  font-size: 17px;
  line-height: 1.37;
  font-weight: 500;
}
.ntm2-visual {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.ntm2-city {
  position: absolute;
  right: 46px;
  top: -5px;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  opacity: .34;
}
.ntm2-city i {
  width: 45px;
  height: 112px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.28), rgba(85,154,219,.08));
}
.ntm2-city i:nth-child(2) { height: 178px; }
.ntm2-city i:nth-child(3) { height: 133px; }
.ntm2-cloud,
.ntm2-cloud::before,
.ntm2-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.9);
}
.ntm2-cloud.cloud-a { right: 294px; top: 50px; width: 130px; height: 24px; }
.ntm2-cloud.cloud-a::before { width: 52px; height: 52px; left: 22px; top: -28px; }
.ntm2-cloud.cloud-a::after { width: 72px; height: 72px; left: 67px; top: -44px; }
.ntm2-cloud.cloud-b { right: 390px; top: 120px; width: 82px; height: 16px; opacity: .82; }
.ntm2-cloud.cloud-b::before { width: 35px; height: 35px; left: 15px; top: -17px; }
.ntm2-cloud.cloud-b::after { width: 48px; height: 48px; left: 39px; top: -28px; }
.ntm2-shop {
  position: absolute;
  right: 0;
  top: 90px;
  width: 343px;
  height: 620px;
  margin-top: -420px;
}
.ntm2-shop-sign {
  position: absolute;
  z-index: 5;
  left: 52px;
  top: 0;
  width: 235px;
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
  transform: rotate(-4deg);
  box-shadow: 0 12px 18px rgba(28,72,62,.22);
}
.ntm2-awning {
  position: absolute;
  z-index: 3;
  left: 0;
  right: -45px;
  top: 91px;
  height: 100px;
  border-radius: 12px 12px 35px 35px;
  background: repeating-linear-gradient(115deg, #2f795b 0 46px, #f4ead8 46px 92px);
  box-shadow: 0 12px 20px rgba(42,90,67,.2);
}
.ntm2-shop-body {
  position: absolute;
  left: 20px;
  right: -45px;
  bottom: 0;
  top: 150px;
  border-radius: 12px 0 0 0;
  background:
    linear-gradient(90deg, rgba(255,255,255,.22) 0 2px, transparent 2px 70px),
    linear-gradient(180deg, rgba(116,82,52,.45), rgba(88,64,43,.74));
}
.ntm2-qr-board {
  position: absolute;
  z-index: 12;
  right: 282px;
  top: 335px;
  width: 113px;
  height: 152px;
  border-radius: 8px;
  padding: 11px 10px;
  background: #fff;
  box-shadow: 0 12px 22px rgba(23,79,162,.18);
  text-align: center;
  margin-top: -350px;
}
.ntm2-qr-board strong {
  display: block;
  color: #1e2940;
  font-size: 13px;
  line-height: 1.12;
  font-weight: 950;
  margin-bottom: 8px;
}
.ntm2-qr-board .ntm2-qr {
  width: 77px;
  height: 77px;
  margin: 0 auto;
}
.ntm2-dashed-line {
  position: absolute;
  z-index: 11;
  right: 390px;
  top: 455px;
  width: 115px;
  height: 170px;
  border-left: 3px dashed #4d95f0;
  border-bottom: 3px dashed #4d95f0;
  border-radius: 0 0 0 80px;
}
.ntm2-dashed-line::after {
  content: "";
  position: absolute;
  left: -8px;
  bottom: -8px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #2e78eb;
}
.ntm2-phone {
  position: absolute;
  z-index: 16;
  right: 45px;
  top: 570px;
  width: 360px;
  height: 672px;
  border-radius: 46px 46px 0 0;
  background: #151515;
  padding: 15px 15px 0;
  box-shadow: 0 22px 33px rgba(0,0,0,.28);
  margin-top: -390px;
}
.ntm2-phone-speaker {
  position: absolute;
  left: 50%;
  top: 10px;
  width: 92px;
  height: 17px;
  border-radius: 999px;
  background: #060606;
  transform: translateX(-50%);
  z-index: 4;
}
.ntm2-phone-screen {
  position: relative;
  height: 100%;
  border-radius: 32px 32px 0 0;
  overflow: hidden;
  background: #f8fbff;
  border: 1px solid #dce7f5;
  padding: 15px 15px 12px;
}
.ntm2-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  color: #0e1628;
  font-size: 12px;
  font-weight: 900;
}
.ntm2-status i {
  width: 48px;
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, #111 0 16px, transparent 16px 20px, #111 20px 28px, transparent 28px 32px, #111 32px 48px);
}
.ntm2-browser {
  height: 36px;
  border-radius: 18px;
  display: grid;
  grid-template-columns: 21px 1fr 22px;
  align-items: center;
  gap: 7px;
  padding: 0 13px;
  background: #eef3f8;
  color: #566579;
  font-size: 13px;
  font-weight: 700;
}
.ntm2-browser svg { width: 17px; height: 17px; }
.ntm2-mobile-search {
  height: 45px;
  margin-top: 13px;
  border-radius: 13px;
  display: grid;
  grid-template-columns: 27px 1fr 28px;
  align-items: center;
  gap: 6px;
  padding: 0 12px;
  background: #fff;
  border: 2px solid #d9e7fa;
  color: #7b8ba2;
  font-size: 12px;
  font-weight: 650;
}
.ntm2-mobile-search svg { color: #1c5fce; width: 22px; height: 22px; }
.ntm2-categories {
  height: 78px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  gap: 4px;
  margin-top: 12px;
}
.ntm2-categories div {
  display: grid;
  justify-items: center;
  gap: 5px;
  text-align: center;
  color: #19314f;
  font-size: 9px;
  line-height: 1.08;
  font-weight: 750;
  white-space: pre-line;
}
.ntm2-categories em {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #0fae8a;
  background: #edf5ff;
  font-style: normal;
}
.ntm2-categories svg { width: 25px; height: 25px; }
.ntm2-categories div:nth-child(2) em,
.ntm2-categories div:nth-child(3) em { color: #f28b18; }
.ntm2-categories div:nth-child(4) em { color: #e35661; }
.ntm2-categories div:nth-child(5) em { color: #126ee8; }
.ntm2-near-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 9px;
  color: #12234a;
}
.ntm2-near-head strong {
  font-size: 14px;
  font-weight: 950;
}
.ntm2-near-head a {
  color: #126ee8;
  font-size: 11px;
  font-weight: 800;
}
.ntm2-location-row {
  height: 28px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #126ee8;
  font-size: 11px;
  font-weight: 700;
}
.ntm2-location-row svg { width: 16px; height: 16px; }
.ntm2-map {
  position: relative;
  height: 142px;
  border-radius: 13px;
  overflow: hidden;
  background:
    linear-gradient(30deg, transparent 0 45%, rgba(167,204,180,.44) 45% 53%, transparent 53%),
    linear-gradient(110deg, transparent 0 35%, rgba(189,210,231,.75) 35% 39%, transparent 39%),
    linear-gradient(170deg, transparent 0 46%, rgba(189,210,231,.75) 46% 50%, transparent 50%),
    #eef5f2;
  border: 1px solid #d9e7fa;
}
.ntm2-map-circle {
  position: absolute;
  left: 70px;
  top: 18px;
  width: 127px;
  height: 127px;
  border-radius: 50%;
  background: rgba(54,149,238,.16);
  border: 1px solid rgba(54,149,238,.2);
}
.ntm2-map-pin {
  position: absolute;
  width: 19px;
  height: 19px;
  color: #299867;
}
.ntm2-map-pin svg { width: 19px; height: 19px; }
.ntm2-map-pin.pin-1 { left: 75px; top: 39px; }
.ntm2-map-pin.pin-2 { left: 241px; top: 45px; }
.ntm2-map-pin.pin-3 { left: 196px; top: 20px; }
.ntm2-map-pin.pin-4 { left: 49px; top: 86px; }
.ntm2-map-pin.pin-5 { left: 255px; top: 102px; }
.ntm2-map-main-pin {
  position: absolute;
  left: 142px;
  top: 72px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #ff6c00;
  box-shadow: 0 7px 14px rgba(255,108,0,.24);
}
.ntm2-map-main-pin svg { width: 24px; height: 24px; }
.ntm2-suggest-head {
  height: 34px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  color: #12234a;
}
.ntm2-suggest-head strong {
  font-size: 14px;
  font-weight: 950;
}
.ntm2-suggest-head a {
  color: #126ee8;
  font-size: 11px;
  font-weight: 800;
}
.ntm2-products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 8px;
}
.ntm2-product {
  min-height: 130px;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 4px 11px rgba(30,90,160,.08);
}
.ntm2-product-img {
  height: 55px;
}
.ntm2-product h3 {
  margin: 6px 6px 2px;
  color: #14284a;
  font-size: 9px;
  line-height: 1.14;
  font-weight: 850;
}
.ntm2-product p {
  margin: 0 6px 6px;
  color: #5a6c80;
  font-size: 8px;
  line-height: 1.1;
  font-weight: 650;
}
.ntm2-product div:last-child {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  color: #126ee8;
  font-size: 8px;
  font-weight: 800;
}
.ntm2-product div:last-child span {
  display: flex;
  align-items: center;
  gap: 2px;
}
.ntm2-product div:last-child svg {
  width: 9px;
  height: 9px;
}
.ntm2-product div:last-child b {
  padding: 3px 5px;
  border-radius: 999px;
  color: #1c9b60;
  background: #e8fbf1;
  font-size: 8px;
}
.ntm2-buyer {
  position: absolute;
  z-index: 15;
  right: 4px;
  top: 268px;
  width: 307px;
  height: 490px;
  margin-top: -400px;
}
.ntm2-buyer .hair {
  position: absolute;
  right: 32px;
  top: 0;
  width: 235px;
  height: 265px;
  border-radius: 120px 120px 60px 90px;
  background: radial-gradient(circle at 70% 42%, #342336 0 38%, #211928 70%);
  transform: rotate(-16deg);
}
.ntm2-buyer .face {
  position: absolute;
  right: 75px;
  top: 102px;
  width: 113px;
  height: 150px;
  border-radius: 47%;
  background: #ffbd8c;
  transform: rotate(-12deg);
}
.ntm2-buyer .neck {
  position: absolute;
  right: 116px;
  top: 232px;
  width: 55px;
  height: 60px;
  border-radius: 0 0 26px 26px;
  background: #f4a978;
}
.ntm2-buyer .body {
  position: absolute;
  right: 20px;
  bottom: 0;
  width: 232px;
  height: 250px;
  border-radius: 102px 102px 0 0;
  background: linear-gradient(180deg, #246cc2, #0b57b2);
}
.ntm2-buyer .strap {
  position: absolute;
  right: 4px;
  top: 290px;
  width: 36px;
  height: 190px;
  border-radius: 999px;
  border: 11px solid #dac2a5;
  border-left: 0;
  background: transparent;
}
.ntm2-buyer .arm-left {
  position: absolute;
  left: 27px;
  top: 325px;
  width: 190px;
  height: 35px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(-17deg);
}
.ntm2-buyer .phone-hand {
  position: absolute;
  left: 60px;
  top: 265px;
  width: 44px;
  height: 58px;
  border-radius: 40px;
  background: #ffbd8c;
  transform: rotate(-24deg);
}
.ntm2-buyer .phone {
  position: absolute;
  left: 68px;
  top: 245px;
  width: 31px;
  height: 58px;
  border-radius: 7px;
  background: #13284d;
  border: 3px solid #1d3969;
  transform: rotate(-25deg);
}
.ntm2-bottom-cta {
  position: absolute;
  z-index: 30;
  left: 30px;
  right: 30px;
  bottom: 70px;
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
.ntm2-bottom-cta svg {
  width: 45px;
  height: 45px;
}
.ntm2-bottom-cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}

@media (max-width: 820px) {
  .ntm2-main { min-height: 1430px; }
  .ntm2-copy { width: 520px; margin-left: 34px; }
  .ntm2-badge-row { width: calc(100% + 300px); }
  .ntm2-copy h1 { font-size: 60px; }
  .ntm2-copy p { font-size: 22px; }
  .ntm2-content { transform: scale(.9); transform-origin: top center; width: 111%; left: -5.5%; }
  .ntm2-bottom-cta { left: 24px; right: 24px; }
}

@media (max-width: 520px) {
  .ntm2-main { min-height: 1280px; }
  .ntm2-copy { width: calc(100% - 34px); margin: 0 auto; padding-top: 28px; }
  .ntm2-badge-row { width: 100%; }
  .ntm2-badge-row span { width: 82px; height: 36px; font-size: 16px; }
  .ntm2-copy h1 { font-size: 40px; letter-spacing: -1.6px; }
  .ntm2-copy p { font-size: 17px; }
  .ntm2-content { transform: scale(.68); width: 147%; left: -23.5%; top: -15px; }
  .ntm2-list { width: 430px; }
  .ntm2-info-card { min-height: 118px; }
  .ntm2-bottom-cta { left: 18px; right: 18px; bottom: 34px; height: 68px; font-size: 24px; }
  .ntm2-bottom-cta svg { width: 34px; height: 34px; }
}
`;
