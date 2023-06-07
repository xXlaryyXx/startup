import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const srcFolder = "./src";
const buildFolder = rootFolder;

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css`,
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,png,gif,ico,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
    },
    watch: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,png,gif,ico,webp,svg}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
}