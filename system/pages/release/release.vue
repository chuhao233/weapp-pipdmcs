<template>
  <view class="container">
    <text class="title">上传监考信息</text>
    <button class="upload-button" @click="chooseFile">选择文件</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      filePaths: [] // 存储选择的文件路径
    };
  },
  methods: {
    chooseFile() {
      const that = this;
      // 调用微信小程序API选择文件
      wx.chooseFile({
        count: 1, // 默认为9，设置选择文件数量
        type: 'file', // 选择文件类型
        success: function(res) {
          if (res.tempFiles.length > 0) {
            const file = res.tempFiles[0];
            that.filePaths.push(file.path); // 存储文件路径
            // 这里可以添加读取文件的逻辑
            that.readFile(file.path); // 读取文件内容
          }
        },
        fail: function(err) {
          console.log('选择文件失败：', err);
        }
      });
    },
    readFile(filePath) {
      // 这里可以添加读取文件的逻辑
      console.log('文件路径：', filePath);
      // 如果需要读取Excel文件，可以使用第三方库进行读取
      // 例如使用uni-app的插件或调用uni-app的API
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.title {
  margin-bottom: 20px;
}

.upload-button {
  margin: 10px 0;
  padding: 10px;
}
</style>