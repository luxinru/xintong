<template>

	<div class="login-container">
		<!-- <div class="slogan">
			<p class="welcome">欢迎加入我们</p>
			<p class="login-info">请填写以下登陆信息。</p>
		</div> -->
		<!-- <div class="login-header"> -->
			<!-- <div class="login-header-title">
				<span class="login">登录</span>
				<span class="regist" @click="handleGoRegister">手机号注册</span>
			</div> -->
		<!-- <img src="../../assets/icons/qianhai.png" class="icon" /> -->
		<!-- <img src="./images/sf/back.png" class="back" @click="$router.back()" /> -->
		<p class="title">手机号登录</p>
		<div class="login-box">
			<!-- <div class="item" style="display:none;">
				<div class="left">国家/地区</div>
				<div class="right" style="width:82px;" @click="handleSelectArea">
					<span>{{data.telAddress}}</span>
					<van-icon name="arrow" size="18" color="#A8A8A8"/>
				</div>
			</div> -->
			<div class="name">
				<!-- <div class="left">手机号码</div> -->
				<!-- <img src="./images/xg/mobile.png" /> -->
				<!-- <p>+86</p> -->
				<select name="" id="" class="item">
					<option value="+86" selected>+86</option>
				</select>
				<input class="item" style="padding: 16px 21px; width:215px;" type="number" v-model="data.username" placeholder="请输入手机号码">
			</div>
			<div class="item">
				<!-- <div class="left">密码</div> -->
				<!-- <img src="./images/xg/pwd.png" /> -->
				<input type="password" v-model="data.password" placeholder="请输入登录密码">
			</div>
		</div>
		<div class="login-footer">
			<!-- <div class="duoxuan"></div> -->
			<!-- <input type="checkbox" v-model="data.loginTerms"> -->
				<!-- checkbox						 -->
		
			<div>我已阅读并接受</div>
			<div class="footer-link" @click="handleGoUserTerms">用户协议</div>
			<div>与</div>
			<div class="footer-link" @click="handleGoPrivacyPolicy">隐私政策</div>
		</div>
		<div class="captcha" id="captcha" v-show="!showCaptcha"></div>
		<div class="login-btn" @click="handleSubmit">登 录</div>
		<div class="footer-btn-cont">
			<div class="forget" @click="handleForgetPassword">忘记密码?</div>
			<div class="register" @click="handleGoRegister"><span>注册账户</span></div>
		</div>
		
			<!-- <div class="login-form-box">
				<form class="form" @submit.prevent="handleSubmit">
					<van-field v-model="data.telAddress" label-width="1.7rem" label="国家/地区" readonly @click-right-icon="handleSelectArea" input-align="right" right-icon="arrow" />
					<van-field v-model="data.username" label-width="1.7rem" :label="formAreaLabel" type="number" placeholder="请输入您的手机号码" />
					<van-field v-model="data.password" label-width="1.7rem" label="登录密码" type="password" placeholder="请输入登陆密码" />
					<div class="login-form-item">
						<div @click="handleGoRegister">注册</div>
						<div @click="handleForgetPassword">忘记密码？</div>
					</div>
					<div class="login-form-btn" @click="handleSubmit">立即登录</div>
					<div class="login-form-footer">
						<div class="footer-checkbox"><van-checkbox v-model="data.loginTerms" shape="square"></van-checkbox></div>
						<div>我已阅读并接受</div>
						<div class="footer-link" @click="handleGoUserTerms">条款及细则</div>
						<div>与</div>
						<div class="footer-link" @click="handleGoPrivacyPolicy">客户隐私政策</div>
					</div>
				</form>
			</div> -->
		<!-- </div> -->
		<van-action-sheet v-model="isShowAction" :actions="actionsList" cancel-text="取消" close-on-click-action @select="handleSelectAction" @cancel="handleCancelAction"/>
	</div>
</template>
<script type="text/javascript" charset="utf-8" src="//g.alicdn.com/sd/nvc/1.1.112/guide.js?t=2015052012"></script>
<script src="//g.alicdn.com/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
<script>
	import Fetch from '../../utils/fetch';

	export default {
		name: "index",
		components: {},
		data() {
			return {
				data: {
					telAddress: '中国大陆（+86）',
					username: '',
					password: '',
					mobile_system:0,
					nc: null, // noCaptcha实例的值
				},
				loginTerms: true,
				bg: '',
				config: {},
				isShowAction: false,
				formAreaLabel: '+86',
				actionsList: [
					{name: '中国大陆（+86）', labelName: '+86', type: 1},
					{name: '中国澳门（+853）', labelName: '+853', type: 2},
					{name: '中国香港（+852）', labelName: '+852', type: 3},
					{name: '中国台湾（+886）', labelName: '+886', type: 4},
				],
				showCaptcha: true,
			};
		},
		created() {
			this.$parent.footer(false);
			this.set_ALY_config().then((res) => {
			  this.get_ALY_file();
			});
		},
		mounted() {
			window.returnIosIdfa = this.returnIosIdfa;
			this.start();
		},
		methods: {
			start() {
				let that = this;
				if (/LT-APP/.test(navigator.userAgent)) {
						  // that.$notify('inapp:');
						  this.data.mobile_system = 2;
						  jsBridge.getOAID(function(oaid){
						    if (oaid) {
						      // alert(oaid);
							  // that.$notify('oaid:'+oaid);
							  Fetch('/index/check', {
								oaid:oaid,
							    imei: '',
							    os:0,
							    type:1,
							  }).then((res) => {
							    
							  });
						    } else {
						      jsBridge.getIMEI(function(imei) {
						      	// that.$notify('imei:'+imei);
						      	Fetch('/index/check', {
						      	  imei: imei,
						      	  os:0,
						      	  type:1,
						      	}).then((res) => {
						      	  
						      	});
						      });
						    }
						  });
							
						} else {
							this.getIosIdfa();
						}
			},
			clear() {
				this.data.username = '';
			},
			getIosIdfa(){
				window.webkit.messageHandlers.idfa.postMessage({'result':'idfa'});  //app中接收到之后会回调给下面的函数
			},
			returnIosIdfa(idfa){
				// this.$notify('idfa:'+idfa);
					this.data.mobile_system = 1;
					Fetch("/index/check", {
						os: 1,
						imei: idfa,
						type:1
					});
			},

			tologin(nvc) {
				let _this = this;
			  Fetch("/index/newlogin", {
			    username: _this.data.username,
			    password: _this.data.password,
			  	nvc: nvc,
			  })
			    .then((res) => {
			  		  console.log(res.data.BizCode);
			  		     if (res.data.BizCode == 400) {
			  		       //唤醒滑动验证
			  		       getNC().then(function(){
			  		           NoCaptcha.upLang('cn', {
			  		               'LOADING':"加载中...",//加载
			  		               'SLIDER_LABEL': "请向右滑动验证",//等待滑动
			  		               'CHECK_Y':"验证通过",//通过
			  		               'ERROR_TITLE':"非常抱歉，这出错了...",//拦截
			  		               'CHECK_N':"验证未通过", //准备唤醒二次验证
			  		               'OVERLAY_INFORM':"经检测你当前操作环境存在风险，请输入验证码",//二次验证
			  		               'TIPS_TITLE':"验证码错误，请重新输入"//验证码输错时的提示
			  		           });
			  		           _nvc_nc.reset();
			  		  			  _this.showCaptcha = false
			  		       })
			  		     } else if (res.data.BizCode == 100 || res.data.BizCode == 200) {
			  		       //登录成功
			  		       nvcReset();
						   _this.showCaptcha = true;
			  		       if (res.data.token) {
			  		         localStorage.setItem("token", res.data.token);
			  		       }
			  			   _this.$notify({
			  			     background: "#07c160",
			  			     message: "登录成功",
			  			   });
			  			   _this.$parent.setFooterType(res.data.footer);
						   _this.$router.replace({
						     path: /* this.$router.history.current.query.redirect || */ '/tree',
						   });
			  		     } else if (res.data.BizCode == 800 || res.data.BizCode == 900) {
			  		       //直接拦截
			  		       nvcReset();
			  		       _this.$notify({
			  		         background: "#07c160",
			  		         message: "登录失败",
			  		       });
			  		     }
			    })
			},
			
			handleSubmit() {
			  // this.aa();
			  
			  if (!this.data.username) {
			    this.$notify("请输入您的手机号");
			    return;
			  }
			
			  if (!this.data.password) {
			    this.$notify("请输入登录密码");
			    return;
			  }
			  this.tologin(getNVCVal());
			  // this.tologin('213213231');
			},
			// 隐私协议
			handleGoPrivacyPolicy() {
				this.$router.push({path: this.config.user_contract_ys_link});
			},
			// 用户条款
			handleGoUserTerms() {
				this.$router.push({path: this.config.user_contract_link});
			},
			// 忘记密码
			handleForgetPassword() {
				this.$router.push({name: 'forgetpwd'});
			},
			// 注册
			handleGoRegister() {
				this.$router.push({name: 'register'});
			},
			// 选择地区
			handleSelectArea() {
				this.isShowAction = true;
			},
			handleSelectAction(item) {
				this.formAreaLabel = item.labelName;
				this.data = Object.assign({}, this.data, {
					telAddress: item.name,
				});
			},
			handleCancelAction() {
				this.isShowAction = false;
			},
			// 动态加载js文件
			get_ALY_file() {
			  try {
			    var stamp = new Date().getTime();
			    var script = document.createElement("script");
			    script.setAttribute("type", "text/javascript");
			    script.setAttribute(
			      "src",
			      "https://g.alicdn.com/sd/nvc/1.1.112/guide.js?t=" + stamp
			    );
			    document.documentElement.appendChild(script);
			  } catch (e) {}
			},
			set_ALY_config() {
			  console.log("set_ALY_config");
			  var _this = this;
			  return new Promise((resolve, reject) => {
			    window.NVC_Opt = {
			      //无痕配置 && 滑动验证、刮刮卡、问答验证码通用配置
			      // appkey: "CF_APP_1",
			      // scene: "nvc_register_h5",
				  appkey: "FFFF0N0000000000A5C8",
				  scene: "nvc_login_h5",
			      isH5: true,
			      popUp: false,
			      renderTo: "#captcha",
			      nvcCallback: function (data) {
			        // console.log(data);
					_this.tologin(data);
			        // data为getNVCVal()的值，此函数为二次验证滑动或者刮刮卡通过后的回调函数
			        // data跟业务请求一起上传，由后端请求AnalyzeNvc接口，接口会返回100或者900
			      },
			      trans: { key1: "code0", nvcCode: 400 },
			      language: "cn",
			      //滑动验证长度配置
			      customWidth: 240,
			      //刮刮卡配置项
			      width: 300,
			      height: 100,
			      elements: [
			        "//img.alicdn.com/tfs/TB17cwllsLJ8KJjy0FnXXcFDpXa-50-74.png",
			        "//img.alicdn.com/tfs/TB17cwllsLJ8KJjy0FnXXcFDpXa-50-74.png",
			      ],
			      bg_back_prepared:
			        "//img.alicdn.com/tps/TB1skE5SFXXXXb3XXXXXXXXXXXX-100-80.png",
			      bg_front:
			        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefk5w+ruswAAAAfSURBVFjD7cExAQAAAMKg9U9tCU+gAAAAAAAAAIC3AR+QAAFPlUGoAAAAAElFTkSuQmCC",
			      obj_ok: "//img.alicdn.com/tfs/TB1rmyTltfJ8KJjy0FeXXXKEXXa-50-74.png",
			      bg_back_pass:
			        "//img.alicdn.com/tfs/TB1KDxCSVXXXXasXFXXXXXXXXXX-100-80.png",
			      obj_error:
			        "//img.alicdn.com/tfs/TB1q9yTltfJ8KJjy0FeXXXKEXXa-50-74.png",
			      bg_back_fail:
			        "//img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png",
			      upLang: {
			        cn: {
			          _ggk_guide: "请在屏幕上滑动，刮出两面盾牌",
			          _ggk_success: "恭喜您成功刮出盾牌<br/>继续下一步操作吧",
			          _ggk_loading: "加载中",
			          _ggk_fail: [
			            "呀，盾牌不见了<br/>请",
			            "javascript:NoCaptcha.reset()",
			            "再来一次",
			            "或",
			            "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN",
			            "反馈问题",
			          ],
			          _ggk_action_timeout: [
			            "我等得太久啦<br/>请",
			            "javascript:NoCaptcha.reset()",
			            "再来一次",
			            "或",
			            "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN",
			            "反馈问题",
			          ],
			          _ggk_net_err: [
			            "网络实在不给力<br/>请",
			            "javascript:NoCaptcha.reset()",
			            "再来一次",
			            "或",
			            "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN",
			            "反馈问题",
			          ],
			          _ggk_too_fast: [
			            "您刮得太快啦<br/>请",
			            "javascript:NoCaptcha.reset()",
			            "再来一次",
			            "或",
			            "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN",
			            "反馈问题",
			          ],
			        },
			      },
			    };
			    resolve();
			  });
			},
		}
	};
</script>

<style lang="less" scoped>
	@import "login";



	/*.contract {*/

	/*	display: flex;*/
	/*	flex-direction: row;*/
	/*	align-items: center;*/
	/*	width: 100%;*/
	/*	padding: 10px 5px 20px 20px;*/
	/*	color: #fff;*/
	/*	font-size: 12px;*/

	/*	>a {*/
	/*		color: #a9fffc;*/
	/*	}*/

	/*	/deep/ .van-checkbox .van-checkbox__label {*/
	/*		color: #ffffff;*/
	/*	}*/
	/*}*/

	/*.main {*/
	/*	position: relative;*/
	/*	padding-top: 1px;*/
	/*	padding-bottom: 20px;*/


	/*}*/

	/*.main .bg {*/
	/*	position: fixed;*/
	/*	z-index: 1;*/
	/*	top: 0;*/
	/*	left: 0;*/
	/*	right: 0;*/
	/*	bottom: 0;*/
	/*	background: no-repeat center;*/
	/*	background-size: cover;*/
	/*}*/

	/*.main .back {*/
	/*	display: inline-block;*/
	/*	width: 28px;*/
	/*	height: 28px;*/
	/*	background: url(images/back.png) no-repeat center;*/
	/*	background-size: contain;*/
	/*	position: absolute;*/
	/*	top: 24px;*/
	/*	left: 20px;*/
	/*	z-index: 2;*/
	/*}*/

	/*.form {*/
	/*	width: 72%;*/
	/*	position: relative;*/
	/*	margin: 33% auto 0 auto;*/
	/*	z-index: 2;*/
	/*}*/

	/*.form .item {*/
	/*	position: relative;*/
	/*	margin-bottom: 26px;*/
	/*	overflow: hidden;*/
	/*}*/

	/*.form .item .logo {*/
	/*	display: block;*/
	/*	width: 42.8%;*/
	/*	margin: 0 auto;*/
	/*}*/

	/*.form .item .item_bg {*/
	/*	position: absolute;*/
	/*	top: 0;*/
	/*	bottom: 0;*/
	/*	left: 0;*/
	/*	right: 0;*/
	/*	background: #fff;*/
	/*	opacity: 0.1;*/
	/*	border-radius: 38px;*/
	/*	z-index: 3;*/
	/*}*/

	/*.form .item .content {*/
	/*	width: 100%;*/
	/*	height: 38px;*/
	/*	border-radius: 38px;*/
	/*	border: 1px solid #fff;*/
	/*	display: -webkit-box;*/
	/*	display: -ms-flexbox;*/
	/*	display: flex;*/
	/*	-webkit-box-sizing: border-box;*/
	/*	box-sizing: border-box;*/
	/*	-webkit-box-align: center;*/
	/*	-ms-flex-align: center;*/
	/*	align-items: center;*/
	/*	-webkit-box-pack: justify;*/
	/*	-ms-flex-pack: justify;*/
	/*	justify-content: space-between;*/
	/*	padding: 10px 16px;*/
	/*	position: relative;*/
	/*	z-index: 4;*/
	/*}*/

	/*.form .item .content .left_icon {*/
	/*	display: inline-block;*/
	/*	width: 18px;*/
	/*	height: 18px;*/
	/*	background-repeat: no-repeat;*/
	/*	background-size: contain;*/
	/*	background-position: center;*/
	/*}*/

	/*.form .item .content .phone_icon {*/
	/*	background-image: url(images/phone.png);*/
	/*}*/

	/*.form .item .content .pwd_icon {*/
	/*	background-image: url(images/pwd.png);*/
	/*}*/

	/*.form .item .content .right_icon {*/
	/*	display: inline-block;*/
	/*	width: 16px;*/
	/*	height: 16px;*/
	/*	background-repeat: no-repeat;*/
	/*	background-size: contain;*/
	/*	background-position: center;*/
	/*}*/

	/*.form .item .content .clear_icon {*/
	/*	background-image: url(images/clear.png);*/
	/*}*/

	/*.form .item .content .show_icon {*/
	/*	background-image: url(images/hidepwd.png);*/
	/*}*/

	/*.form .item .content .inp {*/
	/*	-webkit-box-flex: 1;*/
	/*	-ms-flex: 1;*/
	/*	flex: 1;*/
	/*	padding: 0 8px;*/
	/*	font-size: 14px;*/
	/*	background: transparent;*/
	/*	color: #fff;*/
	/*}*/

	/*.form .item_pwd {*/
	/*	margin-bottom: 10px;*/
	/*}*/

	/*.form .item_forget {*/
	/*	margin-bottom: 35px;*/
	/*}*/

	/*.form .item_forget .forgetpwd {*/
	/*	color: #fff;*/
	/*	font-size: 12px;*/
	/*	float: right;*/
	/*	padding-right: 10px;*/
	/*}*/

	/*.form .item .btn {*/
	/*	display: block;*/
	/*	width: 100%;*/
	/*	height: 36px;*/
	/*	border-radius: 36px;*/
	/*	color: #18192e;*/
	/*	position: relative;*/
	/*	z-index: 4;*/
	/*	text-align: center;*/
	/*	line-height: 36px;*/
	/*	font-size: 15px;*/
	/*}*/

	/*.form .item .loginbtn {*/
	/*	background: #fff;*/
	/*}*/

	/*.form .item .item_bg_gray {*/
	/*	position: absolute;*/
	/*	top: 0;*/
	/*	bottom: 0;*/
	/*	left: 0;*/
	/*	right: 0;*/
	/*	background: #fff;*/
	/*	opacity: 0.5;*/
	/*	border-radius: 36px;*/
	/*	z-index: 3;*/
	/*}*/
</style>
