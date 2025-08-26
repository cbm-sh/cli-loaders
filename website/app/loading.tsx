const loading = () => {
  return (
    <div className="relative mx-auto flex h-screen w-screen animate-pulse flex-col px-6 blur-lg transition">
      <div className="mx-auto flex h-full flex-col items-center justify-center">
        Loading...
      </div>
    </div>
  );
};

export default loading;
