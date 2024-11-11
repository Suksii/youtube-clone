import { createContext, ReactNode, useContext, useState } from "react";

type SidebarContextProps = {
  children: ReactNode;
};

type SidebarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({ children }: SidebarContextProps) => {
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const [isLargeOpen, setIsLargeOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isLargeOpen, isSmallOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = useContext(SidebarContext);
