const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const cssnano = require("cssnano");

// Imagenes
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css(done) {
  src("src/scss/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/css"));
  done();
}

function imagenes() {
  return src("src/img/**/*")
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest("build/img"));
}

function vWebp() {
  const opciones = {
    quality: 50,
  };
  return src("src/img/**/*.{png, jpg}")
    .pipe(webp(opciones))
    .pipe(dest("build/img"));
}
function vAvif() {
  const opciones = {
    quality: 50,
  };
  return src("src/img/**/*.{png, jpg}")
    .pipe(avif(opciones))
    .pipe(dest("build/img"));
}

function div(){
  watch('src/scss/**/*.scss', css);
  watch('src/img/**/*', imagenes);
}

exports.css = css;
exports.div = div;
exports.imagenes = imagenes;
exports.vAvif = vAvif;
exports.vWebp = vWebp;
exports.default = series(imagenes, vWebp, vAvif, css, div);
