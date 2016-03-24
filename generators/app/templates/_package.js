Package.describe({
    name: "app:user-dashboard", // Reference you'll use in other modules to add this one.
    summary: "",
    version: "0.1.0",
});

Package.onUse(function (api) {
    api.versionsFrom(process.env.METEOR_VERSION);

    //import libraries
    // api.use([
    //     "app:lib",
    // ]);

    // Shared files
    // api.addFiles([
    //     "lib/both/both.js",
    // ]);
    
    // Client Files
    // api.addFiles([
    //     "lib/client/templates/template.tpl.jade",
    //     "lib/client/templates/template.js",
    // ], "client");
    
    // Server files
    // api.addFiles([
    //     "lib/server/server.js",
    // ], "server");    
});


Package.onTest(function (api) {

});
