class GameScene extends egret.DisplayObjectContainer implements IDispose{

	private _root:Main;
	private _scene:Scene;
	private _paddle:Paddle;
	private _ball:Ball;
	private _cubePanel:CubePanel;
	private _touched:boolean;
	private _distance:egret.Point;

	private _gameStatus:number;

	public _ballMoveRect:egret.Rectangle;
	public _paddleMoveRect:egret.Rectangle;

	public constructor() {
		super();
		this.initData();
	}

	private initData()
	{
		this._ballMoveRect = new egret.Rectangle();
		this._paddleMoveRect = new egret.Rectangle();
		this._distance = new egret.Point();
		this._touched = false;
	}


	public start(root:Main){
		this._root = root;    
		this.createScene();
		this.createPlayerControlObj();
		this.createCubes();
		this.addTouchEvent();
		egret.startTick(this.update,this);
		this._gameStatus = GameControlConst.START;
		this.setMoveRectData();
	}  

	public gameOver(){
		egret.stopTick(this.update,this);
		this.delTouchEvent();
	}

	private addTouchEvent(){
		this._paddle.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.paddleMouseDown,this);
		this._paddle.addEventListener(egret.TouchEvent.TOUCH_END,this.paddleMouseUp,this);
	}

	private delTouchEvent(){
		this._paddle.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.paddleMouseDown,this);
		this._paddle.removeEventListener(egret.TouchEvent.TOUCH_END,this.paddleMouseUp,this);
		this._paddle.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.paddleMouseMove,this);
	}

	private setMoveRectData(){

		var w = this._root.stage.stageWidth;
		var h = this._root.stage.stageHeight;

		var b = this._ballMoveRect;
		b.x = this._ball.width * 0.5;
		b.y = this._ball.height * 0.5;
		b.width = w - this._ball.width;
		b.height = h - this._ball.height * 0.5;

		var p = this._paddleMoveRect;
		p.x = this._paddle.width * 0.5;
		p.y = this._paddle.height *0.5;
		p.width = w - this._paddle.width;
		p.height = h - this._paddle.height;
		
	}

	private paddleMouseDown(e:egret.TouchEvent){

		if(this._gameStatus == GameControlConst.START)
		{
			this._gameStatus = GameControlConst.RUNNING;
		}

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

	private update(timeStamp: number):boolean{

		if(this._gameStatus ==  GameControlConst.RUNNING)
		{
			this.rangeObjPos(this._paddle,this._paddleMoveRect);
			this.checkBall();
			this.checkCollision();
			this._ball.move();
		}
		return false;
	}

	private rangeObjPos(obj:egret.DisplayObjectContainer,ract:egret.Rectangle){

		if(obj.x < ract.x )
		{
			obj.x = ract.x;
		}
		else if (obj.x > ract.x + ract.width)
		{
			obj.x = ract.x + ract.width;
		}
	}

	private checkBall()
	{
		var b = this._ball;
		if(b.x < this._ballMoveRect.x || b.x > this._ballMoveRect.x + this._ballMoveRect.width)
		{
			b.speedX *= -1;
		}

		if(b.y < this._ballMoveRect.y)
		{
			b.speedY *= -1;
		}

		if(b.y > this._ballMoveRect.y + this._ballMoveRect.height)
		{
			this._gameStatus = GameControlConst.GAME_OVER;
			this.gameOver();
		}
	}

	private checkCollision(){
		
		this._cubePanel.collide(this._ball);
		if(this._paddle.collide(this._ball))
		{
			this._ball.collidePaddleSpeed(this._paddle)
		}
	}

	public dispose()
	{
		egret.stopTick(this.update,this);
		this._gameStatus = GameControlConst.STOP;
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