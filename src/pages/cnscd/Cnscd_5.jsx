import React, { useState } from "react";

const faqItems = [
  {
    tone: "blue",
    icon: <QrIcon />,
    question: "Tổ có dán QR thay hộ không?",
    answer: "Tổ chỉ hướng dẫn và nhắc việc; hộ kinh doanh tự dán QR tại điểm bán để bảo đảm đúng vai trò và trách nhiệm.",
    defaultOpen: false,
  },
  {
    tone: "green",
    icon: <PhoneQrIcon />,
    question: "Hộ online nhận QR thế nào?",
    answer: "Tổ chỉ bàn giao và nhắc việc; hộ tự dán QR tại điểm bán.",
    defaultOpen: true,
  },
  {
    tone: "orange",
    icon: <GearIcon />,
    question: "Gặp lỗi kỹ thuật báo ai?",
    answer: "Ghi nhận mô tả lỗi, ảnh chụp màn hình nếu có và chuyển về đầu mối hỗ trợ kỹ thuật của chương trình.",
    defaultOpen: false,
  },
  {
    tone: "purple",
    icon: <MegaphoneIcon />,
    question: "Nhắc hộ theo cách nào cho hiệu quả?",
    answer: "Nhắc ngắn gọn theo đúng trạng thái của từng hộ, ưu tiên hộ đã nhận QR nhưng chưa dán và hộ cần hỗ trợ lại.",
    defaultOpen: false,
  },
];

export default function CnscdFAQPage() {
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
    <section className="cnscd-faq-page" aria-label="Câu hỏi thường gặp của Tổ CNSCĐ">
      <style>{css}</style>

      <section className="cnscd-faq-hero">
        <div className="cnscd-faq-copy">
          <div className="cnscd-faq-pill">MÀN 5</div>
          <h1>Câu hỏi thường gặp</h1>
          <p>Giải đáp nhanh những thắc mắc của Tổ CNSCĐ trong quá trình hỗ trợ hộ kinh doanh.</p>
        </div>

        <FAQIllustration />
      </section>

      <section className="cnscd-faq-list" aria-label="Danh sách câu hỏi thường gặp">
        {faqItems.map((item, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <article className={`cnscd-faq-card ${item.tone} ${isOpen ? "is-open" : ""}`} key={item.question}>
              <button type="button" className="cnscd-faq-question" onClick={() => toggleFAQ(index)}>
                <div className="cnscd-faq-icon">{item.icon}</div>
                <div className="cnscd-faq-content">
                  <h2>{item.question}</h2>
                  {isOpen && <p>{item.answer}</p>}
                </div>
                <div className="cnscd-faq-toggle">{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</div>
              </button>
            </article>
          );
        })}
      </section>

      <a href="#cnscd-san-sang-ho-tro" className="cnscd-faq-cta">
        <ClipboardCheckIcon />
        <span>Báo cáo trạng thái hộ</span>
      </a>
    </section>
  );
}

function FAQIllustration() {
  return (
    <div className="cnscd-faq-art" aria-hidden="true">
      <div className="question-bubble">?</div>
      <div className="idea-bulb"><span /></div>
      <div className="chat-bubble">•••</div>
      <div className="desk" />
      <div className="plant" />
      <div className="laptop"><i /></div>
      <div className="faq-person">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="logo">TỔ<br />CNSCĐ</div>
        <div className="arm-left" />
        <div className="arm-right" />
      </div>
    </div>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ChevronDownIcon() { return <Svg><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function ChevronUpIcon() { return <Svg><path d="m6 15 6-6 6 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function QrIcon() { return <Svg><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="2.2"/><path d="M14 14h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function PhoneQrIcon() { return <Svg><rect x="7" y="2" width="10" height="20" rx="2.3" stroke="currentColor" strokeWidth="2.2"/><path d="M9 7h2v2H9V7Zm4 0h2v2h-2V7ZM9 11h2v2H9v-2Zm4 2h2v2h-2v-2Z" fill="currentColor"/></Svg>; }
function GearIcon() { return <Svg><circle cx="12" cy="12" r="3.5" fill="currentColor"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></Svg>; }
function MegaphoneIcon() { return <Svg><path d="M4 14h3l9 4V6l-9 4H4v4Z" fill="currentColor"/><path d="M19 9c1 1.4 1 4.6 0 6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/></Svg>; }
function ClipboardCheckIcon() { return <Svg><path d="M8 5h8M9 3h6v4H9V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6h12v15H6V6Z" stroke="currentColor" strokeWidth="2.3"/><path d="m9 13 2 2 4-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }

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
button { font: inherit; }
svg { width: 1em; height: 1em; display: block; }

.cnscd-faq-page {
  position: relative;
  width: 100%;
  min-height: 1378px;
  overflow: hidden;
  background:
    radial-gradient(circle at 68% 19%, rgba(255,255,255,.94) 0 17%, transparent 42%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 56%, #f9fdff 100%);
}
.cnscd-faq-hero {
  position: relative;
  min-height: 638px;
  overflow: hidden;
  padding: 50px 38px 0;
}
.cnscd-faq-hero::before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 605px;
  height: 390px;
  border-radius: 60% 0 0 0;
  background: linear-gradient(180deg, rgba(218,240,255,.84), rgba(218,240,255,.2));
}
.cnscd-faq-copy {
  position: relative;
  z-index: 7;
  width: 460px;
}
.cnscd-faq-pill {
  width: 174px;
  height: 70px;
  margin-bottom: 45px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #ddecff;
  border: 1px solid #b9d7fa;
  font-size: 31px;
  line-height: 1;
  font-weight: 950;
}
.cnscd-faq-copy h1 {
  margin: 0 0 34px;
  color: #071154;
  font-size: 74px;
  line-height: 1.08;
  font-weight: 950;
  letter-spacing: -3.2px;
}
.cnscd-faq-copy p {
  margin: 0;
  color: #333846;
  font-size: 30px;
  line-height: 1.55;
  font-weight: 500;
}
.cnscd-faq-art {
  position: absolute;
  right: 21px;
  bottom: 0;
  width: 468px;
  height: 552px;
  z-index: 4;
}
.question-bubble,
.chat-bubble {
  position: absolute;
  z-index: 8;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #4fa2ff, #126ee6);
  font-weight: 950;
  box-shadow: 0 11px 18px rgba(19,104,220,.18);
}
.question-bubble {
  left: 28px;
  top: 30px;
  width: 93px;
  height: 85px;
  border-radius: 50% 50% 50% 18px;
  font-size: 58px;
}
.chat-bubble {
  right: 0;
  top: 209px;
  width: 78px;
  height: 58px;
  border-radius: 18px 18px 4px 18px;
  font-size: 27px;
}
.idea-bulb {
  position: absolute;
  right: 42px;
  top: 44px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #ffbd20;
  box-shadow: 0 0 0 15px rgba(255,189,32,.11);
}
.idea-bulb::before {
  content: "";
  position: absolute;
  left: 24px;
  bottom: -17px;
  width: 23px;
  height: 25px;
  border-radius: 6px;
  background: #657185;
}
.idea-bulb span,
.idea-bulb span::before,
.idea-bulb span::after {
  content: "";
  position: absolute;
  border: 3px solid rgba(255,255,255,.9);
  border-top: 0;
  border-radius: 0 0 20px 20px;
}
.idea-bulb span { left: 25px; top: 28px; width: 21px; height: 23px; }
.idea-bulb span::before { left: -11px; top: -5px; width: 14px; height: 18px; transform: rotate(25deg); }
.idea-bulb span::after { right: -11px; top: -5px; width: 14px; height: 18px; transform: rotate(-25deg); }
.desk {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 106px;
  border-radius: 18px 18px 0 0;
  background: linear-gradient(180deg, #efc48b, #ce9660);
}
.plant {
  position: absolute;
  right: 0;
  bottom: 83px;
  width: 72px;
  height: 118px;
}
.plant::before,
.plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 43px;
  height: 90px;
  border-radius: 40px 40px 0 0;
  background: linear-gradient(180deg, #9cd99d, #3ba66c);
}
.plant::before { left: 0; transform: rotate(-28deg); }
.plant::after { right: 0; transform: rotate(27deg); }
.laptop {
  position: absolute;
  z-index: 9;
  left: 43px;
  bottom: 61px;
  width: 236px;
  height: 148px;
  border-radius: 11px;
  background: linear-gradient(135deg, #d7dde2, #9ca9b5);
  box-shadow: 0 13px 22px rgba(0,36,88,.2);
  transform: skewX(6deg);
}
.laptop i {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: rgba(255,255,255,.75);
  transform: translate(-50%, -50%);
}
.faq-person {
  position: absolute;
  z-index: 7;
  right: 68px;
  bottom: 99px;
  width: 250px;
  height: 395px;
}
.faq-person .hair {
  position: absolute;
  left: 73px;
  top: 0;
  width: 129px;
  height: 137px;
  border-radius: 85px 85px 32px 32px;
  background: #261c1c;
}
.faq-person .face {
  position: absolute;
  left: 91px;
  top: 70px;
  width: 76px;
  height: 93px;
  border-radius: 48%;
  background: #ffbd8c;
}
.faq-person .body {
  position: absolute;
  left: 33px;
  top: 176px;
  width: 174px;
  height: 230px;
  border-radius: 72px 72px 0 0;
  background: linear-gradient(180deg, #0d7be4, #0753be);
}
.faq-person .logo {
  position: absolute;
  right: 49px;
  top: 244px;
  color: #fff;
  font-size: 15px;
  line-height: 1.1;
  font-weight: 950;
  text-align: center;
}
.faq-person .arm-left {
  position: absolute;
  left: -7px;
  top: 172px;
  width: 107px;
  height: 30px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(-82deg);
}
.faq-person .arm-left::after {
  content: "";
  position: absolute;
  left: -8px;
  top: -3px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffbd8c;
}
.faq-person .arm-right {
  position: absolute;
  right: 4px;
  top: 295px;
  width: 95px;
  height: 29px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(-4deg);
}

.cnscd-faq-list {
  position: relative;
  z-index: 10;
  width: calc(100% - 46px);
  margin: -10px auto 0;
  display: grid;
  gap: 20px;
}
.cnscd-faq-card {
  border-radius: 16px;
  background: rgba(255,255,255,.97);
  border: 1px solid #d4e5f7;
  box-shadow: 0 12px 26px rgba(31,101,178,.12);
  overflow: hidden;
}
.cnscd-faq-card.green.is-open {
  background: linear-gradient(180deg, #effdf2 0 48%, #fff 48% 100%);
  border-color: #bfe8c9;
}
.cnscd-faq-question {
  width: 100%;
  min-height: 114px;
  padding: 25px 33px;
  border: 0;
  display: grid;
  grid-template-columns: 114px 1fr 48px;
  align-items: center;
  gap: 27px;
  text-align: left;
  color: #10175c;
  background: transparent;
  cursor: pointer;
}
.cnscd-faq-icon {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 57px;
  justify-self: center;
}
.cnscd-faq-card.blue .cnscd-faq-icon { color: #075bd2; background: #e8f4ff; }
.cnscd-faq-card.green .cnscd-faq-icon { color: #15913e; background: #dff8e5; }
.cnscd-faq-card.orange .cnscd-faq-icon { color: #ff7a1a; background: #ffe7d4; }
.cnscd-faq-card.purple .cnscd-faq-icon { color: #754bdc; background: #eee4ff; }
.cnscd-faq-content h2 {
  margin: 0;
  color: #10175c;
  font-size: 31px;
  line-height: 1.2;
  font-weight: 920;
  letter-spacing: -.5px;
}
.cnscd-faq-content p {
  margin: 31px 0 0;
  color: #333;
  font-size: 25px;
  line-height: 1.35;
  font-weight: 500;
}
.cnscd-faq-toggle {
  color: #0b1a4f;
  font-size: 38px;
  justify-self: end;
}
.cnscd-faq-cta {
  position: relative;
  z-index: 12;
  width: calc(100% - 46px);
  height: 101px;
  margin: 24px auto 22px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  padding: 0 88px 0 153px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 13px 24px rgba(0,76,180,.27);
  transition: transform .18s ease, filter .18s ease;
}
.cnscd-faq-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.cnscd-faq-cta svg { width: 60px; height: 60px; justify-self: center; }
.cnscd-faq-cta span {
  text-align: center;
  font-size: 40px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -.75px;
}

@media (max-width: 820px) {
  .cnscd-faq-page { min-height: 1250px; }
  .cnscd-faq-hero { min-height: 565px; }
  .cnscd-faq-copy { width: 430px; }
  .cnscd-faq-copy h1 { font-size: clamp(46px, 10vw, 74px); }
  .cnscd-faq-copy p { font-size: 25px; }
  .cnscd-faq-art { transform: scale(.86); transform-origin: bottom right; }
  .cnscd-faq-content h2 { font-size: 26px; }
  .cnscd-faq-content p { font-size: 21px; }
  .cnscd-faq-cta { padding-left: 65px; padding-right: 40px; }
}

@media (max-width: 520px) {
  .cnscd-faq-page { min-height: 1110px; }
  .cnscd-faq-hero { min-height: 420px; padding: 30px 22px 0; }
  .cnscd-faq-pill { width: 130px; height: 51px; margin-bottom: 22px; font-size: 23px; }
  .cnscd-faq-copy { width: 100%; }
  .cnscd-faq-copy h1 { font-size: 39px; margin-bottom: 18px; }
  .cnscd-faq-copy p { width: 60%; font-size: 17px; line-height: 1.35; }
  .cnscd-faq-art { transform: scale(.56); right: -88px; bottom: -63px; }
  .cnscd-faq-list { width: calc(100% - 30px); gap: 12px; }
  .cnscd-faq-question { min-height: 82px; grid-template-columns: 60px 1fr 30px; gap: 12px; padding: 14px; }
  .cnscd-faq-icon { width: 54px; height: 54px; font-size: 36px; }
  .cnscd-faq-content h2 { font-size: 18px; }
  .cnscd-faq-content p { margin-top: 14px; font-size: 15px; }
  .cnscd-faq-toggle { font-size: 28px; }
  .cnscd-faq-cta { width: calc(100% - 30px); height: 74px; grid-template-columns: 42px 1fr; padding: 0 22px; }
  .cnscd-faq-cta span { font-size: 24px; }
  .cnscd-faq-cta svg { width: 40px; height: 40px; }
}
`;
