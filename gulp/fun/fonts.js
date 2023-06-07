import { app } from "../../gulpfile.js";
import fonter from 'gulp-fonter';
import ttf2woff2 from "gulp-ttf2woff2";
import fs from 'fs'

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`)
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const fonts = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)
        .pipe(fonter({
            formats: ['woff']
        }))
        .pipe(app.gulp.dest(`${app.path.buildFolder}/fonts/`))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.buildFolder}/fonts/`))
}

export const fontsStyle = async () => {
    try {
        const fileContent = await fs.promises.readFile(`${app.path.srcFolder}/scss/config/fonts.scss`);
        if (fileContent != '') {
            return;
        }
        await fs.promises.writeFile(`${app.path.srcFolder}/scss/config/fonts.scss`, '');
        const items = await fs.promises.readdir(`${app.path.buildFolder}/fonts/`);
        const fontNames = [];
        for (const item of items) {
            const fontname = item.split('.')[0];
            if (!fontNames.includes(fontname)) {
                fontNames.push(fontname);
                await fs.promises.writeFile(`${app.path.srcFolder}/scss/config/fonts.scss`, `@include font("${fontname}", "${fontname}", "400", "normal");\r\n`, { flag: 'a' });
            }
        }
    } catch (error) {
        console.error(error);
    }
};
