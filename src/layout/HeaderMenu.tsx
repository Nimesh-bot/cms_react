import {
  ComputerDesktopIcon,
  LanguageIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

import Dropdown from "../components/dropdown";

const data = [
  {
    id: 1,
    name: "English",
    icon: "../assets/icons/flags/en.png",
  },
  {
    id: 2,
    name: "Japanese",
    icon: "../assets/icons/flags/jp.png",
  },
];

const HeaderMenu = () => {
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
                    <li key={index} className="w-44 cursor-pointer">
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
                  <li className="w-44 cursor-pointer">
                    <span className="flex items-center px-sm py-xs hover:bg-primary  hover:text-light">
                      <SunIcon className="w-5 h-5 mr-xs" />
                      Light
                    </span>
                  </li>
                  <li className="w-44 cursor-pointer">
                    <span className="flex items-center px-sm py-xs hover:bg-primary  hover:text-light">
                      <MoonIcon className="w-5 h-5 mr-xs" />
                      Dark
                    </span>
                  </li>
                  <li className="w-44 cursor-pointer">
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
