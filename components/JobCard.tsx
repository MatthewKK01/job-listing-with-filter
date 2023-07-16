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
      className="bg-white flex flex-col gap-2 border-l-4 border-[#5CA5A5] rounded-md p-6"
    >
      <Image
        width={48}
        height={48}
        className="-mt-12"
        alt="Company Logo"
        src={logo}
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-row">
          <h1>{company}</h1>
          {isNew && (
            <div className="bg-[#5CA5A5] rounded-full p-1">
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
        <p className="font-bold text-base ">{position}</p>
        <ul className="flex flex-row gap-2">
          <li>{postedAt}</li>
          <span>&#8226;</span>
          <li>{contract}</li>
          <span>&#8226;</span>

          <li>{location}</li>
        </ul>
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
