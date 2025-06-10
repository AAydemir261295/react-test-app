import type { Route } from "../+types/root";
import { Outlet, useLocation } from "react-router";
import { StatusBar } from "~/components/StatusBar/StatusBar";
import { connect, Provider } from "react-redux";
import { store } from "~/store/store";



export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Тестирование" }
  ];
}

export default function Home() {
  const location = useLocation();



  return <Provider store={store}><main>
    <div className="container">
      <button onClick={() => console.log(store.getState())}>asfdf</button>
      <StatusBar route={location}></StatusBar>
      <Outlet />
    </div>
  </main>
  </Provider >;
}

