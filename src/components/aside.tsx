import "../styles/globals.module.css";

export default function Aside() {
  return (
    <aside
      className="v-navigation-drawer v-navigation-drawer--absolute v-navigation-drawer--close v-navigation-drawer--is-mobile v-navigation-drawer--right v-navigation-drawer--temporary theme--light"
      style={{
        height: "100%",
        top: 0,
        transform: "translateX(100%)",
        width: "80%",
      }}
      data-v-a59ce20e=""
      data-v-dbf08de2=""
    >
      <div className="v-navigation-drawer__content">
        <div className="menu" data-v-a59ce20e="">
          <div className="user-profile" data-v-a59ce20e="">
            <a
              href="/account"
              className="user-mobile"
              style={{ display: "none" }}
              data-v-a59ce20e=""
            >
              <p data-v-a59ce20e="">حساب کاربری من</p>
              <span data-v-a59ce20e="" />
            </a>
            <button
              type="button"
              // loadingcolor="primary"
              className="v-btn v-btn--text theme--light v-size--default"
              style={{
                color: "#00843E",
                caretColor: "#00843E",
              }}
              data-v-b8a77e78=""
              data-v-a59ce20e=""
            >
              <span className="v-btn__content">
                ورود <span className="login-splitter" data-v-a59ce20e="" />{" "}
                ثبت‌نام
              </span>
            </button>
          </div>
          <div className="divider-line my-2" data-v-a59ce20e="" />
          <div style={{ display: "none" }} data-v-a59ce20e="">
            <a href="/user/topup" data-v-a59ce20e="">
              <div className="menu-item pb-3" data-v-a59ce20e="">
                <div
                  className="d-flex justify-space-between align-center"
                  data-v-a59ce20e=""
                >
                  <div className="d-flex align-center" data-v-a59ce20e="">
                    <p className="mb-0" data-v-a59ce20e="">
                      {" "}
                      افزایش اعتبار کیف پول{" "}
                    </p>
                  </div>
                </div>
                <div className="details" data-v-a59ce20e="">
                  {" "}
                  اعتبار فعلی: <span data-v-a59ce20e=""> 0 تومان </span>
                </div>
              </div>
            </a>
            <a
              href="/user/direct-debit/0?utm_medium=web&utm_source=itoll&utm_campaign=core-directdebit-activation&utm_term=menu&utm_content=activation-directdebit"
              data-v-a59ce20e=""
            >
              <div
                className="menu-item d-flex justify-space-between align-center pt-3"
                data-v-a59ce20e=""
              >
                <div className="d-flex align-center" data-v-a59ce20e="">
                  <p className="mb-0" data-v-a59ce20e="">
                    {" "}
                    فعال کردن پرداخت مستقیم{" "}
                  </p>
                </div>
              </div>
            </a>
            <div className="divider-line my-2" data-v-a59ce20e="" />
          </div>
          <div
            role="list"
            className="v-list py-0 v-sheet theme--light"
            data-v-a59ce20e=""
          >
            <div className="v-list-group menu-list-group" data-v-a59ce20e="">
              <div
                tabIndex={0}
                aria-expanded="false"
                role="button"
                className="v-list-group__header v-list-item v-list-item--link theme--light"
              >
                <div
                  className="v-list-item__icon ml-3"
                  data-v-a59ce20e=""
                ></div>
                <div className="v-list-item__content" data-v-a59ce20e="">
                  <div
                    className="v-list-item__title menu-list-group-title"
                    data-v-a59ce20e=""
                  >
                    {" "}
                    بدهی خودرو{" "}
                  </div>
                </div>
                <div className="v-list-item__icon v-list-group__header__append-icon">
                  <span
                    aria-hidden="true"
                    className="v-icon notranslate theme--light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      className="v-icon__svg"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="v-list-group menu-list-group" data-v-a59ce20e="">
              <div
                tabIndex={0}
                aria-expanded="false"
                role="button"
                className="v-list-group__header v-list-item v-list-item--link theme--light"
              >
                <div
                  className="v-list-item__icon ml-3"
                  data-v-a59ce20e=""
                ></div>
                <div className="v-list-item__content" data-v-a59ce20e="">
                  <div
                    className="v-list-item__title menu-list-group-title"
                    data-v-a59ce20e=""
                  >
                    {" "}
                    بیمه{" "}
                  </div>
                </div>
                <div className="v-list-item__icon v-list-group__header__append-icon">
                  <span
                    aria-hidden="true"
                    className="v-icon notranslate theme--light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      className="v-icon__svg"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="v-list-group menu-list-group" data-v-a59ce20e="">
              <div
                tabIndex={0}
                aria-expanded="false"
                role="button"
                className="v-list-group__header v-list-item v-list-item--link theme--light"
              >
                <div
                  className="v-list-item__icon ml-3"
                  data-v-a59ce20e=""
                ></div>
                <div className="v-list-item__content" data-v-a59ce20e="">
                  <div
                    className="v-list-item__title menu-list-group-title"
                    data-v-a59ce20e=""
                  >
                    {" "}
                    استعلام مدارک{" "}
                  </div>
                </div>
                <div className="v-list-item__icon v-list-group__header__append-icon">
                  <span
                    aria-hidden="true"
                    className="v-icon notranslate theme--light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      className="v-icon__svg"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="v-list-group menu-list-group" data-v-a59ce20e="">
              <div
                tabIndex={0}
                aria-expanded="false"
                role="button"
                className="v-list-group__header v-list-item v-list-item--link theme--light"
              >
                <div
                  className="v-list-item__icon ml-3"
                  data-v-a59ce20e=""
                ></div>
                <div className="v-list-item__content" data-v-a59ce20e="">
                  <div
                    className="v-list-item__title menu-list-group-title"
                    data-v-a59ce20e=""
                  >
                    {" "}
                    کارپرداز{" "}
                  </div>
                </div>
                <div className="v-list-item__icon v-list-group__header__append-icon">
                  <span
                    aria-hidden="true"
                    className="v-icon notranslate theme--light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      className="v-icon__svg"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="v-list-group menu-list-group" data-v-a59ce20e="">
              <div
                tabIndex={0}
                aria-expanded="false"
                role="button"
                className="v-list-group__header v-list-item v-list-item--link theme--light"
              >
                <div
                  className="v-list-item__icon ml-3"
                  data-v-a59ce20e=""
                ></div>
                <div className="v-list-item__content" data-v-a59ce20e="">
                  <div
                    className="v-list-item__title menu-list-group-title"
                    data-v-a59ce20e=""
                  >
                    {" "}
                    تعمیر و نگهداری خودرو{" "}
                  </div>
                </div>
                <div className="v-list-item__icon v-list-group__header__append-icon">
                  <span
                    aria-hidden="true"
                    className="v-icon notranslate theme--light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      className="v-icon__svg"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="divider-line my-2" data-v-a59ce20e="" />
          <a href="/b2b" data-v-a59ce20e="">
            <div className="menu-item d-flex align-center" data-v-a59ce20e="">
              <p className="mb-0" data-v-a59ce20e="">
                {" "}
                کسب درآمد از آیتول{" "}
              </p>
            </div>
          </a>
          <a href="/contact" data-v-a59ce20e="">
            <div className="menu-item d-flex align-center" data-v-a59ce20e="">
              <p className="mb-0" data-v-a59ce20e="">
                {" "}
                پشتیبانی{" "}
              </p>
            </div>
          </a>
          <a
            id="side_menu_logout"
            // text=""
            href="#logout"
            style={{ display: "none" }}
            data-v-a59ce20e=""
          >
            <div className="menu-item d-flex align-center" data-v-a59ce20e="">
              <p className="mb-0" data-v-a59ce20e="">
                {" "}
                خروج از حساب کاربری{" "}
              </p>
            </div>
          </a>
        </div>
        <div
          className="v-dialog__container"
          data-v-45c8cbd4=""
          data-v-1bd77763=""
          data-v-a59ce20e=""
        ></div>
        <div
          className="v-dialog__container"
          data-v-45c8cbd4=""
          data-v-a59ce20e=""
        ></div>
      </div>
      <div className="v-navigation-drawer__border" />
    </aside>
  );
}
