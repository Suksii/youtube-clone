import { VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";
import { buttonStyles } from "../components/Button";

export type SidebarContextProps = {
  children: ReactNode;
};

export type CategoriesProps = {
  categories: string[];
};

export type VideoProps = {
  videoId: string;
  title: string;
  channelTitle: string;
  channelId: string;
  thumbnails: {
    high: { url: string };
    medium: { url: string };
    default: { url: string };
  };
  channelThumbnail?: { url: string };
  liveBroadcastContent: string;
  publishedAt: string;
  viewCount: string;
  duration: string;
};

export type Video = {
  id: string;
  videoId: string;
  etag: string;
  snippet: {
    title: string;
    channelTitle: string;
    channelId: string;
    description: string;
    thumbnails: {
      high: { url: string };
      medium: { url: string };
      default: { url: string };
    };
    publishedAt: string;
    liveBroadcastContent: string;
  };
  statistics: {
    viewCount: string;
  };
  contentDetails: {
    duration: string;
  };
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

export type RelatedVideos = {
  thumbnails: [];
  duration: string;
  title: string;
  description: string;
};
