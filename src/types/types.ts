import { VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";
import { buttonStyles } from "../components/Button";

export type SidebarContextProps = {
    children: ReactNode;
  };

export type CategoriesProps = {
  categories: string[]
};

export type VideoProps = {
  videoId: number;
  type: string;
  title: string;
  channelId: string;
  channelTitle: string;
  description: string;
  channelThumbnail?: { url?: string | undefined }[] | undefined;
  viewCount: string;
  publishedAt: string;
  thumbnail?: { url?: string | undefined }[] | undefined;
  videoUrl: string;
  lengthText: number;
  };

  export type Video = {
    videoId: number;
    type: string;
    title: string;
    channelId: string;
    channelTitle: string;
    description: string;
    channelThumbnail?: { url?: string | undefined }[] | undefined;
    viewCount: string;
    publishedAt: string;
    thumbnail?: { url?: string | undefined }[] | undefined;
    videoUrl: string;
    lengthText: number;
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

  // export type ApiResponseVideos = {
  //   data: Video[];
  //   filters: { filter: string }[];
  // }