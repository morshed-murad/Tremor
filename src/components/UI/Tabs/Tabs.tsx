import { Card, Tab, TabGroup, TabList, TabPanel } from "@tremor/react";
import GoBackBtn from "../../button/GoBackBtn";

const Tabs = () => {
  return (
    <div className="pt-8 pb-32 px-10 bg-gradient-to-r from-blue-300 to-blue-900 dark:bg-gray-500 dark:to-gray-800 fixed top-[72px] left-0 w-full h-full z-40 overflow-auto">
      <GoBackBtn />
      <div>
        <div className="mx-auto max-w-lg space-y-12">
          <TabGroup>
            <TabList variant="line" defaultValue="1">
              <Tab className="text-indigo-900 dark:text-white" value="1">
                Tremor.os
              </Tab>
              <Tab className="text-indigo-900 dark:text-white" value="2">
                Tremor.com
              </Tab>
              <Tab className="text-indigo-900 dark:text-white" value="3">
                Tremor.com
              </Tab>
            </TabList>
          </TabGroup>
          <TabGroup>
            <TabList variant="solid" defaultValue="1">
              <Tab value="1">Tremor.os</Tab>
              <Tab value="2">Tremor.com</Tab>
              <Tab value="3">Tremor.com</Tab>
            </TabList>
          </TabGroup>
        </div>
        <div>
          <Card className="mx-auto max-w-md mt-12">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Total Sales
            </p>
            <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              $442,276
            </p>
            <TabGroup>
              <TabList className="mt-4">
                <Tab>Location A</Tab>
                <Tab>Loaction B</Tab>
              </TabList>
              <TabPanel>
                <p className="mt-4 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                  quos doloribus aliquam tempore officia explicabo dicta aut
                  sint ipsa praesentium in pariatur quibusdam voluptate hic
                  voluptas inventore, repellendus itaque? Praesentium.
                </p>
                <p className="mt-4 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                  quos doloribus aliquam tempore officia explicabo dicta aut
                  sint ipsa praesentium in pariatur quibusdam voluptate hic
                  voluptas inventore, repellendus itaque? Praesentium.
                </p>
              </TabPanel>
            </TabGroup>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
