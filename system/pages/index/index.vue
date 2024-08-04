<template>
  <view class="container">
    <view class="header">
     <text>头部</text>
    </view>
    <view class="content">
      <text>首页的主要内容区域</text>
      <view class="button-container">
        <button class="square-button" @click="goToSelectPage">监考选择</button>
      </view>
	  <view class="button-container">
	    <button class="square-button" @click="goToPersonPage">个人中心</button>
	  </view>
	  <view class="button-container">
	    <button class="square-button" @click="goToMyitemPage">我的监考</button>
	  </view>
	  <view class="button-container">
	    <button class="square-button" @click="goToReleasePage">监考发布</button>
	  </view>
    </view>
    <view class="footer">
      <text>首页的底部</text>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToSelectPage() {
      // 这里使用uni.navigateTo进行页面跳转
      uni.navigateTo({
        url: '/pages/select/select', // 确保路径与实际select页面的路径一致
        success: function () {
          console.log('跳转到select页面成功');
        },
        fail: function (err) {
          console.error('跳转失败', err);
        }
      });
    },
    goToPersonPage() {
      // 这里使用uni.navigateTo进行页面跳转
      uni.navigateTo({
        url: '/pages/person/person', // 确保路径与实际person页面的路径一致
        success: function () {
          console.log('跳转到person页面成功');
        },
        fail: function (err) {
          console.error('跳转失败', err);
        }
      });
    },
    goToMyitemPage() {
      // 这里使用uni.navigateTo进行页面跳转
      uni.navigateTo({
        url: '/pages/myitem/myitem', // 确保路径与实际person页面的路径一致
        success: function () {
          console.log('跳转到person页面成功');
        },
        fail: function (err) {
          console.error('跳转失败', err);
        }
      });
    },
    goToReleasePage() {
      // 这里使用uni.navigateTo进行页面跳转
      uni.navigateTo({
        url: '/pages/release/release', // 确保路径与实际person页面的路径一致
        success: function () {
          console.log('跳转到person页面成功');
        },
        fail: function (err) {
          console.error('跳转失败', err);
        }
      });
    }
  }
};
</script>

<style lang="scss">
	.container {
	  display: flex;
	  flex-direction: column;
	  min-height: 100vh;
	}
	
	.header {
	  background-color: write;
	  color: black;
	  padding: 20px;
	  text-align: center
	}
	
	.content {
	  flex: 1;
	  padding: 20px;
	}
	
	.footer {
	  background-color:write;
	  padding: 10px;
	  text-align: center
	  }
	.button-container {
	    text-align: center;
	    margin-top: 20px;
	  }
	
	.square-button {
	  width: 200px; /* 按钮宽度 */
	  height: 50px; /* 按钮高度 */
	  background-color: #007aff; /* 按钮背景颜色 */
	  color: white; /* 字体颜色 */
	  border: none; /* 无边框 */
	  border-radius: 5px; /* 圆角边框 */
	  font-size: 16px; /* 字体大小 */
	  cursor: pointer; /* 鼠标悬停时显示手形图标 */
	  outline: none; /* 点击时不显示轮廓 */
	}
	
	.square-button:active {
	  background-color: #005fcc; /* 按钮按下时的颜色 */
	}
	.pic1{

	}
</style>
