export type TBaseField = {
  name: string;
  label: string;
  placeholder?: string | undefined;
  required?: boolean;
  disabled?: boolean;
};

export type TTextField = TBaseField & {
  component: "input";
  type: "text" | "email" | "password" | "number";
};

export type TTextAreaField = TBaseField & {
  component: "textarea";
};

export type TSelectField = TBaseField & {
  component: "select";
  options: { label: string; value: string }[];
};

export type TMultiSelectField = TBaseField & {
  component: "multiselect";
  options: { label: string; value: string }[];
};

export type TSwitchField = TBaseField & {
  component: "switch";
};

export type TTagsField = TBaseField & {
  component: "tags";
};

export type TDateField = TBaseField & {
  component: "date";
};

export type TRadioField = TBaseField & {
  component: "radio";
  options: { label: string; value: string }[];
};
export type TCheckboxField = TBaseField & {
  component: "checkbox";
  options: { label: string; value: string }[];
};

export type FormField =
  | TTextField
  | TTextAreaField
  | TSelectField
  | TMultiSelectField
  | TSwitchField
  | TTagsField
  | TDateField
  | TRadioField
  | TCheckboxField;

export type TFormConfig = FormField[];
