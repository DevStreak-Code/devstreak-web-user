interface ICustomCardProps {
  url: string;
  title: string;
}

const CustomCard: React.FC<ICustomCardProps> = (props) => {
  return (
    <div className="boder boder-red-900 h-100 rounded-lg flex">
      <div className="border border-red  h-90 w-4/10 m-5 p-5">
        <div className=" boder boder-black w-full h-60">
          <img
            className="h-full w-full"
            src={props.url}
            alt="bg-image"
          />
          <h1 className="flex item-center justify-center m-4 text-[25px] ">{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
