import Aside from "../components/aside";
import Footer from "../components/footer";
import Header from "../components/header";
import LandingSwiper from "../components/landing-swiper";
import MainPageDesc from "../components/main-page-description";
import PlateWrapper from "../components/plate-wrapper";
import { ServiceButton } from "../components/service-button";
import TopFooter from "../components/top-footer";
import TopMenu from "../components/top-menu";
import "../styles/globals.module.css";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <title>
        آیتول؛ خدمات یکپارچه خودرو، استعلام و پرداخت عوارض و بیمه ماشین
      </title>
      <div>
        <div id="__layout">
          <div className="v-application v-application--is-rtl theme--light">
            <div className="v-application--wrap">
              <div className="default-bg">
                <div className="bg-color">
                  <div>
                    <TopMenu></TopMenu>
                    <div >
                      <Header></Header>
                      <Aside></Aside>
                      <div className="v-dialog__container"></div>
                    </div>
                  </div>
                  <div className="v-dialog__container"></div>
                  <main
                    className="v-main main-container mb-1"
                    style={{
                      paddingTop: 0,
                      paddingRight: 0,
                      paddingBottom: 0,
                      paddingLeft: 0,
                    }}
                  >
                    <div className="v-main__wrap">
                      <div>
                        <div>
                          <div className="slider">
                            <LandingSwiper></LandingSwiper>
                          </div>
                          <div className="container transform-top">
                            <div className="row plate-frame">
                              <div className="mdAndUp col col-6">
                                <h1>آیتول؛ همه خدمات خودرو</h1>
                                <p>
                                  پلاک خود را وارد کرده، از وضعیت پرداختی‌های
                                  خودرویتان مطلع شوید.
                                </p>
                              </div>
                              <PlateWrapper></PlateWrapper>
                            </div>
                          </div>
                          <div className="quick-access-section">
                            <div className="container">
                              <div className="row service-wrapper">
                                <div className="col col-12">
                                  <div className="title-section">
                                    <div className="text-dot" />
                                    <h2>بدهی‌های خودرو</h2>
                                  </div>
                                  <div className="horizontal-scroll horizontal-scroll-style">
                                    <div className="services-collection">
                                      <ServiceButton
                                        alt="استعلام و پرداخت خلافی خودرو"
                                        src="../icons/Police-penalty.svg"
                                        text="خلافی خودرو"
                                        href="#"
                                        title="استعلام و پرداخت خلافی خودرو"
                                      ></ServiceButton>

                                      <ServiceButton
                                        href="/query/freeway"
                                        title="استعلام و پرداخت عوارض آزادراهی آنیرو و تهران شمال"
                                        src="./icons/Toll.svg"
                                        alt="عوارض آزادراهی"
                                        text="عوارض آزادراهی"
                                      />
                                      <ServiceButton
                                        href="/query/annual"
                                        title="استعلام و پرداخت عوارض سالیانه"
                                        src="./icons/Annual-tax.svg"
                                        alt="عوارض سالیانه"
                                        text="عوارض سالیانه"
                                      />

                                      <ServiceButton
                                        href="/query/car-transfer-tax"
                                        title="استعلام و پرداخت مالیات نقل و انتقال خودرو"
                                        src="./icons/car-transfer-tax.svg"
                                        alt="مالیات نقل و انتقال خودرو"
                                        text="مالیات نقل و انتقال خودرو"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col col-12">
                                  <div className="title-section">
                                    <div className="text-dot" />
                                    <h2>خدمات بیمه</h2>
                                  </div>
                                  <div
                                    className="horizontal-scroll horizontal-scroll-style"
                                  
                                  >
                                    <div
                                      className="services-collection"
                                     
                                    >
                                      <ServiceButton
                                        href="/insurance/car/third-party"
                                        title="خرید و تمدید بیمه شخص ثالث"
                                        src="./icons/Car-insurance.svg"
                                        alt="بیمه شخص ثالث خودرو"
                                        text="بیمه شخص ثالث خودرو"
                                        spanText="خرید قسطی"
                                      />

                                      <ServiceButton
                                        href="/insurance/car/body"
                                        title="خرید و تمدید بیمه بدنه"
                                        src="./icons/Body-Insurance.svg"
                                        alt="بیمه بدنه خودرو"
                                        text="بیمه بدنه خودرو"
                                      />

                                      <ServiceButton
                                        href="/insurance/motorcycle/third-party"
                                        src="./icons/Motorcycle-insurance.svg"
                                        alt="بیمه شخص ثالث موتورسیکلت"
                                        text="بیمه شخص ثالث موتورسیکلت"
                                        title=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col col-12">
                                  <div className="title-section">
                                    <div className="text-dot" />
                                    <h2>استعلام مدارک</h2>
                                  </div>
                                  <div
                                    className="horizontal-scroll horizontal-scroll-style"
                                  
                                  >
                                    <div
                                      className="services-collection"
                                    
                                    >
                                      <ServiceButton
                                        href="/query/technical-inspection"
                                        title="استعلام معاینه فنی"
                                        src="./icons/query-technical-inspection.svg"
                                        alt="استعلام معاینه فنی"
                                        text="استعلام وضعیت معاینه فنی"
                                        spanText="جدید"
                                      />

                                      <ServiceButton
                                        href="/police-inquiry/negative-point"
                                        title="استعلام نمره منفی گواهینامه"
                                        src="./icons/Driver-license-negative-point.svg"
                                        alt="نمره منفی گواهینامه"
                                        text="نمره منفی گواهینامه"
                                      />

                                      <ServiceButton
                                        href="/police-inquiry/vehicle-document"
                                        title="استعلام کارت و سند خوردو"
                                        src="./icons/Car-documents-inquery.svg"
                                        alt="استعلام وضعیت کارت و سند خودرو"
                                        text="استعلام وضعیت کارت و سند خودرو"
                                      />

                                      <ServiceButton
                                        href="/police-inquiry/driver-license-status"
                                        title="استعلام وضعیت گواهینامه"
                                        src="./icons/Driving-license-inquiry.svg"
                                        alt="استعلام وضعیت گواهینامه"
                                        text="استعلام وضعیت گواهینامه"
                                      />

                                      <ServiceButton
                                        href="/police-inquiry/licenses"
                                        title="استعلام پلاک با کد ملی"
                                        src="./icons/Car-plate-inquery.svg"
                                        alt="استعلام پلاک‌های فعال"
                                        text="استعلام پلاک‌های فعال"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col col-12">
                                  <div className="title-section">
                                    <div className="text-dot" />
                                    <h2>کارپرداز</h2>
                                  </div>
                                  <div
                                    className="horizontal-scroll horizontal-scroll-style"
                                 
                                  >
                                    <div
                                      className="services-collection"
                                  
                                    >
                                      <ServiceButton
                                        href="/carpardaz/technical-inspection"
                                        src="./icons/Technical-inspection.svg"
                                        alt="معاینه فنی غیرحضوری"
                                        text="معاینه فنی غیرحضوری"
                                        title="معاینه فنی غیرحضوری"
                                      />

                                      <ServiceButton
                                        href="/carpardaz/license-replacement"
                                        src="./icons/License-plate-replacement.svg"
                                        alt="تعویض پلاک غیرحضوری"
                                        text="تعویض پلاک غیرحضوری"
                                        title="تعویض پلاک غیرحضوری"
                                      />

                                      <ServiceButton
                                        href="/carpardaz/car-clearance"
                                        src="./icons/Parking-release.svg"
                                        alt="ترخیص خودروی غیرحضوری"
                                        text="ترخیص خودروی غیرحضوری"
                                        title="ترخیص خودروی غیرحضوری"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="container">
                            <a id="static-banner" href="#" target="_blank">
                              <div>
                                <Image
                                  width={990}
                                  height={426}
                                  src="/images/itoll-shop-desktop.webp"
                                  alt="آیتول شاپ"
                                  className="static-banner-className image-full"
                                />
                              </div>
                            </a>
                          </div>
                          <MainPageDesc />
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
                <div className="white">
                  <TopFooter />
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
