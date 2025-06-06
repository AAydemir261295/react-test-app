import { Container } from "~/components/Container/Container";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Тестирование" }
    ];
}

export default function Testing() {
    return <div><Container /></div>;
}
