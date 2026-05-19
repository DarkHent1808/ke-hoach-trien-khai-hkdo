import React from "react";

const flowSteps = [
  { icon: <GlobeIcon />, title: "Vào", desc: "HKDO.vn" },
  { icon: <EditDocIcon />, title: "Chọn", desc: "Đăng ký" },
  { icon: <IdCardIcon />, title: "Khai báo", desc: "thông tin" },
  { icon: <StoreFrontIcon />, title: "Chọn", desc: "Mở cửa hàng" },
  { icon: <BoxIcon />, title: "Tạo 01", desc: "sản phẩm hoặc dịch vụ" },
  { icon: <InvoiceIcon />, title: "Xuất", desc: "01 đơn hàng" },
  { icon: <ReceiptTaxIcon />, title: "Xem sổ", desc: "kê khai thuế" },
  { icon: <GlobeIcon />, title: "Vào", desc: "dothithongminh1.vn" },
  { icon: <SearchIcon />, title: "Gõ tên", desc: "sản phẩm" },
  { icon: <UserCheckIcon />, title: "Chọn đúng", desc: "hồ của mình" },
  { icon: <CartIcon />, title: "Cho vào", desc: "giỏ hàng" },
  { icon: <ChecklistIcon />, title: "Đi hết luồng", desc: "đặt hàng giả định" },
];

export default function HKDFlowPage() {
  return (
    <section id="hkd-chuoi-1-10" className="hkd-flow-page" aria-label="Chuỗi 1 cộng 10 phút của hộ kinh doanh">
      <style>{css}</style>

      <section className="hkd-flow-heading">
        <div className="hkd-flow-pill">MÀN 3</div>
        <h1>Chuỗi 1+10 phút của anh/chị</h1>
        <p>Đây là chuỗi thao tác cốt lõi để anh/chị bắt đầu vận hành số và kiểm chứng đầu ra ngay.</p>
      </section>

      <HeroIllustration />

      <section className="hkd-flow-grid" aria-label="12 bước trong chuỗi 1 cộng 10 phút">
        {flowSteps.map((step, index) => (
          <article className="hkd-flow-step" key={`${index + 1}-${step.title}-${step.desc}`}>
            <div className="hkd-flow-step-icon">{step.icon}</div>
            <div>
              <h2><strong>{index + 1}.</strong> {step.title}</h2>
              <p>{step.desc}</p>
            </div>
          </article>
        ))}
      </section>

      <a href="#hkd-buoc-tiep-theo" className="hkd-flow-video-btn">
        <PlayIcon />
        <span>Xem bước tiếp theo</span>
      </a>

      <section className="hkd-flow-bottom-card">
        <a href="#hkd-buoc-tiep-theo" className="hkd-flow-cta">
          <RocketIcon />
          <span>Bắt đầu ngay</span>
        </a>

        <footer className="hkd-flow-footer-brand">
          <div className="hkd-flow-footer-logo">HKDO</div>
          <span>HKDO - Nền tảng số cho hộ kinh doanh</span>
        </footer>
      </section>
    </section>
  );
}

function HeroIllustration() {
  return (
    <section className="hkd-flow-art" aria-hidden="true">
      <div className="hkd-flow-city city-left"><i /><i /><i /></div>
      <div className="hkd-flow-city city-right"><i /><i /><i /></div>
      <div className="hkd-flow-cloud cloud-a" />
      <div className="hkd-flow-cloud cloud-b" />
      <div className="hkd-flow-tree tree-left" />
      <div className="hkd-flow-tree tree-right" />
      <div className="hkd-flow-plant plant-left" />
      <div className="hkd-flow-plant plant-right" />
      <div className="hkd-flow-coffee" />

      <div className="hkd-flow-shop">
        <div className="hkd-flow-shop-sign">CỬA HÀNG<br />HỘ KINH DOANH</div>
        <div className="hkd-flow-awning" />
        <div className="hkd-flow-door-sign">MỞ CỬA</div>
        <div className="hkd-flow-shop-window">
          {Array.from({ length: 18 }).map((_, index) => <i key={index} />)}
        </div>
      </div>

      <div className="hkd-flow-owner">
        <div className="hair" />
        <div className="face" />
        <div className="neck" />
        <div className="shirt" />
        <div className="apron" />
        <div className="arm-left" />
        <div className="arm-right" />
        <div className="phone" />
      </div>

      <div className="hkd-flow-laptop"><div>HKDO</div></div>

      <div className="hkd-floating-card card-product">
        <strong>Tạo sản phẩm</strong>
        <div className="product-row">
          <div className="shirt-icon" />
          <p><span /> <span /></p>
        </div>
        <small>Áo thun nam<br />150.000 đ</small>
        <button>Lưu sản phẩm</button>
      </div>

      <div className="hkd-floating-card card-register">
        <strong>Đăng ký hộ KD</strong>
        <div className="user-circle"><UserIcon /></div>
        <i /><i />
        <button>Đăng ký</button>
      </div>

      <div className="hkd-floating-card card-qr-order">
        <strong>Quét mã đặt hàng</strong>
        <QrGraphic />
        <button>Quét QR</button>
      </div>

      <svg className="hkd-flow-dash dash-one" viewBox="0 0 170 120" fill="none">
        <path d="M12 108C70 97 53 22 123 18" stroke="#1f7be9" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />
      </svg>
      <svg className="hkd-flow-dash dash-two" viewBox="0 0 170 120" fill="none">
        <path d="M5 107C68 88 74 23 154 17" stroke="#1f7be9" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />
      </svg>

      <div className="hkd-flow-qr-stand">
        <div className="qr-stand-head">THANH TOÁN<br />QUÉT MÃ QR</div>
        <QrGraphic />
        <strong>HKDO</strong>
      </div>
    </section>
  );
}

function QrGraphic() {
  return (
    <svg className="hkd-flow-qr-graphic" viewBox="0 0 100 100" fill="none">
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

function GlobeIcon() { return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4"/><path d="M3 12h18M12 3c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></Svg>; }
function EditDocIcon() { return <Svg><path d="M6 3h9l3 3v15H6V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/><path d="M14 3v4h4M9 14l6-6 2 2-6 6H9v-2Z" fill="currentColor"/></Svg>; }
function IdCardIcon() { return <Svg><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2.3"/><circle cx="9" cy="11" r="2.2" fill="currentColor"/><path d="M6.4 16c.4-2.1 1.3-3.2 2.6-3.2s2.2 1.1 2.6 3.2" fill="currentColor"/><path d="M14 10h4M14 14h4" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/></Svg>; }
function StoreFrontIcon() { return <Svg><path d="M4 10h16l-2-5H6l-2 5Z" fill="currentColor" opacity=".22"/><path d="M5 10v10h14V10M8 20v-6h4v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><path d="M4 10c.5 2 2.5 2.7 4 1 1.3 1.8 3.7 1.8 5 0 1.3 1.8 3.7 1.8 5 0 1.5 1.7 3.5 1 4-1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function BoxIcon() { return <Svg><path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/></Svg>; }
function InvoiceIcon() { return <Svg><path d="M7 3h10v18l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/><path d="M10 8h4M10 12h4M10 16h3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function ReceiptTaxIcon() { return <Svg><path d="M7 3h10v18l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/><path d="M9 9h6M9 14h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><path d="m10 18 4-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function SearchIcon() { return <Svg><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2.8"/><path d="m16 16 5 5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/></Svg>; }
function UserCheckIcon() { return <Svg><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4.5 21c.6-4.8 3-7.2 7.5-7.2s6.9 2.4 7.5 7.2h-15Z" fill="currentColor" opacity=".9"/><path d="m15 17 2 2 4-5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function CartIcon() { return <Svg><path d="M3 4h2l2.5 11h10l2-7H7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="20" r="1.6" fill="currentColor"/><circle cx="17" cy="20" r="1.6" fill="currentColor"/></Svg>; }
function ChecklistIcon() { return <Svg><path d="M7 3h10v18H7V3Z" stroke="currentColor" strokeWidth="2.2"/><path d="m9 8 1.2 1.2L13 6.5M9 13l1.2 1.2L13 11.5M15 8h1M15 13h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function PlayIcon() { return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4"/><path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor"/></Svg>; }
function RocketIcon() { return <Svg><path d="M13 4c3.2 1 5.4 3.2 6.4 6.4l-5.6 5.6-4.4-4.4L13 4Z" fill="currentColor"/><path d="M8.8 12.2 5 13l-2 4 4-.8M11.8 15.2 11 19l-4 2 .8-4" fill="currentColor" opacity=".85"/><circle cx="15" cy="9" r="1.8" fill="#fff"/></Svg>; }
function UserIcon() { return <Svg><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4.5 21c.6-4.8 3-7.2 7.5-7.2s6.9 2.4 7.5 7.2h-15Z" fill="currentColor"/></Svg>; }

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

.hkd-flow-page {
  position: relative;
  width: 100%;
  min-height: 1518px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 2%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 51%, #fbfdff 100%);
}
.hkd-flow-heading {
  position: relative;
  z-index: 8;
  width: 760px;
  margin: 0 auto;
  padding-top: 36px;
  text-align: center;
}
.hkd-flow-pill {
  width: 127px;
  height: 44px;
  margin: 0 auto 15px;
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
.hkd-flow-heading h1 {
  width: 730px;
  margin: 0 auto 22px;
  color: #075bd2;
  font-size: 72px;
  line-height: 1.05;
  font-weight: 950;
  letter-spacing: -3.4px;
}
.hkd-flow-heading p {
  width: 600px;
  margin: 0 auto;
  color: #1d2742;
  font-size: 24px;
  line-height: 1.34;
  font-weight: 500;
}

.hkd-flow-art {
  position: relative;
  z-index: 4;
  height: 516px;
  margin-top: 10px;
  overflow: hidden;
}
.hkd-flow-art::before {
  content: "";
  position: absolute;
  inset: 137px -22px 0;
  background: linear-gradient(180deg, rgba(206,238,255,.7), rgba(255,255,255,.15));
  border-radius: 50% 50% 0 0;
}
.hkd-flow-city { position: absolute; display: flex; align-items: flex-end; gap: 10px; opacity: .42; }
.hkd-flow-city.city-left { left: 35px; bottom: 112px; }
.hkd-flow-city.city-right { right: 83px; bottom: 106px; }
.hkd-flow-city i {
  width: 36px;
  height: 83px;
  border-radius: 9px 9px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.22), rgba(85,154,219,.06));
}
.hkd-flow-city i:nth-child(2) { height: 124px; }
.hkd-flow-city i:nth-child(3) { height: 96px; }
.hkd-flow-cloud,
.hkd-flow-cloud::before,
.hkd-flow-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.94);
}
.hkd-flow-cloud.cloud-a { right: 78px; top: 95px; width: 112px; height: 22px; }
.hkd-flow-cloud.cloud-a::before { width: 46px; height: 46px; left: 20px; top: -24px; }
.hkd-flow-cloud.cloud-a::after { width: 65px; height: 65px; left: 57px; top: -40px; }
.hkd-flow-cloud.cloud-b { left: 126px; top: 153px; width: 88px; height: 16px; opacity: .86; }
.hkd-flow-cloud.cloud-b::before { width: 35px; height: 35px; left: 15px; top: -17px; }
.hkd-flow-cloud.cloud-b::after { width: 50px; height: 50px; left: 40px; top: -29px; }
.hkd-flow-tree {
  position: absolute;
  width: 65px;
  height: 128px;
  border-radius: 44px 44px 18px 18px;
  background: linear-gradient(180deg, #a6dc9f, #53b276);
}
.hkd-flow-tree.tree-left { left: 11px; bottom: 57px; }
.hkd-flow-tree.tree-right { right: 17px; bottom: 64px; }
.hkd-flow-tree::after {
  content: "";
  position: absolute;
  left: 31px;
  top: 49px;
  width: 5px;
  height: 72px;
  border-radius: 999px;
  background: #307a58;
}
.hkd-flow-plant {
  position: absolute;
  z-index: 7;
  width: 73px;
  height: 86px;
  bottom: 27px;
}
.hkd-flow-plant.plant-left { left: 31px; }
.hkd-flow-plant.plant-right { right: 34px; }
.hkd-flow-plant::before,
.hkd-flow-plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 77px;
  border-radius: 40px 40px 0 0;
  background: linear-gradient(180deg, #92d88f, #3ea869);
}
.hkd-flow-plant::before { left: 2px; transform: rotate(-28deg); }
.hkd-flow-plant::after { right: 2px; transform: rotate(27deg); }
.hkd-flow-coffee {
  position: absolute;
  z-index: 8;
  left: 108px;
  bottom: 12px;
  width: 48px;
  height: 64px;
  border-radius: 8px 8px 18px 18px;
  background: linear-gradient(180deg, #222, #f0d4ad 14%, #fff 18%);
  box-shadow: 0 9px 14px rgba(0,0,0,.1);
}
.hkd-flow-coffee::before {
  content: "";
  position: absolute;
  left: -3px;
  right: -3px;
  top: 0;
  height: 15px;
  border-radius: 999px;
  background: #222;
}
.hkd-flow-shop {
  position: absolute;
  z-index: 4;
  left: 42px;
  bottom: 28px;
  width: 318px;
  height: 388px;
  border-radius: 11px 11px 0 0;
  background: linear-gradient(180deg, #9bd1f7, #4e89be 30%, #254e7d 100%);
  box-shadow: 0 18px 30px rgba(24,74,139,.22);
}
.hkd-flow-shop-sign {
  position: absolute;
  left: 5px;
  right: 5px;
  top: -1px;
  height: 84px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #2c6fbd, #1d559d);
  border: 5px solid rgba(255,255,255,.18);
  font-size: 24px;
  line-height: 1.08;
  font-weight: 950;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,50,120,.22);
}
.hkd-flow-awning {
  position: absolute;
  left: 0;
  right: 0;
  top: 84px;
  height: 64px;
  background: repeating-linear-gradient(90deg, #11458d 0 40px, #315f9e 40px 80px);
  border-radius: 0 0 25px 25px;
}
.hkd-flow-awning::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -20px;
  height: 35px;
  background: repeating-radial-gradient(circle at 40px 0, #315f9e 0 32px, #11458d 33px 65px);
  clip-path: inset(0 0 0 0 round 0 0 24px 24px);
}
.hkd-flow-door-sign {
  position: absolute;
  z-index: 3;
  left: 67px;
  top: 220px;
  width: 109px;
  height: 61px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #1164c7;
  border: 4px solid #b3d9ff;
  font-size: 18px;
  font-weight: 950;
  box-shadow: 0 10px 18px rgba(0,40,110,.25);
}
.hkd-flow-door-sign::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -31px;
  width: 2px;
  height: 31px;
  background: #93b7dd;
  transform: translateX(-50%);
}
.hkd-flow-shop-window {
  position: absolute;
  left: 27px;
  right: 27px;
  bottom: 41px;
  height: 160px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 9px;
  padding: 19px;
  border-radius: 12px;
  background: rgba(27,36,49,.48);
}
.hkd-flow-shop-window i {
  border-radius: 4px 4px 12px 12px;
  background: linear-gradient(180deg, #ffcd74, #8d6331);
}
.hkd-flow-owner {
  position: absolute;
  z-index: 8;
  left: 315px;
  bottom: 9px;
  width: 294px;
  height: 507px;
}
.hkd-flow-owner .hair {
  position: absolute;
  left: 75px;
  top: 0;
  width: 132px;
  height: 93px;
  border-radius: 82px 82px 30px 30px;
  background: #16191c;
  transform: rotate(-7deg);
}
.hkd-flow-owner .face {
  position: absolute;
  left: 101px;
  top: 76px;
  width: 89px;
  height: 111px;
  border-radius: 47%;
  background: #ffbd8c;
}
.hkd-flow-owner .neck {
  position: absolute;
  left: 123px;
  top: 172px;
  width: 45px;
  height: 52px;
  background: #f4a979;
}
.hkd-flow-owner .shirt {
  position: absolute;
  left: 40px;
  top: 202px;
  width: 215px;
  height: 245px;
  border-radius: 80px 80px 0 0;
  background: #fff;
}
.hkd-flow-owner .apron {
  position: absolute;
  left: 77px;
  top: 224px;
  width: 139px;
  height: 274px;
  border-radius: 60px 60px 0 0;
  background: #102e5a;
}
.hkd-flow-owner .apron::before,
.hkd-flow-owner .apron::after {
  content: "";
  position: absolute;
  top: -30px;
  width: 18px;
  height: 102px;
  border-radius: 999px;
  background: #102e5a;
}
.hkd-flow-owner .apron::before { left: 10px; transform: rotate(-18deg); }
.hkd-flow-owner .apron::after { right: 10px; transform: rotate(18deg); }
.hkd-flow-owner .arm-left {
  position: absolute;
  left: 9px;
  top: 300px;
  width: 150px;
  height: 35px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(20deg);
}
.hkd-flow-owner .arm-right {
  position: absolute;
  right: 20px;
  top: 275px;
  width: 117px;
  height: 35px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(-66deg);
}
.hkd-flow-owner .phone {
  position: absolute;
  right: 29px;
  top: 199px;
  width: 48px;
  height: 86px;
  border-radius: 10px;
  background: #1c222b;
  transform: rotate(-10deg);
  box-shadow: 0 8px 12px rgba(0,0,0,.22);
}
.hkd-flow-owner .phone::after {
  content: "";
  position: absolute;
  left: 26px;
  top: 8px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #485463;
}
.hkd-flow-laptop {
  position: absolute;
  z-index: 12;
  left: 381px;
  bottom: 10px;
  width: 282px;
  height: 143px;
  border-radius: 10px;
  background: linear-gradient(135deg, #cfd5dc, #7f8d9c);
  box-shadow: 0 18px 24px rgba(0,42,92,.22);
  transform: perspective(220px) rotateX(4deg) skewX(-4deg);
}
.hkd-flow-laptop::after {
  content: "";
  position: absolute;
  left: -30px;
  right: -30px;
  bottom: -14px;
  height: 16px;
  border-radius: 50%;
  background: rgba(61,84,105,.35);
}
.hkd-flow-laptop div {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #075bd2;
  font-size: 16px;
  font-weight: 850;
  transform: translate(-50%, -50%);
}
.hkd-floating-card {
  position: absolute;
  z-index: 14;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 12px 22px rgba(28,87,160,.16);
  border: 1px solid #d2e6fb;
}
.card-product {
  left: 180px;
  top: 158px;
  width: 139px;
  height: 159px;
  padding: 14px;
}
.hkd-floating-card strong {
  display: block;
  color: #1b2c5d;
  font-size: 12px;
  line-height: 1;
  font-weight: 950;
  margin-bottom: 12px;
}
.product-row {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 10px;
  align-items: center;
}
.shirt-icon {
  width: 37px;
  height: 37px;
  border-radius: 7px;
  background: #d6ebff;
  position: relative;
}
.shirt-icon::before {
  content: "";
  position: absolute;
  inset: 9px 8px 6px;
  background: #0b69d1;
  clip-path: polygon(30% 0,70% 0,100% 23%,80% 43%,80% 100%,20% 100%,20% 43%,0 23%);
}
.product-row p { margin: 0; display: grid; gap: 8px; }
.product-row span { height: 9px; border-radius: 999px; background: #dbe7f4; }
.card-product small {
  display: block;
  margin: 11px 0 8px;
  color: #2d3547;
  font-size: 10px;
  line-height: 1.3;
  font-weight: 700;
}
.hkd-floating-card button {
  height: 24px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background: #075bd2;
  font-size: 9px;
  font-weight: 850;
}
.card-product button { width: 88px; }
.card-register {
  left: 488px;
  top: 22px;
  width: 135px;
  height: 171px;
  padding: 14px;
  text-align: center;
}
.card-register .user-circle {
  width: 55px;
  height: 55px;
  margin: 0 auto 8px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #eaf5ff;
  font-size: 34px;
}
.card-register i {
  display: block;
  width: 87px;
  height: 8px;
  margin: 8px auto;
  border-radius: 999px;
  background: #dbe7f4;
}
.card-register button { width: 102px; margin-top: 4px; }
.card-qr-order {
  right: 113px;
  top: 167px;
  width: 127px;
  height: 160px;
  padding: 10px;
  text-align: center;
}
.card-qr-order strong { margin-bottom: 7px; }
.card-qr-order .hkd-flow-qr-graphic {
  width: 78px;
  height: 78px;
  margin: 0 auto 8px;
}
.card-qr-order button { width: 82px; }
.hkd-flow-dash {
  position: absolute;
  z-index: 10;
  opacity: .85;
}
.dash-one { left: 536px; top: 160px; width: 170px; height: 120px; }
.dash-two { right: 184px; top: 207px; width: 170px; height: 120px; transform: rotate(18deg); }
.hkd-flow-qr-stand {
  position: absolute;
  z-index: 13;
  right: 58px;
  bottom: 18px;
  width: 138px;
  height: 212px;
  padding: 0 11px 12px;
  border-radius: 11px;
  text-align: center;
  background: #fff;
  border: 4px solid #4e91df;
  box-shadow: 0 14px 26px rgba(16,83,170,.18);
  transform: rotate(-2deg);
}
.hkd-flow-qr-stand .qr-stand-head {
  height: 49px;
  margin: -4px -11px 9px;
  border-radius: 9px 9px 0 0;
  display: grid;
  place-items: center;
  color: #fff;
  background: #116bd5;
  font-size: 12px;
  line-height: 1.15;
  font-weight: 950;
}
.hkd-flow-qr-stand .hkd-flow-qr-graphic {
  width: 101px;
  height: 101px;
  margin: 0 auto 10px;
}
.hkd-flow-qr-stand strong {
  color: #075bd2;
  font-size: 20px;
  line-height: 1;
  font-weight: 950;
}

.hkd-flow-grid {
  position: relative;
  z-index: 18;
  width: calc(100% - 68px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 13px 10px;
}
.hkd-flow-step {
  min-height: 107px;
  padding: 18px 20px;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 67px 1fr;
  align-items: center;
  gap: 14px;
  background: rgba(255,255,255,.97);
  box-shadow: 0 11px 23px rgba(31,101,178,.1);
}
.hkd-flow-step-icon {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: #075bd2;
  font-size: 39px;
}
.hkd-flow-step h2,
.hkd-flow-step p {
  margin: 0;
  color: #1e2741;
  font-size: 21px;
  line-height: 1.22;
  font-weight: 600;
}
.hkd-flow-step h2 strong {
  color: #075bd2;
  font-size: 28px;
  font-weight: 950;
}
.hkd-flow-step p { margin-top: 2px; }
.hkd-flow-video-btn {
  position: relative;
  z-index: 20;
  width: calc(100% - 64px);
  height: 50px;
  margin: 16px auto 18px;
  border-radius: 8px;
  border: 2px solid #075bd2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #075bd2;
  background: #fff;
  font-size: 21px;
  font-weight: 850;
  white-space: nowrap;
  transition: transform .18s ease, filter .18s ease;
}
.hkd-flow-video-btn:hover,
.hkd-flow-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.hkd-flow-video-btn svg {
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
}
.hkd-flow-video-btn span {
  display: inline-block;
  line-height: 1;
}
.hkd-flow-bottom-card {
  position: relative;
  z-index: 20;
  width: calc(100% - 34px);
  margin: 0 auto;
  min-height: 164px;
  padding: 16px 18px 0;
  border-radius: 20px;
  background: rgba(255,255,255,.96);
  box-shadow: 0 10px 25px rgba(31,101,178,.11);
}
.hkd-flow-cta {
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
.hkd-flow-cta svg {
  width: 57px;
  height: 57px;
  justify-self: end;
  margin-right: 23px;
}
.hkd-flow-cta span { justify-self: start; }
.hkd-flow-footer-brand {
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #242b40;
}
.hkd-flow-footer-logo {
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
.hkd-flow-footer-brand span {
  font-size: 21px;
  line-height: 1;
  font-weight: 650;
}

@media (max-width: 820px) {
  .hkd-flow-page { min-height: 1370px; }
  .hkd-flow-heading { width: calc(100% - 40px); }
  .hkd-flow-heading h1 { width: 100%; font-size: clamp(48px, 10vw, 72px); }
  .hkd-flow-heading p { width: min(100%, 600px); font-size: 22px; }
  .hkd-flow-art { transform: scale(.86); transform-origin: top center; width: 116%; left: -8%; height: 462px; }
  .hkd-flow-grid { width: calc(100% - 46px); }
  .hkd-flow-step { padding: 14px; grid-template-columns: 58px 1fr; }
  .hkd-flow-step h2,
  .hkd-flow-step p { font-size: 17px; }
  .hkd-flow-step h2 strong { font-size: 23px; }
  .hkd-flow-cta { grid-template-columns: 1fr 1fr 1fr; }
}

@media (max-width: 520px) {
  .hkd-flow-page { min-height: 1240px; }
  .hkd-flow-heading { padding-top: 28px; }
  .hkd-flow-pill { width: 105px; height: 38px; font-size: 20px; }
  .hkd-flow-heading h1 { font-size: 38px; }
  .hkd-flow-heading p { font-size: 17px; }
  .hkd-flow-art { transform: scale(.64); width: 150%; left: -25%; height: 360px; }
  .hkd-flow-grid { width: calc(100% - 34px); grid-template-columns: 1fr; gap: 10px; }
  .hkd-flow-step { min-height: 78px; grid-template-columns: 54px 1fr; }
  .hkd-flow-step-icon { width: 50px; height: 50px; font-size: 33px; }
  .hkd-flow-step h2,
  .hkd-flow-step p { font-size: 16px; }
  .hkd-flow-step h2 strong { font-size: 21px; }
  .hkd-flow-video-btn {
    width: calc(100% - 34px);
    font-size: 17px;
    gap: 10px;
  }
  .hkd-flow-video-btn span { margin-left: 0; }
  .hkd-flow-bottom-card { width: calc(100% - 24px); min-height: 135px; }
  .hkd-flow-cta { height: 70px; grid-template-columns: 74px 1fr; font-size: 24px; }
  .hkd-flow-cta svg { justify-self: center; margin: 0; width: 39px; height: 39px; }
  .hkd-flow-footer-brand span { font-size: 15px; }
}
`;
