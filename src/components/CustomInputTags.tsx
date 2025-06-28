import React, { useState } from "react";

interface ICustomInputTagsProps {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  initialTags?: string[];
  onChange?: (tags: string[]) => void;
}

const CustomInputTags: React.FC<ICustomInputTagsProps> = ({
  name,
  label,
  placeholder = "Add a tag",
  error,
  disabled,
  required,
  initialTags = [],
  onChange,
}) => {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [input, setInput] = useState<string>("");

  const handleAddTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      const newTags = [...tags, trimmed];
      setTags(newTags);
      setInput("");
      onChange?.(newTags);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      handleAddTag();
    } else if (e.key === "Backspace" && input === "") {
      const updated = tags.slice(0, -1);
      setTags(updated);
      onChange?.(updated);
    }
  };

  const handleRemoveTag = (index: number) => {
    const updated = tags.filter((_, i) => i !== index);
    setTags(updated);
    onChange?.(updated);
  };

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-600">
          {label} {required && <span className="text-destructive">*</span>}
        </label>
      )}

      {/* Input box */}
      <div
        className={`px-4 py-3 border rounded-md shadow-sm cursor-text bg-white ${
          disabled
            ? "bg-gray-100 cursor-not-allowed opacity-60"
            : "focus-within:ring-2 focus-within:ring-primary"
        }`}
      >
        <input
          type="text"
          name={name}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Tags rendered below input */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center gap-1 bg-muted text-sm px-3 py-1 rounded-full text-foreground"
          >
            <span className="font-medium">{tag}</span>
            <button
              type="button"
              onClick={() => handleRemoveTag(index)}
              className="text-muted-foreground hover:text-destructive focus:outline-none"
              disabled={disabled}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Error */}
      {error && (
        <p
          className="text-destructive mt-1 text-xs"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomInputTags;
