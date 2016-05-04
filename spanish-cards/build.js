({
    mainConfigFile : "js/main.js",
    baseUrl: "js",
    removeCombined: true,
    findNestedDependencies: true,
    dir: "dist",
    modules: [
        {
            name: "main",
            exclude: [
                "jquery",
                "bootstrap",
                "signals",
                "underscore",
                "moment",
                "crossroads",
                "hasher"
            ]
        }
    ]
})