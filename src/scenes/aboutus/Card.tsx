import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card = ({ id, icon, title, description }: Props) => {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-blue-100 p-4">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Card;
