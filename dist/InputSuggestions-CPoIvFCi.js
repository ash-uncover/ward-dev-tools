import { f as V, j as r, a as c, p as S, d as w, b as P, s as g, m as x, L as v, c as y, e as R, g as O, D as L, h as D, i as F, F as A, B as I, I as b, k as f, R as G, l as H, n as E, o as $, q as N, r as B } from "./index-DpwrwGb4.js";
const M = (n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function _(n, e, t, s) {
  return n.replaceAll(new RegExp(M(e), `${s ? "i" : ""}g`), t);
}
function z(n, e) {
  if (!n || !e) return n;
  const t = (l) => {
    const [a, d] = l.split("");
    for (; n.indexOf(l) >= 0 || e.indexOf(l) >= 0; ) l = `${a}${l}${d}`;
    return l;
  }, s = t("12"), i = t("34");
  let o = V(_(n, e, (l) => `${s}${l}${i}`, !0));
  return [[s, "<b>"], [i, "</b>"]].forEach(([l, a]) => {
    o = _(o, l, a, !1);
  }), o;
}
function q(n, e) {
  const t = (n == null ? void 0 : n.listItemContent) || U;
  return r("li", { part: "native-li", "data-sap-focus-ref": !0, tabindex: this._effectiveTabIndex, class: this.classes.main, draggable: this.movable, role: e == null ? void 0 : e.role, title: e == null ? void 0 : e.title, onFocusIn: this._onfocusin, onKeyUp: this._onkeyup, onKeyDown: this._onkeydown, onClick: this._onclick, children: t.call(this) });
}
function U() {
  return r("div", { part: "content", id: `${this._id}-content`, class: "ui5-li-content", children: r("div", { class: "ui5-li-text-wrapper", children: r("span", { part: "title", class: "ui5-li-title", children: r("slot", {}) }) }) });
}
function K() {
  return [q.call(this, { listItemContent: W }, { role: "option" })];
}
function W() {
  return r("div", { part: "content", id: "content", class: "ui5-li-content", children: c("div", { class: "ui5-li-text-wrapper", children: [r("span", { part: "title", className: "ui5-li-title", dangerouslySetInnerHTML: { __html: this.markupText } }), this.additionalText && r("span", { part: "additional-text", class: "ui5-li-additional-text", children: this.additionalText })] }) });
}
S("@ui5/webcomponents-theming", "sap_horizon", async () => w);
S("@ui5/webcomponents", "sap_horizon", async () => P);
const X = `:host([ui5-suggestion-item]){height:auto;min-height:var(--_ui5-v2-9-0_list_item_base_height)}:host([ui5-suggestion-item]) .ui5-li-root{min-height:var(--_ui5-v2-9-0_list_item_base_height)}:host([ui5-suggestion-item]) .ui5-li-content{padding-bottom:.875rem;padding-top:.875rem;box-sizing:border-box}
`;
var p = function(n, e, t, s) {
  var i = arguments.length, o = i < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, t) : s, l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(n, e, t, s);
  else for (var a = n.length - 1; a >= 0; a--) (l = n[a]) && (o = (i < 3 ? l(o) : i > 3 ? l(e, t, o) : l(e, t)) || o);
  return i > 3 && o && Object.defineProperty(e, t, o), o;
};
let h = class extends v {
  constructor() {
    super(...arguments), this.markupText = "";
  }
  onEnterDOM() {
    y() && this.setAttribute("desktop", "");
  }
  get _effectiveTabIndex() {
    return -1;
  }
};
p([
  g()
], h.prototype, "text", void 0);
p([
  g()
], h.prototype, "additionalText", void 0);
p([
  g()
], h.prototype, "markupText", void 0);
h = p([
  x({
    tag: "ui5-suggestion-item",
    template: K,
    styles: [v.styles, X]
  })
], h);
h.define();
function j(n) {
  const e = (n == null ? void 0 : n.items) || J;
  return c("ul", { role: "group", class: "ui5-group-li-root", onDragEnter: this._ondragenter, onDragOver: this._ondragover, onDrop: this._ondrop, onDragLeave: this._ondragleave, children: [this.hasHeader && r(O, { focused: this.focused, part: "header", accessibleRole: R.Group, children: this.hasFormattedHeader ? r("slot", { name: "header" }) : this.headerText }), e.call(this), r(L, { orientation: "Horizontal", ownerReference: this })] });
}
function J() {
  return r("slot", {});
}
var T = function(n, e, t, s) {
  var i = arguments.length, o = i < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, t) : s, l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(n, e, t, s);
  else for (var a = n.length - 1; a >= 0; a--) (l = n[a]) && (o = (i < 3 ? l(o) : i > 3 ? l(e, t, o) : l(e, t)) || o);
  return i > 3 && o && Object.defineProperty(e, t, o), o;
};
let m = class extends F {
};
T([
  D({
    default: !0,
    invalidateOnChildChange: !0,
    type: HTMLElement
  })
], m.prototype, "items", void 0);
m = T([
  x({
    tag: "ui5-suggestion-item-group",
    template: j
  })
], m);
m.define();
function Q(n) {
  const e = (n == null ? void 0 : n.suggestionsList) || Y, t = n == null ? void 0 : n.valueStateMessage, s = n == null ? void 0 : n.valueStateMessageInputIcon;
  return c(G, { class: this.classes.popover, hideArrow: !0, preventFocusRestore: !0, preventInitialFocus: !0, placement: "Bottom", horizontalAlign: "Start", tabindex: -1, style: this.styles.suggestionsPopover, onOpen: this._afterOpenPicker, onClose: this._afterClosePicker, onScroll: this._scroll, open: this.open, opener: this, accessibleName: this._popupLabel, children: [this._isPhone && c(A, { children: [c("div", { slot: "header", class: "ui5-responsive-popover-header", children: [c("div", { class: "row", children: [r("span", { children: this._headerTitleText }), r(I, { class: "ui5-responsive-popover-close-btn", icon: $, design: "Transparent", onClick: this._closePicker })] }), r("div", { class: "row", children: r("div", { class: "input-root-phone native-input-wrapper", children: r(b, { class: "ui5-input-inner-phone", type: this.inputType, value: this.value, showClearIcon: this.showClearIcon, placeholder: this.placeholder, onInput: this._handleInput, onChange: this._handleChange }) }) })] }), this.hasValueStateMessage && c("div", { class: this.classes.popoverValueState, style: this.styles.suggestionPopoverHeader, children: [r(f, { class: "ui5-input-value-state-message-icon", name: s == null ? void 0 : s.call(this) }), this.open && (t == null ? void 0 : t.call(this))] })] }), !this._isPhone && this.hasValueStateMessage && c("div", { slot: "header", class: {
    "ui5-responsive-popover-header": !0,
    "ui5-responsive-popover-header--focused": this._isValueStateFocused,
    ...this.classes.popoverValueState
  }, style: this.styles.suggestionPopoverHeader, children: [r(f, { class: "ui5-input-value-state-message-icon", name: s == null ? void 0 : s.call(this) }), this.open && (t == null ? void 0 : t.call(this))] }), e.call(this), this._isPhone && r("div", { slot: "footer", class: "ui5-responsive-popover-footer", children: r(I, { design: "Transparent", onClick: this._closePicker, children: "OK" }) })] });
}
function Y() {
  return r(E, { accessibleRole: H.ListBox, separators: this.suggestionSeparators, selectionMode: "Single", onMouseDown: this.onItemMouseDown, onItemClick: this._handleSuggestionItemPress, onSelectionChange: this._handleSelectionChange, children: r("slot", {}) });
}
class u {
  get template() {
    return Q;
  }
  constructor(e, t, s, i) {
    this.component = e, this.slotName = t, this.handleFocus = i, this.highlight = s, this.selectedItemIndex = -1;
  }
  onUp(e, t) {
    e.preventDefault();
    const s = !this.isOpened && this._hasValueState && t === -1 ? 0 : t;
    return this._handleItemNavigation(!1, s), !0;
  }
  onDown(e, t) {
    e.preventDefault();
    const s = !this.isOpened && this._hasValueState && t === -1 ? 0 : t;
    return this._handleItemNavigation(!0, s), !0;
  }
  onSpace(e) {
    return this._isItemOnTarget() ? (e.preventDefault(), this.onItemSelected(
      this._selectedItem,
      !0
      /* keyboardUsed */
    ), !0) : !1;
  }
  onEnter(e) {
    return this._isGroupItem ? (e.preventDefault(), !1) : this._isItemOnTarget() ? (this.onItemSelected(
      this._selectedItem,
      !0
      /* keyboardUsed */
    ), !0) : !1;
  }
  onPageUp(e) {
    e.preventDefault();
    const t = this.selectedItemIndex - 10 > -1;
    return this._hasValueState && !t ? (this._focusValueState(), !0) : (this._moveItemSelection(this.selectedItemIndex, t ? this.selectedItemIndex -= 10 : this.selectedItemIndex = 0), !0);
  }
  onPageDown(e) {
    e.preventDefault();
    const t = this._getItems(), s = t.length - 1, i = this.selectedItemIndex + 10 <= s;
    return this._hasValueState && !t ? (this._focusValueState(), !0) : (this._moveItemSelection(this.selectedItemIndex, i ? this.selectedItemIndex += 10 : this.selectedItemIndex = s), !0);
  }
  onHome(e) {
    return e.preventDefault(), this._hasValueState ? (this._focusValueState(), !0) : (this._moveItemSelection(this.selectedItemIndex, this.selectedItemIndex = 0), !0);
  }
  onEnd(e) {
    e.preventDefault();
    const t = this._getItems().length - 1;
    return this._hasValueState && !t ? (this._focusValueState(), !0) : (this._moveItemSelection(this.selectedItemIndex, this.selectedItemIndex = t), !0);
  }
  onTab() {
    return this._isItemOnTarget() ? (this.onItemSelected(this._selectedItem, !0), !0) : !1;
  }
  toggle(e, t) {
    (e !== void 0 ? e : !this.isOpened()) ? this._getComponent().open = !0 : this.close(t.preventFocusRestore);
  }
  get _selectedItem() {
    return this._getNonGroupItems().find((e) => e.selected);
  }
  _isScrollable() {
    const e = this._getScrollContainer();
    return e.offsetHeight < e.scrollHeight;
  }
  close(e = !1) {
    const t = this._getItems() && this._getItems()[this.selectedItemIndex];
    this._getComponent().open = !1;
    const s = this._getPicker();
    s.preventFocusRestore = e, s.open = !1, t && t.focused && (t.focused = !1);
  }
  updateSelectedItemPosition(e) {
    this.selectedItemIndex = e;
  }
  onItemSelected(e, t) {
    const s = e, i = this._getNonGroupItems();
    s && (this.accInfo = {
      isGroup: s.hasAttribute("ui5-suggestion-item-group"),
      currentPos: i.indexOf(s) + 1,
      listSize: i.length,
      itemText: s.text || "",
      additionalText: s.additionalText
    }, this._getComponent().onItemSelected(s, t), this._getComponent().open = !1);
  }
  onItemSelect(e) {
    this._getComponent().onItemSelect(e);
  }
  /* Private methods */
  // Note: Split into two separate handlers
  onItemPress(e) {
    let t;
    const s = e.type === "ui5-item-click";
    s && !e.detail.item.selected || this._handledPress && !s || (s && e.detail.item.selected ? (t = e.detail.item, this._handledPress = !0) : t = e.detail.selectedItems[0], this.onItemSelected(
      t,
      !1
      /* keyboardUsed */
    ));
  }
  _onClose() {
    this._handledPress = !1;
  }
  _isItemOnTarget() {
    return this.isOpened() && this.selectedItemIndex !== null && this.selectedItemIndex !== -1 && !this._isGroupItem;
  }
  get _isGroupItem() {
    const e = this._getItems();
    return !e || !e[this.selectedItemIndex] ? !1 : e[this.selectedItemIndex].hasAttribute("ui5-suggestion-item-group");
  }
  isOpened() {
    var e;
    return !!((e = this._getPicker()) != null && e.open);
  }
  _handleItemNavigation(e, t) {
    this.selectedItemIndex = t, this._getItems().length && (e ? this._selectNextItem() : this._selectPreviousItem());
  }
  _selectNextItem() {
    const e = this._getItems().length, t = this.selectedItemIndex;
    if (this._hasValueState && t === -1 && !this.component._isValueStateFocused) {
      this._focusValueState();
      return;
    }
    (t === -1 && !this._hasValueState || this.component._isValueStateFocused) && (this._clearValueStateFocus(), this.selectedItemIndex = -1), !(t !== -1 && t + 1 > e - 1) && this._moveItemSelection(t, ++this.selectedItemIndex);
  }
  _selectPreviousItem() {
    const e = this._getItems(), t = this.selectedItemIndex;
    if (this._hasValueState && t === 0 && !this.component._isValueStateFocused) {
      this.component.hasSuggestionItemSelected = !1, this.component._isValueStateFocused = !0, this.selectedItemIndex = 0, e[0].focused = !1, e[0].hasAttribute("ui5-suggestion-item") && (e[0].selected = !1);
      return;
    }
    if (this.component._isValueStateFocused) {
      this.component.focused = !0, this.component._isValueStateFocused = !1, this.selectedItemIndex = 0;
      return;
    }
    if (!(t === -1 || t === null)) {
      if (t - 1 < 0) {
        (e[t].hasAttribute("ui5-suggestion-item") || e[t].hasAttribute("ui5-suggestion-item-custom")) && (e[t].selected = !1), e[t].focused = !1, this.component.focused = !0, this.component.hasSuggestionItemSelected = !1, this.selectedItemIndex -= 1;
        return;
      }
      this._moveItemSelection(t, --this.selectedItemIndex);
    }
  }
  _moveItemSelection(e, t) {
    const s = this._getItems(), i = s[t], o = s[e], l = this._getNonGroupItems(), a = i.hasAttribute("ui5-suggestion-item-group");
    if (!i)
      return;
    this.component.focused = !1, this._clearValueStateFocus();
    const d = this._getItems()[this.selectedItemIndex];
    if (this.accInfo = {
      isGroup: a,
      currentPos: s.indexOf(i) + 1,
      itemText: (a ? d.headerText : d.text) || ""
    }, (i.hasAttribute("ui5-suggestion-item") || i.hasAttribute("ui5-suggestion-item-custom")) && (this.accInfo.additionalText = i.additionalText || "", this.accInfo.currentPos = l.indexOf(i) + 1, this.accInfo.listSize = l.length), o && (o.focused = !1), (o != null && o.hasAttribute("ui5-suggestion-item") || o != null && o.hasAttribute("ui5-suggestion-item-custom")) && (o.selected = !1), i && (i.focused = !0, a || (i.selected = !0), this.handleFocus && i.focus()), this.component.hasSuggestionItemSelected = !0, this.onItemSelect(i), !this._isItemIntoView(i)) {
      const C = this._isGroupItem ? i.shadowRoot.querySelector("[ui5-li-group-header]") : i;
      this._scrollItemIntoView(C);
    }
  }
  _deselectItems() {
    this._getItems().forEach((t) => {
      t.hasAttribute("ui5-suggestion-item") && (t.selected = !1), t.focused = !1;
    });
  }
  _clearItemFocus() {
    const e = this._getItems().find((t) => t.focused);
    e && (e.focused = !1);
  }
  _isItemIntoView(e) {
    const t = e.getDomRef().getBoundingClientRect(), s = this._getComponent().getDomRef().getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight;
    let o = 0;
    return this._hasValueState && (o = this._getPicker().querySelector("[slot=header]").getBoundingClientRect().height), t.top + u.SCROLL_STEP <= i && t.top >= s.top + o;
  }
  _scrollItemIntoView(e) {
    e.scrollIntoView({
      behavior: "auto",
      block: "nearest",
      inline: "nearest"
    });
  }
  _getScrollContainer() {
    return this._scrollContainer || (this._scrollContainer = this._getPicker().shadowRoot.querySelector(".ui5-popup-content")), this._scrollContainer;
  }
  /**
   * Returns the items in 1D array.
   *
   */
  _getItems() {
    return this._getComponent().getSlottedNodes("suggestionItems").flatMap((t) => t.hasAttribute("ui5-suggestion-item-group") ? [t, ...t.items] : [t]);
  }
  _getNonGroupItems() {
    return this._getItems().filter((e) => !e.hasAttribute("ui5-suggestion-item-group"));
  }
  _getComponent() {
    return this.component;
  }
  _getList() {
    return this._getPicker().querySelector("[ui5-list]");
  }
  _getListWidth() {
    var e;
    return (e = this._getList()) == null ? void 0 : e.offsetWidth;
  }
  _getPicker() {
    return this._getComponent().shadowRoot.querySelector("[ui5-responsive-popover]");
  }
  get itemSelectionAnnounce() {
    if (!this.accInfo)
      return "";
    if (this.accInfo.isGroup)
      return `${u.i18nBundle.getText(N)} ${this.accInfo.itemText}`;
    const e = u.i18nBundle.getText(B, this.accInfo.currentPos || 0, this.accInfo.listSize || 0);
    return `${this.accInfo.additionalText} ${e}`;
  }
  hightlightInput(e, t) {
    return z(e, t);
  }
  get _hasValueState() {
    return this.component.hasValueStateMessage;
  }
  _focusValueState() {
    this.component._isValueStateFocused = !0, this.component.focused = !1, this.component.hasSuggestionItemSelected = !1, this.selectedItemIndex = 0, this.component.value = this.component.typedInValue, this._deselectItems();
  }
  _clearValueStateFocus() {
    this.component._isValueStateFocused = !1;
  }
  _clearSelectedSuggestionAndaccInfo() {
    this.accInfo = void 0, this.selectedItemIndex = 0;
  }
}
u.SCROLL_STEP = 60;
b.SuggestionsClass = u;
export {
  u as default
};
