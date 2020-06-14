import { useState } from "react";

const useTheme = () => {
  const [barTop, setBarTop] = useState("rgba(29, 209, 0, 0.6)");
  const [barBottom, setBarBottom] = useState("rgba(0, 0, 0, 0)");
  const [barBorder, setBarBorder] = useState("rgb(0, 0, 0)");
  const [selectedBar, setSelectedBar] = useState("rgba(29, 209, 0, .5)");
  const [background, setBackground] = useState("#000000");

  const [darkMode, setDarkMode] = useState(true);

  return {
    darkMode: darkMode,
    colors: { barTop, barBottom, barBorder, selectedBar, background },
    handlers: {
      setBarTop,
      setBarBottom,
      setBarBorder,
      setSelectedBar,
      setDarkMode,
      setBackground
    }
  };
};

export default useTheme;
