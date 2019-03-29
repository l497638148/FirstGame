class GameScene extends egret.DisplayObjectContainer{

	public constructor() {
		super();
	}

	private _bg:egret.Shape;
	public start(root:egret.DisplayObjectContainer){

		this.createScene(root);
		this.createPaddle();
	}

	private createScene(root:egret.DisplayObjectContainer){

		var scene = new Scene();
		root.addChild(scene)
	}

	private createPaddle(){
		var paddle = new Paddle();
		this.addChild(paddle);
	}
}