class Biswas{

    
    constructor(private _firstName: String,private  _lastName: String){
    }

    public get firstName(): String {
        return this._firstName;
    }
    public set firstName(value: String) {
        this._firstName = value;
    }
  
      public get lastName(): String {
        return this._lastName;
    }
    public set lastName(value: String) {
        this._lastName = value;
    }


  

}

var b = new Biswas("Biswa", "Roy");

console.log(b.firstName +"   " +b.lastName);

