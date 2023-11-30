import { Button, Carousel } from "flowbite-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";

const Desaintara = () => {
  const images: { src: string; alt?: string | "" }[] = [
    {
      src: "/images/projects/desaintara/main-page.png",
      alt: "Main Page",
    },
    {
      src: "/images/projects/desaintara/commission.png",
      alt: "Commission Page",
    },
    {
      src: "/images/projects/desaintara/orders.png",
      alt: "Orders Page",
    },
    {
      src: "/images/projects/desaintara/payment.png",
      alt: "Payment Page",
    },
    {
      src: "/images/projects/desaintara/messages.png",
      alt: "Messages Page",
    },
    {
      src: "/images/projects/desaintara/creator-dashboard.png",
      alt: "Creator Dashboard Page",
    },
  ];

  return (
    <div className="gap-8 items-center py-8 xl:gap-16">
      <div className="mb-8 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Desaintara</h2>
        <p className="text-base lg:text-lg">
          As more companies use digital channels for marketing, visual design is
          essential for drawing in and keeping customers. A web application
          platform is required to meet the needs of designers and improve their
          visibility, commission services, and client relationships. This
          platform would streamline commission services and product
          transactions, promote effectively online, enhance consumer
          connections, and allow designers to showcase their work. Additionally,
          it would help with commission order management, testimonial gathering,
          and foster customer confidence. This program has a lot to offer, and
          it may help designers overcome obstacles and succeed in the digital
          industry.
        </p>
      </div>
      <h2 className="text-4xl font-bold text-white mb-4">Gallery</h2>
      <div className="mb-8 px-8 h-[52rem]">
        <Carousel>
          {images.map((image, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </Carousel>
      </div>
      <div className="mb-8 md:mt-0 text-left h-full">
        <h2 className="text-4xl font-bold text-white mb-4">
          Technologies Used
        </h2>
        <div className="flex flex-row gap-2">
          <SiReact className="h-8 w-8" />
          <SiExpress className="h-8 w-8" />
          <SiMongodb className="h-8 w-8" />
          <SiNodedotjs className="h-8 w-8" />
        </div>
      </div>
      <div className="mb-8 md:mt-0 text-left h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Source code</h2>
        <div className="flex flex-row gap-2">
          <Link href="https://github.com/variananora/thesis-frontend">
            <Button>
              Frontend <FaGithub className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://github.com/variananora/thesis-backend">
            <Button>
              Backend <FaGithub className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Desaintara;
