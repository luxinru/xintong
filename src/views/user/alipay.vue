<template>
    <div class="mains">
        
		<!-- <div class="header">
            <div class="head">
                <a @click="$router.back()" class="back"></a>
                支付宝设置
            </div>
        </div> -->
		<!-- <div style="text-align: center;" ><img class="logo" src="./images/alipay-top.jpg" alt=""></div> -->
        <div class="verify_wrap">
            <form class="form" @submit.prevent="handleSubmit">
                <div class="item">
                    <div class="left">
                        <!-- <img src="./images/people.png" /> -->
                        <span>姓名</span>
                    </div>
                    <input type="text" v-model.trim="data.name" :readonly="data.is_auth === 'Y'" placeholder="请输入您的姓名">
                </div>
                <div class="item">
                    <div class="left">
                        <!-- <img src="./images/people.png" /> -->
                        <span>支付宝账号</span>
                    </div>
                    <input type="text" v-model.trim="data.alipay"  placeholder="请输入您的支付宝账号">
                </div>
                

                <!-- <div class="item" style="background-color: #ffffff;">
                    <span class="info"></span>
                    <input class="inp" type="text" name="name" v-model.trim="data.name" placeholder="请输入姓名" :readonly="data.is_auth === 'Y'">
                </div>
                <div class="item" style="background-color: #ffffff;">
                    <span class="info"></span>
                    <input class="inp" type="text" name="alipay" v-model.trim="data.alipay" placeholder="请输入支付宝账号" :readonly="data.is_alipay === 'Y'">
                </div> -->
               
                <div class="warming">绑定的支付宝必须与实名一致，否则将无法成功提现。</div>
            </form>
        </div>
        <div class="recharge-remark-box" style="margin:0 20px 20px;">
        <p>
            温馨提示：该绑定仅用于小额提现时系统自动转账到用户所需的支付宝账号；该绑定并非授权，不会自动扣费，请您放心使用。
        </p>
        </div>
		<div class="captcha" id="captcha" v-show="!showCaptcha"></div>
         <button type="submit" class="btn" v-if="data.is_alipay == 'N'"  @click="handleSubmit">立即绑定</button>

    </div>
</template>
<script type="text/javascript" charset="utf-8" src="//g.alicdn.com/sd/nvc/1.1.112/guide.js?t=2015052012"></script>
<script src="//g.alicdn.com/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
<script>

    import Fetch from '../../utils/fetch'

    export default {
        name: "index",
        components: {},
        data() {
            return {
				showCaptcha: true,
                data: {},
                money_info: '',
                money: '',
                ready:true,
            };
        },
        created() {
            this.$parent.footer(false);
			this.set_ALY_config().then((res) => {
			  this.get_ALY_file();
			});
        },
        mounted() {
            this.start();
        },
        methods: {


            start() {
                Fetch('/user/alipay').then(res => {
                    console.log(res.data)
                    this.data = res.data;
                    if(this.data.alipay != ""){
                        this.ready = true
                    }else{
                        this.ready = false
                    }
                })

            },
			tosetalipay(nvc) {
				let _this = this;
				this.data.nvc = nvc;
				Fetch("/user/new_set_alipay", {
				    ...this.data
				}).then((res) => {
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
					  this.$notify({
					      background: '#07c160',
					      message: '操作成功'
					  });
					  this.$router.replace({
					      path: this.$router.history.current.query.redirect || "/tree"
					  });
					} else if (res.data.BizCode == 800 || res.data.BizCode == 900) {
					  //直接拦截
					  nvcReset();
					  _this.$notify({
					    background: "#07c160",
					    message: "验证失败",
					  });
					}
				    
				})
			},
            handleSubmit() {

                if (!this.data.name) {
                    this.$notify("请输入姓名");
                    return;
                }

                if (!this.data.alipay) {
                    this.$notify("请输入支付宝账号");
                    return;
                }

                this.tosetalipay(getNVCVal());
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
				  scene: "nvc_activity_h5",
			      isH5: true,
			      popUp: false,
			      renderTo: "#captcha",
			      nvcCallback: function (data) {
			        // console.log(data);
					_this.tosetalipay(data);
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
	.captcha{
		    // display: flex;
		    // align-items: center;
		    // justify-content: center;
		    // height: 100%;
		    // position: relative;
		    // transform: translateY(-50%);
		    // top: 50%;
		    // bottom: 50%;
		    // left: 0;
		    // right: 0;
		    // margin: auto;
		    margin: 15px;
		    width: 306px;
		    margin-left: 35px;
		    // height: 55px;
		    /deep/ .nc-container{
		        height: 40px;
		        line-height:  40px !important;
		    }
		    /deep/ .label{
		        height: 40px !important;
		        line-height: 40px!important;
		        font-size: 16px;
		    }
		    /deep/ .track{
		        height: 40px !important;
		        line-height: 40px !important;
		    }
		    /deep/ .button{
		        height: 40px !important;
		        line-height: 40px !important;
		        width: 52px;
		    }
		    /deep/ .slider{
		        height: 40px !important;
		        line-height: 40px !important;
		
		    }
		    /deep/ ._nc .stage1 .icon{
		        left: 10px;
		    }
		    /deep/ .bg-green{
		        height: 40px !important;
		        line-height: 40px !important;
		        font-size: 16px;
		    }
		
		}
.btnhui{
    display: block;
        width: 351px;
        height: 43px;
        background: #cccccc;
        border-radius: 7px 7px 7px 7px;
        text-align: center;
        z-index: 1;
        margin: 0 auto;
        margin-bottom: 20px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
}
.item{
    background: #ffffff;
    // padding: 15px 14px 14px;
    height: 51px;
    padding-top: 18px;
    // padding-bottom: 16px;
    // padding: 21px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.14);
    display: flex;
    align-items: center;

    .left{
        width: 110px;
        // font-weight: 500;
        color: #000
        // display: flex;
        // align-items: center;
        // img{
        //     width: 16px;
        //     margin-right: 14px;
        // }
    }
    input{
        // width: 200px;
        // margin-left: 59px;
        // line-height: normal;
        // font-weight: 400;
        color: #A3A3A3;
    }
}
.recharge-remark-box {
  font-size: 13px;
  color: #989898;
  padding: 17px 15px;
  margin-bottom: 29px;
  border-radius: 7px;
  background: #DCE1FA;
  box-shadow: 0px 0px 13px 0px rgba(0, 4, 26, 0.05);
  border-radius: 7px;
  .recharge-remark-title {
    font-size: 15px;
    font-weight: 400;
    color: #000000;
  }
  > p {
    margin-bottom: 10px;
    line-height: 20px;
  }
}
.mains{
background-color: #F5F4FA;
min-height: 100vh;
}
.logo {
        display: block;
        width: 100%;
        margin: 0 auto 14px auto;
    }

    .verify_wrap .form {
        display: block;
        width: 100%;
        padding-top: 13px;
    }

    .verify_wrap .form .item {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        border-bottom: 1px solid #EDEDED;
        font-size: 14px;
        padding: 6px 4.3% 6px 7.4%;
        // margin-bottom: 22px;
    }

    .verify_wrap .form .item .inp {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        text-align: right;
		padding-right:10px;
    }

    .verify_wrap .form .warming {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #D62C3A;
        padding: 19px 0 15px;
        text-align: center;
    }



    .verify_wrap .form .success_box {
        margin: 80px auto 40px auto;
    }

    .verify_wrap .form .success_box .ok {
        display: block;
        width: 68%;
        margin: 0 auto;
    }
    .btn {
        display: block;
        width: 351px;
        height: 43px;
        background: #023EFE;
        border-radius: 7px 7px 7px 7px;
       
        text-align: center;
        z-index: 1;
        margin: 0 auto;
        margin-bottom: 20px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
    }
</style>