const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');

imagemin(['src/resources/img/*.{jpg,png,svg}'], 'dist/resources/img', {
    plugins: [
        imageminJpegtran(),
        imageminPngquant({quality: '65-80'}),
        imageminSvgo()
    ]
}).then(files => {
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});
