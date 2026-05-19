import React from "react";

const effect5Pills = [
  { icon: <ChatCheckIcon />, label: "Nhanh" },
  { icon: <TargetIcon />, label: "Đúng việc" },
  { icon: <DatabaseIcon />, label: "Đúng dữ liệu" },
];

const effect5Faqs = [
  {
    number: "1",
    question: "KPI tối thiểu của EFFECT là gì?",
    answer: "Tỷ lệ sẵn sàng hệ thống ≥ 98%, thời gian phản hồi trung bình ≤ 2s, tỷ lệ xử lý tự động ≥ 90%, dữ liệu đồng bộ thành công ≥ 99%.",
  },
  {
    number: "2",
    question: "Đầu mối tiếp nhận vướng mắc là ai?",
    answer: "Trung tâm vận hành EFFECT (EOC) là đầu mối chính. Tiếp nhận qua Bàn giao QR, tổng đài hỗ trợ và kênh nội bộ.",
  },
  {
    number: "3",
    question: "Khi nào cần can thiệp thủ công?",
    answer: "Khi hệ thống cảnh báo mức đỏ, dữ liệu bất thường, hoặc quy trình tự động không hoàn tất sau 2 lần thử.",
  },
  {
    number: "4",
    question: "Bộ dữ liệu nào cần theo dõi hằng ngày?",
    answer: "Dữ liệu hồ sơ, tiến độ xử lý, tỷ lệ tự động hóa, cảnh báo hệ thống và nhật ký đồng bộ.",
  },
];

export default function EffectFaqPage() {
  return (
    <section id="effect-du-lieu-duy-tri" className="effect5-page" aria-label="Câu hỏi thường gặp cho EFFECT">
      <style>{css}</style>

      <section className="effect5-hero">
        <div className="effect5-city"><i /><i /><i /></div>
        <div className="effect5-question-bubble">?</div>
        <div className="effect5-check-note"><span /><span /><span /></div>

        <div className="effect5-copy">
          <div className="effect5-pill">MÀN 5</div>
          <h1>Câu hỏi thường gặp</h1>
          <p>Những câu hỏi cốt lõi để đội vận hành EFFECT phối hợp nhanh, đúng việc và đúng dữ liệu.</p>
        </div>

        <OperatorIllustration />
      </section>

      <section className="effect5-pill-row" aria-label="Tiêu chí phối hợp EFFECT">
        {effect5Pills.map((pill) => (
          <div className="effect5-info-pill" key={pill.label}>
            {pill.icon}
            <span>{pill.label}</span>
          </div>
        ))}
      </section>

      <section className="effect5-faq-list" aria-label="Danh sách câu hỏi thường gặp">
        {effect5Faqs.map((faq) => (
          <article className="effect5-faq-card" key={faq.number}>
            <div className="effect5-faq-number">{faq.number}</div>
            <div className="effect5-faq-content">
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
            <div className="effect5-faq-arrow"><ChevronDownIcon /></div>
          </article>
        ))}
      </section>

      <section className="effect5-support-strip" aria-label="Liên hệ hỗ trợ thêm">
        <div className="effect5-support-icon"><HeadsetIcon /></div>
        <div className="effect5-support-copy">
          <h2>Cần hỗ trợ thêm?</h2>
          <p>Liên hệ EOC 24/7 để được hỗ trợ nhanh chóng.</p>
        </div>
        <a href="#effect-lien-he-eoc" className="effect5-contact-btn">
          <PhoneIcon />
          <span>Liên hệ EOC</span>
        </a>
      </section>

      <a href="#effect-trung-tam-van-hanh-cuoi" className="effect5-cta">
        <RocketIcon />
        <span>Vào trung tâm vận hành</span>
      </a>
    </section>
  );
}

function OperatorIllustration() {
  return (
    <section className="effect5-operator-wrap" aria-hidden="true">
      <div className="effect5-operator">
        <div className="hair" />
        <div className="face" />
        <div className="headset-left" />
        <div className="headset-right" />
        <div className="headset-band" />
        <div className="mic" />
        <div className="shirt" />
        <div className="shirt-logo">EFFECT</div>
      </div>
      <div className="effect5-laptop"><ShieldMiniIcon /></div>
    </section>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ChatCheckIcon() { return <Svg><path d="M4 5h15v10H9l-5 4V5Z" fill="currentColor" opacity=".18"/><path d="M4 5h15v10H9l-5 4V5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/><path d="m8 10.5 2.1 2.1 4.4-4.8" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function TargetIcon() { return <Svg><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function DatabaseIcon() { return <Svg><ellipse cx="12" cy="6" rx="7" ry="3" fill="currentColor"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round"/></Svg>; }
function ChevronDownIcon() { return <Svg><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function HeadsetIcon() { return <Svg><path d="M5 13v-1a7 7 0 0 1 14 0v1" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><rect x="3" y="12" width="5" height="7" rx="2" fill="currentColor"/><rect x="16" y="12" width="5" height="7" rx="2" fill="currentColor"/><path d="M18 19c-.7 2-2.5 3-5.2 3H11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></Svg>; }
function PhoneIcon() { return <Svg><path d="M7 4 4 7c0 7.2 5.8 13 13 13l3-3-4-4-2.6 2.1a11 11 0 0 1-4.5-4.5L11 8 7 4Z" fill="currentColor"/></Svg>; }
function RocketIcon() { return <Svg><path d="M13 4c3.2 1 5.4 3.2 6.4 6.4l-5.6 5.6-4.4-4.4L13 4Z" fill="currentColor"/><path d="M8.8 12.2 5 13l-2 4 4-.8M11.8 15.2 11 19l-4 2 .8-4" fill="currentColor" opacity=".85"/><circle cx="15" cy="9" r="1.8" fill="#fff"/></Svg>; }
function ShieldMiniIcon() { return <Svg><path d="M12 3 5 6v5c0 4.8 2.6 8.3 7 10 4.4-1.7 7-5.2 7-10V6l-7-3Z" fill="currentColor"/><path d="m9 12 2 2 4-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }

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

.effect5-page {
  position: relative;
  width: 100%;
  min-height: 1518px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 2%, rgba(255,255,255,.98) 0 18%, rgba(255,255,255,0) 40%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 55%, #fbfdff 100%);
}
.effect5-hero {
  position: relative;
  min-height: 510px;
  overflow: hidden;
}
.effect5-city {
  position: absolute;
  right: 28px;
  top: 218px;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  opacity: .32;
}
.effect5-city i {
  width: 42px;
  height: 102px;
  border-radius: 9px 9px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.28), rgba(85,154,219,.08));
}
.effect5-city i:nth-child(2) { height: 146px; }
.effect5-city i:nth-child(3) { height: 118px; }
.effect5-question-bubble {
  position: absolute;
  z-index: 8;
  right: 38px;
  top: 83px;
  width: 91px;
  height: 73px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #2e79f1, #145bd9);
  font-size: 48px;
  font-weight: 950;
  box-shadow: 0 12px 26px rgba(18,94,220,.24);
}
.effect5-question-bubble::after {
  content: "";
  position: absolute;
  right: 24px;
  bottom: -17px;
  border-width: 18px 13px 0 0;
  border-style: solid;
  border-color: #145bd9 transparent transparent transparent;
}
.effect5-check-note {
  position: absolute;
  z-index: 4;
  right: 160px;
  top: 90px;
  width: 153px;
  height: 140px;
  border-radius: 18px;
  background: rgba(225,240,255,.8);
  display: grid;
  align-content: center;
  gap: 17px;
  padding: 26px;
}
.effect5-check-note span {
  position: relative;
  height: 8px;
  border-radius: 999px;
  background: #c9dff4;
}
.effect5-check-note span::before {
  content: "✓";
  position: absolute;
  left: -28px;
  top: -7px;
  width: 19px;
  height: 19px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  color: #7facdc;
  background: #d7eafa;
  font-size: 12px;
  font-weight: 900;
}
.effect5-copy {
  position: relative;
  z-index: 9;
  width: 570px;
  padding-top: 36px;
  margin-left: 59px;
  text-align: center;
}
.effect5-pill {
  width: 127px;
  height: 44px;
  margin: 0 auto 26px;
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
.effect5-copy h1 {
  margin: 0 auto 24px;
  color: #075bd2;
  font-size: 76px;
  line-height: 1.08;
  font-weight: 950;
  letter-spacing: -3.6px;
}
.effect5-copy p {
  width: 520px;
  margin: 0 auto;
  color: #1d2742;
  font-size: 24px;
  line-height: 1.46;
  font-weight: 500;
}
.effect5-operator-wrap {
  position: absolute;
  z-index: 7;
  right: 11px;
  bottom: 0;
  width: 388px;
  height: 420px;
}
.effect5-operator-wrap::before {
  content: "";
  position: absolute;
  left: -35px;
  right: 0;
  bottom: 0;
  height: 247px;
  border-radius: 50% 0 0 0;
  background: linear-gradient(180deg, rgba(210,238,255,.75), rgba(255,255,255,.1));
}
.effect5-operator {
  position: absolute;
  z-index: 7;
  right: 48px;
  bottom: 68px;
  width: 240px;
  height: 330px;
}
.effect5-operator .hair {
  position: absolute;
  left: 66px;
  top: 0;
  width: 102px;
  height: 80px;
  border-radius: 62px 62px 24px 24px;
  background: #141a23;
  transform: rotate(-7deg);
}
.effect5-operator .face {
  position: absolute;
  left: 84px;
  top: 65px;
  width: 76px;
  height: 96px;
  border-radius: 47%;
  background: #ffbd8c;
}
.effect5-operator .headset-band {
  position: absolute;
  left: 62px;
  top: 50px;
  width: 116px;
  height: 83px;
  border-radius: 70px;
  border: 9px solid #063f9c;
  border-bottom-color: transparent;
}
.effect5-operator .headset-left,
.effect5-operator .headset-right {
  position: absolute;
  top: 88px;
  width: 28px;
  height: 47px;
  border-radius: 12px;
  background: #075bd2;
}
.effect5-operator .headset-left { left: 55px; }
.effect5-operator .headset-right { right: 54px; }
.effect5-operator .mic {
  position: absolute;
  left: 145px;
  top: 127px;
  width: 58px;
  height: 6px;
  border-radius: 999px;
  background: #063f9c;
  transform: rotate(13deg);
}
.effect5-operator .mic::after {
  content: "";
  position: absolute;
  right: -7px;
  top: -5px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #063f9c;
}
.effect5-operator .shirt {
  position: absolute;
  left: 31px;
  top: 166px;
  width: 184px;
  height: 164px;
  border-radius: 72px 72px 0 0;
  background: #063f9c;
}
.effect5-operator .shirt-logo {
  position: absolute;
  right: 47px;
  top: 227px;
  color: #fff;
  font-size: 16px;
  font-weight: 950;
}
.effect5-operator .arm-left {
  position: absolute;
  left: -36px;
  top: 188px;
  width: 101px;
  height: 29px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(-72deg);
}
.effect5-operator .arm-right {
  position: absolute;
  right: -1px;
  top: 246px;
  width: 101px;
  height: 29px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(60deg);
}
.effect5-operator .finger {
  position: absolute;
  left: 2px;
  top: 101px;
  width: 22px;
  height: 79px;
  border-radius: 999px;
  background: #ffbd8c;
  transform: rotate(-11deg);
}
.effect5-laptop {
  position: absolute;
  z-index: 9;
  right: 107px;
  bottom: 1px;
  width: 254px;
  height: 118px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  color: #0b3a86;
  background: linear-gradient(135deg, #cfd5dc, #7f8d9c);
  box-shadow: 0 18px 24px rgba(0,42,92,.22);
}
.effect5-laptop svg {
  width: 44px;
  height: 44px;
}
.effect5-plant {
  position: absolute;
  z-index: 10;
  right: 3px;
  bottom: 0;
  width: 74px;
  height: 126px;
}
.effect5-plant::before,
.effect5-plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 43px;
  height: 98px;
  border-radius: 40px 40px 0 0;
  background: linear-gradient(180deg, #a0dca0, #42aa72);
}
.effect5-plant::before { left: 0; transform: rotate(-25deg); }
.effect5-plant::after { right: 0; transform: rotate(25deg); }
.effect5-pill-row {
  position: relative;
  z-index: 16;
  width: 573px;
  margin: -6px 0 38px 59px;
  display: grid;
  grid-template-columns: 1fr 1fr 1.15fr;
  gap: 12px;
}
.effect5-info-pill {
  height: 78px;
  border-radius: 999px;
  border: 2px solid #20b9b2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  color: #10a9a4;
  background: rgba(255,255,255,.96);
  box-shadow: 0 10px 23px rgba(31,101,178,.09);
  font-size: 20px;
  line-height: 1;
  font-weight: 900;
}
.effect5-info-pill:nth-child(2) {
  color: #075bd2;
  border-color: #6baaff;
}
.effect5-info-pill svg {
  width: 39px;
  height: 39px;
}
.effect5-faq-list {
  position: relative;
  z-index: 17;
  width: calc(100% - 78px);
  margin: 0 auto 20px;
  display: grid;
  gap: 19px;
}
.effect5-faq-card {
  min-height: 165px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 82px 1fr 58px;
  align-items: start;
  gap: 9px;
  padding: 29px 29px 25px;
  background: rgba(255,255,255,.97);
  border: 1px solid #e0ebf7;
  box-shadow: 0 12px 27px rgba(31,101,178,.1);
}
.effect5-faq-number {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #12bbb0, #069e99);
  font-size: 28px;
  font-weight: 950;
}
.effect5-faq-content h2 {
  margin: 2px 0 16px;
  color: #075bd2;
  font-size: 31px;
  line-height: 1.14;
  font-weight: 950;
  letter-spacing: -.6px;
}
.effect5-faq-content p {
  margin: 0;
  color: #21304e;
  font-size: 20px;
  line-height: 1.45;
  font-weight: 500;
}
.effect5-faq-arrow {
  justify-self: end;
  color: #0a9f97;
  font-size: 42px;
  margin-top: 4px;
}
.effect5-support-strip {
  position: relative;
  z-index: 17;
  width: calc(100% - 78px);
  min-height: 104px;
  margin: 0 auto 20px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 102px 1fr 245px;
  align-items: center;
  gap: 10px;
  padding: 17px 28px;
  background: linear-gradient(90deg, rgba(230,255,252,.96), rgba(246,253,255,.96));
  border: 1px solid rgba(32,185,178,.45);
  box-shadow: 0 10px 22px rgba(31,101,178,.08);
}
.effect5-support-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #0a9f97;
  border: 2px solid #14b8b1;
  background: #fff;
  font-size: 46px;
}
.effect5-support-copy h2 {
  margin: 0 0 8px;
  color: #0a9f97;
  font-size: 25px;
  line-height: 1;
  font-weight: 950;
}
.effect5-support-copy p {
  margin: 0;
  color: #263852;
  font-size: 18px;
  line-height: 1.28;
  font-weight: 500;
}
.effect5-contact-btn {
  height: 63px;
  border-radius: 999px;
  border: 2px solid #13aaa4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  color: #0a9f97;
  background: #fff;
  font-size: 21px;
  font-weight: 900;
}
.effect5-contact-btn svg {
  width: 30px;
  height: 30px;
}
.effect5-cta {
  position: relative;
  z-index: 18;
  width: calc(100% - 60px);
  height: 89px;
  margin: 0 auto 31px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 12px 22px rgba(0,76,180,.22);
  font-size: 32px;
  line-height: 1;
  font-weight: 950;
  transition: transform .18s ease, filter .18s ease;
}
.effect5-cta:hover,
.effect5-contact-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}
.effect5-cta svg {
  width: 57px;
  height: 57px;
  flex: 0 0 auto;
}
.effect5-cta span {
  display: inline-block;
  line-height: 1;
}

@media (max-width: 820px) {
  .effect5-page { min-height: 1370px; }
  .effect5-hero { transform: scale(.88); transform-origin: top center; width: 114%; left: -7%; min-height: 470px; }
  .effect5-pill-row { width: calc(100% - 80px); margin: -45px auto 30px; }
  .effect5-faq-list,
  .effect5-support-strip { width: calc(100% - 56px); }
  .effect5-faq-card { grid-template-columns: 72px 1fr 45px; }
  .effect5-faq-content h2 { font-size: 27px; }
  .effect5-faq-content p { font-size: 18px; }
  .effect5-support-strip { grid-template-columns: 82px 1fr 220px; }
}

@media (max-width: 520px) {
  .effect5-page { min-height: 1240px; }
  .effect5-hero { transform: none; width: 100%; left: 0; min-height: 500px; }
  .effect5-copy { width: calc(100% - 34px); margin: 0 auto; padding-top: 28px; }
  .effect5-pill { width: 105px; height: 38px; font-size: 20px; margin-bottom: 18px; }
  .effect5-copy h1 { font-size: 42px; letter-spacing: -1.8px; }
  .effect5-copy p { width: 100%; font-size: 16px; }
  .effect5-operator-wrap { transform: scale(.72); transform-origin: bottom right; right: -45px; height: 350px; }
  .effect5-question-bubble { transform: scale(.75); right: 15px; top: 62px; }
  .effect5-check-note { display: none; }
  .effect5-pill-row { width: calc(100% - 34px); margin: -12px auto 22px; grid-template-columns: 1fr; gap: 10px; }
  .effect5-info-pill { height: 58px; font-size: 18px; }
  .effect5-info-pill svg { width: 31px; height: 31px; }
  .effect5-faq-list { width: calc(100% - 34px); gap: 12px; }
  .effect5-faq-card { min-height: auto; grid-template-columns: 45px 1fr 30px; padding: 18px 14px; gap: 9px; }
  .effect5-faq-number { width: 40px; height: 40px; font-size: 20px; }
  .effect5-faq-content h2 { font-size: 18px; margin-bottom: 8px; }
  .effect5-faq-content p { font-size: 14px; }
  .effect5-faq-arrow { font-size: 26px; }
  .effect5-support-strip { width: calc(100% - 34px); grid-template-columns: 54px 1fr; padding: 14px; }
  .effect5-support-icon { width: 48px; height: 48px; font-size: 30px; }
  .effect5-support-copy h2 { font-size: 18px; }
  .effect5-support-copy p { font-size: 13px; }
  .effect5-contact-btn { grid-column: 1 / -1; height: 52px; font-size: 17px; }
  .effect5-cta { width: calc(100% - 34px); height: 72px; font-size: 22px; gap: 12px; }
  .effect5-cta svg { width: 40px; height: 40px; }
}
`;
