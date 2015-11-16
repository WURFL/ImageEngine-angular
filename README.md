# ImageEngine Angular [![Build Status](https://travis-ci.org/WURFL/ImageEngine-angular.png)](https://travis-ci.org/WURFL/ImageEngine-angular)

> An AngularJS directive for ImageEngine

**WURFL Image Tailor (WIT) is now ImageEngine!**

[ImageEngine](http://web.wurfl.io/#image-engine) is an automatic image optimizer based on WURFL device detection. WURFL will detect the device capabilities, including screen size and image format support, resize and optimize the image accordingly. That's why we call it the ImageEngine.

ImageEngine is not only for mobile. ImageEngine supports the emerging Client Hint standard making it the perfect companion for Responsive Images.

Images weight is by far the most important challenge to address to optimize a web page for the plethora of devices on the web today. This is why ImageEngine will instantly give your users a better experience by reducing load time of your page. Not to mention the reduced data cost.

ImageEngine works as a CDN proxy. By referencing the ImageEngine servers and providing the full URL to the original image as a parameter, ImageEngine will identify the device, and its capabilities, and resize and optimize the image accordingly.

## Usage

### Install with bower
* `bower install image-engine-angular --save`
* Include `image-engine-angular.js`. It should be located at `bower_components/src/image-engine-angular.js`

### Install from source
* [Download Latest Version](https://github.com/WURFL/ImageEngine-angular/releases) and extract the archive.
* Include `image-engine-angular.js`. It should be located at `archive_path/src/image-engine-angular.js`

### How to use it

* Include the image-engine-angular directive dependency on your angular module:

```
    var app = angular.module("demoapp", ["image-engine-angular"]);
    app.config(function (imgEngConfigProvider) {
       imgEngConfigProvider.setToken('your-token');
       imgEngConfigProvider.isLite(); // Add this line only for ImageEngine Lite
    });
```

Note: [sign up here](https://scientiamobile.com/imageengine/signup) to get your token

* Include the markup directive on your HTML page, like this:

`<img-eng src="http://yourserver.com/image.png"></img-eng>`

or if you want to use interpolation:

`<img-eng src="{{myUrl}}"></img-eng>`

where {{myUrl}} is the url of the [trusted image](https://docs.angularjs.org/api/ng/service/$sce) to load.

## Examples

Check the [ImageEngine Documentation](http://web.wurfl.io/#image-engine) for the list of available settings.

### Fully Automatic

`<img-eng src="http://yourserver.com/image.png"></img-eng>`

### 20% of screen size

`<img-eng src="http://yourserver.com/image.png" pc="20"></img-eng>`

### Create an image 300px Wide

`<img-eng src="http://yourserver.com/image.png" w="300"></img-eng>`

### Create 200x200px Thumbnails with Black Letterboxes/Pillarboxes

`<img-eng src="http://yourserver.com/image.png" w="200" h="200" m="letterbox_000000_100"></img-eng>`

## Demo

* Run: `npm start`
* Browse: `http://localhost:8000/demo/index.html`

## Testing

``` bash
$ npm test
```

## Authors

- [Luca Corbo](https://github.com/lucor) — [view contributions](https://github.com//WURFL/image-engine-angular/commits?author=lucor)
- [All Contributors](../../contributors)

## License

Licensed under the MIT license. (See the LICENSE file)

Copyright &copy; ScientiaMobile, Inc.
