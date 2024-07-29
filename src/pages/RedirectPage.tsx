import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { incrementClicks } from "../components";

export const RedirectPage: React.FC = () => {
  const { urlCode } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const hasIncremented = useRef(false);
  const { links } = useAppSelector((state) => ({
    links: state.links.links,
  }));

  useEffect(() => {
    console.log("RedirectPage useEffect");
    if (urlCode && !hasIncremented.current) {
      console.log("executing inside if");
      const link = links.find((link) => link.urlCode === urlCode);
      console.log("link", link);
      if (link) {
        console.log("link was found");
        dispatch(incrementClicks(link.urlCode));
        hasIncremented.current = true;
        window.location.href = link.longUrl;
        console.log("going to the long url");
      } else {
        navigate("/");
        console.log("going going back to default home page");
      }
    } else {
      console.log("else block");
    }
  }, [urlCode, dispatch, links, navigate]);

  return <div>Redirecting...</div>;
};
