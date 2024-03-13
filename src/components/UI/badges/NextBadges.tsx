import {
  RiArrowDownCircleFill,
  RiCloudFill,
  RiLiveFill,
  RiShoppingCartFill,
  RiTimeFill,
} from "@remixicon/react";
import { Badge, BadgeDelta } from "@tremor/react";

const NextBadges = () => {
  return (
    <div className="mx-auto space-y-12">
      <div className="space-y-3">
        <p className="text-center font-mono text-sm text-slate-500 ">
          Badge with Icon input
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Badge icon={RiLiveFill}>Live</Badge>
          <Badge icon={RiShoppingCartFill}>Ordered</Badge>
          <Badge icon={RiTimeFill}>Waiting</Badge>
          <Badge icon={RiCloudFill}>Operational</Badge>
          <Badge icon={RiArrowDownCircleFill}>Downtime</Badge>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-center font-mono text-sm text-slate-500">
          BadgeDelta with pre-defined status icons
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <BadgeDelta deltaType="increase" isIncreasePositive={true}>
            text
          </BadgeDelta>
          <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true}>
            text
          </BadgeDelta>
          <BadgeDelta deltaType="unchanged" isIncreasePositive={true}>
            text
          </BadgeDelta>
          <BadgeDelta deltaType="moderateDecrease" isIncreasePositive={true}>
            text
          </BadgeDelta>
          <BadgeDelta deltaType="decrease" isIncreasePositive={true}>
            text
          </BadgeDelta>
        </div>
      </div>
    </div>
  );
};

export default NextBadges;
