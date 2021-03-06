# ImageEngine Angular [![Build Status](https://travis-ci.org/WURFL/ImageEngine-angular.png)](https://travis-ci.org/WURFL/ImageEngine-angular)

> An AngularJS directive for ImageEngine

# ImageEngine

[ImageEngine](http://www.scientiamobile.com/page/imageengine?utm_source=npmjs.com&utm_medium=page&utm_term=angular-component&utm_campaign=angular-component) is an intelligent image CDN for optimizing, compressing and resizing images. ImageEngine will enhance your responsive images by enabling support for HTTP2, automatic webp conversion, Client Hints and more.

It is likely that ImageEngine will shave off 50-60% of data traffic generated by images on your site. To better support mobile devices, ImageEngine relies on WURFL for server side device detection in cases where responsive images and Client Hints fall short.

[Registration](https://scientiamobile.com/imageengine/signup?utm_source=npmjs.com&utm_medium=page&utm_term=angular-component&utm_campaign=angular-component#imageengine-lite) is required to get the most out of ImageEngine. 

Images weight is by far the most important challenge to address when optimizing a web page for the plethora of devices on the web today. This is why ImageEngine will instantly give your users a better experience by reducing load time of your page. Not to mention the reduced data cost.

ImageEngine works as a CDN proxy. By referencing the ImageEngine servers and providing the full URL to the original image as a parameter, ImageEngine will identify the device, and its capabilities, and resize and optimize the image accordingly.

## Client Hints

The plugin will enable Client Hint support for your site. Client Hints, with information about the viewport size, device pixel ratio and actual image size, are added to the image request (HTTP header) enabling ImageEngine to resize the image with surgical precision.

## HTTP2 support

HTTP will give additional performance improvement on the network level. ImageEngine supports HTTP2 over SSL, which means that if you serve your sites and images by `https://`, ImageEngine will automatically serve all images over HTTP2.

## WebP

WebP is a lightweight image format with great quality. WebP is well supported by browsers. ImageEngine will detect if the end user's browser supports WebP and automatically convert any format to WebP to increase performance.

## Usage

### Install with yarn
* `yarn add image-engine-angular`
* Include `image-engine-angular.js`. It should be located at `node_modules/src/image-engine-angular.js`

### Install with npm
* `npm i image-engine-angular --save`
* Include `image-engine-angular.js`. It should be located at `node_modules/src/image-engine-angular.js`

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
    });
```

Note: [sign up here](https://scientiamobile.com/imageengine/signup?utm_source=npmjs.com&utm_medium=page&utm_term=angular-component&utm_campaign=angular-component#imageengine-lite) to get your token

* Include the markup directive on your HTML page, like this:

`<img-eng src="http://yourserver.com/image.png"></img-eng>`

or if you want to use interpolation:

`<img-eng src="{{myUrl}}"></img-eng>`

where {{myUrl}} is the url of the [trusted image](https://docs.angularjs.org/api/ng/service/$sce) to load.

## Examples

Check the [ImageEngine Documentation](https://docs.scientiamobile.com/documentation/image-engine/image-engine-getting-started) for the list of available settings.

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
