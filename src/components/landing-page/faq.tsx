import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqContent: {
  key: string;
  question: string;
  answer: string;
}[] = [
  {
    key: "1",
    question: "question 1",
    answer: "answer 1. blablablawoeifhj owehfwoehfweolfihj oweifh",
  },
  {
    key: "2",
    question: "question 2",
    answer: "answer 2",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-primary text-primary-foreground md:py-20">
      <div className="mx-auto max-w-3xl px-2">
        <h2 className="w-full text-center text-5xl uppercase">F.A.Q</h2>
        <Accordion type="single" collapsible>
          {faqContent.map((content) => (
            <AccordionItem
              key={content.key}
              className="w-full"
              value={content.key}
            >
              <AccordionTrigger className="text-xl uppercase">
                {content.question}
              </AccordionTrigger>
              <AccordionContent>{content.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
