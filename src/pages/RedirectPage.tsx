import { useParams } from "react-router-dom";

export const RedirectPage: React.FC = () => {
  const { shortUrl } = useParams<{ shortUrl: string }>();

  return <div>Redirecting...{shortUrl}</div>;
};
