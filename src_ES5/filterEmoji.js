"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterEmoji;

var _emojiList = _interopRequireDefault(require("./emojiList.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filterEmoji(searchText, maxResults) {
  return _emojiList.default.filter(function (emoji) {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }

    if (emoji.keywords.includes(searchText)) {
      return true;
    }

    return false;
  }).slice(0, maxResults);
}