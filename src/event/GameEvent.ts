class GameEvent extends egret.Event{

	public static CUBE_DIE:string = "cube_die";
	
	public constructor(type:string,data?:any,bubbles?:boolean,cancelable?: boolean) {
		super(type,bubbles,cancelable,data);
	}
}