import { searchLocation } from "@/lib/utils";
import type { TWorkArrangementFitValidationSchema } from "./schema";
import { usePostJobStore } from "../store";

export async function searchLocationOptions(query: string) {
  const results = await searchLocation(query);

  return results.map((loc) => ({
    label: `${loc.city ? loc.city + ", " : ""}${
      loc.state ? loc.state + ", " : ""
    }${loc.country}`,
    value: JSON.stringify(loc), // store full object in value
    extra: loc,
  }));
}

export const useWorkArrangementFit = () => {
  const { nextStep } = usePostJobStore();
  const onSubmit = (data: TWorkArrangementFitValidationSchema) => {
    nextStep("workArrangementFit", data);
  };
  return {
    handlers: {
      onSubmit,
    },
  };
};
