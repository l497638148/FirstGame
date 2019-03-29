var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene(mainSp) {
        var _this = _super.call(this) || this;
        _this._mainSp = mainSp;
        _this.init();
        return _this;
    }
    GameScene.prototype.init = function () {
        this._bg = new egret.Shape();
        this._bg.graphics.beginFill(0x1c86ee, 1);
        this._bg.graphics.drawRect(0, 0, this._mainSp.stage.stageWidth, this._mainSp.stage.stageHeight);
        this._bg.graphics.endFill();
        this.addChild(this._bg);
        this._mainSp.addChild(this);
    };
    return GameScene;
}(egret.DisplayObjectContainer));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map