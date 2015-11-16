## Upgrade

### From 0.9.x to 1.0

  * Install the image-engine-angular module
  * Update the directive declaration:
  ```
      var app = angular.module("demoapp", ["image-engine-angular"]);
      app.config(function (imgEngConfigProvider) {
         imgEngConfigProvider.setToken('your-token');
         imgEngConfigProvider.isLite(); // Add this line only for ImageEngine Lite
      });
  ```

  * Replace all occurrences of the **img-wit** markup with **img-eng**

  Example:

  `<img-wit src="http://yourserver.com/image.png"></img-wit>`

  to:

  `<img-eng src="http://yourserver.com/image.png"></img-eng>`
