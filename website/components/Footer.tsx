import Link from "next/link";

export const Footer = () => (
  <footer className="flex h-15 items-center justify-between border border-x-0 border-b-0 border-t-neutral-800 p-6 text-center">
    <Link
      href="/changelog"
      className="text-neutral-400 transition-colors hover:text-neutral-500"
      aria-label="Cli Loaders Changelog"
      aria-hidden="false"
      role="link"
    >
      Changelog
    </Link>
    <Link
      href="https://github.com/cbmongithub/cli-loaders/labels/bug"
      className="text-neutral-400 transition-colors hover:text-neutral-500"
      aria-label="Cli Loaders Bug Reports"
      aria-hidden="false"
      role="link"
    >
      Bugs
    </Link>
    <p className="inline-flex items-center gap-2 text-neutral-400">
      &copy; 2025 cli-loaders
    </p>
  </footer>
);

Footer.displayName = "Footer";
