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
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(key) {
        var _this = _super.call(this) || this;
        _this.init(key);
        return _this;
    }
    Ball.prototype.init = function (key) {
        this._ball = new egret.Bitmap();
        this.setKey(key);
        this.addChild(this._ball);
        this.anchorOffsetX = this.width * 0.5;
        this.anchorOffsetY = this.height * 0.5;
    };
    Ball.prototype.setKey = function (key) {
        this._ball.texture = RES.getRes(key);
    };
    return Ball;
}(egret.DisplayObjectContainer));
__reflect(Ball.prototype, "Ball");
//# sourceMappingURL=Ball.js.map