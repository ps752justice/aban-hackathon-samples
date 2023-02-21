import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

import { MainLayout } from "../layouts/Main";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <Head>
        <title>{t("bloody_november")}</title>
        <meta name="description" content={t("bloody_november")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <h1>{t("bloody_november")}</h1>
        <p>{t("description")}</p>
        <p>{t("description")}</p>
        <p>{t("description")}</p>
      </MainLayout>
    </>
  );
}
