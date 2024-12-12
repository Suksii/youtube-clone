import { VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";
import { buttonStyles } from "../components/Button";
import { TDate } from "timeago.js";

export type SidebarContextProps = {
  children: ReactNode;
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
  description: string;
  channelThumbnail?: { url: string };
  liveBroadcastContent: string;
  publishedAt: string;
  viewCount?: string;
  duration?: string;
  isSearchPage?: boolean;
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
    tags?: [];
    liveBroadcastContent: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string | undefined;
    commentCount: string;
  };
  contentDetails: {
    duration: string;
  };
};

export type CommentsProps = {
  textDisplay: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  publishedAt: string;
};

export type Comments = {
  snippet: {
    topLevelComment: {
      snippet: {
        textDisplay: string;
        authorDisplayName: string;
        authorProfileImageUrl: string;
        authorChannelUrl: string;
        publishedAt: string;
        likeCount: number;
      };
    };
  };
};

export type Channel = {
  id: string;
  etag: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: { url: string };
      medium: { url: string };
      default: { url: string };
    };
    publishedAt: TDate | string | undefined;
    liveBroadcastContent: string;
  };
  statistics: {
    viewCount: string;
    subscriberCount: string | undefined;
    videoCount: string | undefined;
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
  title: string | undefined;
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

export type RelatedVideosType = {
  thumbnails: [];
  duration: string;
  title: string;
  description: string;
};
