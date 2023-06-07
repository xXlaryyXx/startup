import { app } from "../../gulpfile.js";
import newer from "gulp-newer";
import imgmin from "gulp-imagemin";
import webp from "gulp-webp"

export const img = () => {
    return app.gulp.src(app.path.src.img)
        .pipe(newer(app.path.build.img))
        .pipe(imgmin())
        .pipe(webp({
            quality: 60,
        }))
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.plugins.browserSync.stream())
}