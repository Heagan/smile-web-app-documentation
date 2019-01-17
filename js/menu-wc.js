'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">phone-app documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/AppMaterialModule.html" data-type="entity-link">AppMaterialModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-AppModule-1b35cbc8fc0e036493252fb321947d15"' : 'data-target="#xs-components-links-module-AppModule-1b35cbc8fc0e036493252fb321947d15"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-AppModule-1b35cbc8fc0e036493252fb321947d15"' : 'id="xs-components-links-module-AppModule-1b35cbc8fc0e036493252fb321947d15"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/CheckInViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CheckInViewComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/GoalFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GoalFormComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/GoalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GoalsComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/GraphComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GraphComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/InviteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">InviteComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/LcentreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LcentreComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/LearnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LearnComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/NotesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotesComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ProfileCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileCardComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/QuotesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuotesComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/SigninComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SigninComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/TodaysActivityViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TodaysActivityViewComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"') + '>\n                <span class="icon ion-ios-paper"></span>\n                <span>Classes</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"') + '>\n                \n                    <li class="link">\n                        <a href="classes/CheckinReturn.html" data-type="entity-link">CheckinReturn</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Goal.html" data-type="entity-link">Goal</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/LearnCard.html" data-type="entity-link">LearnCard</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/MyErrorStateMatcher.html" data-type="entity-link">MyErrorStateMatcher</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/MyErrorStateMatcher-1.html" data-type="entity-link">MyErrorStateMatcher</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/MyErrorStateMatcher-2.html" data-type="entity-link">MyErrorStateMatcher</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Note.html" data-type="entity-link">Note</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SignUpDetails.html" data-type="entity-link">SignUpDetails</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' + (isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"') + '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"') + '>\n                        \n                            <li class="link">\n                                <a href="injectables/APIService.html" data-type="entity-link">APIService</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                 ' + (isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"') + '>\n            <span class="icon ion-ios-lock"></span>\n            <span>Guards</span>\n            <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n                ' + (isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"') + '>\n            \n                <li class="link">\n                    <a href="guards/NeedAuthGuard.html" data-type="entity-link">NeedAuthGuard</a>\n                </li>\n            \n            </ul>\n            </li>\n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                ' + (isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"') + '>\n                <span class="icon ion-md-information-circle-outline"></span>\n                <span>Interfaces</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"') + '>\n                \n                    <li class="link">\n                        <a href="interfaces/CompletedGoalInfoReturn.html" data-type="entity-link">CompletedGoalInfoReturn</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/DefaultReturn.html" data-type="entity-link">DefaultReturn</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/GoalInfoReturn.html" data-type="entity-link">GoalInfoReturn</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/LoginReturnDetails.html" data-type="entity-link">LoginReturnDetails</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/MotivMessReturn.html" data-type="entity-link">MotivMessReturn</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/NoteReturnDetails.html" data-type="entity-link">NoteReturnDetails</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/NotiCreate.html" data-type="entity-link">NotiCreate</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/NotiReturn.html" data-type="entity-link">NotiReturn</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SignUpReturn.html" data-type="entity-link">SignUpReturn</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/UserFields.html" data-type="entity-link">UserFields</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                \n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n            <li class="chapter">\n                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>\n            </li>\n            \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));