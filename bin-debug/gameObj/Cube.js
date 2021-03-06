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
var Cube = (function (_super) {
    __extends(Cube, _super);
    function Cube(key, oLife) {
        if (oLife === void 0) { oLife = 1; }
        var _this = _super.call(this) || this;
        _this.init(key, oLife);
        return _this;
    }
    Cube.prototype.init = function (key, oLife) {
        if (oLife === void 0) { oLife = 1; }
        this._cubeBmp = new egret.Bitmap();
        this.setKey(key);
        this.addChild(this._cubeBmp);
        this._life = oLife;
        this.anchorOffsetX = this.width * 0.5;
        this.anchorOffsetY = this.height * 0.5;
    };
    Cube.prototype.setKey = function (key) {
        this._cubeBmp.texture = RES.getRes(key);
    };
    Cube.prototype.collide = function (ball) {
        var rangeX = 0;
        var rangeY = 0;
        rangeX = Math.abs(ball.x - this.x);
        rangeY = Math.abs(ball.y - this.y);
        if (rangeX <= (this.width + ball.width) * 0.5 && rangeY <= (this.height + ball.height) * 0.5) {
            this._life--;
            return true;
        }
        return false;
    };
    Object.defineProperty(Cube.prototype, "life", {
        get: function () {
            return this._life;
        },
        enumerable: true,
        configurable: true
    });
    Cube.prototype.dispose = function () {
        if (this._cubeBmp) {
            this.removeChild(this._cubeBmp);
            //this._cubeBmp.texture.dispose();
            this._cubeBmp = null;
        }
    };
    return Cube;
}(egret.DisplayObjectContainer));
__reflect(Cube.prototype, "Cube", ["IDispose"]);
//# sourceMappingURL=Cube.js.map