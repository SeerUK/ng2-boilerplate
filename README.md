# ng2-boilerplate

An opinionated, experimental Angular 2 / Webpack boilerplate.

Current feature-set out of the box is:
* Angular 2 + Typscript set up.
* Code style issues reported via TSLint, also using Codelyzer.
* Generates an `index.html` file with stylesheets and scripts in.
* Copies the `src/favicon.ico` and `src/public/` folder over to the `dist/` folder as-is.
* Support for both CSS and SCSS, with consistent, predictable behaviour.
    * Assets within the `src/assets/` (e.g. images) may be referenced in CSS and SCSS files using
    relative paths from the CSS or SCSS file. These URLs should then be resolved, and the assets 
    should automatically be copied over to the `dist/` folder.
    * CSS or SCSS that is not for components will be built do a separate file in `dist/css/`.
* Support for `styleUrls` and `templateUrls` without using `require`, or `.toString()` etc.
* Support for Angular 2's lazy loading functionality.
* Minified, tree-shaken production build.

This project uses [Yarn][1] as a package manager, and task runner.

## Usage

To get you started:

```
$ npm install -g yarn
$ yarn install
$ yarn run serve
```

For building:

```
$ yarn run build
$ # Or for production...
$ yarn run build:prod
```

You can see all of the tasks listed in the `package.json` file in this repository.

## Todo List

This is still a bit of a work in progress. The current focus has been on developer experience with
getting Angular 2 up and running, and making sure that usual things like using CSS or SCSS work in a
sensible and consistent manner.

* Support for unit testing (via Karma), and e2e testing (via protractor). Coverage will be provided
by Istanbul.
* Maybe some kind of documentation generation, but I'd prefer to keep this boilerplate quite light,
that's something that can be configured on a per-project basis.

## License

MIT

## Contributing

Feel free to open a [pull request][2], or file an [issue][3] on Github. I always welcome 
contributions as long as they're for the benefit of all (potential) users of this image.

If you're unsure about anything, feel free to ask about it in an issue before you get your heart set 
on fixing it yourself.

[1]: https://yarnpkg.com/
[2]: https://github.com/SeerUK/ng2-boilerplate/pulls
[3]: https://github.com/SeerUK/ng2-boilerplate/issues
