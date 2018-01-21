webpackJsonp([3],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CommandService = (function () {
    function CommandService(http) {
        this.http = http;
    }
    // Async version
    CommandService.prototype.fetchAllCommands = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = "./assets/data/commands.json";
                return [2 /*return*/, this.http.get(url)
                        .retry(2)
                        .map(function (x) {
                        var result = x.json();
                        result = result.sort(function (a, b) {
                            if (a.Ability < b.Ability) {
                                return -1;
                            }
                            else if (a.Ability > b.Ability) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        });
                        return result;
                    })
                        .toPromise()];
            });
        });
    };
    // Async version
    CommandService.prototype.fetchAllAbilites = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = "./assets/data/abilities.json";
                return [2 /*return*/, this.http.get(url)
                        .retry(2)
                        .map(function (x) {
                        var result = x.json();
                        result = result.sort(function (a, b) {
                            if (a.Type < b.Type) {
                                return -1;
                            }
                            else if (a.Type > b.Type) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        });
                        return result;
                    })
                        .toPromise()];
            });
        });
    };
    // Async version
    CommandService.prototype.fetchAllMeldResults = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = "./assets/data/melding.json";
                return [2 /*return*/, this.http.get(url)
                        .retry(2)
                        .map(function (x) {
                        var result = x.json();
                        result = result.sort(function (a, b) {
                            if (a.Type < b.Type) {
                                return -1;
                            }
                            else if (a.Type > b.Type) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        });
                        return result;
                    })
                        .toPromise()];
            });
        });
    };
    // Async version
    CommandService.prototype.fetchAllCollection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = "./assets/data/collection.json";
                return [2 /*return*/, this.http.get(url)
                        .retry(2)
                        .map(function (x) {
                        var result = x.json();
                        return result;
                    })
                        .toPromise()];
            });
        });
    };
    CommandService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CommandService);
    return CommandService;
}());

//# sourceMappingURL=command-service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"bbs-melding/bbs-melding.module": [
		690,
		2
	],
	"command-collection/command-collection.module": [
		691,
		1
	],
	"development/development.module": [
		692,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = (function () {
    function StorageService(storage) {
        var _this = this;
        this.storage = storage;
        this.isStorageReady = false;
        storage.ready()
            .then(function () {
            _this.isStorageReady = true;
            console.log("Storage Ready. Using " + storage.driver);
        });
    }
    StorageService.prototype.getAcquiredCommands = function () {
        return this.storage.get("acquiredCommands").then(function (data) {
            if (data === null) {
                return [];
            }
            else {
                return data;
            }
        });
    };
    StorageService.prototype.setAcquiredCommands = function (commands) {
        return this.storage.set('acquiredCommands', commands);
    };
    StorageService.prototype.getCharacterSelected = function () {
        return this.storage.get("commandCollectionCharacter").then(function (data) {
            if (data === null) {
                return "Terra";
            }
            else {
                return data;
            }
        });
    };
    StorageService.prototype.setCharacterSeleced = function (character) {
        return this.storage.set('commandCollectionCharacter', character);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageService);
    return StorageService;
}());

// Pseudo Guid generator. Good enough for address.id value.
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
//# sourceMappingURL=storage-service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bbs_melding_bbs_melding__ = __webpack_require__(347);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__bbs_melding_bbs_melding__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(685);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(686);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__list_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__development_development__ = __webpack_require__(349);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__development_development__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__command_collection_command_collection__ = __webpack_require__(348);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__command_collection_command_collection__["a"]; });





//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BbsMeldingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_command_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




function test() {
    console.log('test...');
    return '75%';
}
var BbsMeldingPage = (function () {
    function BbsMeldingPage(navCtrl, navParams, commandService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commandService = commandService;
        this._commandSearch = "";
        this.showOnlyFilteredAbilities = false;
        this.searchType = "CM";
        this.undoAbilities = new Array();
        this.redoAbilities = new Array();
        this.meldFooterGroup = 'meldFooterCollapsed';
        this.ionContentGroup = 'ionContentExpanded';
        this.abilityMeldResults = new Array();
    }
    Object.defineProperty(BbsMeldingPage.prototype, "commandSearch", {
        get: function () {
            return this._commandSearch;
        },
        set: function (value) {
            var _this = this;
            this._commandSearch = value;
            console.log(value);
            if (value !== "") {
                this.performFilter(value).then(function (data) {
                    _this.commands = data;
                });
            }
            else {
                this.loadCommands();
            }
            //this.commands = value !== "" ? this.performFilter(value) : this.commands;
        },
        enumerable: true,
        configurable: true
    });
    BbsMeldingPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var melds, abilities, abilityMap, i, ability, abilityType, meldMap, i, meld, meldFirst, meldSecond, outcome, outcomeMap, okay, j, outcomeMeld, outcomeFirst, outcomeSecond;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ionViewDidLoad BbsMeldingPage');
                        this.loadCommands();
                        return [4 /*yield*/, this.commandService.fetchAllMeldResults()];
                    case 1:
                        melds = _a.sent();
                        return [4 /*yield*/, this.commandService.fetchAllAbilites()];
                    case 2:
                        abilities = _a.sent();
                        abilityMap = {};
                        for (i = 0; i < abilities.length; ++i) {
                            ability = abilities[i];
                            abilityType = ability.Type.toLocaleLowerCase();
                            if (!abilityMap[abilityType])
                                abilityMap[abilityType] = [];
                            abilityMap[abilityType].push(ability);
                        }
                        this.abilities = abilityMap;
                        meldMap = {};
                        for (i = 0; i < melds.length; ++i) {
                            meld = melds[i];
                            if (!!this.abilities[meld.Type.toLocaleLowerCase()]) {
                                meld.Abilities = JSON.parse(JSON.stringify(this.abilities[meld.Type.toLocaleLowerCase()]));
                            }
                            meldFirst = meld.First.toLocaleLowerCase();
                            meldSecond = meld.Second.toLocaleLowerCase();
                            outcome = meld.Outcome.toLocaleLowerCase();
                            outcomeMap = meldMap[outcome];
                            if (!meldMap[outcome])
                                outcomeMap = meldMap[outcome] = [];
                            okay = true;
                            for (j = 0; j < outcomeMap.length; ++j) {
                                outcomeMeld = outcomeMap[j];
                                outcomeFirst = outcomeMeld.First.toLocaleLowerCase();
                                outcomeSecond = outcomeMeld.Second.toLocaleLowerCase();
                                if ((outcomeFirst == meldFirst && outcomeSecond == meldSecond) ||
                                    (outcomeSecond == meldFirst && outcomeFirst == meldSecond)) {
                                    okay = false;
                                    break;
                                }
                            }
                            if (okay)
                                outcomeMap.push(meld);
                        }
                        this.melds = meldMap;
                        return [2 /*return*/];
                }
            });
        });
    };
    BbsMeldingPage.prototype.loadCommands = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("Loading commands...");
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        _a = this;
                        return [4 /*yield*/, this.commandService.fetchAllCommands()];
                    case 2:
                        _a.commands = _b.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _b.sent();
                        console.error(err_1);
                        return [3 /*break*/, 5];
                    case 4: return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BbsMeldingPage.prototype.performFilter = function (filterBy) {
        return __awaiter(this, void 0, void 0, function () {
            var c, _a, a, mr;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        filterBy = filterBy.toLocaleLowerCase();
                        return [4 /*yield*/, this.commandService.fetchAllCommands()];
                    case 1:
                        c = _b.sent();
                        _a = this.searchType;
                        switch (_a) {
                            case "CM": return [3 /*break*/, 2];
                            case "AB": return [3 /*break*/, 3];
                            case "CH": return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 7];
                    case 2:
                        {
                            return [2 /*return*/, c.filter(function (command) { return command.Ability.toLocaleLowerCase().indexOf(filterBy) !== -1; })];
                        }
                        _b.label = 3;
                    case 3: return [4 /*yield*/, this.commandService.fetchAllAbilites()];
                    case 4:
                        a = _b.sent();
                        a = a.filter(function (ability) { return ability.Outcome.toLocaleLowerCase().indexOf(filterBy) !== -1; });
                        return [4 /*yield*/, this.commandService.fetchAllMeldResults()];
                    case 5:
                        mr = _b.sent();
                        mr = mr.filter(function (meldResult) { return a.some(function (ab) { return ab.Type === meldResult.Type; }); });
                        return [2 /*return*/, c.filter(function (command) { return mr.some(function (meldResult) { return meldResult.Outcome === command.Ability; }); })];
                    case 6:
                        {
                            return [2 /*return*/, c.filter(function (command) { return command.Character.toLocaleLowerCase().indexOf(filterBy) !== -1; })];
                        }
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    BbsMeldingPage.prototype.searchTypeChange = function () {
        var _this = this;
        this.performFilter(this.commandSearch).then(function (data) {
            _this.commands = data;
        });
    };
    BbsMeldingPage.prototype.toggleMeldDetails = function (ability, undoRedoType) {
        return __awaiter(this, void 0, void 0, function () {
            var abmr, x;
            return __generator(this, function (_a) {
                switch (undoRedoType) {
                    case 0: {
                        this.undoAbilities = new Array();
                        this.redoAbilities = new Array();
                        break;
                    }
                    case 1: {
                        this.undoAbilities.push(this.curSelectedAbility);
                        break;
                    }
                }
                this.curSelectedAbility = ability;
                //c.ShowDetails = !c.ShowDetails;
                this.meldFooterGroup = 'meldFooterExpanded';
                this.ionContentGroup = 'ionContentCollapsed';
                abmr = this.melds[ability.toLocaleLowerCase()];
                if (!!abmr) {
                    this.abilityMeldResults = JSON.parse(JSON.stringify(abmr));
                    if (this.searchType === "AB") {
                        this.filterAbilities();
                    }
                }
                else {
                    this.abilityMeldResults = new Array();
                }
                x = 0;
                return [2 /*return*/];
            });
        });
    };
    BbsMeldingPage.prototype.redoAbility = function () {
        if (this.redoAbilities.length > 0) {
            var ability = this.redoAbilities.pop();
            this.toggleMeldDetails(ability, 1);
        }
    };
    BbsMeldingPage.prototype.undoAbility = function () {
        if (this.undoAbilities.length > 0) {
            var ability = this.undoAbilities.pop();
            this.redoAbilities.push(ability);
            this.toggleMeldDetails(ability, 2);
        }
    };
    BbsMeldingPage.prototype.toggleFilterAbilities = function () {
        this.searchType === "AB" ? this.filterAbilities() : this.undoFilterAbilities();
    };
    BbsMeldingPage.prototype.filterAbilities = function () {
        var _this = this;
        if (!!this.abilityMeldResults) {
            this.abilityMeldResults.forEach(function (mr) {
                console.log(_this.commandSearch);
                var mra = JSON.parse(JSON.stringify(mr.Abilities));
                mr.Abilities = mra.filter(function (ab) { return ab.Outcome.toLocaleLowerCase().indexOf(_this.commandSearch) !== -1; });
            });
            var newAMR = new Array();
            for (var i = 0; i < this.abilityMeldResults.length; ++i) {
                if (this.abilityMeldResults[i].Abilities.length !== 0) {
                    newAMR.push(this.abilityMeldResults[i]);
                }
            }
            this.abilityMeldResults = newAMR;
        }
        var x = 0;
    };
    BbsMeldingPage.prototype.undoFilterAbilities = function () {
        if (!!this.abilityMeldResults && !!this.curSelectedAbility) {
            this.abilityMeldResults = JSON.parse(JSON.stringify(this.melds[this.curSelectedAbility.toLocaleLowerCase()]));
        }
    };
    BbsMeldingPage.prototype.closeMeldFooter = function () {
        this.meldFooterGroup = 'meldFooterCollapsed';
        this.ionContentGroup = 'ionContentExpanded';
        this.abilityMeldResults = new Array();
    };
    BbsMeldingPage.prototype.createListElement = function (text) {
        var liElement = document.createElement("li");
        var textnode = document.createTextNode(text);
        liElement.appendChild(textnode);
        return liElement;
    };
    BbsMeldingPage.prototype.onChange = function () {
        console.log("Test...");
    };
    BbsMeldingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bbs-melding',template:/*ion-inline-start:"C:\Users\Alex\Desktop\Projects\kh-master-guide-actual\src\app\bbs-melding\bbs-melding.html"*/`<!--\n\n  Generated template for the BbsMeldingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Birth By Sleep Command Melding</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Search</ion-label>\n\n      <ion-select [(ngModel)]="searchType" interface="popover" (ionChange)="searchTypeChange()"> \n\n        <ion-option value="CM">Command</ion-option>\n\n        <ion-option value="AB">Ability</ion-option>\n\n        <ion-option value="CH">Character</ion-option>\n\n      </ion-select>\n\n    <ion-input placeholder="Command Name" [(ngModel)]="commandSearch"></ion-input>\n\n  </ion-item>\n\n  <!-- <ion-item>\n\n      <ion-label>Filter Abilites</ion-label>\n\n      <ion-checkbox [(ngModel)]="showOnlyFilteredAbilities" (click)="toggleFilterAbilities()"></ion-checkbox>\n\n  </ion-item> -->\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding [@expand]="ionContentGroup">\n\n  <ion-grid>\n\n    <ion-row *ngFor="let command of commands">\n\n      <ion-card class="card wrap">\n\n        <ion-item>\n\n          <!-- <ion-icon item-left large [name]="address.icon"></ion-icon> -->\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/bbs-melding/{{command.CmdType}}.png">\n\n            </ion-avatar>\n\n            <a target="_blank" [attr.href]="command.AbilityLink">{{command.Ability}}</a>\n\n            <ion-avatar class="characters">\n\n              <img [ngClass]="{ terra_able: command.Character.indexOf(\'Terra\') !== -1, not_able: command.Character.indexOf(\'Terra\') === -1 }"\n\n                src="./assets/imgs/bbs-melding/t.png">\n\n              <img [ngClass]="{ ventus_able: command.Character.indexOf(\'Ventus\') !== -1, not_able: command.Character.indexOf(\'Ventus\') === -1 }"\n\n                src="./assets/imgs/bbs-melding/v.png">\n\n              <img [ngClass]="{ aqua_able: command.Character.indexOf(\'Aqua\') !== -1, not_able: command.Character.indexOf(\'Aqua\') === -1 }"\n\n                src="./assets/imgs/bbs-melding/aq.png">\n\n            </ion-avatar>\n\n          </ion-item>\n\n          <ion-card-content text-wrap>\n\n            <div>\n\n              <span [innerHtml]="command.Description"></span>\n\n            </div>\n\n            <div>\n\n              <button ion-button (click)="toggleMeldDetails(command.Ability, 0)">Melding Details</button>\n\n            </div>\n\n            <div id="{{command.Ability}}_MeldDetails" [ngClass]="{ show: command.ShowDetails, hide: !command.ShowDetails  }">\n\n            </div>\n\n          </ion-card-content>\n\n        </ion-item>\n\n      </ion-card>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer [@expand]="meldFooterGroup" class="footer-bbs">\n\n  <div class="footer_header">\n\n    <h2 class="footer_header_h2">Melding Details\n\n\n\n      \n\n      <button (click)="closeMeldFooter()" class="footer_close">\n\n        \n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n      <!-- <button class="footer_redo" [class.button-disabled]="redoAbilities.length > 0" (click)="redoAbility()">\n\n          \n\n          <ion-icon name="redo"></ion-icon>\n\n        </button>\n\n      <button class="footer_undo" [class.button-disabled]="undoAbilities.length > 0" (click)="undoAbility()">\n\n          \n\n          <ion-icon name="undo"></ion-icon>\n\n        </button> -->\n\n        \n\n      <!-- <div class="footer_filter">\n\n          \n\n          </div> -->\n\n    </h2>\n\n  </div>\n\n\n\n  <div class="meld-grid">\n\n    <div *ngFor="let mr of abilityMeldResults" class="card">\n\n      <ion-card-header class="card_header">\n\n        <span class="meld-header">Meld</span><span class="meld-outcome">{{mr.Outcome}}</span><span class="meld-info"><div>{{mr.Percent}}%</div><div>{{mr.Who}}</div></span>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <div class="meld_slot_container" (click)="toggleMeldDetails(mr.First, 1)">\n\n          <div class="meld_slot">\n\n            <span class="slot-header">SLOT</span><span class="slot-number">1</span>\n\n          </div>\n\n          <div class="meld_slot_corner">\n\n          </div>\n\n          <div class="meld_slot_backwards_corner">\n\n          </div>\n\n          <div class="meld_slot_backwards">\n\n            {{mr.First}}\n\n          </div>\n\n        </div>\n\n        <div class="meld_slot_container" (click)="toggleMeldDetails(mr.Second, 1)">\n\n          <div class="meld_slot">\n\n            <span class="slot-header">SLOT</span><span class="slot-number">2</span>\n\n          </div>\n\n          <div class="meld_slot_corner">\n\n          </div>\n\n          <div class="meld_slot_backwards_corner">\n\n          </div>\n\n          <div class="meld_slot_backwards">\n\n            {{mr.Second}}\n\n          </div>\n\n        </div>\n\n        <div class="item-grid">\n\n          <div *ngFor="let ab of mr.Abilities" class="item-card">\n\n            <div class="meld_slot_container">\n\n              <div class="meld_slot_item">\n\n                <span class="slot-header">ITEM</span>\n\n              </div>\n\n              <div class="meld_slot_item_corner">\n\n              </div>\n\n              <div class="meld_slot_backwards_corner">\n\n              </div>\n\n              <div class="meld_slot_backwards">\n\n                {{ab.Crystal}}\n\n              </div>\n\n          </div>\n\n          <div class="meld_slot_container">\n\n              <div class="meld_slot_item">\n\n                <span class="slot-header">RESULT</span>\n\n              </div>\n\n              <div class="meld_slot_item_corner">\n\n              </div>\n\n              <div class="meld_slot_backwards_corner">\n\n              </div>\n\n              <div class="meld_slot_backwards">\n\n                {{ab.Outcome}}\n\n              </div>\n\n          </div>\n\n        </div>\n\n    </div>\n\n    <!-- Add card content here! -->\n\n    </ion-card-content>\n\n  </div>\n\n  </div>\n\n\n\n  <!-- <ion-scroll scrollX="true" direction="x" class="meld-grid">\n\n  <!-- <div class="meld-grid">\n\n      < *ngFor="let mr of abilityMeldResults" class="meld-card">\n\n              {{mr.Outcome}}\n\n      </ion-card>\n\n    <!-- </div> \n\n  </ion-scroll>  -->\n\n\n\n\n\n</ion-footer>`/*ion-inline-end:"C:\Users\Alex\Desktop\Projects\kh-master-guide-actual\src\app\bbs-melding\bbs-melding.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('expand', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('meldFooterExpanded', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ opacity: '1', height: '250px', bottom: '0px' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('meldFooterCollapsed', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ opacity: '0', height: '0', bottom: '0px', overflow: 'hidden' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('meldFooterExpanded <=> meldFooterCollapsed', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('300ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('ionContentExpanded', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ height: '100%' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('ionContentCollapsed', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ height: 'calc(100% - 250px)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('ionContentExpanded <=> ionContentCollapsed', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('300ms ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__core_command_service__["a" /* CommandService */]])
    ], BbsMeldingPage);
    return BbsMeldingPage;
}());

//# sourceMappingURL=bbs-melding.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandCollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_collection_group__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_command_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_collection__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_acquired_command__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_storage_service__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the CommandCollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommandCollectionPage = (function () {
    function CommandCollectionPage(navCtrl, navParams, commandService, storageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commandService = commandService;
        this.storageService = storageService;
        this.collectionGroup = new Array();
        this.acquiredCommands = new Array();
        this.numCommands = 0;
        this.character = "Terra";
        this.selected = new __WEBPACK_IMPORTED_MODULE_4__core_collection__["a" /* Collection */]();
    }
    CommandCollectionPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('ionViewDidLoad CommandCollectionPage');
                this.loadCommands();
                return [2 /*return*/];
            });
        });
    };
    CommandCollectionPage.prototype.characterChanged = function () {
        this.storageService.setCharacterSeleced(this.character);
        this.loadCommands();
    };
    CommandCollectionPage.prototype.loadCommands = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, char;
            return __generator(this, function (_1) {
                switch (_1.label) {
                    case 0:
                        // Load acquired commands
                        _a = this;
                        return [4 /*yield*/, this.storageService.getAcquiredCommands()];
                    case 1:
                        // Load acquired commands
                        _a.acquiredCommands = _1.sent();
                        this.acquiredCommands = this.acquiredCommands.filter(function (ac) { return ac.Character === _this.character; });
                        // Load list
                        _b = this;
                        return [4 /*yield*/, this.commandService.fetchAllCollection()];
                    case 2:
                        // Load list
                        _b.collections = _1.sent();
                        this.collectionGroup = [];
                        // Load last seleted
                        _c = this;
                        return [4 /*yield*/, this.storageService.getCharacterSelected()];
                    case 3:
                        // Load last seleted
                        _c.character = _1.sent();
                        _e = (_d = this.collectionGroup).push;
                        return [4 /*yield*/, this.loadCollectionGroup("Attack")];
                    case 4:
                        _e.apply(_d, [_1.sent()]);
                        _g = (_f = this.collectionGroup).push;
                        return [4 /*yield*/, this.loadCollectionGroup("Magic")];
                    case 5:
                        _g.apply(_f, [_1.sent()]);
                        _j = (_h = this.collectionGroup).push;
                        return [4 /*yield*/, this.loadCollectionGroup("Items")];
                    case 6:
                        _j.apply(_h, [_1.sent()]);
                        _l = (_k = this.collectionGroup).push;
                        return [4 /*yield*/, this.loadCollectionGroup("Friendship")];
                    case 7:
                        _l.apply(_k, [_1.sent()]);
                        _o = (_m = this.collectionGroup).push;
                        return [4 /*yield*/, this.loadCollectionGroup("Movement")];
                    case 8:
                        _o.apply(_m, [_1.sent()]);
                        _q = (_p = this.collectionGroup).push;
                        return [4 /*yield*/, this.loadCollectionGroup("Defense")];
                    case 9:
                        _q.apply(_p, [_1.sent()]);
                        _s = (_r = this.collectionGroup).push;
                        return [4 /*yield*/, this.loadCollectionGroup("Reprisals")];
                    case 10:
                        _s.apply(_r, [_1.sent()]);
                        _u = (_t = this.collectionGroup).push;
                        return [4 /*yield*/, this.loadCollectionGroup("Shotlocks")];
                    case 11:
                        _u.apply(_t, [_1.sent()]);
                        _w = (_v = this.collectionGroup).push;
                        return [4 /*yield*/, this.loadCollectionGroup("DimensionLinks")];
                    case 12:
                        _w.apply(_v, [_1.sent()]);
                        _y = (_x = this.collectionGroup).push;
                        return [4 /*yield*/, this.loadCollectionGroup("Finish")];
                    case 13:
                        _y.apply(_x, [_1.sent()]);
                        _0 = (_z = this.collectionGroup).push;
                        return [4 /*yield*/, this.loadCollectionGroup("Abilities")];
                    case 14:
                        _0.apply(_z, [_1.sent()]);
                        this.numCommands = 0;
                        char = this.character;
                        this.collectionGroup.forEach(function (c) {
                            _this.numCommands += c.Collection.length;
                            c.Collection.forEach(function (cl) {
                                if (_this.acquiredCommands.filter(function (ac) {
                                    return ac.Command === cl.Command && ac.Character === char;
                                }).length !== 0) {
                                    cl.Acquired = true;
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CommandCollectionPage.prototype.selectCommand = function (c) {
        var _this = this;
        if (this.selected.Command === c.Command) {
            c.Acquired = !c.Acquired;
            if (c.Acquired) {
                var acs = this.acquiredCommands.filter((function (ac) {
                    return ac.Command === c.Command && ac.Character === _this.character;
                }));
                if (acs.length === 0) {
                    var ac = new __WEBPACK_IMPORTED_MODULE_5__core_acquired_command__["a" /* AcquiredCommand */]();
                    ac.Character = this.character;
                    ac.Command = c.Command;
                    this.acquiredCommands.push(ac);
                }
            }
            else {
                var acs = this.acquiredCommands.filter((function (ac) {
                    return ac.Command === c.Command && ac.Character === _this.character;
                }));
                if (acs.length === 1) {
                    var ac = acs[0];
                    var index = this.acquiredCommands.indexOf(ac, 0);
                    if (index > -1) {
                        this.acquiredCommands.splice(index, 1);
                    }
                }
            }
            this.storageService.setAcquiredCommands(this.acquiredCommands);
        }
        else if (this.selected.Command !== '') {
            this.selected.Selected = false;
        }
        var cnElems = document.getElementsByClassName("cn");
        for (var i = 0; i < cnElems.length; ++i) {
            cnElems[i].classList.remove("selected_command");
        }
        this.selected = c;
        this.selected.Selected = true;
    };
    CommandCollectionPage.prototype.loadCollectionGroup = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var group;
            return __generator(this, function (_a) {
                group = new __WEBPACK_IMPORTED_MODULE_2__core_collection_group__["a" /* CollectionGroup */]();
                group.Group = type;
                group.Collection = this.collections.find(function (c) { return c.Name.indexOf(_this.character) !== -1; }).Collection;
                group.Collection = group.Collection.filter(function (c) { return c.Type.indexOf(type) !== -1; });
                group.Collection = group.Collection.sort(function (a, b) {
                    if (a.SortOrder < b.SortOrder) {
                        return -1;
                    }
                    else if (a.SortOrder > b.SortOrder) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                switch (type) {
                    case "Attack": {
                        group.Icon = "a";
                        break;
                    }
                    case "Magic": {
                        group.Icon = "m";
                        break;
                    }
                    case "Items": {
                        group.Icon = "i";
                        break;
                    }
                    case "Friendship": {
                        group.Icon = "f";
                        break;
                    }
                    case "Movement": {
                        group.Icon = "mv";
                        break;
                    }
                    case "Defense": {
                        group.Icon = "d";
                        break;
                    }
                    case "Reprisals": {
                        group.Icon = "r";
                        break;
                    }
                    case "Shotlocks": {
                        group.Icon = "s";
                        break;
                    }
                    case "DimensionLinks": {
                        group.Icon = "dl";
                        break;
                    }
                    case "Finish": {
                        group.Icon = "f1";
                        break;
                    }
                    case "Finish2": {
                        group.Icon = "f2";
                        break;
                    }
                    case "Finish3": {
                        group.Icon = "f3";
                        break;
                    }
                    case "Abilities": {
                        group.Icon = "ab";
                        break;
                    }
                    default: {
                        break;
                    }
                }
                return [2 /*return*/, group];
            });
        });
    };
    CommandCollectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-command-collection',template:/*ion-inline-start:"C:\Users\Alex\Desktop\Projects\kh-master-guide-actual\src\app\command-collection\command-collection.html"*/`<!--\n\n  Generated template for the CommandCollectionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Birth By Sleep Command Collection</ion-title>\n\n  </ion-navbar>\n\n  <ion-item>\n\n      <ion-label color="primary">Character</ion-label>\n\n        <ion-select [(ngModel)]="character" interface="popover" (ionChange)="characterChanged()"> \n\n          <ion-option value="Terra">Terra</ion-option>\n\n          <ion-option value="Ventus">Ventus</ion-option>\n\n          <ion-option value="Aqua">Aqua</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n  <div *ngIf="selected.Command !== \'\'" class="selection_div">\n\n    <div class="selection">{{selected.Command}}</div>\n\n  </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="collections">\n\n    <ion-card *ngFor="let g of collectionGroup" class="collection_card">\n\n      <div>\n\n        <div class="collection_title">\n\n          {{g.Group}}\n\n        </div>\n\n        <div id="div{{cmd.Command}}"class="command" *ngFor="let cmd of g.Collection" (click)="selectCommand(cmd)"\n\n        [ngClass]="{ selected_command: cmd.Selected }">\n\n          <img src="./assets/imgs/bbs-melding/{{cmd.Icon}}.png" [ngClass]="{ command_acquired: cmd.Acquired, command_not_acquired: !cmd.Acquired }">\n\n        </div>\n\n      </div>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <div class="selection_div">\n\n    <div class="total"><span class="left_side"></span><span class="middle">Total <span>{{acquiredCommands.length}}/{{numCommands}}</span></span><span class="right_side"></span></div>\n\n  </div>\n\n</ion-footer>`/*ion-inline-end:"C:\Users\Alex\Desktop\Projects\kh-master-guide-actual\src\app\command-collection\command-collection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__core_command_service__["a" /* CommandService */], __WEBPACK_IMPORTED_MODULE_6__core_storage_service__["a" /* StorageService */]])
    ], CommandCollectionPage);
    return CommandCollectionPage;
}());

//# sourceMappingURL=command-collection.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevelopmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DevelopmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DevelopmentPage = (function () {
    function DevelopmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            { title: 'First Button', data: 'First-content', activeGroup: 'NotActiveGroup' },
            { title: 'Second Button', data: 'Second-content', activeGroup: 'NotActiveGroup' },
            { title: 'Third Button', data: 'Third-content', activeGroup: 'NotActiveGroup' }
        ];
        this.activeGroup = 'NotActiveGroup';
        this.scrollContentGroup = 'Expanded';
    }
    DevelopmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevelopmentPage');
    };
    DevelopmentPage.prototype.expandItem = function (item) {
        this.activeGroup = this.activeGroup === 'ActiveGroup' ? 'NotActiveGroup' : 'ActiveGroup';
        this.scrollContentGroup = this.scrollContentGroup === 'Expanded' ? 'Collapsed' : 'Expanded';
        // this.items.map(listItem => {
        //   if (item == listItem){
        //     this.activeGroup = listItem.activeGroup === 'ActiveGroup' ? 'NotActiveGroup' : 'ActiveGroup';
        //   }
        //   return listItem;
        // });
        // setTimeout(() => {
        //   this.activeGroup = 'NotActiveGroup';
        // }, 1000)
    };
    DevelopmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-development',template:/*ion-inline-start:"C:\Users\Alex\Desktop\Projects\kh-master-guide-actual\src\app\development\development.html"*/`<!--\n\n  Generated template for the DevelopmentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>development</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding [@expand]="scrollContentGroup">\n\n  <ion-item-group *ngFor="let item of items">\n\n    <button ion-item no-lines (tap)="expandItem(item)">\n\n     <ion-icon item-right name="ios-arrow-down" *ngIf="item.activeGroup === \'NotActiveGroup\'"></ion-icon>\n\n     <ion-icon item-right name="ios-arrow-up" *ngIf="item.activeGroup === \'ActiveGroup\'"></ion-icon>    \n\n    {{item.title}}\n\n   </button>\n\n  </ion-item-group>\n\n    \n\n  <div style="position: absolute; padding-top: 2500px; width: 100%;">\n\n    Hi!!!!\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer [@expand]="activeGroup" class="red"> \n\n  <div>   \n\n   Test\n\n  </div>   \n\n </ion-footer>\n\n\n\n`/*ion-inline-end:"C:\Users\Alex\Desktop\Projects\kh-master-guide-actual\src\app\development\development.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('expand', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('ActiveGroup', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '1', height: '25%', bottom: '00px' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('NotActiveGroup', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '0', height: '0', bottom: '0px', overflow: 'hidden' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('ActiveGroup <=> NotActiveGroup', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('Expanded', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ height: '100%' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('Collapsed', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ height: '75%' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('Expanded <=> Collapsed', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DevelopmentPage);
    return DevelopmentPage;
}());

//# sourceMappingURL=development.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_command_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_storage_service__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bbs_melding_command_filter__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages__["d" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages__["e" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* BbsMeldingPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages__["c" /* DevelopmentPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages__["b" /* CommandCollectionPage */],
                __WEBPACK_IMPORTED_MODULE_10__bbs_melding_command_filter__["a" /* CommandFilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: 'bbs-melding/bbs-melding.module#BbsMeldingPageModule', name: 'BbsMeldingPage', segment: 'bbs-melding', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'command-collection/command-collection.module#CommandCollectionPageModule', name: 'CommandCollectionPage', segment: 'command-collection', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'development/development.module#DevelopmentPageModule', name: 'DevelopmentPage', segment: 'development', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages__["d" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages__["e" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* BbsMeldingPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages__["b" /* CommandCollectionPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages__["c" /* DevelopmentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__core_command_service__["a" /* CommandService */],
                __WEBPACK_IMPORTED_MODULE_7__core_storage_service__["a" /* StorageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionGroup; });
var CollectionGroup = (function () {
    function CollectionGroup() {
    }
    return CollectionGroup;
}());

//# sourceMappingURL=collection-group.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collection; });
var Collection = (function () {
    function Collection() {
        this.Command = '';
        this.Type = '';
        this.Icon = '';
        this.Acquired = false;
        this.Selected = false;
    }
    return Collection;
}());

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcquiredCommand; });
var AcquiredCommand = (function () {
    function AcquiredCommand() {
    }
    return AcquiredCommand;
}());

//# sourceMappingURL=acquired-command.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages__["d" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages__["d" /* HomePage */] },
            { title: 'Birth By Sleep Command Melding', component: __WEBPACK_IMPORTED_MODULE_4__pages__["a" /* BbsMeldingPage */] },
            { title: 'Birth By Sleep Command Collection', component: __WEBPACK_IMPORTED_MODULE_4__pages__["b" /* CommandCollectionPage */] },
            { title: 'Development', component: __WEBPACK_IMPORTED_MODULE_4__pages__["c" /* DevelopmentPage */] },
        ];
        //this.rootPage = BbsMeldingPage;
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Alex\Desktop\Projects\kh-master-guide-actual\src\app\app.html"*/`<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"C:\Users\Alex\Desktop\Projects\kh-master-guide-actual\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Alex\Desktop\Projects\kh-master-guide-actual\src\app\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Simple and Clean</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="menu_text">\n\n    <h3>A tool for all of your Kingdom Hearts needs!</h3>\n\n\n\n    <p>\n\n      Simple and Clean is a quick reference guide for any of the Kingdom Hearts games.\n\n    </p>\n\n\n\n    <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Alex\Desktop\Projects\kh-master-guide-actual\src\app\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Alex\Desktop\Projects\kh-master-guide-actual\src\app\list\list.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Alex\Desktop\Projects\kh-master-guide-actual\src\app\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommandFilterPipe = (function () {
    function CommandFilterPipe() {
    }
    CommandFilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(function (item) { return item.title.indexOf(filter.Ability) !== -1; });
    };
    CommandFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'ability',
            pure: false
        })
    ], CommandFilterPipe);
    return CommandFilterPipe;
}());

//# sourceMappingURL=command-filter.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map