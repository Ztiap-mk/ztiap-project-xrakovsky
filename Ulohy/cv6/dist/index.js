// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Game/CanvasInit.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CanvasInit =
/** @class */
function () {
  function CanvasInit() {
    this.canvas = document.getElementById("pac-man");
    var ctx = this.canvas.getContext("2d");
    if (!ctx) throw new Error("No canvas context");
    this.ctx = ctx;
  }

  CanvasInit.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.initCanvas();
        return [2
        /*return*/
        ];
      });
    });
  };

  CanvasInit.prototype.initCanvas = function () {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  };

  CanvasInit.prototype.clearCanvas = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  CanvasInit.prototype.render = function () {
    this.clearCanvas();
    this.initCanvas();
  };

  CanvasInit.prototype.getMousePosition = function (canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  return CanvasInit;
}();

exports.CanvasInit = CanvasInit;
},{}],"States/MainMenu.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CanvasInit_1 = require("../Game/CanvasInit");

var __1 = require("..");

var MainMenuState =
/** @class */
function () {
  function MainMenuState() {
    this.mainCanvas = new CanvasInit_1.CanvasInit();
    this.canvas = this.mainCanvas.canvas;
    this.ctx = this.mainCanvas.canvas.getContext("2d");
  }

  MainMenuState.prototype.initMenu = function () {
    this.clear();
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.getText();
    this.handleText();
  };

  MainMenuState.prototype.getText = function () {
    this.createText("Start Game", this.canvas.width / 2, this.canvas.height / 2, "center", "yellow", "30px Ariel");
    this.createText("Instructions", this.canvas.width / 2, this.canvas.height / 2 + 50, "center", "white", "30px Ariel");
  };

  MainMenuState.prototype.handleText = function () {
    var _this = this;

    window.addEventListener("click", function (e) {
      var width = _this.canvas.width / 2;
      var height = _this.canvas.height / 2;

      var mousePos = _this.mainCanvas.getMousePosition(_this.canvas, e);

      if (mousePos.x >= width - 60 && mousePos.x <= width + 60 && mousePos.y >= height - 20 && mousePos.y <= height) {
        _this.clear();

        __1.start();
      } else if (mousePos.x >= width - 60 && mousePos.x <= width + 60 && mousePos.y >= height + 20 && mousePos.y <= height + 60) {
        _this.clear();

        __1.instructions();
      }
    });
  };

  MainMenuState.prototype.createText = function (text, x, y, align, color, font) {
    this.ctx.fillStyle = color;
    this.ctx.font = font;
    this.ctx.textAlign = align;
    this.ctx.fillText(text, x, y);
  };

  MainMenuState.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.mainCanvas.canvas.width, this.mainCanvas.canvas.height);
  };

  return MainMenuState;
}();

exports.MainMenuState = MainMenuState;
},{"../Game/CanvasInit":"Game/CanvasInit.ts","..":"index.ts"}],"Game/Characters/PacMan.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CanvasInit_1 = require("../CanvasInit");

var MainMenu_1 = require("../../States/MainMenu");

var PacMan =
/** @class */
function () {
  function PacMan(x, y, radius, speed) {
    this.mainCanvas = new CanvasInit_1.CanvasInit();
    this.ctx = this.mainCanvas.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.speed = {
      dx: 0,
      dy: 0,
      magnitude: 3
    };
    this.direction = {
      name: "RIGHT",
      angle: 0
    };
    this.radius = radius;
    this.mouthAnimation = {
      speed: 0.05,
      gap: 0.3,
      angle: 0,
      dir: 1,
      update: function update() {
        if (this.dir == 1) {
          this.angle += this.speed;
        } else {
          this.angle -= this.speed;
        }

        if (this.angle > 1 - this.gap || this.angle < 0) {
          this.dir *= -1;
        }
      }
    };
  }

  Object.defineProperty(PacMan.prototype, "pacmanCoor", {
    get: function get() {
      var coor = {
        x: this.x,
        y: this.y
      };
      return coor;
    },
    enumerable: true,
    configurable: true
  });

  PacMan.prototype.isGameOver = function () {
    var _this = this;

    var pacManCoor = this.pacmanCoor;
    var _a = this.mainCanvas.canvas,
        width = _a.width,
        height = _a.height;

    if (pacManCoor.x > width - this.radius || pacManCoor.y > height - this.radius || pacManCoor.x < this.radius || pacManCoor.y < this.radius) {
      this.mainCanvas.clearCanvas();
      this.ctx.fillRect(0, 0, width, height);
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center";
      this.ctx.fillText("Game Over", width / 2, height / 2);
      this.ctx.fillText("Play Again", width / 2, height / 2 + 30);
      this.mainCanvas.canvas.addEventListener("click", function (e) {
        var mousePos = _this.mainCanvas.getMousePosition(_this.mainCanvas.canvas, e);

        if (mousePos.x >= width / 2 - 60 && mousePos.x <= width / 2 + 60 && mousePos.y >= height / 2 + 10 && mousePos.y <= height / 2 + 60) {
          _this.mainCanvas.render();

          new MainMenu_1.MainMenuState().initMenu();
          return false;
        }
      });
      return true;
    } else return false;
  };

  PacMan.prototype.initPacman = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.mainCanvas.render();
            return [4
            /*yield*/
            , this.drawPacMan()];

          case 1:
            _a.sent();

            this.update();
            document.addEventListener("keydown", function (e) {
              _this.move(e.keyCode);
            });
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  PacMan.prototype.drawPacMan = function () {
    return __awaiter(this, void 0, void 0, function () {
      var newX, newY;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.ctx.save();
            this.ctx.translate(this.x, this.y);

            if (this.direction.name == "LEFT") {
              this.ctx.scale(1, -1);
            }

            this.ctx.rotate(this.direction.angle);
            this.ctx.translate(-this.x, -this.y);
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.radius, Math.PI / 4 - this.mouthAnimation.angle, 1.75 * Math.PI + this.mouthAnimation.angle);
            this.ctx.lineTo(this.x, this.y);
            newX = this.radius * Math.cos(Math.PI / 4 - this.mouthAnimation.angle) + this.x;
            newY = this.radius * Math.sin(Math.PI / 4 - this.mouthAnimation.angle) + this.y;
            this.ctx.lineTo(newX, newY);
            this.ctx.fillStyle = "yellow";
            this.ctx.fill();
            this.ctx.closePath(); // uvidíme

            return [4
            /*yield*/
            , this.drawPacManEye()];

          case 1:
            _a.sent();

            this.ctx.restore();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  PacMan.prototype.drawPacManEye = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y - this.radius / 2, this.radius * 0.15, 0, 2 * Math.PI);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
        this.ctx.strokeStyle = "white";
        this.ctx.stroke();
        this.ctx.closePath();
        return [2
        /*return*/
        ];
      });
    });
  };

  PacMan.prototype.stop = function () {
    this.speed.dx = 0;
    this.speed.dy = 0;
  };

  PacMan.prototype.update = function () {
    if (!this.isGameOver()) {
      this.x += this.speed.dx;
      this.y += this.speed.dy;
      this.mouthAnimation.update();
    }
  };

  PacMan.prototype.move = function (code) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (code == 38 || code == "UP") {
          this.direction = {
            name: "UP",
            angle: Math.PI * 1.5
          };
          this.speed.dy = -this.speed.magnitude;
          this.speed.dx = 0;
        } else if (code == 37 || code == "LEFT") {
          this.direction = {
            name: "LEFT",
            angle: Math.PI
          };
          this.speed.dx = -this.speed.magnitude;
          this.speed.dy = 0;
        } else if (code == 40 || code == "DOWN") {
          this.direction = {
            name: "DOWN",
            angle: Math.PI / 2
          };
          this.speed.dx = 0;
          this.speed.dy = this.speed.magnitude;
        } else if (code == 39 || code == "RIGHT") {
          this.direction = {
            name: "RIGHT",
            angle: 0
          };
          this.speed.dx = this.speed.magnitude;
          this.speed.dy = 0;
        } else if (code == 71) {
          this.stop();
        }

        return [2
        /*return*/
        ];
      });
    });
  };

  return PacMan;
}();

exports.PacMan = PacMan;
},{"../CanvasInit":"Game/CanvasInit.ts","../../States/MainMenu":"States/MainMenu.ts"}],"Game/Characters/Ghost.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CanvasInit_1 = require("../CanvasInit");

var index_1 = require("../../index");

var Ghost =
/** @class */
function () {
  function Ghost(x, y, w, h, src) {
    this.mainCanvas = new CanvasInit_1.CanvasInit();
    this.ctx = this.mainCanvas.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.src = src;
    this.speed = {
      dx: 0,
      dy: 0,
      magnitude: 1
    };
  }

  Ghost.prototype.initGhost = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.drawGhost(this.x, this.y, this.w, this.h)];

          case 1:
            _a.sent();

            return [4
            /*yield*/
            , this.update()];

          case 2:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Ghost.prototype.drawGhost = function (x, y, w, h) {
    return __awaiter(this, void 0, void 0, function () {
      var img;
      return __generator(this, function (_a) {
        img = new Image();
        img.src = this.src;
        this.ctx.drawImage(img, x, y, w, h);
        return [2
        /*return*/
        ];
      });
    });
  };

  Ghost.prototype.update = function () {
    return __awaiter(this, void 0, void 0, function () {
      var ghostCoor;
      return __generator(this, function (_a) {
        this.x += this.speed.dx;
        this.y += this.speed.dy;
        ghostCoor = {
          x: this.x,
          y: this.y
        };

        if (ghostCoor !== index_1.pacManCoor) {
          if (ghostCoor.x > index_1.pacManCoor.x) {
            this.move("LEFT");
          } else if (ghostCoor.x < index_1.pacManCoor.x) {
            this.move("RIGHT");
          } else if (ghostCoor.y > index_1.pacManCoor.y) {
            this.move("UP");
          } else if (ghostCoor.y < index_1.pacManCoor.y) {
            this.move("DOWN");
          }
        }

        return [2
        /*return*/
        ];
      });
    });
  };

  Ghost.prototype.move = function (code) {
    if (code == "UP") {
      this.speed.dy = -this.speed.magnitude;
      this.speed.dx = 0;
    } else if (code == "LEFT") {
      this.speed.dx = -this.speed.magnitude;
      this.speed.dy = 0;
    } else if (code == "DOWN") {
      this.speed.dx = 0;
      this.speed.dy = this.speed.magnitude;
    } else if (code == "RIGHT") {
      this.speed.dx = this.speed.magnitude;
      this.speed.dy = 0;
    }
  };

  return Ghost;
}();

exports.Ghost = Ghost;
},{"../CanvasInit":"Game/CanvasInit.ts","../../index":"index.ts"}],"States/Instructions.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CanvasInit_1 = require("../Game/CanvasInit");

var MainMenu_1 = require("./MainMenu");

var Instructions =
/** @class */
function () {
  function Instructions() {
    this.mainCanvas = new CanvasInit_1.CanvasInit();
    this.canvas = this.mainCanvas.canvas;
    this.ctx = this.mainCanvas.canvas.getContext("2d");
    this.mainMenu = new MainMenu_1.MainMenuState();
  }

  Instructions.prototype.initInstructions = function () {
    this.clear();
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.getText();
    this.handleText();
  };

  Instructions.prototype.getText = function () {
    this.createText("INSTRUCTIONS", this.canvas.width / 2, 60, "center", "yellow", "30px Ariel");
    this.createText("1. Move by arrows", 0, 100, "left", "white", "30px Ariel");
    this.createText("X", this.canvas.width - 30, 60, "right", "red", "30px Ariel");
  };

  Instructions.prototype.handleText = function () {
    var _this = this;

    window.addEventListener("click", function (e) {
      var width = _this.canvas.width;

      var mousePos = _this.mainCanvas.getMousePosition(_this.canvas, e);

      if (mousePos.x >= width - 40 && mousePos.x <= width - 10 && mousePos.y >= 40 && mousePos.y <= 70) {
        _this.clear();

        _this.mainMenu.initMenu();
      }
    });
  };

  Instructions.prototype.createText = function (text, x, y, align, color, font) {
    this.ctx.fillStyle = color;
    this.ctx.font = font;
    this.ctx.textAlign = align;
    this.ctx.fillText(text, x, y);
  };

  Instructions.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.mainCanvas.canvas.width, this.mainCanvas.canvas.height);
  };

  return Instructions;
}();

exports.Instructions = Instructions;
},{"../Game/CanvasInit":"Game/CanvasInit.ts","./MainMenu":"States/MainMenu.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CanvasInit_1 = require("./Game/CanvasInit");

var PacMan_1 = require("./Game/Characters/PacMan");

var Ghost_1 = require("./Game/Characters/Ghost");

var MainMenu_1 = require("./States/MainMenu");

var Instructions_1 = require("./States/Instructions");

var menu = new MainMenu_1.MainMenuState();
var instructionsState = new Instructions_1.Instructions();
var canvasInit = new CanvasInit_1.CanvasInit();
var pacMan = new PacMan_1.PacMan(500, 500, 20, 10);
var ghosts = [new Ghost_1.Ghost(500, 300, 60, 60, "/src/Assets/img/blinky.png"), new Ghost_1.Ghost(300, 300, 30, 30, "/src/Assets/img/pinky.png")];
exports.pacManCoor = pacMan.pacmanCoor;

function start() {
  canvasInit.clearCanvas();
  canvasInit.start();
  pacMan.initPacman();
  ghosts.forEach(function (ghost) {
    ghost.initGhost();
  });
  exports.pacManCoor = pacMan.pacmanCoor;
  requestAnimationFrame(start);
}

exports.start = start;

function instructions() {
  instructionsState.initInstructions();
}

exports.instructions = instructions;
menu.initMenu();
},{"./Game/CanvasInit":"Game/CanvasInit.ts","./Game/Characters/PacMan":"Game/Characters/PacMan.ts","./Game/Characters/Ghost":"Game/Characters/Ghost.ts","./States/MainMenu":"States/MainMenu.ts","./States/Instructions":"States/Instructions.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49805" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/index.js.map