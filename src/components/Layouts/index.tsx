interface IPublicLayoutProps {
  children: React.ReactNode;
}
export const PublicLayout: React.FC<IPublicLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div
      className="w-full h-full flex items-center justify-end"
      style={{
        background: 'url("/assets/images/main.svg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-1/2 h-full  p-4 flex justify-center">
        {/* Content here */}
        <div className="w-3/4">{children}</div>
      </div>
    </div>
  );
};
