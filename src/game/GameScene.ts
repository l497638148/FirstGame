class GameScene extends egret.DisplayObjectContainer{

	private _root:egret.DisplayObjectContainer;
	private _paddle:Paddle;
	private _touched:boolean;
	private _distance:egret.Point;

	public constructor() {
		super();
	}

	public start(root:egret.DisplayObjectContainer){
		this._root = root;
		this.createScene();
		this.createPlayerControlObj();
		this.addEvent();
	}

	private initData()
	{
		this._distance = new egret.Point();
		this._touched = false;
	}

	private addEvent(){
		this._paddle.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.paddleMouseDown,this);
		this._paddle.addEventListener(egret.TouchEvent.TOUCH_END,this.paddleMouseUp,this);
		this._paddle.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.paddleMouseMove,this);
	}

	private paddleMouseDown(e:egret.TouchEvent){
		this._touched = true;
		this._distance.x = e.stageX - this._paddle.x;
	}

	private paddleMouseUp(e:egret.TouchEvent){
		this._touched = false;
	}

	private paddleMouseMove(){
		
	}

	private createScene(){

		var scene = new Scene(this._root);
		this._root.addChild(scene)
	}

	private createPlayerControlObj(){
		this._paddle = new Paddle(PaddleConst.BLUE);
		this._paddle.x = this._root.stage.stageWidth * 0.5;
		this._paddle.y = this._root.stage.stageHeight - this._paddle.height * 2;
		this._root.addChild(this._paddle);

		var ball = new Ball(BallConst.GREY);
		ball.x = this._paddle.x;
		ball.y = this._paddle.y - this._paddle.height *0.5 - ball.height * 0.5;
		this._root.addChild(ball);
	}

	public stop(){
		this.delEvent();
	}

	private delEvent(){

	}

	private hitTest(obj1:egret.DisplayObject,obj2:egret.DisplayObject){

		var rect1:egret.Rectangle = obj1.getBounds();
		var rect2:egret.Rectangle = obj2.getBounds();
		rect1.x = obj1.x;
		rect1.y = obj1.y;
		rect2.x = obj2.x;
		rect2.y = obj2.y;

		return rect1.intersects(rect2);
	}
}