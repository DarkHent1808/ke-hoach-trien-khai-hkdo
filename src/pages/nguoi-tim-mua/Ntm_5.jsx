import React from "react";

const ntm5Faqs = [
  {
    number: "1",
    question: "Tôi tìm theo cách nào nhanh nhất?",
    answer: "Gõ tên sản phẩm trong ô tìm kiếm hoặc quét QR tại điểm bán.",
  },
  {
    number: "2",
    question: "Tôi thấy QR ở cửa hàng thì làm gì?",
    answer: "Quét QR để vào đúng trang của hộ kinh doanh và xem sản phẩm.",
  },
  {
    number: "3",
    question: "Tôi có thể tìm theo vị trí không?",
    answer: "Có. Hệ thống hỗ trợ xem điểm bán gần bạn.",
  },
  {
    number: "4",
    question: "Làm sao biết đúng hộ đang bán?",
    answer: "Mỗi trang hiển thị rõ tên hộ, sản phẩm và vị trí.",
  },
];

export default function Ntm_5() {
  return (
    <section id="ntm-cau-hoi-thuong-gap" className="ntm5-page" aria-label="Câu hỏi thường gặp của người tìm mua">
      <style>{css}</style>

      <main className="ntm5-main">
        <section className="ntm5-hero">
          <div className="ntm5-badge-row">
            <span>Page 6</span>
            <span>Màn 5</span>
          </div>

          <div className="ntm5-copy">
            <h1>Câu hỏi thường gặp</h1>
            <p>
              Những câu hỏi phổ biến của người tìm mua khi sử dụng <strong>dothithongminh1.vn.</strong>
            </p>
          </div>

          <div className="ntm5-city"><i /><i /><i /><i /></div>
          <div className="ntm5-cloud cloud-a" />
          <div className="ntm5-cloud cloud-b" />
          <div className="ntm5-chat-bubble">Tôi có thể<br />hỗ trợ gì cho bạn?</div>
          <BuyerIllustration />
          <RobotIllustration />
        </section>

        <section className="ntm5-faq-card" aria-label="Danh sách câu hỏi thường gặp">
          {ntm5Faqs.map((faq, index) => (
            <article className="ntm5-faq-item" key={faq.number}>
              <div className="ntm5-faq-number">{faq.number}</div>
              <div className="ntm5-faq-content">
                <h2>{faq.question}</h2>
                <p>{faq.answer}</p>
              </div>
              <ChevronDownIcon />
              {index < ntm5Faqs.length - 1 && <span className="ntm5-divider" />}
            </article>
          ))}
        </section>

        <a href="#ntm-huong-dan" className="ntm5-guide-btn">
          <BookIcon />
          <span>Xem hướng dẫn</span>
          <ChevronRightIcon />
        </a>

        <a href="https://dothithongminh1.vn/search/" className="ntm5-bottom-cta">
          <SearchIcon />
          <span>Tìm sản phẩm</span>
        </a>
      </main>
    </section>
  );
}

function BuyerIllustration() {
  return (
    <div className="ntm5-buyer" aria-hidden="true">
      <div className="hair" />
      <div className="face" />
      <div className="neck" />
      <div className="body" />
      <div className="strap" />
      <div className="arm" />
      <div className="hand" />
      <div className="phone" />
    </div>
  );
}

function RobotIllustration() {
  return (
    <div className="ntm5-robot" aria-hidden="true">
      <div className="antenna" />
      <div className="head"><span /><span /></div>
      <div className="ear left" />
      <div className="ear right" />
      <div className="neck" />
      <div className="body" />
    </div>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}
function SearchIcon() { return <Svg><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2.7"/><path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round"/></Svg>; }
function ChevronDownIcon() { return <Svg><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function ChevronRightIcon() { return <Svg><path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function BookIcon() { return <Svg><path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5v-12ZM13 4h5.5c.8 0 1.5.7 1.5 1.5v12c0 .8-.7 1.5-1.5 1.5H13V4Z" fill="currentColor"/><path d="M11 6v13M13 6v13" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"/></Svg>; }

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

.ntm5-page {
  position: relative;
  width: min(100%, 928px);
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background:
    radial-gradient(circle at 86% 2%, rgba(255,255,255,.95) 0 18%, transparent 36%),
    linear-gradient(180deg, #fbfdff 0%, #edf8ff 62%, #fbfdff 100%);
}
.ntm5-main {
  position: relative;
  min-height: 1518px;
  overflow: hidden;
}
.ntm5-hero {
  position: relative;
  min-height: 635px;
  overflow: hidden;
}
.ntm5-badge-row {
  position: relative;
  z-index: 12;
  display: flex;
  align-items: center;
  gap: 18px;
  padding-top: 42px;
  margin-left: 45px;
  margin-bottom: 38px;
}
.ntm5-badge-row span {
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
.ntm5-copy {
  position: relative;
  z-index: 12;
  width: 408px;
  margin-left: 45px;
}
.ntm5-copy h1 {
  margin: 0 0 36px;
  color: #050d4e;
  font-size: 76px;
  line-height: 1.04;
  letter-spacing: -3.4px;
  font-weight: 950;
}
.ntm5-copy p {
  margin: 0;
  color: #26374f;
  font-size: 25px;
  line-height: 1.45;
  font-weight: 500;
}
.ntm5-copy p strong {
  color: #126ee8;
  font-weight: 900;
}
.ntm5-city {
  position: absolute;
  right: 12px;
  top: 130px;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  opacity: .34;
}
.ntm5-city i {
  width: 45px;
  height: 112px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.3), rgba(85,154,219,.08));
}
.ntm5-city i:nth-child(2) { height: 178px; }
.ntm5-city i:nth-child(3) { height: 133px; }
.ntm5-city i:nth-child(4) { height: 155px; }
.ntm5-cloud,
.ntm5-cloud::before,
.ntm5-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.92);
}
.ntm5-cloud.cloud-a { right: 95px; top: 155px; width: 135px; height: 25px; }
.ntm5-cloud.cloud-a::before { width: 55px; height: 55px; left: 24px; top: -30px; }
.ntm5-cloud.cloud-a::after { width: 74px; height: 74px; left: 71px; top: -46px; }
.ntm5-cloud.cloud-b { right: 270px; top: 250px; width: 98px; height: 18px; opacity: .82; }
.ntm5-cloud.cloud-b::before { width: 40px; height: 40px; left: 17px; top: -18px; }
.ntm5-cloud.cloud-b::after { width: 52px; height: 52px; left: 43px; top: -31px; }
.ntm5-chat-bubble {
  position: absolute;
  z-index: 13;
  right: 205px;
  top: 220px;
  width: 204px;
  height: 104px;
  border-radius: 24px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #2f83fa, #0c63e4);
  box-shadow: 0 14px 24px rgba(16,105,228,.22);
  text-align: center;
  font-size: 22px;
  line-height: 1.35;
  font-weight: 850;
}
.ntm5-chat-bubble::after {
  content: "";
  position: absolute;
  left: 92px;
  bottom: -25px;
  border-width: 28px 18px 0 0;
  border-style: solid;
  border-color: #0c63e4 transparent transparent transparent;
}
.ntm5-buyer {
  position: absolute;
  z-index: 12;
  right: 200px;
  bottom: 0;
  width: 315px;
  height: 430px;
}
.ntm5-buyer .hair {
  position: absolute;
  left: 70px;
  top: 0;
  width: 155px;
  height: 190px;
  border-radius: 88px 88px 52px 70px;
  background: #211928;
  transform: rotate(-12deg);
}
.ntm5-buyer .face {
  position: absolute;
  left: 108px;
  top: 82px;
  width: 88px;
  height: 116px;
  border-radius: 47%;
  background: #ffbd8c;
}
.ntm5-buyer .neck {
  position: absolute;
  left: 137px;
  top: 188px;
  width: 45px;
  height: 54px;
  background: #f4a978;
}
.ntm5-buyer .body {
  position: absolute;
  left: 63px;
  bottom: 0;
  width: 180px;
  height: 210px;
  border-radius: 88px 88px 0 0;
  background: linear-gradient(180deg, #246cc2, #0b57b2);
}
.ntm5-buyer .strap {
  position: absolute;
  left: 28px;
  bottom: 0;
  width: 64px;
  height: 214px;
  border-radius: 999px;
  border: 11px solid #dac2a5;
  border-right: 0;
}
.ntm5-buyer .arm {
  position: absolute;
  left: 150px;
  top: 270px;
  width: 82px;
  height: 30px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(68deg);
}
.ntm5-buyer .hand {
  position: absolute;
  left: 183px;
  top: 318px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #ffbd8c;
}
.ntm5-buyer .phone {
  position: absolute;
  left: 200px;
  top: 275px;
  width: 36px;
  height: 68px;
  border-radius: 8px;
  background: #13284d;
  transform: rotate(-14deg);
}
.ntm5-robot {
  position: absolute;
  z-index: 11;
  right: 24px;
  bottom: 0;
  width: 215px;
  height: 300px;
}
.ntm5-robot .antenna {
  position: absolute;
  left: 100px;
  top: 0;
  width: 8px;
  height: 48px;
  border-radius: 999px;
  background: #126ee8;
}
.ntm5-robot .antenna::before {
  content: "";
  position: absolute;
  left: -10px;
  top: -10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #126ee8;
}
.ntm5-robot .head {
  position: absolute;
  left: 20px;
  top: 42px;
  width: 175px;
  height: 120px;
  border-radius: 60px;
  background: #f7fbff;
  border: 8px solid #a7d2ff;
  box-shadow: 0 12px 22px rgba(20,100,190,.16);
}
.ntm5-robot .head::before {
  content: "";
  position: absolute;
  left: 27px;
  right: 27px;
  top: 24px;
  bottom: 24px;
  border-radius: 34px;
  background: #092d79;
}
.ntm5-robot .head span {
  position: absolute;
  z-index: 2;
  top: 55px;
  width: 17px;
  height: 26px;
  border-radius: 50%;
  background: #8ad7ff;
}
.ntm5-robot .head span:first-child { left: 61px; }
.ntm5-robot .head span:last-child { right: 61px; }
.ntm5-robot .ear {
  position: absolute;
  top: 78px;
  width: 42px;
  height: 56px;
  border-radius: 18px;
  background: #126ee8;
}
.ntm5-robot .ear.left { left: 0; }
.ntm5-robot .ear.right { right: 0; }
.ntm5-robot .neck {
  position: absolute;
  left: 84px;
  top: 152px;
  width: 48px;
  height: 38px;
  background: #cde8ff;
}
.ntm5-robot .body {
  position: absolute;
  left: 43px;
  bottom: 0;
  width: 130px;
  height: 132px;
  border-radius: 55px 55px 0 0;
  background: linear-gradient(180deg, #ffffff, #dcefff);
}
.ntm5-faq-card {
  position: relative;
  z-index: 20;
  width: calc(100% - 74px);
  margin: -6px auto 24px;
  border-radius: 20px;
  background: rgba(255,255,255,.98);
  box-shadow: 0 16px 32px rgba(31,101,178,.12);
  border: 1px solid #e2eef9;
  overflow: hidden;
  padding: 10px 26px;
}
.ntm5-faq-item {
  position: relative;
  min-height: 163px;
  display: grid;
  grid-template-columns: 78px 1fr 44px;
  align-items: start;
  gap: 22px;
  padding: 30px 0 22px;
}
.ntm5-faq-number {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #297df2, #075bd2);
  font-size: 30px;
  line-height: 1;
  font-weight: 950;
}
.ntm5-faq-content h2 {
  margin: 0 0 22px;
  color: #07185a;
  font-size: 26px;
  line-height: 1.18;
  font-weight: 950;
}
.ntm5-faq-content p {
  margin: 0;
  color: #4c5a76;
  font-size: 23px;
  line-height: 1.42;
  font-weight: 500;
}
.ntm5-faq-item > svg {
  justify-self: end;
  margin-top: 10px;
  width: 39px;
  height: 39px;
  color: #126ee8;
}
.ntm5-divider {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: #d8e6f4;
}
.ntm5-guide-btn {
  position: relative;
  z-index: 21;
  width: calc(100% - 74px);
  height: 100px;
  margin: 0 auto 28px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 88px 1fr 46px;
  align-items: center;
  gap: 22px;
  padding: 0 30px;
  color: #126ee8;
  background: rgba(255,255,255,.72);
  border: 2px solid #9fc8fb;
  box-shadow: 0 10px 23px rgba(31,101,178,.08);
  font-size: 26px;
  line-height: 1;
  font-weight: 950;
}
.ntm5-guide-btn svg:first-child {
  width: 66px;
  height: 66px;
  color: #126ee8;
}
.ntm5-guide-btn svg:last-child {
  width: 36px;
  height: 36px;
  justify-self: end;
}
.ntm5-bottom-cta {
  position: relative;
  z-index: 22;
  width: calc(100% - 60px);
  height: 82px;
  margin: 0 auto 31px;
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
.ntm5-bottom-cta svg {
  width: 45px;
  height: 45px;
}
.ntm5-guide-btn:hover,
.ntm5-bottom-cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}

@media (max-width: 820px) {
  .ntm5-main { min-height: 1410px; }
  .ntm5-hero { transform: scale(.9); transform-origin: top center; width: 111%; left: -5.5%; min-height: 595px; }
  .ntm5-faq-card,
  .ntm5-guide-btn { width: calc(100% - 56px); }
  .ntm5-faq-content h2 { font-size: 23px; }
  .ntm5-faq-content p { font-size: 20px; }
}

@media (max-width: 520px) {
  .ntm5-main { min-height: 1250px; }
  .ntm5-hero { transform: none; width: 100%; left: 0; min-height: 520px; }
  .ntm5-badge-row { padding-top: 28px; margin-left: 18px; gap: 12px; }
  .ntm5-badge-row span { width: 82px; height: 36px; font-size: 16px; }
  .ntm5-copy { width: calc(100% - 34px); margin: 0 auto; }
  .ntm5-copy h1 { font-size: 44px; letter-spacing: -1.8px; margin-bottom: 20px; }
  .ntm5-copy p { font-size: 17px; width: 52%; }
  .ntm5-buyer { transform: scale(.65); transform-origin: bottom right; right: 80px; }
  .ntm5-robot { transform: scale(.65); transform-origin: bottom right; right: -15px; }
  .ntm5-chat-bubble { transform: scale(.7); transform-origin: top right; right: 38px; top: 180px; }
  .ntm5-faq-card { width: calc(100% - 34px); padding: 4px 16px; }
  .ntm5-faq-item { min-height: auto; grid-template-columns: 44px 1fr 30px; gap: 12px; padding: 20px 0; }
  .ntm5-faq-number { width: 40px; height: 40px; font-size: 21px; }
  .ntm5-faq-content h2 { font-size: 17px; margin-bottom: 8px; }
  .ntm5-faq-content p { font-size: 14px; }
  .ntm5-faq-item > svg { width: 24px; height: 24px; }
  .ntm5-guide-btn { width: calc(100% - 34px); height: 72px; grid-template-columns: 52px 1fr 28px; font-size: 19px; padding: 0 18px; }
  .ntm5-guide-btn svg:first-child { width: 44px; height: 44px; }
  .ntm5-bottom-cta { width: calc(100% - 34px); height: 68px; font-size: 24px; }
  .ntm5-bottom-cta svg { width: 34px; height: 34px; }
}
`;
