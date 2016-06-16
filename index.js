var AlexaAppServer = require('alexa-app-server');

AlexaAppServer.start({
    server_root: __dirname,
    public_html: 'public_html',
    app_dir: 'apps',
    app_root: '/alexa/',
    server_dir: 'server',
    port: 5800,
    log: true
});
