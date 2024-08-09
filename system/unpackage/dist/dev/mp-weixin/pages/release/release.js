"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      filePaths: []
      // 存储选择的文件路径
    };
  },
  methods: {
    chooseFile() {
      const that = this;
      common_vendor.wx$1.chooseFile({
        count: 1,
        // 默认为9，设置选择文件数量
        type: "file",
        // 选择文件类型
        success: function(res) {
          if (res.tempFiles.length > 0) {
            const file = res.tempFiles[0];
            that.filePaths.push(file.path);
            that.readFile(file.path);
          }
        },
        fail: function(err) {
          console.log("选择文件失败：", err);
        }
      });
    },
    readFile(filePath) {
      console.log("文件路径：", filePath);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.chooseFile && $options.chooseFile(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
