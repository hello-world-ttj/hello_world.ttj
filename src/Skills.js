import React from "react";

function Skills() {
  return (
    <div className="flex flex-col sm:flex-row text-center text-gray-700 dark:text-gray-400 py-6 sm:h-[80vh] sm:pt-20">
      <div className="basis-1/3 leading-[40px] animate__animated animate__bounceInDown">
        <h2 className="text-xl text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-full mx-4">Languages & Libraries</h2>
        <hr className="my-2 w-16 h-1 bg-lime-400 rounded border-0 dark:bg-lime-700 sm:w-[80%] mx-auto"></hr>
        <h3 className="text-l">HTML</h3>
        <h3 className="text-l">CSS</h3>
        <h3 className="text-l">JavaScript</h3>
        <h3 className="text-l">React Js</h3>
        <h3 className="text-l">Node Js</h3>
        <h3 className="text-l">Express Js</h3>
        <h3 className="text-l">Angular</h3>
        <h3 className="text-l">TypeScript</h3>
      </div>
      <div className="basis-1/3 leading-[40px] animate__animated animate__bounceInDown animate__slow">
        <h2 className="text-xl text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-full mx-4">DataBase & Applications</h2>
        <hr className="my-2 w-16 h-1 bg-lime-400 rounded border-0 dark:bg-lime-700 sm:w-[80%] mx-auto"></hr>
        <h3 className="text-l">MongoDB</h3>
        <h3 className="text-l">MySQL</h3>
        <h3 className="text-l">Git</h3>
        <h3 className="text-l">Firebase</h3>
        <h3 className="text-l">Vs Code</h3>
        <h3 className="text-l">Visual Studio</h3>
        <h3 className="text-l">Photoshop </h3>
        <h3 className="text-l">Dreamweaver</h3>
        <h3 className="text-l">Figma</h3>
        <h3 className="text-l">Word</h3>
        <h3 className="text-l">Power Point</h3>
      </div>
      <div className="basis-1/3 leading-[40px] animate__animated animate__bounceInDown animate__slower">
        <h2 className="text-xl text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-full mx-4">Platforms & OS</h2>
        <hr className="my-2 w-16 h-1 bg-lime-400 rounded border-0 dark:bg-lime-700 sm:w-[80%] mx-auto"></hr>
        <h3 className="text-l">GitHub</h3>
        <h3 className="text-l">WordPress</h3>
        <h3 className="text-l">Wix</h3>
        <h3 className="text-l">Mac</h3>
        <h3 className="text-l">Windows</h3>
        <h3 className="text-l">Ubuntu</h3>
        <h3 className="text-l">Android</h3>
      </div>
    </div>
  );
}

export default Skills;
