"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    goToSelectPage() {
      common_vendor.index.navigateTo({
        url: "/pages/select/select",
        // 确保路径与实际select页面的路径一致
        success: function() {
          console.log("跳转到select页面成功");
        },
        fail: function(err) {
          console.error("跳转失败", err);
        }
      });
    },
    goToPersonPage() {
      common_vendor.index.navigateTo({
        url: "/pages/person/person",
        // 确保路径与实际person页面的路径一致
        success: function() {
          console.log("跳转到person页面成功");
        },
        fail: function(err) {
          console.error("跳转失败", err);
        }
      });
    },
    goToMyitemPage() {
      common_vendor.index.navigateTo({
        url: "/pages/myitem/myitem",
        // 确保路径与实际person页面的路径一致
        success: function() {
          console.log("跳转到person页面成功");
        },
        fail: function(err) {
          console.error("跳转失败", err);
        }
      });
    },
    goToReleasePage() {
      common_vendor.index.navigateTo({
        url: "/pages/release/release",
        // 确保路径与实际person页面的路径一致
        success: function() {
          console.log("跳转到person页面成功");
        },
        fail: function(err) {
          console.error("跳转失败", err);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goToSelectPage && $options.goToSelectPage(...args)),
    b: common_vendor.o((...args) => $options.goToPersonPage && $options.goToPersonPage(...args)),
    c: common_vendor.o((...args) => $options.goToMyitemPage && $options.goToMyitemPage(...args)),
    d: common_vendor.o((...args) => $options.goToReleasePage && $options.goToReleasePage(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
