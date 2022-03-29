exports.id = 7918;
exports.ids = [7918];
exports.modules = {

/***/ 6086:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumbsContainer": "breadcrumbsContainer_WRkM",
	"breadcrumbsItemLink": "breadcrumbsItemLink_vHGD"
};


/***/ }),

/***/ 524:
/***/ ((module) => {

// Exports
module.exports = {
	"docItemContainer": "docItemContainer_JZb3",
	"docItemCol": "docItemCol_W6Ai",
	"tocMobile": "tocMobile_gUCM"
};


/***/ }),

/***/ 268:
/***/ ((module) => {

// Exports
module.exports = {
	"lastUpdated": "lastUpdated_CcOx"
};


/***/ }),

/***/ 2261:
/***/ ((module) => {

// Exports
module.exports = {
	"anchorWithStickyNavbar": "anchorWithStickyNavbar_CmOh",
	"anchorWithHideOnScrollNavbar": "anchorWithHideOnScrollNavbar_FyGl"
};


/***/ }),

/***/ 3510:
/***/ ((module) => {

// Exports
module.exports = {
	"iconEdit": "iconEdit_A3FR"
};


/***/ }),

/***/ 4126:
/***/ ((module) => {

// Exports
module.exports = {
	"tableOfContents": "tableOfContents_XtXF",
	"docItemContainer": "docItemContainer_itJt"
};


/***/ }),

/***/ 1987:
/***/ ((module) => {

// Exports
module.exports = {
	"tocCollapsible": "tocCollapsible_X62w",
	"tocCollapsibleButton": "tocCollapsibleButton_dcqo",
	"tocCollapsibleContent": "tocCollapsibleContent_abmw",
	"tocCollapsibleExpanded": "tocCollapsibleExpanded_AViX"
};


/***/ }),

/***/ 4469:
/***/ ((module) => {

// Exports
module.exports = {
	"tag": "tag_CnFR",
	"tagRegular": "tagRegular_saYr",
	"tagWithCount": "tagWithCount_h5KC"
};


/***/ }),

/***/ 8502:
/***/ ((module) => {

// Exports
module.exports = {
	"tags": "tags_yMvz",
	"tag": "tag_qgeN"
};


/***/ }),

/***/ 1698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__(6687);
// EXTERNAL MODULE: ./.yarn/cache/clsx-npm-1.1.1-362bec0598-ff05265032.zip/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6355);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-core-virtual-cc51d5ad24/0/cache/@docusaurus-core-npm-2.0.0-beta.17-aaa4ede5fb-bdfcfcf59b.zip/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(6329);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-core-virtual-cc51d5ad24/0/cache/@docusaurus-core-npm-2.0.0-beta.17-aaa4ede5fb-bdfcfcf59b.zip/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(7910);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/PaginatorNavLink/index.js


function PaginatorNavLink(props) {
  const { permalink, title, subLabel } = props;
  return /* @__PURE__ */ react.createElement(Link["default"], {
    className: "pagination-nav__link",
    to: permalink
  }, subLabel && /* @__PURE__ */ react.createElement("div", {
    className: "pagination-nav__sublabel"
  }, subLabel), /* @__PURE__ */ react.createElement("div", {
    className: "pagination-nav__label"
  }, title));
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocPaginator/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));



function DocPaginator(props) {
  const { previous, next } = props;
  return /* @__PURE__ */ react.createElement("nav", {
    className: "pagination-nav docusaurus-mt-lg",
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.docs.paginator.navAriaLabel",
      message: "Docs pages navigation",
      description: "The ARIA label for the docs pagination"
    })
  }, /* @__PURE__ */ react.createElement("div", {
    className: "pagination-nav__item"
  }, previous && /* @__PURE__ */ react.createElement(PaginatorNavLink, __spreadProps(__spreadValues({}, previous), {
    subLabel: /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
      id: "theme.docs.paginator.previous",
      description: "The label used to navigate to the previous doc"
    }, "Previous")
  }))), /* @__PURE__ */ react.createElement("div", {
    className: "pagination-nav__item pagination-nav__item--next"
  }, next && /* @__PURE__ */ react.createElement(PaginatorNavLink, __spreadProps(__spreadValues({}, next), {
    subLabel: /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
      id: "theme.docs.paginator.next",
      description: "The label used to navigate to the next doc"
    }, "Next")
  }))));
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-core-virtual-cc51d5ad24/0/cache/@docusaurus-core-npm-2.0.0-beta.17-aaa4ede5fb-bdfcfcf59b.zip/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(1803);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-plugin-content-docs-virtual-a8e0632bf5/0/cache/@docusaurus-plugin-content-docs-npm-2.0.0-beta.17-a9367f09db-15c30d9613.zip/node_modules/@docusaurus/plugin-content-docs/lib/client/index.js
var client = __webpack_require__(5828);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-common-virtual-fd80b268dd/0/cache/@docusaurus-theme-common-npm-2.0.0-beta.17-e1f219c0b4-34689e4a9a.zip/node_modules/@docusaurus/theme-common/lib/index.js + 40 modules
var lib = __webpack_require__(7042);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionBanner/index.js
var DocVersionBanner_defProp = Object.defineProperty;
var DocVersionBanner_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DocVersionBanner_hasOwnProp = Object.prototype.hasOwnProperty;
var DocVersionBanner_propIsEnum = Object.prototype.propertyIsEnumerable;
var DocVersionBanner_defNormalProp = (obj, key, value) => key in obj ? DocVersionBanner_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DocVersionBanner_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DocVersionBanner_hasOwnProp.call(b, prop))
      DocVersionBanner_defNormalProp(a, prop, b[prop]);
  if (DocVersionBanner_getOwnPropSymbols)
    for (var prop of DocVersionBanner_getOwnPropSymbols(b)) {
      if (DocVersionBanner_propIsEnum.call(b, prop))
        DocVersionBanner_defNormalProp(a, prop, b[prop]);
    }
  return a;
};







function UnreleasedVersionLabel({ siteTitle, versionMetadata }) {
  return /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.docs.versions.unreleasedVersionLabel",
    description: "The label used to tell the user that he's browsing an unreleased doc version",
    values: {
      siteTitle,
      versionLabel: /* @__PURE__ */ react.createElement("b", null, versionMetadata.label)
    }
  }, "This is unreleased documentation for {siteTitle} {versionLabel} version.");
}
function UnmaintainedVersionLabel({ siteTitle, versionMetadata }) {
  return /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.docs.versions.unmaintainedVersionLabel",
    description: "The label used to tell the user that he's browsing an unmaintained doc version",
    values: {
      siteTitle,
      versionLabel: /* @__PURE__ */ react.createElement("b", null, versionMetadata.label)
    }
  }, "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.");
}
const BannerLabelComponents = {
  unreleased: UnreleasedVersionLabel,
  unmaintained: UnmaintainedVersionLabel
};
function BannerLabel(props) {
  const BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
  return /* @__PURE__ */ react.createElement(BannerLabelComponent, DocVersionBanner_spreadValues({}, props));
}
function LatestVersionSuggestionLabel({ versionLabel, to, onClick }) {
  return /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.docs.versions.latestVersionSuggestionLabel",
    description: "The label used to tell the user to check the latest version",
    values: {
      versionLabel,
      latestVersionLink: /* @__PURE__ */ react.createElement("b", null, /* @__PURE__ */ react.createElement(Link["default"], {
        to,
        onClick
      }, /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
        id: "theme.docs.versions.latestVersionLinkLabel",
        description: "The label used for the latest version suggestion link label"
      }, "latest version")))
    }
  }, "For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).");
}
function DocVersionBannerEnabled({ className, versionMetadata }) {
  const {
    siteConfig: { title: siteTitle }
  } = (0,useDocusaurusContext["default"])();
  const { pluginId } = (0,client/* useActivePlugin */.gA)({
    failfast: true
  });
  const getVersionMainDoc = (version) => version.docs.find((doc) => doc.id === version.mainDocId);
  const { savePreferredVersionName } = (0,lib/* useDocsPreferredVersion */.J)(pluginId);
  const { latestDocSuggestion, latestVersionSuggestion } = (0,client/* useDocVersionSuggestions */.Jo)(pluginId);
  const latestVersionSuggestedDoc = latestDocSuggestion != null ? latestDocSuggestion : getVersionMainDoc(latestVersionSuggestion);
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(className, lib/* ThemeClassNames.docs.docVersionBanner */.kM.docs.docVersionBanner, "alert alert--warning margin-bottom--md"),
    role: "alert"
  }, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(BannerLabel, {
    siteTitle,
    versionMetadata
  })), /* @__PURE__ */ react.createElement("div", {
    className: "margin-top--md"
  }, /* @__PURE__ */ react.createElement(LatestVersionSuggestionLabel, {
    versionLabel: latestVersionSuggestion.label,
    to: latestVersionSuggestedDoc.path,
    onClick: () => savePreferredVersionName(latestVersionSuggestion.name)
  })));
}
function DocVersionBanner({ className }) {
  const versionMetadata = (0,lib/* useDocsVersion */.E6)();
  if (versionMetadata.banner) {
    return /* @__PURE__ */ react.createElement(DocVersionBannerEnabled, {
      className,
      versionMetadata
    });
  }
  return null;
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionBadge/index.js




function DocVersionBadge({ className }) {
  const versionMetadata = (0,lib/* useDocsVersion */.E6)();
  if (versionMetadata.badge) {
    return /* @__PURE__ */ react.createElement("span", {
      className: (0,clsx_m/* default */.Z)(className, lib/* ThemeClassNames.docs.docVersionBadge */.kM.docs.docVersionBadge, "badge badge--secondary")
    }, /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
      id: "theme.docs.versionBadge.label",
      values: {
        versionLabel: versionMetadata.label
      }
    }, "Version: {versionLabel}"));
  }
  return null;
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(9428);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/index.js



function LastUpdatedAtDate({ lastUpdatedAt, formattedLastUpdatedAt }) {
  return /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.lastUpdated.atDate",
    description: "The words used to describe on which date a page has been last updated",
    values: {
      date: /* @__PURE__ */ react.createElement("b", null, /* @__PURE__ */ react.createElement("time", {
        dateTime: new Date(lastUpdatedAt * 1e3).toISOString()
      }, formattedLastUpdatedAt))
    }
  }, " on {date}");
}
function LastUpdatedByUser({ lastUpdatedBy }) {
  return /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.lastUpdated.byUser",
    description: "The words used to describe by who the page has been last updated",
    values: {
      user: /* @__PURE__ */ react.createElement("b", null, lastUpdatedBy)
    }
  }, " by {user}");
}
function LastUpdated({
  lastUpdatedAt,
  formattedLastUpdatedAt,
  lastUpdatedBy
}) {
  return /* @__PURE__ */ react.createElement("span", {
    className: lib/* ThemeClassNames.common.lastUpdated */.kM.common.lastUpdated
  }, /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.lastUpdated.lastUpdatedAtBy",
    description: "The sentence used to display when a page has been last updated, and by who",
    values: {
      atDate: lastUpdatedAt && formattedLastUpdatedAt ? /* @__PURE__ */ react.createElement(LastUpdatedAtDate, {
        lastUpdatedAt,
        formattedLastUpdatedAt
      }) : "",
      byUser: lastUpdatedBy ? /* @__PURE__ */ react.createElement(LastUpdatedByUser, {
        lastUpdatedBy
      }) : ""
    }
  }, "Last updated{atDate}{byUser}"),  false && /* @__PURE__ */ 0);
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/styles.module.css
var styles_module = __webpack_require__(3510);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
var IconEdit_defProp = Object.defineProperty;
var IconEdit_getOwnPropSymbols = Object.getOwnPropertySymbols;
var IconEdit_hasOwnProp = Object.prototype.hasOwnProperty;
var IconEdit_propIsEnum = Object.prototype.propertyIsEnumerable;
var IconEdit_defNormalProp = (obj, key, value) => key in obj ? IconEdit_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var IconEdit_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (IconEdit_hasOwnProp.call(b, prop))
      IconEdit_defNormalProp(a, prop, b[prop]);
  if (IconEdit_getOwnPropSymbols)
    for (var prop of IconEdit_getOwnPropSymbols(b)) {
      if (IconEdit_propIsEnum.call(b, prop))
        IconEdit_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (IconEdit_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && IconEdit_getOwnPropSymbols)
    for (var prop of IconEdit_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && IconEdit_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



function IconEdit(_a) {
  var _b = _a, { className } = _b, restProps = __objRest(_b, ["className"]);
  return /* @__PURE__ */ react.createElement("svg", IconEdit_spreadValues({
    fill: "currentColor",
    height: "20",
    width: "20",
    viewBox: "0 0 40 40",
    className: (0,clsx_m/* default */.Z)((styles_module_default()).iconEdit, className),
    "aria-hidden": "true"
  }, restProps), /* @__PURE__ */ react.createElement("g", null, /* @__PURE__ */ react.createElement("path", {
    d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
  })));
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js




function EditThisPage({ editUrl }) {
  return /* @__PURE__ */ react.createElement("a", {
    href: editUrl,
    target: "_blank",
    rel: "noreferrer noopener",
    className: lib/* ThemeClassNames.common.editThisPage */.kM.common.editThisPage
  }, /* @__PURE__ */ react.createElement(IconEdit, null), /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.common.editThisPage",
    description: "The link label to edit the current page"
  }, "Edit this page"));
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/styles.module.css
var Tag_styles_module = __webpack_require__(4469);
var Tag_styles_module_default = /*#__PURE__*/__webpack_require__.n(Tag_styles_module);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/index.js




function Tag(props) {
  const { permalink, name, count } = props;
  return /* @__PURE__ */ react.createElement(Link["default"], {
    href: permalink,
    className: (0,clsx_m/* default */.Z)((Tag_styles_module_default()).tag, {
      [(Tag_styles_module_default()).tagRegular]: !count,
      [(Tag_styles_module_default()).tagWithCount]: count
    })
  }, name, count && /* @__PURE__ */ react.createElement("span", null, count));
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/styles.module.css
var TagsListInline_styles_module = __webpack_require__(8502);
var TagsListInline_styles_module_default = /*#__PURE__*/__webpack_require__.n(TagsListInline_styles_module);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js





function TagsListInline({ tags }) {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.tags.tagsListLabel",
    description: "The label alongside a tag list"
  }, "Tags:")), /* @__PURE__ */ react.createElement("ul", {
    className: (0,clsx_m/* default */.Z)((TagsListInline_styles_module_default()).tags, "padding--none", "margin-left--sm")
  }, tags.map(({ label, permalink: tagPermalink }) => /* @__PURE__ */ react.createElement("li", {
    key: tagPermalink,
    className: (TagsListInline_styles_module_default()).tag
  }, /* @__PURE__ */ react.createElement(Tag, {
    name: label,
    permalink: tagPermalink
  })))));
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocItemFooter/styles.module.css
var DocItemFooter_styles_module = __webpack_require__(268);
var DocItemFooter_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocItemFooter_styles_module);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocItemFooter/index.js
var DocItemFooter_defProp = Object.defineProperty;
var DocItemFooter_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DocItemFooter_hasOwnProp = Object.prototype.hasOwnProperty;
var DocItemFooter_propIsEnum = Object.prototype.propertyIsEnumerable;
var DocItemFooter_defNormalProp = (obj, key, value) => key in obj ? DocItemFooter_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DocItemFooter_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DocItemFooter_hasOwnProp.call(b, prop))
      DocItemFooter_defNormalProp(a, prop, b[prop]);
  if (DocItemFooter_getOwnPropSymbols)
    for (var prop of DocItemFooter_getOwnPropSymbols(b)) {
      if (DocItemFooter_propIsEnum.call(b, prop))
        DocItemFooter_defNormalProp(a, prop, b[prop]);
    }
  return a;
};







function TagsRow(props) {
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docFooterTagsRow */.kM.docs.docFooterTagsRow, "row margin-bottom--sm")
  }, /* @__PURE__ */ react.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ react.createElement(TagsListInline, DocItemFooter_spreadValues({}, props))));
}
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt
}) {
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docFooterEditMetaRow */.kM.docs.docFooterEditMetaRow, "row")
  }, /* @__PURE__ */ react.createElement("div", {
    className: "col"
  }, editUrl && /* @__PURE__ */ react.createElement(EditThisPage, {
    editUrl
  })), /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("col", (DocItemFooter_styles_module_default()).lastUpdated)
  }, (lastUpdatedAt || lastUpdatedBy) && /* @__PURE__ */ react.createElement(LastUpdated, {
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy
  })));
}
function DocItemFooter(props) {
  const { content: DocContent } = props;
  const { metadata } = DocContent;
  const { editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy, tags } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return /* @__PURE__ */ react.createElement("footer", {
    className: (0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docFooter */.kM.docs.docFooter, "docusaurus-mt-lg")
  }, canDisplayTagsRow && /* @__PURE__ */ react.createElement(TagsRow, {
    tags
  }), canDisplayEditMetaRow && /* @__PURE__ */ react.createElement(EditMetaRow, {
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
    formattedLastUpdatedAt
  }));
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/TOCItems/index.js
var TOCItems_defProp = Object.defineProperty;
var TOCItems_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TOCItems_hasOwnProp = Object.prototype.hasOwnProperty;
var TOCItems_propIsEnum = Object.prototype.propertyIsEnumerable;
var TOCItems_defNormalProp = (obj, key, value) => key in obj ? TOCItems_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TOCItems_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TOCItems_hasOwnProp.call(b, prop))
      TOCItems_defNormalProp(a, prop, b[prop]);
  if (TOCItems_getOwnPropSymbols)
    for (var prop of TOCItems_getOwnPropSymbols(b)) {
      if (TOCItems_propIsEnum.call(b, prop))
        TOCItems_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var TOCItems_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (TOCItems_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && TOCItems_getOwnPropSymbols)
    for (var prop of TOCItems_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && TOCItems_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};


function TOCItemList({ toc, className, linkClassName, isChild }) {
  if (!toc.length) {
    return null;
  }
  return /* @__PURE__ */ react.createElement("ul", {
    className: isChild ? void 0 : className
  }, toc.map((heading) => /* @__PURE__ */ react.createElement("li", {
    key: heading.id
  }, /* @__PURE__ */ react.createElement("a", {
    href: `#${heading.id}`,
    className: linkClassName != null ? linkClassName : void 0,
    dangerouslySetInnerHTML: {
      __html: heading.value
    }
  }), /* @__PURE__ */ react.createElement(TOCItemList, {
    isChild: true,
    toc: heading.children,
    className,
    linkClassName
  }))));
}
function TOCItems(_a) {
  var _b = _a, {
    toc,
    className = "table-of-contents table-of-contents__left-border",
    linkClassName = "table-of-contents__link",
    linkActiveClassName = void 0,
    minHeadingLevel: minHeadingLevelOption,
    maxHeadingLevel: maxHeadingLevelOption
  } = _b, props = TOCItems_objRest(_b, [
    "toc",
    "className",
    "linkClassName",
    "linkActiveClassName",
    "minHeadingLevel",
    "maxHeadingLevel"
  ]);
  const themeConfig = (0,lib/* useThemeConfig */.LU)();
  const minHeadingLevel = minHeadingLevelOption != null ? minHeadingLevelOption : themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel = maxHeadingLevelOption != null ? maxHeadingLevelOption : themeConfig.tableOfContents.maxHeadingLevel;
  const tocTree = (0,lib/* useFilteredAndTreeifiedTOC */.b9)({
    toc,
    minHeadingLevel,
    maxHeadingLevel
  });
  const tocHighlightConfig = (0,react.useMemo)(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel
      };
    }
    return void 0;
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);
  (0,lib/* useTOCHighlight */.Si)(tocHighlightConfig);
  return /* @__PURE__ */ react.createElement(TOCItemList, TOCItems_spreadValues({
    toc: tocTree,
    className,
    linkClassName
  }, props));
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/styles.module.css
var TOC_styles_module = __webpack_require__(4126);
var TOC_styles_module_default = /*#__PURE__*/__webpack_require__.n(TOC_styles_module);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js
var TOC_defProp = Object.defineProperty;
var TOC_defProps = Object.defineProperties;
var TOC_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TOC_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TOC_hasOwnProp = Object.prototype.hasOwnProperty;
var TOC_propIsEnum = Object.prototype.propertyIsEnumerable;
var TOC_defNormalProp = (obj, key, value) => key in obj ? TOC_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TOC_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TOC_hasOwnProp.call(b, prop))
      TOC_defNormalProp(a, prop, b[prop]);
  if (TOC_getOwnPropSymbols)
    for (var prop of TOC_getOwnPropSymbols(b)) {
      if (TOC_propIsEnum.call(b, prop))
        TOC_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var TOC_spreadProps = (a, b) => TOC_defProps(a, TOC_getOwnPropDescs(b));
var TOC_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (TOC_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && TOC_getOwnPropSymbols)
    for (var prop of TOC_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && TOC_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";
function TOC(_a) {
  var _b = _a, { className } = _b, props = TOC_objRest(_b, ["className"]);
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)((TOC_styles_module_default()).tableOfContents, "thin-scrollbar", className)
  }, /* @__PURE__ */ react.createElement(TOCItems, TOC_spreadProps(TOC_spreadValues({}, props), {
    linkClassName: LINK_CLASS_NAME,
    linkActiveClassName: LINK_ACTIVE_CLASS_NAME
  })));
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/styles.module.css
var TOCCollapsible_styles_module = __webpack_require__(1987);
var TOCCollapsible_styles_module_default = /*#__PURE__*/__webpack_require__.n(TOCCollapsible_styles_module);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/index.js






function TOCCollapsible({
  toc,
  className,
  minHeadingLevel,
  maxHeadingLevel
}) {
  const { collapsed, toggleCollapsed } = (0,lib/* useCollapsible */.uR)({
    initialState: true
  });
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)((TOCCollapsible_styles_module_default()).tocCollapsible, {
      [(TOCCollapsible_styles_module_default()).tocCollapsibleExpanded]: !collapsed
    }, className)
  }, /* @__PURE__ */ react.createElement("button", {
    type: "button",
    className: (0,clsx_m/* default */.Z)("clean-btn", (TOCCollapsible_styles_module_default()).tocCollapsibleButton),
    onClick: toggleCollapsed
  }, /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.TOCCollapsible.toggleButtonLabel",
    description: "The label used by the button on the collapsible TOC component"
  }, "On this page")), /* @__PURE__ */ react.createElement(lib/* Collapsible */.zF, {
    lazy: true,
    className: (TOCCollapsible_styles_module_default()).tocCollapsibleContent,
    collapsed
  }, /* @__PURE__ */ react.createElement(TOCItems, {
    toc,
    minHeadingLevel,
    maxHeadingLevel
  })));
}

// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
var Heading = __webpack_require__(8614);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/styles.module.css
var DocItem_styles_module = __webpack_require__(524);
var DocItem_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocItem_styles_module);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocBreadcrumbs/styles.module.css
var DocBreadcrumbs_styles_module = __webpack_require__(6086);
var DocBreadcrumbs_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocBreadcrumbs_styles_module);
// EXTERNAL MODULE: ./.yarn/__virtual__/@docusaurus-core-virtual-cc51d5ad24/0/cache/@docusaurus-core-npm-2.0.0-beta.17-aaa4ede5fb-bdfcfcf59b.zip/node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(1305);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocBreadcrumbs/index.js






function BreadcrumbsItemLink({ children, href }) {
  const className = (0,clsx_m/* default */.Z)("breadcrumbs__link", (DocBreadcrumbs_styles_module_default()).breadcrumbsItemLink);
  return href ? /* @__PURE__ */ react.createElement(Link["default"], {
    className,
    href
  }, children) : /* @__PURE__ */ react.createElement("span", {
    className
  }, children);
}
function BreadcrumbsItem({ children, active }) {
  return /* @__PURE__ */ react.createElement("li", {
    className: (0,clsx_m/* default */.Z)("breadcrumbs__item", {
      "breadcrumbs__item--active": active
    })
  }, children);
}
function HomeBreadcrumbItem() {
  const homeHref = (0,useBaseUrl/* default */.Z)("/");
  return /* @__PURE__ */ react.createElement(BreadcrumbsItem, null, /* @__PURE__ */ react.createElement(BreadcrumbsItemLink, {
    href: homeHref
  }, "\u{1F3E0}"));
}
function DocBreadcrumbs() {
  const breadcrumbs = (0,lib/* useSidebarBreadcrumbs */.s1)();
  const homePageRoute = (0,lib/* useHomePageRoute */.Ns)();
  if (!breadcrumbs) {
    return null;
  }
  return /* @__PURE__ */ react.createElement("nav", {
    className: (0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docBreadcrumbs */.kM.docs.docBreadcrumbs, (DocBreadcrumbs_styles_module_default()).breadcrumbsContainer),
    "aria-label": "breadcrumbs"
  }, /* @__PURE__ */ react.createElement("ul", {
    className: "breadcrumbs"
  }, homePageRoute && /* @__PURE__ */ react.createElement(HomeBreadcrumbItem, null), breadcrumbs.map((item, idx) => /* @__PURE__ */ react.createElement(BreadcrumbsItem, {
    key: idx,
    active: idx === breadcrumbs.length - 1
  }, /* @__PURE__ */ react.createElement(BreadcrumbsItemLink, {
    href: item.href
  }, item.label)))));
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@docusaurus-theme-classic-virtual-5690410b22/0/cache/@docusaurus-theme-classic-npm-2.0.0-beta.17-10c688a3f2-ef612eacc6.zip/node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/index.js
var DocItem_defProp = Object.defineProperty;
var DocItem_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DocItem_hasOwnProp = Object.prototype.hasOwnProperty;
var DocItem_propIsEnum = Object.prototype.propertyIsEnumerable;
var DocItem_defNormalProp = (obj, key, value) => key in obj ? DocItem_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DocItem_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DocItem_hasOwnProp.call(b, prop))
      DocItem_defNormalProp(a, prop, b[prop]);
  if (DocItem_getOwnPropSymbols)
    for (var prop of DocItem_getOwnPropSymbols(b)) {
      if (DocItem_propIsEnum.call(b, prop))
        DocItem_defNormalProp(a, prop, b[prop]);
    }
  return a;
};













function DocItem(props) {
  var _a;
  const { content: DocContent } = props;
  const { metadata, frontMatter, assets } = DocContent;
  const {
    keywords,
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel
  } = frontMatter;
  const { description, title } = metadata;
  const image = (_a = assets.image) != null ? _a : frontMatter.image;
  const shouldAddTitle = !hideTitle && typeof DocContent.contentTitle === "undefined";
  const windowSize = (0,lib/* useWindowSize */.iP)();
  const canRenderTOC = !hideTableOfContents && DocContent.toc && DocContent.toc.length > 0;
  const renderTocDesktop = canRenderTOC && (windowSize === "desktop" || windowSize === "ssr");
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Seo/* default */.Z, DocItem_spreadValues({}, {
    title,
    description,
    keywords,
    image
  })), /* @__PURE__ */ react.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("col", {
      [(DocItem_styles_module_default()).docItemCol]: !hideTableOfContents
    })
  }, /* @__PURE__ */ react.createElement(DocVersionBanner, null), /* @__PURE__ */ react.createElement("div", {
    className: (DocItem_styles_module_default()).docItemContainer
  }, /* @__PURE__ */ react.createElement("article", null, /* @__PURE__ */ react.createElement(DocBreadcrumbs, null), /* @__PURE__ */ react.createElement(DocVersionBadge, null), canRenderTOC && /* @__PURE__ */ react.createElement(TOCCollapsible, {
    toc: DocContent.toc,
    minHeadingLevel: tocMinHeadingLevel,
    maxHeadingLevel: tocMaxHeadingLevel,
    className: (0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docTocMobile */.kM.docs.docTocMobile, (DocItem_styles_module_default()).tocMobile)
  }), /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docMarkdown */.kM.docs.docMarkdown, "markdown")
  }, shouldAddTitle && /* @__PURE__ */ react.createElement("header", null, /* @__PURE__ */ react.createElement(Heading/* default */.Z, {
    as: "h1"
  }, title)), /* @__PURE__ */ react.createElement(DocContent, null)), /* @__PURE__ */ react.createElement(DocItemFooter, DocItem_spreadValues({}, props))), /* @__PURE__ */ react.createElement(DocPaginator, {
    previous: metadata.previous,
    next: metadata.next
  }))), renderTocDesktop && /* @__PURE__ */ react.createElement("div", {
    className: "col col--3"
  }, /* @__PURE__ */ react.createElement(TOC, {
    toc: DocContent.toc,
    minHeadingLevel: tocMinHeadingLevel,
    maxHeadingLevel: tocMaxHeadingLevel,
    className: lib/* ThemeClassNames.docs.docTocDesktop */.kM.docs.docTocDesktop
  }))));
}


/***/ }),

/***/ 8614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6687);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6355);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6329);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7042);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2261);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





function AnchorHeading(_a) {
  var _b = _a, { as: As, id } = _b, props = __objRest(_b, ["as", "id"]);
  const {
    navbar: { hideOnScroll }
  } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .LU)();
  if (!id) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(As, __spreadValues({}, props));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(As, __spreadProps(__spreadValues({}, props), {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("anchor", {
      [(_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().anchorWithHideOnScrollNavbar)]: hideOnScroll,
      [(_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().anchorWithStickyNavbar)]: !hideOnScroll
    }),
    id
  }), props.children, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "hash-link",
    href: `#${id}`,
    title: (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({
      id: "theme.common.headingLinkTitle",
      message: "Direct link to heading",
      description: "Title for link to heading"
    })
  }, "\u200B"));
}
function Heading(_c) {
  var _d = _c, { as } = _d, props = __objRest(_d, ["as"]);
  if (as === "h1") {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", __spreadProps(__spreadValues({}, props), {
      id: void 0
    }), props.children);
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AnchorHeading, __spreadValues({
    as
  }, props));
}


/***/ })

};
;