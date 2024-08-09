<template>
  <view class="container">
    <view class="exam-list">
      <view 
        v-for="exam in exams" 
        :key="exam.id" 
        class="exam-item" 
        @click="viewDetail(exam)"
      >
        <text class="exam-time">{{ exam.date }}</text>
        <text class="exam-location">{{ exam.address }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

// 假设exams是从服务器获取或本地存储读取的监考信息数组
const exams = ref([
  // ... 这里是从服务器获取的或本地存储读取的监考信息数组 ...
]);

// 查看详细监考信息的方法
const viewDetail = (exam) => {
  // 这里可以是跳转到另一个页面，或者弹出一个模态框展示详细信息
  console.log('查看详细监考信息：', exam);
  // 例如，使用uni.navigateTo跳转到详情页面
  // uni.navigateTo({
  //   url: `/path/to/detail/page?examId=${exam.id}`
  // });
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.exam-list {
  /* 你的样式定义 */
}

.exam-item {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.exam-time {
  /* 时间样式定义 */
}

.exam-location {
  /* 地点样式定义 */
}
</style>