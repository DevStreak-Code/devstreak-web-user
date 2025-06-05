import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface ICustomAvatarProps {
  fallback: string;
  alt?: string;
  src?: string;
  width?: number;
  height?: number;
}

const CustomAvatar: React.FC<ICustomAvatarProps> = (props) => {
  const { fallback, alt, src, width, height } = props; // props.fallback
  return (
    <Avatar >
      <AvatarImage
        src={src}
        alt={alt}
        width={width || 40}
        height={height || 40}
      />
      <AvatarFallback className="p-2 bg-gray-300 rounded-full text-sm">{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
