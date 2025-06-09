import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("", "routes/home.tsx",
        [
            index("routes/welcome.tsx"),
            route("/testing/1", "routes/imageLoader.tsx")
        ]
    )] satisfies RouteConfig;
