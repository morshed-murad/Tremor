import Badgesing from "./Badgesing";
import NextBadges from "./NextBadges";

const AllBadge = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Badgesing />
      </div>
      <div>
        <NextBadges />
      </div>
    </div>
  );
};

export default AllBadge;
