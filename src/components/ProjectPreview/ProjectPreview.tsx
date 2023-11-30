import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type ProjectPreviewProps = {
  imgUrl: string;
  title: string;
  description: string;
  link: string;
};

const ProjectPreview = ({
  imgUrl,
  title,
  description,
  link,
}: ProjectPreviewProps) => {
  return (
    <Link href={link}>
      <div className="max-w-sm border  rounded-lg shadow bg-[#121212] border-gray-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="rounded-t-lg" src={imgUrl} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-400">{description}</p>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more <FaArrowRight className="ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPreview;
