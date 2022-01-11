var setVh = function () {
    var svh = document.documentElement.clientHeight * 0.01;
    document.documentElement.style.setProperty('--1svh', "".concat(svh, "px"));
    var cvh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--1cvh', "".concat(cvh, "px"));
};

var initialize = function () {
    if (typeof window === 'undefined') {
        // SSR support
        return;
    } 
    setVh();
    window.addEventListener('resize', function () {
        setVh();
    });
}

initialize();
