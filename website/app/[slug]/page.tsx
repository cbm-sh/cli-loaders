import { CODE } from "@/lib/config/code";
import LOADERS from "@/lib/config/loaders";
import type { LoaderProps } from "@/types";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero").then((mod) => mod.Hero));
const Renderer = dynamic(() =>
  import("@/components/Renderer").then((mod) => mod.Renderer),
);
const CodeBlock = dynamic(() =>
  import("@/components/CodeBlock").then((mod) => mod.CodeBlock),
);
const BackButton = dynamic(() =>
  import("@/components/BackButton").then((mod) => mod.BackButton),
);
const CopyKeyframes = dynamic(() =>
  import("@/components/CopyKeyframes").then((mod) => mod.CopyKeyframes),
);
const ForwardButton = dynamic(() =>
  import("@/components/ForwardButton").then((mod) => mod.ForwardButton),
);
export const generateStaticParams = async () =>
  Object.keys(LOADERS).map((key) => ({
    slug: key,
  }));

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const loaderCategories = Object.keys(LOADERS);
  const currentIndex = loaderCategories.indexOf(slug);
  const loader = LOADERS[slug as keyof typeof LOADERS] as LoaderProps;
  const nextLoader = loaderCategories[currentIndex + 1];
  const { speed, category, keyframes } = loader as LoaderProps;

  return (
    <>
      <section>
        <Hero
          title={slug}
          description={`The ${category.toLocaleLowerCase()} collection`}
        />
        <div className="z-50 flex flex-row items-center justify-between p-6">
          <BackButton />
          <ForwardButton href={nextLoader} />
        </div>
      </section>
      <section>
        <div className="w-full border border-x-0 border-b-0 border-t-neutral-800 px-6 pt-6">
          <div className="relative flex min-h-96 flex-col items-center justify-center overflow-hidden border border-neutral-800 bg-black p-6">
            <div className="absolute size-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)] bg-[size:8px_10px]" />
            <span className="absolute top-2 left-3 text-neutral-50">
              Preview
            </span>
            <CopyKeyframes
              code={keyframes}
              variant="secondary"
              copyText="Keyframes copied to clipboard!"
            />
            <Renderer speed={speed} keyframes={keyframes} />
          </div>
        </div>
      </section>
      <section>
        <div className="flex w-full flex-col px-6 pb-6">
          {Object.entries(CODE).map(([key, item]: [string, any]) => {
            const codeItem =
              typeof item === "function"
                ? item(slug ?? null, speed ?? null, keyframes ?? null)
                : item;
            return (
              <div className="mt-6" key={key}>
                <CodeBlock
                  lang={codeItem.lang ?? "tsx"}
                  title={codeItem.title}
                  code={codeItem.code}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Page;
