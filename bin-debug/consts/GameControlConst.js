var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameControlConst = (function () {
    function GameControlConst() {
    }
    GameControlConst.START = 0;
    GameControlConst.RUNNING = 1;
    GameControlConst.STOP = 3;
    GameControlConst.GAME_OVER = 4;
    GameControlConst.ALL_COMPLETE = 5;
    return GameControlConst;
}());
__reflect(GameControlConst.prototype, "GameControlConst");
//# sourceMappingURL=GameControlConst.js.map