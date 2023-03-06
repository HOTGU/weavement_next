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
  const { data, error } = useSWR("/api/portfolio/get-five", fetcher);
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
    <>
      <div className="font-head px-1 md:px-2 lg:px-3 text-accent-color flex justify-between">
        Portfolio
      </div>
      <div className="relative w-full h-full">
        {data ? (
          <>
            {data.map((portfolio, index) => {
              return (
                <Link
                  href={`/portfolio/${portfolio.id}`}
                  target="_blank"
                  key={portfolio.id}
                >
                  <div
                    className={`absolute max-w-screen w-full h-full transition-opacity overflow-hidden lg:rounded-md ${
                      currentImg === index + 1 ? "opacity-100" : "opacity-0"
                    } `}
                  >
                    <Image
                      src={portfolio.thumb}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      // sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 100vw"
                      // priority={true}
                    />
                  </div>
                </Link>
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
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default MainSlide;
