import { Home } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
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
    <>
      <div className="lg:hidden sticky top-0 overflow-y-auto flex flex-col ml-1">
        {sideBarItems.map((item) => (
          <SmallSidebarItem
            key={item.name}
            icon={item.icon}
            name={item.name}
            url={item.url}
          />
        ))}
      </div>
      <div className="lg:sticky absolute top-0 overflow-y-auto flex flex-col gap-2">
        <LargeSidebarContainer>
          <LargeSidebarItem />
        </LargeSidebarContainer>
      </div>
    </>
  );
};

type SmallSidebarItemProps = {
  icon: ReactNode;
  name: string;
  url: string;
};

type LargeSidebarItemProps = {
  icon: ReactNode;
  name: string;
  url: string;
  isActive?: boolean;
};

const SmallSidebarItem = ({ icon, name, url }: SmallSidebarItemProps) => {
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

const LargeSidebarItem = ({
  icon,
  name,
  url,
  isActive = false,
}: LargeSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "w-full flex items-center gap-3 rounded-lg"
      )}
    >
      <div className="w-6 h-6">{icon}</div>
      <p className="whitespace-nowrap overflow-hidden text-ellipsis">{name}</p>
    </a>
  );
};

const LargeSidebarContainer = () => {
  return <div></div>;
};
