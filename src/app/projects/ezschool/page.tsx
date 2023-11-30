import { Carousel, Button } from "flowbite-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import {
  SiReact,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiBootstrap,
} from "react-icons/si";

const EzSchool = () => {
  const images: { src: string; alt?: string | "" }[] = [
    {
      src: "/images/projects/ezschool/login.png",
      alt: "Login Page",
    },
    {
      src: "/images/projects/ezschool/student-dashboard.png",
      alt: "Student Dashboard Page",
    },
    {
      src: "/images/projects/ezschool/teacher-dashboard.png",
      alt: "Teacher Dashboard Page",
    },
    {
      src: "/images/projects/ezschool/admin-dashboard.png",
      alt: "Admin Dashboard Page",
    },
  ];

  return (
    <div className="gap-8 items-center py-8 xl:gap-16">
      <div className="mb-8 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">EzSchool</h2>
        <p className="text-base lg:text-lg">
          EzSchool LMS, developed as a university project, is a robust Learning
          Management System designed specifically for schools. This
          comprehensive platform streamlines student management, simplifies
          scheduling, facilitates instant communication through announcements,
          streamlines grading processes, and provides easy access to module
          materials. EzSchool aims to enhance administrative efficiency, improve
          communication among stakeholders, and create a transparent and
          organized learning environment. With features like centralized
          information management and real-time updates, EzSchool optimizes the
          educational experience for both educators and students, offering a
          user-friendly solution for academic institutions.
        </p>
      </div>
      <div className="mb-8 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Gallery</h2>
        <div className="mb-8 px-8 h-[52rem]">
          <Carousel>
            {images.map((image, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="mb-8 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">
          Technologies Used
        </h2>
        <div className="flex flex-row gap-2">
          <SiLaravel className="h-8 w-8" />
          <SiPhp className="h-8 w-8" />
          <SiMysql className="h-8 w-8" />
          <SiBootstrap className="h-8 w-8" />
        </div>
      </div>
      <div className="mb-8 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Source code</h2>
        <div className="flex flex-row gap-2">Source code unavailable</div>
      </div>
    </div>
  );
};

export default EzSchool;
