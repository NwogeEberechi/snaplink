import React from "react";
import { UrlForm, SearchBar, LinkList, Pagination } from "../components";

export const HomePage: React.FC = () => {
  return (
    <div className="flex justify-start items-center">
      <section className="links_wrapper">
        <div className="links_content">
          <div className="flex justify-between items-center">
            <div className="label">Links</div>
            <div className="flex justify-end items-center gap-2">
              <SearchBar />
              <div className="min-w-[140px]">
                <UrlForm />
              </div>
            </div>
          </div>
          <div className="mTop20">
            <LinkList />
          </div>
          <Pagination />
        </div>
      </section>
    </div>
  );
};
