// modules
import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugin.js';
//global
export const app = {
    gulp: gulp,
    path: path, 
    plugins: plugins, 
}
// function
import { html } from './gulp/fun/html.js';
import { css } from './gulp/fun/css.js';
import { js } from './gulp/fun/js.js';
import { img } from './gulp/fun/img.js';
import { otfToTtf, fonts, fontsStyle} from './gulp/fun/fonts.js';
import { reset } from './gulp/fun/reset.js';
import { liveServer } from './gulp/fun/liveserver.js';
// watch
export const watchFiles = () => {
    gulp.watch(app.path.watch.html, html);
    gulp.watch(app.path.watch.scss, css);
    gulp.watch(app.path.watch.js, js);
    gulp.watch(app.path.watch.img, img);
}
// start function
export const clear = reset;
export const optiFonts =  gulp.series(otfToTtf, fonts, fontsStyle) ;
export const task = gulp.parallel(html, css, js, img);
export const dev = gulp.series(clear, optiFonts, task, gulp.parallel(watchFiles, liveServer));
export const build = gulp.series(clear, optiFonts, task);

export default dev;