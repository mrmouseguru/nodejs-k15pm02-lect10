export default class Student {

  constructor(data) {
    Object.assign(this, data);
    this._uri = `/api/students/${this.id}`;
  }

  static async load(id){
    //fetch api/:id
    let res = await fetch(`/api/students/${id}`);
    let json = await res.json();
    //copy to this
    return new Student(json);

  }

  async listCourses(){
    let res = await fetch(`${this._uri}/courses`);
    let json = await res.json();
    return json.courses;
  }
}
