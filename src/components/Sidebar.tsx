import { Home } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import { ReactNode } from "react";
import { useSidebar } from "../context/SidebarContext";
import LogoSection from "./LogoSection";

export const Sidebar = () => {
  const { isLargeOpen, isSmallOpen, closeSidebar } = useSidebar();

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

  const subscriptions = [
    {
      id: 1,
      name: "Channel 1",
      img: "",
      url: "",
    },
    {
      id: 2,
      name: "Channel 2",
      img: "",
      url: "",
    },
    {
      id: 3,
      name: "Channel 3",
      img: "",
      url: "",
    },
    {
      id: 4,
      name: "Channel 4",
      img: "",
      url: "",
    },
  ];

  const you = [
    {
      id: 1,
      name: "History",
      img: "",
      url: "",
    },
    {
      id: 2,
      name: "Playlists",
      img: "",
      url: "",
    },
    {
      id: 3,
      name: "Your videos",
      img: "",
      url: "",
    },
    {
      id: 4,
      name: "Watch later",
      img: "",
      url: "",
    },
    {
      id: 5,
      name: "Liked videos",
      img: "",
      url: "",
    },
  ];
  const explore = [
    {
      id: 1,
      name: "Trending",
      icon: "",
      url: "",
    },
    {
      id: 2,
      name: "Music",
      icon: "",
      url: "",
    },
    {
      id: 3,
      name: "Gaming",
      icon: "",
      url: "",
    },
    {
      id: 4,
      name: "Sports",
      icon: "",
      url: "",
    },
  ];

  return (
    <>
      <div
        className={`sticky top-0 overflow-y-auto flex flex-col ml-1 scrollbar-hidden ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        {sideBarItems.map((item) => (
          <SmallSidebarItem
            key={item.name}
            icon={item.icon}
            name={item.name}
            url={item.url}
          />
        ))}
      </div>
      {isSmallOpen && (
        <div
          onClick={closeSidebar}
          className="lg:hidden fixed inset-0 z-50 bg-secondary-dark bg-opacity-50"
        ></div>
      )}
      <div
        className={`lg:sticky absolute top-0 overflow-y-auto flex-col w-56 scrollbar-hidden duration-300 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-50 bg-white max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden px-4 py-2 sticky top-0 bg-white">
          <LogoSection />
        </div>
        <LargeSidebarContainer title="">
          {sideBarItems
            .map((item) => (
              <LargeSidebarItem
                key={item.name}
                name={item.name}
                url={item.url}
                icon={item.icon}
                isActive={false}
              />
            ))
            .slice(0, 3)}
        </LargeSidebarContainer>
        <hr />
        <LargeSidebarContainer title="You">
          {you.map((item) => (
            <LargeSidebarItem
              url={item.url}
              key={item.id}
              name={item.name}
              icon={item.img}
              isActive={false}
            />
          ))}
        </LargeSidebarContainer>
        <hr />
        <LargeSidebarContainer title="Subscriptions">
          {subscriptions.map((subs) => (
            <LargeSidebarItem
              key={subs.id}
              name={subs.name}
              url={subs.url}
              icon={subs.img}
              isActive={false}
            />
          ))}
        </LargeSidebarContainer>
        <hr />
        <LargeSidebarContainer title="Explore">
          {explore.map((item) => (
            <LargeSidebarItem
              key={item.id}
              url={item.url}
              name={item.name}
              icon={item.icon}
              isActive={false}
            />
          ))}
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
type LargeSidebarProps = {
  children: ReactNode;
  title: string;
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
  isActive = true,
}: LargeSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `${
          isActive ? "bg-neutral-100 font-semibold" : ""
        } w-full flex items-center gap-3 rounded-lg p-3`
      )}
    >
      <div className="w-6 h-6 rounded-full">{icon}</div>
      <p className="whitespace-nowrap overflow-hidden text-ellipsis">{name}</p>
    </a>
  );
};

const LargeSidebarContainer = ({ children, title }: LargeSidebarProps) => {
  return (
    <div className="py-3">
      {title && <h2 className="py-2 px-4 text-lg font-semibold">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};
