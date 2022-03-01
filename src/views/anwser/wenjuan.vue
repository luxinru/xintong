<template>
<div class="wenjuanBox">
    <div class="headerBox">
        <div class="header">
            <div class="head" >
                <van-icon class="iconLeft" name="arrow-left" @click="$router.back()"  />
                <span>知识竞答</span>
                <div>
                    <!-- <img class="question" src="./image/question.png" alt="" @click="handleGoBaoKugz"> -->
                </div>
            </div>
            
        </div>
    </div>

    <div class="main">
        
		<!-- <div style="text-align: center;" ><img class="logo" src="./image/wenjuan.png" alt=""></div>         -->
        <!-- <div class="tips">
            欢迎参加学霸奖金挑战游戏，挑战成功将会立即获得现金红包，一秒到账支付宝账户，百万奖金等你来！
        </div> -->
        <div class="top">
            <img src="./image/beijing_top.png" alt="">
        </div>

        <div class="index">
              <div class="mt3">
            答题倒计时:
            <span>
                <van-count-down class="mm" :time="data.m" @finish="stop" ref="countDown">
                    <template v-slot="timeData">
                        <span class="item">{{timeData.seconds}}</span>
                    </template>
                </van-count-down>
            </span>
            s
        </div>
        <div class="rule_box">
            <div class="rule_title">{{data.title}} </div>
            <div class="rule_info_box">
                <!-- <div class="anwser_item">
                    威威微
                </div> -->

                <div ref="anwser" class="anwser_item" v-for="(v, k) in data.values" :key="k"  @click="apply(v.id, $event)">
                    {{v.value}}
                </div>
            </div>
        </div>  
        </div>
        
       
    </div>
</div>
</template>

<script>
    import Vue from 'vue';
    import Fetch from '../../utils/fetch'
    import {CountDown} from 'vant';
    import {Dialog} from 'vant';

    Vue.use(CountDown);

    export default {
        name: "index",
        data() {
            return {
                data: {
                    askid:0,
                    title: '',
                    values: [],
                    m: 60 * 1000,
					type: 1,
					images: '',
                }
            }
        },
        created() {
            this.$parent.footer(false);
        },
        mounted() {
            this.$refs.countDown.pause();
            this.start();
        },
        methods: {
            start() {
                Fetch('/index/getask').then(res => {
                    if(res.data.coss == 1){
                    	Dialog.alert({
                    		title: '提示',
                    		message: res.info,
                    		showCancelButton: true,
                    		confirmButtonText: "去认证",
                    	}).then(() => {
                    		this.$router.push('/auth');
                    	})
                    }else if(res.data.alipay == 1){
                                Dialog.alert({
                    			    title: '提示',
                    			    message: res.info,
                    			    showCancelButton: true,
                    			    confirmButtonText: "绑定支付宝",
                    			}).then(() => {
                    			    this.$router.push('/alipay');
                    			}).catch(() => {
                    			    
                    			})
                    }else{
                        this.data.askid = res.data.id;
                    	this.data.title = res.data.title;
                    	this.data.values = res.data.values;
                    	this.data.images = res.data.image;
                    	this.$refs.countDown.reset();
                    	Dialog.alert({
                    	    message: res.data.status = res.info,
                    	})
                    }
                });
            },
            apply(key, event) {
                this.setStyle();
                event.target.style.background = '#FF611E';
                event.target.style.color = '#fff';
                this.stop(key)
            },
            setStyle(){
                this.$refs.anwser.forEach((v) => {
                    v.style.background = '#fddece'
                    v.style.color = '#FF611E'
                });
            },
            stop(key = 0) {
                let id = this.data.askid;
                this.$refs.countDown.pause();
                Fetch('/index/getask',{id:id,key:key}).then(res => {
                    this.data.askid = res.data.id;
					this.data.title = res.data.title;
					this.data.values = res.data.values;
					this.data.images = res.data.image;
					this.$refs.countDown.reset();
                    Dialog.alert({
                        message: res.data.status = res.info,
                    })
                });
            }
        }
    };
</script>

<style lang="less" scoped>
.head{
    display: flex;
    justify-content: space-between;
    padding: 0 13px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #fff;
    .iconLeft{
        position: relative;
        top: 12px;
        font-size: 22px;
    }
    
    .question{
        width: 19px;
    }
    >div,>i{
        width: 50px;
        text-align: center;
    }
    >i{
        text-align: left;
    }

}
.wenjuanBox{
    background-image: url('./image/beijing.png');
    background-size: 100% 100%;
    min-height: 100vh;
}
.main{
    // padding: 39px 25px 0;
    // margin-top: 115px;
    .top{
        width: 100vw;
        height: 165px;
        // background: red;
        img{
            width: 100%;
            height: 100%;
            // display:none;
        }
    }
    .mt3{
        width:150px;
        height: 30px;
        padding: 0 6px;
        margin: 0 auto;
        // margin-left: 31px;
        // background-image: url('./image/sf/time_bg.png');
        background-size: 100% 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #FFFFFF;
        // background: linear-gradient(0deg,#5877FF,#BCBFFF);
        // box-shadow: 0px 15px 46px 0px rgba(178,33,35,0.27);
        // border-radius: 0px 0px 20px 20px;
        position:absolute;
        top: -10px;
        left: 50%;
        transform:translate(-50%,10px);
        // margin-bottom: 20px;
        // height: 33px;
        span{
            color: #AC6142;
            font-size: 16px;
        }
    }
    .index{
        width: 90vw;
        height: 10.50667rem;
        margin: 0px 20px;        
        padding: 20px 20px;
        position: relative;
        margin-top: 134px;
        padding-bottom: 50px;
    }
    .rule_box{
        // position: absolute;
        // background-image: url('./image/hgy/q_bg.png');
        // background-size: 100% 100%;
        width: 100%;
        height: 330px;
        overflow-y:scroll ;
        // left: 20px;
        // right: 20px;
        // top: 300px;
        // background-color: #FFFFFF;
        border-radius: 7px;
        padding: 25px 30px;
        margin-top: 20px;
        .rule_title{
            font-size: 17px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #FF611E;
            line-height: 24px;
        }
        .rule_info_box{
            // padding: 0 20px;
            // margin-top: 30px;
            margin-top: 35px;
            .anwser_item{
                width: 291px;
                width: 100%;
                height: 44px;
                background: #fddece;
                border-radius: 4px;
                // width: 277px;
                line-height: 44px;
                // background-color: #F4FAFD;
                font-size: 16px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FF611E;
                text-align: center;
                margin-bottom: 12px;
            }
            // .select{
            //     background: #6CD75E;
            //     color: #FFFFFF;
            // }
        }
    }
}
</style>