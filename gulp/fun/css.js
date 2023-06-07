import { app } from "../../gulpfile.js";
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import groupMediaQ from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const css = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(app.plugins.replace(/(url\(['"]?)(.+?)\.(png|jpg|jpeg)(['"]?\))/g, '$1$2.webp$4'))
    .pipe(
        autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        })
    )
    .pipe(groupMediaQ())
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(app.plugins.concat('style.min.css'))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
}