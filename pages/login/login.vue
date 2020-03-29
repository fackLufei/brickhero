<template>
	<view class="login">
		<view class="app-info">
			<!-- 商品图片 -->
			<image class="app-logo"></image>
			<!-- app名字 -->
			<view class="app-name">
				搬砖侠
			</view>
		</view>
		<view class="login-in">
			<van-button @getuserinfo="wxLogin" color="linear-gradient(to right, #45E26A, #37CB67)" open-type="getUserInfo" type="primary"
			 lang="zh_CN" block>微信用户一键登录</van-button>
		</view>
		<view class="phone-login">
			<text @tap="phoneLogin">账号密码登录</text>
			<text @tap="register">注册</text>
		</view>
		<view class="tips">登录即代表您已经同意搬砖侠<text>《服务协议》</text>与<text>《隐私政策》</text></view>
	</view>
</template>

<script>
	import {
		wxLogin
	} from '@/api/login.js';
	import {
		setToken,
		setUserInfo
	} from '@/utils/auth.js';
	import {
		goPage
	} from '@/utils/index.js';
	import {
		mapState
	} from 'vuex';
	export default {
		computed: {
			...mapState(['routerWait'])
		},
		methods: {
			register() {
				uni.navigateTo({
					url: '/pages/register/register'
				});
			},
			phoneLogin() {
				uni.navigateTo({
					url: '/pages/phoneLogin/phoneLogin'
				})
			},
			wxLogin(e) {

				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						// 微信登录
						wxLogin({
							code: loginRes.code,
							userInfo: e.detail.userInfo
						}).then(res => {
							if (res.errno === 0) {
								setToken(res.data.token);
								setUserInfo(res.data.userInfo);
								if (this.routerWait.routerPath) {
									goPage(this.routerWait.routerType, this.routerWait.routerPath);
								}
								uni.showToast({
									icon: 'none',
									title: '登录成功'
								})
							} else {
								uni.showToast({
									icon: 'none',
									title: res.message
								})
							}
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.login {
		.app-info {
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-top: 163upx;
			margin-bottom: 263upx;

			.app-logo {
				width: 186upx;
				height: 186upx;
				border-radius: 12px;
				background-color: rgba(237, 237, 237, 1);
				margin-bottom: 24upx;
			}

			.app-name {
				font-size: 44upx;
				color: #292929;
				font-weight: 500;
			}
		}

		.login-in {
			margin: 0 60upx;
		}

		.phone-login {
			margin-top: 10upx;
			text-decoration: underline;
			font-size: 26upx;
			color: #4A4A4A;
			display: flex;
			padding: 0 80upx;
			justify-content: space-between;
		}

		.tips {
			position: absolute;
			white-space: nowrap;
			left: 50%;
			transform: translate(-50%, 0);
			bottom: 130upx;
			font-size: 22upx;
			color: #B0B0B0;

			text {
				color: #4A4A4A;
			}
		}
	}
</style>
