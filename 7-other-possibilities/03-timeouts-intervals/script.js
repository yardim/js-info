// ===========================
// throttle

function throttle(f, ms) {
    let isCalled = false;
    let args;
    let _this;

    return function () {
        if (!isCalled) {
            f.apply(this, arguments);
            isCalled = true;
        } else {
            args = arguments;
            _this = this;
            return;
        }

        setTimeout(() => {
            if (args) {
                f.apply(_this, args);
            }

            isCalled = false;
            args = null;
        }, ms);
    }
}

let f = function (a) {
    console.log(a)
};

let f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)

setTimeout(() => {
    f1000(3);
}, 500);

setTimeout(() => {
    f1000(4);
}, 2500);

// setTimeout(() => {
//     f1000(5);
//     f1000(6);
// }, 2600);
