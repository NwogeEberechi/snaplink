import React from "react";
import { UrlForm } from "../components/UrlForm";
import { LinkList } from "../components/links/LinkList";

export const HomePage: React.FC = () => {
  return (
    <div className="flex justify-start items-center">
      <section className="links_wrapper">
        <div className="links_content">
          <div className="flex justify-between items-center">
            <div className="label">Links</div>
            <div>
              <UrlForm />
            </div>
          </div>
          <div className="mTop20">
            <LinkList />
          </div>
        </div>
      </section>
    </div>
  );
};
