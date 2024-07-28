import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { incrementClicks } from "../features/links/linksSlice";

export const RedirectPage: React.FC = () => {
  const { urlCode } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const hasIncremented = useRef(false);
  const { links } = useAppSelector((state) => ({
    links: state.links.links,
  }));

  useEffect(() => {
    if (urlCode && !hasIncremented.current) {
      const link = links.find((link) => link.urlCode === urlCode);
      if (link) {
        dispatch(incrementClicks(link.urlCode));
        hasIncremented.current = true;
        window.location.href = link.longUrl;
      } else {
        navigate("/");
      }
    }
  }, [urlCode, dispatch, links, navigate]);

  return <div>Redirecting...</div>;
};
