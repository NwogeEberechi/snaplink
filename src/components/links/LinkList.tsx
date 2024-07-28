import React, { useMemo } from "react";
import { useAppSelector } from "../../hooks";
import { LinkCard } from "./LinkCard";
import { NoLinks } from "../../components/NoLinks";

export const LinkList: React.FC = () => {
  const { links, searchTerm, currentPage, pageSize } = useAppSelector(
    (state) => ({
      links: state.links.links,
      searchTerm: state.links.searchTerm,
      currentPage: state.links.currentPage,
      pageSize: state.links.pageSize,
    })
  );

  const filteredLinks = useMemo(() => {
    if (searchTerm?.length >= 3) {
      return links.filter((link) =>
        link.longUrl?.toLowerCase().includes(searchTerm?.toLowerCase())
      );
    }

    return links;
  }, [links, searchTerm]);

  const paginatedLinks = useMemo(() => {
    return filteredLinks.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
  }, [currentPage, pageSize, filteredLinks]);

  if (paginatedLinks.length === 0) {
    return <NoLinks />;
  }

  return (
    <div className="space-y-4">
      {paginatedLinks.map((link) => (
        <LinkCard key={link.urlCode} link={link} />
      ))}
    </div>
  );
};
