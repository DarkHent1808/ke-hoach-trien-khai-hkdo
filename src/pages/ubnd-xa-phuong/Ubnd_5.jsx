import React, { useState } from "react";

const faqItems = [
  {
    icon: <UserSwitchIcon />,
    question: "Xã/phường có cần thao tác thay hộ không?",
    answer: "Không nên thao tác thay hộ nếu không có xác nhận. Địa phương nên hướng dẫn hộ tự thực hiện, chỉ hỗ trợ kiểm tra và ghi nhận trạng thái khi cần.",
    defaultOpen: false,
  },
  {
    icon: <GroupIcon />,
    question: "Hộ không đến tập trung thì xử lý ra sao?",
    answer: "Tổ chức hỗ trợ lưu động, hướng dẫn trực tiếp hoặc qua kênh trực tuyến.",
    defaultOpen: true,
  },
  {
    icon: <MegaphoneLineIcon />,
    question: "Khi nào bắt đầu truyền thông cộng đồng?",
    answer: "Nên bắt đầu trước ngày tập trung ít nhất 7–10 ngày để người dân nắm thông tin kịp thời.",
    defaultOpen: true,
  },
  {
    icon: <BarChartIcon />,
    question: "Theo dõi địa bàn theo mốc nào?",
    answer: "Nên theo dõi theo các mốc trước phát động, trong ngày phát động, sau 7 ngày và sau 30 ngày để đánh giá mức độ duy trì.",
    defaultOpen: false,
  },
];

export default function UBNDFAQPage() {
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
    <section id="ubnd-cau-hoi-thuong-gap" className="ubnd-faq-page" aria-label="Câu hỏi thường gặp của UBND xã phường">
      <style>{css}</style>

      <div className="ubnd-faq-inner">
        <section className="ubnd-faq-heading">
          <div className="ubnd-faq-pill">MÀN 5</div>
          <h1>Câu hỏi thường gặp</h1>
          <p>Giải đáp nhanh những thắc mắc của xã/phường trong chương trình HKDO</p>
        </section>

        <section className="ubnd-faq-list" aria-label="Danh sách câu hỏi thường gặp">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <article className={`ubnd-faq-card ${isOpen ? "is-open" : ""}`} key={item.question}>
                <button type="button" className="ubnd-faq-question" onClick={() => toggleFAQ(index)}>
                  <div className="ubnd-faq-icon">{item.icon}</div>
                  <div className="ubnd-faq-text">
                    <h2>{item.question}</h2>
                    {isOpen && (
                      <p><span />{item.answer}</p>
                    )}
                  </div>
                  <div className="ubnd-faq-toggle">
                    {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </div>
                </button>
              </article>
            );
          })}
        </section>

        <FAQIllustration />

        <a href="#ubnd-lien-he-dau-moi" className="ubnd-faq-cta">
          <HeadsetIcon />
          <span>Liên hệ đầu mối hỗ trợ</span>
          <ArrowRightIcon />
        </a>
      </div>

      <footer className="ubnd-faq-footer">
        <div className="ubnd-faq-footer-logo"><NetworkLogoIcon /></div>
        <strong>HKDO</strong>
        <i />
        <p>CHƯƠNG TRÌNH CHUYỂN ĐỔI SỐ<br />HỖ TRỢ HỘ KINH DOANH</p>
        <b />
        <em>Đồng hành số hóa<br />– Vững bước phát triển</em>
        <div className="ubnd-faq-pager">5 / 6</div>
      </footer>
    </section>
  );
}

function FAQIllustration() {
  return (
    <section className="ubnd-faq-illustration" aria-hidden="true">
      <div className="ubnd-faq-cloud cloud-a" />
      <div className="ubnd-faq-cloud cloud-b" />
      <div className="ubnd-faq-skyline left"><i /><i /><i /></div>
      <div className="ubnd-faq-skyline center"><i /><i /><i /></div>
      <div className="ubnd-faq-skyline right"><i /><i /><i /></div>
      <div className="ubnd-faq-plant plant-left" />
      <div className="ubnd-faq-tree tree-right" />
      <div className="ubnd-faq-building">UBND<br />XÃ/PHƯỜNG</div>

      <div className="ubnd-faq-person">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="lanyard" />
        <div className="badge">UBND<br />XÃ/PHƯỜNG</div>
        <div className="arm-left" />
        <div className="arm-right" />
      </div>

      <div className="ubnd-faq-laptop">
        <div className="seal"><BuildingSmallIcon /></div>
      </div>

      <div className="ubnd-faq-help-board">
        <div className="board-tail" />
        <div className="question-badge">?</div>
        <div className="mini-chart">
          {[21, 37, 55, 72, 92].map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="check-lines">
          <p><CheckSmallIcon /><span /></p>
          <p><CheckSmallIcon /><span /></p>
        </div>
      </div>
    </section>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ChevronDownIcon() { return <Svg><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function ChevronUpIcon() { return <Svg><path d="m6 15 6-6 6 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function ArrowRightIcon() { return <Svg><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function UserSwitchIcon() { return <Svg><path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2.2"/><path d="M5 21c.6-4.4 3-6.7 7-6.7 2.1 0 3.8.6 5 1.9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><path d="M18 8h3l-2-2M18 8l2 2M6 14H3l2 2M6 14l-2-2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function GroupIcon() { return <Svg><circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="2.2"/><circle cx="5.5" cy="10" r="2.7" stroke="currentColor" strokeWidth="2.2"/><circle cx="18.5" cy="10" r="2.7" stroke="currentColor" strokeWidth="2.2"/><path d="M3 20c.4-3.5 2.4-5.2 5.3-5.2M21 20c-.4-3.5-2.4-5.2-5.3-5.2M6.2 21c.5-4.2 2.5-6.3 5.8-6.3s5.3 2.1 5.8 6.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function MegaphoneLineIcon() { return <Svg><path d="M4 14h3l9 4V6l-9 4H4v4Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/><path d="M19 9c1 1.4 1 4.6 0 6M7 14v4" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function BarChartIcon() { return <Svg><path d="M5 19V11M10 19V7M15 19V4M20 19V2" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/><path d="M4 20h17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></Svg>; }
function HeadsetIcon() { return <Svg><path d="M5 13v-1a7 7 0 0 1 14 0v1" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><rect x="3" y="12" width="5" height="7" rx="2" fill="currentColor"/><rect x="16" y="12" width="5" height="7" rx="2" fill="currentColor"/><path d="M18 19c-.7 2-2.5 3-5.2 3H11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></Svg>; }
function NetworkLogoIcon() { return <Svg viewBox="0 0 64 64"><path d="M32 7 11 19v26l21 12 21-12V19L32 7Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round"/><path d="M22 34c4-7 16-7 20 0M23 23h18M20 42h24" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/></Svg>; }
function BuildingSmallIcon() { return <Svg><path d="M3 10h18L12 4 3 10Z" fill="currentColor"/><path d="M5 10v9M9 10v9M15 10v9M19 10v9M3 20h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function CheckSmallIcon() { return <Svg><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }

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

.ubnd-faq-page {
  position: relative;
  width: 100%;
  min-height: 1518px;
  overflow: hidden;
  background: linear-gradient(180deg, #075ed4 0 84px, #f7fcff 84px, #eef8ff 82%, #0058c9 82% 100%);
}

.ubnd-faq-inner {
  position: relative;
  z-index: 2;
  min-height: 1282px;
  padding-top: 120px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 2%, rgba(255,255,255,.96) 0 16%, rgba(255,255,255,0) 38%),
    linear-gradient(180deg, #fbfdff 0%, #f2faff 74%, #f8fdff 100%);
}

.ubnd-faq-heading {
  position: relative;
  z-index: 5;
  width: 760px;
  margin: 0 auto 33px;
  text-align: center;
}
.ubnd-faq-pill {
  width: 151px;
  height: 55px;
  margin: 0 auto 21px;
  border-radius: 17px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #1679eb, #075bd2);
  box-shadow: 0 10px 21px rgba(7,91,210,.25);
  font-size: 30px;
  line-height: 1;
  font-weight: 950;
}
.ubnd-faq-heading h1 {
  margin: 0 0 18px;
  color: #10175c;
  font-size: 63px;
  line-height: 1.05;
  font-weight: 950;
  letter-spacing: -2.7px;
}
.ubnd-faq-heading p {
  width: 575px;
  margin: 0 auto;
  color: #4a4a4a;
  font-size: 25px;
  line-height: 1.25;
  font-weight: 520;
}

.ubnd-faq-list {
  position: relative;
  z-index: 7;
  width: 778px;
  margin: 0 auto;
  display: grid;
  gap: 18px;
}
.ubnd-faq-card {
  border-radius: 18px;
  background: rgba(255,255,255,.97);
  box-shadow: 0 12px 26px rgba(31,101,178,.14);
  overflow: hidden;
}
.ubnd-faq-question {
  width: 100%;
  min-height: 128px;
  padding: 20px 34px 20px 21px;
  border: 0;
  display: grid;
  grid-template-columns: 103px 1fr 58px;
  align-items: center;
  gap: 24px;
  text-align: left;
  color: #10175c;
  background: transparent;
  cursor: pointer;
}
.ubnd-faq-icon {
  width: 91px;
  height: 91px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #eaf5ff;
  font-size: 57px;
}
.ubnd-faq-text h2 {
  margin: 0;
  color: #10175c;
  font-size: 31px;
  line-height: 1.2;
  font-weight: 920;
  letter-spacing: -.55px;
}
.ubnd-faq-text p {
  margin: 13px 0 0;
  display: flex;
  align-items: flex-start;
  gap: 13px;
  color: #555b68;
  font-size: 20px;
  line-height: 1.38;
  font-weight: 500;
}
.ubnd-faq-text p span {
  width: 10px;
  height: 10px;
  margin-top: 9px;
  border-radius: 50%;
  display: inline-block;
  flex: 0 0 auto;
  background: #1176e7;
}
.ubnd-faq-toggle {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #eaf5ff;
  font-size: 37px;
  justify-self: end;
}

.ubnd-faq-illustration {
  position: relative;
  z-index: 5;
  height: 365px;
  margin-top: -5px;
  overflow: hidden;
}
.ubnd-faq-illustration::before {
  content: "";
  position: absolute;
  left: -34px;
  right: -34px;
  bottom: 26px;
  height: 215px;
  border-radius: 50% 50% 0 0;
  background: linear-gradient(180deg, rgba(217,239,255,.88), rgba(217,239,255,.32));
}
.ubnd-faq-cloud,
.ubnd-faq-cloud::before,
.ubnd-faq-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.94);
}
.ubnd-faq-cloud.cloud-a { left: 83px; top: 103px; width: 93px; height: 17px; }
.ubnd-faq-cloud.cloud-a::before { width: 39px; height: 39px; left: 17px; top: -20px; }
.ubnd-faq-cloud.cloud-a::after { width: 58px; height: 58px; left: 45px; top: -34px; }
.ubnd-faq-cloud.cloud-b { right: 47px; top: 135px; width: 74px; height: 14px; opacity: .88; }
.ubnd-faq-cloud.cloud-b::before { width: 28px; height: 28px; left: 16px; top: -13px; }
.ubnd-faq-cloud.cloud-b::after { width: 37px; height: 37px; left: 39px; top: -22px; }
.ubnd-faq-skyline { position: absolute; display: flex; align-items: flex-end; gap: 10px; opacity: .45; }
.ubnd-faq-skyline.left { left: 36px; bottom: 25px; }
.ubnd-faq-skyline.center { left: 360px; bottom: 40px; }
.ubnd-faq-skyline.right { right: 50px; bottom: 29px; }
.ubnd-faq-skyline i { display: block; width: 40px; height: 88px; border-radius: 11px 11px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.2), rgba(85,154,219,.06)); }
.ubnd-faq-skyline i:nth-child(2) { height: 124px; }
.ubnd-faq-skyline i:nth-child(3) { height: 73px; }
.ubnd-faq-building {
  position: absolute;
  left: 405px;
  bottom: 52px;
  width: 129px;
  height: 103px;
  border-radius: 6px 6px 0 0;
  display: grid;
  place-items: center;
  color: #3f8de1;
  background: linear-gradient(180deg, #d9edff, #9acdf7);
  font-size: 20px;
  line-height: 1.08;
  font-weight: 900;
  text-align: center;
}
.ubnd-faq-building::before {
  content: "";
  position: absolute;
  left: 35px;
  top: -28px;
  width: 54px;
  height: 35px;
  border-radius: 4px;
  background: #66aef1;
}
.ubnd-faq-plant {
  position: absolute;
  z-index: 4;
  left: 40px;
  bottom: 50px;
  width: 62px;
  height: 108px;
}
.ubnd-faq-plant::before,
.ubnd-faq-plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 42px;
  height: 85px;
  border-radius: 38px 38px 0 0;
  background: linear-gradient(180deg, #78d69a, #2da36a);
}
.ubnd-faq-plant::before { left: 0; transform: rotate(-35deg); }
.ubnd-faq-plant::after { right: 0; transform: rotate(31deg); }
.ubnd-faq-tree {
  position: absolute;
  right: 67px;
  bottom: 38px;
  width: 84px;
  height: 108px;
  border-radius: 50% 50% 18px 18px;
  background: linear-gradient(180deg, #9ad5c0, #62b391);
}
.ubnd-faq-person {
  position: absolute;
  z-index: 7;
  left: 184px;
  bottom: 9px;
  width: 270px;
  height: 332px;
}
.ubnd-faq-person .hair { position: absolute; left: 74px; top: 0; width: 93px; height: 72px; border-radius: 66px 66px 28px 28px; background: #071848; }
.ubnd-faq-person .face { position: absolute; left: 90px; top: 55px; width: 61px; height: 78px; border-radius: 45%; background: #ffbd8c; }
.ubnd-faq-person .body { position: absolute; left: 31px; top: 138px; width: 177px; height: 217px; border-radius: 82px 82px 0 0; background: linear-gradient(180deg, #82bdff, #5898ef); }
.ubnd-faq-person .lanyard { position: absolute; left: 106px; top: 149px; width: 2px; height: 94px; background: #0b63bd; transform: rotate(-20deg); box-shadow: 35px 0 0 #0b63bd; }
.ubnd-faq-person .badge { position: absolute; left: 76px; top: 230px; width: 80px; height: 48px; border-radius: 6px; display: grid; place-items: center; color: #fff; background: #095bbf; font-size: 12px; line-height: 1.05; font-weight: 950; text-align: center; }
.ubnd-faq-person .arm-left { position: absolute; left: 18px; top: 235px; width: 113px; height: 27px; border-radius: 999px; background: #75b3fb; transform: rotate(18deg); }
.ubnd-faq-person .arm-right { position: absolute; right: 0; top: 157px; width: 111px; height: 27px; border-radius: 999px; background: #75b3fb; transform: rotate(-65deg); }
.ubnd-faq-person .arm-right::after { content: ""; position: absolute; right: -12px; top: -1px; width: 28px; height: 28px; border-radius: 50%; background: #ffbd8c; }
.ubnd-faq-laptop {
  position: absolute;
  z-index: 8;
  left: 390px;
  bottom: 35px;
  width: 183px;
  height: 104px;
  border-radius: 7px;
  background: linear-gradient(135deg, #667f9e, #243b5f);
  transform: skewX(-7deg);
  box-shadow: 0 13px 22px rgba(0,31,79,.2);
}
.ubnd-faq-laptop::after { content: ""; position: absolute; left: -35px; right: -35px; bottom: -16px; height: 10px; border-radius: 50%; background: #9ac3e8; }
.ubnd-faq-laptop .seal {
  position: absolute;
  left: 78px;
  top: 30px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: rgba(255,255,255,.9);
  border: 2px solid rgba(255,255,255,.75);
  font-size: 28px;
}
.ubnd-faq-help-board {
  position: absolute;
  z-index: 6;
  right: 94px;
  bottom: 116px;
  width: 286px;
  height: 149px;
  border: 3px solid #56a5ff;
  border-radius: 14px;
  background: rgba(255,255,255,.94);
  box-shadow: 0 15px 25px rgba(31,101,178,.12);
}
.ubnd-faq-help-board .board-tail {
  position: absolute;
  left: -25px;
  top: 42px;
  width: 40px;
  height: 28px;
  background: #fff;
  border-left: 3px solid #56a5ff;
  border-bottom: 3px solid #56a5ff;
  transform: skewX(-35deg);
}
.question-badge {
  position: absolute;
  left: 31px;
  top: 25px;
  width: 61px;
  height: 61px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #1679eb, #075bd2);
  font-size: 39px;
  font-weight: 950;
}
.mini-chart {
  position: absolute;
  left: 51px;
  bottom: 24px;
  width: 106px;
  height: 72px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
}
.mini-chart span {
  width: 14px;
  border-radius: 3px 3px 0 0;
  background: linear-gradient(180deg, #1887f0, #badcff);
}
.check-lines {
  position: absolute;
  right: 23px;
  top: 27px;
  width: 115px;
}
.check-lines p {
  margin: 16px 0;
  display: grid;
  grid-template-columns: 25px 1fr;
  align-items: center;
  gap: 11px;
  color: #2bbb7a;
}
.check-lines svg { width: 23px; height: 23px; }
.check-lines span {
  height: 9px;
  border-radius: 999px;
  background: #beddf7;
}

.ubnd-faq-cta {
  position: relative;
  z-index: 9;
  width: calc(100% - 145px);
  height: 93px;
  margin: 5px auto 20px;
  border-radius: 18px;
  display: grid;
  grid-template-columns: 73px 1fr 54px;
  align-items: center;
  padding: 0 40px 0 82px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 14px 25px rgba(0,76,180,.27);
  transition: transform .18s ease, filter .18s ease;
}
.ubnd-faq-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.ubnd-faq-cta svg:first-child { width: 54px; height: 54px; justify-self: center; }
.ubnd-faq-cta span { text-align: center; font-size: 41px; line-height: 1; font-weight: 950; letter-spacing: -.7px; }
.ubnd-faq-cta svg:last-child { width: 45px; height: 45px; justify-self: end; }

.ubnd-faq-footer {
  position: relative;
  z-index: 1;
  min-height: 190px;
  padding: 37px 62px 49px;
  display: grid;
  grid-template-columns: 70px 127px 1px 1fr 1px 185px;
  align-items: center;
  gap: 20px;
  color: #fff;
  background: linear-gradient(180deg, #006ce0, #004fb8);
  overflow: hidden;
}
.ubnd-faq-footer::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: .2;
  background-image: radial-gradient(circle at 20px 20px, #4cc3ff 3px, transparent 4px);
  background-size: 60px 52px;
}
.ubnd-faq-footer-logo { position: relative; z-index: 2; font-size: 66px; }
.ubnd-faq-footer strong { position: relative; z-index: 2; font-size: 47px; line-height: 1; font-weight: 950; }
.ubnd-faq-footer i,
.ubnd-faq-footer b {
  position: relative;
  z-index: 2;
  display: block;
  width: 1px;
  height: 76px;
  background: rgba(255,255,255,.55);
}
.ubnd-faq-footer p {
  position: relative;
  z-index: 2;
  margin: 0;
  font-size: 16px;
  line-height: 1.35;
  font-weight: 800;
}
.ubnd-faq-footer em {
  position: relative;
  z-index: 2;
  font-size: 22px;
  line-height: 1.25;
  font-style: italic;
  font-weight: 520;
}
.ubnd-faq-pager {
  position: absolute;
  left: 50%;
  bottom: 17px;
  transform: translateX(-50%);
  width: 111px;
  height: 34px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: #fff;
  background: rgba(0,68,157,.55);
  border: 1px solid rgba(255,255,255,.28);
  font-size: 20px;
  font-weight: 800;
}

@media (max-width: 820px) {
  .ubnd-faq-page { min-height: 1370px; }
  .ubnd-faq-inner { min-height: 1190px; padding-top: 90px; }
  .ubnd-faq-heading { width: calc(100% - 40px); }
  .ubnd-faq-heading h1 { font-size: clamp(43px, 10vw, 63px); }
  .ubnd-faq-heading p { width: min(100%, 575px); font-size: 21px; }
  .ubnd-faq-list { width: calc(100% - 56px); }
  .ubnd-faq-question { grid-template-columns: 84px 1fr 48px; gap: 18px; }
  .ubnd-faq-icon { width: 75px; height: 75px; font-size: 47px; }
  .ubnd-faq-text h2 { font-size: 25px; }
  .ubnd-faq-illustration { transform: scale(.87); transform-origin: top center; width: 116%; left: -8%; }
  .ubnd-faq-cta { width: calc(100% - 72px); padding-left: 42px; }
  .ubnd-faq-footer { grid-template-columns: 62px 116px 1px 1fr; padding-left: 45px; padding-right: 45px; }
  .ubnd-faq-footer b,
  .ubnd-faq-footer em { display: none; }
}

@media (max-width: 520px) {
  .ubnd-faq-page { min-height: 1230px; }
  .ubnd-faq-inner { min-height: 1090px; padding-top: 72px; }
  .ubnd-faq-pill { width: 128px; height: 48px; font-size: 24px; }
  .ubnd-faq-heading h1 { font-size: 39px; }
  .ubnd-faq-heading p { font-size: 17px; }
  .ubnd-faq-list { width: calc(100% - 34px); gap: 12px; }
  .ubnd-faq-question { min-height: 92px; grid-template-columns: 56px 1fr 38px; gap: 12px; padding: 15px 18px; }
  .ubnd-faq-icon { width: 54px; height: 54px; font-size: 34px; }
  .ubnd-faq-text h2 { font-size: 18px; }
  .ubnd-faq-text p { font-size: 14px; }
  .ubnd-faq-toggle { width: 38px; height: 38px; font-size: 28px; }
  .ubnd-faq-illustration { height: 300px; transform: scale(.68); width: 147%; left: -23.5%; }
  .ubnd-faq-cta { width: calc(100% - 42px); height: 72px; grid-template-columns: 42px 1fr 33px; padding: 0 22px; }
  .ubnd-faq-cta span { font-size: 24px; }
  .ubnd-faq-footer { min-height: 150px; grid-template-columns: 58px 1fr; gap: 12px; padding: 24px 24px 43px; }
  .ubnd-faq-footer-logo { font-size: 56px; }
  .ubnd-faq-footer strong { font-size: 38px; }
  .ubnd-faq-footer i { display: none; }
  .ubnd-faq-footer p { grid-column: 1 / -1; text-align: center; font-size: 13px; }
}
`;
