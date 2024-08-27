class User {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      console.log(this.name);
    }
   }
   // Penggunaan:
   let user = new User("John");
   user.sayHi();
  