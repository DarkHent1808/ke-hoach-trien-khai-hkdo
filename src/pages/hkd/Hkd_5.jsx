import React, { useState } from "react";

const faqItems = [
  {
    question: "Tôi không đi buổi ra quân có làm được không?",
    answer: "Có. Anh/chị vẫn có thể tự thao tác theo hướng dẫn trên HKDO.vn hoặc nhận hỗ trợ qua các kênh của chương trình.",
    defaultOpen: false,
  },
  {
    question: "Tôi chưa nhận QR thì làm gì?",
    answer: "Anh/chị vẫn có thể được hướng dẫn và nhận QR qua Tổ CNSCĐ hoặc kênh hỗ trợ của HKDO.",
    defaultOpen: true,
  },
  {
    question: "Tôi dán QR ở đâu là tốt nhất?",
    answer: "Nên dán QR tại vị trí dễ thấy như quầy thanh toán, cửa ra vào, xe giao hàng hoặc điểm giao dịch với khách.",
    defaultOpen: false,
  },
  {
    question: "Tôi cần hỗ trợ thì liên hệ ở đâu?",
    answer: "Anh/chị có thể liên hệ Tổ CNSCĐ tại địa bàn hoặc các kênh hỗ trợ HKDO như video hướng dẫn, chat hỗ trợ, Zalo OA và trợ lý AI.",
    defaultOpen: false,
  },
];

export default function HKDFAQPage() {
  const [openIndexes, setOpenIndexes] = useState(() =>
    faqItems.reduce((result, item, index) => {
      if (item.defaultOpen) result.push(index);
      return result;
    }, [])
  );

  const toggleFAQ = (index) => {
    setOpenIndexes((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  return (
    <section id="hkd-cau-hoi-thuong-gap" className="hkd-faq-page" aria-label="Câu hỏi thường gặp của hộ kinh doanh">
      <style>{css}</style>

      <section className="hkd-faq-heading">
        <div className="hkd-faq-pill">MÀN 5</div>
        <h1>Câu hỏi thường gặp</h1>
        <p>Giải đáp nhanh những thắc mắc của hộ kinh doanh trong quá trình bắt đầu sử dụng HKDO.</p>
      </section>

      <FAQIllustration />

      <section className="hkd-faq-list" aria-label="Danh sách câu hỏi thường gặp">
        {faqItems.map((item, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <article className={`hkd-faq-card ${isOpen ? "is-open" : ""}`} key={item.question}>
              <button type="button" className="hkd-faq-question" onClick={() => toggleFAQ(index)}>
                <h2>{item.question}</h2>
                <div className="hkd-faq-toggle">{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</div>
              </button>
              {isOpen && (
                <div className="hkd-faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </article>
          );
        })}
      </section>

      <a href="#hkd-san-sang-kinh-doanh-so" className="hkd-faq-cta">
        <RocketIcon />
        <span>Bắt đầu ngay</span>
      </a>

      <footer className="hkd-faq-footer-brand">
        <div className="hkd-faq-footer-logo">HKDO</div>
        <span>HKDO - Nền tảng số cho hộ kinh doanh</span>
      </footer>
    </section>
  );
}

function FAQIllustration() {
  return (
    <section className="hkd-faq-art" aria-hidden="true">
      <div className="hkd-faq-city"><i /><i /><i /></div>
      <div className="hkd-faq-cloud" />
      <div className="hkd-faq-shop">
        <div className="hkd-faq-shop-sign">CỬA HÀNG<br />HỘ KINH DOANH</div>
        <div className="hkd-faq-awning" />
        <div className="hkd-faq-door-sign">MỞ CỬA</div>
        <div className="hkd-faq-shop-window">{Array.from({ length: 18 }).map((_, index) => <i key={index} />)}</div>
      </div>

      <div className="hkd-faq-owner">
        <div className="hair" />
        <div className="face" />
        <div className="shirt" />
        <div className="apron" />
        <div className="arm-left" />
        <div className="arm-right" />
      </div>

      <div className="hkd-faq-question-mark">?</div>
      <div className="hkd-faq-support-board">
        <div className="board-title">KÊNH HỖ TRỢ HKDO</div>
        <div className="support-grid">
          <div><PlayIcon /><span>Video<br />hướng dẫn</span></div>
          <div><ChatIcon /><span>Chat hỗ trợ<br />tức thì</span></div>
          <div><strong>Zalo</strong><span>Zalo OA</span></div>
          <div><BotIcon /><span>Trợ lý AI</span></div>
        </div>
      </div>
      <div className="hkd-faq-plant plant-left" />
      <div className="hkd-faq-plant plant-right" />
      <div className="hkd-faq-cup" />
    </section>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ChevronDownIcon() { return <Svg><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function ChevronUpIcon() { return <Svg><path d="m6 15 6-6 6 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function RocketIcon() { return <Svg><path d="M13 4c3.2 1 5.4 3.2 6.4 6.4l-5.6 5.6-4.4-4.4L13 4Z" fill="currentColor"/><path d="M8.8 12.2 5 13l-2 4 4-.8M11.8 15.2 11 19l-4 2 .8-4" fill="currentColor" opacity=".85"/><circle cx="15" cy="9" r="1.8" fill="#fff"/></Svg>; }
function PlayIcon() { return <Svg><rect x="3" y="5" width="18" height="14" rx="4" fill="currentColor"/><path d="M10 8.5 16 12l-6 3.5v-7Z" fill="#fff"/></Svg>; }
function ChatIcon() { return <Svg><path d="M4 5h16v11H9l-5 4V5Z" fill="currentColor"/><circle cx="9" cy="10.5" r="1.3" fill="#fff"/><circle cx="12" cy="10.5" r="1.3" fill="#fff"/><circle cx="15" cy="10.5" r="1.3" fill="#fff"/></Svg>; }
function BotIcon() { return <Svg><rect x="5" y="7" width="14" height="11" rx="5" fill="currentColor"/><path d="M12 4v3" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/><circle cx="9.5" cy="12" r="1.3" fill="#fff"/><circle cx="14.5" cy="12" r="1.3" fill="#fff"/><path d="M9 16h6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></Svg>; }

const css = `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; background: #dfeefa; color: #10175c; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }
svg { width: 1em; height: 1em; display: block; }

.hkd-faq-page {
  position: relative;
  width: 100%;
  min-height: 1518px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 2%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%), linear-gradient(180deg, #fbfdff 0%, #eef8ff 55%, #fbfdff 100%);
}
.hkd-faq-heading { position: relative; z-index: 8; width: 830px; margin: 0 auto; padding-top: 36px; text-align: center; }
.hkd-faq-pill { width: 127px; height: 44px; margin: 0 auto 22px; border-radius: 999px; display: grid; place-items: center; color: #075bd2; background: #fff; border: 2px solid #9fc8fb; box-shadow: 0 8px 17px rgba(31,101,178,.08); font-size: 24px; line-height: 1; font-weight: 950; }
.hkd-faq-heading h1 { margin: 0 auto 19px; color: #075bd2; font-size: 69px; line-height: 1.08; font-weight: 950; letter-spacing: -3.2px; }
.hkd-faq-heading p { width: 690px; margin: 0 auto; color: #1d2742; font-size: 24px; line-height: 1.36; font-weight: 500; }
.hkd-faq-art { position: relative; z-index: 4; height: 443px; margin-top: 14px; overflow: hidden; }
.hkd-faq-art::before { content: ""; position: absolute; inset: 120px -22px 0; background: linear-gradient(180deg, rgba(206,238,255,.7), rgba(255,255,255,.15)); border-radius: 50% 50% 0 0; }
.hkd-faq-city { position: absolute; right: 100px; bottom: 88px; display: flex; align-items: flex-end; gap: 10px; opacity: .42; }
.hkd-faq-city i { width: 36px; height: 83px; border-radius: 9px 9px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.22), rgba(85,154,219,.06)); }
.hkd-faq-city i:nth-child(2) { height: 124px; }
.hkd-faq-city i:nth-child(3) { height: 96px; }
.hkd-faq-cloud, .hkd-faq-cloud::before, .hkd-faq-cloud::after { position: absolute; content: ""; border-radius: 999px; background: rgba(255,255,255,.94); }
.hkd-faq-cloud { right: 74px; top: 94px; width: 110px; height: 22px; }
.hkd-faq-cloud::before { width: 46px; height: 46px; left: 20px; top: -24px; }
.hkd-faq-cloud::after { width: 65px; height: 65px; left: 57px; top: -40px; }
.hkd-faq-shop { position: absolute; z-index: 4; left: 48px; bottom: 28px; width: 303px; height: 341px; border-radius: 11px 11px 0 0; background: linear-gradient(180deg, #9bd1f7, #4e89be 30%, #254e7d 100%); box-shadow: 0 18px 30px rgba(24,74,139,.22); }
.hkd-faq-shop-sign { position: absolute; left: 7px; right: 7px; top: -1px; height: 75px; border-radius: 11px; display: grid; place-items: center; color: #fff; background: linear-gradient(180deg, #2c6fbd, #1d559d); border: 5px solid rgba(255,255,255,.18); font-size: 21px; line-height: 1.08; font-weight: 950; text-align: center; box-shadow: 0 10px 20px rgba(0,50,120,.22); }
.hkd-faq-awning { position: absolute; left: 0; right: 0; top: 75px; height: 65px; background: repeating-linear-gradient(90deg, #11458d 0 39px, #315f9e 39px 78px); border-radius: 0 0 25px 25px; }
.hkd-faq-awning::after { content: ""; position: absolute; left: 0; right: 0; bottom: -20px; height: 34px; background: repeating-radial-gradient(circle at 39px 0, #315f9e 0 31px, #11458d 32px 62px); clip-path: inset(0 0 0 0 round 0 0 24px 24px); }
.hkd-faq-door-sign { position: absolute; z-index: 3; left: 79px; top: 193px; width: 88px; height: 52px; border-radius: 7px; display: grid; place-items: center; color: #fff; background: #1164c7; border: 3px solid #b3d9ff; font-size: 15px; font-weight: 950; box-shadow: 0 10px 18px rgba(0,40,110,.25); }
.hkd-faq-door-sign::before { content: ""; position: absolute; left: 50%; top: -28px; width: 2px; height: 28px; background: #93b7dd; transform: translateX(-50%); }
.hkd-faq-shop-window { position: absolute; left: 27px; right: 27px; bottom: 38px; height: 145px; display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; padding: 17px; border-radius: 12px; background: rgba(27,36,49,.48); }
.hkd-faq-shop-window i { border-radius: 4px 4px 12px 12px; background: linear-gradient(180deg, #ffcd74, #8d6331); }
.hkd-faq-owner { position: absolute; z-index: 9; left: 253px; bottom: 27px; width: 260px; height: 384px; }
.hkd-faq-owner .hair { position: absolute; left: 65px; top: 0; width: 115px; height: 81px; border-radius: 72px 72px 26px 26px; background: #16191c; transform: rotate(-7deg); }
.hkd-faq-owner .face { position: absolute; left: 88px; top: 65px; width: 78px; height: 99px; border-radius: 47%; background: #ffbd8c; }
.hkd-faq-owner .shirt { position: absolute; left: 31px; top: 175px; width: 190px; height: 210px; border-radius: 75px 75px 0 0; background: #fff; }
.hkd-faq-owner .apron { position: absolute; left: 64px; top: 195px; width: 124px; height: 200px; border-radius: 50px 50px 0 0; background: #102e5a; }
.hkd-faq-owner .arm-left { position: absolute; left: -3px; top: 231px; width: 138px; height: 31px; border-radius: 999px; background: #ffbd8c; transform: rotate(-2deg); }
.hkd-faq-owner .arm-right { position: absolute; right: 36px; top: 177px; width: 112px; height: 31px; border-radius: 999px; background: #ffbd8c; transform: rotate(-58deg); }
.hkd-faq-question-mark { position: absolute; z-index: 11; left: 508px; top: 22px; color: #2e80e6; font-size: 77px; line-height: 1; font-weight: 950; }
.hkd-faq-support-board { position: absolute; z-index: 9; right: 63px; top: 32px; width: 304px; height: 330px; border-radius: 14px; background: #fff; border: 4px solid #4d97ee; box-shadow: 0 18px 31px rgba(13,89,188,.2); transform: rotate(1.5deg); }
.hkd-faq-support-board .board-title { height: 62px; border-radius: 9px 9px 0 0; display: grid; place-items: center; color: #fff; background: #075bd2; font-size: 24px; font-weight: 950; }
.support-grid { padding: 20px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px 17px; }
.support-grid div { height: 107px; border-radius: 12px; display: grid; place-items: center; align-content: center; gap: 10px; color: #1d2c58; background: #fff; box-shadow: 0 8px 18px rgba(31,101,178,.12); border: 1px solid #d7e8f8; font-size: 17px; line-height: 1.15; font-weight: 650; text-align: center; }
.support-grid svg { width: 45px; height: 45px; color: #1684eb; }
.support-grid strong { width: 58px; height: 58px; border-radius: 50%; display: grid; place-items: center; color: #1684eb; border: 4px solid #1684eb; font-size: 21px; }
.hkd-faq-plant { position: absolute; z-index: 12; width: 70px; height: 83px; bottom: 28px; }
.hkd-faq-plant.plant-left { left: 32px; }
.hkd-faq-plant.plant-right { right: 19px; }
.hkd-faq-plant::before, .hkd-faq-plant::after { content: ""; position: absolute; bottom: 0; width: 39px; height: 73px; border-radius: 40px 40px 0 0; background: linear-gradient(180deg, #92d88f, #3ea869); }
.hkd-faq-plant::before { left: 2px; transform: rotate(-27deg); }
.hkd-faq-plant::after { right: 2px; transform: rotate(26deg); }
.hkd-faq-cup { position: absolute; z-index: 12; left: 116px; bottom: 23px; width: 48px; height: 64px; border-radius: 8px 8px 18px 18px; background: linear-gradient(180deg, #222, #f0d4ad 14%, #fff 18%); }
.hkd-faq-cup::before { content: ""; position: absolute; left: -3px; right: -3px; top: 0; height: 15px; border-radius: 999px; background: #222; }
.hkd-faq-list { position: relative; z-index: 16; width: calc(100% - 96px); margin: 12px auto 0; display: grid; gap: 20px; }
.hkd-faq-card { border-radius: 15px; background: rgba(255,255,255,.97); box-shadow: 0 13px 27px rgba(31,101,178,.11); border: 1px solid #d9e7f5; overflow: hidden; }
.hkd-faq-question { width: 100%; min-height: 92px; padding: 0 28px 0 43px; border: 0; display: grid; grid-template-columns: 1fr 45px; align-items: center; color: #075bd2; background: transparent; cursor: pointer; text-align: left; }
.hkd-faq-question h2 { margin: 0; color: #075bd2; font-size: 30px; line-height: 1.2; font-weight: 920; letter-spacing: -.4px; }
.hkd-faq-toggle { color: #075bd2; font-size: 38px; justify-self: end; }
.hkd-faq-answer { margin: 0 17px 18px; border-radius: 10px; background: #f1f7ff; padding: 28px 40px; }
.hkd-faq-answer p { margin: 0; color: #394052; font-size: 25px; line-height: 1.35; font-weight: 500; }
.hkd-faq-cta { position: relative; z-index: 18; width: calc(100% - 50px); height: 89px; margin: 28px auto 18px; border-radius: 13px; display: grid; grid-template-columns: 300px 1fr 270px; align-items: center; color: #fff; background: linear-gradient(180deg, #086feb, #0055cb); box-shadow: 0 12px 22px rgba(0,76,180,.22); font-size: 33px; line-height: 1; font-weight: 950; transition: transform .18s ease, filter .18s ease; }
.hkd-faq-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.hkd-faq-cta svg { width: 57px; height: 57px; justify-self: end; margin-right: 23px; }
.hkd-faq-cta span { justify-self: start; }
.hkd-faq-footer-brand { height: 58px; display: flex; align-items: center; justify-content: center; gap: 14px; color: #242b40; }
.hkd-faq-footer-logo { width: 54px; height: 54px; border-radius: 9px; display: grid; place-items: center; color: #fff; background: #075bd2; font-size: 16px; font-weight: 950; }
.hkd-faq-footer-brand span { font-size: 21px; line-height: 1; font-weight: 650; }

@media (max-width: 820px) {
  .hkd-faq-page { min-height: 1370px; }
  .hkd-faq-heading { width: calc(100% - 40px); }
  .hkd-faq-heading h1 { font-size: clamp(48px, 10vw, 69px); }
  .hkd-faq-heading p { width: min(100%, 690px); font-size: 22px; }
  .hkd-faq-art { transform: scale(.88); transform-origin: top center; width: 114%; left: -7%; }
  .hkd-faq-list { width: calc(100% - 56px); }
  .hkd-faq-cta { grid-template-columns: 1fr 1fr 1fr; }
}

@media (max-width: 520px) {
  .hkd-faq-page { min-height: 1240px; }
  .hkd-faq-heading { padding-top: 28px; }
  .hkd-faq-pill { width: 105px; height: 38px; font-size: 20px; }
  .hkd-faq-heading h1 { font-size: 38px; }
  .hkd-faq-heading p { font-size: 17px; }
  .hkd-faq-art { transform: scale(.66); width: 150%; left: -25%; height: 340px; }
  .hkd-faq-list { width: calc(100% - 34px); gap: 12px; }
  .hkd-faq-question { min-height: 74px; padding: 0 14px 0 18px; }
  .hkd-faq-question h2 { font-size: 18px; }
  .hkd-faq-toggle { font-size: 26px; }
  .hkd-faq-answer { margin: 0 10px 12px; padding: 17px 18px; }
  .hkd-faq-answer p { font-size: 15px; }
  .hkd-faq-cta { width: calc(100% - 34px); height: 70px; grid-template-columns: 74px 1fr; font-size: 24px; }
  .hkd-faq-cta svg { justify-self: center; margin: 0; width: 39px; height: 39px; }
  .hkd-faq-footer-brand span { font-size: 15px; }
}
`;
