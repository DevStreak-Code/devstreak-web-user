"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";

export interface Step {
  id: number;
  label?: string;
  comp?: React.ReactNode; // ✅ comp for this step
}

interface CustomStepperProps {
  steps: Step[];
  currentStep: number;
  onStepChange: (step: number) => void;
  showNavigation?: boolean;
  prevHandler?: () => void;
  nextHandler?: () => void;
}

const CustomStepper: React.FC<CustomStepperProps> = ({
  steps,
  currentStep,
  onStepChange,
  showNavigation = true,
}) => {
  const handlePrev = () => {
    if (currentStep > 1) {
      onStepChange(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      onStepChange(currentStep + 1);
    }
  };

  const activeStep = steps.find((s) => s.id === currentStep);

  return (
    <div className="flex flex-col w-[80%] mt-10">
      {/* Stepper */}
      <Stepper value={currentStep} onValueChange={onStepChange}>
        {steps.map((step, index) => (
          <StepperItem key={step.id} step={step.id} className="not-last:flex-1">
            <StepperTrigger asChild>
              <StepperIndicator>{step.label || step.id}</StepperIndicator>
            </StepperTrigger>
            {index < steps.length - 1 && <StepperSeparator />}
          </StepperItem>
        ))}
      </Stepper>

      {/* Step comp */}
      <div className="text-left mt-10">{activeStep?.comp}</div>

      {/* Navigation */}
      {showNavigation && (
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            className="w-32"
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            Prev step
          </Button>
          <Button
            variant="outline"
            className="w-32"
            onClick={handleNext}
            disabled={currentStep === steps.length}
          >
            Next step
          </Button>
        </div>
      )}
    </div>
  );
};

export default CustomStepper;
