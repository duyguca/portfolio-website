import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BsBootstrap, BsGithub, BsTrello } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import { TbBrandJavascript } from "react-icons/tb";
import { SiNextdotjs, SiWoocommerce } from "react-icons/si";
import dbMovie from "@/public/image/db-movie.png";
import movieSearch from "@/public/image/movie-search.jpeg";
import movieHover from "@/public/image/movie-hover.jpeg";
import turkiye from "@/public/image/turkiye.jpg";
import hiLow from "@/public/image/hi-low.jpg";
import {
  FaReact,
  FaSass,
  FaCss3Alt,
  FaFigma,
  FaPhp,
  FaWordpress,
  FaHtml5,
} from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "About",
    hash: "/#about",
  },

  {
    name: "Contact",
    hash: "/#contact",
  },
];

export const experiencesData = [
  {
    title: "Front End Web Developer",
    location: "BCIT, Vancouver",
    description:
      "I recently graduated and I'm enthusiastic about starting my journey as a front-end developer. My skill set includes React, Next.js, and Tailwind. I'm actively seeking full-time opportunities to apply my expertise to exciting projects.",
    icon: <FaReact />,
    date: "2023 - present",
  },
  {
    title: "High School Math Teacher",
    location: "Istanbul, Turkiye",
    description:
      "I am a former high school math teacher, now exploring the fascinating world of coding with a strong passion for numbers and problem-solving.",
    icon: <CgWorkAlt />,
    date: "2014 - 2021",
  },
  {
    title: "Bank officer",
    location: "PTT, Turkiye",
    description:
      "I worked 2 years at Ptt, and got pedagodic certificate in 2013, and became a teacher.",

    icon: <CgWorkAlt />,
    date: "2012 - 2014",
  },
  {
    title: "Mathematics",
    location: "Hacettepe Univercity, Turkiye",
    description:
      "I graduated after 5 years of studying. I started to work for PTT.",
    icon: <LuGraduationCap />,
    date: "2007 - 2012",
  },
];

export const projectsData = [
  {
    slug: "movie-app",
    title: "Movie App",
    description:
      "A dynamic web app for users to browse, search and bookmark movies.",
    overview:
      "In the course of this project, we developed a web application using React, geared towards helping users discover and save their favorite movies. We harnessed the power of external APIs, particularly TMDB, a movie database, to fetch and display a vast collection of movies. This allowed our users to explore a wide range of films conveniently. This connection to an external data source expanded the capabilities of our app and enriched the content available to our users. Additionally, to enable users to save their favorite movies, we integrated Redux for state management. This 'Favorites' feature allowed users to curate a personal collection of beloved films efficiently. In essence, this project offered me valuable insights into leveraging external APIs, using Redux for state management, and enhancing the user experience with thoughtful design. It was a great opportunity to apply my technical skills to a real-world project and learn more about creating user-friendly web applications. This version provides a more detailed description of the project and the technologies used, emphasizing the learning experience and technical aspects.",
    tags: ["Vite", "React", "Redux", "Tailwind", "Rest Api", "Figma"],
    imageUrl: dbMovie,
    movieSearch: movieSearch,
    movieHover: movieHover,
    highlights:
      "To make the user experience more engaging and intuitive, we implemented a search feature that enables users to find specific movies easily. The application was designed with the user in mind, aiming to provide a user-friendly platform that enhances the enjoyment of watching movies. One of the notable technical aspects of this project was the use of Axios to fetch data from TMDB.",
    cat: "featured",
    liveSite: "https://duygukoksal.com/movie-app/",
    gitHub: "https://github.com/duyguca/movie-app/",
    planning:
      "This project commenced with the creation of a Photoshop design, where each element was intricately fashioned with multiple layers to exemplify interactivity. The layers were meticulously organized and color-coded for enhanced visibility and understanding. Within a collaborative duo, we distributed tasks by component and page. I took charge of my assignments and collaborated with teammates when assistance was required. To facilitate our learning curve, we arranged group coding sessions, especially beneficial since most of us were new to React. My primary focus was on developing the single movies page, managing both the logic and styling aspects.",
    whatILearned:
      "This project allowed me to improve my front-end development skills as I delved into tools like React components, Vite, and Tailwind CSS to create efficient and maintainable code. It also highlighted the significance of teamwork, clear communication, and project management, as we met our deadlines successfully. I gained valuable insights into using RESTful APIs for the first time during this journey, broadening my knowledge and capabilities.",
    id: 1,
    code: `
    import axios from "axios";
    const AxiosClient = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      timeout: 8000,
      headers: {
        Accept: "application/json",
        Authorization: \` \$\{import.meta.env.VITE_ACCESS_TOKEN\}\`,
      },
    });

    // API Call
    export const getPopularMovies = async () => {
      const response = await AxiosClient.get("/movie/popular");
      return response.data;
    };

    export const getTopRatedMovies = async () => {
      const response = await AxiosClient.get("/movie/top_rated");
      return response.data;
    };
  `,
  },

  {
    slug: "country-site-project",
    title: "Turkiye",
    description:
      "A dynamic web app for users to browse, search and bookmark movies.",
    tags: ["Html5", "Css3"],
    imageUrl: turkiye,
    cat: "fun",
    liveSite: "https://duygukoksal.com/turkiye/",
    id: 2,
  },
  {
    slug: "hi-low-game",
    title: "Hi-Low Game",
    description:
      "A guessing game where players try to guess a number within a range, receiving hints whether the correct number is higher or lower than their guesses.",
    tags: ["JavaScript", "Css3"],
    imageUrl: hiLow,
    cat: "fun",
    liveSite: "https://duygukoksal.com/hi-low/",
    id: 3,
  },
];

export const skillsData = [
  { skill: "React", icon: <FaReact /> },
  { skill: "Next.js", icon: <SiNextdotjs /> },
  { skill: "JavaScript", icon: <TbBrandJavascript /> },
  { skill: "Tailwind", icon: <BiLogoTailwindCss /> },
  { skill: "Sass", icon: <FaSass /> },
  { skill: "Bootsrap", icon: <BsBootstrap /> },
  { skill: "Css3", icon: <FaCss3Alt /> },
  { skill: "HTML5", icon: <FaHtml5 /> },
  { skill: "WordPress", icon: <FaWordpress /> },
  { skill: "Php", icon: <FaPhp /> },
  { skill: "Woocommerce", icon: <SiWoocommerce /> },
  { skill: "GitHub", icon: <BsGithub /> },
  { skill: "Trello", icon: <BsTrello /> },
  { skill: "Figma", icon: <FaFigma /> },
];
export const progressLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="2 8 16 24"
    width="16"
    height="24"
  >
    <path
      d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
      fill="var(--accent)"
    ></path>
  </svg>
);
