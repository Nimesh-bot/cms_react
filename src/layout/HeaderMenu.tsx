import {
  ComputerDesktopIcon,
  LanguageIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

import Dropdown from "../components/dropdown";

import JpFlag from "../assets/icons/flags/jp.png";
import UsFlag from "../assets/icons/flags/us.png";
import { Theme } from "../context/themeContext";
import { useThemeContext } from "../context/ThemeContextProvider";
import { getSystemTheme } from "../utils/getSystemTheme";

import i18n from "../i18n";

const data = [
  {
    id: 1,
    name: "English",
    icon: UsFlag,
    code: "en",
  },
  {
    id: 2,
    name: "Japanese",
    icon: JpFlag,
    code: "jp",
  },
];

const HeaderMenu = () => {
  const { setTheme } = useThemeContext();

  const themeHandler = (theme: string) => {
    switch (theme) {
      case "light":
        setTheme(Theme.LIGHT);
        localStorage.setItem("theme", Theme.LIGHT);
        break;
      case "dark":
        setTheme(Theme.DARK);
        localStorage.setItem("theme", Theme.DARK);
        break;
      case "system":
        const theme = getSystemTheme();
        setTheme(theme);
        localStorage.setItem("theme", theme);
        break;
      default:
        break;
    }
  };

  const onChangeLanguage = (language: string) => {
    localStorage.setItem("preference", JSON.stringify({ language: language }));
    i18n.changeLanguage(language);
  };

  return (
    <div className="header-menu sticky top-0 left-0">
      <ul className="flex items-center gap-x-4">
        <li>
          <Dropdown dataDropDownToggle="language">
            {{
              button: <LanguageIcon className="icon" />,
              dropdown: (
                <>
                  {data.map((item, index) => (
                    <li
                      key={index}
                      className="w-44 cursor-pointer"
                      onClick={() => onChangeLanguage(item.code)}
                    >
                      <span className="flex items-center px-sm py-xs hover:bg-primary  hover:text-light">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-5 h-5 mr-xs"
                        />
                        {item.name}
                      </span>
                    </li>
                  ))}
                </>
              ),
            }}
          </Dropdown>
        </li>
        <li>
          <Dropdown dataDropDownToggle="theme">
            {{
              button: <SunIcon className="icon" />,
              dropdown: (
                <>
                  <li
                    className="w-44 cursor-pointer"
                    onClick={() => themeHandler("light")}
                  >
                    <span className="flex items-center px-sm py-xs hover:bg-primary  hover:text-light">
                      <SunIcon className="w-5 h-5 mr-xs" />
                      Light
                    </span>
                  </li>
                  <li
                    className="w-44 cursor-pointer"
                    onClick={() => themeHandler("dark")}
                  >
                    <span className="flex items-center px-sm py-xs hover:bg-primary  hover:text-light">
                      <MoonIcon className="w-5 h-5 mr-xs" />
                      Dark
                    </span>
                  </li>
                  <li
                    className="w-44 cursor-pointer"
                    onClick={() => themeHandler("system")}
                  >
                    <span className="flex items-center px-sm py-xs hover:bg-primary  hover:text-light">
                      <ComputerDesktopIcon className="w-5 h-5 mr-xs" />
                      System
                    </span>
                  </li>
                </>
              ),
            }}
          </Dropdown>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
