import type { MetaFunction } from "@remix-run/node";
import MyCards from "./card.Mycard";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function EProject() {
  return (
    <>
      <main>
        <MyCards />
      </main>
    </>
  );
}