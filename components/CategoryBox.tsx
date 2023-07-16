import { MyContext } from "@/context/MyContext";
import { JobProps } from "@/types";
import React, { useContext, useState } from "react";

interface CategoryPropsBox {
  title?: string;
}

function CategoryBox({ title }: any) {
  const { jobsArray, setJobsArray } = useContext(MyContext);

  const [job, setJob] = useState("");

  const handleTitleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedTitle = event.currentTarget.innerText;
    const isTitleExists = jobsArray.some((job: any) => job === clickedTitle);

    if (!isTitleExists) {
      setJobsArray((prev: JobProps[]) => [...prev, clickedTitle]);
      // setJob(clickedTitle);
    }
  };

  return (
    <button
      className="text-[#5CA5A5] font-bold rounded-md cursor-pointer bg-opacity-10 bg-[#5CA5A5] flex justify-center items-center  h-8 p-2"
      onClick={handleTitleClick}
      key={title}
    >
      {title}
    </button>
  );
}

export default CategoryBox;
