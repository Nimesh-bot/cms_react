import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuAccordian } from "../components/accordian";
import { menu, MenuItem } from "../navigation/menu";

const VerticalNavbar = () => {
  const { t } = useTranslation(["translation", "common"]);

  const [menuItems, setMenuItems] = useState({} as any);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const separateByGroup = (items: MenuItem[]) => {
      return items.reduce((acc: Record<string, MenuItem[]>, item: MenuItem) => {
        const { children, group, ...rest } = item;
        if (!acc[group]) {
          acc[group] = [];
        }
        acc[group].push({ ...rest, group, children });
        return acc;
      }, {} as Record<string, MenuItem[]>);
    };

    const separatedItems = separateByGroup(menu);
    setMenuItems(separatedItems);
  }, []);

  const navigationHandler = (path: string | undefined) => {
    if (path) {
      navigate(path);
    }
  };

  const isSelected = (path: string) => {
    return location.pathname === path;
  };

  const renderMenuItems = (items: MenuItem[], paddingLeft = 0) => {
    return items.map((item: MenuItem, index: number) => (
      <div
        key={index}
        className={`flex justify-between w-full items-center relative pl-4 ${
          isSelected(item.path!) && "bg-primary bg-opacity-10 text-primary"
        }`}
      >
        {isSelected(item.path!) && (
          <div
            className={`absolute left-0 top-0 w-2 rounded-r-full h-full bg-primary`}
          />
        )}
        {item.children ? (
          <MenuAccordian
            element={
              <div
                className="flex gap-x-2 items-center py-1 pl-4"
                style={{ paddingLeft: `${paddingLeft}px` }}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                {t(`${item.title}`)}
              </div>
            }
            items={renderMenuItems(item.children, paddingLeft + 10)}
          />
        ) : (
          <div
            className={`flex pl-4 flex-1 gap-x-2 items-center cursor-pointer py-2 `}
            onClick={() => navigationHandler(item.path)}
            style={{ paddingLeft: `${paddingLeft}px` }}
          >
            {item.icon && (
              <item.icon
                className={`w-5 h-5 ${
                  isSelected(item.path!) && "text-primary stroke-primary"
                }`}
              />
            )}
            {t(`${item.title}`)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="vertical-navbar">
      {Object.keys(menuItems).map((group, index) => (
        <div className="flex flex-col w-full" key={index}>
          {group !== "main" && (
            <div className={`mb-md pl-4 ${index > 0 && "mt-2xl"}`}>
              <h3 className="text-dark dark:text-light opacity-50 font-normal text-base">
                {group.charAt(0).toUpperCase() + group.slice(1)}
              </h3>
            </div>
          )}
          <div key={index} className="flex flex-col gap-y-4">
            {renderMenuItems(menuItems[group])}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalNavbar;
