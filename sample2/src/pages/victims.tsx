import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Form, List } from "semantic-ui-react";
import useSwr from "swr";

import styles from "../styles/Victims.module.scss";
import { ageOptions } from "../constants";
import { Filters, Person } from "../types";
import {
  filterPeople,
  getAge,
  getLocationOptions,
  getName,
  getNameOptions,
} from "../utils";
import { MainLayout } from "../layouts/Main";

function Victims() {
  const { t } = useTranslation("victims");
  const { t: tc } = useTranslation("common");
  const router = useRouter();
  const [filters, setFilters] = useState<Filters>({
    fullNames: [],
    locations: [],
    ages: [],
  });
  const { locale = "en-CA" } = router;

  const { data: people, error } = useSwr<Person[]>(
    `/api/people?locale=${locale}`,
    async () => {
      const res = await fetch(`/api/people?locale=${locale}`);
      const json = await res.json();
      return json.data;
    }
  );

  const changeInputHandler = (_: any, { name, value }: any) => {
    setFilters({
      ...filters,
      ...{ [name]: value },
    });
  };

  const filteredPeople = filterPeople(people || [], filters, {
    unidentified: tc("unidentified"),
  });

  if (!Array.isArray(people) || error) {
    return null;
  }

  const itemStyle = { marginLeft: 0, marginInlineEnd: "1em !important" };

  return (
    <>
      <Head>
        <title>{t("victims")}</title>
        <meta name="description" content={t("victims")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <h1>{t("victims")}</h1>
        <p className={styles.text}>{t("victims_description")}</p>

        <Form>
          <List horizontal className={styles.filters}>
            <List.Item style={itemStyle}>
              <Form.Dropdown
                direction="left"
                label={t("filter.name")}
                placeholder={t("filter.choose")}
                multiple
                search
                selection
                options={getNameOptions(people, {
                  unidentified: tc("unidentified"),
                })}
                onChange={changeInputHandler}
                value={filters.fullNames}
                name="fullNames"
              />
            </List.Item>
            <List.Item style={itemStyle}>
              <Form.Dropdown
                label={t("filter.age")}
                placeholder={t("filter.choose")}
                multiple
                search
                selection
                options={ageOptions[locale]}
                onChange={changeInputHandler}
                value={filters.ages}
                name="ages"
              />
            </List.Item>
            <List.Item style={itemStyle}>
              <Form.Dropdown
                label={t("filter.location")}
                placeholder={t("filter.choose")}
                multiple
                search
                selection
                options={getLocationOptions(people, {
                  unspecified: tc("unspecified"),
                })}
                onChange={changeInputHandler}
                value={filters.locations}
                name="locations"
              />
            </List.Item>
          </List>
        </Form>

        {!filteredPeople ? (
          <p>-</p>
        ) : (
          <div>
            <ul className={styles.peopleList}>
              {filteredPeople.map((person) => (
                <li key={person.id} className={styles.peopleListItem}>
                  <Link
                    href={`/victim?id=${person.id}&name=${getName(
                      person.fullName,
                      {
                        unidentified: tc("unidentified"),
                      }
                    )}`}
                    className={styles.personCard}
                  >
                    <Image
                      src={person.image.xsmall}
                      alt={getName(person.fullName, {
                        unidentified: tc("unidentified"),
                      })}
                      title={getName(person.fullName, {
                        unidentified: tc("unidentified"),
                      })}
                      width={48}
                      height={48}
                    />
                    <div>
                      <h2 className={styles.personDetails}>
                        {getName(person.fullName, {
                          unidentified: tc("unidentified"),
                        })}
                      </h2>
                      <p>
                        {
                          getAge(person.age, locale, {
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
                          }).text
                        }
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </MainLayout>
    </>
  );
}

export default Victims;
