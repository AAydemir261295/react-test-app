import type { Route } from "../+types/root";
import { Outlet, useLocation } from "react-router";
import { StatusBar } from "~/components/StatusBar/StatusBar";
import { Provider } from "react-redux";
import { store } from "~/store/store";
import { useRef } from "react";



export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Тестирование" }
  ];
}

export default function Home() {
  const location = useLocation();
  var reference = useRef(null);


  return <Provider store={store}><main>
    <div ref={reference} className="container">
      <StatusBar route={location}></StatusBar>
      <Outlet context={reference} />
    </div>
  </main>
  </Provider >;
}

