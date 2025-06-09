import type { Route } from "../+types/root";
import { Outlet, useLocation } from "react-router";
import { useRef } from "react";
import { StatusBar } from "~/components/StatusBar/StatusBar";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Тестирование" }
  ];
}

export default function Home() {
  const location = useLocation();

  return <main>
    <div className="container">
      <StatusBar route={location.pathname}></StatusBar>
      <Outlet />
    </div>
  </main>;
}
