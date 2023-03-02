import { atom } from "jotai";

const fetchPortfolios = async (page) => {
  const res = await fetch(`http://localhost:3000/api/portfolio?page=${page}`);
  const json = await res.json();
  return json;
};

const containerSizeAtom = atom(4);

const currentPageAtom = atom(1);

const currentPageContainerAtom = atom((get) => {
  return Math.ceil(get(currentPageAtom) / get(containerSizeAtom));
});

const portfoliosData = atom((get) => {
  const page = get(currentPageAtom);
  return fetchPortfolios(page);
});

export {
  currentPageAtom,
  portfoliosData,
  currentPageContainerAtom,
  containerSizeAtom,
};
