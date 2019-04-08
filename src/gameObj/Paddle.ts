class Paddle extends egret.DisplayObjectContainer implements IDispose{

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

	public collide(ball:Ball):boolean{

		let b = ball;
		let p = this;

		var disX = Math.abs(b.x - this.x);
		var disY = Math.abs(b.y - this.y);
		if(disX < (b.width + this.width) * 0.5 && disY < (b.height + p.height) * 0.5)
		{
			return true;
		}

		return false;
	}

	public dispose(){

		if(this._paddleBmp)
		{
			this.removeChild(this._paddleBmp);
			this._paddleBmp.texture.dispose();
			this._paddleBmp = null;
		}
	}
}