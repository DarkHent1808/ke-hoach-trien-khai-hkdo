import React, { useState } from "react";
import Header from "../../components/Header";

const faqItems = [
  {
    question: "Khi nào địa bàn đủ điều kiện nhân rộng?",
    answer: "Khi đạt các mục tiêu về tiến độ, tỷ lệ hộ kinh doanh tham gia và điểm truyền thông theo kế hoạch.",
    defaultOpen: true,
  },
  {
    question: "KPI nào là quan trọng nhất?",
    answer: "Nhóm KPI quan trọng nhất gồm tỷ lệ hộ hoàn tất chuỗi 1+10 phút, tỷ lệ hộ nhận và giữ QR tại điểm bán, cùng mức độ duy trì sau 7 ngày và 30 ngày.",
    defaultOpen: false,
  },
  {
    question: "Sau bao lâu nên sơ kết?",
    answer: "Nên sơ kết mỗi 3 tháng để kịp thời đánh giá và điều chỉnh kế hoạch cho phù hợp.",
    defaultOpen: true,
  },
  {
    question: "Vai trò của Sở khác gì UBND xã/phường?",
    answer: "Sở KHCN giữ vai trò điều phối, theo dõi mục tiêu và đánh giá kết quả chung. UBND xã/phường tập trung tổ chức địa bàn, huy động hộ kinh doanh và phối hợp triển khai tại cơ sở.",
    defaultOpen: false,
  },
];

export default function SoKHCNFAQPage({ embedded = false }) {
  const Wrapper = embedded ? "section" : "div";
  const Content = embedded ? "div" : "main";
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
    <Wrapper
      id="so-khcn-faq"
      className={embedded ? "faq-bg faq-bg--embedded" : "faq-bg"}
    >
      <style>{css}</style>

      <Content className={embedded ? "faq-page faq-page--embedded" : "faq-page"}>
        {!embedded && <Header activeKey="so-khcn" />}

        <section className="faq-hero">
          <div className="faq-hero-copy">
            <h1>Câu hỏi thường gặp</h1>
            <p>Một số câu hỏi dành cho Sở KHCN trong quá trình điều phối triển khai HKDO.</p>
          </div>

          <FAQHeroArt />
        </section>

        <section className="faq-list" aria-label="Câu hỏi thường gặp">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <article className={`faq-card ${isOpen ? "is-open" : ""}`} key={item.question}>
                <button type="button" className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span className="question-icon">?</span>
                  <strong>{item.question}</strong>
                  <span className="toggle-icon" aria-hidden="true">
                    {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </section>

        <a href="#dashboard" className="faq-primary-cta">
          <PieIcon />
          <span>Xem dashboard</span>
          <ArrowRightIcon />
        </a>
      </Content>
    </Wrapper>
  );
}

function FAQHeroArt() {
  return (
    <div className="faq-hero-art" aria-hidden="true">
      <div className="faq-cloud cloud-a" />
      <div className="faq-cloud cloud-b" />
      <div className="faq-skyline skyline-a"><i /><i /><i /></div>
      <div className="faq-skyline skyline-b"><i /><i /><i /></div>
      <div className="chat-bubble"><span /><span /><span /></div>

      <div className="faq-board">
        <div className="board-title">FAQ</div>
        <div className="board-row"><b>?</b><span /><span /></div>
        <div className="board-row"><b>?</b><span /><span /></div>
        <div className="board-line long" />
        <div className="board-line short" />
      </div>

      <div className="robot">
        <div className="head"><span /></div>
        <div className="ear left" />
        <div className="ear right" />
        <div className="body"><NetworkMiniIcon /></div>
        <div className="arm left" />
        <div className="arm right" />
      </div>

      <div className="staff">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="arm" />
        <div className="tablet" />
      </div>
    </div>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ChevronUpIcon() {
  return (
    <Svg>
      <path d="m6 15 6-6 6 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function ChevronDownIcon() {
  return (
    <Svg>
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function PieIcon() {
  return (
    <Svg>
      <path d="M12 3v9h9A9 9 0 0 0 12 3Z" fill="currentColor" opacity=".98" />
      <path d="M10 5a9 9 0 1 0 9 9h-9V5Z" fill="currentColor" opacity=".45" />
    </Svg>
  );
}

function ArrowRightIcon() {
  return (
    <Svg>
      <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function NetworkMiniIcon() {
  return (
    <Svg viewBox="0 0 64 64">
      <path d="M32 8 15 18v20l17 10 17-10V18L32 8Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <path d="M24 25h16M24 33h20M24 41h12" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="15" cy="18" r="4" fill="white" stroke="currentColor" strokeWidth="4" />
      <circle cx="49" cy="18" r="4" fill="white" stroke="currentColor" strokeWidth="4" />
      <circle cx="49" cy="38" r="4" fill="white" stroke="currentColor" strokeWidth="4" />
    </Svg>
  );
}

const css = `
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  color: #111a63;
  background: #dfeefa;
}
a { color: inherit; text-decoration: none; }
button { font: inherit; }
svg { width: 1em; height: 1em; display: block; }

.faq-bg {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at top, #fff 0, #e9f6ff 47%, #dceefa 100%);
}
.faq-bg--embedded {
  min-height: auto;
  display: block;
  background: transparent;
}
.faq-page {
  width: min(100%, 928px);
  min-height: 100vh;
  overflow: hidden;
  border-radius: 0 0 28px 28px;
  background:
    radial-gradient(circle at 78% 8%, rgba(255,255,255,.9) 0 13%, rgba(255,255,255,0) 35%),
    linear-gradient(180deg, #f9fdff 0%, #eef8ff 58%, #f8fdff 100%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.72) inset;
}
.faq-page--embedded {
  width: 100%;
  min-height: auto;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.faq-hero {
  position: relative;
  min-height: 444px;
  padding: 123px 37px 0;
}
.faq-page--embedded .faq-hero {
  padding-top: 100px;
}
.faq-hero-copy {
  position: relative;
  z-index: 5;
  width: 448px;
}
.faq-hero-copy h1 {
  margin: 0 0 29px;
  color: #10175c;
  font-size: 64px;
  line-height: 1.18;
  font-weight: 950;
  letter-spacing: -2.6px;
}
.faq-hero-copy p {
  margin: 0;
  width: 480px;
  color: #4a5885;
  font-size: 23px;
  line-height: 1.52;
  font-weight: 500;
}

.faq-hero-art {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.faq-cloud,
.faq-cloud::before,
.faq-cloud::after {
  position: absolute;
  border-radius: 999px;
  background: rgba(255,255,255,.95);
  content: "";
}
.faq-cloud.cloud-a { right: 52px; top: 152px; width: 74px; height: 14px; }
.faq-cloud.cloud-a::before { width: 30px; height: 30px; left: 13px; top: -15px; }
.faq-cloud.cloud-a::after { width: 39px; height: 39px; left: 38px; top: -24px; }
.faq-cloud.cloud-b { right: 459px; top: 208px; width: 74px; height: 14px; opacity: .72; }
.faq-cloud.cloud-b::before { width: 28px; height: 28px; left: 16px; top: -13px; }
.faq-cloud.cloud-b::after { width: 37px; height: 37px; left: 39px; top: -22px; }
.faq-skyline {
  position: absolute;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  opacity: .48;
}
.faq-skyline.skyline-a { right: -5px; bottom: 82px; }
.faq-skyline.skyline-b { right: 316px; bottom: 105px; }
.faq-skyline i {
  display: block;
  width: 39px;
  height: 98px;
  border-radius: 11px 11px 0 0;
  background: linear-gradient(180deg, rgba(85,154,219,.2), rgba(85,154,219,.06));
}
.faq-skyline i:nth-child(2) { height: 135px; }
.faq-skyline i:nth-child(3) { height: 82px; }
.chat-bubble {
  position: absolute;
  right: 368px;
  top: 151px;
  width: 76px;
  height: 62px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background: linear-gradient(180deg, #c6ddfb, #9ec5f7);
}
.chat-bubble::after {
  content: "";
  position: absolute;
  right: 16px;
  bottom: -17px;
  border-width: 18px 0 0 18px;
  border-style: solid;
  border-color: transparent transparent transparent #9ec5f7;
}
.chat-bubble span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
}
.faq-board {
  position: absolute;
  right: 166px;
  top: 138px;
  width: 206px;
  height: 300px;
  padding: 25px 22px;
  border-radius: 18px;
  background: linear-gradient(180deg, #e9f4ff, #cfe6ff);
  border: 9px solid #5d9ef1;
  box-shadow: 0 18px 30px rgba(34, 109, 198, .18);
  transform: rotate(3deg);
}
.board-title {
  width: 67px;
  height: 38px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #3e89ee;
  font-size: 21px;
  line-height: 1;
  font-weight: 950;
}
.board-row {
  height: 54px;
  margin-top: 19px;
  padding: 10px;
  border-radius: 9px;
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 10px;
  row-gap: 7px;
  background: rgba(255,255,255,.65);
}
.board-row b {
  grid-row: 1 / 3;
  width: 31px;
  height: 31px;
  border-radius: 7px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #3e89ee;
  font-size: 20px;
}
.board-row span {
  height: 8px;
  border-radius: 999px;
  background: #8cbcf2;
}
.board-row span:last-child {
  width: 72%;
}
.board-line {
  height: 12px;
  margin-top: 16px;
  border-radius: 999px;
  background: #a8cdf5;
}
.board-line.long { width: 132px; }
.board-line.short { width: 92px; }
.robot {
  position: absolute;
  right: 368px;
  bottom: 10px;
  width: 162px;
  height: 235px;
  z-index: 4;
}
.robot .head {
  position: absolute;
  left: 33px;
  top: 6px;
  width: 92px;
  height: 72px;
  border-radius: 36px;
  display: grid;
  place-items: center;
  background: #0c234e;
  border: 8px solid #e8f4ff;
  box-shadow: 0 6px 0 #6baef0;
}
.robot .head span {
  width: 44px;
  height: 21px;
  border-radius: 999px;
  background:
    radial-gradient(circle at 28% 48%, #76e0ff 0 4px, transparent 5px),
    radial-gradient(circle at 72% 48%, #76e0ff 0 4px, transparent 5px);
}
.robot .ear {
  position: absolute;
  top: 29px;
  width: 22px;
  height: 39px;
  border-radius: 14px;
  background: #5ca1ef;
}
.robot .ear.left { left: 16px; }
.robot .ear.right { right: 16px; }
.robot .body {
  position: absolute;
  left: 31px;
  top: 79px;
  width: 103px;
  height: 124px;
  border-radius: 46px 46px 34px 34px;
  display: grid;
  place-items: center;
  color: #1774df;
  background: #fff;
  border: 4px solid #d8ecff;
  box-shadow: 0 16px 22px rgba(43, 116, 203, .15);
  font-size: 48px;
}
.robot .arm {
  position: absolute;
  width: 19px;
  height: 74px;
  border-radius: 999px;
  background: #fff;
  border: 4px solid #d8ecff;
}
.robot .arm.left {
  left: 12px;
  top: 95px;
  transform: rotate(13deg);
}
.robot .arm.right {
  right: 9px;
  top: 86px;
  transform: rotate(-35deg);
}
.staff {
  position: absolute;
  right: 20px;
  bottom: -6px;
  width: 205px;
  height: 324px;
  z-index: 5;
}
.staff .hair {
  position: absolute;
  left: 49px;
  top: 0;
  width: 90px;
  height: 70px;
  border-radius: 62px 62px 21px 21px;
  background: #061746;
}
.staff .face {
  position: absolute;
  left: 65px;
  top: 51px;
  width: 60px;
  height: 75px;
  border-radius: 45%;
  background: #ffbd8c;
}
.staff .body {
  position: absolute;
  left: 36px;
  top: 129px;
  width: 116px;
  height: 200px;
  border-radius: 42px 42px 0 0;
  background: linear-gradient(180deg, #83bdff, #4a91ec);
}
.staff .arm {
  position: absolute;
  left: -2px;
  top: 165px;
  width: 124px;
  height: 29px;
  border-radius: 999px;
  transform: rotate(-42deg);
  background: #76b2fa;
}
.staff .arm::after {
  content: "";
  position: absolute;
  left: -12px;
  top: -2px;
  width: 30px;
  height: 29px;
  border-radius: 50%;
  background: #ffbd8c;
}
.staff .tablet {
  position: absolute;
  right: 26px;
  bottom: 32px;
  width: 86px;
  height: 69px;
  border-radius: 8px;
  transform: rotate(-8deg);
  background: linear-gradient(135deg, #627fa3, #243b5f);
}

.faq-list {
  position: relative;
  z-index: 7;
  padding: 0 37px;
  display: grid;
  gap: 18px;
}
.faq-card {
  border-radius: 24px;
  background: rgba(255,255,255,.97);
  box-shadow: 0 13px 27px rgba(31,101,178,.12);
  overflow: hidden;
}
.faq-question {
  width: 100%;
  min-height: 125px;
  padding: 25px 32px 24px;
  border: 0;
  display: grid;
  grid-template-columns: 68px 1fr 42px;
  align-items: center;
  gap: 22px;
  text-align: left;
  color: #111a63;
  background: transparent;
  cursor: pointer;
}
.question-icon {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #2e88f2, #095fd3);
  font-size: 40px;
  line-height: 1;
  font-weight: 900;
}
.faq-question strong {
  font-size: 29px;
  line-height: 1.22;
  font-weight: 920;
  letter-spacing: -.4px;
}
.toggle-icon {
  color: #0968df;
  font-size: 34px;
  justify-self: end;
}
.faq-answer {
  padding: 0 24px 24px;
}
.faq-answer p {
  margin: 0;
  padding: 31px 47px;
  border-radius: 14px;
  color: #263b7f;
  background: #eff6fd;
  font-size: 23px;
  line-height: 1.55;
  font-weight: 500;
}

.faq-primary-cta {
  height: 82px;
  margin: 21px 30px 27px;
  padding: 0 35px 0 29px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 60px 1fr 52px;
  align-items: center;
  color: #fff;
  background: linear-gradient(180deg, #0a70e3, #0057d7);
  box-shadow: 0 15px 27px rgba(0,84,199,.28);
  transition: transform .18s ease, filter .18s ease;
}
.faq-primary-cta:hover,
.faq-question:hover {
  filter: brightness(1.03);
}
.faq-primary-cta:hover { transform: translateY(-2px); }
.faq-primary-cta svg:first-child {
  width: 50px;
  height: 50px;
  opacity: .9;
}
.faq-primary-cta span {
  text-align: center;
  font-size: 31px;
  line-height: 1;
  font-weight: 920;
  letter-spacing: -.8px;
}
.faq-primary-cta svg:last-child {
  width: 43px;
  height: 43px;
  justify-self: end;
}

@media (max-width: 820px) {
  .faq-page { border-radius: 0; }
  .faq-hero { min-height: 580px; padding: 75px 24px 0; }
  .faq-page--embedded .faq-hero { padding-top: 70px; }
  .faq-hero-copy { width: 100%; }
  .faq-hero-copy h1 { font-size: clamp(44px, 10vw, 64px); }
  .faq-hero-copy p { width: min(100%, 480px); font-size: 20px; }
  .faq-hero-art { transform: scale(.82); transform-origin: center top; width: 118%; left: -9%; top: 113px; }
  .faq-list { padding: 0 24px; }
}

@media (max-width: 520px) {
  .faq-hero { min-height: 520px; padding-left: 18px; padding-right: 18px; }
  .faq-hero-copy h1 { font-size: 42px; }
  .faq-hero-copy p { font-size: 18px; }
  .faq-hero-art { transform: scale(.62); width: 150%; left: -25%; top: 145px; }
  .faq-list { padding: 0 18px; gap: 14px; }
  .faq-question {
    min-height: 94px;
    grid-template-columns: 50px 1fr 32px;
    gap: 14px;
    padding: 19px 20px;
  }
  .question-icon {
    width: 48px;
    height: 48px;
    font-size: 31px;
  }
  .faq-question strong {
    font-size: 20px;
  }
  .toggle-icon {
    font-size: 28px;
  }
  .faq-answer {
    padding: 0 16px 16px;
  }
  .faq-answer p {
    padding: 22px;
    font-size: 18px;
  }
  .faq-primary-cta {
    height: 76px;
    margin-left: 18px;
    margin-right: 18px;
    grid-template-columns: 48px 1fr 38px;
    padding: 0 22px;
  }
  .faq-primary-cta span {
    font-size: 24px;
  }
}
`;
