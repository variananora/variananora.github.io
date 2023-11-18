import {
  FaDiscord,
  FaLinkedin,
  FaSquareEnvelope,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareReddit,
  FaSquareSteam,
  FaSquareTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import Link from "next/link";

export default function About() {
  return (
    <div className="text-white">
      <section id="about-me">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              Computer science fresh graduate from Binus University with
              hands-on experience as a Full Stack Developer Intern using MERN
              Stack at PT Bank BTPN Tbk. A proactive problem solver and avid
              learner, I bring a passion for tackling challenges and a
              commitment to continuous growth. Possessing strong communication
              skills and a collaborative mindset, I thrive in team environments.
              Seeking opportunities to leverage my technical expertise,
              contribute to innovative projects, and further develop my skills
              in a dynamic and forward-thinking organization that values
              creativity and fosters professional growth.
            </p>
          </div>
        </div>
      </section>
      <section id="work-experience">
        <div className="gap-8 py-8 xl:gap-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">
              Work Experience
            </h2>
          </div>
          <div className="">
            <h3 className="text-xl font-bold">Full Stack Developer Intern</h3>
            <p className="text-base">PT Bank BTPN Tbk, Jakarta, Indonesia</p>
            <p className="text-sm text-gray-500">Feb 2022 - Feb 2023</p>
            <ul className="list-disc list-inside">
              <li>
                Developed key functions for a web-based application using MERN
                stack.
              </li>
              <li>
                Created reusable components and libraries for a website&apos;s
                back and front-end code.
              </li>
              <li>
                Debugged and resolved a wide range of issues related to system
                functionality.
              </li>
              <li>Writing code with industry best practices.</li>
              <li>Implemented automated testing with unit test.</li>
              <li>
                Collaborated with the development team to troubleshoot and
                resolve issues.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="education">
        <div className="gap-8 py-8 xl:gap-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          </div>
          <div className="">
            <h3 className="text-xl font-bold">
              Bachelor of Computer Science (S.Kom)
            </h3>
            <p className="text-base">
              Bina Nusantara University, Jakarta, Indonesia
            </p>
            <p className="text-sm text-gray-500">Sep 2019 - Nov 2023</p>
            <p className="text-base">Grade: 3.52/4.00</p>
          </div>
        </div>
      </section>
      <section id="organization-experience">
        <div className="gap-8 py-8 xl:gap-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">
              Organization Experience
            </h2>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Sound and Equipment Staff</h3>
            <p className="text-base">
              UKM Bersama Dalam Musik Bina Nusantara University, Jakarta,
              Indonesia
            </p>
            <p className="text-sm text-gray-500">Sep 2019 - Jan 2022</p>
            <ul className="list-disc list-inside">
              <li>
                Coordinated room assignments for events, practice sessions, and
                meetings.
              </li>
              <li>
                Set up and manage equipment, including sound systems and
                instruments.
              </li>
              <li>Conducted audio mixing to enhance the quality of events.</li>
              <li>Facilitated online Zoom meetings for virtual events.</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-xl font-bold">
              Freshmen Partner Binusian 2025
            </h3>
            <p className="text-base">
              Bina Nusantara University, Jakarta, Indonesia
            </p>
            <p className="text-sm text-gray-500">Sep 2021 - Jul 2022</p>
            <ul className="list-disc list-inside">
              <li>
                Guided new students to adapt to Binus University environment.
              </li>
              <li>Taught them about campus culture and rules.</li>
              <li>
                Provided mentoring to help them achieve their academic goals.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="gap-8 py-8 xl:gap-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">
              Let&apos;s Connect!
            </h2>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              {" "}
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Link href="mailto://variananora@outlook.com">
              <FaSquareEnvelope />
            </Link>
            <Link href="https://www.linkedin.com/in/variananora/">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/variananora">
              <FaSquareGithub />
            </Link>
            <Link href="https://www.youtube.com/channel/UCVNi0STpyTw4F2w_Oy-Zwvg">
              <FaSquareYoutube />
            </Link>
            <Link href="https://twitter.com/variananora">
              <FaSquareTwitter />
            </Link>
            <Link href="https://www.instagram.com/variananora/">
              <FaSquareInstagram />
            </Link>
            <Link href="https://www.facebook.com/variananora/">
              <FaSquareFacebook />
            </Link>
            <Link href="https://www.reddit.com/user/variananora">
              <FaSquareReddit />
            </Link>
            <Link href="https://steamcommunity.com/id/variananora123">
              <FaSquareSteam />
            </Link>
            <Link href="https://www.facebook.com/variananora/">
              <FaSquareFacebook />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
