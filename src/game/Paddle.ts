class Paddle extends egret.DisplayObjectContainer{

	private _paddleBmp:egret.Bitmap;
	private _key:string;

	public constructor(key:string) {
		super();
		this.init(key);
	}

	private init(key:string){
		this._paddleBmp = new egret.Bitmap();
		this._paddleBmp.width = 60;
		this._paddleBmp.height = 20;
		this.setSkin(key);
		this.addChild(this._paddleBmp);
		this.anchorOffsetX = this.width * 0.5;
		this.anchorOffsetY = this.height * 0.5;
	}

	public setSkin(key:string){
		this._paddleBmp.texture = RES.getRes(key);
	}
}