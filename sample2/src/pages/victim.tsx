import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { getName, getAge, getDate, getLocation, getCause } from "../utils";
import { MainLayout } from "../layouts/Main";
import useSwr from "swr";
import { Person } from "../types";
import styles from "../styles/Victim.module.scss";

export default function Victim() {
  const { t } = useTranslation("victim");
  const { t: tc } = useTranslation("common");

  const router = useRouter();
  const { id } = router.query;

  const { locale = "en-CA" } = router;
  const { data: person, error } = useSwr<Person>(
    `/api/person?locale=${locale}&id=${id}`,
    async () => {
      const res = await fetch(`/api/person?locale=${locale}&id=${id}`);
      const json = await res.json();
      return json.data;
    }
  );

  if (!person || error) {
    return <p>Not found</p>;
  }

  const fullName = getName(person.fullName, {
    unidentified: tc("unidentified"),
  });
  const locations = getLocation(person.location, {
    unspecified: tc("unspecified"),
  });
  const age = getAge(person.age, locale, {
    year: tc("year"),
    unspecified: tc("unspecified"),
    between: tc("between"),
    to: tc("to"),
    or: tc("or"),
    lessThan: tc("less_than"),
    moreThan: tc("more_than"),
    probablyLessThan: tc("probably_less_than"),
    probablyMoreThan: tc("probably_more_than"),
    probably: tc("probably"),
  });
  const date = getDate(person.date, locale, {
    unspecified: tc("unspecified"),
    between: tc("between"),
    to: tc("to"),
    or: tc("or"),
  });
  const deathCause = getCause(person.cause, {
    unspecified: tc("unspecified"),
  });

  return (
    <div>
      <Head>
        <title>{fullName}</title>
        <meta name="description" content={fullName} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <div className={styles.imageContainer}>
          <Image
            src={person.image.medium}
            alt={fullName}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <h1>
          {t("name")}: {fullName}
        </h1>
        <p>
          {t("location")}:‌{" "}
          {locations.map((location, index) => (
            <span key={index}>
              {index > 0 && ` ${t("or")} `}
              <span>{location.text}</span>
            </span>
          ))}
        </p>
        <p>
          {t("age")}: {age.text}
        </p>
        <p>
          {t("date")}: {date.text}
        </p>
        <p>
          {t("death_cause")}: {deathCause}
        </p>
      </MainLayout>
    </div>
  );
}
