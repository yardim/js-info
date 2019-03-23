function User(fullName) {
  this.fullName = fullName;

  const setNamePart = (part, newPart) => {
    const split = this.fullName.split(' ');
    split[part] = newPart;
    this.fullName = split.join(' ');
  };

  const getNamePart = (part) => {
    return this.fullName.split(' ')[part];
  };

  Object.defineProperties(this, {
    firstName: {
      get: function () {
        return getNamePart(0);
      },
      set: function (newName) {
        setNamePart(0, newName);
      }
    },
    lastName: {
      get: function () {
        return getNamePart(1);
      },
      set: function (newLastName) {
        return setNamePart(1, newLastName);
      }
    }
  });
}

const vasya = new User('Vasiliy Popkin');
console.log(vasya.fullName);
console.log(vasya.firstName);
console.log(vasya.lastName);
vasya.lastName = 'Sidorov';
console.log(vasya.fullName);