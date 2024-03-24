import { Card, List, ListItem } from "@tremor/react";
import { NavLink } from "react-router-dom";
import { cities } from "./Store";

const ListItems = () => {
  return (
    <div className="py-32 px-10 bg-gradient-to-r from-sky-600 to-lime-700 dark:from-gray-500 dark:to-gray-800">
      <div className="nav">
        <NavLink
          to="/badges"
          className={({ isActive }) =>
            isActive
              ? "bg-red-500 text-blue-700 dark:bg-gray-800 dark:text-blue-500"
              : "bg-blue-700 text-white dark:bg-gray-900 dark:text-blue-500"
          }
        >
          Back
        </NavLink>
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
