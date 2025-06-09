import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("", "routes/home.tsx",
        [
            index("routes/welcome.tsx"),
            route("/testing/1", "routes/imageLoader.tsx"),
            route("/testing/2", "routes/form.tsx"),
        ]
    )] satisfies RouteConfig;
