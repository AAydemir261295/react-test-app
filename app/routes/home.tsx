import type { Route } from "./+types/home";
import { Outlet } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Тестирование" }
  ];
}

export default function Home() {
  return <main><Outlet /></main>;
}
