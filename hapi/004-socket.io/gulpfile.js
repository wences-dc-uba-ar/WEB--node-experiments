var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
  nodemon({ script : './index.js', ext : 'js' });
});

gulp.task('mysql', function() {
  nodemon({ script : './index-mysql.js', ext : 'js' });
});

gulp.task('socket', function() {
  nodemon({ script : './index-socket.js', ext : 'js' });
});