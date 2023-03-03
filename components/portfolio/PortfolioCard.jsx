import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const PortfolioCard = ({ portfolio }) => {
  return (
    <Link href={`/portfolio/${portfolio._id}`}>
      <div className="w-full aspect-thumb relative rounded-md transition-all hover:scale-105">
        <Image
          src={portfolio.thumb.location}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={true}
        />
        <div className="absolute bottom-0 right-0 bg-white z-40 w-full h-full opacity-0 hover:bg-white/[.7] hover:opacity-100 flex items-center justify-center transition-all">
          <div className="font-bold break-keep text-center">
            {portfolio.rep.title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
