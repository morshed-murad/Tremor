import { Card, List, ListItem } from "@tremor/react";

import { cities } from "./Store";
import GoBackBtn from "../../button/GoBackBtn";

const ListItems = () => {
  return (
    <div className="pt-20 pb-32 px-10 bg-gradient-to-r from-sky-600 to-lime-700 dark:from-gray-500 dark:to-gray-800 fixed top-[72px] left-0 w-full h-full z-40  overflow-scroll">
      <div className="nav">
        <GoBackBtn />
      </div>
      <div className="flex justify-center items-center m-auto p-5 rounded border bg-white dark:bg-gray-900 max-w-md">
        <List>
          <ListItem>
            <span>Roger Federer</span>
            <span>10,550</span>
          </ListItem>
          <ListItem>
            <span>Rafel Nadal</span>
            <span>9,205</span>
          </ListItem>
          <ListItem>
            <span>Novak Djokovic</span>
            <span>8,310</span>
          </ListItem>
          <ListItem>
            <span>Andy Murray</span>
            <span>7,030</span>
          </ListItem>
        </List>
      </div>
      <div className=" mt-5 flex justify-center items-center m-auto p-5 rounded border bg-white dark:bg-gray-900 max-w-md">
        <Card>
          <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            Tremor's Hometowns
          </h3>
          <List className="mt-2">
            {cities.map((item) => (
              <ListItem key={item.city}>
                <span>{item.city}</span>
                <span>{item.rating}</span>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
    </div>
  );
};

export default ListItems;
