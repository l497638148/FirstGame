class Scene extends egret.DisplayObjectContainer implements IDispose{

	private _bg:egret.Shape;
	
	public constructor(root:egret.DisplayObjectContainer) {
		super();
		this.init(root);
	}

	private init(root:egret.DisplayObjectContainer){

		this._bg = new egret.Shape();
		this._bg.graphics.beginFill(0x1c86ee,1);
		this._bg.graphics.drawRect(0,0,root.stage.stageWidth,root.stage.stageHeight);
		this._bg.graphics.endFill();
		this.addChild(this._bg);
	}

	public dispose(){

		if(this._bg)
		{
			this.removeChild(this._bg);
			this._bg.graphics.clear();
			this._bg = null;
		}
	}
}