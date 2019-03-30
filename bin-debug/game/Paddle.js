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
var Paddle = (function (_super) {
    __extends(Paddle, _super);
    function Paddle(key) {
        var _this = _super.call(this) || this;
        _this.init(key);
        return _this;
    }
    Paddle.prototype.init = function (key) {
        this._paddleBmp = new egret.Bitmap();
        this._paddleBmp.width = 60;
        this._paddleBmp.height = 20;
        this.setSkin(key);
        this.addChild(this._paddleBmp);
        this.anchorOffsetX = this.width * 0.5;
        this.anchorOffsetY = this.height * 0.5;
    };
    Paddle.prototype.setSkin = function (key) {
        this._paddleBmp.texture = RES.getRes(key);
    };
    return Paddle;
}(egret.DisplayObjectContainer));
__reflect(Paddle.prototype, "Paddle");
//# sourceMappingURL=Paddle.js.map