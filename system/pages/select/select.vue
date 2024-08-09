<template>
  <view>
	  <uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input" @cancel="cancel" @change="change" @clear="clear">
	  </uni-search-bar>
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
          <uni-th width="35rpx" align="center">
            <uni-checkbox 
              :checked="isAllSelected" 
              @change="toggleSelectAll"
            ></uni-checkbox>
          </uni-th>
          <uni-th width="25rpx" align="center">课程名称</uni-th>
          <uni-th width="65rpx" align="center">考试时间</uni-th>
          <uni-th width="20rpx" align="center">监考地点</uni-th>
          <uni-th width="20rpx" align="center">监考状态</uni-th>
        </uni-tr>
        <!-- 表格行 -->
        <uni-tr v-for="(item, index) in state.tableData" :key="index">
          <uni-td>
            <uni-checkbox 
              :checked="isSelected(index)" 
              @change="toggleSelection(index)"
            ></uni-checkbox>
          </uni-td>
          <uni-td>{{ item.name }}</uni-td>
          <uni-td>{{ item.date }}</uni-td>
          <uni-td align="center">{{ item.address }}</uni-td>
          <uni-td align="center">
            <text :class="{ unselectable: isUnselectable(index) }">
              {{ isUnselectable(index) ? '不可选择' : '可选' }}
            </text>
          </uni-td>
        </uni-tr>
      </uni-table>
      <!-- 模态框 -->
      <transition name="modal">
        <div v-if="state.showDialog" class="modal">
          <div class="modal-content">
            <p>你确定选择吗？</p>
            <button @click="confirmSelection">确定</button>
            <button @click="cancelSelection">取消</button>
          </div>
        </div>
      </transition>
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
import { ref, reactive, onMounted } from 'vue';
import tableData from './tableData.js'; // 确保这个路径是正确的

// 使用 reactive 创建响应式状态
const state = reactive({
  // ...其他状态
  tableData: [],
  pageSize: 10,
  pageCurrent: 1,
  total: 0,
  loading: false,
  selectedIndices: [],
  showDialog: false, // 模态框显示状态
  requiredSelectionCount: 2, // 假设每个监考地点需要的监考人数为2
});

// 组件挂载后获取数据
onMounted(() => {
  state.tableData = tableData;
  state.total = state.tableData.length;
});

// 定义选择变化的方法
const selectionChange = (selectedIndex) => {
  toggleSelection(selectedIndex);
};

// 切换选择状态
const toggleSelection = (index) => {
  const isSelected = state.selectedIndices.includes(index);
  if (isSelected) {
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

// 弹出框确认选择
const confirmSelection = () => {
  // 这里可以添加确认选择后的逻辑
  state.showDialog = false;
};

// 弹出框取消选择
const cancelSelection = () => {
  state.selectedIndices = [];
  state.showDialog = false;
};

// 检查是否全选
const isAllSelected = ref(false);

// 切换全选状态
const toggleSelectAll = () => {
  isAllSelected.value = !isAllSelected.value;
  state.selectedIndices = isAllSelected.value ? state.tableData.map((_, index) => index) : [];
  if (isAllSelected.value) {
    state.showDialog = true;
  } else {
    state.showDialog = false;
  }
};

// 检查是否选中
const isSelected = (index) => {
  return state.selectedIndices.includes(index);
};

// 检查是否不可选择
const isUnselectable = (index) => {
  return isSelected(index) && state.selectedIndices.length >= state.requiredSelectionCount;
};

// 分页方法
const changePage = (e) => {
  state.pageCurrent = e.current;
};

const goToPage = (newPage) => {
  if (newPage > 0 && newPage <= Math.ceil(state.total / state.pageSize)) {
    state.pageCurrent = newPage;
  }
};

</script>

<style scoped>
/* 模态框动画 */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.5s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}

/* 模态框样式 */
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

/* 表格和其他组件样式 */
/* ...你的其他样式 */
.unselectable {
  color: red;
  cursor: not-allowed;
}
</style>