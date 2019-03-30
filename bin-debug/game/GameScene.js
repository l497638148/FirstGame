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
        return _super.call(this) || this;
    }
    GameScene.prototype.start = function (root) {
        this._root = root;
        this.createScene();
        this.createPlayerControlObj();
        this.addEvent();
    };
    GameScene.prototype.addEvent = function () {
        //this.addEventListener(egret.TouchEvent.touch)
    };
    GameScene.prototype.createScene = function () {
        var scene = new Scene(this._root);
        this._root.addChild(scene);
    };
    GameScene.prototype.createPlayerControlObj = function () {
        var paddle = new Paddle(PaddleConst.BLUE);
        paddle.x = this._root.stage.stageWidth * 0.5;
        paddle.y = this._root.stage.stageHeight - paddle.height * 2;
        this._root.addChild(paddle);
        var ball = new Ball(BallConst.GREY);
        ball.x = paddle.x;
        ball.y = paddle.y - paddle.height * 0.5 - ball.height * 0.5;
        this._root.addChild(ball);
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
    return GameScene;
}(egret.DisplayObjectContainer));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map