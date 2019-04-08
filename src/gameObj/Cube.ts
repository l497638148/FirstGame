class Cube extends egret.DisplayObjectContainer implements IDispose{

	private _cubeBmp:egret.Bitmap;
	private _key:string;

	public _life:number;
	public id:number;

	public constructor(key:string,oLife:number = 1) {
		super();
		this.init(key,oLife);
	}

	private init(key:string,oLife:number = 1){
		this._cubeBmp = new egret.Bitmap();
		this.setKey(key);
		this.addChild(this._cubeBmp);
		this._life = oLife;
		this.anchorOffsetX = this.width * 0.5;
		this.anchorOffsetY = this.height * 0.5;
	}

	private setKey(key:string){

		this._cubeBmp.texture = RES.getRes(key);
	}
	
	public collide(ball:Ball){
		
		 var rangeX = 0;
		 var rangeY = 0;
		 rangeX = Math.abs(ball.x - this.x);
		 rangeY = Math.abs(ball.y - this.y);

		 if(rangeX <= (this.width + ball.width) * 0.5 && rangeY <= (this.height + ball.height) * 0.5)
		 {
			this._life--;
			return true;
		 }
		
		return false;
	}

	public get life():number
	{
		return this._life;
	}

	public dispose(){
		
		if(this._cubeBmp)
		{
			this.removeChild(this._cubeBmp);
			//this._cubeBmp.texture.dispose();
			this._cubeBmp = null;
		}
	}
	
}