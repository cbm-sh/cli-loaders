"use client";

import { memo } from "react";
import { FaEnvelope, FaFacebook, FaLinkedin, FaReddit } from "react-icons/fa";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";
import { Button } from "./ui/Button";
import { XLogoIcon } from "./ui/Icons";

export const Share = memo(
  ({
    className,
    title,
    url,
    description,
  }: {
    className?: string;
    title: string;
    url: string;
    description: string;
  }) => {
    return (
      <div className={className}>
        <EmailShareButton
          url={url}
          subject={`Check out this cli ${title.toLocaleLowerCase()} loader I found on cliloaders!`}
          aria-label="Share loader by email button"
        >
          <Button
            as="span"
            variant="primary"
            icon={<FaEnvelope className="size-4" />}
          />
        </EmailShareButton>
        <FacebookShareButton
          className="ml-3"
          url={url}
          aria-label="Share loader through facebook button"
        >
          <Button
            as="span"
            variant="primary"
            icon={<FaFacebook className="size-4" />}
          />
        </FacebookShareButton>
        <LinkedinShareButton
          className="ml-3"
          url={url}
          title={title}
          summary={description}
          source={url}
          aria-label="Share loader through linkedin button"
        >
          <Button
            as="span"
            variant="primary"
            icon={<FaLinkedin className="size-4" />}
          />
        </LinkedinShareButton>
        <RedditShareButton
          className="ml-3"
          url={url}
          title={title}
          aria-label="Share loader through reddit button"
        >
          <Button
            as="span"
            variant="primary"
            icon={<FaReddit className="size-4" />}
          />
        </RedditShareButton>
        <TwitterShareButton
          url={url}
          className="ml-3"
          title={`Check out this ${title.toLocaleLowerCase()} loader!`}
          aria-label="Share loader through X button"
        >
          <Button
            as="span"
            variant="primary"
            icon={<XLogoIcon className="size-4" />}
          />
        </TwitterShareButton>
      </div>
    );
  },
);

Share.displayName = "Share";
