import {Shape} from './Shape'


export class Circle extends Shape{

    cal(): number {
        return Math.PI*Math.pow(this._radius , 2);
    }

    constructor(private _radius: number, x:number, y:number){
        super(x,y);
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    getInfo():String{
        return super.getInfo()   + `radius = ${this._radius}`;
    }


}

let x= new Circle(10,100,1000);

console.log(x.getInfo() );