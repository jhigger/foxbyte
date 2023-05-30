const MenuButton = ({
  toggleMenu,
  open,
}: {
  toggleMenu: () => void;
  open: boolean;
}) => {
  return (
    <button onClick={toggleMenu} className="text-white lg:hidden">
      <div className="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl p-2">
        <div className="space-y-2">
          <span
            className={`block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out${
              open ? "w-10 -translate-y-1.5 -rotate-45" : ""
            }`}
          ></span>
        </div>
      </div>
    </button>
  );
};

export default MenuButton;
