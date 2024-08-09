"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_select_tableData = require("./tableData.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_uni_checkbox = common_vendor.resolveComponent("uni-checkbox");
  const _easycom_uni_th2 = common_vendor.resolveComponent("uni-th");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  const _component_transition = common_vendor.resolveComponent("transition");
  const _component_uni_pagination = common_vendor.resolveComponent("uni-pagination");
  (_easycom_uni_search_bar2 + _component_uni_checkbox + _easycom_uni_th2 + _easycom_uni_tr2 + _easycom_uni_td2 + _easycom_uni_table2 + _component_transition + _component_uni_pagination)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_th = () => "../../uni_modules/uni-table/components/uni-th/uni-th.js";
const _easycom_uni_tr = () => "../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_td = () => "../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_table = () => "../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_th + _easycom_uni_tr + _easycom_uni_td + _easycom_uni_table)();
}
const _sfc_main = {
  __name: "select",
  setup(__props) {
    const state = common_vendor.reactive({
      // ...其他状态
      tableData: [],
      pageSize: 10,
      pageCurrent: 1,
      total: 0,
      loading: false,
      selectedIndices: [],
      showDialog: false,
      // 模态框显示状态
      requiredSelectionCount: 2
      // 假设每个监考地点需要的监考人数为2
    });
    common_vendor.onMounted(() => {
      state.tableData = pages_select_tableData.tableData;
      state.total = state.tableData.length;
    });
    const selectionChange = (selectedIndex) => {
      toggleSelection(selectedIndex);
    };
    const toggleSelection = (index) => {
      const isSelected2 = state.selectedIndices.includes(index);
      if (isSelected2) {
        state.selectedIndices.splice(state.selectedIndices.indexOf(index), 1);
      } else {
        state.selectedIndices.push(index);
      }
      if (state.selectedIndices.length > 0) {
        state.showDialog = true;
      } else {
        state.showDialog = false;
      }
    };
    const confirmSelection = () => {
      state.showDialog = false;
    };
    const cancelSelection = () => {
      state.selectedIndices = [];
      state.showDialog = false;
    };
    const isAllSelected = common_vendor.ref(false);
    const toggleSelectAll = () => {
      isAllSelected.value = !isAllSelected.value;
      state.selectedIndices = isAllSelected.value ? state.tableData.map((_, index) => index) : [];
      if (isAllSelected.value) {
        state.showDialog = true;
      } else {
        state.showDialog = false;
      }
    };
    const isSelected = (index) => {
      return state.selectedIndices.includes(index);
    };
    const isUnselectable = (index) => {
      return isSelected(index) && state.selectedIndices.length >= state.requiredSelectionCount;
    };
    const changePage = (e) => {
      state.pageCurrent = e.current;
    };
    const goToPage = (newPage) => {
      if (newPage > 0 && newPage <= Math.ceil(state.total / state.pageSize)) {
        state.pageCurrent = newPage;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(_ctx.search),
        b: common_vendor.o(_ctx.blur),
        c: common_vendor.o(_ctx.focus),
        d: common_vendor.o(_ctx.input),
        e: common_vendor.o(_ctx.cancel),
        f: common_vendor.o(_ctx.change),
        g: common_vendor.o(_ctx.clear),
        h: common_vendor.o(($event) => _ctx.searchValue = $event),
        i: common_vendor.p({
          focus: true,
          modelValue: _ctx.searchValue
        }),
        j: common_vendor.o(toggleSelectAll),
        k: common_vendor.p({
          checked: isAllSelected.value
        }),
        l: common_vendor.p({
          width: "35rpx",
          align: "center"
        }),
        m: common_vendor.p({
          width: "25rpx",
          align: "center"
        }),
        n: common_vendor.p({
          width: "65rpx",
          align: "center"
        }),
        o: common_vendor.p({
          width: "20rpx",
          align: "center"
        }),
        p: common_vendor.p({
          width: "20rpx",
          align: "center"
        }),
        q: common_vendor.f(state.tableData, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => toggleSelection(index), index),
            b: "bb29bc01-11-" + i0 + "," + ("bb29bc01-10-" + i0),
            c: common_vendor.p({
              checked: isSelected(index)
            }),
            d: "bb29bc01-10-" + i0 + "," + ("bb29bc01-9-" + i0),
            e: common_vendor.t(item.name),
            f: "bb29bc01-12-" + i0 + "," + ("bb29bc01-9-" + i0),
            g: common_vendor.t(item.date),
            h: "bb29bc01-13-" + i0 + "," + ("bb29bc01-9-" + i0),
            i: common_vendor.t(item.address),
            j: "bb29bc01-14-" + i0 + "," + ("bb29bc01-9-" + i0),
            k: common_vendor.t(isUnselectable(index) ? "不可选择" : "可选"),
            l: isUnselectable(index) ? 1 : "",
            m: "bb29bc01-15-" + i0 + "," + ("bb29bc01-9-" + i0),
            n: index,
            o: "bb29bc01-9-" + i0 + ",bb29bc01-1"
          };
        }),
        r: common_vendor.p({
          align: "center"
        }),
        s: common_vendor.p({
          align: "center"
        }),
        t: common_vendor.sr("table", "bb29bc01-1"),
        v: common_vendor.o(selectionChange),
        w: common_vendor.p({
          loading: state.loading,
          border: true,
          stripe: true,
          type: "selection",
          emptyText: "暂无更多数据"
        }),
        x: state.showDialog
      }, state.showDialog ? {
        y: common_vendor.o(confirmSelection),
        z: common_vendor.o(cancelSelection)
      } : {}, {
        A: common_vendor.p({
          name: "modal"
        }),
        B: common_vendor.o(changePage),
        C: common_vendor.p({
          ["show-icon"]: true,
          ["page-size"]: state.pageSize,
          current: state.pageCurrent,
          total: state.total
        }),
        D: common_vendor.o(($event) => goToPage(state.pageCurrent - 1)),
        E: state.pageCurrent <= 1,
        F: common_vendor.o(($event) => goToPage(state.pageCurrent + 1)),
        G: state.pageCurrent >= Math.ceil(state.total / state.pageSize)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bb29bc01"]]);
wx.createPage(MiniProgramPage);
