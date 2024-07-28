// src/components/SearchBar.tsx
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setSearchTerm } from "../features/links/linksSlice";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { searchTerm } = useAppSelector((state) => ({
    searchTerm: state.links.searchTerm,
  }));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <Input
      size="large"
      type="text"
      placeholder="Search links..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="border p-2 rounded w-full"
      prefix={<SearchOutlined />}
    />
  );
};
