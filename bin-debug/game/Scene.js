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
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene(root) {
        var _this = _super.call(this) || this;
        _this.init(root);
        return _this;
    }
    Scene.prototype.init = function (root) {
        this._bg = new egret.Shape();
        this._bg.graphics.beginFill(0x1c86ee, 1);
        this._bg.graphics.drawRect(0, 0, root.stage.stageWidth, root.stage.stageHeight);
        this._bg.graphics.endFill();
        this.addChild(this._bg);
    };
    return Scene;
}(egret.DisplayObjectContainer));
__reflect(Scene.prototype, "Scene");
//# sourceMappingURL=Scene.js.map