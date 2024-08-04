<template>
  <view class="container">
    <!-- 头部：搜索栏 -->
    <view class="header">
      <input type="text" placeholder="输入搜索内容" class="search-input" />
    </view>
    
    <!-- 中间部分：表格和操作按钮 -->
    <view class="main-content">
      <table>
        <tr>
          <th>信息项</th>
          <th>选择</th>
          <th>撤销</th>
        </tr>
        <tr v-for="(item, index) in currentItems" :key="index">
          <td>{{ item.info }}</td>
          <td><button @click="selectItem(item)">选择</button></td>
          <td><button @click="revokeItem(item)">撤销</button></td>
        </tr>
      </table>
    </view>

    <!-- 底部：翻页按钮 -->
    <view class="footer">
      <button @click="prevPage">上一页</button>
      <button @click="nextPage">下一页</button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

// 假设这是从服务器获取的总数据列表
const items = ref([
  // 模拟数据
  { info: '信息1' },
  { info: '信息2' },
  // ...其他信息
]);

// 当前页面显示的数据
const currentPageItems = ref(items.value.slice(0, 8));

// 选择和撤销的逻辑
function selectItem(item) {
  // 添加到已选择列表或其他逻辑
}

function revokeItem(item) {
  // 从已选择列表中移除或其他逻辑
}

// 翻页逻辑
const pageSize = 8;
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
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.info-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.info-text {
  flex: 1;
  text-align: center;
}

.picker-item {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.pagination-container {
  position: fixed;  /* 固定位置 */
  left: 0;         /* 左侧对齐 */
  bottom: 0;       /* 底部对齐 */
  width: 100%;     /* 宽度为100% */
  display: flex;   /* 使用Flexbox布局 */
  justify-content: center; /* 按钮水平居中 */
  background-color: #fff; /* 背景颜色，根据需要调整 */
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  padding: 10px 0; /* 按钮与底部的距离 */
}
.search-input {
  width: 100%;         /* 宽度占满其父容器 */
  padding: 10px;       /* 内边距，让文字不会太靠近边框 */
  border: 1px solid #ccc; /* 添加边框，颜色为灰色 */
  border-radius: 4px;  /* 边框圆角 */
  box-sizing: border-box; /* 边框计算在宽度内 */
  outline: none;/* 点击时不显示轮廓 */
 }
button {
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: #007aff;
  color: white;
  cursor: pointer;
}

button:active {
  background-color: #005fcc;
}
</style>
