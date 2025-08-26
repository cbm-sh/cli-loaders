import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero").then((mod) => mod.Hero));
const TopBar = dynamic(() =>
  import("@/components/TopBar").then((mod) => mod.TopBar),
);
const Filter = dynamic(() =>
  import("@/components/Filter").then((mod) => mod.Filter),
);

const HomePage = () => {
  return (
    <>
      <TopBar />
      <Hero
        title="Cli Loaders"
        description="A collection of animated CLI loaders for your projects"
      />
      <section className="border border-x-0 border-b-0 border-t-neutral-800">
        <Filter />
      </section>
    </>
  );
};

export default HomePage;
