<template>
  <view>
    <view class="uni-container">
      <!-- 表格组件 -->
      <uni-table 
        ref="table" 
        :loading="state.loading" 
        border 
        stripe 
        type="selection" 
        emptyText="暂无更多数据" 
        @selection-change="selectionChange"
      >
        <!-- 表头 -->
        <uni-tr>
          <uni-th width="150" align="center">课程名称</uni-th>
          <uni-th width="150" align="center">考试时间</uni-th>
          <uni-th width="300" align="center">监考地点</uni-th>
          <uni-th width="150" align="center">监考状态</uni-th>
		  <uni-th width="150" align="center"></uni-th>
        </uni-tr>
        <!-- 表格行 -->
        <uni-tr v-for="(item, index) in state.tableData" :key="index">
          <uni-td>{{ item.date }}</uni-td>
          <uni-td>{{ item.name }}</uni-td>
          <uni-td align="center">{{ item.address }}</uni-td>
		  <uni-id></uni-id>
          <uni-td>
            <view class="uni-group">
              <button class="uni-button" size="mini" type="primary" @click="editItem(item)">修改</button>
              <button class="uni-button" size="mini" type="warn" @click="deleteItem(item)">删除</button>
            </view>
          </uni-td>
        </uni-tr>
      </uni-table>
      <!-- 分页组件 -->
      <uni-pagination 
        show-icon 
        :page-size="state.pageSize" 
        :current="state.pageCurrent" 
        :total="state.total" 
        @change="changePage"
      />
      <!-- 分页导航按钮 -->
      <view class="pagination-controls">
        <button class="uni-button" size="mini" type="default" @click="goToPage(state.pageCurrent - 1)" :disabled="state.pageCurrent <= 1">上一页</button>
        <button class="uni-button" size="mini" type="default" @click="goToPage(state.pageCurrent + 1)" :disabled="state.pageCurrent >= Math.ceil(state.total / state.pageSize)">下一页</button>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue';
import tableData from './tableData.js'; // 确保这个路径是正确的

// 使用 reactive 创建响应式状态
const state = reactive({
  searchVal: '',
  tableData: [],
  pageSize: 10,
  pageCurrent: 1,
  total: 0,
  loading: false,
  selectedIndexs: []
});

// 组件挂载后获取数据
onMounted(() => {
  getData();
});

// 定义获取数据的方法
const getData = () => {
  state.loading = true;
  state.tableData = tableData; // 假设 tableData.js 导出了初始数据
  state.total = state.tableData.length;
  state.loading = false;
};

// 定义修改和删除课程项的方法
const editItem = (/* item */) => {
  // 编辑项的逻辑
};

const deleteItem = (/* item */) => {
  // 删除项的逻辑
};

// 定义分页变化的方法
const changePage = (e) => {
  state.pageCurrent = e.current;
  // 这里可能需要重新请求数据或处理分页逻辑
  getData(); // 重新获取数据
};

// 定义选择变化的方法
const selectionChange = (e) => {
  state.selectedIndexs = e.detail.index;
  console.log('选中的索引:', state.selectedIndexs);
};

// 分页方法
const goToPage = (newPage) => {
  if (newPage > 0 && newPage <= Math.ceil(state.total / state.pageSize)) {
    changePage({ current: newPage }); // 调用 changePage 更新页面
  }
};
</script>

<style scoped>
.uni-group {
  display: flex;
  align-items: center;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

/* 其他样式定义 */
</style>