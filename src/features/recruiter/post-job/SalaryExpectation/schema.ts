import type { TFormConfig } from "@/components/DynamicForm/dynamic-form-interface";
import { PAYMENT_BASIS } from "@/constants/common";
import { uniqueCurrencies } from "@/constants/currencies";
import { z } from "zod";

export const initialValues = {
  currency: "",
  paymentBasis: "",
  minSalary: "",
  maxSalary: "",
};

export const salaryExpectationValidationSchema = z
  .object({
    currency: z
      .string()
      .trim()
      .toUpperCase()
      .length(3, "Currency must be a 3-letter ISO code.")
      .regex(/^[A-Z]{3}$/, "Currency must be valid (e.g., USD, INR)"),
    paymentBasis: z.enum(
      PAYMENT_BASIS.map((basis) => basis.value) as [string, ...string[]],
      {
        required_error: "Payment basis is required.",
        invalid_type_error: "Invalid payment basis selected.",
      }
    ),
    minSalary: z.preprocess(
      (val) => (val === "" || val == null ? undefined : Number(val)),
      z
        .number({
          required_error: "Minimum salary is required.",
          invalid_type_error: "Minimum salary must be a number.",
        })
        .nonnegative("Minimum salary cannot be negative.")
    ),

    maxSalary: z.preprocess(
      (val) => (val === "" || val == null ? undefined : Number(val)),
      z
        .number({
          required_error: "Maximum salary is required.",
          invalid_type_error: "Maximum salary must be a number.",
        })
        .nonnegative("Maximum salary cannot be negative.")
    ),
  })
  .refine(
    (data) =>
      data.minSalary != null &&
      data.maxSalary != null &&
      data.maxSalary >= data.minSalary,
    {
      message: "Maximum salary cannot be less than minimum salary.",
      path: ["maxSalary"],
    }
  );

export type TSalaryExpectationValidationSchema = z.infer<
  typeof salaryExpectationValidationSchema
>;

export const salaryExpectationFields: TFormConfig = [
  {
    name: "currency",
    label: "Currency",
    component: "select",
    required: true,
    options: uniqueCurrencies,
    placeholder: "Select Currency",
  },
  {
    name: "paymentBasis",
    label: "Payment Basis",
    component: "select",
    required: true,
    options: PAYMENT_BASIS,
    placeholder: "Select Payment Basis",
  },
  {
    name: "minSalary",
    label: "Minimum Salary",
    component: "input",
    placeholder: "Enter minimum salary",
    type: "number",
    required: true,
  },
  {
    name: "maxSalary",
    label: "Maximum Salary",
    component: "input",
    placeholder: "Enter maximum salary ",
    type: "number",
    required: true,
  },
];
