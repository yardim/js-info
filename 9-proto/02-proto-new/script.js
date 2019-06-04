// default arguments with Object.create

function Menu(options) {
  options = Object.create(options, {
    height: { value: options.width || 200 }
  });

  console.log(options);
}

const options = {
  width: 100,
}

Menu(options);
console.log(options);
