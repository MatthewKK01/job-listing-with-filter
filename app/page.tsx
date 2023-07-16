"use client";

import { Header, SearchBox, JobCard } from "@/components";
import data from "./data.json";
import { useEffect, useState } from "react";
import { JobProps } from "@/types";
import { MyContext } from "@/context/MyContext";

export default function Home() {
  const [jobs, setJobs] = useState<JobProps[]>(data);

  const [jobsArray, setJobsArray] = useState([]);

  const [filteredData, setFilteredData] = useState<any>([]);

  const modifiedData = () => {
    if (jobsArray.length > 0) {
      const newData = data.filter((d) => {
        return jobsArray.every((key) => {
          return (
            d.role === key ||
            d.level === key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    modifiedData();
  }, [jobsArray]);

  return (
    <MyContext.Provider value={{ jobsArray, setJobsArray }}>
      <main className="bg-primary min-h-screen">
        <Header />
        <div className="wrapper mx-auto max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-[1110px] -mt-8 relative z-10">
          <SearchBox />
          <div className="flex flex-col gap-10">
            {jobsArray.length > 0
              ? filteredData.map(
                  ({
                    id,
                    company,
                    logo,
                    new: isNew,
                    featured,
                    position,
                    role,
                    level,
                    postedAt,
                    contract,
                    location,
                    languages,
                    tools,
                  }: any) => (
                    <JobCard
                      id={id}
                      company={company}
                      logo={logo}
                      isNew={isNew}
                      new={isNew}
                      featured={featured}
                      position={position}
                      role={role}
                      level={level}
                      postedAt={postedAt}
                      contract={contract}
                      location={location}
                      languages={languages}
                      tools={tools}
                    />
                  )
                )
              : jobs?.map(
                  ({
                    id,
                    company,
                    logo,
                    new: isNew,
                    featured,
                    position,
                    role,
                    level,
                    postedAt,
                    contract,
                    location,
                    languages,
                    tools,
                  }) => (
                    <JobCard
                      id={id}
                      company={company}
                      logo={logo}
                      isNew={isNew}
                      new={isNew}
                      featured={featured}
                      position={position}
                      role={role}
                      level={level}
                      postedAt={postedAt}
                      contract={contract}
                      location={location}
                      languages={languages}
                      tools={tools}
                    />
                  )
                )}
          </div>
        </div>
      </main>
    </MyContext.Provider>
  );
}
