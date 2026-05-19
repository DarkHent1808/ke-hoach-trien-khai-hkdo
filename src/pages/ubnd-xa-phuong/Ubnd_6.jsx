import React from "react";

const readyCards = [
  {
    icon: <ClipboardListIcon />,
    title: "Chuẩn bị",
    desc: "Rà soát, chuẩn bị nguồn lực và dữ liệu tại địa phương.",
  },
  {
    icon: <PeopleIcon />,
    title: "Tổ chức",
    desc: "Phối hợp, hướng dẫn HKD thực hiện HKDO tại cơ sở.",
  },
  {
    icon: <BarChartIcon />,
    title: "Theo dõi",
    desc: "Theo dõi tiến độ, tổng hợp kết quả, báo cáo kịp thời.",
  },
];

export default function UBNDReadyPage() {
  return (
    <section id="ubnd-san-sang-trien-khai" className="ubnd-ready-page" aria-label="Sẵn sàng tổ chức triển khai tại địa bàn">
      <style>{css}</style>

      <div className="ubnd-ready-inner">
        <section className="ubnd-ready-heading">
          <div className="ubnd-ready-pill">MÀN 6</div>
          <div className="ubnd-ready-star"><span /><StarIcon /><span /></div>
          <h1>Sẵn sàng tổ chức triển khai tại địa bàn</h1>
          <p>Địa phương đã có vai trò, checklist và quy trình để phối hợp triển khai HKDO hiệu quả tại cơ sở.</p>
        </section>

        <section className="ubnd-ready-card-grid" aria-label="Ba năng lực tổ chức triển khai">
          {readyCards.map((card) => (
            <article className="ubnd-ready-card" key={card.title}>
              <div className="ubnd-ready-card-icon">{card.icon}</div>
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </article>
          ))}
        </section>

        <ReadyIllustration />

        <div className="ubnd-ready-note">
          <TargetIcon />
          <strong>Bắt đầu từ đúng vai trò của địa phương</strong>
        </div>

        <a href="#ubnd-checklist" className="ubnd-ready-cta">
          <ChecklistIcon />
          <span>Xem checklist</span>
          <ArrowRightIcon />
        </a>
      </div>

      <footer className="ubnd-ready-footer">
        <strong>HKD<CheckCircleIcon /></strong>
        <i />
        <p>Hiện diện số - Nâng tầm kinh doanh<br />Minh bạch - Hiệu quả - Phát triển bền vững</p>
      </footer>
    </section>
  );
}

function ReadyIllustration() {
  return (
    <section className="ubnd-ready-illustration" aria-hidden="true">
      <div className="ubnd-ready-cloud cloud-a" />
      <div className="ubnd-ready-cloud cloud-b" />
      <div className="ubnd-ready-cloud cloud-c" />
      <div className="ubnd-ready-skyline left"><i /><i /><i /></div>
      <div className="ubnd-ready-skyline right"><i /><i /><i /></div>

      <div className="ubnd-ready-building">
        <div className="flag-pole" />
        <div className="flag-vn">★</div>
        <div className="roof"><span>★</span></div>
        <div className="body"><div className="columns"><i /><i /><i /></div></div>
        <div className="steps" />
      </div>

      <div className="ubnd-ready-map">
        {Array.from({ length: 38 }).map((_, index) => {
          const row = Math.floor(index / 7);
          const col = index % 7;
          const x = 12 + col * 27 + (row % 2) * 9;
          const y = 12 + row * 25 + (col % 2) * 4;
          const fill = ["#2f8ff0", "#61aff4", "#8ec8f8", "#bfe0fb"][index % 4];
          return <path key={index} d={`M${x},${y} l20,-9 l19,11 l-5,20 l-21,7 l-18,-12 z`} fill={fill} stroke="#fff" strokeWidth="2" />;
        })}
        <span className="map-pin one" />
        <span className="map-pin two" />
        <span className="map-pin three" />
        <div className="map-badge">CỘNG ĐỒNG<br />KẾT NỐI - HỖ TRỢ<br />HIỆU QUẢ</div>
        <svg className="route-line" viewBox="0 0 220 170" fill="none">
          <path d="M38 114C78 72 116 129 154 83c21-25 31-33 50-38" stroke="#fff" strokeWidth="3" strokeDasharray="8 8" strokeLinecap="round" />
        </svg>
      </div>

      <div className="ubnd-ready-team">
        <div className="person woman">
          <div className="hair" /><div className="face" /><div className="body" /><div className="folder">HKDO</div>
        </div>
        <div className="person man-main">
          <div className="hair" /><div className="face" /><div className="body" /><div className="arm" /><div className="tablet" />
        </div>
        <div className="person man-small">
          <div className="hair" /><div className="face" /><div className="body" /><div className="glasses" />
        </div>
        <div className="table" />
        <div className="nameplate">UBND<br />XÃ/PHƯỜNG</div>
        <div className="clipboard">
          <strong>CHECKLIST</strong>
          <p><CheckSmallIcon /><span /></p>
          <p><CheckSmallIcon /><span /></p>
          <p><CheckSmallIcon /><span /></p>
        </div>
      </div>

      <div className="ubnd-ready-phone">
        <div className="phone-speaker" />
        <div className="phone-top"><MenuIcon /><strong>HKDO</strong><BellIcon /></div>
        <div className="phone-section-title">Tổng quan triển khai</div>
        <div className="phone-stat-grid">
          <div><small>Hộ kinh doanh</small><b>1.248</b></div>
          <div><small>Đã HKDO</small><b>892</b></div>
          <div><small>Tỷ lệ hoàn thành</small><span></span></div>
        </div>
        <div className="phone-bars">
          <p>Tiến độ theo thôn/tổ</p>
          {[88, 70, 58, 38].map((width, index) => <i key={index}><em style={{ width: `${width}%` }} /></i>)}
        </div>
        <div className="phone-tasks">
          <p>Công việc cần làm</p>
          {[
            ["Rà soát hộ kinh doanh", true],
            ["Tuyên truyền, hướng dẫn", true],
            ["Hỗ trợ HKD thực hiện HKDO", false],
            ["Theo dõi, tổng hợp báo cáo", false],
          ].map(([label, done]) => (
            <div key={label}><span className={done ? "done" : ""}>{done ? <CheckSmallIcon /> : null}</span><b>{label}</b></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ArrowRightIcon() { return <Svg><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function StarIcon() { return <Svg><path d="m12 3 2.6 5.4 5.9.8-4.2 4.1 1 5.8L12 16.3 6.7 19.1l1-5.8-4.2-4.1 5.9-.8L12 3Z" fill="currentColor" /></Svg>; }
function ClipboardListIcon() { return <Svg><path d="M8 5h8M9 3h6v4H9V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6h12v15H6V6Z" stroke="currentColor" strokeWidth="2.3"/><path d="m9 12 1.4 1.4L13 10M9 17h6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function PeopleIcon() { return <Svg><circle cx="12" cy="8" r="3.2" fill="currentColor"/><circle cx="5.7" cy="10" r="2.7" fill="currentColor" opacity=".78"/><circle cx="18.3" cy="10" r="2.7" fill="currentColor" opacity=".78"/><path d="M4 21c.5-4.5 3-6.7 8-6.7s7.5 2.2 8 6.7H4Z" fill="currentColor"/></Svg>; }
function BarChartIcon() { return <Svg><path d="M5 19V11M10 19V7M15 19V4M20 19V2" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/><path d="M4 20h17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></Svg>; }
function TargetIcon() { return <Svg><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.4"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.4"/><path d="M15 9 21 3M18 3h3v3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function ChecklistIcon() { return <Svg><path d="M8 5h8M9 3h6v4H9V3Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6h12v15H6V6Z" stroke="currentColor" strokeWidth="2.2"/><path d="m9 12 1.5 1.5L14 10M9 17h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function CheckCircleIcon() { return <Svg><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5"/><path d="m8 12 2.5 2.5L16 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function CheckSmallIcon() { return <Svg><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function MenuIcon() { return <Svg><path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></Svg>; }
function BellIcon() { return <Svg><path d="M6 10a6 6 0 0 1 12 0c0 5 2 5 2 8H4c0-3 2-3 2-8Z" fill="currentColor"/><path d="M9.5 19a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="2"/></Svg>; }

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

.ubnd-ready-page {
  position: relative;
  width: 100%;
  min-height: 1535px;
  overflow: hidden;
  background: linear-gradient(180deg, #f8fdff 0%, #eef8ff 88%, #f7fcff 100%);
}
.ubnd-ready-inner {
  position: relative;
  z-index: 2;
  min-height: 1405px;
  padding-top: 110px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 0%, rgba(255,255,255,.96) 0 16%, rgba(255,255,255,0) 40%),
    linear-gradient(180deg, #fbfdff 0%, #edf8ff 70%, #f8fdff 100%);
}
.ubnd-ready-inner::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 0 42%, rgba(255,255,255,.86), transparent 16%),
    radial-gradient(circle at 100% 51%, rgba(255,255,255,.72), transparent 17%);
  pointer-events: none;
}

.ubnd-ready-heading {
  position: relative;
  z-index: 5;
  width: 760px;
  margin: 0 auto 25px;
  text-align: center;
}
.ubnd-ready-pill {
  width: 151px;
  height: 55px;
  margin: 0 auto 22px;
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
.ubnd-ready-star {
  width: 124px;
  margin: 0 auto 17px;
  display: grid;
  grid-template-columns: 1fr 28px 1fr;
  align-items: center;
  gap: 10px;
  color: #176fe2;
}
.ubnd-ready-star span {
  height: 3px;
  border-radius: 999px;
  background: #b8d7fb;
  position: relative;
}
.ubnd-ready-star span::after {
  content: "";
  position: absolute;
  top: -3px;
  right: -9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #7fb6f4;
}
.ubnd-ready-star span:last-child::after { left: -9px; right: auto; }
.ubnd-ready-star svg { width: 28px; height: 28px; }
.ubnd-ready-heading h1 {
  width: 690px;
  margin: 0 auto 19px;
  color: #10175c;
  font-size: 64px;
  line-height: 1.16;
  font-weight: 950;
  letter-spacing: -2.9px;
}
.ubnd-ready-heading p {
  width: 590px;
  margin: 0 auto;
  color: #333333;
  font-size: 24px;
  line-height: 1.35;
  font-weight: 500;
}

.ubnd-ready-card-grid {
  position: relative;
  z-index: 6;
  width: 760px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 17px;
}
.ubnd-ready-card {
  min-height: 250px;
  padding: 27px 24px 20px;
  border-radius: 18px;
  text-align: center;
  background: rgba(255,255,255,.96);
  border: 1px solid #bedcff;
  box-shadow: 0 13px 27px rgba(31,101,178,.12);
}
.ubnd-ready-card-icon {
  width: 88px;
  height: 88px;
  margin: 0 auto 18px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #eaf5ff;
  font-size: 62px;
}
.ubnd-ready-card h2 {
  margin: 0 0 12px;
  color: #0e2367;
  font-size: 28px;
  line-height: 1.1;
  font-weight: 950;
}
.ubnd-ready-card p {
  margin: 0;
  color: #263252;
  font-size: 18px;
  line-height: 1.36;
  font-weight: 520;
}

.ubnd-ready-illustration {
  position: relative;
  z-index: 5;
  height: 557px;
  margin-top: 4px;
  overflow: hidden;
}
.ubnd-ready-cloud,
.ubnd-ready-cloud::before,
.ubnd-ready-cloud::after {
  position: absolute;
  content: "";
  border-radius: 999px;
  background: rgba(255,255,255,.9);
}
.ubnd-ready-cloud.cloud-a { left: 148px; top: 58px; width: 88px; height: 16px; }
.ubnd-ready-cloud.cloud-a::before { width: 36px; height: 36px; left: 17px; top: -18px; }
.ubnd-ready-cloud.cloud-a::after { width: 51px; height: 51px; left: 44px; top: -30px; }
.ubnd-ready-cloud.cloud-b { right: 36px; top: 58px; width: 91px; height: 16px; }
.ubnd-ready-cloud.cloud-b::before { width: 36px; height: 36px; left: 17px; top: -18px; }
.ubnd-ready-cloud.cloud-b::after { width: 51px; height: 51px; left: 44px; top: -30px; }
.ubnd-ready-cloud.cloud-c { left: 336px; top: 206px; width: 69px; height: 13px; opacity: .75; }
.ubnd-ready-cloud.cloud-c::before { width: 28px; height: 28px; left: 14px; top: -13px; }
.ubnd-ready-cloud.cloud-c::after { width: 37px; height: 37px; left: 35px; top: -21px; }
.ubnd-ready-skyline { position: absolute; display: flex; align-items: flex-end; gap: 11px; opacity: .42; }
.ubnd-ready-skyline.left { left: 57px; bottom: 102px; }
.ubnd-ready-skyline.right { right: 22px; bottom: 98px; }
.ubnd-ready-skyline i { display: block; width: 38px; height: 92px; border-radius: 11px 11px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.2), rgba(85,154,219,.06)); }
.ubnd-ready-skyline i:nth-child(2) { height: 132px; }
.ubnd-ready-skyline i:nth-child(3) { height: 82px; }
.ubnd-ready-building {
  position: absolute;
  left: 0;
  bottom: 83px;
  width: 238px;
  height: 245px;
  filter: drop-shadow(0 13px 17px rgba(42,91,150,.13));
}
.ubnd-ready-building .flag-pole { position: absolute; left: 78px; top: 15px; width: 4px; height: 83px; background: #8d4b17; border-radius: 999px; }
.ubnd-ready-building .flag-vn { position: absolute; left: 82px; top: 27px; width: 61px; height: 40px; border-radius: 2px 12px 12px 2px; display: grid; place-items: center; color: #ffe33b; background: #e93c20; transform: skewY(6deg); }
.ubnd-ready-building .roof { position: absolute; left: 0; top: 105px; width: 210px; height: 78px; clip-path: polygon(50% 0, 100% 72%, 92% 100%, 8% 100%, 0 72%); background: linear-gradient(180deg, #fff1c7, #f2c36d 72%, #d99a3a); display: grid; place-items: center; padding-top: 31px; color: #ffe33b; }
.ubnd-ready-building .roof span { width: 50px; height: 50px; border-radius: 50%; display: grid; place-items: center; background: #e93c20; }
.ubnd-ready-building .body { position: absolute; left: -6px; top: 170px; width: 222px; height: 83px; background: linear-gradient(180deg, #ffe2a4, #f6c878); }
.ubnd-ready-building .columns { display: grid; grid-template-columns: repeat(3,1fr); gap: 15px; padding: 8px 50px 0; }
.ubnd-ready-building .columns i { height: 78px; border-radius: 4px 4px 0 0; background: linear-gradient(90deg, #fff0c0, #eeb85f, #ffecc1); }
.ubnd-ready-building .steps { position: absolute; left: 17px; right: 28px; bottom: -7px; height: 20px; border-radius: 4px; background: #dceafa; }

.ubnd-ready-map {
  position: absolute;
  z-index: 4;
  left: 393px;
  top: 111px;
  width: 260px;
  height: 220px;
}
.ubnd-ready-map svg:first-child { width: 260px; height: 220px; }
.ubnd-ready-map .route-line {
  position: absolute;
  inset: 20px 18px;
  width: 220px;
  height: 170px;
}
.map-badge {
  position: absolute;
  left: 91px;
  top: 61px;
  width: 105px;
  height: 105px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  color: #fff;
  text-align: center;
  background: rgba(46,137,230,.86);
  border: 2px solid rgba(255,255,255,.35);
  font-size: 13px;
  line-height: 1.22;
  font-weight: 950;
}
.map-badge::before {
  content: "";
  width: 36px;
  height: 26px;
  margin-bottom: -23px;
  background: currentColor;
  opacity: .9;
  clip-path: polygon(50% 0, 95% 35%, 78% 100%, 22% 100%, 5% 35%);
}
.map-pin {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 4px;
  transform: rotate(-45deg);
  background: #2d8cf0;
  z-index: 2;
}
.map-pin::after { content: ""; position: absolute; inset: 9px; border-radius: 50%; background: #fff; }
.map-pin.one { left: 57px; top: 77px; }
.map-pin.two { right: 25px; top: 91px; }
.map-pin.three { left: 145px; bottom: 17px; }

.ubnd-ready-team {
  position: absolute;
  z-index: 6;
  left: 28px;
  bottom: 26px;
  width: 545px;
  height: 340px;
}
.ubnd-ready-team .person { position: absolute; bottom: 53px; }
.ubnd-ready-team .woman { left: 37px; width: 116px; height: 236px; }
.ubnd-ready-team .woman .hair { position: absolute; left: 19px; top: 0; width: 78px; height: 99px; border-radius: 50px 50px 31px 31px; background: #061746; }
.ubnd-ready-team .woman .face { position: absolute; left: 55px; top: 42px; width: 47px; height: 59px; border-radius: 44%; background: #ffbd8c; }
.ubnd-ready-team .woman .body { position: absolute; left: 15px; top: 106px; width: 91px; height: 138px; border-radius: 40px 40px 0 0; background: linear-gradient(160deg, #0e7be4, #0752bb); }
.ubnd-ready-team .woman .folder { position: absolute; left: 23px; top: 155px; width: 65px; height: 48px; border-radius: 5px; display: grid; place-items: center; color: #fff; background: #194e90; font-size: 13px; font-weight: 900; transform: rotate(8deg); }
.ubnd-ready-team .man-main { left: 148px; width: 142px; height: 261px; }
.ubnd-ready-team .man-main .hair { position: absolute; left: 45px; top: 0; width: 70px; height: 51px; border-radius: 50px 50px 21px 21px; background: #061746; }
.ubnd-ready-team .man-main .face { position: absolute; left: 58px; top: 42px; width: 51px; height: 65px; border-radius: 45%; background: #ffbd8c; }
.ubnd-ready-team .man-main .body { position: absolute; left: 34px; top: 113px; width: 92px; height: 151px; border-radius: 38px 38px 0 0; background: #8ac2ff; }
.ubnd-ready-team .man-main .arm { position: absolute; right: -38px; top: 130px; width: 94px; height: 25px; border-radius: 999px; background: #8ac2ff; transform: rotate(-23deg); }
.ubnd-ready-team .man-main .arm::after { content: ""; position: absolute; right: -11px; top: -2px; width: 28px; height: 28px; border-radius: 50%; background: #ffbd8c; }
.ubnd-ready-team .man-main .tablet { position: absolute; right: -18px; top: 157px; width: 75px; height: 56px; border-radius: 8px; background: #455c7d; transform: rotate(8deg); }
.ubnd-ready-team .man-small { left: 304px; width: 116px; height: 220px; }
.ubnd-ready-team .man-small .hair { position: absolute; left: 34px; top: 2px; width: 61px; height: 42px; border-radius: 45px 45px 18px 18px; background: #061746; }
.ubnd-ready-team .man-small .face { position: absolute; left: 44px; top: 38px; width: 47px; height: 59px; border-radius: 45%; background: #ffbd8c; }
.ubnd-ready-team .man-small .body { position: absolute; left: 21px; top: 105px; width: 91px; height: 126px; border-radius: 38px 38px 0 0; background: #fff; }
.ubnd-ready-team .man-small .glasses { position: absolute; left: 41px; top: 64px; width: 55px; height: 12px; border-top: 3px solid #122057; }
.ubnd-ready-team .table { position: absolute; left: 0; right: 9px; bottom: 7px; height: 68px; border-radius: 50% 50% 0 0; background: linear-gradient(180deg, #c5833f, #8b5727); }
.nameplate {
  position: absolute;
  left: 24px;
  bottom: 0;
  width: 158px;
  height: 62px;
  border-radius: 8px 8px 0 0;
  display: grid;
  place-items: center;
  color: #fff;
  background: #0b67cb;
  font-size: 19px;
  line-height: 1.05;
  font-weight: 950;
  text-align: center;
  transform: perspective(120px) rotateX(14deg);
}
.clipboard {
  position: absolute;
  right: 3px;
  bottom: 2px;
  width: 123px;
  height: 132px;
  padding: 20px 18px 12px;
  border-radius: 8px;
  background: #fff;
  border: 4px solid #d6e7f7;
  box-shadow: 0 12px 18px rgba(0,42,88,.11);
  transform: rotate(3deg);
}
.clipboard strong { display: block; color: #126fe5; font-size: 13px; font-weight: 950; margin-bottom: 12px; text-align: center; }
.clipboard p { margin: 11px 0; display: grid; grid-template-columns: 22px 1fr; align-items: center; gap: 8px; color: #21b76b; }
.clipboard p span { height: 7px; border-radius: 999px; background: #bdddf8; }

.ubnd-ready-phone {
  position: absolute;
  z-index: 7;
  right: 26px;
  bottom: 34px;
  width: 268px;
  height: 470px;
  border-radius: 34px;
  padding: 52px 17px 18px;
  color: #16307a;
  background: #0b1b3d;
  box-shadow: 0 24px 36px rgba(0,35,90,.3);
  transform: rotate(7deg);
}
.ubnd-ready-phone::before {
  content: "";
  position: absolute;
  inset: 12px;
  border-radius: 25px;
  background: #f8fbff;
}
.phone-speaker {
  position: absolute;
  z-index: 3;
  left: 98px;
  top: 18px;
  width: 72px;
  height: 20px;
  border-radius: 0 0 12px 12px;
  background: #0b1b3d;
}
.phone-top,
.phone-section-title,
.phone-stat-grid,
.phone-bars,
.phone-tasks {
  position: relative;
  z-index: 2;
}
.phone-top {
  height: 50px;
  margin: -39px -5px 12px;
  padding: 14px 12px;
  border-radius: 22px 22px 0 0;
  display: grid;
  grid-template-columns: 25px 1fr 25px;
  align-items: center;
  color: #fff;
  background: linear-gradient(180deg, #1a78ed, #0a53c4);
}
.phone-top strong { font-size: 17px; font-weight: 950; }
.phone-section-title { font-size: 11px; font-weight: 900; margin-bottom: 8px; }
.phone-stat-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 6px; margin-bottom: 14px; }
.phone-stat-grid div {
  min-height: 78px;
  padding: 8px 5px;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0 5px 14px rgba(48,99,166,.11);
  text-align: center;
}
.phone-stat-grid small { display: block; color: #5b6a94; font-size: 8px; line-height: 1.25; font-weight: 800; min-height: 20px; }
.phone-stat-grid b { display: block; margin-top: 10px; color: #0b63d4; font-size: 20px; line-height: 1; }
.phone-stat-grid div:nth-child(2) b { color: #18a56c; }
.phone-stat-grid span { display: grid; place-items: center; width: 49px; height: 49px; margin: 2px auto 0; border-radius: 50%; color: #0b63d4; font-size: 12px; font-weight: 950; background: conic-gradient(#176fe2 0 71.6%, #dbeaf9 71.6% 100%); position: relative; }
.phone-stat-grid span::before { content: ""; position: absolute; inset: 9px; border-radius: 50%; background: #fff; }
.phone-stat-grid span { isolation: isolate; }
.phone-stat-grid span::after { content: "71,6%"; position: relative; z-index: 1; }
.phone-bars { margin-bottom: 12px; }
.phone-bars p,
.phone-tasks p { margin: 0 0 8px; color: #20336b; font-size: 10px; font-weight: 900; }
.phone-bars i { display: block; height: 9px; margin: 8px 0; border-radius: 999px; background: #dce9f8; overflow: hidden; }
.phone-bars em { display: block; height: 100%; border-radius: inherit; background: #1a70e5; }
.phone-tasks div { display: grid; grid-template-columns: 18px 1fr 18px; align-items: center; gap: 7px; margin: 7px 0; font-size: 9px; font-weight: 700; color: #34436f; }
.phone-tasks div::after { content: ""; width: 13px; height: 13px; border-radius: 50%; border: 2px solid #b8d3f0; justify-self: end; }
.phone-tasks span { width: 13px; height: 13px; border-radius: 50%; border: 1px solid #b8d3f0; display: grid; place-items: center; color: #0fa866; }
.phone-tasks span.done { border-color: #0fa866; }
.phone-tasks span svg { width: 12px; height: 12px; }

.ubnd-ready-note {
  position: relative;
  z-index: 8;
  width: 555px;
  height: 57px;
  margin: -29px auto 0;
  border-radius: 18px;
  display: grid;
  grid-template-columns: 58px 1fr;
  align-items: center;
  padding: 0 32px 0 51px;
  color: #075bd2;
  background: rgba(255,255,255,.96);
  box-shadow: 0 9px 20px rgba(31,101,178,.13);
}
.ubnd-ready-note svg { width: 42px; height: 42px; }
.ubnd-ready-note strong { font-size: 22px; line-height: 1; font-weight: 950; }

.ubnd-ready-cta {
  position: relative;
  z-index: 8;
  width: calc(100% - 128px);
  height: 118px;
  margin: 16px auto 0;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 105px 1fr 70px;
  align-items: center;
  padding: 0 61px 0 109px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  border: 5px solid rgba(255,255,255,.7);
  box-shadow: 0 14px 25px rgba(0,76,180,.27), inset 0 0 0 2px rgba(255,255,255,.24);
  transition: transform .18s ease, filter .18s ease;
}
.ubnd-ready-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.ubnd-ready-cta svg:first-child { width: 70px; height: 70px; justify-self: center; }
.ubnd-ready-cta span { text-align: center; font-size: 54px; line-height: 1; font-weight: 950; letter-spacing: -1px; }
.ubnd-ready-cta svg:last-child { width: 54px; height: 54px; justify-self: end; }

.ubnd-ready-footer {
  min-height: 130px;
  padding: 24px 175px 32px;
  display: grid;
  grid-template-columns: 185px 1px 1fr;
  align-items: center;
  gap: 20px;
  color: #075bd2;
  background: rgba(255,255,255,.55);
}
.ubnd-ready-footer strong {
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 51px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -1.4px;
}
.ubnd-ready-footer strong svg { width: 45px; height: 45px; }
.ubnd-ready-footer i { width: 1px; height: 58px; background: rgba(13,91,200,.42); }
.ubnd-ready-footer p { margin: 0; font-size: 18px; line-height: 1.35; font-weight: 650; }

@media (max-width: 820px) {
  .ubnd-ready-page { min-height: 1370px; }
  .ubnd-ready-inner { min-height: 1245px; padding-top: 82px; }
  .ubnd-ready-heading { width: calc(100% - 40px); }
  .ubnd-ready-heading h1 { width: 100%; font-size: clamp(43px, 10vw, 64px); }
  .ubnd-ready-heading p { width: min(100%, 590px); font-size: 21px; }
  .ubnd-ready-card-grid { width: calc(100% - 56px); }
  .ubnd-ready-card { min-height: 224px; }
  .ubnd-ready-illustration { transform: scale(.86); transform-origin: top center; width: 116%; left: -8%; }
  .ubnd-ready-note { width: calc(100% - 160px); }
  .ubnd-ready-cta { width: calc(100% - 72px); padding-left: 70px; }
  .ubnd-ready-footer { padding-left: 70px; padding-right: 70px; }
}

@media (max-width: 520px) {
  .ubnd-ready-page { min-height: 1235px; }
  .ubnd-ready-inner { min-height: 1130px; padding-top: 68px; }
  .ubnd-ready-pill { width: 128px; height: 48px; font-size: 24px; }
  .ubnd-ready-heading h1 { font-size: 38px; }
  .ubnd-ready-heading p { font-size: 17px; }
  .ubnd-ready-card-grid { width: calc(100% - 34px); grid-template-columns: 1fr; gap: 12px; }
  .ubnd-ready-card { min-height: auto; display: grid; grid-template-columns: 66px 1fr; text-align: left; gap: 8px 15px; padding: 16px; }
  .ubnd-ready-card-icon { grid-row: 1 / 3; width: 58px; height: 58px; font-size: 39px; margin: 0; }
  .ubnd-ready-card h2 { font-size: 22px; }
  .ubnd-ready-card p { font-size: 15px; }
  .ubnd-ready-illustration { height: 430px; transform: scale(.64); width: 150%; left: -25%; }
  .ubnd-ready-note { width: calc(100% - 42px); padding: 0 20px; grid-template-columns: 42px 1fr; }
  .ubnd-ready-note strong { font-size: 16px; }
  .ubnd-ready-cta { width: calc(100% - 42px); height: 78px; grid-template-columns: 45px 1fr 34px; padding: 0 24px; }
  .ubnd-ready-cta svg:first-child { width: 42px; height: 42px; }
  .ubnd-ready-cta span { font-size: 28px; }
  .ubnd-ready-footer { min-height: 115px; grid-template-columns: 1fr; gap: 8px; padding: 20px 24px; text-align: center; }
  .ubnd-ready-footer strong { justify-content: center; font-size: 40px; }
  .ubnd-ready-footer i { display: none; }
  .ubnd-ready-footer p { font-size: 14px; }
}
`;
