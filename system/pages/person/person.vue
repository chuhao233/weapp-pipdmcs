<template>
	<view class="userLayout">
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/picture/pic2.webp" mode="aspectFill"></image>
			</view>
			<view class="name">xx老师</view>
			<view class="address">来自于 学院</view>
		</view>
		
		<view class="section">
			<view class="list">
				<view class="row" v-for="item in 3">
					<view class="left">
						<uni-icons type="more-filled" size="30"></uni-icons>
						<view class="text">我的监考</view>
					</view>
                    <view class="right">
						<view class="text">33</view>
					    <uni-icons type="right" size="30"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		
		<view class="section">
			<view class="list">
				<view class="row" v-for="item in 2">
					<view class="left">
						<uni-icons type="more-filled" size="20"></uni-icons>
						<view class="text">我的监考</view>
					</view>
                    <view class="right">
						<view class="text">33</view>
					    <uni-icons type="right" size="20"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.userLayout{
	.userInfo{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 50rpx 0;
		.avatar{
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow:hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.name{
			font-size: 44rpx;
			color: #333;
			padding: 20rpx 0 5rpx;
		}
	}
	.section{
		width: 690epx;
		margin: 50rpx auto;
		border: 1px soild #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
		.list{
			.row{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 30rpx;
				height: 100rpx;
				border-bottom: 1px soild #eee;
				&:last-child{border-bottom:0}
				.left{
					display: flex;
					align-items: center;
					.text{
						padding-left: 20rpx;
						color: #666;
					}
				}
				.right{
					display: flex;
					align-items: center;
					.text{
						font-size: 28rpx;
						color: #aaa;
					}
				}
			}
		}
	}
}
</style>
