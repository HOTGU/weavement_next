"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import useSWR from "swr";
import PortfolioCard from "./PortfolioCard";
import PortfolioLoader from "./PortfolioLoader";

const fetcher = async (...args) => {
  const [url, page] = args;
  const res = await fetch(`${url}?page=${page}`);
  return await res.json();
};

const CONTAINER_SIZE = 5;

const PortfolioList = () => {
  const [page, setPage] = useState(1);
  const [container, setContainer] = useState(Math.ceil(page / CONTAINER_SIZE));
  const { data, isLoading } = useSWR(
    [`/api/portfolio/fetch-by-page`, page],
    ([url, page]) => fetcher(url, page)
  );

  useEffect(() => {
    setContainer(Math.ceil(page / CONTAINER_SIZE));
  }, [page]);

  if (isLoading) return <PortfolioLoader />;
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-10 ">
        {data?.portfolios.map((portfolio) => {
          return (
            <div
              className=" overflow-hidden w-full rounded-md"
              key={portfolio._id}
            >
              <PortfolioCard portfolio={portfolio} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-2 my-8">
        {container > 1 && (
          <div
            className="text-accent-color cursor-pointer"
            onClick={() => {
              setPage((container - 1) * CONTAINER_SIZE);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <ChevronLeft />
          </div>
        )}
        {[...Array(data?.totalPage)].map((e, i) => {
          const mapPage = i + 1;
          if (Math.ceil(mapPage / CONTAINER_SIZE) === container) {
            return (
              <div
                className={`${
                  page === mapPage
                    ? "bg-accent-color text-white"
                    : "bg-secondary-color"
                } px-4 rounded-md cursor-pointer`}
                onClick={() => {
                  setPage(mapPage);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                key={i}
              >
                {mapPage}
              </div>
            );
          }
        })}
        {Math.ceil(data?.totalPage / CONTAINER_SIZE) > container && (
          <div
            className="text-accent-color cursor-pointer"
            onClick={() => {
              setPage(container * containerSize + 1);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <ChevronRight />
          </div>
        )}
      </div>
    </>
  );
};

export default PortfolioList;
