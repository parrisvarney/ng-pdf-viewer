angular.module('pdf-viewer', []).directive('pdfViewer', [function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            PDFJS.getDocument(attrs.url).then(function(pdf) {
                var getPages = function(pageNum, pageCount) {
                    var canvas = document.createElement('canvas');
                        canvas.className = attrs.class ? attrs.class : '';
                    element[0].appendChild(canvas);
                    pdf.getPage(pageNum).then(function(page) {
                        var viewport       = page.getViewport(1),
                            scale          = attrs.width ? (attrs.width / viewport.width) : 1,
                            viewportScaled = page.getViewport(scale),
                            context        = canvas.getContext('2d'),
                            renderContext = {
                                canvasContext: context,
                                viewport:      viewportScaled
                            };

                        canvas.height = viewportScaled.height;
                        canvas.width  = viewportScaled.width;

                        page.render(renderContext);

                        if (pageNum  < pageCount) {
                            getPages(pageNum + 1, pageCount);
                        }
                    });

                };

                getPages(1, pdf.numPages);
            });
        }
    };
}]);