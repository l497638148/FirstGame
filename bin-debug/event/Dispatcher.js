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
var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Dispatcher, "instance", {
        get: function () {
            if (!this._instane) {
                this._instane = new Dispatcher();
            }
            return this._instane;
        },
        enumerable: true,
        configurable: true
    });
    Dispatcher.prototype.addEventListener = function (type, listener, thisObj, useCapture, priority) {
        this.addEventListener(String(type), listener, thisObj, useCapture, priority);
    };
    Dispatcher.prototype.removeEventListener = function (type, listener, thisObj, useCapture, priority) {
        this.removeEventListener(String(type), listener, thisObj, useCapture, priority);
    };
    Dispatcher.prototype.dispatcher = function (type, data, bubbles, cancelable) {
        this.dispatchEventWith(String(type), bubbles, data, cancelable);
    };
    return Dispatcher;
}(egret.EventDispatcher));
__reflect(Dispatcher.prototype, "Dispatcher");
//# sourceMappingURL=Dispatcher.js.map