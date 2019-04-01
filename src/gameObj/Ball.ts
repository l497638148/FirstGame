class Ball extends egret.DisplayObjectContainer implements IDispose{
	private _ball:egret.Bitmap;

	private _speedX:number = -1.0;
	private _speedY:number = -1.0;
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

	public dispose(){

		if(this._ball)
		{
			 this.removeChild(this._ball);
			 this._ball.texture.dispose();
			 this._ball = null;
		}
	}
}