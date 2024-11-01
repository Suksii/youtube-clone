import { Home } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";

export const Sidebar = () => {
  const sideBarItems = [
    {
      icon: <Home />,
      name: "Home",
      url: "/",
    },
    {
      icon: <SmartDisplayOutlinedIcon />,
      name: "Shorts",
      url: "/",
    },
    {
      icon: <SubscriptionsOutlinedIcon />,
      name: "Subscriptions",
      url: "/",
    },
    {
      icon: <AccountCircleOutlinedIcon />,
      name: "You",
      url: "/",
    },
  ];

  return (
    <div className="sticky top-0 overflow-y-auto flex flex-col">
      {sideBarItems.map((item) => (
        <SmallSideBarItem
          key={item.name}
          icon={item.icon}
          name={item.name}
          url={item.url}
        />
      ))}
    </div>
  );
};

type SmallSideBarItemProps = {
  icon: ReactNode;
  name: string;
  url: string;
};

const SmallSideBarItem = ({ icon, name, url }: SmallSideBarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "flex flex-col items-center justify-center px-1 py-4 rounded-lg"
      )}
    >
      <div className="w-6 h-6">{icon}</div>
      <p className="text-sm">{name}</p>
    </a>
  );
};
