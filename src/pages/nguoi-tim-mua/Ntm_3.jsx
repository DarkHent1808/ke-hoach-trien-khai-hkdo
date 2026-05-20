import React from "react";

const ntm3Steps = [
  {
    number: "1",
    icon: <SearchIcon />,
    title: "Gõ tên sản phẩm",
    desc: "Nhập từ khóa vào ô tìm kiếm để tìm sản phẩm bạn cần.",
    tone: "blue",
  },
  {
    number: "2",
    icon: <StoreIcon />,
    title: "Chọn đúng hộ hoặc điểm bán",
    desc: "Chọn hộ kinh doanh hoặc cửa hàng gần bạn nhất.",
    tone: "green",
  },
  {
    number: "3",
    icon: <PinIcon />,
    title: "Xem địa chỉ và vị trí",
    desc: "Xem thông tin, địa chỉ và bản đồ để yên tâm lựa chọn.",
    tone: "orange",
  },
  {
    number: "4",
    icon: <CartIcon />,
    title: "Cho vào giỏ hàng",
    desc: "Chọn sản phẩm, số lượng và thêm vào giỏ hàng.",
    tone: "blue",
  },
  {
    number: "5",
    icon: <ChecklistIcon />,
    title: "Đi qua luồng đặt hàng",
    desc: "Kiểm tra lại đơn hàng và xác nhận để hoàn tất đặt mua.",
    tone: "purple",
  },
];

const ntm3Products = [
  { name: "Rau sạch Đà Lạt", sub: "500g", price: "12.000đ", color: "#4d9f42" },
  { name: "Mật ong nguyên chất", sub: "500ml", price: "145.000đ", color: "#d47a18" },
  { name: "Trà thảo mộc", sub: "Hộ KD An Nhiên", price: "85.000đ", color: "#68a96f" },
  { name: "Rau củ", sub: "Sạch mỗi ngày", price: "68.000đ", color: "#2f9b60" },
];

export default function Ntm_3() {
  return (
    <section id="ntm-cach-su-dung" className="ntm3-page" aria-label="Người tìm mua sử dụng như thế nào">
      <style>{css}</style>

      <main className="ntm3-main">
        <section className="ntm3-copy">
          <div className="ntm3-badge-row">
            <span>Page 6</span>
            <span>Màn 3</span>
          </div>

          <h1>Người tìm mua sử dụng như thế nào?</h1>
          <p>Việc tìm kiếm và kiểm tra đầu ra được thiết kế đơn giản để ai cũng có thể thao tác nhanh.</p>
        </section>

        <section className="ntm3-layout" aria-label="Quy trình sử dụng cho người tìm mua">
          <div className="ntm3-step-list">
            {ntm3Steps.map((step) => (
              <article className="ntm3-step-card" key={step.number}>
                <div className="ntm3-step-number">{step.number}</div>
                <div className={`ntm3-step-icon ${step.tone}`}>{step.icon}</div>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}

            <a href="https://dothithongminh1.vn/search/" className="ntm3-try-btn">Dùng thử ngay</a>
          </div>

          <section className="ntm3-visual" aria-label="Minh họa thao tác tìm mua trên điện thoại">
            <div className="ntm3-bg-city"><i /><i /><i /></div>
            <div className="ntm3-cloud cloud-a" />
            <div className="ntm3-cloud cloud-b" />
            <div className="ntm3-route" />
            <div className="ntm3-pin-float"><PinIcon /></div>

            <div className="ntm3-shop">
              <div className="ntm3-shop-sign">CỬA HÀNG<br />ĐỊA PHƯƠNG</div>
              <div className="ntm3-awning" />
              <div className="ntm3-shop-body" />
            </div>

            <PhoneMockup />
          </section>
        </section>

        <section className="ntm3-bottom-scene" aria-label="Minh họa mua hàng địa phương">
          <BuyerMini />
          <div className="ntm3-table" />
          <div className="ntm3-qr-board">
            <strong>QUÉT ĐỂ XEM<br />SẢN PHẨM</strong>
            <QrGraphic />
          </div>
          <div className="ntm3-tea-box">TRÀ THẢO MỘC<br />TỰ NHIÊN</div>
          <div className="ntm3-vegetable-basket" />
          <SellerMini />
        </section>

        <a href="https://dothithongminh1.vn/search/" className="ntm3-bottom-cta">
          <SearchIcon />
          <span>Tìm sản phẩm</span>
        </a>
      </main>
    </section>
  );
}

function PhoneMockup() {
  return (
    <section className="ntm3-phone" aria-label="Giao diện tìm kiếm và đặt hàng">
      <div className="ntm3-phone-speaker" />
      <div className="ntm3-phone-screen">
        <div className="ntm3-status"><span>9:41</span><i /></div>
        <div className="ntm3-browser"><LockIcon /><span>dothithongminh1.vn</span><BellIcon /></div>
        <div className="ntm3-mobile-search"><SearchIcon /><span>Tìm sản phẩm, cửa hàng...</span><TuneIcon /></div>

        <div className="ntm3-location-row">
          <PinSmallIcon />
          <div><strong>Vị trí của bạn</strong><span>Phường Bình Thạnh, TP. Hồ Chí Minh</span></div>
          <TargetIcon />
        </div>

        <div className="ntm3-map">
          <div className="ntm3-map-circle" />
          {[1, 2, 3, 4, 5].map((item) => <span key={item} className={`ntm3-map-pin pin-${item}`}><StoreIcon /></span>)}
          <div className="ntm3-map-main-pin"><StoreIcon /></div>
        </div>

        <article className="ntm3-shop-result">
          <div className="ntm3-shop-avatar" />
          <div>
            <h3>Cửa hàng Địa Phương</h3>
            <p><CheckDotIcon /> Đã xác thực <span>• 125 đánh giá</span></p>
            <p><PinSmallIcon /> 123 Nguyễn Hữu Cảnh, P. Bình Thạnh, TP. HCM</p>
            <p><PinSmallIcon /> Cách bạn 350 m <span> Mở cửa 6:00 - 21:00</span></p>
          </div>
          <b>★ 4.9</b>
        </article>

        <div className="ntm3-product-strip">
          {ntm3Products.map((item) => (
            <article className="ntm3-product" key={item.name}>
              <div style={{ background: item.color }} />
              <h4>{item.name}</h4>
              <p>{item.sub}</p>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>

        <div className="ntm3-phone-nav">
          <div className="active"><HomeIcon /><span>Trang chủ</span></div>
          <div><ReceiptIcon /><span>Đơn hàng</span></div>
          <div><CartIcon /><em>3</em><span>Giỏ hàng</span></div>
          <div><HeartIcon /><span>Yêu thích</span></div>
          <div><UserIcon /><span>Cá nhân</span></div>
        </div>
      </div>
    </section>
  );
}

function BuyerMini() {
  return (
    <div className="ntm3-buyer-mini" aria-hidden="true">
      <div className="hair" />
      <div className="face" />
      <div className="body" />
      <div className="arm" />
      <div className="phone" />
      <div className="bag-strap" />
    </div>
  );
}

function SellerMini() {
  return (
    <div className="ntm3-seller" aria-hidden="true">
      <div className="hat" />
      <div className="face" />
      <div className="shirt" />
      <div className="basket" />
    </div>
  );
}

function QrGraphic() {
  return (
    <svg className="ntm3-qr" viewBox="0 0 100 100" fill="none">
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
function CartIcon() { return <Svg><path d="M4 5h2l2 10h9l3-7H8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="19" r="1.8" fill="currentColor"/><circle cx="17" cy="19" r="1.8" fill="currentColor"/></Svg>; }
function ChecklistIcon() { return <Svg><path d="M7 4h10v17H7V4Z" stroke="currentColor" strokeWidth="2.2"/><path d="M10 3h4a2 2 0 0 1 2 2H8a2 2 0 0 1 2-2Z" fill="currentColor"/><path d="m10 10 1.4 1.4L15 8M10 15l1.4 1.4L15 13" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function LockIcon() { return <Svg><rect x="5" y="10" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function BellIcon() { return <Svg><path d="M6 10a6 6 0 1 1 12 0v4l2 3H4l2-3v-4Z" fill="currentColor"/><path d="M10 20h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function TuneIcon() { return <Svg><path d="M4 7h10M18 7h2M4 17h2M10 17h10M8 4v6M16 14v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function TargetIcon() { return <Svg><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function CheckDotIcon() { return <Svg><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="m8 12 2.3 2.3L16 8.7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function HomeIcon() { return <Svg><path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9Z" fill="currentColor"/></Svg>; }
function ReceiptIcon() { return <Svg><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" stroke="currentColor" strokeWidth="2.2"/><path d="M9 8h6M9 12h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function HeartIcon() { return <Svg><path d="M12 21S4 16.4 4 9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 3.5C20 16.4 12 21 12 21Z" stroke="currentColor" strokeWidth="2.2" fill="none"/></Svg>; }
function UserIcon() { return <Svg><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4.5 21c.6-4.8 3-7.2 7.5-7.2s6.9 2.4 7.5 7.2h-15Z" fill="currentColor"/></Svg>; }

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

.ntm3-page {
  position: relative;
  width: min(100%, 928px);
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background:
    radial-gradient(circle at 88% 2%, rgba(255,255,255,.95) 0 17%, transparent 36%),
    linear-gradient(180deg, #fbfdff 0%, #edf8ff 60%, #fbfdff 100%);
}
.ntm3-main {
  position: relative;
  min-height: 1518px;
  overflow: hidden;
}
.ntm3-copy {
  position: relative;
  z-index: 12;
  width: 760px;
  padding-top: 42px;
  margin-left: 45px;
}
.ntm3-badge-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 26px;
}
.ntm3-badge-row span {
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
.ntm3-copy h1 {
  width: 760px;
  margin: 0 0 18px;
  color: #050d4e;
  font-size: 59px;
  line-height: 1.08;
  letter-spacing: -2.8px;
  font-weight: 950;
}
.ntm3-copy p {
  width: 650px;
  margin: 0;
  color: #26374f;
  font-size: 25px;
  line-height: 1.38;
  font-weight: 500;
}
.ntm3-layout {
  position: relative;
  z-index: 10;
}
.ntm3-step-list {
  position: relative;
  z-index: 18;
  width: 347px;
  margin: 36px 0 0 45px;
  display: grid;
  gap: 13px;
}
.ntm3-step-card {
  min-height: 116px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 43px 82px 1fr;
  align-items: center;
  gap: 12px;
  padding: 15px 18px 15px 12px;
  background: rgba(255,255,255,.98);
  border: 1px solid #e0ebf7;
  box-shadow: 0 12px 25px rgba(31,101,178,.1);
}
.ntm3-step-number {
  align-self: start;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #126ee8;
  font-size: 21px;
  line-height: 1;
  font-weight: 950;
}
.ntm3-step-icon {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #126ee8;
  background: #eef6ff;
}
.ntm3-step-icon svg {
  width: 51px;
  height: 51px;
}
.ntm3-step-icon.green { color: #0aae72; }
.ntm3-step-icon.orange { color: #ff7900; }
.ntm3-step-icon.purple { color: #7649df; }
.ntm3-step-card h2 {
  margin: 0 0 7px;
  color: #0b2363;
  font-size: 19px;
  line-height: 1.16;
  font-weight: 950;
}
.ntm3-step-card p {
  margin: 0;
  color: #2e3f57;
  font-size: 13px;
  line-height: 1.35;
  font-weight: 500;
}
.ntm3-try-btn {
  width: 302px;
  height: 70px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #ff7b11, #ff5f00);
  box-shadow: 0 14px 25px rgba(255,104,0,.26);
  font-size: 29px;
  line-height: 1;
  font-weight: 950;
  margin-top: 10px;
}
.ntm3-visual {
  position: absolute;
  inset: 0;
  z-index: 2;
}
.ntm3-bg-city {
  position: absolute;
  right: 16px;
  top: 20px;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  opacity: .34;
}
.ntm3-bg-city i {
  width: 45px;
  height: 112px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.28), rgba(85,154,219,.08));
}
.ntm3-bg-city i:nth-child(2) { height: 178px; }
.ntm3-bg-city i:nth-child(3) { height: 133px; }
.ntm3-cloud,
.ntm3-cloud::before,
.ntm3-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.9);
}
.ntm3-cloud.cloud-a { right: 305px; top: 96px; width: 122px; height: 24px; }
.ntm3-cloud.cloud-a::before { width: 52px; height: 52px; left: 22px; top: -28px; }
.ntm3-cloud.cloud-a::after { width: 72px; height: 72px; left: 67px; top: -44px; }
.ntm3-cloud.cloud-b { right: 428px; top: 145px; width: 82px; height: 16px; opacity: .82; }
.ntm3-cloud.cloud-b::before { width: 35px; height: 35px; left: 15px; top: -17px; }
.ntm3-cloud.cloud-b::after { width: 48px; height: 48px; left: 39px; top: -28px; }
.ntm3-route {
  position: absolute;
  z-index: 6;
  right: 228px;
  top: 126px;
  width: 215px;
  height: 142px;
  border: 3px dashed #5b9df4;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  transform: rotate(-19deg);
}
.ntm3-pin-float {
  position: absolute;
  z-index: 8;
  right: 194px;
  top: 84px;
  color: #ff7609;
}
.ntm3-pin-float svg {
  width: 70px;
  height: 70px;
  filter: drop-shadow(0 8px 12px rgba(255,113,0,.25));
}
.ntm3-shop {
  position: absolute;
  right: 0;
  top: 150px;
  width: 235px;
  height: 520px;
}
.ntm3-shop-sign {
  position: absolute;
  z-index: 5;
  left: 30px;
  top: 0;
  width: 165px;
  height: 80px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #3c7658;
  border: 5px solid #c3d5bf;
  font-size: 20px;
  line-height: 1.14;
  text-align: center;
  font-weight: 950;
  transform: rotate(-4deg);
  box-shadow: 0 12px 18px rgba(28,72,62,.22);
}
.ntm3-awning {
  position: absolute;
  z-index: 3;
  left: 0;
  right: -35px;
  top: 70px;
  height: 78px;
  border-radius: 10px 10px 28px 28px;
  background: repeating-linear-gradient(115deg, #2f795b 0 38px, #f4ead8 38px 76px);
  box-shadow: 0 12px 20px rgba(42,90,67,.2);
}
.ntm3-shop-body {
  position: absolute;
  left: 20px;
  right: -35px;
  bottom: 0;
  top: 118px;
  border-radius: 12px 0 0 0;
  background:
    linear-gradient(90deg, rgba(255,255,255,.18) 0 2px, transparent 2px 58px),
    linear-gradient(180deg, rgba(116,82,52,.42), rgba(88,64,43,.76));
}
.ntm3-phone {
  position: absolute;
  z-index: 16;
  right: 67px;
  top: 210px;
  width: 428px;
  height: 812px;
  border-radius: 48px;
  background: #151515;
  padding: 17px;
  box-shadow: 0 22px 33px rgba(0,0,0,.28);
}
.ntm3-phone-speaker {
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
.ntm3-phone-screen {
  position: relative;
  height: 100%;
  border-radius: 34px;
  overflow: hidden;
  background: #f8fbff;
  border: 1px solid #dce7f5;
  padding: 18px 18px 14px;
}
.ntm3-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  color: #0e1628;
  font-size: 13px;
  font-weight: 900;
}
.ntm3-status i {
  width: 52px;
  height: 13px;
  border-radius: 999px;
  background: linear-gradient(90deg, #111 0 17px, transparent 17px 22px, #111 22px 30px, transparent 30px 34px, #111 34px 52px);
}
.ntm3-browser {
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
.ntm3-browser svg { width: 19px; height: 19px; }
.ntm3-mobile-search {
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
.ntm3-mobile-search svg { color: #1c5fce; width: 24px; height: 24px; }
.ntm3-location-row {
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
.ntm3-location-row svg { width: 24px; height: 24px; }
.ntm3-location-row strong {
  display: block;
  color: #183153;
  font-size: 12px;
  line-height: 1.1;
  font-weight: 850;
}
.ntm3-location-row span {
  display: block;
  margin-top: 2px;
  color: #39536f;
  font-size: 10px;
  line-height: 1.15;
  font-weight: 650;
}
.ntm3-map {
  position: relative;
  height: 121px;
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
.ntm3-map-circle {
  position: absolute;
  left: 91px;
  top: -4px;
  width: 133px;
  height: 133px;
  border-radius: 50%;
  background: rgba(54,149,238,.16);
  border: 1px solid rgba(54,149,238,.2);
}
.ntm3-map-pin {
  position: absolute;
  width: 20px;
  height: 20px;
  color: #299867;
}
.ntm3-map-pin svg { width: 20px; height: 20px; }
.ntm3-map-pin.pin-1 { left: 86px; top: 36px; }
.ntm3-map-pin.pin-2 { left: 262px; top: 41px; }
.ntm3-map-pin.pin-3 { left: 218px; top: 18px; }
.ntm3-map-pin.pin-4 { left: 60px; top: 82px; }
.ntm3-map-pin.pin-5 { left: 281px; top: 86px; }
.ntm3-map-main-pin {
  position: absolute;
  left: 163px;
  top: 52px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #ff6c00;
  box-shadow: 0 7px 14px rgba(255,108,0,.24);
}
.ntm3-map-main-pin svg { width: 25px; height: 25px; }
.ntm3-shop-result {
  position: relative;
  min-height: 112px;
  margin-top: 13px;
  padding: 12px 50px 12px 80px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 5px 13px rgba(30,90,160,.08);
}
.ntm3-shop-avatar {
  position: absolute;
  left: 14px;
  top: 17px;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: linear-gradient(135deg, #58a968, #d98b2d);
}
.ntm3-shop-result h3 {
  margin: 0 0 5px;
  color: #172b52;
  font-size: 14px;
  font-weight: 950;
}
.ntm3-shop-result p {
  margin: 3px 0;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #39536f;
  font-size: 9px;
  line-height: 1.15;
  font-weight: 700;
}
.ntm3-shop-result p svg {
  width: 12px;
  height: 12px;
  color: #126ee8;
}
.ntm3-shop-result p:first-of-type svg { color: #0ab374; }
.ntm3-shop-result span { color: #456278; }
.ntm3-shop-result b {
  position: absolute;
  right: 15px;
  top: 17px;
  color: #f7b500;
  font-size: 14px;
  font-weight: 950;
}
.ntm3-product-strip {
  display: grid;
  grid-template-columns: repeat(4, 112px);
  gap: 10px;
  margin-top: 14px;
  overflow: hidden;
}
.ntm3-product {
  min-height: 153px;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 4px 11px rgba(30,90,160,.08);
}
.ntm3-product div {
  height: 71px;
}
.ntm3-product h4 {
  margin: 8px 8px 2px;
  color: #14284a;
  font-size: 10px;
  line-height: 1.18;
  font-weight: 850;
}
.ntm3-product p {
  margin: 0 8px 8px;
  color: #5a6c80;
  font-size: 9px;
  line-height: 1.1;
  font-weight: 650;
}
.ntm3-product strong {
  display: block;
  margin: 0 8px;
  color: #162a52;
  font-size: 16px;
  font-weight: 950;
}
.ntm3-phone-nav {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 16px;
  height: 68px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  border-radius: 17px;
  background: #fff;
  box-shadow: 0 -4px 14px rgba(20,80,150,.07);
  padding: 8px 6px;
}
.ntm3-phone-nav div {
  position: relative;
  display: grid;
  place-items: center;
  text-align: center;
  color: #536783;
  font-size: 9px;
  line-height: 1.1;
  font-weight: 800;
}
.ntm3-phone-nav svg {
  width: 23px;
  height: 23px;
  margin-bottom: 4px;
}
.ntm3-phone-nav .active { color: #126ee8; }
.ntm3-phone-nav em {
  position: absolute;
  top: 0;
  right: 16px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #0ab374;
  font-size: 10px;
  font-style: normal;
  font-weight: 900;
}
.ntm3-bottom-scene {
  position: absolute;
  z-index: 18;
  left: 0;
  right: 0;
  bottom: 126px;
  height: 238px;
}
.ntm3-table {
  position: absolute;
  z-index: 4;
  left: 0;
  right: 0;
  bottom: 0;
  height: 92px;
  background: linear-gradient(180deg, #d99a60, #9e6035);
  box-shadow: inset 0 7px 0 rgba(255,255,255,.22);
}
.ntm3-qr-board {
  position: absolute;
  z-index: 7;
  left: 346px;
  bottom: 42px;
  width: 122px;
  height: 162px;
  border-radius: 9px;
  padding: 12px 11px;
  background: #fff;
  text-align: center;
  box-shadow: 0 12px 22px rgba(23,79,162,.18);
}
.ntm3-qr-board strong {
  display: block;
  color: #1e2940;
  font-size: 13px;
  line-height: 1.12;
  font-weight: 950;
  margin-bottom: 9px;
}
.ntm3-qr-board .ntm3-qr {
  width: 79px;
  height: 79px;
  margin: 0 auto;
}
.ntm3-tea-box {
  position: absolute;
  z-index: 8;
  left: 500px;
  bottom: 40px;
  width: 105px;
  height: 83px;
  padding-top: 17px;
  color: #fff;
  background: #586c2d;
  border-radius: 3px;
  text-align: center;
  font-size: 13px;
  line-height: 1.18;
  font-weight: 850;
}
.ntm3-vegetable-basket {
  position: absolute;
  z-index: 8;
  left: 610px;
  bottom: 34px;
  width: 132px;
  height: 72px;
  border-radius: 50% 50% 20px 20px;
  background: radial-gradient(circle at 20% 18%, #ec4a24 0 12px, transparent 13px),
    radial-gradient(circle at 43% 12%, #52aa38 0 18px, transparent 19px),
    radial-gradient(circle at 68% 20%, #ff6a2c 0 14px, transparent 15px),
    linear-gradient(180deg, #c88442, #875229);
}
.ntm3-buyer-mini {
  position: absolute;
  z-index: 7;
  left: 0;
  bottom: 0;
  width: 260px;
  height: 265px;
}
.ntm3-buyer-mini .hair {
  position: absolute;
  left: 24px;
  top: 12px;
  width: 160px;
  height: 150px;
  border-radius: 100px 100px 54px 70px;
  background: #211928;
  transform: rotate(-20deg);
}
.ntm3-buyer-mini .face {
  position: absolute;
  left: 82px;
  top: 75px;
  width: 72px;
  height: 95px;
  border-radius: 47%;
  background: #ffbd8c;
  transform: rotate(-12deg);
}
.ntm3-buyer-mini .body {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 170px;
  height: 127px;
  border-radius: 78px 78px 0 0;
  background: #0b57b2;
}
.ntm3-buyer-mini .arm {
  position: absolute;
  left: 135px;
  top: 158px;
  width: 96px;
  height: 24px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(-28deg);
}
.ntm3-buyer-mini .phone {
  position: absolute;
  left: 187px;
  top: 128px;
  width: 28px;
  height: 54px;
  border-radius: 6px;
  background: #13284d;
  transform: rotate(-23deg);
}
.ntm3-buyer-mini .bag-strap {
  position: absolute;
  left: -4px;
  top: 145px;
  width: 52px;
  height: 140px;
  border-radius: 999px;
  border: 10px solid #dac2a5;
  border-right: 0;
}
.ntm3-seller {
  position: absolute;
  z-index: 9;
  right: 0;
  bottom: 0;
  width: 220px;
  height: 245px;
}
.ntm3-seller .hat {
  position: absolute;
  right: 52px;
  top: 0;
  width: 106px;
  height: 55px;
  border-radius: 70px 70px 14px 14px;
  background: #4c6426;
}
.ntm3-seller .face {
  position: absolute;
  right: 72px;
  top: 48px;
  width: 76px;
  height: 92px;
  border-radius: 47%;
  background: #ffbd8c;
}
.ntm3-seller .shirt {
  position: absolute;
  right: -10px;
  bottom: 0;
  width: 200px;
  height: 125px;
  border-radius: 85px 85px 0 0;
  background: #5b7d36;
}
.ntm3-seller .basket {
  position: absolute;
  right: 50px;
  bottom: 42px;
  width: 145px;
  height: 75px;
  border-radius: 50% 50% 25px 25px;
  background: radial-gradient(circle at 20% 15%, #f04e29 0 12px, transparent 13px),
    radial-gradient(circle at 43% 7%, #51a53a 0 17px, transparent 18px),
    radial-gradient(circle at 70% 16%, #ff6a2c 0 14px, transparent 15px),
    linear-gradient(180deg, #c88442, #875229);
}
.ntm3-bottom-cta {
  position: absolute;
  z-index: 30;
  left: 30px;
  right: 30px;
  bottom: 30px;
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
.ntm3-bottom-cta svg {
  width: 45px;
  height: 45px;
}
.ntm3-try-btn:hover,
.ntm3-bottom-cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}

@media (max-width: 820px) {
  .ntm3-main { min-height: 1420px; }
  .ntm3-copy { width: 700px; margin-left: 34px; }
  .ntm3-copy h1 { font-size: 54px; }
  .ntm3-copy p { font-size: 22px; }
  .ntm3-layout { transform: scale(.9); transform-origin: top center; width: 111%; left: -5.5%; }
  .ntm3-bottom-scene { transform: scale(.9); transform-origin: bottom center; width: 111%; left: -5.5%; }
  .ntm3-bottom-cta { left: 24px; right: 24px; }
}

@media (max-width: 520px) {
  .ntm3-main { min-height: 1280px; }
  .ntm3-copy { width: calc(100% - 34px); margin: 0 auto; padding-top: 28px; }
  .ntm3-badge-row { gap: 12px; }
  .ntm3-badge-row span { width: 82px; height: 36px; font-size: 16px; }
  .ntm3-copy h1 { width: 100%; font-size: 38px; letter-spacing: -1.6px; }
  .ntm3-copy p { width: 100%; font-size: 17px; }
  .ntm3-layout { transform: scale(.68); width: 147%; left: -23.5%; top: -15px; }
  .ntm3-step-list { width: 340px; }
  .ntm3-step-card { min-height: 105px; }
  .ntm3-bottom-scene { transform: scale(.7); width: 143%; left: -21.5%; bottom: 100px; }
  .ntm3-bottom-cta { left: 18px; right: 18px; bottom: 34px; height: 68px; font-size: 24px; }
  .ntm3-bottom-cta svg { width: 34px; height: 34px; }
}
`;
