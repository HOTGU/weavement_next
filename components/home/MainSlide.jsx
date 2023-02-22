"use client";

import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import Image from "next/legacy/image";
import Link from "next/link";

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

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      if (data?.length <= currentImg) {
        setCurrentImg(1);
      } else {
        setCurrentImg((prev) => {
          return prev + 1;
        });
      }
    }, DELAY);

    return () => {
      resetTimeout();
    };
  }, [currentImg]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading</div>;

  return (
    <div className={`relative max-w-screen-lg mx-auto`}>
      {data.map((portfolio, index) => {
        return (
          <div key={portfolio.id}>
            <Link href={`/portfolio/${portfolio.id}`}>
              <div
                className={`absolute w-full aspect-thumb transition-opacity ${
                  currentImg === index + 1 ? "opacity-100" : "opacity-0"
                } `}
              >
                <Image
                  src={portfolio.thumb}
                  layout="fill"
                  objectFit="cover"
                  placeholder="empty"
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default MainSlide;
