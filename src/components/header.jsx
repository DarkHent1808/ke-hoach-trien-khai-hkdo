import React from "react";

const defaultItems = [
  { key: "so-khcn", label: "Sở KHCN", href: "/so-khcn" },
  { key: "ubnd", label: "UBND\nxã/phường", href: "/ubnd" },
  { key: "to-cnscd", label: "Tổ\nCNSCĐ", href: "/to-cnscd" },
  { key: "ho-kinh-doanh", label: "Hộ kinh\ndoanh", href: "/ho-kinh-doanh" },
  { key: "effect", label: "EFFECT", href: "/effect" },
  { key: "nguoi-tim-mua", label: "Người\ntìm mua", href: "/nguoi-tim-mua" },
];

export default function RoleHeader({
  activeKey = "ubnd",
  items = defaultItems,
  homeHref = "/",
  onNavigate,
}) {
  const handleClick = (event, item) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(item);
  };

  return (
    <header className="role-header">
      <style>{css}</style>

      <a className="role-header__home" href={homeHref} aria-label="Về trang chủ">
        <HomeIcon />
      </a>

      <nav className="role-header__nav" aria-label="Điều hướng vai trò">
        {items.map((item, index) => {
          const active = item.key === activeKey;

          return (
            <React.Fragment key={item.key}>
              <a
                href={item.href}
                className={`role-header__item${active ? " is-active" : ""}`}
                onClick={(event) => handleClick(event, item)}
              >
                <span>{item.label}</span>
              </a>

              {index < items.length - 1 && <i className="role-header__divider" aria-hidden="true" />}
            </React.Fragment>
          );
        })}
      </nav>
    </header>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 11.4 12 3l9 8.4v8.1a1.5 1.5 0 0 1-1.5 1.5H15v-6.2H9V21H4.5A1.5 1.5 0 0 1 3 19.5v-8.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

const css = `
.role-header {
  --header-blue-1: #006ce0;
  --header-blue-2: #004fb8;
  --header-blue-3: #00439d;
  --active-blue: #075fbd;
  --separator: rgba(255, 255, 255, 0.35);

  width: 100%;
  height: 116px;
  padding: 22px 28px 16px;
  display: grid;
  grid-template-columns: 46px 1fr;
  align-items: start;
  column-gap: 21px;
  color: #fff;
  background:
    radial-gradient(circle at 30% 0%, rgba(41, 145, 255, 0.5) 0, rgba(41, 145, 255, 0) 35%),
    linear-gradient(180deg, var(--header-blue-1) 0%, var(--header-blue-2) 63%, var(--header-blue-3) 100%);
  box-shadow: inset 0 -1px 0 rgba(255,255,255,.12);
}

.role-header__home {
  width: 44px;
  height: 58px;
  display: grid;
  place-items: center;
  color: #fff;
  border-radius: 14px;
  transition: transform .18s ease, background .18s ease;
}

.role-header__home:hover {
  transform: translateY(-1px);
  background: rgba(255,255,255,.09);
}

.role-header__home svg {
  width: 37px;
  height: 37px;
  display: block;
}

.role-header__nav {
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(88px, .9fr) 1px minmax(132px, 1.25fr) 1px minmax(92px, .9fr) 1px minmax(120px, 1.15fr) 1px minmax(92px, .9fr) 1px minmax(112px, 1fr);
  align-items: start;
  column-gap: 12px;
}

.role-header__item {
  position: relative;
  height: 78px;
  padding: 0 12px;
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,.96);
  text-align: center;
  font-size: 19px;
  line-height: 1.12;
  font-weight: 760;
  letter-spacing: -.25px;
  text-decoration: none;
  white-space: pre-line;
  transition: transform .18s ease, background .18s ease, color .18s ease, box-shadow .18s ease;
}

.role-header__item:hover {
  transform: translateY(-1px);
  background: rgba(255,255,255,.09);
}

.role-header__item.is-active {
  color: var(--active-blue);
  background: #fff;
  font-weight: 900;
  box-shadow:
    0 10px 24px rgba(0, 29, 87, .28),
    inset 0 0 0 1px rgba(255,255,255,.9);
}

.role-header__item.is-active::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -13px;
  width: 59px;
  height: 6px;
  border-radius: 999px;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,.12);
}

.role-header__divider {
  width: 1px;
  height: 40px;
  margin-top: 18px;
  background: var(--separator);
  border-radius: 999px;
}

@media (max-width: 860px) {
  .role-header {
    height: 106px;
    padding: 18px 18px 14px;
    grid-template-columns: 42px 1fr;
    column-gap: 14px;
  }

  .role-header__home {
    width: 42px;
    height: 56px;
  }

  .role-header__home svg {
    width: 34px;
    height: 34px;
  }

  .role-header__nav {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding: 0 0 16px;
    scrollbar-width: none;
  }

  .role-header__nav::-webkit-scrollbar {
    display: none;
  }

  .role-header__item {
    flex: 0 0 auto;
    min-width: 102px;
    height: 70px;
    padding: 0 16px;
    font-size: 16px;
  }

  .role-header__item:nth-of-type(2) {
    min-width: 126px;
  }

  .role-header__divider {
    flex: 0 0 1px;
    height: 34px;
    margin-top: 18px;
  }
}

@media (max-width: 520px) {
  .role-header {
    height: 94px;
    padding: 14px 12px 11px;
    grid-template-columns: 38px 1fr;
    column-gap: 10px;
  }

  .role-header__home {
    width: 38px;
    height: 52px;
  }

  .role-header__home svg {
    width: 31px;
    height: 31px;
  }

  .role-header__item {
    min-width: 94px;
    height: 64px;
    border-radius: 14px;
    font-size: 14px;
  }

  .role-header__item.is-active::after {
    bottom: -10px;
    width: 50px;
    height: 5px;
  }
}
`;
