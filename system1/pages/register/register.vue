<template>
  <view class="register-container">
    <view class="register-title">注册</view>
    <form @submit="submitRegister">
      <input class="register-input" type="text" placeholder="用户名" v-model="username" />
      <input class="register-input" type="password" placeholder="密码" v-model="password" />
      <input class="register-input" type="password" placeholder="确认密码" v-model="confirmPassword" />
      <button class="register-button" type="submit">注册</button>
    </form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    submitRegister(event) {
      event.preventDefault();
      if (this.password !== this.confirmPassword) {
        // 密码不匹配的处理
        console.error('两次输入的密码不一致');
        return;
      }
      // 这里添加注册逻辑，比如调用API注册新用户
      console.log('注册用户名：', this.username);
      console.log('注册密码：', this.password);
      // 注册成功后可以返回登录页面或其他页面
    },
  },
};
</script>

<style>
/* 注册页面的样式可以复用登录页面的样式，只需更改类名即可 */
</style>
