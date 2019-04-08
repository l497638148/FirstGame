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
    GameScene.prototype.initData = function () {
        this._ballMoveRect = new egret.Rectangle();
        this._paddleMoveRect = new egret.Rectangle();
        this._distance = new egret.Point();
        this._touched = false;
    };
    GameScene.prototype.start = function (root) {
        this._root = root;
        this.createScene();
        this.createPlayerControlObj();
        this.createCubes();
        this.addTouchEvent();
        egret.startTick(this.update, this);
        this._gameStatus = GameControlConst.START;
        this.setMoveRectData();
    };
    GameScene.prototype.gameOver = function () {
        egret.stopTick(this.update, this);
        this.delTouchEvent();
        this._root.stopGame(); //临时先写这边，只是为了跑通流程，之后加了流程管理类之后统一修改
    };
    GameScene.prototype.addTouchEvent = function () {
        this._paddle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.paddleMouseDown, this);
        this._paddle.addEventListener(egret.TouchEvent.TOUCH_END, this.paddleMouseUp, this);
    };
    GameScene.prototype.delTouchEvent = function () {
        this._paddle.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.paddleMouseDown, this);
        this._paddle.removeEventListener(egret.TouchEvent.TOUCH_END, this.paddleMouseUp, this);
        this._paddle.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.paddleMouseMove, this);
    };
    GameScene.prototype.setMoveRectData = function () {
        var w = this._root.stage.stageWidth;
        var h = this._root.stage.stageHeight;
        var b = this._ballMoveRect;
        b.x = this._ball.width * 0.5;
        b.y = this._ball.height * 0.5;
        b.width = w - this._ball.width;
        b.height = h - this._ball.height * 0.5;
        var p = this._paddleMoveRect;
        p.x = this._paddle.width * 0.5;
        p.y = this._paddle.height * 0.5;
        p.width = w - this._paddle.width;
        p.height = h - this._paddle.height;
    };
    GameScene.prototype.paddleMouseDown = function (e) {
        if (this._gameStatus == GameControlConst.START) {
            this._gameStatus = GameControlConst.RUNNING;
        }
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
    GameScene.prototype.update = function (timeStamp) {
        if (this._gameStatus == GameControlConst.RUNNING) {
            this.rangeObjPos(this._paddle, this._paddleMoveRect);
            this.checkBall();
            this.checkCollision();
            this._ball.move();
        }
        return false;
    };
    GameScene.prototype.rangeObjPos = function (obj, ract) {
        if (obj.x < ract.x) {
            obj.x = ract.x;
        }
        else if (obj.x > ract.x + ract.width) {
            obj.x = ract.x + ract.width;
        }
    };
    GameScene.prototype.checkBall = function () {
        var b = this._ball;
        if (b.x < this._ballMoveRect.x || b.x > this._ballMoveRect.x + this._ballMoveRect.width) {
            b.speedX *= -1;
        }
        if (b.y < this._ballMoveRect.y) {
            b.speedY *= -1;
        }
        if (b.y > this._ballMoveRect.y + this._ballMoveRect.height) {
            this._gameStatus = GameControlConst.GAME_OVER;
            this.gameOver();
        }
    };
    GameScene.prototype.checkCollision = function () {
        this._cubePanel.collide(this._ball);
        if (this._paddle.collide(this._ball)) {
            this._ball.collidePaddleSpeed(this._paddle);
        }
    };
    GameScene.prototype.dispose = function () {
        egret.stopTick(this.update, this);
        this._gameStatus = GameControlConst.STOP;
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