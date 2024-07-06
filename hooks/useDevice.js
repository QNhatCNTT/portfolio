import { desktopScreen, tabletScreen } from "@/constants/breakpoint";
import useMediaQuery from "./useMediaQuery";

function useDevice() {
    const isTablet = useMediaQuery(`(min-width:${tabletScreen}px)`);
    const isDesktop = useMediaQuery(`(min-width:${desktopScreen}px)`);
    const isMobile = !isTablet && !isDesktop;

    return { isTablet, isMobile, isDesktop };
}

export default useDevice;
