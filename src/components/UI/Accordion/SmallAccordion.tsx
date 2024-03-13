import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from "@tremor/react";

function SmallAccordion() {
  return (
    <div>
      <AccordionList className="mx-auto max-w-md">
        <Accordion>
          <AccordionHeader className="bg-blue-100 text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Accordion 1
          </AccordionHeader>
          <AccordionBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            vel repellendus officia, dignissimos, doloremque magni quisquam
            architecto hic incidunt nobis molestiae impedit rem aut quos placeat
            sed voluptates repellat ipsam!
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader className="bg-red-100 text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Accordion 2
          </AccordionHeader>
          <AccordionBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            vel repellendus officia, dignissimos, doloremque magni quisquam
            architecto hic incidunt nobis molestiae impedit rem aut quos placeat
            sed voluptates repellat ipsam!
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader className="bg-indigo-100 text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Accordion 3
          </AccordionHeader>
          <AccordionBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            vel repellendus officia, dignissimos, doloremque magni quisquam
            architecto hic incidunt nobis molestiae impedit rem aut quos placeat
            sed voluptates repellat ipsam!
          </AccordionBody>
        </Accordion>
      </AccordionList>
    </div>
  );
}

export default SmallAccordion;
