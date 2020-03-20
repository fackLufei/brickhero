<template>
	<view class="phone-login">
		<!-- 手机号码 -->
		<van-field :value="phone" @change="changePhone" placeholder="请输入账号" type="number" :maxlength="11" />
		<!-- 密码 -->
		<van-field :value="password" @change="changePassword" type="password" placeholder="请输入密码" :maxlength="26" />
		<!-- 登录 -->
		<view class="login-in">
			<van-button :disabled="!phone||!password" color="linear-gradient(to right, #FFA97A, #FF6F42,#FF2B00)" type="primary"
			 @click="phoneLogin" :loading="loading" block>登录</van-button>
		</view>
		<!-- 还没注册 -->
		<view class="tips" @click="register">还没注册？点击注册</view>
		<!-- 微信登录 -->
		<view class="wx-login" @click="wxLogin">
			<image fit="contain" class="wx-logo" src="/static/images/timg.png" />
			<view class="tips">微信手机号一键登录</view>
		</view>
		<!-- 协议 -->
		<view class="tips-agreement">登录即代表您已经同意搬砖侠<text>《服务协议》</text>与<text>《隐私政策》</text></view>
	</view>
</template>

<script>
	import {
		login
	} from '../../api/login.js';
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
		data() {
			return {
				phone: '',
				password: '',
				loading: false
			}
		},
		computed: {
			...mapState(['routerWait'])
		},
		methods: {
			register() {
				uni.navigateTo({
					url: '/pages/register/register'
				});
			},
			changePhone(e) {
				this.phone = e.detail.replace(/\s/g, '');
			},
			changePassword(e) {
				this.password = e.detail.replace(/\s/g, '');
			},
			getCode() {
				getAuthCode(this.phone);
			},
			phoneLogin() {
				let phone = this.phone;
				let password = this.password;
				this.loading = true;
				login({
					username: phone,
					password
				}).then(res => {
					if (res.code == 200) {
						uni.showToast({
							icon: 'none',
							title: '登录成功'
						})
						setToken(res.data.token);
						setUserInfo(res.data.userInfo);

						if (this.routerWait.routerPath) {
							goPage(this.routerWait.routerType, this.routerWait.routerPath);
						}
					} else {
						uni.showToast({
							icon: 'none',
							title: res.message
						})
					}
					this.loading = false;
				}).catch(() => {
					this.loading = false;
				});

			},
			wxLogin() {
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
	.phone-login {
		padding-top: 140upx;

		.login-in {
			margin: 70upx 60upx 0;
		}

		.tips {
			font-size: 26upx;
			color: #4A4A4A;
			margin: 30upx 60upx 0;
			text-align: right;
		}

		.tips-agreement {
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

		.wx-login {
			position: absolute;
			bottom: 324upx;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;

			.wx-logo {
				width: 90upx;
				height: 90upx;
				margin-bottom: 20upx;
			}

			.tips {
				font-size: 24upx;
				color: #4A4A4A;
			}
		}
	}
</style>
