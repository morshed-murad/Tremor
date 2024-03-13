import AreaImage from "../image/images.png";
import FirstUI from "../image/ScreenshotFirst.png";
import SecondUI from "../image/ScreenshotSecond.png";
import BarImage from "../image/download2.png";
import DonutImage from "../image/download3.png";

export interface list {
  src: string;
  alt: string;
  path: string;
  id: number;
  title: string;
}
export const imageStore: list[] = [
  {
    id: 1,
    src: AreaImage,
    alt: "AreaCharts",
    path: "areaCharts",
    title: "Area Charts",
  },

  {
    id: 2,
    src: BarImage,
    alt: "Barchart",
    path: "barCharts",
    title: "Barchart",
  },
  {
    id: 3,
    src: DonutImage,
    alt: "DonutCahrt",
    path: "donut",
    title: "DonutCart",
  },

  {
    id: 4,
    src: FirstUI,
    alt: "AreaCharts",
    path: "accordion",
    title: "Accordion",
  },
  {
    id: 5,
    src: SecondUI,
    alt: "AreaCharts",
    path: "badges",
    title: "Badges",
  },
];
