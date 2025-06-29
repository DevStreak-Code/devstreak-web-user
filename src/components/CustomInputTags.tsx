import { useId, useState } from "react";
import { type Tag, TagInput } from "emblor";

interface ICustomInputTagsProps {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  tags?: Tag[];
}

const CustomInputTags: React.FC<ICustomInputTagsProps> = (props) => {
  const {
    label,
    placeholder,
    error,
    disabled = false,
    required = false,
    tags = [],
  } = props;

  const id = useId();
  const [exampleTags, setExampleTags] = useState<Tag[]>(tags);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  return (
    <div className="*:not-first:mt-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-600 flex items-center gap-1"
        >
          {label}
          {required && <span className="text-destructive">*</span>}
        </label>
      )}
      <TagInput
        id={id}
        tags={exampleTags}
        setTags={(newTags) => setExampleTags(newTags)}
        placeholder={placeholder}
        disabled={disabled}
        styleClasses={{
          tagList: {
            container: "gap-1",
          },
          input: `rounded-md transition-[color,box-shadow] placeholder:text-muted-foreground/70 focus-visible:border-ring outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50
            ${error ? "border border-destructive focus-visible:ring-destructive" : ""}
            ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`,
          tag: {
            body: "relative h-7 bg-background border border-input hover:bg-background rounded-md font-medium text-xs ps-2 pe-7",
            closeButton:
              "absolute -inset-y-px -end-px p-0 rounded-s-none rounded-e-md flex size-7 transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] text-muted-foreground/80 hover:text-foreground",
          },
        }}
        activeTagIndex={activeTagIndex}
        setActiveTagIndex={setActiveTagIndex}
        inlineTags={false}
        inputFieldPosition="top"
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
        <></>
      )}
    </div>
  );
};

export default CustomInputTags;