"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "person",
  setup(__props) {
    const user = common_vendor.reactive({
      name: "",
      gender: null
    });
    const selections = common_vendor.reactive([
      { info: "示例信息1" },
      { info: "示例信息2" }
      // ...其他信息
    ]);
    function updateProfile() {
      console.log("更新用户信息：", user);
    }
    function revokeSelection(index) {
      selections.splice(index, 1);
      console.log("撤销选择的信息：", selections);
    }
    function handleGenderChange(event) {
      user.gender = event.target.value;
    }
    return (_ctx, _cache) => {
      return {
        a: user.name,
        b: common_vendor.o(($event) => user.name = $event.detail.value),
        c: common_vendor.o(handleGenderChange),
        d: common_vendor.o(updateProfile),
        e: common_vendor.f(selections, (item, index, i0) => {
          return {
            a: common_vendor.t(item.info),
            b: common_vendor.o(($event) => revokeSelection(index), index),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-23e4402d"]]);
wx.createPage(MiniProgramPage);
