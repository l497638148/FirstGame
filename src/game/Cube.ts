class Cube extends egret.DisplayObjectContainer{

	private _cubeBmp:egret.Bitmap;
	private _key:string;

	public constructor(key:string) {
		super();
		this.init(key);
	}

	private init(key:string){
		this._cubeBmp = new egret.Bitmap();
		this.setKey(key);
		this.addChild(this._cubeBmp);
	}

	private setKey(key:string){

		this._cubeBmp.texture = RES.getRes(key);
	}
	
}