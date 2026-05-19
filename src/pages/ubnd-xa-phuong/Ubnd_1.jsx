import React from "react";
import Header from "../../components/Header";
import UBNDPreparePage from "./Ubnd_2";
import UBNDLaunchDayPage from "./Ubnd_3";
import UBNDFollowPage from "./Ubnd_4";
import UBNDFAQPage from "./Ubnd_5";
import UBNDReadyPage from "./Ubnd_6";

export default function UBNDHomePage({ children }) {
  return (
    <div className="ubnd-bg">
      <style>{css}</style>

      <main className="ubnd-page">
        <Header activeKey="ubnd" />

        <section className="ubnd-screen-one">
          <div className="ubnd-decor dots-left" />
          <div className="ubnd-decor dots-right" />

          <section className="ubnd-hero-copy">
            <div className="screen-pill">MÀN 1</div>
            <h1>Trang tổ chức địa bàn</h1>
            <div className="title-divider"><span /><i /><span /></div>
            <p>
              Dành cho UBND xã/phường để huy động hộ kinh doanh, tổ chức lực lượng và theo dõi tiến độ triển khai tại cơ sở.
            </p>
          </section>

          <HeroIllustration />

          <a href="#ubnd-checklist" className="ubnd-primary-cta">
            <span>Xem checklist</span>
            <ArrowRightIcon />
          </a>

          <footer className="ubnd-footer-logo">
            <div className="hkdo-mark"><ChainIcon /></div>
            <strong>HKDO</strong>
          </footer>
        </section>

        <div className="ubnd-embedded-sections">
            <UBNDPreparePage />
            <UBNDLaunchDayPage />
            <UBNDFollowPage />
            <UBNDFAQPage />
            <UBNDReadyPage />
        </div>
      </main>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="ubnd-illustration" aria-hidden="true">
      <div className="ubnd-cloud cloud-a" />
      <div className="ubnd-cloud cloud-b" />
      <div className="ubnd-cloud cloud-c" />
      <div className="ubnd-skyline left"><i /><i /><i /></div>
      <div className="ubnd-skyline right"><i /><i /><i /></div>
      <div className="ubnd-house house-left" />
      <div className="ubnd-house house-right" />
      <div className="ubnd-shop">
        <span>HỘ KINH DOANH</span>
      </div>
      <UBNDBuilding />
      <div className="ubnd-tree tree-left" />
      <div className="ubnd-tree tree-right" />
      <div className="ubnd-bush bush-left" />
      <div className="ubnd-bush bush-right" />

      <div className="person official-woman">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="folder" />
        <div className="arm" />
      </div>

      <div className="person official-man">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="arm" />
        <div className="tablet" />
      </div>

      <div className="person seller-woman">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="apron" />
        <div className="arm" />
      </div>

      <div className="person seller-man">
        <div className="hair" />
        <div className="face" />
        <div className="body" />
        <div className="apron" />
        <div className="arm" />
      </div>

      <div className="plan-board">
        <div className="clip" />
        <h3>KẾ HOẠCH TRIỂN KHAI</h3>
        {[
          "Huy động HKD",
          "Tổ chức lực lượng",
          "Tuyên truyền",
          "Hỗ trợ tại cơ sở",
          "Theo dõi tiến độ",
        ].map((item) => (
          <p key={item}><CheckSmallIcon />{item}</p>
        ))}
      </div>

      <div className="map-card">
        <MiniRoadMap />
        <div className="pin big"><BuildingIcon /></div>
        <div className="pin small one" />
        <div className="pin small two" />
      </div>

      <div className="stat-card force-card">
        <div className="stat-icon"><PeopleIcon /></div>
        <strong>TỔ CHỨC<br />LỰC LƯỢNG</strong>
        <b>28</b>
        <span>thành viên</span>
      </div>

      <div className="stat-card progress-card">
        <div className="bar-icon"><BarIcon /></div>
        <strong>TIẾN ĐỘ TRIỂN KHAI</strong>
        <b>75%</b>
        <span>đã hoàn thành</span>
        <i><em /></i>
      </div>

      <div className="dash-line" />
    </div>
  );
}

function UBNDBuilding() {
  return (
    <div className="ubnd-building">
      <div className="flag-pole" />
      <div className="flag-vn">★</div>
      <div className="roof-top"><span>★</span></div>
      <div className="roof-left" />
      <div className="roof-right" />
      <div className="sign">UBND XÃ/PHƯỜNG</div>
      <div className="body">
        <div className="columns"><i /><i /><i /><i /></div>
        <div className="windows">
          {Array.from({ length: 8 }).map((_, index) => <b key={index} />)}
        </div>
        <div className="door" />
      </div>
      <div className="steps" />
    </div>
  );
}

function MiniRoadMap() {
  return (
    <svg viewBox="0 0 210 150" className="mini-road-map" fill="none">
      <rect width="210" height="150" rx="15" fill="#f6fbff" />
      <path d="M0 38h210M0 87h210M48 0v150M101 0v150M156 0v150" stroke="#cfe3f8" strokeWidth="8" />
      <path d="M16 121C46 104 58 70 89 67c35-3 45 31 76 20 18-7 25-21 37-34" stroke="#91c8f7" strokeWidth="10" strokeLinecap="round" />
      <path d="M16 121C46 104 58 70 89 67c35-3 45 31 76 20 18-7 25-21 37-34" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeDasharray="9 8" />
    </svg>
  );
}

function Svg({ children, viewBox = "0 0 24 24", className = "" }) {
  return <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">{children}</svg>;
}

function ArrowRightIcon() { return <Svg><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></Svg>; }
function ChainIcon() { return <Svg viewBox="0 0 64 64"><path d="M21 20 10 31a10 10 0 0 0 14 14l9-9" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/><path d="M43 44 54 33a10 10 0 0 0-14-14l-9 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/><path d="m24 40 16-16" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/></Svg>; }
function CheckSmallIcon() { return <Svg><circle cx="12" cy="12" r="10" fill="#56bd78"/><path d="m7 12 3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></Svg>; }
function BuildingIcon() { return <Svg><path d="M3 10h18L12 4 3 10Z" fill="currentColor"/><path d="M5 10v9M9 10v9M15 10v9M19 10v9M3 20h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></Svg>; }
function PeopleIcon() { return <Svg><path d="M8.5 11a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Zm7 0a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z" fill="currentColor"/><path d="M2.8 20c.4-4.3 2.6-6.7 5.8-6.7s5.2 2.4 5.7 6.7H2.8Zm7.7 0c.4-4.2 2.6-6.7 5.2-6.7 3 0 5.2 2.4 5.5 6.7H10.5Z" fill="currentColor" opacity=".78"/></Svg>; }
function BarIcon() { return <Svg><path d="M6 19V9M12 19V5M18 19v-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></Svg>; }

const css = `
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  color: #10215a;
  background: #dfeefa;
}
a { color: inherit; text-decoration: none; }
svg { width: 1em; height: 1em; display: block; }

.ubnd-bg {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at top, #ffffff 0, #e8f6ff 46%, #dceefa 100%);
}

.ubnd-page {
  width: min(100%, 928px);
  min-height: 100vh;
  overflow: hidden;
  border-radius: 0 0 28px 28px;
  background:
    radial-gradient(circle at 50% 8%, rgba(255,255,255,.95) 0 18%, rgba(255,255,255,0) 39%),
    linear-gradient(180deg, #fbfdff 0%, #eef8ff 48%, #f9fdff 100%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.72) inset;
}

.ubnd-screen-one {
  position: relative;
  min-height: 1645px;
  overflow: hidden;
  padding-top: 60px;
  border-radius: 0 0 28px 28px;
}

.ubnd-decor {
  position: absolute;
  width: 94px;
  height: 107px;
  background-image: radial-gradient(#c9e1fb 3px, transparent 4px);
  background-size: 23px 23px;
  opacity: .8;
}
.dots-left { left: -7px; top: 56px; }
.dots-right { right: -1px; top: 250px; }

.ubnd-hero-copy {
  position: relative;
  z-index: 7;
  width: 710px;
  margin: 0 auto;
  text-align: center;
}
.screen-pill {
  width: 173px;
  height: 60px;
  margin: 0 auto 28px;
  border-radius: 19px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(180deg, #1679eb, #075bd2);
  box-shadow: 0 10px 21px rgba(7,91,210,.25);
  font-size: 33px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: .4px;
}
.ubnd-hero-copy h1 {
  margin: 0;
  color: #10175c;
  font-size: 75px;
  line-height: .98;
  font-weight: 950;
  letter-spacing: -3.6px;
}
.title-divider {
  height: 25px;
  margin: 22px auto 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  color: #1169df;
}
.title-divider span {
  width: 42px;
  height: 4px;
  border-radius: 999px;
  background: currentColor;
}
.title-divider i {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: currentColor;
}
.ubnd-hero-copy p {
  width: 640px;
  margin: 0 auto;
  color: #405070;
  font-size: 30px;
  line-height: 1.36;
  font-weight: 500;
}

.ubnd-illustration {
  position: absolute;
  inset: 0;
}
.ubnd-illustration::before {
  content: "";
  position: absolute;
  left: -86px;
  top: 345px;
  width: 360px;
  height: 420px;
  border-radius: 0 0 180px 0;
  background: linear-gradient(180deg, rgba(218,238,255,.75), rgba(218,238,255,.2));
}
.ubnd-illustration::after {
  content: "";
  position: absolute;
  right: -97px;
  top: 482px;
  width: 360px;
  height: 260px;
  border-radius: 180px 0 0 180px;
  background: linear-gradient(180deg, rgba(218,238,255,.72), rgba(218,238,255,.2));
}
.ubnd-cloud,
.ubnd-cloud::before,
.ubnd-cloud::after {
  position: absolute;
  border-radius: 999px;
  background: rgba(255,255,255,.96);
  content: "";
}
.ubnd-cloud.cloud-a { left: 195px; top: 560px; width: 152px; height: 24px; opacity: .75; }
.ubnd-cloud.cloud-a::before { width: 62px; height: 62px; left: 42px; top: -34px; }
.ubnd-cloud.cloud-a::after { width: 45px; height: 45px; right: 17px; top: -20px; }
.ubnd-cloud.cloud-b { left: -2px; top: 634px; width: 83px; height: 30px; opacity: .88; }
.ubnd-cloud.cloud-b::before { width: 54px; height: 54px; left: 9px; top: -28px; }
.ubnd-cloud.cloud-b::after { width: 43px; height: 43px; left: 51px; top: -13px; }
.ubnd-cloud.cloud-c { right: 15px; top: 640px; width: 106px; height: 29px; opacity: .88; }
.ubnd-cloud.cloud-c::before { width: 56px; height: 56px; left: 9px; top: -33px; }
.ubnd-cloud.cloud-c::after { width: 70px; height: 70px; left: 53px; top: -45px; }
.ubnd-skyline { position: absolute; display: flex; align-items: flex-end; gap: 12px; opacity: .48; }
.ubnd-skyline.left { left: 23px; top: 698px; }
.ubnd-skyline.right { right: 36px; top: 626px; }
.ubnd-skyline i { display: block; width: 38px; height: 90px; border-radius: 11px 11px 0 0; background: linear-gradient(180deg, rgba(85,154,219,.2), rgba(85,154,219,.06)); }
.ubnd-skyline i:nth-child(2) { height: 130px; }
.ubnd-skyline i:nth-child(3) { height: 75px; }

.ubnd-building {
  position: absolute;
  z-index: 3;
  left: 198px;
  top: 627px;
  width: 520px;
  height: 350px;
  filter: drop-shadow(0 14px 18px rgba(145,87,32,.16));
}
.ubnd-building .flag-pole { position: absolute; left: 258px; top: -57px; width: 5px; height: 83px; background: #8d4b17; border-radius: 999px; }
.ubnd-building .flag-vn { position: absolute; left: 262px; top: -46px; width: 64px; height: 42px; border-radius: 2px 12px 12px 2px; display: grid; place-items: center; color: #ffe33b; background: #e93c20; transform: skewY(6deg); }
.ubnd-building .roof-top { position: absolute; left: 133px; top: 0; width: 254px; height: 90px; clip-path: polygon(50% 0, 100% 72%, 92% 100%, 8% 100%, 0 72%); background: linear-gradient(180deg, #fff1c7, #f2c36d 72%, #d99a3a); display: flex; align-items: center; justify-content: center; padding-top: 36px; }
.ubnd-building .roof-top span { width: 60px; height: 60px; border-radius: 50%; display: grid; place-items: center; color: #ffe33b; background: #e93c20; font-size: 29px; }
.ubnd-building .roof-left,
.ubnd-building .roof-right { position: absolute; top: 76px; width: 178px; height: 53px; background: linear-gradient(180deg, #c84d29, #a43b24); }
.ubnd-building .roof-left { left: 0; transform: skewX(-28deg); }
.ubnd-building .roof-right { right: 0; transform: skewX(28deg); }
.ubnd-building .sign { position: absolute; z-index: 5; left: 157px; top: 119px; width: 208px; height: 60px; border-radius: 5px; display: grid; place-items: center; color: #fff; background: linear-gradient(180deg, #cf7240, #a9412a); font-size: 24px; font-weight: 950; box-shadow: inset 0 0 0 2px rgba(255,255,255,.2); }
.ubnd-building .body { position: absolute; left: 30px; top: 107px; width: 460px; height: 210px; border-radius: 6px 6px 2px 2px; background: linear-gradient(180deg, #ffe2a4, #f6c878); border-top: 12px solid #e2a548; }
.ubnd-building .columns { position: absolute; left: 142px; right: 142px; top: 55px; display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
.ubnd-building .columns i { height: 153px; border-radius: 4px 4px 0 0; background: linear-gradient(90deg, #fff0c0, #eeb85f, #ffecc1); }
.ubnd-building .windows { position: absolute; inset: 69px 36px 30px; display: grid; grid-template-columns: repeat(4,1fr); gap: 17px 73px; }
.ubnd-building .windows b { height: 40px; border-radius: 3px; background: linear-gradient(180deg, #54a7e8, #1268bd); box-shadow: inset 0 0 0 3px rgba(255,255,255,.22); }
.ubnd-building .door { position: absolute; left: 203px; bottom: 0; width: 56px; height: 86px; border-radius: 5px 5px 0 0; background: linear-gradient(180deg, #166ec0, #064578); }
.ubnd-building .steps { position: absolute; left: 120px; right: 120px; bottom: 4px; height: 30px; border-radius: 5px; background: linear-gradient(180deg, #dfeeff, #aecdec); box-shadow: 0 12px 0 rgba(130,170,207,.4); }
.ubnd-tree { position: absolute; width: 64px; height: 112px; border-radius: 44px 44px 16px 16px; background: linear-gradient(180deg, #8ed19a, #51ad75); z-index: 2; }
.ubnd-tree::before { content: ""; position: absolute; left: 30px; top: 45px; width: 5px; height: 62px; border-radius: 999px; background: #33785a; }
.ubnd-tree.tree-left { left: 156px; top: 805px; transform: scale(.78); }
.ubnd-tree.tree-right { right: 164px; top: 816px; transform: scale(.8); }
.ubnd-bush { position: absolute; width: 126px; height: 51px; border-radius: 80px 80px 0 0; background: linear-gradient(180deg, #8ed19a, #51ad75); z-index: 2; }
.ubnd-bush.bush-left { left: 107px; top: 887px; }
.ubnd-bush.bush-right { right: 156px; top: 890px; }
.ubnd-house { position: absolute; z-index: 1; width: 132px; height: 92px; border-radius: 9px; background: linear-gradient(180deg, #ffc4a1, #e69577); bottom: 501px; }
.ubnd-house::before { content: ""; position: absolute; left: -13px; right: -13px; top: -35px; height: 51px; clip-path: polygon(50% 0, 100% 100%, 0 100%); background: #c65035; }
.ubnd-house::after { content: ""; position: absolute; right: 20px; top: 35px; width: 31px; height: 31px; border-radius: 3px; background: #75b9ee; box-shadow: -48px 0 0 #75b9ee; }
.ubnd-house.house-left { left: 3px; }
.ubnd-house.house-right { right: 16px; }
.ubnd-shop { position: absolute; z-index: 1; right: -3px; bottom: 420px; width: 148px; height: 110px; border-radius: 9px 9px 0 0; background: linear-gradient(180deg, #dff2ff, #a9d5f5); }
.ubnd-shop::before { content: ""; position: absolute; left: 0; right: 0; top: -26px; height: 36px; background: repeating-linear-gradient(90deg, #297fe0 0 23px, #fff 23px 46px); border-radius: 15px 15px 7px 7px; }
.ubnd-shop span { position: absolute; left: 11px; right: 11px; top: 27px; height: 34px; border-radius: 5px; display: grid; place-items: center; color: #fff; background: #186ed2; font-size: 13px; line-height: 1; font-weight: 900; }

.person { position: absolute; z-index: 5; }
.official-woman { left: 54px; top: 840px; width: 164px; height: 317px; }
.official-woman .hair { position: absolute; left: 35px; top: 0; width: 88px; height: 103px; border-radius: 56px 56px 31px 31px; background: #061746; }
.official-woman .face { position: absolute; left: 70px; top: 40px; width: 52px; height: 65px; border-radius: 44%; background: #ffbd8c; }
.official-woman .body { position: absolute; left: 30px; top: 106px; width: 103px; height: 200px; border-radius: 43px 37px 0 0; background: linear-gradient(160deg, #0e7be4, #0752bb); }
.official-woman .folder { position: absolute; left: 40px; top: 151px; width: 59px; height: 74px; border-radius: 7px; transform: rotate(-9deg); background: #eff8ff; border: 5px solid #194e90; }
.official-woman .arm { position: absolute; right: -28px; top: 146px; width: 100px; height: 28px; border-radius: 999px; background: #0b64ce; transform: rotate(-33deg); }
.official-woman .arm::after { content: ""; position: absolute; right: -15px; top: -1px; width: 30px; height: 28px; border-radius: 50%; background: #ffbd8c; }
.official-man { left: 185px; top: 810px; width: 180px; height: 344px; }
.official-man .hair { position: absolute; left: 55px; top: 0; width: 78px; height: 54px; border-radius: 55px 55px 20px 20px; background: #061746; }
.official-man .face { position: absolute; left: 70px; top: 45px; width: 56px; height: 70px; border-radius: 45%; background: #ffbd8c; }
.official-man .body { position: absolute; left: 39px; top: 121px; width: 109px; height: 206px; border-radius: 41px 41px 0 0; background: #fff; box-shadow: inset 0 -7px 0 #0f2c5f; }
.official-man .arm { position: absolute; right: -28px; top: 128px; width: 94px; height: 27px; border-radius: 999px; background: #fff; transform: rotate(-47deg); }
.official-man .arm::after { content: ""; position: absolute; right: -13px; top: -2px; width: 30px; height: 28px; border-radius: 50%; background: #ffbd8c; }
.official-man .tablet { position: absolute; left: 16px; top: 166px; width: 75px; height: 58px; border-radius: 8px; transform: rotate(5deg); background: linear-gradient(135deg, #627fa3, #243b5f); }
.seller-woman { right: 219px; top: 829px; width: 158px; height: 298px; }
.seller-woman .hair { position: absolute; left: 47px; top: 0; width: 65px; height: 81px; border-radius: 50px 50px 26px 26px; background: #061746; }
.seller-woman .face { position: absolute; left: 58px; top: 39px; width: 49px; height: 61px; border-radius: 45%; background: #ffbd8c; }
.seller-woman .body { position: absolute; left: 28px; top: 106px; width: 98px; height: 181px; border-radius: 38px 38px 0 0; background: #f5ca57; }
.seller-woman .apron { position: absolute; left: 43px; top: 116px; width: 69px; height: 170px; border-radius: 35px 35px 0 0; background: #3caa6b; }
.seller-woman .arm { position: absolute; right: -9px; top: 118px; width: 73px; height: 26px; border-radius: 999px; background: #f5ca57; transform: rotate(-41deg); }
.seller-woman .arm::after { content: ""; position: absolute; right: -11px; top: -1px; width: 27px; height: 27px; border-radius: 50%; background: #ffbd8c; }
.seller-man { right: 53px; top: 803px; width: 174px; height: 326px; }
.seller-man .hair { position: absolute; left: 57px; top: 0; width: 78px; height: 58px; border-radius: 55px 55px 20px 20px; background: #061746; }
.seller-man .face { position: absolute; left: 72px; top: 45px; width: 55px; height: 70px; border-radius: 45%; background: #ffbd8c; }
.seller-man .body { position: absolute; left: 38px; top: 122px; width: 110px; height: 192px; border-radius: 39px 39px 0 0; background: #58a8ef; }
.seller-man .apron { position: absolute; left: 52px; top: 128px; width: 81px; height: 186px; border-radius: 34px 34px 0 0; background: #19385d; }
.seller-man .arm { position: absolute; right: -6px; top: 132px; width: 72px; height: 27px; border-radius: 999px; background: #58a8ef; transform: rotate(38deg); }
.seller-man .arm::after { content: ""; position: absolute; right: -12px; top: -1px; width: 28px; height: 28px; border-radius: 50%; background: #ffbd8c; }

.plan-board {
  position: absolute;
  z-index: 7;
  left: 306px;
  top: 1010px;
  width: 192px;
  height: 247px;
  border-radius: 12px;
  padding: 48px 20px 16px;
  background: #fff;
  border: 7px solid #154782;
  box-shadow: 0 18px 28px rgba(20, 67, 130, .18);
}
.plan-board .clip {
  position: absolute;
  left: 64px;
  top: -28px;
  width: 64px;
  height: 48px;
  border-radius: 20px 20px 5px 5px;
  background: #1a4f8c;
}
.plan-board .clip::before {
  content: "";
  position: absolute;
  left: 18px;
  top: 8px;
  width: 28px;
  height: 18px;
  border-radius: 999px;
  background: #dceeff;
}
.plan-board h3 {
  margin: 0 0 11px;
  color: #0e4aa3;
  font-size: 14px;
  line-height: 1.15;
  font-weight: 950;
  text-align: center;
}
.plan-board p {
  margin: 9px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #47536f;
  font-size: 11px;
  line-height: 1.1;
  font-weight: 820;
}
.plan-board p svg { width: 20px; height: 20px; flex: 0 0 auto; }
.map-card {
  position: absolute;
  z-index: 7;
  right: 267px;
  top: 1100px;
  width: 205px;
  height: 180px;
  padding: 12px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 18px 28px rgba(20, 67, 130, .16);
  transform: rotate(3deg);
}
.mini-road-map { width: 100%; height: 100%; }
.pin {
  position: absolute;
  color: #166ee5;
}
.pin.big {
  left: 83px;
  top: 32px;
  width: 61px;
  height: 61px;
  border-radius: 50% 50% 50% 4px;
  transform: rotate(-45deg);
  display: grid;
  place-items: center;
  background: #166ee5;
  color: #fff;
  font-size: 30px;
}
.pin.big svg { transform: rotate(45deg); }
.pin.small {
  width: 31px;
  height: 31px;
  border-radius: 50% 50% 50% 4px;
  transform: rotate(-45deg);
  background: #3d95f4;
}
.pin.small::after {
  content: "";
  position: absolute;
  inset: 9px;
  border-radius: 50%;
  background: #fff;
}
.pin.small.one { left: 44px; bottom: 35px; }
.pin.small.two { right: 32px; bottom: 27px; }
.stat-card {
  position: absolute;
  z-index: 8;
  width: 196px;
  height: 164px;
  border-radius: 18px;
  background: rgba(255,255,255,.96);
  box-shadow: 0 15px 27px rgba(31,101,178,.16);
  text-align: center;
}
.force-card { left: 48px; top: 1139px; padding: 22px 18px 15px; }
.progress-card { right: 51px; top: 1154px; padding: 18px 18px 14px; }
.stat-icon {
  width: 68px;
  height: 56px;
  margin: 0 auto 8px;
  color: #126fe5;
  font-size: 61px;
}
.bar-icon {
  width: 68px;
  height: 45px;
  margin: 0 auto 7px;
  color: #126fe5;
  font-size: 54px;
}
.stat-card strong {
  display: block;
  color: #1761c9;
  font-size: 14px;
  line-height: 1.18;
  font-weight: 950;
}
.stat-card b {
  display: block;
  color: #0866db;
  font-size: 42px;
  line-height: 1;
  font-weight: 950;
  margin-top: 3px;
}
.stat-card span {
  display: block;
  color: #33425e;
  font-size: 14px;
  font-weight: 650;
  margin-top: 6px;
}
.progress-card i {
  display: block;
  width: 139px;
  height: 11px;
  margin: 10px auto 0;
  border-radius: 999px;
  background: #dce9f6;
  overflow: hidden;
}
.progress-card i em {
  display: block;
  width: 75%;
  height: 100%;
  background: #0968df;
  border-radius: inherit;
}
.dash-line {
  position: absolute;
  z-index: 5;
  left: 177px;
  top: 1244px;
  width: 498px;
  height: 77px;
  border-bottom: 4px dashed #267de5;
  border-radius: 0 0 50% 50%;
  opacity: .55;
}

.ubnd-primary-cta {
  position: absolute;
  z-index: 10;
  left: 129px;
  right: 129px;
  bottom: 135px;
  height: 110px;
  border-radius: 50px;
  display: grid;
  grid-template-columns: 1fr 74px;
  align-items: center;
  padding: 0 48px 0 88px;
  color: #fff;
  background: linear-gradient(180deg, #086feb, #0055cb);
  box-shadow: 0 16px 0 #00449d, 0 22px 28px rgba(0,76,180,.28);
  transition: transform .18s ease, filter .18s ease;
}
.ubnd-primary-cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}
.ubnd-primary-cta span {
  text-align: center;
  font-size: 42px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -.9px;
}
.ubnd-primary-cta svg {
  width: 55px;
  height: 55px;
  justify-self: end;
}
.ubnd-footer-logo {
  position: absolute;
  left: 15px;
  right: 15px;
  bottom: 20px;
  height: 90px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  color: #075bd1;
  background: rgba(255,255,255,.78);
  border: 1px solid rgba(255,255,255,.9);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.45);
}
.hkdo-mark {
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  font-size: 53px;
}
.ubnd-footer-logo strong {
  font-size: 52px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -1px;
}

.ubnd-embedded-sections {
  position: relative;
  z-index: 1;
}

@media (max-width: 820px) {
  .ubnd-page { border-radius: 0; }
  .ubnd-screen-one { min-height: 1430px; transform-origin: top center; }
  .ubnd-hero-copy { width: calc(100% - 32px); }
  .ubnd-hero-copy h1 { font-size: clamp(48px, 11vw, 75px); }
  .ubnd-hero-copy p { width: min(100%, 640px); font-size: 24px; }
  .ubnd-illustration { transform: scale(.86); transform-origin: top center; width: 116%; left: -8%; }
  .ubnd-primary-cta { left: 70px; right: 70px; }
}

@media (max-width: 520px) {
  .ubnd-screen-one { min-height: 1285px; }
  .screen-pill { width: 142px; height: 52px; font-size: 27px; }
  .ubnd-hero-copy h1 { font-size: 45px; }
  .ubnd-hero-copy p { font-size: 19px; }
  .ubnd-illustration { transform: scale(.65); width: 150%; left: -25%; top: 20px; }
  .ubnd-primary-cta {
    left: 28px;
    right: 28px;
    height: 78px;
    bottom: 119px;
    padding: 0 28px 0 54px;
    grid-template-columns: 1fr 46px;
    border-radius: 36px;
    box-shadow: 0 10px 0 #00449d, 0 16px 24px rgba(0,76,180,.24);
  }
  .ubnd-primary-cta span { font-size: 28px; }
  .ubnd-primary-cta svg { width: 39px; height: 39px; }
  .ubnd-footer-logo { height: 74px; }
  .ubnd-footer-logo strong { font-size: 40px; }
}
`;
