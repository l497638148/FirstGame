class Scene extends egret.DisplayObjectContainer{

	private _bg:egret.Shape;
	
	public constructor() {
		super();
		this.init();
	}

	private init(){

		this._bg = new egret.Shape();
		this._bg.graphics.beginFill(0x1c86ee,1);
		this._bg.graphics.drawRect(0,0,this.stage.width,this.stage.height);
		this._bg.graphics.endFill();
		this.addChild(this._bg);
	}
}