import Link from "next/link";
import { memo } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Button } from "./ui/Button";

export const ForwardButton = memo(({ href }: { href: string }) => {
  return (
    <Link href={`/${href}`}>
      <Button
        variant="quinary"
        icon={<HiArrowRight size={16} />}
        aria-label="Next Loader"
      />
    </Link>
  );
});

ForwardButton.displayName = "ForwardButton";
