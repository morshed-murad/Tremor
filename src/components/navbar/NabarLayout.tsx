import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./Navbar";
import Pages from "../pages/Pages";
import Product from "./Product";
import Allpages from "../pages/Allpages";
import AllBar from "../Visualizations/bar/AllBar";
import BarCharts from "../Visualizations/bar/BarCharts";
import BarChartsTow from "../Visualizations/bar/BarChartsTow";
import AllAreaChart from "../Visualizations/area/AllAreaChart";
import AreaCharts from "../Visualizations/area/AreaCharts";

import LoginForm from "../LoginForm";
import LineCahrt from "../Visualizations/area/LineCahrt";
import AllDonut from "../Visualizations/Donut/AllDonut";
import DunatChart from "../Visualizations/Donut/DunatChart";
import DunatChartLegend from "../Visualizations/Donut/DunatChartLegend";
import All from "../UI/Accordion/All";
import AllBadge from "../UI/badges/AllBadge";

const NabarLayout = () => {
  const Routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="home" element={<Pages />} />
        <Route path="loginform" element={<LoginForm />} />
        <Route element={<Product />}>
          <Route index element={<Allpages />} />
          <Route path="barCharts" element={<AllBar />}>
            <Route path="simplebar" element={<BarCharts />} />
            <Route path="groupBar" element={<BarChartsTow />} />
          </Route>
          <Route path="areaCharts" element={<AllAreaChart />}>
            <Route path="areaChart" element={<AreaCharts />} />
            <Route path="linechart" element={<LineCahrt />} />
          </Route>
          <Route path="donut" element={<AllDonut />}>
            <Route path="simpledonut" element={<DunatChart />} />
            <Route path="legend" element={<DunatChartLegend />} />
          </Route>
          <Route path="accordion" element={<All />} />
          <Route path="badges" element={<AllBadge />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={Routers} />
    </>
  );
};

export default NabarLayout;
