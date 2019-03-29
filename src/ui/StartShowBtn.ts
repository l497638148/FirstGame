class StartShowBtn extends eui.Component implements eui.UIComponent{

	private btn:eui.Button;

	private label:eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/skins/StartBtn.exml";
	}

	protected childrenCreated(){
		super.childrenCreated();
	}
}