import Student from "./student.js";

export default class App {
  constructor() {
    //this._onClick = this._onClick.bind(this);
    this._onClickBetter = this._onClickBetter.bind(this);


    let button = document.querySelector("#button");
    button.addEventListener("click", this._onClickBetter);
  }

  async _onClickBetter(event) {
    // let res = await fetch("myfile.txt");
    // let text = await res.text();
    // let res2 = await fetch("person.json");
    // let obj = await res2.json();
    // let s = `${text}\n${obj.givenName} ${obj.surname}`;
    // document.querySelector("#results").textContent = s;
    let res = await fetch("/api/text");//return promise + res
    let text = await res.text();
    let res2 = await fetch("/api/students/knazir");
    let json = await res2.json();
    let s = `${text}\n${json.givenName} ${json.surname}`;
    document.querySelector("#results").textContent = s;

    console.log("Json data", json);

    let student = new Student(json);
    console.log(student);
  }
}
