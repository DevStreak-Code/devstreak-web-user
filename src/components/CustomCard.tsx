interface ICustomCardProps {
  url: string;
  title: string;
  alt?: "Paste your image here";
}
const CustomCard: React.FC<ICustomCardProps> = (props) => {
  const { url, title, alt } = props;
  return (
    <div className="w-5/10 m-1 ">
      <div className="border border-black w-full h-60 rounded-lg overflow-hidden">
        <img className="h-full w-full" src={url} alt={alt} />
      </div>
      <h1 className="mt-5 flex item-center text-[25px]">{title}</h1>
    </div>
  );
};

export default CustomCard;
