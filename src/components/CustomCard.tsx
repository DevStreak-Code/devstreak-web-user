interface ICustomCardProps {
  imgurl?: string;
  title?: string;
  description?: string;
}
const CustomCard: React.FC<ICustomCardProps> = (props) => {
  const { imgurl, title, description } = props;
  return (
    <div className="w-80  border border-gray-300 rounded-lg p-4 flex flex-col gap-4">
      <div>
        <img className="w-96 h-42 rounded-md" src={imgurl} alt="" />
      </div>
      <div className="text-xl font-bold">{title}</div>
      <div>{description}</div>
      <div>
        <button className="bg-blue-500 mr-2 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Share
        </button>
        <button className="bg-blue-500 mr-2 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          More Details
        </button>
      </div>
    </div>
  );
};

export default CustomCard;
