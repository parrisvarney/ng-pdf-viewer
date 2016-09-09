# ng-pdf-viewer

A minimal pdf viewing directive for Angular.

## Why?

There are plenty of other [PDFJS](http://mozilla.github.io/pdf.js/) Angular directives already available.  This one is
different:

1. All pages of the requested pdf are rendered, there is no pagination widget.
1. There are only a few attributes to think about: `url`, `width`, and `class`.
1. Everything is contained within the `<pdf-viewer>` element, there is no need to create and target external `<canvas>` 
elements.

##Dependencies

1. [AngularJS](http://angularjs.org/)
1. [PDFJS](http://mozilla.github.io/pdf.js/)

## Usage

1. Install the package

    ```shell
    bower install ng-pdf-viewer
    ```
1. Include the pdf.js and ng-pdf-viewer.js source files

    ```html
    <script src="bower_components/pdfjs-dist/build/pdf.combined.js"></script>
    <script src="bower_components/ng-pdf-viewer/src/ng-pdf-viewer.min.js"></script>
    ```
1. Include the directive as a dependency:

    ```js
    var app = angular.module('App', ['pdf-viewer']);
    ```
1. Create a `<pdf-viewer>` element

    ```html
    <pdf-viewer url="path/to/pdf.pdf"></pdf-viewer>
    ```

###Options

1. `url` (required), the path to the pdf.  This can an be relative or absolute.  Note - 
[CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) is required for external PDFs.

    ```html
    <pdf-viewer url="http://www.example.com/path/to/cors-enabled/pdf"></pdf-viewer>
    ```
1. `width` (optional) sets the width of the viewport, defaults to the pdf width.  The height is automatically derived 
from the width.

    ```html
    <pdf-viewer url="path/to/pdf.pdf" width="500"></pdf-viewer>
    ```
1. `class` applies CSS class(es) to the PDF canvas

    ```html
    <pdf-viewer url="path/to/pdf.pdf" class="dark-border"></pdf-viewer>
    ```

##Similar projects

1. [angular-pdf](https://github.com/sayanee/angularjs-pdf)
1. [angular-pdf-viewer](https://github.com/winkerVSbecks/angular-pdf-viewer)
1. [ng-pdfviewer](https://github.com/akrennmair/ng-pdfviewer)


## License

(C) Parris Varney 2015, released under an MIT license
