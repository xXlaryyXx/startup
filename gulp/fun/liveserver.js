import { app } from "../../gulpfile.js";

export const liveServer = () => {
    app.plugins.browserSync.init({
        server: {
            baseDir: app.path.build.html
        },
        notify: false
    })
}