import React from "react";

const steps = [
  { n: 1, icon: "📣", title: "Buổi ra quân / phát động", tone: "green" },
  { n: 2, icon: "🕘", title: "Chuỗi khởi động khoảng 10 phút", tone: "green" },
  { n: 3, icon: "▦", title: "Tự dán QR tại điểm bán trong 1 phút", tone: "blue" },
  { n: 4, icon: "👥", title: "Truyền thông cộng đồng", tone: "orange" },
  { n: 5, icon: "💜", title: "Chăm sóc & duy trì sau phát động", tone: "purple" },
];

const roles = [
  {
    icon: "🏛️",
    title: "SỞ KHCN",
    desc: "Điều phối chung và theo dõi kết quả",
    tone: "blue",
    href: "/so-khcn/trang-dieu-phoi",
  },
  {
    icon: "🏫",
    title: "UBND XÃ/PHƯỜNG",
    desc: "Tổ chức địa bàn, huy động hộ kinh doanh",
    tone: "green",
    href: "#ubnd",
  },
  {
    icon: "👥",
    title: "TỔ CNSCĐ",
    desc: "Hướng dẫn 10 phút và hỗ trợ tại chỗ",
    tone: "orange",
    href: "#to-cnscd",
  },
  {
    icon: "🏪",
    title: "HỘ KINH DOANH",
    desc: "Tự mở cửa hàng, tự vận hành",
    tone: "purple",
    href: "#ho-kinh-doanh",
  },
  {
    icon: "🧑‍💼",
    title: "NGƯỜI TÌM MUA",
    desc: "Tìm, chọn và đặt mua dễ dàng",
    tone: "teal",
    href: "#nguoi-tim-mua",
  },
];

const goals = [
  { icon: "🏪", text: "Hộ tự mở cửa hàng", tone: "green" },
  { icon: "📋", text: "Hộ tự hoàn thành chuỗi thao tác cốt lõi", tone: "blue" },
  { icon: "▦", text: "Hộ tự dán QR tại điểm bán", tone: "orange" },
  { icon: "🎧", text: "Cộng đồng biết cách tìm và đặt hàng", tone: "purple" },
];

function ToneIcon({ tone, children, small = false }) {
  return (
    <div className={`tone-icon ${tone} ${small ? "small" : ""}`}>
      {children}
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <div className="city city-left" />
      <div className="city city-right" />
      <div className="tree t1" />
      <div className="tree t2" />
      <div className="pin">●</div>
      <div className="platform" />

      <div className="phone">
        <div className="phone-notch" />
        <div className="awning">
          <span />
          <span />
          <span />
        </div>
        <div className="phone-grid">
          <div>🛒</div>
          <div>📊</div>
          <div>📍</div>
          <div>📈</div>
        </div>
        <div className="phone-card">
          <span />
          <p />
          <p />
        </div>
      </div>

      <div className="qr-board">
        <strong>HKDO</strong>
        <div className="fake-qr">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className={i % 2 === 0 || i % 7 === 0 ? "on" : ""} />
          ))}
        </div>
        <small>SCAN ĐỂ MUA HÀNG</small>
      </div>
    </div>
  );
}

export default function HKDOLandingPrototype() {
  return (
    <main className="page-shell">
      <style>{css}</style>

      <section className="hero-section">
        <header className="topbar">
          <div className="logo-wrap">
            <div className="logo-text">
              <span className="logo-blue">HKD</span>
              <span className="logo-orange">O</span>
            </div>
            <div className="logo-sub">NỀN TẢNG HỘ KINH DOANH</div>
          </div>

          <div className="program-badge">
            <span>⚑</span>
            <strong>Chương trình<br />triển khai HKDO</strong>
          </div>
        </header>

        <div className="hero-grid">
          <div className="hero-content">
            <h1>TRIỂN KHAI HKDO<br />TẠI ĐỊA BÀN</h1>
            <p>
              HKDO là nền tảng chuyển đổi số giúp hộ kinh doanh tự mở cửa hàng,
              tự vận hành, tự hiện diện số và kết nối với người mua trên
              <a href="https://dothithongminh1.vn" target="_blank" rel="noreferrer"> dothithongminh1.vn</a>
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#ai-tham-gia">
                CHỌN VAI TRÒ CỦA TÔI <span>➜</span>
              </a>
              <a className="btn btn-secondary" href="#mo-hinh">
                <span className="play">▶</span> XEM CÁCH CHƯƠNG TRÌNH VẬN HÀNH
              </a>
            </div>
          </div>

          <HeroIllustration />
        </div>
      </section>

      <section id="mo-hinh" className="card-section timeline-section">
        <h2>MÔ HÌNH TRIỂN KHAI 5 BƯỚC</h2>
        <div className="timeline-row">
          {steps.map((step, index) => (
            <React.Fragment key={step.n}>
              <div className="step-card">
                <div className={`step-number ${step.tone}`}>{step.n}</div>
                <ToneIcon tone={step.tone}>{step.icon}</ToneIcon>
                <p>{step.title}</p>
              </div>
              {index < steps.length - 1 && <div className="arrow">›</div>}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section id="ai-tham-gia" className="card-section roles-section">
        <h2>AI THAM GIA?</h2>
        <p className="section-lead">Mỗi bên có vai trò riêng. Chọn đúng vai trò để xem hướng dẫn phù hợp.</p>

        <div className="roles-grid">
          {roles.map((role) => (
            <a key={role.title} href={role.href} className={`role-card ${role.tone}`}>
              <div className="role-icon">{role.icon}</div>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
              <span className="round-arrow">›</span>
            </a>
          ))}
        </div>
      </section>

      <section className="card-section goals-section">
        <h2>4 MỤC TIÊU CHÍNH</h2>
        <div className="goals-grid">
          {goals.map((goal, index) => (
            <div className="goal-item" key={goal.text}>
              <ToneIcon tone={goal.tone} small>{goal.icon}</ToneIcon>
              <strong>{goal.text}</strong>
              {index < goals.length - 1 && <span className="goal-divider" />}
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="rocket" aria-hidden="true">🚀</div>
        <div>
          <h2>BẮT ĐẦU TỪ ĐÚNG VAI TRÒ CỦA BẠN</h2>
          <p>Mỗi trang dưới đây được viết riêng để đúng nhu cầu của từng nhóm tham gia.</p>
        </div>
        <a href="#ai-tham-gia" className="btn final-btn">ĐI TỚI TRANG VAI TRÒ <span>➜</span></a>
      </section>

      <section className="trust-bar">
        <div className="shield">🛡️</div>
        <p>HKDO cam kết bảo vệ thông tin người dùng và mang đến trải nghiệm mua sắm an toàn, thuận tiện và đáng tin cậy.</p>
        <a href="#tim-hieu-them">Tìm hiểu thêm ›</a>
      </section>
    </main>
  );
}

const css = `
:root {
  --blue: #075dbc;
  --blue-2: #0d74d8;
  --dark-blue: #074189;
  --text: #10233f;
  --muted: #667891;
  --green: #27b978;
  --orange: #ff8a18;
  --purple: #8355c7;
  --teal: #0fa5a5;
  --panel: rgba(255, 255, 255, 0.92);
  --shadow: 0 18px 45px rgba(31, 99, 170, 0.14);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  min-height: 100vh;
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #dff2ff;
}

a { color: inherit; text-decoration: none; }

.page-shell {
  width: min(100%, 936px);
  margin: 0 auto;
  padding: 30px 32px 28px;
  border-radius: 0 0 34px 34px;
  background:
    radial-gradient(circle at 70% 10%, rgba(255,255,255,.95) 0 12%, transparent 33%),
    linear-gradient(180deg, #eef9ff 0%, #ffffff 58%, #f9fdff 100%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.8) inset;
  overflow: hidden;
}

.hero-section {
  min-height: 574px;
  position: relative;
}

.topbar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 34px;
}

.logo-text {
  font-size: clamp(36px, 5.4vw, 54px);
  line-height: 0.92;
  letter-spacing: -0.08em;
  font-weight: 900;
}

.logo-blue { color: var(--blue); }
.logo-orange { color: #ff7b11; }
.logo-sub {
  margin-top: 5px;
  font-weight: 800;
  font-size: 11px;
  letter-spacing: -0.02em;
}

.program-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 21px 11px 16px;
  border-radius: 20px;
  background: rgba(255,255,255,.86);
  box-shadow: var(--shadow);
  color: var(--blue);
}
.program-badge span {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #fff;
  background: var(--blue);
}
.program-badge strong {
  font-size: 15px;
  line-height: 1.18;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(300px, 0.95fr) minmax(320px, 1.05fr);
  align-items: center;
  gap: 26px;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  margin: 0 0 22px;
  color: var(--dark-blue);
  font-size: clamp(40px, 5.6vw, 58px);
  line-height: 1.12;
  letter-spacing: -0.04em;
  font-weight: 950;
}

.hero-content p {
  max-width: 425px;
  margin: 0 0 26px;
  font-size: clamp(17px, 2.1vw, 21px);
  line-height: 1.68;
  font-weight: 520;
}

.hero-content p a {
  color: var(--blue);
  font-weight: 850;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  min-height: 56px;
  padding: 0 28px;
  border-radius: 999px;
  font-size: 19px;
  font-weight: 900;
  letter-spacing: -0.01em;
  transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}

.btn-primary {
  color: #fff;
  background: linear-gradient(180deg, #0875d8, #0059b2);
  box-shadow: 0 10px 18px rgba(0, 92, 188, .26);
}

.btn-primary span,
.final-btn span {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255,255,255,.22);
}

.btn-secondary {
  color: var(--blue);
  min-height: 52px;
  padding: 0 23px;
  background: rgba(255,255,255,.9);
  border: 2px solid rgba(6, 96, 191, .55);
}

.play {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #fff;
  background: var(--blue);
  font-size: 12px;
}

.hero-illustration {
  position: relative;
  min-height: 380px;
}

.city,
.city::before,
.city::after {
  position: absolute;
  bottom: 90px;
  width: 38px;
  background: rgba(33, 119, 190, .09);
  border-radius: 12px 12px 0 0;
  content: "";
}
.city { height: 135px; }
.city::before { height: 90px; left: -50px; bottom: 0; }
.city::after { height: 175px; left: 52px; bottom: 0; }
.city-left { left: 42px; }
.city-right { right: 18px; transform: scale(.92); }

.tree {
  position: absolute;
  bottom: 70px;
  width: 38px;
  height: 94px;
  border-radius: 25px 25px 7px 7px;
  background: linear-gradient(180deg, #79cf83, #3aa66f);
}
.tree::after {
  content: "";
  position: absolute;
  left: 17px;
  top: 38px;
  width: 4px;
  height: 55px;
  border-radius: 999px;
  background: #2d7d64;
}
.t1 { left: 58px; }
.t2 { right: 6px; bottom: 78px; }

.pin {
  position: absolute;
  left: 110px;
  bottom: 123px;
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 4px;
  transform: rotate(-45deg);
  display: grid;
  place-items: center;
  color: #fff;
  background: #ff8d61;
  font-size: 11px;
}
.pin::first-letter { transform: rotate(45deg); }

.platform {
  position: absolute;
  left: 45px;
  right: 10px;
  bottom: 36px;
  height: 82px;
  border-radius: 50%;
  background: linear-gradient(180deg, #1284e8, #075dbc);
  box-shadow: 0 20px 35px rgba(0, 97, 188, .28);
}

.phone {
  position: absolute;
  right: 104px;
  bottom: 72px;
  width: 170px;
  height: 318px;
  border-radius: 34px;
  background: linear-gradient(135deg, #174d83, #08264e);
  box-shadow: 15px 18px 28px rgba(13, 67, 128, .28);
  padding: 20px 16px 16px;
}
.phone::before {
  content: "";
  position: absolute;
  inset: 12px;
  border-radius: 24px;
  background: #f8fbff;
}
.phone-notch {
  position: absolute;
  top: 11px;
  left: 58px;
  right: 58px;
  height: 12px;
  z-index: 2;
  border-radius: 0 0 9px 9px;
  background: #08264e;
}

.awning {
  position: absolute;
  z-index: 3;
  left: -12px;
  right: 26px;
  top: 58px;
  height: 60px;
  transform: skewX(-18deg);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 10px 10px 14px 14px;
  overflow: hidden;
  box-shadow: 0 8px 13px rgba(0,0,0,.1);
}
.awning span:nth-child(odd) { background: #1784ee; }
.awning span:nth-child(even) { background: #fff; }

.phone-grid {
  position: absolute;
  z-index: 3;
  top: 132px;
  left: 34px;
  right: 34px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
.phone-grid div {
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: #eef6ff;
  box-shadow: inset 0 0 0 1px rgba(23,132,238,.08);
}

.phone-card {
  position: absolute;
  z-index: 3;
  left: 34px;
  right: 34px;
  bottom: 35px;
  height: 49px;
  border-radius: 10px;
  background: #eef6ff;
}
.phone-card span {
  position: absolute;
  left: 10px;
  top: 12px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #64a7ef;
}
.phone-card p {
  position: absolute;
  left: 42px;
  right: 10px;
  height: 7px;
  margin: 0;
  border-radius: 999px;
  background: #b8daf8;
}
.phone-card p:nth-of-type(1) { top: 13px; }
.phone-card p:nth-of-type(2) { top: 27px; width: 52px; }

.qr-board {
  position: absolute;
  z-index: 4;
  right: 0;
  bottom: 76px;
  width: 116px;
  min-height: 156px;
  padding: 13px 12px 11px;
  border-radius: 9px;
  text-align: center;
  color: var(--blue);
  background: #fff;
  box-shadow: 14px 18px 25px rgba(14, 74, 139, .26);
  transform: rotate(4deg);
}
.qr-board::after {
  content: "";
  position: absolute;
  left: 13px;
  right: 13px;
  bottom: -12px;
  height: 18px;
  border-radius: 0 0 9px 9px;
  background: #0b63bd;
  z-index: -1;
}
.qr-board strong {
  font-size: 19px;
  font-style: italic;
}
.fake-qr {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin: 8px auto 8px;
  width: 70px;
}
.fake-qr span {
  aspect-ratio: 1;
  border-radius: 1px;
  background: #dbeeff;
}
.fake-qr span.on { background: var(--blue); }
.qr-board small {
  color: #fff;
  display: block;
  margin: 0 -12px -11px;
  padding: 7px 4px 8px;
  border-radius: 0 0 9px 9px;
  background: #0b63bd;
  font-size: 8px;
  font-weight: 800;
}

.card-section {
  margin-top: 18px;
  padding: 23px 28px 20px;
  border-radius: 24px;
  background: var(--panel);
  box-shadow: var(--shadow);
}

.card-section h2,
.final-cta h2 {
  margin: 0;
  text-align: center;
  color: var(--dark-blue);
  font-size: clamp(24px, 3.3vw, 31px);
  line-height: 1.16;
  font-weight: 950;
  letter-spacing: -0.03em;
}

.timeline-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: start;
  gap: 0;
  margin-top: 19px;
}

.step-card {
  position: relative;
  text-align: center;
  min-width: 0;
}

.step-number {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  margin: 0 auto 9px;
  border-radius: 50%;
  color: #fff;
  font-size: 18px;
  font-weight: 900;
}
.step-number.green { background: var(--green); }
.step-number.blue { background: var(--blue); }
.step-number.orange { background: var(--orange); }
.step-number.purple { background: var(--purple); }

.tone-icon {
  width: 75px;
  height: 75px;
  margin: 0 auto 14px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 34px;
}
.tone-icon.small {
  width: 60px;
  height: 60px;
  margin: 0 14px 0 0;
  font-size: 27px;
  flex: 0 0 auto;
}
.tone-icon.green { background: #dff7e9; color: var(--green); }
.tone-icon.blue { background: #e4f2ff; color: var(--blue); }
.tone-icon.orange { background: #fff1df; color: var(--orange); }
.tone-icon.purple { background: #f0e8ff; color: var(--purple); }
.tone-icon.teal { background: #e0fbfb; color: var(--teal); }

.step-card p {
  max-width: 130px;
  margin: 0 auto;
  font-size: 15px;
  line-height: 1.35;
  font-weight: 820;
}
.arrow {
  display: none;
}
.step-card:not(:last-child)::after {
  content: "›";
  position: absolute;
  top: 76px;
  right: -10px;
  font-size: 48px;
  line-height: 1;
  font-weight: 900;
  color: #2f76c0;
  text-shadow: 0 5px 12px rgba(0, 91, 170, .17);
}

.section-lead {
  margin: 8px 0 20px;
  text-align: center;
  color: var(--muted);
  font-size: 16px;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

.role-card {
  min-height: 234px;
  padding: 24px 13px 16px;
  border-radius: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform .2s ease, box-shadow .2s ease;
  border: 1px solid rgba(255,255,255,.65);
}
.role-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 30px rgba(29, 91, 154, .16);
}
.role-card.blue { background: linear-gradient(180deg, #eaf6ff, #f8fcff); color: var(--blue); }
.role-card.green { background: linear-gradient(180deg, #e9fbf1, #f8fffb); color: var(--green); }
.role-card.orange { background: linear-gradient(180deg, #fff1e2, #fffaf4); color: var(--orange); }
.role-card.purple { background: linear-gradient(180deg, #f4ecff, #fcf9ff); color: var(--purple); }
.role-card.teal { background: linear-gradient(180deg, #e6fbfb, #f8ffff); color: var(--teal); }

.role-icon {
  font-size: 49px;
  line-height: 1;
  margin-bottom: 14px;
}
.role-card h3 {
  min-height: 38px;
  margin: 0 0 10px;
  font-size: 15px;
  line-height: 1.15;
  font-weight: 950;
}
.role-card p {
  min-height: 54px;
  margin: 0 0 15px;
  color: var(--text);
  font-size: 14px;
  line-height: 1.35;
  font-weight: 650;
}
.round-arrow {
  width: 36px;
  height: 36px;
  margin-top: auto;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #fff;
  font-size: 32px;
  line-height: 1;
  font-weight: 900;
  background: currentColor;
  box-shadow: 0 8px 14px rgba(0,0,0,.13);
}
.round-arrow::first-letter { color: #fff; }
.role-card .round-arrow { color: currentColor; }
.role-card .round-arrow { background: currentColor; }
.role-card .round-arrow { -webkit-text-fill-color: #fff; }

.goals-section {
  padding-bottom: 24px;
}
.goals-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-top: 27px;
}
.goal-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 18px;
  min-height: 76px;
}
.goal-item strong {
  font-size: 15px;
  line-height: 1.35;
  font-weight: 850;
}
.goal-divider {
  position: absolute;
  right: 0;
  top: 4px;
  bottom: 4px;
  width: 1px;
  background: #cfe5f8;
}

.final-cta {
  margin-top: 20px;
  min-height: 145px;
  padding: 22px 28px;
  display: grid;
  grid-template-columns: 124px 1fr auto;
  align-items: center;
  gap: 20px;
  border-radius: 22px;
  color: #fff;
  background: linear-gradient(135deg, #004ea7, #0871d7 55%, #0055b8);
  box-shadow: 0 20px 38px rgba(3, 91, 180, .28);
}
.final-cta h2 {
  color: #fff;
  text-align: left;
  margin-bottom: 10px;
}
.final-cta p {
  margin: 0;
  font-size: 17px;
  line-height: 1.5;
  font-weight: 560;
}
.rocket {
  width: 96px;
  height: 96px;
  display: grid;
  place-items: center;
  font-size: 70px;
}
.final-btn {
  min-width: 284px;
  min-height: 62px;
  color: var(--blue);
  background: #fff;
  box-shadow: inset 0 0 0 1px rgba(0, 91, 188, .08);
}
.final-btn span {
  color: #fff;
  background: var(--blue);
}

.trust-bar {
  margin: 20px auto 0;
  width: 92%;
  min-height: 74px;
  padding: 12px 22px;
  display: grid;
  grid-template-columns: 56px 1fr auto;
  align-items: center;
  gap: 18px;
  border-radius: 18px;
  background: #fff;
  box-shadow: var(--shadow);
}
.shield {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  font-size: 32px;
  background: #e9f4ff;
}
.trust-bar p {
  margin: 0;
  color: #4f647d;
  font-size: 16px;
  line-height: 1.45;
  font-weight: 560;
}
.trust-bar a {
  color: var(--blue);
  font-size: 15px;
  font-weight: 850;
  white-space: nowrap;
}

@media (max-width: 820px) {
  .page-shell {
    padding: 22px 18px;
  }
  .hero-grid {
    grid-template-columns: 1fr;
  }
  .hero-section {
    min-height: auto;
  }
  .hero-illustration {
    min-height: 340px;
  }
  .phone {
    right: 118px;
  }
  .qr-board {
    right: 30px;
  }
  .timeline-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .step-card {
    display: grid;
    grid-template-columns: 42px 70px 1fr;
    align-items: center;
    text-align: left;
    gap: 12px;
  }
  .step-number { margin: 0; }
  .tone-icon { margin: 0; width: 64px; height: 64px; }
  .step-card p { max-width: none; margin: 0; }
  .step-card:not(:last-child)::after { display: none; }
  .roles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .goals-grid {
    grid-template-columns: 1fr 1fr;
    gap: 18px 0;
  }
  .final-cta {
    grid-template-columns: 80px 1fr;
  }
  .final-btn {
    grid-column: 1 / -1;
    justify-self: stretch;
    min-width: 0;
  }
}

@media (max-width: 560px) {
  .page-shell {
    border-radius: 0;
    padding: 18px 14px 20px;
  }
  .topbar {
    align-items: center;
    gap: 14px;
  }
  .logo-text {
    font-size: 34px;
  }
  .program-badge {
    padding: 9px 12px;
  }
  .program-badge strong {
    font-size: 12px;
  }
  .program-badge span {
    width: 27px;
    height: 27px;
  }
  .hero-content h1 {
    font-size: 38px;
  }
  .hero-content p {
    font-size: 16px;
  }
  .btn {
    width: 100%;
    min-height: 52px;
    padding: 0 16px;
    font-size: 14px;
  }
  .hero-illustration {
    min-height: 280px;
    transform: scale(.86);
    transform-origin: center top;
    margin-bottom: -42px;
  }
  .card-section {
    padding: 20px 16px;
    border-radius: 20px;
  }
  .card-section h2,
  .final-cta h2 {
    font-size: 22px;
  }
  .roles-grid {
    grid-template-columns: 1fr;
  }
  .role-card {
    min-height: 0;
  }
  .goals-grid {
    grid-template-columns: 1fr;
  }
  .goal-divider { display: none; }
  .goal-item { padding: 0; }
  .final-cta {
    padding: 20px 18px;
    grid-template-columns: 1fr;
    text-align: center;
  }
  .final-cta h2 { text-align: center; }
  .rocket { margin: 0 auto; }
  .trust-bar {
    width: 100%;
    grid-template-columns: 48px 1fr;
  }
  .trust-bar a {
    grid-column: 2;
  }
}
`;
