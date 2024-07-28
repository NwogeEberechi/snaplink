import React, { useMemo } from "react";
import { useAppSelector } from "../../hooks";
import { LinkCard } from "./LinkCard";

export const LinkList: React.FC = () => {
  const { links, searchTerm } = useAppSelector((state) => ({
    links: state.links.links,
    searchTerm: state.links.searchTerm,
  }));

  const filteredLinks = useMemo(() => {
    if (searchTerm?.length >= 3) {
      return links.filter((link) =>
        link.longUrl?.toLowerCase().includes(searchTerm?.toLowerCase())
      );
    }

    return links;
  }, [links, searchTerm]);

  return (
    <div className="space-y-4">
      {filteredLinks.map((link) => (
        <LinkCard key={link.urlCode} link={link} />
      ))}
    </div>
  );
};
