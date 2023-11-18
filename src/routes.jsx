import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  ArrowUpTrayIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Enrichment from "./pages/dashboard/enrichment";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    layout_ar: "الرئيسية",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "الرئيسية",
        path: "/home",
        element: <Home />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "عمليات الإثراء",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <ArrowUpTrayIcon {...icon} />,
        name: "المصادر",
        path: "/notifications",
        element: <Notifications />,
      },

    ],
  },

];

export default routes;
