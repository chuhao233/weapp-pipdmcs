"use strict";
const common_vendor = require("../../common/vendor.js");
const pageSize = 8;
const _sfc_main = {
  __name: "select",
  setup(__props) {
    const items = common_vendor.ref([
      // 模拟数据
      { info: "信息1" },
      { info: "信息2" }
      // ...其他信息
    ]);
    const currentPageItems = common_vendor.ref(items.value.slice(0, 8));
    function selectItem(item) {
    }
    function revokeItem(item) {
    }
    let currentPage = 1;
    function nextPage() {
      if (items.value.length > currentPage * pageSize) {
        currentPage++;
        currentPageItems.value = items.value.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      }
    }
    function prevPage() {
      if (currentPage > 1) {
        currentPage--;
        currentPageItems.value = items.value.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(_ctx.currentItems, (item, index, i0) => {
          return {
            a: common_vendor.t(item.info),
            b: common_vendor.o(($event) => selectItem(), index),
            c: common_vendor.o(($event) => revokeItem(), index),
            d: index
          };
        }),
        b: common_vendor.o(prevPage),
        c: common_vendor.o(nextPage)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bb29bc01"]]);
wx.createPage(MiniProgramPage);
