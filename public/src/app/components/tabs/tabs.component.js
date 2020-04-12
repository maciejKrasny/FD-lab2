"use strict";
/**
 * The main component that renders single TabComponent
 * instances.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tab_component_1 = require("./tab.component");
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    // contentChildren are set
    TabsComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    __decorate([
        core_1.ContentChildren(tab_component_1.TabComponent),
        __metadata("design:type", core_1.QueryList)
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'tabs',
            template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\"  class=\"nav-item\">\n        <a class=\"nav-link\" [class.active]=\"tab.active\" href=\"#\">{{tab.tabTitle}}</a>\n        <div>{{tab.title}}</div>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  ",
            styles: [
                "\n    .tab-close {\n      color: gray;\n      text-align: right;\n      cursor: pointer;\n    }\n    "
            ]
        })
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map