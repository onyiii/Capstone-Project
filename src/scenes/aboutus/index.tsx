import aboutUsImg from "@/assets/AboutUs.jpg";
import { CardType } from "@/shared/types";
import {
  ArrowTrendingUpIcon,
  UserGroupIcon,
  NewspaperIcon,
} from "@heroicons/react/20/solid";
import Card from "./Card";

const AboutUs = () => {
  const cards: Array<CardType> = [
    {
      icon: <ArrowTrendingUpIcon className="h-6 w-6" />,
      title: "Analytics",
      description:
        "Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "Social interactions",
      description:
        "Users on the platform can interact with posts they like, comment and engage in discussions",
    },
    {
      icon: <NewspaperIcon className="h-6 w-6" />,
      title: "Content creation",
      description:
        "Write nice and appealing with our in-built markdown, a rich text editor",
    },
  ];
  return (
    <section id="about us" className=" mx-auto mt-20 w-5/6 py-20">
      <div className="mb-15 gap-x-20 md:flex">
        <div>
          <div className=" pb-10 text-2xl font-bold">About Chatter</div>
          <div className="text-sm">
            Chatter is a multi-functional platform where authors and readers can
            have access to their own content. It aims to be a traditional
            bookworm's heaven and a blog to get access to more text based
            content. Our vision is to foster an inclusive and vibrant community
            where diversity is celebrated. We encourage open-mindedness and
            respect for all individuals, regardless of their backgrounds or
            beliefs. By promoting dialogue and understanding, we strive
          </div>
        </div>
        <div>
          <img src={aboutUsImg} alt="aboutus" height="500px" width="2000px" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className=" mx-auto py-10 text-2xl font-bold">
          Why you should join chatter
        </div>
        <div className="text-sm">
          Our goal is to make writers and readers see our platform as their next
          heaven for blogging, ensuring ease in interactions, connecting with
          like-minded peers, have access to favorite content based on interests
          and able to communicate your great ideas with people
        </div>
      </div>
      <div className="mt-5 items-center justify-between gap-8 lg:flex">
        {cards.map((card: CardType) => (
          <Card
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
