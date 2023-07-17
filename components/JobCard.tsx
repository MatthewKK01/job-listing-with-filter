import { JobProps } from "@/types";
import React, { useContext } from "react";
import Image from "next/image";
import CategoryBox from "./CategoryBox";
import { MyContext } from "@/context/MyContext";

function JobCard({
  id,
  company,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: JobProps) {
  return (
    <div
      key={id}
      className="bg-white flex flex-col md:flex-row md:gap-6  gap-2 border-l-4 border-[#5CA5A5] rounded-md p-6"
    >
      <Image
        width={48}
        height={48}
        className="max-md:-mt-12 md:my-auto md:w-[88px] md:h-[88px]"
        alt="Company Logo"
        src={logo}
      />
      <div className="flex flex-col w-full md:items-center md:flex-row md:justify-between gap-2">
        <div className="flex-col">
          <div className="flex flex-row items-center ">
            <h1 className="text-[#5CA5A5] font-bold">{company}</h1>
            {isNew && (
              <div className="bg-[#5CA5A5] ml-4 mr-2 rounded-full p-1">
                <span className="text-white uppercase text-sm font-bold">
                  new!
                </span>
              </div>
            )}

            {featured && (
              <div className="bg-black rounded-full p-1">
                <span className="uppercase text-white text-sm font-bold">
                  featured
                </span>
              </div>
            )}
          </div>

          <p className="font-bold text-base hover:text-[#5CA5A5] cursor-pointer">
            {position}
          </p>
          <ul className="flex flex-row gap-2">
            <li>{postedAt}</li>
            <span>&#8226;</span>
            <li>{contract}</li>
            <span>&#8226;</span>

            <li>{location}</li>
          </ul>
        </div>
        <hr className="my-1 sm:hidden" />

        <div className="flex gap-4 flex-wrap">
          <CategoryBox title={role} />
          <CategoryBox title={level} />
          {languages && languages.map((lang) => <CategoryBox title={lang} />)}
          {tools && tools.map((tool) => <CategoryBox title={tool} />)}
        </div>
      </div>
    </div>
  );
}

export default JobCard;
