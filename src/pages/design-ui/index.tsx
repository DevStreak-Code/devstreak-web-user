import AvatarVariants from "./AvatarVariants";
import ButtonVariants from "./ButtonVariants";
import InputVariants from "./InputVariants";
import SwitchButtonVariants from "./SwitchButtonVariants";
import TextAreaVariants from "./TextAreaVariants";
import RadioVariants from "./RadioVariants";
import CustomCard from "@/components/CustomCard";

const data = {
  flower: {
    imgurl:
      "https://tse4.mm.bing.net/th?id=OIP.CmVliHEClMOwhhzWb3K0TgHaEK&pid=Api&P=0&h=180",
    title: "Flower",
    description:
      "A flower is one of nature’s most delicate and beautiful creations, symbolizing purity, love, and renewal.",
  },
  tree: {
    imgurl:
      "https://tse2.mm.bing.net/th?id=OIP.W7jqvJIdAdp13QtmFOnKfgHaEo&pid=Api&P=0&h=180",
    title: "Tree",
    description:
      "A tree stands as a timeless symbol of strength, resilience, and life itself. ",
  },
  animal: {
    imgurl:
      "https://tse4.mm.bing.net/th?id=OIP.wCvvleYGzDBxMqNUkLXRtgHaEK&pid=Api&P=0&h=180",
    title: "Animal",
    description:
      "Animals are living beings that share our planet, each with unique characteristics and behaviors. ",
  },
  mountain: {
    imgurl: "http://wallpapercave.com/wp/8Ww0M0U.jpg",
    title: "Mountain",
    description:
      "Mountains are towering giants of nature, reaching towards the sky with their rugged peaks and steep slopes. ",
  },
};

const DesignUI = () => {
  return (
    <div className="w-full overflow-auto flex flex-col justify-center gap-10 items-center">
      <div className=" m-5 grid grid-cols-2 gap-4 w-2xl ">
        <CustomCard
          imgurl={data.flower.imgurl}
          title={data.flower.title}
          description={data.flower.description}
        />
        <CustomCard
          imgurl={data.tree.imgurl}
          title={data.tree.title}
          description={data.tree.description}
        />
        <CustomCard
          imgurl={data.animal.imgurl}
          title={data.animal.title}
          description={data.animal.description}
        />
        <CustomCard
          imgurl={data.mountain.imgurl}
          title={data.mountain.title}
          description={data.mountain.description}
        />
      </div>
      <RadioVariants />
      <AvatarVariants />
      <SwitchButtonVariants />
      <TextAreaVariants />
      <ButtonVariants />
      <InputVariants />
    </div>
  );
};

export default DesignUI;
