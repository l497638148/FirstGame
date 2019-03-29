class Paddle extends egret.DisplayObjectContainer{

	private _paddleImg:egret.Bitmap;

	public constructor() {
		super();
		this.init();
	}

	private init(){
		this._paddleImg = new egret.Bitmap();
		this.setSkin("paddleBlu_png");
		this.addChild(this._paddleImg);
	}

	public setSkin(key:string){
		this._paddleImg.texture = RES.getRes("key");
	}
}