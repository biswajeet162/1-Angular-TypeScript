
class Biswa{
  [x: string]: any;

  private roll: number | undefined;
  private str:String | undefined;

  constructor(rolls:number, strs:String){
  }

  public get roll(): number{
    return this.roll;
  } 

  public setRoll(rolls: number): void{
      this.roll=rolls;
  }

  public getStr(): String{
      return this.str;
  }

  public setStr(strs: String): void{
      this.str=strs;
  }
    
}

let b= new Biswa(100,"fdhgoiufd");

b.setRoll(100);
b.setStr("Biswajeet");

console.log(b.getRoll);
console.log(b.getStr);