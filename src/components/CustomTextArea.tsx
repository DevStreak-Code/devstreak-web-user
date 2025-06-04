import { Textarea } from "./ui/textarea";

interface ICustomTextAreaProps {
  placeholder?: string;
  required?: boolean;
  error?: string;
}

const CustomTextArea: React.FC<ICustomTextAreaProps> = (props) => {
  return (
    <div>
      <label htmlFor={"name"} className="text-sm">
        Required textarea{" "}
        {props.required ? <span className="text-destructive">*</span> : ""}
      </label>
      <Textarea name="name" id="name" placeholder={props.placeholder} />
      {props.error ? (
        <p
          className="text-destructive mt-2 text-xs"
          role="alert"
          aria-live="polite"
        >
          {props.error}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomTextArea;
