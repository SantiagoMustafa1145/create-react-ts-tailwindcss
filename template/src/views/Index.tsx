import LinkToDocs from "components(LinkToDocs)";

export default function Index() {
  return (
    <main className="grid min-h-[100dvh] content-center gap-8">
      <h1 className="text-center text-3xl font-bold">
        Welcome to the Template
      </h1>
      <div className="text-center">
        <LinkToDocs />
      </div>
    </main>
  );
}
