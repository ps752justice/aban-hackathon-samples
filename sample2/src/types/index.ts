export type Person = {
  id: number;
  fullName: null | string;
  age: PersonAge;
  date: PersonDate;
  location: PersonLocation[];
  cause: string;
  image: {
    xsmall: string;
    medium: string;
  };
};

export type FixedDate = { fixed: string };
export type RangeDate = { range: string[] };
export type OrDate = { or: string[] };

export type PersonDate = FixedDate | RangeDate | OrDate;

export type FixedAge = { fixed: number };
export type RangeAge = { range: number[] };
export type OrAge = { or: number[] };
export type LessAge = { less: number };
export type MoreAge = { more: number };
export type MaybeLessAge = { maybeLess: number };
export type MaybeMoreAge = { maybeMore: number };
export type MaybeAge = { maybe: number };

export type PersonAge =
  | null
  | FixedAge
  | RangeAge
  | OrAge
  | LessAge
  | MoreAge
  | MaybeLessAge
  | MaybeMoreAge
  | MaybeAge;

export type PersonLocation = {
  province: string | null;
  city: string | null;
};

export type Filters = {
  fullNames: string[];
  locations: string[];
  ages: string[];
};
