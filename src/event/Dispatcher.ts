class Dispatcher extends egret.EventDispatcher{

	private static _instane:Dispatcher;

	public constructor() {
		super()
	}

	public static get instance():Dispatcher
	{
		if(!this._instane)
		{
			this._instane = new Dispatcher();
		}
		return this._instane;
	}

	public addEventListener(type:string|number,listener:Function,thisObj:any,useCapture?:boolean,priority?:number){
		this.addEventListener(String(type),listener,thisObj,useCapture,priority);
	}

	public removeEventListener(type:string|number,listener:Function,thisObj:any,useCapture?:boolean,priority?:number){
		this.removeEventListener(String(type),listener,thisObj,useCapture,priority);
	}

	public dispatcher(type:string|number,data?:any,bubbles?:boolean,cancelable?:boolean){
		this.dispatchEventWith(String(type),bubbles,data,cancelable)
	}
}