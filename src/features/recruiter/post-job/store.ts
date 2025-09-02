/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

type StepData = {
  data: unknown; // store form values for that step
  isComplete: boolean;
};

export const EStep = {
  JOB_ROLE: "jobRole",
  TECHNICAL_FIT: "technicalFit",
  SALARY_EXPECTATION: "salaryExpectationFit",
  TIMEZONE_FIT: "timezoneFit",
  URGENCY_FIT: "urgencyFit",
  WORK_ARRANGEMENT_FIT: "workArrangementFit",
  EDUCATION_FIT: "educationFit",
} as const;

// 🔹 this creates a union type: "jobRole" | "technicalFit" | ...
export type TStep = (typeof EStep)[keyof typeof EStep];

type TJobPostStore = {
  currentStep: number;
  stepsData: Partial<Record<TStep, StepData>>;
  editInfo: any;
  nextStep: (key: TStep, data: unknown) => void;
  prevStep: (key: TStep, data: unknown) => void;
  goToStep: (step: number) => void;
  updateStepData: (step: TStep, data: unknown, isComplete?: boolean) => void;
};

export const usePostJobStore = create<TJobPostStore>((set) => ({
  currentStep: 1,
  stepsData: {},
  editInfo: null,
  nextStep: (key, data) =>
    set((state) => {
      const next = state.currentStep + 1;
      return {
        currentStep: next,
        stepsData: { ...state.stepsData, [key]: { data, isComplete: true } },
      };
    }),
  prevStep: (_key, data) =>
    set((state) => {
      const prev = state.currentStep > 1 ? state.currentStep - 1 : 1;
      return {
        currentStep: prev,
        editInfo: data,
      };
    }),

  goToStep: (step) => set({ currentStep: step }),
  updateStepData: (step, data, isComplete = false) =>
    set((state) => ({
      stepsData: {
        ...state.stepsData,
        [step]: {
          data,
          isComplete,
        },
      },
    })),
}));
