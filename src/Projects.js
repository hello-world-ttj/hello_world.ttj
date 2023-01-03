import React from "react";
import { Card } from "flowbite-react";
import PreviewIcon from '@mui/icons-material/Preview';
import Data from "./Data";
function Projects() {
  return (
    <div className="flex flex-col sm:flex-row justify-around flex-wrap m-6 p-6 gap-8">
      {Data.map((data) => {
        return (
          <div className="max-w-sm" key={data.id}>
            <Card imgSrc={data.img}>
              <div className="flex flex-row justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
                {data.link && (
                  <a href={data.link} className="font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-600">
                <PreviewIcon /> View
                  </a>
                )}
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {data.lang}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {data.des}
              </p>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
