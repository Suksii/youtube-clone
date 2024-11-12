import MenuIcon from "@mui/icons-material/Menu";
import Button from "./Button";
import { useSidebar } from "../context/SidebarContext";

type LogoSectionProps = {
  isFullWidth: boolean;
};

const LogoSection = ({ isFullWidth }: LogoSectionProps) => {
  const { toggleSidebar } = useSidebar();

  return (
    <div
      className={
        isFullWidth ? "hidden" : "flex flex-shrink-0 items-center md:gap-2"
      }
    >
      <Button size="icon" variant="ghost" onClick={toggleSidebar}>
        <MenuIcon />
      </Button>
      <p className="text-2xl font-semibold">YouTube</p>
    </div>
  );
};

export default LogoSection;
