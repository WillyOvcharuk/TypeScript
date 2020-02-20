"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const max = new Person("Maxim");
const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    console.log("btn_clicked");
});
//# sourceMappingURL=app.js.map