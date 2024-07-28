import React from "react";
import { useAppSelector } from "../../hooks";
import { LinkCard } from "./LinkCard";

export const LinkList: React.FC = () => {
  const { links } = useAppSelector((state) => ({
    links: state.links.links,
  }));

  return (
    <div className="space-y-4">
      {links.map((link) => (
        <LinkCard key={link.urlCode} link={link} />
      ))}
    </div>
  );
};
