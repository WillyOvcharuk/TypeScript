class Person {
    constructor(private name: string) {
    }

}

const max = new Person("Maxim")

const btn = document.getElementById("btn")!;

//clicking btn
btn.addEventListener('click', () => {
    console.log("btn_clicked");
});