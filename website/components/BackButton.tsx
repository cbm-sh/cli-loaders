"use client";

import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { Button } from "./ui/Button";

export const BackButton = () => (
  <Link onMouseDown={() => history.back()} href="/">
    <Button
      variant="primary"
      icon={<HiArrowLeft size={16} />}
      aria-label="Back to Home"
    />
  </Link>
);

BackButton.displayName = "BackButton";
