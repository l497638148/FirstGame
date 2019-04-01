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
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.initData();
        return _this;
    }
    GameScene.prototype.start = function (root) {
        this._root = root;
        this.createScene();
        this.createPlayerControlObj();
        this.createCubes();
        this.addEvent();
    };
    GameScene.prototype.initData = function () {
        this._distance = new egret.Point();
        this._touched = false;
    };
    GameScene.prototype.addEvent = function () {
        this._paddle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.paddleMouseDown, this);
        this._paddle.addEventListener(egret.TouchEvent.TOUCH_END, this.paddleMouseUp, this);
    };
    GameScene.prototype.paddleMouseDown = function (e) {
        this._touched = true;
        this._distance.x = e.stageX - this._paddle.x;
        this._paddle.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.paddleMouseMove, this);
    };
    GameScene.prototype.paddleMouseUp = function (e) {
        this._paddle.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.paddleMouseMove, this);
        this._touched = false;
    };
    GameScene.prototype.paddleMouseMove = function (e) {
        if (this._touched) {
            this._paddle.x = e.stageX - this._distance.x;
            this.rangePaddlePos();
        }
    };
    GameScene.prototype.rangePaddlePos = function () {
        var ract = new egret.Rectangle();
        ract.x = this._paddle.width * 0.5;
        ract.y = this._paddle.height * 0.5;
        ract.width = this._root.stage.stageWidth - this._paddle.width;
        ract.height = this._root.stage.stageHeight - this._paddle.height;
        if (this._paddle.x < ract.x) {
            this._paddle.x = ract.x;
        }
        else if (this._paddle.x > ract.x + ract.width) {
            this._paddle.x = ract.x + ract.width;
        }
    };
    GameScene.prototype.createScene = function () {
        this._scene = new Scene(this._root);
        this._root.addChild(this._scene);
    };
    GameScene.prototype.createPlayerControlObj = function () {
        this._paddle = new Paddle(PaddleConst.BLUE);
        this._paddle.x = this._root.stage.stageWidth * 0.5;
        this._paddle.y = this._root.stage.stageHeight - this._paddle.height * 2;
        this._paddle.touchEnabled = true;
        this._root.addChild(this._paddle);
        this._ball = new Ball(BallConst.GREY);
        this._ball.x = this._paddle.x;
        this._ball.y = this._paddle.y - this._paddle.height * 0.5 - this._ball.height * 0.5;
        this._root.addChild(this._ball);
    };
    GameScene.prototype.createCubes = function () {
        this._cubePanel = new CubePanel();
        this._cubePanel.create(CubeConst.BLUE_RETANGLE, 10, 5);
        this._root.addChild(this._cubePanel);
    };
    GameScene.prototype.stop = function () {
        this.delEvent();
    };
    GameScene.prototype.delEvent = function () {
    };
    GameScene.prototype.hitTest = function (obj1, obj2) {
        var rect1 = obj1.getBounds();
        var rect2 = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        return rect1.intersects(rect2);
    };
    GameScene.prototype.dispose = function () {
        if (this._scene) {
            this._scene.dispose();
            this._scene = null;
        }
        if (this._paddle) {
            this._paddle.dispose();
            this._paddle = null;
        }
        if (this._ball) {
            this._ball.dispose();
            this._ball = null;
        }
        if (this._cubePanel) {
            this._cubePanel.dispose();
            this._cubePanel = null;
        }
    };
    return GameScene;
}(egret.DisplayObjectContainer));
__reflect(GameScene.prototype, "GameScene", ["IDispose"]);
//# sourceMappingURL=GameScene.js.map