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
    Paddle.prototype.collide = function (ball) {
        var b = ball;
        var p = this;
        var disX = Math.abs(b.x - this.x);
        var disY = Math.abs(b.y - this.y);
        if (disX < (b.width + this.width) * 0.5 && disY < (b.height + p.height) * 0.5) {
            return true;
        }
        return false;
    };
    Paddle.prototype.dispose = function () {
        if (this._paddleBmp) {
            this.removeChild(this._paddleBmp);
            this._paddleBmp.texture.dispose();
            this._paddleBmp = null;
        }
    };
    return Paddle;
}(egret.DisplayObjectContainer));
__reflect(Paddle.prototype, "Paddle", ["IDispose"]);
//# sourceMappingURL=Paddle.js.map