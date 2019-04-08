class CubePanel extends egret.DisplayObjectContainer implements IDispose{

	private _cubes:Array<Cube>;

	public constructor() {
		super();
		this.init();
	}

	private init()
	{
		this._cubes = new Array();
	}

	public create(type:string,horSize:number,verSize:number)
	{
		for(var i:number = 0;i < verSize;i++)
		{
			for(var j:number = 0;j < horSize;j++)
			{
				//let cube = new Cube(type);
				var cube = new Cube(type);
				cube.x = cube.width * (j + 0.5);
				cube.y = cube.height * (i + 0.5);
				cube.id = i *horSize + j;
				this.addChild(cube);
				this._cubes.push(cube);
				 console.log("i:" + i + ",j:"+ j + ",id:" + cube.id);
			}
		}
	}

	public collide(ball:Ball):boolean
	{	
		var index:number = -1;
		var bo:boolean = false;

		this._cubes.forEach((item,i,arr) => {
			
			if(item.collide(ball))
			{
				ball.collideCubeSpeed(item);
				if(item.life <= 0)
				{
					item.parent.removeChild(item);
					item.dispose();
					item = null;
					arr.splice(i,1);  
				}

				bo =  true;
			}
		})
		
		return bo;
	}

	public dispose()
	{
		for(var i:number = 0;i < this._cubes.length;i++)
		{
			this._cubes[i].dispose();
			this._cubes[i] = null;
		}

		this._cubes = null;
	}
}