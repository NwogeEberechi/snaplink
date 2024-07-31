import React from "react";
import { UrlForm, SearchBar, LinkList, Pagination } from "../components";

export const HomePage: React.FC = () => {
  return (
    <div
      className="flex justify-start items-center"
      data-testid="homepage-container"
    >
      <section
        className="links_wrapper"
        role="region"
        aria-label="Links Section"
      >
        <div className="links_content">
          <div className="flex justify-between items-center">
            <div className="label">Links</div>
            <div className="flex justify-end items-center gap-2">
              <div role="search" aria-label="Search Bar">
                <SearchBar />
              </div>
              <div className="min-w-[140px]" role="form" aria-label="URL Form">
                <UrlForm />
              </div>
            </div>
          </div>
          <div className="mTop20" role="list" aria-label="Link List">
            <LinkList />
          </div>
          <div role="navigation" aria-label="Pagination">
            <Pagination />
          </div>
        </div>
      </section>
    </div>
  );
};
