import { IEventResponse } from "./models/events-response";
import { ILanguage } from "./models/language-response";
import { ISummaryResponse } from "./models/summary-response";
import BloodyAbanEn from "../assets/images/bloody-aban-en.svg";
import BloodyAbanFa from "../assets/images/bloody-aban-fa.svg";
import PS752FlightEn from "../assets/images/ps752-flight-en.svg";
import PS752FlightFa from "../assets/images/ps752-flight-fa.svg";
import Aban1401En from "../assets/images/aban-1401-en.svg";
import Aban1401Fa from "../assets/images/aban-1401-fa.svg";

export const getSummaryService = async (
    language: ILanguage,
    event: IEventResponse
): Promise<ISummaryResponse | null> => {
    let ret: ISummaryResponse | null = null;
    if (!event) Promise.resolve(ret);
    switch (event.id) {
        case "1":
            ret = {
                icon: BloodyAbanEn,
                title: "Bloody Aban",
                description:
                    'In November 2019, protests broke out after the Iranian government implemented a price hike on fuel prices. The Iranian government carried out a brutal crackdown on the protests, with the wave of demonstrations later called "Bloody November". To block the sharing of information regarding the protests and the deaths of hundreds of protesters on social media platforms, the government shut down the Internet nationwide, resulting in a near-total internet blackout of around six days. In an effort to crush the protests, the Iranian government (according to Amnesty International) shot protesters dead from rooftops, helicopters, and at close range with machine gun fire. In an effort to mask the scale and casualty count of the protests, it hauled away large numbers of bodies of the dead protesters, and threatened families of slain protesters not to speak to the media or hold funerals.',
            } as ISummaryResponse;
            if (language.code === "fa") {
                ret = {
                    icon: BloodyAbanFa,
                    title: "آبان خونین",
                    description:
                        "اعتراضات آبان ۱۳۹۸ ایران یا آبان خونین مجموعهٔ اعتراضات مردمی و ضد حکومتی در سراسر ایران بود که در ۲۴ آبان ۱۳۹۸ و پس از انجام مجدد سهمیه‌بندی بنزین در ایران و افزایش ۲۰۰ درصدی قیمت بنزین آغاز شد. این اعتراضات که عمدتاً در محلات کارگری و فقیرنشین شهری متمرکز و در ابتدا مسالمت‌آمیز بود، در واکنش به افزایش قیمت بنزین آغاز شد ولی سپس نظام جمهوری اسلامی ایران و رهبران روحانی آن را هدف گرفت. بر اساس گزارش نهادهای امنیتی ایران، ۲۹ استان و صدها شهر دستخوش ناآرامی‌های پس از افزایش قیمت بنزین بودند. دولت برای جلوگیری از اشتراک‌گذاری اطلاعات مربوط به اعتراضات و کشته شدن صدها معترض در شبکه‌های اجتماعی، اینترنت را در سراسر کشور قطع کرد که منجر به قطعی کامل اینترنت در حدود شش روز شد. در تلاش برای سرکوب اعتراضات، دولت ایران (به گفته عفو بین الملل) معترضان را از پشت بام ها، هلیکوپترها و از فاصله نزدیک با شلیک مسلسل به قتل رساند. در تلاش برای پنهان کردن ابعاد و تعداد تلفات تظاهرات، تعداد زیادی از اجساد معترضان کشته شده را با خود برد و خانواده‌های معترضان کشته شده را تهدید کرد که با رسانه‌ها صحبت نکنند و مراسم خاکسپاری برگزار نکنند.",
                } as ISummaryResponse;
            }
            break;
        case "2":
            ret = {
                icon: PS752FlightEn,
                title: "PS752 Flight",
                description:
                    "Ukraine International Airlines Flight 752 (PS752/AUI752) was a scheduled international civilian passenger flight from Tehran to Kyiv, operated by Ukraine International Airlines. On 8 January 2020, the Boeing 737-800 flying the route was shot down by the Islamic Revolutionary Guard Corps (IRGC) shortly after takeoff, killing all 176 passengers and crew aboard. Missiles were fired at the aircraft by the IRGC amidst heightened tensions between Iran and the United States. The incident occurred five days after the United States carried out the assassination of Qasem Soleimani and some hours after Iran retaliated with Operation Martyr Soleimani, in which the IRGC fired dozens of ballistic missiles on American-led coalition forces; both the assassination and the missile strikes took place in Iraq. Iranian authorities initially denied having any responsibility for the aircraft's destruction, but investigations by various intelligence agencies from the Western world as well as by the Iranian public later revealed that it had been struck by two surface-to-air missiles. On 11 January 2020, the Iranian government admitted that the IRGC had targeted Flight 752 after mistakenly identifying it as an American cruise missile. The announcement triggered another wave of Iranian anti-government protests (part of the larger 2019–2020 Iranian protests), with many Iranians calling for the removal or overthrowal of Ali Khamenei.",
            };
            if (language.code === "fa") {
                ret = {
                    icon: PS752FlightFa,
                    title: "پرواز PS752",
                    description:
                        "پرواز شمارهٔ ۷۵۲ هواپیمایی بین‌المللی اوکراین یک پرواز مسافربری از مبدأ تهران به مقصد کی‌یف بود که هدف شلیک پدافند هوایی سپاه پاسداران انقلاب اسلامی قرار گرفته و ساقط شد. این هواپیما در ۱۸ دی ۱۳۹۸ (۸ ژانویه ۲۰۲۰) ساعت ۶:۱۹ صبح به وقت تهران، اندکی پس از برخاستن از فرودگاه بین‌المللی امام خمینی هدف دو موشک قرار گرفت که به فاصلهٔ ۲۴ ثانیه از سامانهٔ موشکی تور پدافند هوایی سپاه پاسداران شلیک شدند و کمی بعد این هواپیما در نزدیکی شاهدشهر استان تهران سقوط کرد. همهٔ ۱۷۶ سرنشین این پرواز جان باختند. در روز بعد، مقامات اطلاعاتی آمریکایی اعلام کردند که تصاویر ماهواره‌های شناسایی مادون قرمز مستقر در فضا با اطمینان شلیک و نزدیک شدن دو موشک سطح به هوا به بدنهٔ هواپیما را نشان می‌دهد. مقامات دفاعی انگلیس، ارزیابی آمریکایی‌ها در مورد برخورد موشک را تأیید کردند و نیویورک تایمز با بررسی یکی از فیلم‌های منتشر شده در شبکه‌های مجازی که لحظهٔ برخود موشک به هواپیما را نشان می‌داد، صحت آن را با نظر کارشناسان خود تأیید کرد. سخنگوی دولت ایران اما بی‌درنگ با انتشار بیانیه‌ای هرگونه برخورد موشک را تکذیب کرد و آن را «عملیات روانی دولت آمریکا» عنوان کرد. در نهایت در تاریخ ۲۱ دی ۱۳۹۸، شلیک موشک به پرواز ۷۵۲ توسط ستاد کل نیروهای مسلح ایران تأیید شد. دلیل شلیک موشک به این هواپیمای مسافربری، در اطلاعیه ستاد کل نیروهای مسلح، «خطای انسانی غیرعمد در تشخیص شیء پرنده» اعلام شده‌است.",
                } as ISummaryResponse;
            }
            break;
        case "3":
            ret = {
                icon: Aban1401En,
                title: "Revolution 2022",
                description:
                    "The new revolution of the people of Iran has started with the central slogan «Women Life Freedom» following the death of Mahsa Amini due to a massacre in the Morality Police Detention Center. The protests started on 26 September 1401 from the gathering in front of the hospital where Mahsa Amini died in Tehran, and in the following days, it spread to all 31 provinces of Iran and continues. Iranian women are at the forefront and driving force of these protest demonstrations. Protesters abroad also held protest rallies in more than 150 cities around the world. Ignoring human rights, the Islamic Republic used children to suppress protesters, and the Internet and social media were widely blocked or filtered. Many political and social activists, students, artists and athletes were arrested in Iran and subjected to threats and psychological pressure. The attack on Sharif University of Technology was also one of the other cases that occurred during the protests, where a number of students were physically punished and about 30 to 40 students were arrested. About 90 people were killed on bloody Friday in Zahedan. According to the Guardian, these protests have been the biggest threat to the government since the 1357 revolution. Unlike the protests of November 2018, the protests of 1401 were nationwide and spread among social classes, universities, streets and schools.",
            };
            if (language.code === "fa") {
                ret = {
                    icon: Aban1401Fa,
                    title: "انقلاب 1401",
                    description:
                        "انقلاب نوین مردم ایران با شعار محوری «زن زندگی آزادی» در پی کشته شدن مهسا امینی به دلیل ضرب وشتم در بازداشتگاه گشت ارشاد آغاز شده‌است. اعتراض‌ها در ۲۶ شهریور ۱۴۰۱ از تجمع در مقابل بیمارستان محل مرگ مهسا امینی در تهران آغاز شد و در روزهای بعد به همهٔ ۳۱ استان‌ ایران گسترش یافت و همچنان ادامه دارد. زنان ایرانی در خط مقدم و نیروی محرک این تظاهرات اعتراضی هستند. معترضان در خارج از کشور نیز در بیش از ۱۵۰ شهر در سراسر جهان تجمع‌های اعتراضی برگزار کردند.جمهوری اسلامی با نادیده‌ گرفتن حقوق بشر، کودکان را برای سرکوب معترضان به کار گرفت و نیز اینترنت و رسانه‌های اجتماعی، به‌طور گسترده از دسترس خارج یا فیلتر شدند. فعالان سیاسی و اجتماعی، دانشجویان، هنرمندان و ورزشکاران متعددی در ایران دستگیر شدند و مورد تهدید و فشار روانی قرار گرفتند. حمله به دانشگاه صنعتی شریف نیز از دیگر مواردی بود که در طول اعتراضات رخ داد که تعدادی تنبیه بدنی و حدود ۴۰–۳۰ دانشجو بازداشت شدند. در جمعه سیاه زاهدان حدود ۹۰ نفر کشته شدند. به گفتهٔ گاردین، این اعتراضات بزرگ‌ترین تهدید برای حکومت از زمان انقلاب ۱۳۵۷ بوده‌است. اعتراضات ۱۴۰۱ برخلاف اعتراضات آبان ۱۳۹۸ سراسری بود که در میان طبقات اجتماعی، دانشگاه‌ها، خیابان‌ها و مدارس گسترش یافت.",
                } as ISummaryResponse;
            }
            break;
    }
    if (event.id === "1") {
    }
    return Promise.resolve(ret);
};
