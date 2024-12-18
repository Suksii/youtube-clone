import { createContext, useContext, useEffect, useState } from "react";
import { SidebarContextProps, SidebarContextType } from "../types/types";
import { useLocation } from "react-router-dom";

const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({ children }: SidebarContextProps) => {
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const [isLargeOpen, setIsLargeOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const location = useLocation();

  const isVideoPage = location.pathname.startsWith("/watch/");

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      if (!isSmallScreen) setIsSmallOpen(false);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleSidebar = () => {
    if (isSmallScreen) {
      setIsSmallOpen((prev) => !prev);
    } else {
      setIsLargeOpen((prev) => !prev);
    }
  };

  const closeSidebar = () => {
    if (isSmallScreen) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  };

  return (
    <SidebarContext.Provider
      value={{
        isLargeOpen,
        isSmallOpen,
        toggleSidebar,
        closeSidebar,
        isSmallScreen,
        isVideoPage,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
