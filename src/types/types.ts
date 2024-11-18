import { VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";
import { buttonStyles } from "../components/Button";

export type SidebarContextProps = {
    children: ReactNode;
  };

export type VideoProps = {
    id: number;
    title: string;
    channel: string;
    channelImg: string;
    views: number;
    postedAt: Date;
    thumbnailUrl: string;
    videoUrl: string;
    duration: number;
  };

  export type SmallSidebarItemProps = {
    icon: ReactNode;
    name: string;
    url: string;
  };
  
  export type LargeSidebarItemProps = {
    icon: ReactNode;
    name: string;
    url: string;
    isActive?: boolean;
  };
  export type LargeSidebarProps = {
    children: ReactNode;
    title: string;
  };

  export type TitleProps = {
    title: string;
    titlePosition?: string;
  };

  
export type SearchProps = {
    isFullWidth: boolean;
    setIsFullWidth: (value: boolean) => void;
  };

export type SidebarContextType = {
    isLargeOpen: boolean;
    isSmallOpen: boolean;
    isSmallScreen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
  };
  
export type LogoSectionProps = {
    isFullWidth?: boolean;
  };

export type ButtonProps = VariantProps<typeof buttonStyles> &
  ComponentProps<"button"> & {
    children?: ReactNode;
    customTitle?: string;
    titlePosition?: string;
  };