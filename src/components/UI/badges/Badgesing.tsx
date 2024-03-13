import { Badge, BadgeDelta } from "@tremor/react";
import { RiRecordCircleFill } from "@remixicon/react";

const Badgesing = () => {
  return (
    <div className="mx-auto space-y-12">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Badge>Updated</Badge>
        <Badge icon={RiRecordCircleFill}>Live</Badge>
        <BadgeDelta deltaType="increase" isIncreasePositive={true} />
        <BadgeDelta deltaType="increase" isIncreasePositive={true}>
          increase
        </BadgeDelta>
        <BadgeDelta deltaType="moderateDecrease" isIncreasePositive={true}>
          21.2%
        </BadgeDelta>
      </div>
    </div>
  );
};

export default Badgesing;
