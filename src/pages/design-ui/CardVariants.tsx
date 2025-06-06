import CustomCard from '../../components/CustomCard';

const CardVariants = () => {
  return ( 
   <div className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4" >

      <CustomCard
        imgUrl="https://tse1.mm.bing.net/th/id/OIP.psznP1mwFZNek7E9E7yL1QHaNK?rs=1&pid=ImgDetMain"
        alt="JK"
      />
      <CustomCard
        imgUrl="https://th.bing.com/th/id/OIP.Da0L-8CTRMOdH0d8FBpxPAHaMf?w=186&h=314&c=7&r=0&o=5&pid=1.7"
        alt="J-HOPE"
      />
      <CustomCard
        imgUrl="https://th.bing.com/th/id/OIP.ik5PRWbwpFoOtIKNY0yBRgHaNL?w=186&h=393&c=7&r=0&o=5&pid=1.7"
        alt="SUGA"
      />
      <CustomCard
        imgUrl="https://wallpapers.com/images/hd/bts-rm-cute-glasses-nhn7ateb7zm2xj3j.jpg"
        alt="RM"
      />
      <CustomCard
        imgUrl="https://th.bing.com/th/id/OIP.hSk9cU6U3ahRnPwjj8K2ogHaJ4?rs=1&pid=ImgDetMain"
        alt="JIN"
      />
      <CustomCard
        imgUrl="https://wallpapers.com/images/hd/jimin-pictures-kfuu8l7d9efut4br.jpg"
        alt="JIMIN"
      />
      <CustomCard
        imgUrl="https://wallpapercave.com/wp/wp5846960.jpg"
       alt="BTS"
      />
      <CustomCard
        imgUrl="https://th.bing.com/th/id/OIP.PXAl3bb0P6yS2RATTdiNwwHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7"
        alt="V"
      />
    </div>
  );
};

export default CardVariants;
