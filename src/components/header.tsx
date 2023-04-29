import "../styles/globals.module.css";

export default function Header() {
  return (
    <div className="header-bg transparent">
      <div className="container">
        <div className="row smAndUp ma-0 ma-sm-n3">
          <div className="d-flex align-center pr-5 col-lg-3 col-6">
            <img
              src="./icons/menu-white.svg"
              width={24}
              height={24}
              alt="منو"
              loading="lazy"
              aria-hidden="true"
              className="menu"
            />
            <div className="splitter mx-8" />
          </div>
          <div className="lgAndUp col col-6">
            <ul className="d-flex soft_gray--text" />
          </div>
          <div className="d-flex justify-end align-center pl-5 col-lg-3 col-6">
            <a
              href="/"
              aria-current="page"
              className="nuxt-link-exact-active nuxt-link-active"
            >
              <img
                src="./icons/itoll-white.svg"
                width={128}
                height={36}
                alt="آیتول، سامانه خودروی من"
                loading="lazy"
                className="mt-2"
              />
            </a>
          </div>
        </div>
        <div className="row d-flex align-center xsOnly mt-n3">
          <div className="d-flex align-center pr-5 py-0 col col-3">
            <img
              src="./icons/menu-white.svg"
              width={24}
              height={24}
              alt="منو"
              loading="lazy"
              aria-hidden="true"
              className="menu"
            />
          </div>
          <div className="d-flex justify-center py-0 col col-6">
            <a
              href="/"
              aria-current="page"
              className="nuxt-link-exact-active nuxt-link-active"
            >
              <img
                src="/_ipx/s_76x21/itoll-white.svg"
                width={76}
                height={21}
                alt="آیتول، سامانه خودروی من"
                loading="lazy"
                className="d-block"
              />
            </a>
          </div>
          <div className="d-flex align-center justify-end pl-5 py-0 col col-3">
            <a href="/account" style={{ display: "none" }}>
              <img
                src="./icons/ProfileCircleWhite.svg"
                width={24}
                height={24}
                alt="پروفایل"
                loading="lazy"
                className="d-block"
              />
            </a>
            <button
              type="button"
              className="login-btn px-2 v-btn v-btn--text theme--light v-size--small"
              style={{ color: "#fff", caretColor: "#fff" }}
              data-v-b8a77e78=""
            >
              <span className="v-btn__content">ورود</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
