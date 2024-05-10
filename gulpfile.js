const {src, dest, watch, parallel} = require('gulp');
const scss = require('gulp-sass')(require('sass'));

const min = require('gulp-imagemin');

function css (done){
    src('src/scss/app.scss')
    .pipe(scss())
    .pipe(dest('build/css'))
    done();
}

function imageMin( done ){
    src('src/img/**/*')
    .pipe(min({optimizationLevel: 3}))
    .pipe(dest('build/img'))
    done();

}

function dev (done){
    watch('src/scss/**/*.scss', css)
    done();
}

exports.css = css;
exports.imagenes = imageMin;
exports.default = parallel(css, dev);