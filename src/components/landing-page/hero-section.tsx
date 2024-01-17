import characterImage from "@public/images/character-1.png";
import heroBackground from "@public/images/hero-background.png";
import Image from "next/image";
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
      <div className="relative min-h-[100svh] bg-primary text-primary-foreground">
        <div className="flex min-h-[100svh] w-full flex-col justify-end pb-4">
          <div className="absolute top-0 h-[80svh] w-full md:h-full">
            <Image
              src={heroBackground}
              alt="hero background"
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              quality={95}
              priority
            />
          </div>
          <div className="absolute bottom-[20svh] left-0 right-0 top-[10svh] flex justify-center md:bottom-0">
            <div className="h-full w-full">
              <Image
                src={characterImage}
                alt="storyteller illustration"
                fill
                style={{ objectFit: "contain", objectPosition: "bottom" }}
              />
            </div>
          </div>
          <div className="absolute bottom-[20svh] left-0 right-0 h-96 bg-transition-ink-black bg-contain bg-left-bottom bg-repeat-x md:bottom-0" />

          <div className="mx-auto flex w-full max-w-3xl flex-col p-2">
            <div className="mb-4 border-2 border-primary bg-primary/50 p-4 text-primary-foreground backdrop-blur-lg">
              {currentStep.text}
            </div>
            <div className="z-10 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-2 md:grid-rows-2">
              {currentStep.nextSteps.map((value, index) => {
                const nextStep = allSteps.find(
                  (step) => step.id === value.stepId,
                );
                return nextStep ? (
                  <BubbleButton
                    key={value.stepId}
                    variant="card"
                    onClick={() => ChangeCurrentStep(nextStep)}
                    className="col-span-1 mx-2 md:mx-0"
                    invertBubbleTriangle={index % 2 !== 0}
                  >
                    {value.text}
                  </BubbleButton>
                ) : null;
              })}
              {previousStep && (
                <div className="col-span-1 flex w-full justify-center md:col-span-2">
                  <Button
                    variant="tertiary"
                    onClick={() => ChangeCurrentStep(previousStep)}
                  >
                    Back
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-80">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-transition-ink-black-inverted bg-contain bg-left-top bg-repeat-x" />
      </div>
    </section>
  );
}
