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

	public dispose(){

		if(this._paddleBmp)
		{
			this.removeChild(this._paddleBmp);
			this._paddleBmp.texture.dispose();
			this._paddleBmp = null;
		}
	}
}