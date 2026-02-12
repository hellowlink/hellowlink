// Print-friendly: auto-trigger print dialog when ?print is in URL
(function() {
    if (window.location.search.indexOf('print') !== -1) {
        window.print();
    }
})();
