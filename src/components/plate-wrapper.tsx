import "../styles/globals.module.css";

export default function PlateWrapper() {
  return (
    <div className="d-flex justify-end col-md-6 col-12" data-v-d89f398c="">
      <div
        className="plate-wrapper mx-auto mx-md-0"
        data-v-740ffb2a=""
        data-v-d89f398c=""
      >
        <div
          className="change-plate-title"
          style={{ display: "none" }}
          data-v-740ffb2a=""
        >
          <h5 data-v-740ffb2a="">پلاک:</h5>
          <button
            type="button"
            // loadingcolor="primary"
            className="v-btn v-btn--text theme--light v-size--small"
            style={{
              color: "#00843E",
              caretColor: "#00843E",
            }}
            data-v-b8a77e78=""
            data-v-740ffb2a=""
          >
            <span className="v-btn__content">تغییر یا ثبت پلاک</span>
          </button>
        </div>
        <h4 style={{ display: "" }} data-v-740ffb2a="">
          {" "}
          مشاهده اطلاعات خودرو با ثبت پلاک:{" "}
        </h4>
        <div aria-hidden="true" className="plate-action" data-v-740ffb2a="">
          <div className="plate-template" data-v-fd36d25e="" data-v-740ffb2a="">
            <div
              aria-hidden="true"
              className="plate medium"
              style={{ borderColor: "#EEEEEE" }}
              data-v-fd36d25e=""
            >
              <div className="iran-flag-place dark" data-v-fd36d25e="">
                <img
                  src="./icons/iran-flag-dark.svg"
                  width="16px"
                  height="48px"
                  alt="پرچم ایران"
                  data-v-fd36d25e=""
                />
              </div>
              <input
                type="tel"
                maxLength={2}
                placeholder="--"
                // disabled="disabled"
                defaultValue=""
                className="first-part"
                data-v-fd36d25e=""
              />
              <div
                aria-hidden="true"
                className="char-part pb-1"
                data-v-fd36d25e=""
              >
                <span className="empty" data-v-fd36d25e="">
                  _
                </span>
              </div>
              <input
                type="tel"
                maxLength={3}
                placeholder="---"
                // disabled="disabled"
                defaultValue=""
                className="third-part"
                data-v-fd36d25e=""
              />
              <div className="vertical-separator" data-v-fd36d25e="" />
              <div className="city-code-part" data-v-fd36d25e="">
                <img
                  src="./icons/iran.svg"
                  width="32px"
                  height={8}
                  alt="ایران"
                  style={{ height: "auto" }}
                  data-v-fd36d25e=""
                />
                <input
                  type="tel"
                  maxLength={2}
                  placeholder="--"
                  // disabled="disabled"
                  defaultValue=""
                  data-v-fd36d25e=""
                />
              </div>
            </div>
          </div>
          <div className="drop-down" data-v-7741a310="" data-v-740ffb2a="" />
        </div>
        <div data-v-e448e194="" data-v-740ffb2a="">
          <div
            className="v-dialog__container"
            data-v-45c8cbd4=""
            data-v-e448e194=""
          ></div>
          <div
            className="v-dialog__container"
            data-v-45c8cbd4=""
            data-v-e448e194=""
          ></div>
          <div
            className="v-dialog__container"
            data-v-45c8cbd4=""
            data-v-1bd77763=""
            data-v-e448e194=""
          ></div>
        </div>
        <div
          className="v-dialog__container"
          data-v-45c8cbd4=""
          data-v-278d395f=""
          data-v-740ffb2a=""
        ></div>
      </div>
    </div>
  );
}
