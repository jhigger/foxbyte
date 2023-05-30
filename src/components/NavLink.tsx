export interface NavLinkType {
  text: string | JSX.Element;
  link?: string;
}

export const NavLink = ({ text, link }: NavLinkType) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
      <li className="grid place-items-center border-[1px] border-white border-opacity-10 bg-white bg-opacity-20 px-4 py-1 text-sm font-bold uppercase text-white hover:bg-opacity-40">
        {text}
      </li>
    </a>
  );
};
