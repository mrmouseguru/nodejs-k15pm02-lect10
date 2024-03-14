export default class Student {

  constructor(data) {
    Object.assign(this, data);
  }

  static async load(id){
    //fetch api/:id
    let res = await fetch(`/api/students/${id}`);
    let json = await res.json();
    //copy to this
    return new Student(json);

  }
}
