import React, { useCallback } from "react";
import { useAppDispatch } from "../../hooks";
import { Link, incrementClicks } from "../../features/links/linksSlice";

interface LinkCardProps {
  link: Link;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const dispatch = useAppDispatch();

  const copyUrl = useCallback(() => {
    navigator.clipboard.writeText(link.shortUrl);
  }, [link.shortUrl]);

  const incrementLinkClicks = useCallback(() => {
    dispatch(incrementClicks(link.urlCode));
  }, [dispatch, link.urlCode]);

  return (
    <div className="border p-4 rounded space-y-2 flex items-center justify-between gap-5 sm:gap-8 md:gap-12 text-sm">
      <div className="flex justify-start items-center gap-2">
        <div className="w-10 h-10 rounded-full flex items-center justify-center primary_color_light">
          <div className="w-6 h-6 rounded-full flex items-center justify-center primary_color_variant">
            <span className="text-white font-bold text-lg">
              {link.urlCode.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
        <div>
          <div className="min-w-0 shrink grow-0 text-gray-950">
            <div className="flex items-center gap-2">
              <a
                href={`/${link.urlCode}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={incrementLinkClicks}
              >
                {link.shortUrl}
              </a>
              <button
                className="relative group rounded-full transition-all duration-75 bg-transparent hover:bg-gray-100 active:bg-gray-200 p-1.5"
                onClick={copyUrl}
              >
                <span className="sr-only">Copy</span>
                <svg
                  fill="none"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  className="h-3.5 w-3.5"
                >
                  <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex min-w-0 items-center gap-1">
            <svg
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 shrink-0 text-gray-400"
            >
              <g fill="currentColor">
                <path
                  d="M15.25,9.75H4.75c-1.105,0-2-.895-2-2V3.75"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <polyline
                  fill="none"
                  points="11 5.5 15.25 9.75 11 14"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></polyline>
              </g>
            </svg>
            <p className="text-gray-500">{link.longUrl}</p>
          </div>
        </div>
      </div>
      <p>
        <span className="cursor">{link.clicks} clicks</span>
      </p>
    </div>
  );
};
