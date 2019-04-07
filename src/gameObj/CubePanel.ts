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
				cube.x = cube.width * j;
				cube.y = cube.height * i;
				cube.id = i *j + j;
				this.addChild(cube);
				this._cubes.push(cube);
			}
		}
	}

	public checkCollision(ball:Ball):boolean
	{	
		var index:number = -1;

		console.log("aaa");

		this._cubes.forEach((item,i,arr) => {
			
			if(item.collision(ball))
			{
				if(item.life <= 0)
				{
					item.parent.removeChild(item);
					item.dispose();
					item = null;
					arr.splice(i,1);
				}

				return true;
			}
		})
		return false;
	}

	public update(){
		
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