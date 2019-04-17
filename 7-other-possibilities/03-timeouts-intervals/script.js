// ===========================
// throttle

// function throttle(f, ms) {
//     let isCalled = false;
//     let args;
//     let _this;

//     return function () {
//         if (!isCalled) {
//             f.apply(this, arguments);
//             isCalled = true;
//         } else {
//             args = arguments;
//             _this = this;
//             return;
//         }

//         setTimeout(() => {
//             if (args) {
//                 f.apply(_this, args);
//             }

//             isCalled = false;
//             args = null;
//         }, ms);
//     }
// }



// ===========================
// throttle 2.0

function throttle(f, ms) {
    let lastCallTime;
    let timerId;

    return function() {
        const currentTime = Date.now();

        if (!lastCallTime) {
            f.apply(this, arguments);
            lastCallTime = currentTime;
            return;
        }

        if (currentTime - lastCallTime < 1000) {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                f.apply(this, arguments);
                lastCallTime = currentTime;
            }, ms);
        }
    }
}

let log = '';

function f(a) {
    log += a;
    console.log(log);
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);
