<template>
	<view class="register">
		<!-- 手机号码 -->
		<van-field :value="telephone" @change="changePhone" placeholder="请输入账号" type="number" :maxlength="11" />
		<!-- 验证码 -->
		<van-field :value="authCode" :maxlength="6" center clearable @change="changeCode" placeholder="请输入短信验证码" :border="false"
		 use-button-slot>
			<van-button slot="button" :disabled="!/^1\d{10}$/.test(telephone)||codeText != '发送验证码'" color="linear-gradient(to right, #FFA97A, #FF6F42,#FF2B00)"
			 size="small" @click="getCode" type="primary">{{codeText}}</van-button>
		</van-field>
		<!-- 密码 -->
		<van-field
		    :value="password"
			@change="changePassword"
		    type="password"
		    placeholder="请输入密码"
			:maxlength="26"
		  />
		  <!-- 确认密码 -->
		  <van-field
		      :value="passwordSuer"
		  	@change="changePasswordSuer"
		      type="password"
		      placeholder="请输入密码"
		  	:maxlength="26"
		    />
			<!-- 注冊 -->
			<view class="register-in">
				<van-button  color="linear-gradient(to right, #FFA97A, #FF6F42,#FF2B00)" type="primary"
				 @click="register" :disabled="!telephone||!authCode||!password||!passwordSuer"  :loading="loading" block>注册</van-button>
			</view>
	</view>
</template>

<script>
	import {getAuthCode,register} from '@/api/login.js';
	import {getCodeMax,setCodeMax,getCodeEnd,setCodeEnd} from '@/utils/auth.js'
	let max = 0,time = null,endTime = 0;
	export default {
		data() {
			return {
				telephone:'',
				authCode:'',
				password:'',
				passwordSuer:'',
				codeText:''
			}
		},
		onLoad() {
			endTime = getCodeEnd()||0;
			max = getCodeMax()||0;
			max = max - parseInt((new Date().getTime() - endTime)/1000);
			if(max>0&&max<60){
				this.starTime();
			}else{
				this.codeText = '发送验证码';
			}
		},
		beforeDestroy(){
			setCodeMax(max);
			setCodeEnd(new Date().getTime());
			clearInterval(time);
		},
		methods: {
			register(){
				let telephone = this.telephone;
				let authCode = this.authCode;
				let password = this.password;
				let passwordSuer = this.passwordSuer;
				
				if(password!=passwordSuer){
					return 	uni.showToast({
							icon:'none',
							title:'两次密码不相同'
						})
				}
				register({
					telephone:this.telephone,
					authCode:this.authCode,
					password:this.password,
				}).then(res=>{
					if(res.code === 200){
						uni.navigateTo({
							url:'/pages/phoneLogin/phoneLogin'
						});
						return 	uni.showToast({
								icon:'none',
								title:'注册成功'
							});
					}
				})
				
			},
			getCode(){
				
				max = 60;
				
				getAuthCode(this.telephone).then(data=>{
					console.log(data);
				});
				this.starTime();
			},
			starTime(){
				
				this.codeText = max + 's';
				
				time = setInterval(()=>{
					max--;
					if(max===0){
						this.codeText = '发送验证码';
						clearInterval(time);
					}else{
						this.codeText = max + 's';
					}
				},1000)
			},
			changePhone(e){
				this.telephone = e.detail.replace(/\s/g,'');
			},
			changeCode(e){
				this.authCode = e.detail.replace(/\s/g,'');
			},
			changePassword(e){
				this.password = e.detail.replace(/\s/g,'');
			},
			changePasswordSuer(e){
				this.passwordSuer = e.detail.replace(/\s/g,'');
			}
		}
	}
</script>

<style lang="scss">
   .register{
	   
	   .register-in{
		   margin: 70upx 60upx 0;
	   }
	   
   }
</style>
