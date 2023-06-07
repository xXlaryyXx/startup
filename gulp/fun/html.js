import { app } from "../../gulpfile.js";

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.replace(/src="(.*?)\.(png|jpg|jpeg)"/g, 'src="$1.webp"'))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream())
}