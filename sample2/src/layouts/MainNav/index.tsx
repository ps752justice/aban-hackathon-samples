import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";
import { LocaleSelector } from "../../components/LocaleSelector";
import { getLocaleObject } from "../../utils";

export const MainNavLayout = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale, pathname } = router;

  const position = getLocaleObject(locale).dir === "ltr" ? "right" : "left";

  return (
    <nav className="wrapper">
      <Menu as="ul" inverted secondary>
        <Menu.Item as="li" active={pathname === "/"}>
          <Link href="/">{t("main_nav.bloody_november")}</Link>
        </Menu.Item>

        <Menu.Item as="li" active={pathname === "/victims"}>
          <Link href="/victims">{t("main_nav.victims")}</Link>
        </Menu.Item>

        <Menu.Item as="li" position={position}>
          <LocaleSelector />
        </Menu.Item>
      </Menu>
    </nav>
  );
};
