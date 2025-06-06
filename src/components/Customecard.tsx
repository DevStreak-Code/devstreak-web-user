interface ICustomCardProps {
  imgurl?: string;
  title?: string;
  description?: string;
}

const CustomCard: React.FC<ICustomCardProps> = (props) => {
  const { imgurl, title, description } = props;
  console.log(props);


  return (
    <div className="w-80 bg-white shadow-lg border border-gray-100 rounded-2xl p-5 flex flex-col gap-4">
      <div>
        <img className="w-full h-48 object-cover rounded-xl" src={imgurl} alt="Card Image" />
      </div>
      <div className="text-2xl font-semibold text-gray-800">{title}</div>
      <div className="text-gray-600 text-sm">{description}</div>
      <div className="flex justify-between mt-2">
        <button className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium py-2 rounded-xl shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all mr-2">
          🔗 Share
        </button>
        <button className="flex-1 bg-gray-100 text-gray-800 font-medium py-2 rounded-xl shadow-inner hover:bg-gray-200 transition-all">
          📄 Details
        </button>
      </div>
    </div>
  );
};

export default CustomCard;
