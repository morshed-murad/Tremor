import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./Navbar";
import Pages from "../pages/Pages";
// import Product from "./Product";
// import Allpages from "../pages/Allpages";
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
import DatePickers from "../UI/Date/DatePickers";
import Dialogs from "../UI/Dialog/Dialogs";
import Legends from "../UI/Legend/Legends";
import ListItems from "../UI/Last/ListItems";
import Inputs from "../UI/input/Inputs";
import Selects from "../UI/select/Selects";
import Switching from "../UI/Switch/Switching";
import NotFound from "../notfound/NotFound";
import Tables from "../UI/Table/Tables";
import Tabs from "../UI/Tabs/Tabs";

const NabarLayout = () => {
  const Routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Pages />} />
        <Route path="loginform" element={<LoginForm />} />
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
        <Route path="badges" element={<AllBadge />}>
          <Route path="date" element={<DatePickers />} />
          <Route path="dialog" element={<Dialogs />} />
          <Route path="legends" element={<Legends />} />
          <Route path="list" element={<ListItems />} />
          <Route path="numberinpute" element={<Inputs />} />
          <Route path="select" element={<Selects />} />
          <Route path="swichs" element={<Switching />} />
          <Route path="table" element={<Tables />} />
          <Route path="tabs" element={<Tabs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
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
