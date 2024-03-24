import { RiRefreshLine, RiSearch2Line } from "@remixicon/react";
import { Button, Card } from "@tremor/react";

const Buttoning = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <div className="space-y-3 flex-col flex items-center">
        <p className="text-center font-mono text-sm text-slate-500 dark:text-white">
          Button Variant:"Primary"
        </p>
        <Button variant="primary">Search</Button>
      </div>
      <div className="space-y-3  flex-col flex items-center">
        <p className="text-center font-mono text-sm text-slate-500 dark:text-white">
          Button variant: "Secondary"
        </p>
        <Button variant="secondary">Search</Button>
      </div>
      <div className="space-y-3  flex-col flex items-center">
        <p className="text-center font-mono text-sm text-slate-500 dark:text-white">
          Button variant: "light"
        </p>
        <Button variant="light">Search</Button>
      </div>
      <div className="space-y-3  flex-col flex items-center">
        <p className="text-center font-mono text-sm text-slate-500 dark:text-white">
          Button with icon
        </p>
        <Button variant="light" icon={RiSearch2Line}>
          Search
        </Button>
      </div>
      <div className="space-y-3  flex-col flex items-center">
        <p className="text-center font-mono text-sm text-slate-500 dark:text-white">
          Button loading state
        </p>
        <Button variant="light" loading={true}>
          Search
        </Button>
      </div>
      <div className="space-y-3  flex-col flex items-center">
        <p className="text-center font-mono text-sm text-slate-500 dark:text-white">
          Button with icon and light variant
        </p>
        <Button variant="light" icon={RiSearch2Line} iconPosition="left">
          view more
        </Button>
      </div>
      <div className="space-y-3  flex-col flex items-center">
        <p className="text-center font-mono text-sm text-slate-500 dark:text-white">
          Button displed state
        </p>
        <Button variant="light" icon={RiSearch2Line} disabled={true}>
          view more
        </Button>
      </div>
      <div className="space-y-3  flex-col flex items-center">
        <p className="text-center font-mono text-sm text-slate-500 dark:text-white">
          Button displed state and tooltip
        </p>
        <Button
          variant="light"
          icon={RiSearch2Line}
          disabled={true}
          tooltip="Disabled"
        >
          view more
        </Button>
      </div>
      <div className="space-y-3  flex-col flex items-center">
        <p className="text-center font-mono text-sm text-slate-500 dark:text-white">
          Button Refirsh data
        </p>
        <Button variant="light" icon={RiRefreshLine}>
          view more
        </Button>
      </div>
      <Card className="mx-auto max-w-lg ">
        <h4 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
          Salas
        </h4>
        <p className="dark:text-white my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          quia adipisci veniam quibusdam optio quas aspernatur. Cumque aliquam
          debitis voluptas, numquam dolores repellat culpa praesentium quod,
          dolorem facilis laudantium ab.
        </p>
        <div className="mt-8 flex justify-end items-baseline gap-4 space-y-2">
          <Button size="xs" variant="secondary">
            Read more
          </Button>
          <Button size="xs" variant="primary">
            view more
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Buttoning;
