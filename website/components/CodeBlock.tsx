import githubDark from "@/lib/config/theme.json";
import type { CodeBlockProps } from "@/types";
import { Code } from "bright";
import { memo } from "react";
import { CopyCode } from "./CopyCode";

Code.theme = githubDark as unknown as Record<string, string>;

export const CodeBlock = memo(
  ({ code, lang, title, children }: CodeBlockProps) => (
    <div className="relative border border-neutral-800">
      <div className="flex flex-row items-center justify-between border-b border-neutral-800 bg-black pl-3">
        <p className="text-neutral-400">{title}</p>
        <CopyCode
          variant="quaternary"
          code={code || ""}
          copyText="Code copied to clipboard!"
        />
      </div>
      <Code style={{ padding: "0", margin: "0" }} code={code} lang={lang}>
        {children}
      </Code>
    </div>
  ),
);

CodeBlock.displayName = "CodeBlock";
