/*
 * Public API Surface of my-first-library
 */

export * from './lib/my-first-library.service';
// Because we are exporting the module and only the module, we don't need to do each component seperately
// Not sure if this will hurt from a package size standpoint or if it would actually be able to tree shake down to this level
// export * from './lib/my-first-library.component';
export * from './lib/my-first-library.module';
