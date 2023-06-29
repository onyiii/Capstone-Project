interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: Props) => {
  return (
    <div className="mt-5  h-60 w-1/3  rounded-md border-2 border-gray-500 px-5 py-5 text-center">
      <div className="mb-4 flex justify-start">
        <div className="rounded-full border-2 border-gray-100 bg-blue-100 p-4">
          {icon}
        </div>
      </div>
      <div className="font-bold">{title}</div>
      <p className="my-3">{description}</p>
    </div>
  );
};

export default Card;
