<template>
	<div class="detail-container">
        <div class="project-item-container">
            <div class="project-img-box">
               <img :src="data.thumb" alt="">
            </div>
			
            <div class="project-info-warp">
                <div class="project-item-header">
                    <div class="project-name">{{ data.title }}</div>
                    <div class="project-number">期限：{{ data.day }}天</div>
                </div>
				
				
                <!--<div class="project-progress-box">-->
                <!--    <div class="project-progress-wrap">-->
                <!--        <div class="project-progress" :style="schedule(data.schedule)">-->
                <!--            <div class="project-progress-icon"></div>-->
                <!--        </div>-->
                <!--    </div>-->
				
                <!--    <div class="project-progress-value">{{data.schedule}}%</div>-->
                <!--</div>-->
              <div class="project-tag-box">
                    <div class="project-tag-item">{{ data.type_name }}</div>
                    <!-- <div class="project-tag-item">{{ data.min }}起投</div> -->
                </div>
                <div class="project-info-list">
                    <div class="project-info-list-item">
                        <div class="project-info-list-item-bottom one-bottom">{{ data.rate }} <span>%</span></div>
                        <div class="project-info-list-item-top">产品日利率</div>
                    </div>
                    <div class="project-info-list-item">
                        <div class="project-info-list-item-bottom">{{ data.apr_money }}</div>
                        <div class="project-info-list-item-top">每日分红</div>
                    </div>
                    <div class="project-info-list-item">
                        <div class="project-info-list-item-bottom">{{ data.sun_apr_money }}</div>
                        <div class="project-info-list-item-top">总分红</div>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="project-rule-box">
			<img src="./images/xiangmuxiangqing03.png" >
            <div class="project-rule-item">
                <div class="project-rule-item-left one-icon"></div>
                <div class="project-rule-item-right">
                    <div class="right-title">随时购买</div>
                    <div class="right-sub-title">每个自然日都能买</div>
                </div>
            </div>
            <div class="project-rule-item">
                <div class="project-rule-item-left two-icon"></div>
                <div class="project-rule-item-right">
                    <div class="right-title">灵活申赎</div>
                    <div class="right-sub-title">T+0到账,项目到期后交易日内到账</div>
                </div>
            </div>
            <div class="project-rule-item">
                <div class="project-rule-item-left three-icon"></div>
                <div class="project-rule-item-right">
                    <div class="right-title">安全保障</div>
                    <div class="right-sub-title">平台资金由中国太平洋保险公司保障</div>
                </div>
            </div> 
        </div>-->
		
		<div class="my-assets-list-box">
					<van-row gutter="16">
						<van-col span="8">
							<div class="my-assets-list-item">
								<div class="item-text">我的等级</div>
								<div class="item-info">{{vipname}}</div>
							</div>
						</van-col>
						<van-col span="8">
							<div class="my-assets-list-item">
								<div class="item-text">我的加息</div>
								<div class="item-info">{{rate}}%</div>
							</div>
						</van-col>
						<van-col span="8">
							<div class="my-assets-list-item">
								<div class="item-text">成长值</div>
								<div class="item-info">{{integral}}</div>
							</div>
						</van-col>						
					</van-row>
				</div>
        <!--产品详情-->
      <div class="project-investment-box">
		 <div class="boxx">
		  	
		  
            <div class="project-info-item-title">产品详情</div>
            <div class="project-investment-info-box">
                <div class="project-investment-info-item">
                    <div class="project-investment-info-item-left">项目名称</div>
                    <div class="project-investment-info-item-right">{{data.title}}</div>
                </div>
                <div class="project-investment-info-item">
                    <div class="project-investment-info-item-left">项目总额</div>
                    <div class="project-investment-info-item-right">{{data.total}}万元人民币</div>
                </div>
                <div class="project-investment-info-item">
                    <div class="project-investment-info-item-left">每日分红</div>
                    <div class="project-investment-info-item-right">按每日{{data.rate}}%的收益（保本保息）</div>
                </div>
                <div class="project-investment-info-item">
                    <div class="project-investment-info-item-left">项目期限</div>
                    <div class="project-investment-info-item-right" v-if="data.class != 4 ">{{data.day}}个自然日；（一个自然日为一天包含节假日）</div>
                    <div class="project-investment-info-item-right" v-if="data.class == 4 ">{{data.rate_hour}}小时</div>
                </div>
                <!--<div class="project-investment-info-item">
                    <div class="project-investment-info-item-left">项目期限</div>
                    <div class="project-investment-info-item-right">{{data.time}}</div>
                </div>-->
                <div class="project-investment-info-item">
                    <div class="project-investment-info-item-left">收益计算</div>
                    <div class="project-investment-info-item-right" v-if="data.class != 4 ">每日分红{{data.apr_money}}元*{{data.day}}天=总收益{{data.sun_apr_money}}元</div>
                    <div class="project-investment-info-item-right" v-if="data.class == 4 ">每小时分红{{(data.apr_money + (vip_rate/100) * data.min).toFixed(0)}}元*{{data.rate_hour}}小时=总收益{{(data.apr_money + (vip_rate/100) * data.min).toFixed(0) * data.rate_hour}}元</div>
                </div>
                <div class="project-investment-info-item">
                    <div class="project-investment-info-item-left">分红方式</div>
                    <div class="project-investment-info-item-right">{{data.type_name}}</div>
                </div>
                <div class="project-investment-info-item">
                    <div class="project-investment-info-item-left">担保机构</div>
                    <div class="project-investment-info-item-right">{{data.guarantee}}</div>
                </div>
                <div class="project-investment-info-item">
                    <div class="project-investment-info-item-left">项目概述</div>
                    <div class="project-investment-info-item-right" v-if="data.class != 4 ">本项目筹集资金{{data.total}}万元人民币，投资本项目（按每日分红{{data.apr_money}}元/天）项目周期为{{data.day}}个自然日，所筹集资金用于该项目直投运作，作为投资者分红固定且无任何风险，所操作一切风险都由公司与担保公司一律承担，投资者不需要承担任何风险。</div>
                    <div class="project-investment-info-item-right" v-if="data.class == 4 ">本项目筹集资金{{data.total}}万元人民币，投资本项目（按每小时分红{{(data.apr_money + (vip_rate/100) * data.min).toFixed(0)}}元/天）项目周期为{{data.rate_hour}}个小时，所筹集资金用于该项目直投运作，作为投资者分红固定且无任何风险，所操作一切风险都由公司与担保公司一律承担，投资者不需要承担任何风险。</div>
                </div>
                <div class="project-investment-info-item">
                    <div class="project-investment-info-item-left">安全保障</div>
                    <div class="project-investment-info-item-right">{{data.guarantee}}对平台上的每一笔投资提供100%本金保障，平台设立风险备用金，对本金承诺全额垫付</div>
                </div>
                <div class="project-investment-info-item">
                    <div class="project-investment-info-item-left">推荐奖励</div>  
					<div class="project-investment-info-item-right">点击会员中心-邀请好友-转发到您朋友圈里,只要您好友通过邀请二维码注册成为一级会员，充值并成功投资一次性还款项目，您就可以得到该好友投资金额{{data.invest1}}%的奖励，注册成功后，系统自动赠送 ！</div>

				</div>
            </div>
			</div>
			
	  <div style="margin-top:10px;">
        <img :src="data.thumb2" alt="" style="width:100%;" />
      </div>

      <div style="margin-top:10px;">
        <img :src="data.thumb3" alt="" style="width:100%;" />
      </div>

      <div style="margin-top:10px;">
        <img :src="data.thumb4" alt="" style="width:100%;" />
      </div>
	  
	  
			<div class="investment-btn-box">
				<div class="investment-btn" @click="handleInvestment">立即投标</div>
			</div>
        </div>
        <!-- 发展规划-->
        <!-- <div class="project-other-info-box">
            <div class="project-info-item-title">发展规划</div>
            <div class="project-other-info-text">项目包括 “永不落幕的跨境红酒商贸中心”、世界名庄跨贸园、主题别墅酒店、葡萄种植体验区、康养中心等。世界名庄跨贸园包含26个独立的展示、办公、经营的场所，总地上建筑面积约为22000平方米。红酒产业商务商业区规划包括一片建筑面积为13,000平方米的世界名品跨贸园南区，由20多家代表法式生活艺术的葡萄酒店、食品店、装饰品店、酒吧、餐馆等。</div>
            <div class="project-other-info-img">

            </div>
        </div> -->
        <!--资金方案-->
        <!-- <div class="project-other-info-box">
            <div class="project-info-item-title">资金方案</div>
            <div class="project-other-info-text">项目总投资约257亿元，其中，资本金185亿元，占总投资的71.98%，由项目单位以企业资金出资；资本金以外的72亿元，采用银</div>
        </div> -->
        <!--施工方案-->
        <!-- <div class="project-other-info-box">
            <div class="project-info-item-title">施工方案</div>
            <div class="project-other-info-text">国际葡萄酒小镇一期项目位于房山区城关街道，总建筑面积28124.17平方米，其中地上建筑面积19705.26平方米，地下建筑面积8418.91平方米。工作室的设计遵循环境保护、因地制宜和可持续发展的原刚，同时充分融入法国的生活艺术、文化遗产和美食文化。</div>
            <div class="project-other-info-img">

            </div>
        </div> -->
        <!--市场优势-->
        <!-- <div class="project-other-info-box">
            <div class="project-info-item-title">市场优势</div>
            <div class="project-other-info-text">随着中国葡萄酒产业的发展，粗放式的葡萄酒文化建设已经不能满足市场的需求，葡萄酒小镇的建设是中国葡萄酒产业推行精细化种植，打造集生产、文化、旅游等为一体的综合性产业的需要，也响应了国家实施乡村振兴战略，促进农村一二三产业融合发展。</div>
            <div class="project-other-info-img">

            </div>
        </div> -->
        <!--本项目为什么要众筹-->
      <!--  <div class="project-other-info-box">
            <div class="project-info-item-title">本项目为什么要众筹</div>
            <div class="project-other-info-text">为了响应房山区政府旅游“国际化”的规划要求，搭建国内外葡萄酒双向交易平台，发挥桥梁纽带作用，推动国际商贸与文化交流，满足项目快速上线的工期需求，需要长（短）期社会资本（资源）投入，现面向全社会开启众筹，加速北京葡萄酒世界博览馆开发进度。</div>
        </div> -->
        <!--<div><iframe frameborder="0" height="300" :src="data.desc" width="100%"></iframe></div>-->
        <!--<div style="margin-top:-60px;"><img :src="data.thumb2" alt="" style="width:100%;"></div>-->
        <!--<div style="margin-top:20px;margin-bottom:20px;"><img :src="data.thumb3" alt="" style="width:100%;"></div>-->
		<!--投资按钮-->
        <!--<div class="project-other-info-box imgBox">-->
        <!--    &lt;!&ndash; <img v-if="data.thumb" :src="imgPre+data.thumb" alt="" srcset=""> &ndash;&gt;-->
        <!--    <img v-if="data.thumb2" :src="data.thumb2" alt="" srcset="">-->
        <!--    <img v-if="data.thumb3" :src="data.thumb3" alt="" srcset="">-->
        <!--    <img v-if="data.thumb4" :src="data.thumb4" alt="" srcset="">-->
        <!--    <img v-if="data.thumb5" :src="data.thumb5" alt="" srcset="">-->
        <!--</div> -->
		<!-- <div class="investment-btn-box">
			<div class="investment-btn" @click="handleInvestment">立即投资</div>
		</div> -->

</div>
</template>
<!-- <template>
	<div class="app">
		<div class="top">
			<div class="top01">	
			<img src="./images/000.png" >
			</div>
			<div class="top02">
				城市污水处理厂提标扩容配套管网工程
			</div>
			<div class="top03">
				每日复利、保本保息 
			</div>
			<div class="top04">
				<div class="top04-a">
					<span>4.08%</span>
					<p>产品日利率</p>
				</div>    
				<div class="top04-b">
					<span>100</span>
					<p>每日分红</p>
				</div>
				<div class="top04-c">
					<span>8000</span>
					<p>总分红</p>
				</div>
			</div>
		</div>
		<div class="box">
			<div class="box01">
				<img src="./images/xiangmuxiangqing03.png" >
			</div>
		</div>
		<div class="text">
			<div class="text01">
				<h3>产品详情</h3>
				<div class="text01-a1">
					<div class="text01-a1a">
						项目名称
					</div>
					<div class="text01-a1b">
						北京葡萄酒世界博览馆
					</div>
				</div>
				<div class="text01-a1">
					<div class="text01-a1a">
						项目总额
					</div>
					<div class="text01-a1b">
						3950万人民币
					</div>
				</div>
				<div class="text01-a1">
					<div class="text01-a1a">
						项目地址
					</div>
					<div class="text01-a1b">
						北京市房山区
					</div>
				</div>
				<div class="text01-a1">
					<div class="text01-a1a">
						当前项目阶段
					</div>
					<div class="text01-a1b">
						施工期
					</div>
				</div>
				<div class="text01-a1">
					<div class="text01-a1a">
						项目期限
					</div>
					<div class="text01-a1b">
						1个自然日,节假日照常计算
					</div>
				</div>
				<div class="text01-a1">
					<div class="text01-a1a">
						收益计算
					</div>
					<div class="text01-a1c">
						每日分红1190.7元*项目 <br>
						周期1天=每份总收益1190.7元
					</div>
				</div>
				<div class="text01-a1">
					<div class="text01-a1a">
						分红方式
					</div>
					<div class="text01-a1b">
						每日返息，到期还本
					</div>
				</div>
				<div class="text01-a1">
					<div class="text01-a1a">
						担保机构
					</div>
					<div class="text01-a1b">
						中国太平洋保险(香港)有限公司
					</div>
				</div>
				<div class="text01-a2">
					<div class="text01-a2a">
						项目概述
					</div>
					<div class="text01-a2b">
						一座以保护、体现价值及传 <br>
						承的标志性博览馆建筑。葡 <br>
						萄酒世界博览馆充分融入当 <br>
						地葡萄园和绿色山丘的自然 <br>
						景观，将人、绿化及风景三 <br>
						个层面联系起来，同时融入 <br>
						了历史遗产、创新、情感和 <br>
						简约元素。结合法国的生活 <br>
						艺术、文化遗产和美食文化 <br>
						，旨在为公众打造中国首个 <br>
						以葡萄酒为主题的国际化商 <br>
						务休闲度假平台，推动国际 <br>
						商贸与文化交流。
					</div>
				</div>
				<div class="text01-a3">
					<div class="text01-a3a">
						安全保障
					</div>
					<div class="text01-a3b">
						中国投融资担保股份有限公 <br>
						司对平台上的每一笔投资提 <br>
						供100%本金保障，平台设立 <br>
						风险备用金，对本金承诺全 <br>
						额垫付
					</div>
				</div>
				<div class="text01-a4">
					<div class="text01-a4a">
						推荐奖励
					</div>
					<div class="text01-a4b">
						点击会员中心-邀请好友-转 <br>
						发到您朋友圈里,只要您好友 <br>
						通过邀请二维码注册成为一 <br>
						级会员，充值并成功投资一 <br>
						次性还款项目，您就可以得 <br>
						到该好友投资金额3.00%的 <br>
						奖励，注册成功后，系统自 <br>
						动赠送！
					</div>
				</div>
			</div>
			<div class="bottom">
				<div class="bottom1" @click="handleInvestment">
					立即投标
				</div>
			</div>
		</div>
	</div>
</template> -->
<script>

    import Fetch from '../../utils/fetch'

    export default {
        name: "index",
        components: {},
        data() {
            return {
                data: {},
                id:0,
				details: false,
				showInvestmentAction: false,
				passwd: '',
                money: '',
                imgPre:'',
				integral:'',
                vipname:'',
                rate:''
            };
        },
        created() {
			if(this.$parent.footer_type == 'n1'){
				this.$router.push('/tree');
				return;
			}
            this.$parent.footer(false);
        },
        mounted() {
            this.id = this.$router.history.current.params.id;
            this.start();
			window.addEventListener("scroll", this.handleScroll, true);
        },
        methods: {
            start() {
				setTimeout(() => {
					var element = document.getElementById("app");
					element.scrollIntoView();
				}, 0)
                Fetch('/index/item_view', {id: this.id}).then(res => {
                    console.log(res.data.view)
                    this.data = res.data.view;
                });
				Fetch('/user/info').then((res) => {
                this.integral = res.data.value;
                this.vipname  = res.data.vip_name;
                this.rate     = res.data.vip_rate;
                });
            },

            getApply() {
                return '/item/apply/' + this.id;
            },
			// 立即投资
			handleInvestment() {
				this.$router.push({name: 'apply', params: {id: this.id}});
				// this.showInvestmentAction = true;
			},
			handleSubmit() {

				if (!this.money) {
					this.$notify("请输入投入金额");
					return;
				}

				if (!this.passwd) {
					this.$notify("请输入交易密码");
					return;
				}

				Fetch("/index/item_apply", {
					id: this.id,
					money: this.money,
					pwd: this.passwd
				}).then(() => {
					this.$notify({
						background: '#07c160',
						message: '投资成功'
					});
					this.showInvestmentAction = false;
					this.start();
				})
			},
			show_detail(){
				this.details = !this.details;
			},
			gotop(){
				let top = document.documentElement.scrollTop || document.body.scrollTop;
				const timeTop = setInterval(() => {
					document.body.scrollTop = document.documentElement.scrollTop = top -= 30;
					if (top <= 0) {
						clearInterval(timeTop);
					}
				}, 10);
			},
			// 忘记密码
			handleForgetPassword() {
				this.$router.push({name: 'resetpaypwd'});
			},
            schedule(schedule) {
                return {
                    width: schedule + '%',
                };
            },
        }
    };
</script>

<style lang="less" scoped>

	@import "details";
	
	.my-assets-list-box {
				padding: 0px 20px 20px;
                background: #E1C29B;                  			
                .my-assets-list-item {
                    text-align: center;
                    .item-info {
                        color:#f69220;
                        font-size: 17px;
                        font-weight: bold;
                        margin:10px;
                    }
                    .item-text{
                        font-size: 13px;
                        font-weight: bold;
                        color: #000;
                        margin-top: 13px;
                    }
                }
            }
</style>
