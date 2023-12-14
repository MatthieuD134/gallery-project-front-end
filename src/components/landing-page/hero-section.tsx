import { useState } from "react";

import { BubbleButton, Button } from "../ui/button";

interface Step {
  id: number;
  nextSteps: {
    text: string;
    stepId: number;
  }[];
  text: string;
  image: string;
  backStepId: number | null;
}

const allSteps: Step[] = [
  {
    id: 0,
    nextSteps: [
      {
        text: "go to step 1",
        stepId: 10,
      },
      {
        text: "go to step 2",
        stepId: 20,
      },
    ],
    text: "this is step 0",
    image: "",
    backStepId: null,
  },
  {
    id: 1,
    nextSteps: [
      {
        text: "go to step 1",
        stepId: 10,
      },
      {
        text: "go to step 2",
        stepId: 20,
      },
    ],
    text: "this is step 0bis",
    image: "",
    backStepId: null,
  },
  {
    id: 10,
    nextSteps: [
      {
        text: "go to step 11",
        stepId: 11,
      },
      {
        text: "go to step 12",
        stepId: 12,
      },
    ],
    text: "this is step 1",
    image: "",
    backStepId: 1,
  },
  {
    id: 11,
    nextSteps: [],
    text: "this is step 11",
    image: "",
    backStepId: 1,
  },
  {
    id: 12,
    nextSteps: [],
    text: "this is step 12",
    image: "",
    backStepId: 1,
  },
  {
    id: 20,
    nextSteps: [
      {
        text: "go to step 21",
        stepId: 21,
      },
      {
        text: "go to step 22",
        stepId: 22,
      },
    ],
    text: "this is step 2",
    image: "",
    backStepId: 1,
  },
  {
    id: 21,
    nextSteps: [],
    text: "this is step 21",
    image: "",
    backStepId: 1,
  },
  {
    id: 22,
    nextSteps: [],
    text: "this is step 22",
    image: "",
    backStepId: 1,
  },
];

export default function HeroSection() {
  const [previousStep, setPreviousStep] = useState<Step | null>(null);
  const [currentStep, setCurrentStep] = useState<Step>(allSteps[0]);

  const ChangeCurrentStep = (newStep: Step) => {
    setPreviousStep(
      newStep.backStepId != null
        ? allSteps.find((step) => step.id === newStep.backStepId) || null
        : null,
    );
    setCurrentStep(newStep);
  };

  return (
    <section id="hero">
      <div>this is {currentStep.id}</div>
      {currentStep.nextSteps.map((value) => {
        const nextStep = allSteps.find((step) => step.id === value.stepId);
        return nextStep ? (
          <BubbleButton
            key={value.stepId}
            variant="secondary"
            onClick={() => ChangeCurrentStep(nextStep)}
            className="m-4"
          >
            {value.text}
          </BubbleButton>
        ) : null;
      })}
      {previousStep && (
        <Button
          variant="tertiary"
          onClick={() => ChangeCurrentStep(previousStep)}
        >
          Back
        </Button>
      )}
    </section>
  );
}
