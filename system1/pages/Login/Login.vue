<template>
  <view class="login-container">
    <view class="login-title">登录</view>
    <form @submit="submitLogin">
      <input class="login-input" type="text" placeholder="用户名" v-model="username" />
      <input class="login-input" type="password" placeholder="密码" v-model="password" />
      <button class="login-button" type="submit">登录</button>
    </form>
    <view class="register-link">
      还没有账号？<button @click="goToRegister">注册</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitLogin(event) {
      event.preventDefault();
      // 这里添加登录逻辑，比如调用API验证用户名和密码
      console.log('用户名：', this.username);
      console.log('密码：', this.password);
      // 假设登录成功
      uni.navigateTo({
        url: '/pages/index/index',
      });
    },
    goToRegister() {
      uni.navigateTo({
        url: '/pages/register/register',
      });
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
}

.login-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.login-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #007AFF;
  color: white;
  border: none;
  border-radius: 4px;
}

.register-link button {
  background: none;
  border: none;
  color: #007AFF;
  cursor: pointer;
}
</style>