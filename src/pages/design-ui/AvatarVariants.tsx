import CustomAvatar from "@/components/CustomAvatar";
import UILayout from "./UILayout";

const src =
  "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg";

const AvatarVariants = () => {
  return (
    <UILayout
      title="Avatar Variants"
      variants={[
        {
          title: "Basic Avatar with  image size",
          component: <CustomAvatar fallback="KK" alt="KK" src={src} />,
        },
        {
          title: "Avatar without src ",
          component: <CustomAvatar fallback="PP" />,
        },
      ]}
    />
  );
};

export default AvatarVariants;
