import React from "react";
import { Card } from "flowbite-react";
import Avatar from "./img/avatar.jpg";
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import GitHubIcon from '@mui/icons-material/GitHub'
function AboutMe() {
  return (
    <div className="md:flex content-center items-center">
      <div className="lg:w-1/2 py-[100px] bg-lime-400 dark:bg-lime-700">
        <Card className="h-[326px] w-[300px] mx-auto shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-gray-200 duration-200 sm:h-[526px] sm:w-[375px] animate__animated animate__zoomIn">
          <div className="flex flex-col items-center">
            <img
              className="mb-3 h-[130px] w-fit rounded-full shadow-lg sm:h-[230px]"
              src={Avatar}
              alt="Tijo T Joseph - Web Developer"
            />
            <h5 className="text-l font-medium text-gray-900 dark:text-white sm:text-xl">
              TIJO T JOSEPH
            </h5>
            <hr className="my-2 w-10 h-1 bg-lime-400 rounded border-0 dark:bg-lime-700 sm:w-48"></hr>
            <span className="text-s text-gray-500 dark:text-gray-400 sm:text-l">
              DEVELOPER
            </span>
            <div>
            <IconButton>
                  <a href="https://github.com/hello-world-ttj" title="Explore Tijo T Joseph's Github"><GitHubIcon className="hover:text-zinc-800 dark:text-white dark:hover:text-zinc-400"/></a>
                </IconButton>
                <IconButton>
                  <a href="https://www.instagram.com/hello_world.ttj/" title="Explore Tijo T Joseph's Instagram"><InstagramIcon className="hover:text-pink-700 dark:text-white dark:hover:text-pink-700"/></a>
                </IconButton>
                <IconButton>
                  <a href="https://wa.me/918281977675" title="Explore Tijo T Joseph's Whatsapp"><WhatsAppIcon className="hover:text-green-500 dark:text-white dark:hover:text-green-500"/></a>
                </IconButton>
                <IconButton>
                  <a href="https://www.facebook.com/tijojoseph.sony/" title="Explore Tijo T Joseph's Facebook"><FacebookIcon className="hover:text-blue-600 dark:text-white dark:hover:text-blue-600"/></a>
                </IconButton>
                <IconButton>
                  <a href="https://twitter.com/TijoTJoseph1" title="Explore Tijo T Joseph's Twitter"><TwitterIcon className="hover:text-sky-600 dark:text-white dark:hover:text-sky-600"/></a>
                </IconButton>
                <IconButton>
                  <a href="https://www.linkedin.com/in/tijo-t-joseph/" title="Explore Tijo T Joseph's LinkedIn"><LinkedInIcon className="hover:text-sky-500 dark:text-white dark:hover:text-sky-500"/></a>
                </IconButton>
            </div>
          </div>
        </Card>
      </div>
      <div className="lg:w-1/2 md:pl-[200px] text-center sm:text-left pt-10 sm:pt-0 animate__animated animate__lightSpeedInRight animate__slow">
        <h5 className="text-[4vw] font-bold tracking-tight text-gray-900 dark:text-white">
          Hello World
        </h5>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Here's who I am & what I do
        </h5>
        <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
          <a href="https://drive.google.com/file/d/1odjcEww1kmDE_epcbpftR5yA2waZpy15/view" target="_blank" rel="noopener noreferrer">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="w-[150px] relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Resume
              </span>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/tijo-t-joseph/" target="_blank" rel="noopener noreferrer">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="w-[150px] relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Hire me
              </span>
            </button>
            </a>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400 leading-8 mt-4">
                  I'm Tijo, A Developer from India.
                  I love to work in the Developing firm.
                  Because I love to solve the design & development problem and find easy and better solutions to solve them.
                  I always try my best to make a good user interface with the best user experience.
                  <br /><br />
                  &lt;Developer who LOVES to CODE /&gt;
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
