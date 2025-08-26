import Link from "next/link";

export const TopBar = () => {
  return (
    <section>
      <div
        aria-label="V3 Released! View Changelog"
        className="flex flex-row items-center justify-center border-b border-b-neutral-800 px-6 py-2 text-center text-sm"
      >
        <span>
          V3 Released!{" "}
          <Link href="/changelog" className="text-blue-400 hover:text-blue-500">
            View Changelog &rarr;
          </Link>
        </span>
      </div>
    </section>
  );
};

TopBar.displayName = "TopBar";
