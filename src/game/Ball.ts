class Ball extends egret.DisplayObjectContainer{
	private _ball:egret.Bitmap;
	public constructor(key:string) {
		super();
		this.init(key);
	}

	private init(key:string){
		this._ball = new egret.Bitmap();
		this.setKey(key);
		this.addChild(this._ball);
		this.anchorOffsetX = this.width * 0.5;
		this.anchorOffsetY = this.height * 0.5;
	}

	private setKey(key:string){

		this._ball.texture = RES.getRes(key);
	}
}