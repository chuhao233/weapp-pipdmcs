"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "myitem",
  setup(__props) {
    const exams = common_vendor.ref([
      // ... 这里是从服务器获取的或本地存储读取的监考信息数组 ...
    ]);
    const viewDetail = (exam) => {
      console.log("查看详细监考信息：", exam);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(exams.value, (exam, k0, i0) => {
          return {
            a: common_vendor.t(exam.date),
            b: common_vendor.t(exam.address),
            c: exam.id,
            d: common_vendor.o(($event) => viewDetail(exam), exam.id)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-da3d5191"]]);
wx.createPage(MiniProgramPage);
