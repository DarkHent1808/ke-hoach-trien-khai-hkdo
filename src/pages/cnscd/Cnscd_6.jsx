import React from "react";

const readySteps = [
  {
    tone: "blue",
    icon: <ClipboardUserIcon />,
    title: "Chuẩn bị",
    desc: "Nắm danh sách hộ, công cụ và thông điệp",
  },
  {
    tone: "green",
    icon: <QrSupportImage />,
    title: "Hỗ trợ",
    desc: "Hướng dẫn hộ thực hiện và bàn giao QR",
  },
  {
    tone: "purple",
    icon: <DashboardIcon />,
    title: "Theo dõi",
    desc: "Cập nhật trạng thái hộ, nhắc việc, tổng hợp kết quả",
  },
];

export default function CnscdReadyPage() {
  return (
    <section className="cnscd-ready-page" aria-label="Sẵn sàng hỗ trợ hộ kinh doanh tại địa bàn">
      <style>{css}</style>

      <section className="cnscd-ready-hero">
        <div className="cnscd-ready-pill">MÀN 6</div>
        <h1>Sẵn sàng hỗ trợ hộ kinh doanh tại địa bàn</h1>
        <p>Tổ CNSCĐ đã có vai trò, quy trình và công cụ để đồng hành cùng hộ kinh doanh trong triển khai HKDO.</p>
        <div className="cnscd-ready-city"><CityShieldIcon /></div>
      </section>

      <section className="cnscd-ready-card-grid" aria-label="Ba phần việc chính của tổ CNSCĐ">
        {readySteps.map((step, index) => (
          <article className={`cnscd-ready-card ${step.tone}`} key={step.title}>
            <div className="cnscd-ready-number">{index + 1}</div>
            <div className="cnscd-ready-icon">{step.icon}</div>
            <h2>{step.title}</h2>
            <p>{step.desc}</p>
          </article>
        ))}
      </section>

      <ReadySupportIllustration />

      <a href="#cnscd-bao-cao-trang-thai" className="cnscd-ready-cta">
        <ReportIcon />
        <span>Báo cáo trạng thái hộ</span>
      </a>
    </section>
  );
}

function ReadySupportIllustration() {
  return (
    <section className="cnscd-ready-illustration" aria-hidden="true">
      <div className="cnscd-ready-shop">
        <div className="awning" />
        <div className="shelves">{Array.from({ length: 20 }).map((_, index) => <i key={index} />)}</div>
      </div>

      <div className="support-team">
        <div className="team-member man">
          <div className="hair" />
          <div className="face" />
          <div className="body" />
          <div className="arm" />
        </div>
        <div className="team-member woman">
          <div className="hair" />
          <div className="face" />
          <div className="body" />
          <div className="arm" />
        </div>
        <div className="business-owner">
          <div className="hair" />
          <div className="face" />
          <div className="body" />
          <div className="apron" />
        </div>
        <div className="table" />
        <div className="book">HKDO</div>
        <div className="clipboard">
          <p><CheckSmallIcon /><span /></p>
          <p><CheckSmallIcon /><span /></p>
          <p><CheckSmallIcon /><span /></p>
        </div>
        <div className="qr-terminal">
          <strong>VNPAY-QR</strong>
          <QrMini />
          <small>THANH TOÁN<br />QUÉT QR</small>
        </div>
      </div>

      <div className="cnscd-ready-phone">
        <div className="phone-speaker" />
        <div className="phone-head">
          <span>‹</span>
          <strong>Tổng quan hộ kinh doanh</strong>
          <BellIcon />
        </div>
        <div className="phone-stats">
          <div><small>Tổng số hộ</small><b>125</b></div>
          <div><small>Đã hỗ trợ</small><b>78</b></div>
          <div><small>Đang hỗ trợ</small><b>32</b></div>
          <div><small>Chưa hỗ trợ</small><b>15</b></div>
        </div>
        <div className="phone-search"><span>Tìm kiếm hộ kinh doanh...</span><button>Lọc</button></div>
        <div className="phone-list">
          {[
            ["Tiệm tạp hóa Minh Châu", "123 Đường Lê Lợi, P.1, Q.1", "Đã hỗ trợ", "done"],
            ["Quán cà phê Phố Nhỏ", "45 Nguyễn Huệ, P. Bến Nghé, Q.1", "Đang hỗ trợ", "progress"],
            ["Cửa hàng Thành Phát", "67 Trần Hưng Đạo, P.7, Q.5", "Chờ xác nhận", "wait"],
            ["Tiệm bánh Ngọt Ngào", "89 Hai Bà Trưng, P. Tân Định, Q.1", "Chưa hỗ trợ", "none"],
          ].map(([name, address, status, tone]) => (
            <div className="phone-row" key={name}>
              <i><StoreIcon /></i>
              <p><strong>{name}</strong><small>{address}</small></p>
              <em className={tone}>{status}</em>
            </div>
          ))}
        </div>
        <div className="phone-more">Xem thêm⌄</div>
      </div>
    </section>
  );
}

function QrMini() {
  return (
    <svg className="qr-mini" viewBox="0 0 78 78" fill="none">
      <rect width="78" height="78" rx="5" fill="#fff" />
      {[
        [8, 8], [15, 8], [22, 8], [8, 15], [22, 15], [8, 22], [15, 22], [22, 22],
        [48, 8], [55, 8], [62, 8], [48, 15], [62, 15], [48, 22], [55, 22], [62, 22],
        [8, 48], [15, 48], [22, 48], [8, 55], [22, 55], [8, 62], [15, 62], [22, 62],
        [36, 34], [43, 34], [57, 34], [36, 41], [50, 41], [64, 41], [43, 48], [57, 48], [36, 55], [50, 55], [64, 55], [43, 62], [57, 62],
      ].map(([x, y], index) => <rect key={index} x={x} y={y} width="6" height="6" fill="#073f92" />)}
    </svg>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ClipboardUserIcon() { return <Svg><path d="M8 5h8M9 3h6v4H9V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6h12v15H6V6Z" stroke="currentColor" strokeWidth="2.3"/><circle cx="15" cy="14" r="3" fill="currentColor"/><path d="M10 17c.4-2.5 1.7-3.8 4-3.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }
function QrSupportImage() { return <Svg viewBox="0 0 90 90"><circle cx="27" cy="39" r="13" fill="currentColor" opacity=".85"/><circle cx="64" cy="38" r="12" fill="#31ad63" opacity=".85"/><rect x="26" y="38" width="40" height="34" rx="5" fill="#fff" stroke="currentColor" strokeWidth="3"/><path d="M34 46h7v7h-7v-7Zm16 0h7v7h-7v-7ZM34 59h7v7h-7v-7Zm16 3h7v7h-7v-7Z" fill="currentColor"/></Svg>; }
function DashboardIcon() { return <Svg><rect x="3" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2.3"/><path d="M7 15V11M12 15V8M17 15v-5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/><path d="M8 21h8" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function CityShieldIcon() { return <Svg viewBox="0 0 180 120"><path d="M20 110V55h30v55M60 110V35h36v75M106 110V62h23v48M137 110V46h27v64" fill="currentColor" opacity=".22"/><path d="M97 12 66 24v24c0 24 13 41 31 50 18-9 31-26 31-50V24L97 12Z" fill="currentColor" opacity=".85"/><path d="m82 52 10 10 22-25" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 110h168" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity=".25"/></Svg>; }
function ReportIcon() { return <Svg><path d="M6 3h8l4 4v14H6V3Z" fill="currentColor" opacity=".2"/><path d="M6 3h8l4 4v14H6V3Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/><path d="M14 3v5h4M9 16V12M13 16V9M17 16v-5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></Svg>; }
function CheckSmallIcon() { return <Svg><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function BellIcon() { return <Svg><path d="M6 10a6 6 0 0 1 12 0c0 5 2 5 2 8H4c0-3 2-3 2-8Z" fill="currentColor"/><path d="M9.5 19a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="2"/></Svg>; }
function StoreIcon() { return <Svg><path d="M4 10h16l-2-5H6l-2 5Z" fill="currentColor" opacity=".25"/><path d="M5 10v10h14V10M8 20v-6h4v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></Svg>; }

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

.cnscd-ready-page {
  position: relative;
  width: 100%;
  min-height: 1378px;
  overflow: hidden;
  background:
    radial-gradient(circle at 78% 11%, rgba(255,255,255,.98) 0 14%, transparent 35%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 64%, #f9fdff 100%);
}
.cnscd-ready-hero {
  position: relative;
  z-index: 5;
  padding: 39px 42px 0;
  min-height: 420px;
}
.cnscd-ready-pill {
  width: 139px;
  height: 49px;
  margin-bottom: 30px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #1679eb, #075bd2);
  box-shadow: 0 10px 21px rgba(7,91,210,.25);
  font-size: 27px;
  line-height: 1;
  font-weight: 950;
}
.cnscd-ready-hero h1 {
  width: 820px;
  margin: 0 0 23px;
  color: #10175c;
  font-size: 59px;
  line-height: 1.13;
  font-weight: 950;
  letter-spacing: -2.7px;
}
.cnscd-ready-hero p {
  width: 690px;
  margin: 0;
  color: #262b3a;
  font-size: 26px;
  line-height: 1.42;
  font-weight: 500;
}
.cnscd-ready-city {
  position: absolute;
  right: 30px;
  top: 48px;
  width: 238px;
  height: 178px;
  color: #71b8f6;
  opacity: .9;
}
.cnscd-ready-city svg { width: 100%; height: 100%; }

.cnscd-ready-card-grid {
  position: relative;
  z-index: 8;
  width: calc(100% - 78px);
  margin: -39px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 17px;
}
.cnscd-ready-card {
  position: relative;
  min-height: 365px;
  padding: 42px 23px 22px;
  border-radius: 18px;
  text-align: center;
  background: rgba(255,255,255,.96);
  border: 2px solid var(--tone-light);
  box-shadow: 0 13px 27px rgba(31,101,178,.12);
  overflow: hidden;
}
.cnscd-ready-card.blue { --tone: #075bd2; --tone-light: #8fc2fb; }
.cnscd-ready-card.green { --tone: #24a95d; --tone-light: #a8e4bc; }
.cnscd-ready-card.purple { --tone: #6851c9; --tone-light: #c7b7ff; }
.cnscd-ready-card::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 7px;
  background: var(--tone);
}
.cnscd-ready-number {
  position: absolute;
  left: 16px;
  top: 16px;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: var(--tone);
  font-size: 27px;
  line-height: 1;
  font-weight: 950;
}
.cnscd-ready-icon {
  width: 148px;
  height: 148px;
  margin: 16px auto 24px;
  display: grid;
  place-items: center;
  color: var(--tone);
  font-size: 122px;
}
.cnscd-ready-card h2 {
  margin: 0 0 10px;
  color: var(--tone);
  font-size: 29px;
  line-height: 1.1;
  font-weight: 950;
}
.cnscd-ready-card p {
  margin: 0;
  color: #1e2437;
  font-size: 21px;
  line-height: 1.34;
  font-weight: 500;
}

.cnscd-ready-illustration {
  position: relative;
  z-index: 5;
  height: 577px;
  margin-top: 10px;
  overflow: hidden;
}
.cnscd-ready-shop {
  position: absolute;
  left: 0;
  bottom: 18px;
  width: 520px;
  height: 405px;
  background: linear-gradient(180deg, #d8ecfb, #f3efe1);
  border-radius: 0 18px 0 0;
  overflow: hidden;
}
.cnscd-ready-shop .awning {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 84px;
  background: repeating-linear-gradient(90deg, #eaf6ff 0 45px, #9bd0f4 45px 90px);
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  box-shadow: inset 0 12px 0 #75b7ec;
}
.cnscd-ready-shop .shelves {
  position: absolute;
  left: 40px;
  top: 118px;
  width: 410px;
  height: 165px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 11px;
  opacity: .4;
}
.cnscd-ready-shop .shelves i {
  border-radius: 5px 5px 10px 10px;
  background: linear-gradient(180deg, #ffc15c, #7ab883);
}
.support-team {
  position: absolute;
  left: 34px;
  bottom: 0;
  width: 575px;
  height: 428px;
  z-index: 7;
}
.team-member,
.business-owner { position: absolute; bottom: 77px; }
.team-member.man { left: 17px; width: 150px; height: 284px; }
.team-member.woman { left: 179px; width: 150px; height: 300px; }
.business-owner { left: 336px; width: 145px; height: 290px; }
.team-member .hair,
.business-owner .hair { position: absolute; background: #061746; }
.team-member.man .hair { left: 44px; top: 15px; width: 72px; height: 49px; border-radius: 50px 50px 18px 18px; }
.team-member.woman .hair { left: 36px; top: 0; width: 91px; height: 102px; border-radius: 60px 60px 24px 24px; }
.business-owner .hair { left: 43px; top: 15px; width: 85px; height: 85px; border-radius: 55px 55px 25px 25px; background: #2a1c19; }
.team-member .face,
.business-owner .face { position: absolute; background: #ffbd8c; border-radius: 45%; }
.team-member.man .face { left: 56px; top: 56px; width: 55px; height: 70px; }
.team-member.woman .face { left: 63px; top: 60px; width: 55px; height: 70px; }
.business-owner .face { left: 64px; top: 61px; width: 55px; height: 70px; }
.team-member .body { position: absolute; top: 134px; border-radius: 50px 50px 0 0; background: linear-gradient(180deg, #0d7be4, #0753be); }
.team-member.man .body { left: 18px; width: 118px; height: 175px; }
.team-member.woman .body { left: 19px; width: 118px; height: 190px; }
.business-owner .body { position: absolute; left: 18px; top: 135px; width: 112px; height: 177px; border-radius: 49px 49px 0 0; background: #ffe1a7; }
.business-owner .apron { position: absolute; left: 30px; top: 145px; width: 91px; height: 168px; border-radius: 40px 40px 0 0; background: #4ea45b; }
.team-member .arm { position: absolute; background: #0d73df; height: 27px; border-radius: 999px; }
.team-member.man .arm { left: 88px; top: 174px; width: 100px; transform: rotate(-26deg); }
.team-member.woman .arm { left: 88px; top: 180px; width: 96px; transform: rotate(18deg); }
.team-member .arm::after { content: ""; position: absolute; right: -9px; top: -2px; width: 29px; height: 29px; border-radius: 50%; background: #ffbd8c; }
.support-team .table {
  position: absolute;
  left: 0;
  right: 18px;
  bottom: 0;
  height: 93px;
  border-radius: 50% 50% 0 0;
  background: linear-gradient(180deg, #efc48b, #ce9660);
}
.book {
  position: absolute;
  left: 227px;
  bottom: 15px;
  width: 108px;
  height: 67px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #135fc5;
  font-size: 21px;
  font-weight: 950;
  transform: rotate(-3deg);
}
.clipboard {
  position: absolute;
  right: 71px;
  bottom: 17px;
  width: 128px;
  height: 86px;
  border-radius: 9px;
  padding: 12px 18px;
  background: #fff;
  box-shadow: 0 10px 18px rgba(0,48,120,.14);
  transform: rotate(-3deg);
}
.clipboard p { margin: 7px 0; display: grid; grid-template-columns: 22px 1fr; align-items: center; gap: 8px; color: #2ab85d; }
.clipboard p span { height: 7px; border-radius: 999px; background: #beddf8; }
.qr-terminal {
  position: absolute;
  right: 83px;
  bottom: 111px;
  width: 92px;
  height: 132px;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 11px 18px rgba(21,79,150,.18);
  text-align: center;
}
.qr-terminal strong { color: #e23b52; font-size: 10px; font-weight: 950; }
.qr-terminal .qr-mini { width: 70px; height: 70px; margin: 4px auto; }
.qr-terminal small { color: #155ec1; font-size: 9px; line-height: 1.1; font-weight: 900; }
.cnscd-ready-phone {
  position: absolute;
  z-index: 9;
  right: 35px;
  bottom: 4px;
  width: 316px;
  height: 559px;
  border-radius: 42px;
  padding: 64px 19px 20px;
  color: #16307a;
  background: #20242b;
  box-shadow: 0 24px 36px rgba(0,35,90,.28);
}
.cnscd-ready-phone::before {
  content: "";
  position: absolute;
  inset: 12px;
  border-radius: 32px;
  background: #fff;
}
.phone-speaker {
  position: absolute;
  z-index: 3;
  left: 114px;
  top: 17px;
  width: 89px;
  height: 24px;
  border-radius: 0 0 14px 14px;
  background: #20242b;
}
.phone-head,
.phone-stats,
.phone-search,
.phone-list,
.phone-more { position: relative; z-index: 4; }
.phone-head {
  margin: -42px 0 17px;
  height: 42px;
  display: grid;
  grid-template-columns: 28px 1fr 28px;
  align-items: center;
  color: #1c2a45;
}
.phone-head span { font-size: 30px; }
.phone-head strong { text-align: center; font-size: 13px; font-weight: 950; }
.phone-head svg { color: #0d60d5; }
.phone-stats {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 6px;
  margin-bottom: 18px;
}
.phone-stats div {
  min-height: 62px;
  padding: 8px 4px;
  border-radius: 7px;
  text-align: center;
  background: #edf5ff;
}
.phone-stats div:nth-child(2) { background: #ecf9ef; }
.phone-stats div:nth-child(3) { background: #fff4e8; }
.phone-stats div:nth-child(4) { background: #ffeef0; }
.phone-stats small { display: block; font-size: 8px; color: #5c6c8b; font-weight: 850; }
.phone-stats b { display: block; margin-top: 7px; font-size: 23px; line-height: 1; color: #075bd2; }
.phone-stats div:nth-child(2) b { color: #24a95d; }
.phone-stats div:nth-child(3) b { color: #f47d18; }
.phone-stats div:nth-child(4) b { color: #e94155; }
.phone-search {
  height: 38px;
  display: grid;
  grid-template-columns: 1fr 59px;
  gap: 8px;
  margin-bottom: 14px;
}
.phone-search span,
.phone-search button {
  border: 1px solid #d7e3f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #8a95a8;
  background: #fff;
  font-size: 10px;
}
.phone-search button { justify-content: center; color: #2d3b55; font-weight: 800; }
.phone-list {
  display: grid;
  gap: 10px;
}
.phone-row {
  display: grid;
  grid-template-columns: 30px 1fr auto;
  gap: 9px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eef3f8;
}
.phone-row i {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #075bd2;
  background: #edf5ff;
}
.phone-row p { margin: 0; min-width: 0; }
.phone-row strong { display: block; color: #1f2848; font-size: 10px; line-height: 1.1; font-weight: 950; }
.phone-row small { display: block; color: #6c7890; font-size: 8px; line-height: 1.2; margin-top: 3px; }
.phone-row em {
  min-width: 64px;
  height: 22px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  padding: 0 7px;
  font-size: 8px;
  line-height: 1;
  font-style: normal;
  font-weight: 900;
}
.phone-row em.done { color: #25a84f; background: #ecf9ef; }
.phone-row em.progress { color: #075bd2; background: #edf5ff; }
.phone-row em.wait { color: #f47d18; background: #fff4e8; }
.phone-row em.none { color: #e94155; background: #ffeef0; }
.phone-more {
  margin-top: 13px;
  text-align: center;
  color: #075bd2;
  font-size: 12px;
  font-weight: 900;
}

.cnscd-ready-cta {
  position: relative;
  z-index: 20;
  width: calc(100% - 78px);
  height: 109px;
  margin: 0 auto 27px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 90px 1fr;
  align-items: center;
  padding: 0 87px 0 157px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 13px 24px rgba(0,76,180,.27);
  transition: transform .18s ease, filter .18s ease;
}
.cnscd-ready-cta:hover { transform: translateY(-2px); filter: brightness(1.03); }
.cnscd-ready-cta svg { width: 61px; height: 61px; justify-self: center; }
.cnscd-ready-cta span {
  text-align: center;
  font-size: 41px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -.75px;
}

@media (max-width: 820px) {
  .cnscd-ready-page { min-height: 1280px; }
  .cnscd-ready-hero h1 { width: min(100%, 820px); font-size: clamp(42px, 9vw, 59px); }
  .cnscd-ready-hero p { width: min(100%, 690px); font-size: 22px; }
  .cnscd-ready-card-grid { width: calc(100% - 56px); }
  .cnscd-ready-card { min-height: 320px; }
  .cnscd-ready-illustration { transform: scale(.88); transform-origin: top center; width: 114%; left: -7%; }
  .cnscd-ready-cta { width: calc(100% - 56px); padding-left: 70px; }
}

@media (max-width: 520px) {
  .cnscd-ready-page { min-height: 1180px; }
  .cnscd-ready-hero { min-height: 300px; padding: 30px 22px 0; }
  .cnscd-ready-pill { width: 126px; height: 45px; font-size: 23px; }
  .cnscd-ready-hero h1 { font-size: 35px; }
  .cnscd-ready-hero p { font-size: 16px; }
  .cnscd-ready-city { display: none; }
  .cnscd-ready-card-grid { width: calc(100% - 34px); grid-template-columns: 1fr; gap: 12px; }
  .cnscd-ready-card { min-height: auto; display: grid; grid-template-columns: 52px 1fr; text-align: left; gap: 6px 14px; padding: 16px 16px 16px 70px; }
  .cnscd-ready-number { width: 36px; height: 36px; font-size: 20px; }
  .cnscd-ready-icon { grid-row: 1 / 3; width: 54px; height: 54px; margin: 0; font-size: 44px; }
  .cnscd-ready-card h2 { font-size: 22px; margin: 0; }
  .cnscd-ready-card p { font-size: 15px; }
  .cnscd-ready-illustration { height: 430px; transform: scale(.62); width: 160%; left: -30%; }
  .cnscd-ready-cta { width: calc(100% - 34px); height: 76px; grid-template-columns: 42px 1fr; padding: 0 22px; }
  .cnscd-ready-cta span { font-size: 24px; }
  .cnscd-ready-cta svg { width: 40px; height: 40px; }
}
`;
