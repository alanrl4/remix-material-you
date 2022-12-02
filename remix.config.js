/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    ignoredRouteFiles: ["**/.*"],
    appDirectory: "app",
    browserBuildDirectory: "public/build",
    publicPath: "/build/",
    serverBuildDirectory: "build",
    serverDependenciesToBundle: [
        "@material/material-color-utilities",
    ],
};
