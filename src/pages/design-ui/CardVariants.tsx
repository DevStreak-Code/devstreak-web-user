import CustomCard from '../../components/CustomCard';

const CardVariants = () => {
  return ( 
   <div className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4" >

      <CustomCard
        imgUrl="https://tse1.mm.bing.net/th/id/OIP.psznP1mwFZNek7E9E7yL1QHaNK?rs=1&pid=ImgDetMain"
        title="JK"
      />
      <CustomCard
        imgUrl="https://th.bing.com/th/id/OIP.Da0L-8CTRMOdH0d8FBpxPAHaMf?w=186&h=314&c=7&r=0&o=5&pid=1.7"
        title="J-HOPE"
      />
      <CustomCard
        imgUrl="https://th.bing.com/th/id/OIP.ik5PRWbwpFoOtIKNY0yBRgHaNL?w=186&h=393&c=7&r=0&o=5&pid=1.7"
        title="SUGA"
      />
      <CustomCard
        imgUrl="https://wallpapers.com/images/hd/bts-rm-cute-glasses-nhn7ateb7zm2xj3j.jpg"
        title="RM"
      />
      <CustomCard
        imgUrl="https://th.bing.com/th/id/OIP.hSk9cU6U3ahRnPwjj8K2ogHaJ4?rs=1&pid=ImgDetMain"
        title="JIN"
      />
      <CustomCard
        imgUrl="https://wallpapers.com/images/hd/jimin-pictures-kfuu8l7d9efut4br.jpg"
        title="JIMIN"
      />
      <CustomCard
        imgUrl="https://wallpapercave.com/wp/wp5846960.jpg"
        title="BTS"
      />
      <CustomCard
        imgUrl="https://th.bing.com/th/id/OIP.PXAl3bb0P6yS2RATTdiNwwHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7"
        title="V"
      />
    </div>
  );
};

export default CardVariants;
