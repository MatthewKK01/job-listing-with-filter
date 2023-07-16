import { MyContext } from "@/context/MyContext";
import Image from "next/image";
import React, { useContext } from "react";

function SearchBox() {
  const { jobsArray, setJobsArray } = useContext(MyContext);

  const clearJobs = () => {
    setJobsArray([]);
  };

  const handleRemove = (title: string) => {
    setJobsArray((prev: string[]) => prev.filter((job) => job !== title));
  };

  return (
    <div className="bg-white w-full rounded-md flex  justify-between p-5 mb-14">
      <div className="flex flex-row gap-4 flex-wrap">
        {jobsArray.map((title: any) => (
          <div className="flex" key={title}>
            <h1 className="text-[#5CA5A5] font-bold rounded-md cursor-pointer bg-opacity-10 bg-[#5CA5A5] flex justify-center items-center  h-8 p-2">
              {title}
            </h1>
            <div
              onClick={() => handleRemove(title)}
              className="w-8 h-8 relative bg-[#5CA5A5] rounded-r-md hover:bg-black cursor-pointer flex justify-center items-center"
            >
              <Image
                src="/icon-remove.svg"
                width={14}
                height={14}
                alt="icon-remove"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="text-[#7C8F8F] ml-5 font-bold text-base"
        onClick={clearJobs}
      >
        Clear
      </button>
    </div>
  );
}

export default SearchBox;
