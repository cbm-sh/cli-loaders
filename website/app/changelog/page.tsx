import { BackButton } from "@/components/BackButton";
import { Hero } from "@/components/Hero";
import { getChangeLog } from "@/lib/helpers/get-changelog";
import { type ChangeLogProps } from "@/types";
import { useMemo } from "react";

const Page = () => {
  const changeLog: ChangeLogProps[] = getChangeLog();

  const latest = useMemo(
    () =>
      changeLog.reduce((prev, current) => {
        return prev.v > current.v ? prev : current;
      }),
    [changeLog],
  );

  return (
    <>
      <section>
        <Hero
          title="Changelog"
          description="View the latest change to the cli-loaders package and website"
        />
        <div className="z-50 flex flex-row items-center justify-start p-6">
          <BackButton />
        </div>
      </section>
      <section className="border border-x-0 border-b-0 border-t-neutral-800">
        <div className="flex flex-col items-start justify-center gap-6 p-6">
          <h1 className="text-md text-neutral-50">Latest Updates</h1>
          {changeLog.map((v, i) => (
            <div
              key={`${v}_${i}`}
              className="flex h-auto w-full flex-col items-start justify-start overflow-y-scroll border border-neutral-800"
            >
              <div className="relative flex flex-col items-start justify-start p-6 text-sm text-neutral-50">
                <h2 className="text-sm text-neutral-50">
                  {v.v === latest.v ? (
                    <span className="relative mt-[4px] ml-[4px] flex h-auto w-auto border border-blue-400 bg-blue-500 p-0.5 text-xs">
                      v{v.v} - Latest
                    </span>
                  ) : (
                    <span className="relative ml-[4px] flex h-auto w-auto border border-rose-400 bg-rose-500 p-0.5 text-xs">
                      v{v.v} - Previous
                    </span>
                  )}
                </h2>
                {v.change.map(({ type, notes }, i) => (
                  <div
                    key={`${type}_${i}`}
                    className="flex h-auto w-full flex-col items-start justify-start overflow-y-scroll"
                  >
                    <h3 className="py-6 text-lg font-semibold">{type}</h3>
                    <ul className="flex flex-col items-start justify-start text-left text-neutral-300">
                      {notes.map((note, i) => (
                        <li key={`${note.slice(3, 10)}_${i}`}> - {note}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
