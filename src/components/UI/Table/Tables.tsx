import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

import { NavLink } from "react-router-dom";

import { dataTable } from "./Store";
import { RiFlag2Line } from "@remixicon/react";
import { useState } from "react";

const Tables = () => {
  const [show, setShow] = useState(dataTable);
  const handleChange = (index: number) => {
    const ChangeStatus = [...show];
    ChangeStatus[index].status =
      ChangeStatus[index].status === "active" ? "deActive" : "active";
    setShow(ChangeStatus);
  };
  return (
    <div className="py-32 px-10 bg-gradient-to-r from-green-900 to-green-300 dark:from-gray-500 dark:to-gray-800">
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
      <div className="bg-white dark:bg-gray-900 dark:border-none p-5 border rounded my-5">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Monstare Slayed
              </TableHeaderCell>
              <TableHeaderCell>Regin</TableHeaderCell>
              <TableHeaderCell>State</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Wilhelm Tell</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell>Uri, Schwyz, Unterwalden</TableCell>
              <TableCell>National Hero</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>The Witcher</TableCell>
              <TableCell className="text-right">129</TableCell>
              <TableCell>Keadwen</TableCell>
              <TableCell>Lengend</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mizutsune</TableCell>
              <TableCell className="text-right">82</TableCell>
              <TableCell>Japan</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <Card>
          <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            List of Swiss Federal Councillours
          </h3>
          <Table className="mt-4">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Position</TableHeaderCell>
                <TableHeaderCell>Department</TableHeaderCell>
                <TableHeaderCell className="text-center">
                  Status
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTable.map((itme, index) => (
                <TableRow key={index}>
                  <TableCell>{itme.name}</TableCell>
                  <TableCell>{itme.Role}</TableCell>
                  <TableCell>{itme.departement}</TableCell>
                  <TableCell className=" w-32 text-right">
                    <Badge
                      onClick={() => handleChange(index)}
                      className="cursor-pointer"
                      color={itme.status === "active" ? "emerald" : "red"}
                      icon={RiFlag2Line}
                    >
                      {itme.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Tables;
