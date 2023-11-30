import ProjectPreview from "@/components/ProjectPreview/ProjectPreview";

const Projects = () => {
  type Project = {
    key: string;
    imgUrl: string;
    title: string;
    description: string;
    link: string;
  };

  const projectsList: Project[] = [
    {
      key: "desaintara",
      imgUrl: "/images/projects/desaintara/main-page.png",
      title: "Desaintara",
      description:
        "A web-based application, platform for designer and customer can buy and sell designs.",
      link: "/projects/desaintara",
    },
    {
      key: "ez-school",
      imgUrl: "/images/projects/ezschool/login.png",
      title: "EzSchool",
      description:
        "A web-based application for school learning management system.",
      link: "/projects/ezschool",
    },
    {
      key: "coming-soon",
      imgUrl: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      title: "Coming soon",
      description: "Another projects will be coming soon.",
      link: "/projects#",
    },
  ];

  return (
    <div className="gap-8 items-center py-8 xl:gap-16">
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="pb-4 text-4xl font-bold text-white mb-4">Projects</h2>
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsList.map((project: Project) => (
            <li key={project.key}>
              <ProjectPreview
                imgUrl={project.imgUrl}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
