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
var CubePanel = (function (_super) {
    __extends(CubePanel, _super);
    function CubePanel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    CubePanel.prototype.init = function () {
        this._cubes = new Array();
    };
    CubePanel.prototype.create = function (type, horSize, verSize) {
        for (var i = 0; i < verSize; i++) {
            for (var j = 0; j < horSize; j++) {
                //let cube = new Cube(type);
                var cube = new Cube(type);
                cube.x = cube.width * j;
                cube.y = cube.height * i;
                cube.id = i * j + j;
                this.addChild(cube);
                this._cubes.push(cube);
            }
        }
    };
    CubePanel.prototype.checkCollision = function (ball) {
        var index = -1;
        console.log("aaa");
        this._cubes.forEach(function (item, i, arr) {
            if (item.collision(ball)) {
                if (item.life <= 0) {
                    item.parent.removeChild(item);
                    item.dispose();
                    item = null;
                    arr.splice(i, 1);
                }
                return true;
            }
        });
        return false;
    };
    CubePanel.prototype.update = function () {
    };
    CubePanel.prototype.dispose = function () {
        for (var i = 0; i < this._cubes.length; i++) {
            this._cubes[i].dispose();
            this._cubes[i] = null;
        }
        this._cubes = null;
    };
    return CubePanel;
}(egret.DisplayObjectContainer));
__reflect(CubePanel.prototype, "CubePanel", ["IDispose"]);
//# sourceMappingURL=CubePanel.js.map