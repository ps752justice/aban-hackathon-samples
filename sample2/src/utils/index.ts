import {
  PersonAge,
  PersonDate,
  Filters,
  FixedAge,
  FixedDate,
  LessAge,
  PersonLocation,
  MaybeAge,
  MaybeLessAge,
  MaybeMoreAge,
  MoreAge,
  OrAge,
  OrDate,
  Person,
  RangeAge,
  RangeDate,
} from "../types";
import locales from "../../locales.json";

export const getNameOptions = (
  people: Person[],
  { unidentified }: Record<string, string>
) => {
  return people.map(({ id, fullName }) => ({
    key: id,
    text: getName(fullName, { unidentified }),
    value: getName(fullName, { unidentified }),
  }));
};

export const getLocationOptions = (
  people: Person[],
  { unspecified }: Record<string, string>
) => {
  const locationsArray: { text: string; value: string }[] = [];

  people.forEach((person) => {
    const locations = getLocation(person.location, { unspecified });
    locations.map((location) => {
      if (!locationsArray.some(({ text }) => text === location.text)) {
        locationsArray.push({
          text: location.text,
          value: JSON.stringify(location.value),
        });
      }
    });
  });

  return locationsArray.map(({ text, value }) => ({
    key: text,
    text: text,
    value: value,
  }));
};

export const filterPeople = (
  people: Person[],
  filters: Filters,
  { unidentified }: Record<string, string>
) => {
  let filtered = people;

  if (filters.fullNames.length) {
    filtered = filtered.filter((person) =>
      filters.fullNames.includes(getName(person.fullName, { unidentified }))
    );
  }

  if (filters.locations.length) {
    filtered = filtered.filter((person) => {
      return filters.locations.some((fl) => {
        const { province, city } = JSON.parse(fl);

        return person.location.some(
          (pl) => pl.province === province && pl.city === city
        );
      });
    });
  }

  if (filters.ages.length) {
    filtered = filtered.filter((person) => {
      return filters.ages.some((ageRange) => {
        const [minAge, maxAge] = ageRange.split("-");
        const min = Number(minAge);
        const max = Number(maxAge);
        let shouldInclude = false;

        if (!person.age) {
          if (!ageRange) {
            shouldInclude = true;
          }
        } else if ((person.age as FixedAge).fixed) {
          shouldInclude =
            (person.age as FixedAge).fixed >= min &&
            (person.age as FixedAge).fixed <= max;
        } else if ((person.age as RangeAge).range) {
          shouldInclude =
            ((person.age as RangeAge).range[0] >= min &&
              (person.age as RangeAge).range[0] <= max) ||
            ((person.age as RangeAge).range[1] >= min &&
              (person.age as RangeAge).range[1] <= max);
        } else if ((person.age as OrAge).or) {
          const rangeNumbers: number[] = [];
          for (let index = min; index <= max; index++) {
            rangeNumbers.push(index);
          }
          shouldInclude = (person.age as OrAge).or.some((a) =>
            rangeNumbers.includes(a)
          );
        } else if ((person.age as LessAge).less) {
          shouldInclude = (person.age as LessAge).less <= max;
        } else if ((person.age as MoreAge).more) {
          shouldInclude = (person.age as MoreAge).more >= min;
        } else if ((person.age as MaybeLessAge).maybeLess) {
          shouldInclude = (person.age as MaybeLessAge).maybeLess <= max;
        } else if ((person.age as MaybeMoreAge).maybeMore) {
          shouldInclude = (person.age as MaybeMoreAge).maybeMore >= min;
        } else if ((person.age as MaybeAge).maybe) {
          shouldInclude =
            (person.age as MaybeAge).maybe >= min &&
            (person.age as MaybeAge).maybe <= max;
        }

        return shouldInclude;
      });
    });
  }

  return filtered;
};

export const getName = (
  fullName: Person["fullName"],
  { unidentified }: Record<string, string>
): string => {
  if (!fullName) {
    return unidentified;
  }
  return fullName;
};

export const getAge = (
  age: Person["age"],
  locale: string,
  {
    year,
    unspecified,
    between,
    to,
    or,
    lessThan,
    moreThan,
    probablyLessThan,
    probablyMoreThan,
    probably,
  }: Record<string, string>
): { text: string; value: PersonAge } => {
  let ageText = "";

  if (!age) {
    ageText = unspecified;
  } else if ((age as FixedAge).fixed) {
    ageText = `${(age as FixedAge).fixed.toLocaleString(locale)} ${year}`;
  } else if ((age as RangeAge).range) {
    ageText = `${between} ${(age as RangeAge).range[0].toLocaleString(
      locale
    )} ${to} ${(age as RangeAge).range[1].toLocaleString(locale)} ${year}`;
  } else if ((age as OrAge).or) {
    ageText = `${(age as OrAge).or
      .map(
        (age, index) =>
          `${index > 0 ? `  ${or} ` : ""} ${age.toLocaleString(locale)}`
      )
      .join("")}  ${year}`;
  } else if ((age as LessAge).less) {
    ageText = `${lessThan} ${(age as LessAge).less.toLocaleString(
      locale
    )} ${year}`;
  } else if ((age as MoreAge).more) {
    ageText = `${moreThan} ${(age as MoreAge).more.toLocaleString(
      locale
    )} ${year}`;
  } else if ((age as MaybeLessAge).maybeLess) {
    ageText = `${probablyLessThan} ${(
      age as MaybeLessAge
    ).maybeLess.toLocaleString(locale)} ${year}`;
  } else if ((age as MaybeMoreAge).maybeMore) {
    ageText = `${probablyMoreThan} ${(
      age as MaybeMoreAge
    ).maybeMore.toLocaleString(locale)} ${year}`;
  } else if ((age as MaybeAge).maybe) {
    ageText = `${probably} ${(age as MaybeAge).maybe.toLocaleString(
      locale
    )} ${year}`;
  }

  return { text: ageText, value: age };
};

export const getDate = (
  date: Person["date"],
  locale: string = "en-CA",
  { unspecified, or, between, to }: Record<string, string>
): { text: string; value: PersonDate } => {
  let dateText = "";

  if (!date) {
    dateText = unspecified;
  } else if ((date as FixedDate).fixed) {
    dateText = getDateTextLocale((date as FixedDate).fixed, locale);
  } else if ((date as RangeDate).range) {
    dateText = `${between} ${getDateTextLocale(
      (date as RangeDate).range[0],
      locale
    )} ${to} ${getDateTextLocale((date as RangeDate).range[1], locale)}`;
  } else if ((date as OrDate).or) {
    dateText = (date as OrDate).or
      .map(
        (date, index) =>
          `${index > 0 ? ` ${or} ` : ""} ${getDateTextLocale(date, locale)}`
      )
      .join("");
  }

  return { text: dateText, value: date };
};

export const getLocation = (
  location: Person["location"],
  { unspecified }: Record<string, string>
): { text: string; value: PersonLocation }[] => {
  let locationText = "";

  return location.map((loc) => {
    const { province, city } = loc;

    if (province) {
      locationText = `${province}, ${city ? city : unspecified}`;
    } else {
      locationText = unspecified;
    }

    return {
      text: locationText,
      value: loc,
    };
  });
};

export const getCause = (
  cause: Person["cause"],
  { unspecified }: Record<string, string>
): string => {
  if (!cause) {
    return unspecified;
  }
  return cause;
};

const getDateTextLocale = (date: string, locale: string): string => {
  return new Date(date).toLocaleString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const getLocaleObject = (localeKey: string | undefined) => {
  return locales.find(({ key }) => key === localeKey) || locales[0];
};
