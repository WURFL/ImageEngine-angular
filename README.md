# Angular WURFL Image Tailor [![Build Status](https://travis-ci.org/WURFL/angular-wurfl-image-tailor.png)](https://travis-ci.org/WURFL/angular-wurfl-image-tailor)

> An AngularJS directive for WURFL Image Tailor (WIT)

[WURFL Image Tailor](http://wurfl.io/#wit) (WIT) is an automatic image tailor based on WURFL device detection. WURFL will detect the device, and its screen size, resize and optimize the image accordingly.

##Features

* Add the img-wit directive
* Enable out of the box support for the [WIT URLs](http://wurfl.io/documentation/wit-getting-started.php) to download more images in parallel.

## Usage

### Install with bower
* `bower install angular-wurfl-image-tailor --save`
* Include `angular-wurfl-image-tailor.js`. It should be located at `bower_components/src/angular-wurfl-image-tailor.js`

### Install from source
* [Download Latest Version](https://github.com/WURFL/angular-wurfl-image-tailor/releases) and extract the archive.
* Include `angular-wurfl-image-tailor.js`. It should be located at `archive_path/src/angular-wurfl-image-tailor.js`

### How to use it

* Include the angular-wurfl-image-tailor directive dependency on your angular module:

`var app = angular.module("demoapp", ["angular-wurfl-image-tailor"]);`

* Include the markup directive on your HTML page, like this:

`<img-wit src="http://yourserver.com/image.png"></img-wit>`

or if you want to use interpolation:

`<img-wit src="{{myUrl}}"></img-wit>`

where {{myUrl}} is the url of the [trusted image](https://docs.angularjs.org/api/ng/service/$sce) to load. 

## Examples

Check the [WURFL Image Tailor Documentation](http://wurfl.io/documentation/wit-directives.php) for the list of available settings.

### Fully Automatic

`<img-wit src="http://yourserver.com/image.png"></img-wit>`

### 20% of screen size

`<img-wit src="http://yourserver.com/image.png" pc="20"></img-wit>`

### Create an image 300px Wide

`<img-wit src="http://yourserver.com/image.png" w="300"></img-wit>`

### Create 200x200px Thumbnails with Black Letterboxes/Pillarboxes

`<img-wit src="http://yourserver.com/image.png" w="200" h="200" m="letterbox_000000_100"></img-wit>`

## Demo

* Run: `npm start`
* Browse: `http://localhost:8000/demo/index.html`

## Testing

``` bash
$ npm test
```

## Authors

- [Luca Corbo](https://github.com/lucor) — [view contributions](https://github.com//WURFL/angular-wurfl-image-tailor/commits?author=lucor)
- [All Contributors](../../contributors)

## License

Licensed under the MIT license. (See the LICENSE file)

Copyright &copy; ScientiaMobile, Inc.