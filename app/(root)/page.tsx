import Hello from "@/app/components/hello";

export default function Home() {
  console.log("Which component am I?");
  return (
      <>
        <h1 className="text-3xl">Welcome to Next.js</h1>
        <Hello/>
      </>
  );
}
