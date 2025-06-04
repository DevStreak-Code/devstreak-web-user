
import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label";

interface ICustomCheckBoxProps {
    id?: string;
    required?: boolean;
    error?: string;
}

const CustomCheckBox : React.FC<ICustomCheckBoxProps>= () =>{
    return (
        <>
            <div className="flex items-center gap-2">
                <Checkbox id="checkbox_simple" className="peer" />
                <label htmlFor="checkbox_simple" className="text-sm">Simple Checkbox</label>            
            </div>
            <div className="flex items-center gap-2 [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]">
                <Checkbox id='defaultCheck' defaultChecked />
                <label htmlFor='defaultCheck'>Colored checkbox</label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id='disableCheckBox' disabled />
                <label htmlFor='disableCheckBox'>Disabled checkbox</label>
            </div>
        </>
    )
}

export default CustomCheckBox;