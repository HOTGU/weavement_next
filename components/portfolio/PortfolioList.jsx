"use client";

import {
  containerSizeAtom,
  currentPageAtom,
  currentPageContainerAtom,
  portfoliosData,
} from "@/storage/pageAtom";
import { useAtom, useAtomValue } from "jotai";
import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import PortfolioCard from "./PortfolioCard";

const PortfolioList = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [{ portfolios, totalPage }] = useAtom(portfoliosData);
  const containerSize = useAtomValue(containerSizeAtom);
  const currentPageContainer = useAtomValue(currentPageContainerAtom);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-10 ">
        {portfolios.map((portfolio) => {
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
        {currentPageContainer > 1 && (
          <div
            className="text-accent-color cursor-pointer"
            onClick={() => {
              setCurrentPage((currentPageContainer - 1) * containerSize);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <ChevronLeft />
          </div>
        )}
        {[...Array(totalPage)].map((e, i) => {
          const mapPage = i + 1;
          if (Math.ceil(mapPage / containerSize) === currentPageContainer) {
            return (
              <div
                className={`${
                  currentPage === mapPage
                    ? "bg-accent-color text-white"
                    : "bg-secondary-color"
                } px-4 rounded-md cursor-pointer`}
                onClick={() => {
                  setCurrentPage(mapPage);
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
        {Math.ceil(totalPage / containerSize) > currentPageContainer && (
          <div
            className="text-accent-color cursor-pointer"
            onClick={() => {
              setCurrentPage(currentPageContainer * containerSize + 1);
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
