"use client";

import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import Image from "next/legacy/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "react-feather";
import Loader from "../config/Loader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const DELAY = 3000;

function MainSlide() {
  const { data, error } = useSWR("/api/portfolio/getFivePortfolio", fetcher);
  const [currentImg, setCurrentImg] = useState(1);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const forward = () => {
    if (data?.length <= currentImg) {
      setCurrentImg(1);
    } else {
      setCurrentImg((prev) => prev + 1);
    }
  };

  const back = () => {
    if (currentImg === 1) {
      setCurrentImg(data?.length);
    } else {
      setCurrentImg((prev) => prev - 1);
    }
  };

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(forward, DELAY);

    return () => {
      resetTimeout();
    };
  }, [currentImg]);

  if (error) return <div>Failed to load</div>;

  return (
    <div className="relative w-full h-full">
      {data ? (
        <>
          {data.map((portfolio, index) => {
            return (
              <span key={portfolio.id}>
                <div
                  className={`absolute max-w-screen w-full h-full transition-opacity ${
                    currentImg === index + 1 ? "opacity-100" : "opacity-0"
                  } `}
                >
                  <Link href={`/portfolio/${portfolio.id}`} target="_blank">
                    <Image
                      src={portfolio.thumb}
                      layout="fill"
                      objectFit="cover"
                      sizes="200vw"
                      quality={100}
                    />
                  </Link>
                </div>
              </span>
            );
          })}
          <div
            className="absolute right-1 lg:right-2 top-1/2 transform -translate-y-1/2 circle"
            onClick={forward}
          >
            <ChevronRight />
          </div>
          <div
            className="absolute left-1 lg:left-2 top-1/2 transform -translate-y-1/2 circle"
            onClick={back}
          >
            <ChevronLeft />
          </div>
          {/* <Link
            href="/portfolio"
            className="absolute bottom-1 lg:bottom-2 left-1/2 transform -translate-x-1/2 btn-primary"
          >
            포트폴리오 더보기
          </Link> */}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default MainSlide;
