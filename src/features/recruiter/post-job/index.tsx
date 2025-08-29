import usePostJob from "./usePostJob";

const PostJob = () => {
  const { handlers } = usePostJob();
  const { getComponent } = handlers;

  return (
    <div className="w-full h-full flex justify-center">
      {getComponent()?.comp}
    </div>
  );
};

export default PostJob;
