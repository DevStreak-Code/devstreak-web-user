
import CustomInput from "@/components/CustomInput";

const InputVariants = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <h4 className="font-semibold mt-2 mb-2 text-center ">Input Variants</h4>
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
            <td className="border border-slate-300 p-2 
            text-sm">
              Simple Input
            </td>
            <td className="border border-slate-300 p-2">
              <CustomInput
                placeholder="Enter input"
                label="Simple"
                name="input"
              />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 text-sm">
              Required Input
            </td>
            <td className="border border-slate-300 p-3">
              <CustomInput
                placeholder="Enter input"
                label="Required Input"
                required
              />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 text-sm">
              Input with error
            </td>
            <td className="border border-slate-300 p-2 text-sm">
              <CustomInput
                placeholder="Enter input"
                label="Input"
                error="invalid input"
              />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 text-sm">
              Disabled input
            </td>
            <td className="border border-slate-300 p-2">
              <CustomInput
                placeholder="Enter input"
                label="Disable input"
                disabled={true}
              />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 text-sm">
              Password Input
            </td>
            <td className="border border-slate-300 p-2">
              <CustomInput
                placeholder="Enter password"
                label="Password"
                type="password"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InputVariants;
