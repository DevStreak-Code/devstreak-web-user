import CustomButton from "@/components/CustomButton";
import { Save } from "lucide-react";

const ButtonVariants = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <h4 className="font-semibold mt-2 mb-2 text-center ">Button Variants</h4>
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
          <tr>
            <td className="border border-slate-300 p-2 text-sm">Default</td>
            <td className="border border-slate-300 p-2">
              <CustomButton
                label="Save"
                onClick={() => {
                  console.log("clicked");
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 text-sm">
              Default with Icon on the left
            </td>
            <td className="border border-slate-300 p-3">
              <CustomButton label="Save" leftIcon={<Save />} />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 text-sm">
              Default with Icon on the left
            </td>
            <td className="border border-slate-300 p-2 text-sm">
              <CustomButton label="Save" rightIcon={<Save />} />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 text-sm">
              Loading Default
            </td>
            <td className="border border-slate-300 p-2">
              <CustomButton
                isLoading
                loadingText="Saving"
                label="Default Button"
              />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 text-sm">Outline</td>
            <td className="border border-slate-300 p-2">
              <CustomButton
                variant="outline"
                label="Save"
                onClick={() => {
                  console.log("clicked");
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 text-sm">
              Outline with Icon on the left
            </td>
            <td className="border border-slate-300 p-3">
              <CustomButton
                variant="outline"
                label="Save"
                leftIcon={<Save />}
              />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 text-sm">
              Outline with Icon on the left
            </td>
            <td className="border border-slate-300 p-2 text-sm">
              <CustomButton
                label="Save"
                variant="outline"
                rightIcon={<Save />}
              />
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td className="border border-slate-300 p-2 text-sm">Disabled Outline</td>
            <td className="border border-slate-300 p-2">
              <CustomButton variant="outline" disabled label="Save" />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 text-sm">Disabled Default</td>
            <td className="border border-slate-300 p-2">
              <CustomButton  disabled label="Save" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ButtonVariants;
