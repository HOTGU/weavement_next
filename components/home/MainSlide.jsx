"use client";

import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import Image from "next/legacy/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "react-feather";

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
  if (!data) return <div>Loading</div>;

  return (
    <div className={`relative max-w-screen-lg mx-auto aspect-thumb`}>
      {data.map((portfolio, index) => {
        return (
          <span key={portfolio.id}>
            <Link href={`/portfolio/${portfolio.id}`}>
              <div
                className={`absolute w-full h-full transition-opacity ${
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
          </span>
        );
      })}
      <div className="absolute right-0 inset-y-1/2 circle" onClick={forward}>
        <ChevronRight />
      </div>
      <div className="absolute left-0 inset-y-1/2 circle" onClick={back}>
        <ChevronLeft />
      </div>
    </div>
  );
}

export default MainSlide;
