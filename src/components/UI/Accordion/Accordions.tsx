import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from "@tremor/react";

const Accordions = () => {
  return (
    <AccordionList>
      <Accordion>
        <AccordionHeader className="bg-blue-100 text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Accordion 1
        </AccordionHeader>
        <AccordionBody className="leading-6 bg-indigo-200 py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          ducimus cupiditate qui perspiciatis placeat iusto consectetur, in,
          officiis tenetur eum esse quod dolorum neque assumenda nihil?
          Incidunt, quaerat. Accusamus, vero.
        </AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHeader className="bg-red-100 text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Accordion 2
        </AccordionHeader>
        <AccordionBody className="leading-6 bg-blue-200 py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          ducimus cupiditate qui perspiciatis placeat iusto consectetur, in,
          officiis tenetur eum esse quod dolorum neque assumenda nihil?
          Incidunt, quaerat. Accusamus, vero.
        </AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHeader className="bg-indigo-100 text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Accordion 3
        </AccordionHeader>
        <AccordionBody className="leading-6 bg-red-200 py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          ducimus cupiditate qui perspiciatis placeat iusto consectetur, in,
          officiis tenetur eum esse quod dolorum neque assumenda nihil?
          Incidunt, quaerat. Accusamus, vero.
        </AccordionBody>
      </Accordion>
    </AccordionList>
  );
};

export default Accordions;
