import { Textarea } from "./ui/textarea";

interface ICustomTextAreaProps {
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  label?: string;
}

const CustomTextArea: React.FC<ICustomTextAreaProps> = (props) => {
  const { label, required, placeholder, disabled, error } = props;

  return (
    <div>
      <label htmlFor={"name"} className="text-sm">
        {label} {required ? <span className="text-destructive">*</span> : ""}
      </label>
      <Textarea
        name="name"
        id="name"
        placeholder={placeholder}
        disabled={disabled}
      />
      {error ? (
        <p
          className="text-destructive mt-2 text-xs"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomTextArea;
