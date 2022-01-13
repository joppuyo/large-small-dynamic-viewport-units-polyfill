var setVh = function () {
    var svh = document.documentElement.clientHeight * 0.01;
    document.documentElement.style.setProperty('--1svh', (svh + "px"));
    var dvh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--1dvh', (dvh + "px"));

    if (document.body) {
        var fixed = document.createElement("div");
        fixed.style.width = '1px';
        fixed.style.height = '100vh';
        fixed.style.position = 'fixed'
        fixed.style.left = '0';
        fixed.style.top = '0';
        fixed.style.bottom = '0';
        fixed.style.visibility = 'hidden';

        document.body.appendChild(fixed);

        var fixedHeight = fixed.clientHeight;

        fixed.remove();

        var lvh = fixedHeight * 0.01;

        document.documentElement.style.setProperty('--1lvh', (lvh + "px"));
    }
};

var initialize = function () {
    // SSR support
    if (typeof window === 'undefined') {
        return;
    }

    // We run the calculation as soon as possible (eg. the script is in document head)
    setVh();

    // We run the calculation again when DOM has loaded
    document.addEventListener('DOMContentLoaded', function () {
        setVh();
    })

    // We run the calculation when window is resized
    window.addEventListener('resize', function () {
        setVh();
    });
}

initialize();
