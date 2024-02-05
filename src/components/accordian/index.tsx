import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface MenuAccordianProps {
  element: React.ReactNode;
  items: React.ReactNode;
}

const MenuAccordian = (props: MenuAccordianProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-y-4 flex-1">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {props.element}
        <ChevronRightIcon
          className={`w-3 h-3 mr-xs ${
            show && "rotate-90"
          } transform transition-all`}
        />
      </div>

      {show && <>{props.items}</>}
    </div>
  );
};

export { MenuAccordian };
