<template>
  <view class="personal-center">
    <view class="user-profile">
      <form @submit.prevent="updateProfile">
        <label for="name">姓名:</label>
        <input type="text" id="name" v-model="user.name" placeholder="请输入您的姓名" />

        <label for="gender">性别:</label>
		<select id="gender" @change="handleGenderChange">
			<option value="1">男</option>
			<option value="2">女</option>
		</select>

        <button type="submit">保存</button>
      </form>
    </view>

    <view class="selections">
      <text>已选择信息:</text>
      <table>
        <tr>
          <th>信息项</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in selections" :key="index">
          <td>{{ item.info }}</td>
          <td><button @click="revokeSelection(index)">撤销</button></td>
        </tr>
      </table>
    </view>
  </view>
</template>

<script setup>
import { reactive } from 'vue';

// 直接创建响应式数据，不需要 return
const user = reactive({
  name: '',
  gender: null
});

const selections = reactive([
  { info: '示例信息1' },
  { info: '示例信息2' },
  // ...其他信息
]);

// 直接定义方法，不需要包含在 methods 对象中
function updateProfile() {
  console.log('更新用户信息：', user);
}

function revokeSelection(index) {
  selections.splice(index, 1);
  console.log('撤销选择的信息：', selections);
}

// 使用新的事件处理函数代替 v-model
function handleGenderChange(event) {
  user.gender = event.target.value;
}
</script>

<style lang="scss" scoped>
.personal-center {
  padding: 20px;
}

.user-profile {
  margin-bottom: 20px;
}

.selections table {
  width: 100%;
  border-collapse: collapse;
}

.selections th, .selections td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.selections th {
  background-color: #f2f2f2;
}

.selections button {
  margin: 5px;
}
</style>
