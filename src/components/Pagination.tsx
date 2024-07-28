// src/components/Pagination.tsx
import React, { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setCurrentPage } from "../features/links/linksSlice";

export const Pagination: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { links, currentPage, pageSize } = useAppSelector((state) => ({
    links: state.links.links,
    currentPage: state.links.currentPage,
    pageSize: state.links.pageSize,
  }));

  const totalLinks = links.length;
  const totalPages = Math.ceil(totalLinks / pageSize);

  const totalLinksInViewport = useMemo(() => {
    return `${(currentPage - 1) * pageSize + 1} -
      ${Math.min(currentPage * pageSize, totalLinks)}`;
  }, [currentPage, pageSize, totalLinks]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 w-full max-w-[768px] -translate-x-1/2 px-2.5 max-[920px]:bottom-5 max-[920px]:pr-20">
      <nav className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm leading-6 text-gray-600 [filter:drop-shadow(0_5px_8px_#222A351d)]">
        <div className="flex items-center gap-4">
          <div>
            <span className="hidden sm:inline-block">Viewing</span>{" "}
            <span className="font-medium">{totalLinksInViewport}</span> of{" "}
            <span className="font-medium">{totalLinks}</span> links
          </div>
          <div></div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex w-full items-center justify-center border px-4 py-2 rounded-l text-sm h-7 px-2 border-gray-400 text-gray-600 disabled:opacity-50"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <div>Previous</div>
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center border px-4 py-2 rounded-l text-sm h-7 px-2 border-gray-400 text-gray-600 disabled:opacity-50"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <div>Next</div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
