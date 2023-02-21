import { useRouter } from "next/router";
import locales from "../../../locales.json";
import styles from "./index.module.scss";

export const LocaleSelector = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const changeLocale = (locale: string, dir: string) => {
    document.querySelector("html")?.setAttribute("dir", dir);
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <>
      {locales.map(({ key, text, dir }) => (
        <div
          key={key}
          className={`${styles.lang} ${locale === key ? styles.selected : ""}`}
          onClick={() => changeLocale(key, dir)}
        >
          {text}
        </div>
      ))}
    </>
  );
};
