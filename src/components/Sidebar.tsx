import { Home } from "@mui/icons-material";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";
import {
  SmartDisplayOutlined,
  SubscriptionsOutlined,
  AccountCircleOutlined,
  PlaylistPlayOutlined,
  RestoreOutlined,
  AccessTimeOutlined,
  ThumbUpOutlined,
  WhatshotOutlined,
  QueueMusicOutlined,
  SportsEsportsOutlined,
  EmojiEventsOutlined,
} from "@mui/icons-material";
import { ReactNode } from "react";
import { useSidebar } from "../context/SidebarContext";
import LogoSection from "./LogoSection";

export const Sidebar = () => {
  const { isLargeOpen, isSmallOpen, closeSidebar, isSmallScreen } =
    useSidebar();

  const sideBarItems = [
    {
      icon: <Home />,
      name: "Home",
      url: "/",
    },
    {
      icon: <SmartDisplayOutlined />,
      name: "Shorts",
      url: "/",
    },
    {
      icon: <SubscriptionsOutlined />,
      name: "Subscriptions",
      url: "/",
    },
    {
      icon: <AccountCircleOutlined />,
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
      img: <RestoreOutlined />,
      url: "",
    },
    {
      id: 2,
      name: "Playlists",
      img: <PlaylistPlayOutlined />,
      url: "",
    },
    {
      id: 3,
      name: "Your videos",
      img: <SmartDisplayOutlined />,
      url: "",
    },
    {
      id: 4,
      name: "Watch later",
      img: <AccessTimeOutlined />,
      url: "",
    },
    {
      id: 5,
      name: "Liked videos",
      img: <ThumbUpOutlined />,
      url: "",
    },
  ];
  const explore = [
    {
      id: 1,
      name: "Trending",
      icon: <WhatshotOutlined />,
      url: "",
    },
    {
      id: 2,
      name: "Music",
      icon: <QueueMusicOutlined />,
      url: "",
    },
    {
      id: 3,
      name: "Gaming",
      icon: <SportsEsportsOutlined />,
      url: "",
    },
    {
      id: 4,
      name: "Sports",
      icon: <EmojiEventsOutlined />,
      url: "",
    },
  ];

  return (
    <>
      <div
        className={`sticky top-0 overflow-y-auto hidden sm:flex flex-col ml-1 scrollbar-hidden ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        {sideBarItems.map((item) => (
          <SmallSidebarItem
            key={item.name}
            customTitle={item.name}
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
        className={`lg:sticky absolute top-0 bg-white overflow-y-auto flex-col w-56 scrollbar-hidden transform transition-transform duration-300 z-50 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${
          isSmallOpen
            ? "flex max-h-screen"
            : `${isSmallScreen ? "-translate-x-full" : "hidden"}`
        }`}
      >
        <div className="lg:hidden px-4 py-2 sticky top-0 bg-white">
          <LogoSection />
        </div>
        <LargeSidebarContainer title="">
          {sideBarItems
            .map((item) => (
              <LargeSidebarItem
                key={item.name}
                customTitle={item.name}
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
              customTitle={item.name}
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
              customTitle={subs.name}
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
              customTitle={item.name}
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
  customTitle: string;
};

type LargeSidebarItemProps = {
  icon: ReactNode;
  name: string;
  customTitle: string;
  url: string;
  isActive?: boolean;
};
type LargeSidebarProps = {
  children: ReactNode;
  title: string;
};

const SmallSidebarItem = ({
  icon,
  name,
  url,
  customTitle,
}: SmallSidebarItemProps) => {
  return (
    <a
      href={url}
      title={customTitle}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "flex flex-col items-center justify-center px-1 py-4 rounded-lg w-16 h-[74px]"
      )}
    >
      <div className="w-6 h-6">{icon}</div>
      <p className="text-[10px]">{name}</p>
    </a>
  );
};

const LargeSidebarItem = ({
  icon,
  name,
  url,
  customTitle,
  isActive = true,
}: LargeSidebarItemProps) => {
  return (
    <a
      href={url}
      title={customTitle}
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
