import React, { useEffect, useRef, useState } from "react";

interface DropdownProps {
  children: {
    button: React.ReactNode;
    dropdown: React.ReactNode;
  };
  dataDropDownToggle: string;
}

const Dropdown = ({ children, dataDropDownToggle }: DropdownProps) => {
  const [show, setShow] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setShow(!show);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const getDropdownPosition = () => {
    if (!dropdownRef.current) return {};

    const dropdownX = dropdownRef.current.offsetLeft;
    const dropdownY = dropdownRef.current.offsetTop;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const remainingWidth = screenWidth - dropdownX;
    const remainingHeight = screenHeight - dropdownY;

    console.log("remaining width & height", remainingWidth, remainingHeight);

    return {
      top: remainingHeight < 180 ? `${dropdownY - 180}px` : `90%`,
      left: remainingWidth < 500 ? `${dropdownX - 160}px` : `${dropdownX}px`,
    };
  };

  return (
    <div ref={dropdownRef}>
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle={dataDropDownToggle}
        className="inline-flex items-center p-xxs text-sm font-medium text-center text-dark rounded-lg hover:bg-muted-light dark:hover:bg-muted-dark dark:text-light"
        type="button"
        onClick={handleDropdownToggle}
      >
        {children.button}
      </button>

      {/* Dropdown menu */}
      <div
        id={dataDropDownToggle}
        style={getDropdownPosition()}
        className={`z-10 absolute ${
          show ? "flex" : "hidden"
        } glassmorph divide-y divide-muted rounded-lg w-44 dark:divide-muted-dark`}
      >
        <ul
          aria-labelledby="dropdownMenuIconButton"
          className="py-xs text-sm text-dark dark:text-light"
        >
          {children.dropdown}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
