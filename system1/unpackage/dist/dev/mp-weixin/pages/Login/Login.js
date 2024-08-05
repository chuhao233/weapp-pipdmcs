"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submitLogin(event) {
      event.preventDefault();
      console.log("登录用户名:", this.username);
      console.log("登录密码:", this.password);
      common_vendor.index.navigateTo({ url: "/pages/index/index" });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.username,
    b: common_vendor.o(($event) => $data.username = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: common_vendor.o((...args) => $options.submitLogin && $options.submitLogin(...args)),
    f: common_vendor.o((...args) => _ctx.goToRegister && _ctx.goToRegister(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
