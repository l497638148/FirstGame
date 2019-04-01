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
				var cube = new Cube(type);
				cube.x = cube.width * j;
				cube.y = cube.height * i;
				this.addChild(cube);
			}
		} 
	}

	public checkCollision(px:number,py:number):boolean
	{	
		var index:number = -1;
		for(var i:number;i < this._cubes.length;i++)
		{
			var bo:boolean = this._cubes[i].hitTestPoint(px,py);
			if(bo)
			{
				index = i;
				break;
			}
		}

		if(index != -1)
		{
			this._cubes[index].dispose();
			this._cubes.splice(index,1);
			return;
		}

		return false;
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