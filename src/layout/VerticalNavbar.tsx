import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuAccordian } from "../components/accordian";
import { menu, MenuItem } from "../navigation/menu";

const VerticalNavbar = () => {
  const [menuItems, setMenuItems] = useState({} as any);
  const navigate = useNavigate();

  useEffect(() => {
    type GroupedItems = Record<string, MenuItem[]>;

    const separateByGroup = (items: MenuItem[]): GroupedItems => {
      return items.reduce((acc: GroupedItems, item: MenuItem) => {
        const { children, group, ...rest } = item; // Remove children from the item
        if (!acc[group]) {
          acc[group] = [];
        }
        acc[group].push({
          ...rest,
          group: group,
          children: children,
        });

        return acc;
      }, {} as GroupedItems);
    };

    const separatedItems = separateByGroup(menu);

    setMenuItems(separatedItems);
  }, []);

  const navigationHandler = (path: string | undefined) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="vertical-navbar">
      {Object.keys(menuItems).map((group, index) => (
        <div className="flex flex-col w-full" key={index}>
          {group !== "main" && (
            <div className={`mb-md ${index > 0 && "mt-2xl"}`}>
              <h3 className="text-dark dark:text-light opacity-25 text-base">
                {group.charAt(0).toUpperCase() + group.slice(1)}
              </h3>
            </div>
          )}
          <div key={index} className="flex flex-col gap-y-4">
            {menuItems[group].map((item: MenuItem, index: number) => (
              <div
                key={index}
                className="flex justify-between w-full items-center"
              >
                {item.children ? (
                  <MenuAccordian
                    element={
                      <div className="flex gap-x-2 items-center">
                        {item.icon && <item.icon className="w-5 h-5" />}
                        {item.title}
                      </div>
                    }
                    items={item.children.map(
                      (child: MenuItem, index: number) => (
                        <div className="ml-sm">
                          {child.children ? (
                            <MenuAccordian
                              key={index}
                              element={
                                <div className="flex gap-x-2 items-center">
                                  {child.icon && (
                                    <child.icon className="w-5 h-5" />
                                  )}
                                  {child.title}
                                </div>
                              }
                              items={child.children.map(
                                (subChild: MenuItem, index: number) => (
                                  <div
                                    key={index}
                                    className="flex gap-x-2 flex-1 items-center ml-sm cursor-pointer"
                                    onClick={() =>
                                      navigationHandler(subChild.path)
                                    }
                                  >
                                    {subChild.icon && (
                                      <subChild.icon className="w-5 h-5" />
                                    )}
                                    {subChild.title}
                                  </div>
                                )
                              )}
                            />
                          ) : (
                            <div
                              key={index}
                              className="flex gap-x-2 items-center cursor-pointer"
                              onClick={() => navigationHandler(child.path)}
                            >
                              {child.icon && <child.icon className="w-5 h-5" />}
                              {child.title}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  />
                ) : (
                  <div
                    className="flex gap-x-2 items-center cursor-pointer"
                    onClick={() => navigationHandler(item.path)}
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    {item.title}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalNavbar;
