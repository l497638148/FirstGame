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
        _this._speedX = 5.0;
        _this._speedY = 5.0;
        _this.collideMaxSpeed = 10;
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
    Ball.prototype.move = function () {
        this.x -= this._speedX;
        this.y -= this._speedY;
    };
    Ball.prototype.collideCubeSpeed = function (cube) {
        var rangeX = Math.abs(this.x - cube.x);
        var rangeY = Math.abs(this.y - cube.y);
        if (rangeX > cube.width * 0.5 && rangeX < (this.width + cube.width) * 0.5 && rangeY < (cube.height + this.height) * 0.5) {
            //小球撞击砖块左侧或者右侧
            if ((this.x < cube.x && this._speedX) > 0 || (this.x > cube.x && this._speedX < 0)) {
                //小球x轴速度取反
                this._speedX *= -1;
            }
            else {
                //小球y轴速度取反
                this._speedY *= -1;
            }
        }
        else {
            this._speedY *= -1;
        }
    };
    Ball.prototype.collidePaddleSpeed = function (paddle) {
        var p = paddle;
        var b = this;
        var rangeX = b.x - p.x;
        this._speedX = rangeX / (p.width * 0.5) * this.collideMaxSpeed * -1;
        this._speedY *= -1;
    };
    Object.defineProperty(Ball.prototype, "speedX", {
        get: function () {
            return this._speedX;
        },
        set: function (value) {
            this._speedX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "speedY", {
        get: function () {
            return this._speedY;
        },
        set: function (value) {
            this._speedY = value;
        },
        enumerable: true,
        configurable: true
    });
    Ball.prototype.dispose = function () {
        if (this._ball) {
            this.removeChild(this._ball);
            this._ball.texture.dispose();
            this._ball = null;
        }
    };
    return Ball;
}(egret.DisplayObjectContainer));
__reflect(Ball.prototype, "Ball", ["IDispose"]);
//# sourceMappingURL=Ball.js.map