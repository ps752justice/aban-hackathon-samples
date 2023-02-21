import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { languageSelector } from "../../store/language/selectors";
import { Layout } from "../layout/layout";
import "./about.scss";

export const About: React.FC = () => {
    const selectedLanguage = useSelector(languageSelector);

    return (
        <Layout hasTimeline={false}>
            <Row>
                {selectedLanguage.code === "en" && (
                    <Col sm={12}>
                        <div className="about-container">
                            <p>
                                This project is designed to provide information
                                about the victims of the autocratic regime to
                                the audience through Iranian's journey from the
                                Islamic Republic to a true democracy. <br />
                                <br />
                            </p>
                            <p>
                                <h5>
                                    Below are the main features considered while
                                    designing the system
                                </h5>
                                <ul>
                                    <li>
                                        A multilingual system where we can share
                                        the contents with other nationalities
                                    </li>
                                    <li>
                                        Covering the martyr's news and details
                                        per each historical event of Iranian's
                                        Revolution
                                        <ul>
                                            <li>Bloody November</li>
                                            <li>
                                                PS752 Flight - This event is a
                                                work in progress and has not
                                                been implemented completely. It
                                                is just a placeholder for future
                                                implementation
                                            </li>
                                            <li>
                                                November 2022 - This event is a
                                                work in progress and has not
                                                been implemented completely. It
                                                is just a placeholder for future
                                                implementation
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Social media sharing capability</li>
                                    <li>
                                        Being userfriendly and attractive
                                        <ul>
                                            <li>
                                                Interactive map of Iran with
                                                martyr's indicator and details
                                                per province
                                            </li>
                                            <li>
                                                Search by name, province, or
                                                city
                                                <ul>
                                                    <li>
                                                        The list of victims in
                                                        English language is
                                                        limited and the full
                                                        list is not yet
                                                        translated
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                A gallery to support art works
                                            </li>
                                            <li>
                                                Responsive design that makes the
                                                website mobile browser
                                                compatible
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <h5>A brief of technical specifications</h5>
                                <ul>
                                    <li>
                                        Dockerized Backend
                                        <ul>
                                            <li>Golang</li>
                                            <li>Mysql</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Dockerized Frontend
                                        <ul>
                                            <li>
                                                React
                                                <ul>
                                                    <li>Responsive</li>
                                                    <li>Themed</li>
                                                    <li>Redux Saga</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <h5>Extendibility points</h5>
                                <ul>
                                    <li>
                                        Adding admin dashboard to add victims
                                        details and modify contents
                                    </li>
                                    <li>
                                        Designing an interactive plane map with
                                        hotspots over the seats where users can
                                        see the victim's details by click each
                                        seat.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </Col>
                )}
                {selectedLanguage.code === "fa" && (
                    <Col sm={12}>
                        <div className="about-container">
                            <p>
                                این پروژه با هدف فراهم کردن بستر مناسب جهت اطلاع
                                رسانی درباره قربانیان حکومت جمهوری اسلامی در طول
                                مسیر گذار ملت ایران از این حکومت خودکامه به یک
                                آزادی دموکراتیک و همه شمول، طراحی و پیاده سازی
                                شده است.
                                <br />
                                <br />
                            </p>
                            <p>
                                <h5>
                                    ویژگی های اصلی در نظر گرفته شده در طراحی این
                                    سیستم به شرح زیر می باشد:
                                </h5>
                                <ul>
                                    <li>
                                        چند زبانه بودن سیستم جهت ایجاد بستر
                                        اشتراک گذاری با دیگر ملیت ها
                                    </li>
                                    <li>
                                        پوشش شهدای مسیر آزادی به تفکیک
                                        رویدادههای تاریخی (لازم به ذکر است که در
                                        حال حاضر، صرفا آبان 98 پوشش داده شده و
                                        دیگر رویدادها جهت نمونه قرار داده شده
                                        است. امکان افزودن رویدادهای بیشتر نیز به
                                        راحتی فراهم می باشد)
                                        <ul>
                                            <li>آبان خونین</li>
                                            <li>هواپیمای PS752</li>
                                            <li>آبان 1401</li>
                                        </ul>
                                    </li>
                                    <li>
                                        قابلیت اشتراک گذاری در شبکه های اجتماعی
                                    </li>
                                    <li>
                                        سهولت و جذابیت استفاده
                                        <ul>
                                            <li>
                                                نقشه تعاملی ایران جهت تفکیک لیست
                                                شهدا به تفکیک استان
                                            </li>
                                            <li>
                                                قابلیت جستجو بر اساس نام، شهر و
                                                یا استان
                                                <ul>
                                                    <li>
                                                        لیست جان باختگان به زبان
                                                        فارسی تمامی افراد در
                                                        فایل داده شده را شامل
                                                        میشود اما در زبان
                                                        انگلیسی، تعداد محدودی از
                                                        آنها جهت نمونه ترجمه و
                                                        در پایگاه داده سیستم
                                                        ذخیره شده است
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                یک گالری جهت نمایش آثار هنری
                                                هنرمندان
                                            </li>
                                            <li>استفاده آسان در موبایل</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <h5>گزیده ای از ویژگی های فنی سیستم</h5>
                                <ul>
                                    <li>
                                        Dockerized Backend
                                        <ul>
                                            <li>Golang</li>
                                            <li>Mysql</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Dockerized Frontend
                                        <ul>
                                            <li>
                                                React
                                                <ul>
                                                    <li>Responsive</li>
                                                    <li>Themed</li>
                                                    <li>Redux Saga</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <h5>نقاط توسعه</h5>
                                <ul>
                                    <li>
                                        افزودن داشبورد ادمین برای اضافه کردن
                                        اطلاعات و کنترل محتوا
                                    </li>
                                    <li>
                                        طراحی مختص هر رویداد. یکی از ایده های
                                        اجرا نشده، طراحی نقشه تعاملی هواپیما
                                        برای رویداد هواپیمای PS752 بود که با
                                        کلیک بر روی هر صندلی، اطلاعات مسافر مورد
                                        نظر به نمایش در می آید.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </Col>
                )}
            </Row>
        </Layout>
    );
};
