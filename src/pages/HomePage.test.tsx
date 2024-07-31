import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HomePage } from ".";

// Mock the child components
vi.mock("../components", () => ({
  UrlForm: () => <div data-testid="url-form">UrlForm Component</div>,
  SearchBar: () => <div data-testid="search-bar">SearchBar Component</div>,
  LinkList: () => <div data-testid="link-list">LinkList Component</div>,
  Pagination: () => <div data-testid="pagination">Pagination Component</div>,
}));

describe("HomePage", () => {
  it("should render all child components", () => {
    render(<HomePage />);

    expect(screen.getByTestId("url-form")).toBeInTheDocument();
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    expect(screen.getByTestId("link-list")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  it("should have the correct class names and structure", () => {
    render(<HomePage />);

    const section = screen.getByRole("region");
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("links_wrapper");

    expect(screen.getByText("Links")).toBeInTheDocument();

    const contentDiv = screen.getByText("Links").closest("div");
    expect(contentDiv).toHaveClass("label");

    const linkListContainer = screen.getByRole("list");
    expect(linkListContainer).toHaveClass("mTop20");
  });
});
