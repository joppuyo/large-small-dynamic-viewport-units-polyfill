var setVh = function () {
    var svh = document.documentElement.clientHeight * 0.01;
    document.documentElement.style.setProperty('--1svh', (svh + "px"));
    var cvh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--1cvh', (cvh + "px"));
};

var initialize = function () {
    // SSR support
    if (typeof window === 'undefined') {
        return;
    }
    setVh();
    window.addEventListener('resize', function () {
        setVh();
    });
}

initialize();
