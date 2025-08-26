"use client";

import LOADERS from "@/lib/config/loaders";
import { memo, Suspense, useState } from "react";
import { Renderer } from "./Renderer";
import { Tabs } from "./Tabs";
import { Card } from "./ui/Card";

export const Filter = memo(() => {
  const initialTab = "arrows";
  const [activeTab, setActiveTab] = useState(initialTab);
  const filteredLoaders = Object.values(LOADERS).filter(
    (loader) => loader.category === activeTab,
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="z-40 min-h-screen w-full border border-x-0 border-y-neutral-800 p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredLoaders.map(({ category, keyframes, speed }, i: number) => (
            <Card
              key={`filter_${category}_${i + 1}`}
              slug={`/${category}_${i + 1}`}
              name={`${category}_${i + 1}`}
            >
              <Renderer speed={speed} keyframes={keyframes} />
            </Card>
          ))}
        </div>
      </div>
    </Suspense>
  );
});

Filter.displayName = "Filter";
