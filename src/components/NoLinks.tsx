import nolinks from "../assets/nolinks.svg";
import { UrlForm } from "../components/UrlForm";

export const NoLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-white py-12 mTop30">
      <h2 className="z-10 text-xl font-semibold text-gray-700">
        No links found.
      </h2>
      <img
        src={nolinks}
        alt="No links yet"
        width="400"
        height="400"
        className="pointer-events-none -my-8"
      />
      <div className="min-w-[140px]">
        <UrlForm />
      </div>
      <p className="mt-2 text-sm text-gray-500">or edit your search filters</p>
    </div>
  );
};
