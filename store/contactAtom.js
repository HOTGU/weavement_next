import { atom } from "jotai";

const filterContactAtom = atom({
  year: "",
  month: "",
  term: "",
  state: "",
});

const queryStringAtom = atom((get) => {
  const { year, month, term, state } = get(filterContactAtom);
  let queryString = "";
  if (year) queryString += `year=${year}&`;
  if (month) queryString += `month=${month}&`;
  if (term) queryString += `term=${term}&`;
  if (state) queryString += `state=${state}`;
  return queryString;
});

export const getContactAtom = atom(async (get) => {
  const query = get(queryStringAtom);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_APP}/api/contact?` + query
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
});
