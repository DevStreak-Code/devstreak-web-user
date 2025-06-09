interface IUILayoutVariant {
  title: string;
  component: React.ReactNode; // Component Type
}

interface IUILayoutProps {
  title: string;
  variants: IUILayoutVariant[];
}

const UILayout: React.FC<IUILayoutProps> = (props) => {
  const { title, variants = [] } = props;
  return (
    <div className="w-full flex items-center flex-col">
      <h4 className="font-semibold mt-2 mb-2 text-center ">{title}</h4>
      <table className="w-[70%] border-collapse border  bg-white rounded-md overflow-hidden">
        <thead className="bg-slate-100">
          <tr>
            <th className="border border-slate-300 p-2 text-left font-semibold text-sm">
              Variants
            </th>
            <th className="border border-slate-300 p-2 text-left font-semibold text-sm">
              Component
            </th>
          </tr>
        </thead>
        <tbody>
          {variants?.map((variant, index) => {
            return (
              <tr key={index}>
                <td
                  className="border border-slate-300 p-2 
              text-sm"
                >
                  {variant.title}
                </td>
                <td className="border border-slate-300 p-2">
                  {variant.component}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UILayout;
