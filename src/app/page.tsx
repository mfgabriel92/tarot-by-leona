import { About, Hero } from "@/app/components/ui";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container h-screen">
        <About />
      </div>
    </>
  );
}
