import React from "react";
import { Footer } from "flowbite-react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
function footer() {
  return (
    <Footer>
      <div className="w-full bg:white dark:bg-gray-800 py-6 px-4 sm:flex sm:items-center sm:justify-between text-center">
        <Footer.Copyright href="/" by="hello_world.ttj" year={2023} />
        <div className="mt-4 flex space-x-0 sm:space-x-6 sm:mt-0 justify-between flex-row">
          <div className="sm:text-sm text-center text-gray-600 dark:text-gray-400 text-xs mx-2">
            <p>Call</p>
             <a href="tel:918281977675">8281977675</a>
          </div>
          <div className="sm:text-sm text-center text-gray-600 dark:text-gray-400 text-xs mx-2">
            <p>Email</p>
             <a href="mailto:">tijotjoseph@duck.com</a>
          </div>
          <Footer.Icon
            className="hover:text-blue-600 dark:text-gray-400 hover:text-blue-600"
            href="https://www.facebook.com/tijojoseph.sony/"
            icon={FacebookIcon}
          />
          <Footer.Icon
            className="hover:text-pink-700 dark:text-gray-400 hover:text-pink-700"
            href="https://www.instagram.com/hello_world.ttj/"
            icon={InstagramIcon}
          />
          <Footer.Icon
            className="hover:text-sky-600 dark:text-gray-400 hover:text-sky-600"
            href="https://twitter.com/TijoTJoseph1"
            icon={TwitterIcon}
          />
          <Footer.Icon
            className="hover:text-zinc-800 dark:text-gray-400 hover:text-zinc-400"
            href="https://github.com/hello-world-ttj"
            icon={GitHubIcon}
          />
          <Footer.Icon
            className="hover:text-sky-500 dark:text-gray-400 hover:text-sky-500"
            href="https://www.linkedin.com/in/tijo-t-joseph/"
            icon={LinkedInIcon}
          />
          <Footer.Icon
            className="hover:text-green-500 dark:text-gray-400 hover:text-green-500"
            href="https://wa.me/918281977675"
            icon={WhatsAppIcon}
          />
        </div>
      </div>
    </Footer>
  );
}

export default footer;
