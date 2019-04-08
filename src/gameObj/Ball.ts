class Ball extends egret.DisplayObjectContainer implements IDispose{
	private _ball:egret.Bitmap;

	private _speedX:number = 5.0;
	private _speedY:number = 5.0;

	private collideMaxSpeed:number = 10;
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

	public move()
	{
		this.x -= this._speedX;
		this.y -= this._speedY;
	}

	public collideCubeSpeed(cube:Cube)
	{
		let rangeX = Math.abs(this.x - cube.x);
		let rangeY = Math.abs(this.y - cube.y);

		if(rangeX > cube.width * 0.5 && rangeX < (this.width + cube.width) * 0.5 && rangeY < (cube.height + this.height) * 0.5)
		{
			//小球撞击砖块左侧或者右侧
			if((this.x < cube.x && this._speedX) > 0 || (this.x > cube.x && this._speedX < 0))
			{
				//小球x轴速度取反
				this._speedX *= -1;
			}
			//小球撞击砖块上侧或者下侧
			else
			{
				//小球y轴速度取反
				this._speedY *= -1;
			}
		}
		else
		{
			this._speedY *= -1;
		}
	}

	public collidePaddleSpeed(paddle:Paddle)
	{
		let p = paddle;
		let b = this;

		var rangeX = b.x - p.x;
		this._speedX = rangeX/(p.width * 0.5) * this.collideMaxSpeed * -1;
		this._speedY *= -1;
	}

	public set speedX(value:number)
	{
		this._speedX = value;
	}

	public get speedX():number
	{
		return this._speedX;
	}

	public set speedY(value:number)
	{
		this._speedY = value;
	}

	public get speedY():number
	{
		return this._speedY;
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