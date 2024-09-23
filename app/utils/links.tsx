import { AreaChart, Layers, AppWindow } from "lucide-react";
type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  { href: "/add-job", label: "add job", icon: <Layers /> },
  { href: "/job", label: "all job", icon: <AppWindow /> },
  { href: "/stats", label: "stats", icon: <AreaChart /> },
];

export default links;
