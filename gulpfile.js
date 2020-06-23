'use strict';

const del = require('del');
const zip = require('gulp-zip');
const gulp = require('gulp');

const buildFolder = 'build/';

/**
 * Tasks
 * -----
 */

/**
 * build task
 * Creates project's zip file.
 */
function buildTask() {
  return gulp
    .src('src/*')
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest(buildFolder))
}
exports.build = buildTask;

/**
 * clean task
 * Deletes build folder.
 */
function cleanTask() {
  return del(buildFolder);
}
exports.clean = cleanTask;

/**
 * default task
 */
exports.default = buildTask;
