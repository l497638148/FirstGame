class GameScene extends egret.DisplayObjectContainer implements IDispose{

	private _root:egret.DisplayObjectContainer;
	private _scene:Scene;
	private _paddle:Paddle;
	private _ball:Ball;
	private _cubePanel:CubePanel;
	private _touched:boolean;
	private _distance:egret.Point;

	private _gameStatus:boolean;

	public constructor() {
		super();
		this.initData();
	}

	public start(root:egret.DisplayObjectContainer){
		this._root = root;    
		this.createScene();
		this.createPlayerControlObj();
		this.createCubes();
		this.addEvent();
		egret.startTick(this.update,this);
		this._gameStatus = true;
	}  

	private initData()
	{
		this._distance = new egret.Point();
		this._touched = false;
	}

	private addEvent(){
		this._paddle.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.paddleMouseDown,this);
		this._paddle.addEventListener(egret.TouchEvent.TOUCH_END,this.paddleMouseUp,this);
	}

	private paddleMouseDown(e:egret.TouchEvent){
		this._touched = true;
		this._distance.x = e.stageX - this._paddle.x;
		this._paddle.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.paddleMouseMove,this);
	}

	private paddleMouseUp(e:egret.TouchEvent){
		this._paddle.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.paddleMouseMove,this);
		this._touched = false;
	}

	private paddleMouseMove(e:egret.TouchEvent){
		
		if(this._touched)
		{
			this._paddle.x = e.stageX - this._distance.x;
			this.rangePaddlePos(this._paddle);
		}
	}

	private rangePaddlePos(obj:egret.DisplayObjectContainer){

		var ract = new egret.Rectangle();
		ract.x = obj.width * 0.5;
		ract.y = obj.height *0.5;
		ract.width = this._root.stage.stageWidth - obj.width;
		ract.height = this._root.stage.stageHeight - obj.height;

		if(obj.x < ract.x )
		{
			obj.x = ract.x;
		}
		else if (obj.x > ract.x + ract.width)
		{
			obj.x = ract.x + ract.width;
		}
	}

	private createScene(){

		this._scene = new Scene(this._root);
		this._root.addChild(this._scene)
	}

	private createPlayerControlObj(){
		this._paddle = new Paddle(PaddleConst.BLUE);
		this._paddle.x = this._root.stage.stageWidth * 0.5;
		this._paddle.y = this._root.stage.stageHeight - this._paddle.height * 2;
		this._paddle.touchEnabled = true;
		this._root.addChild(this._paddle);

		this._ball = new Ball(BallConst.GREY);
		this._ball.x = this._paddle.x;
		this._ball.y = this._paddle.y - this._paddle.height *0.5 - this._ball.height * 0.5;
		this._root.addChild(this._ball);
	}

	private createCubes(){
		
		this._cubePanel = new CubePanel();
		this._cubePanel.create(CubeConst.BLUE_RETANGLE,10,5);
		this._root.addChild(this._cubePanel);
	}

	public stop(){
		this.delEvent();
	}

	private delEvent(){

	}

	private update(timeStamp: number):boolean{

		if(this._gameStatus)
		{
			this.checkCollision();
			return;
		}
		return false;
	}

	private checkCollision(){
		var px:number = this._ball.x;
		var py:number = this._ball.y - this._ball.height * 0.5;
		this._cubePanel.checkCollision(px,py);
	}

	public dispose()
	{
		egret.stopTick(this.update,this);
		this._gameStatus = false;
		if(this._scene)
		{
			this._scene.dispose();
			this._scene = null;
		}

		if(this._paddle)
		{
			this._paddle.dispose();
			this._paddle = null;
		}

		if(this._ball)
		{
			this._ball.dispose();
			this._ball = null;
		}

		if(this._cubePanel)
		{
			this._cubePanel.dispose();
			this._cubePanel = null;
		}
	}
}