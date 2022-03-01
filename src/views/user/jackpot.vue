<template>
	<div class="cost_main">
	        <div class="header">
				<div class="head" v-if="footer_type === 'n2'">
					<van-icon class="iconLeft" name="arrow-left"  @click="$router.push('/info')" />
					<span></span>
					<div>
						<!-- <img class="question" src="./image/question.png" alt="" @click="handleGoBaoKugz"> -->
					</div>
				</div>
				
				<div class="head" v-if="footer_type === 'n1'">
					<van-icon class="iconLeft" name="arrow-left"  @click="$router.push('/user')" />
					<span></span>
					<div>
						<!-- <img class="question" src="./image/question.png" alt="" @click="handleGoBaoKugz"> -->
					</div>
				</div>
				
			</div>
		<div class="list" v-for="(item, key) in data.list" :key="key" @click="goToDetail(item.pid)">
			<div class="left">
				<p>
					<span>￥</span>
					<span>{{item.money}}</span>
				</p>
				<p>抵用券</p>
			</div>
			<div class="right">
				<p>{{item.title}}</p>
				<p>有效期：{{item.out_time}}</p>
			</div>
		</div>
		<!-- <div class="fund_wrap">
			<van-row>
				<van-col :span="24" v-for="(item, key) in data.list" :key="key" >
					<div class="item">
						<div class="s-left">
							<p class="titles">代金券</p>
							<p class="yuan">{{item.money}} <span class="titles">元</span> </p>
							
						</div>
						<div class="s-right">
							<span class="title">适用于投资【{{item.title}}】</span>
							
							<div class="van-ellipsis" >
								<div style="opacity:0.5">
									<p>到期时间：</p>
									{{item.out_time}}
								</div>
								
								<div class="btns" @click="goToDetail(item.pid)">立即使用</div>
							</div>

							
						</div>
					</div>
				</van-col>
			</van-row>
		</div> -->
	</div>
</template>

<script>
	import Fetch from '../../utils/fetch';
	import moment from "moment";

	export default {
		name: "index",
		components: {},
		data() {
			return {
				data: {},
				footer_type: 'n1',
			};
		},
		created() {
		    var type = localStorage.getItem('footer');//获取指定key本地存储的值
			if (type) {
				this.footer_type = type;
			}
			this.$parent.footer(false);
		},
		filters: {
			dateFormat(time) {
				return moment(time).format('YYYY.MM.DD HH:mm');
			},
		},
		mounted() {
			this.start();
		},
		methods: {
			start() {

				Fetch('/user/my_voucher').then(res => {
					this.data = res.data;
					
					console.log('111',res)
					
				})

			},
			goToDetail(id) {
				//this.$router.replace('/item/' + id);
				this.$router.push('/item/'+ id)
			},
			status(v) {
				if (v == '0') {
					return 'color:#67C23A';
				}

				if (v == '1') {
					return 'color:#E6A23C'
				}

				if (v == '2') {
					return 'color:red'
				}
			}
		}
	};
</script>

<style lang="less" scoped>
.cost_main {
	background-color: #F5F5F5;
	padding: 30px 16px;
	min-height: 100%;
	font-family: PingFang SC;
	.header,.head{
		background-color: rgba(0, 0, 0, 0);
		// background-color: #fff;
		border: none;
		color: #fff;
		// border-bottom: solid 1px #ffffff;
		.question{
			width: 19px;
		}
		
	}
	.head{
		display: flex;
		justify-content: space-between;
		padding: 0 13px;
		.iconLeft{
			position: relative;
			top: 12px;
			font-size: 22px;
		}
	}
	.list{
		background-image: url('./images/xg/quan_bg.png');
		background-size: 100% 100%;
		// padding-top: 22px;
		// padding-bottom: 17px;
		display: flex;
		align-items: center;
		margin-bottom: 12px;
		&:last-child{
			margin-bottom: 0;
		}
		.left{
			width: 109px;
			text-align: center;
			flex-shrink: 0;
			p:first-child{
				display: flex;
				justify-content: center;
				// align-items: flex-end;
				font-weight: bold;
				color: #FFFFFF;
				span:first-child{
					font-size: 17px;
					margin-top: 12px;
				}
				span:last-child{
					font-size: 31px;
				}
			}
			p:last-child{
				font-size: 11px;
				font-weight: 400;
				color: #FFFFFF;
				margin-top: 9px;
			}
		}
		.right{
			// padding-left: 20px;
			// padding-right: 18px;
			padding: 17px 18px 12px;
			// font-size: 15px;
			p:first-child{
				font-size: 15px;
				font-weight: 500;
				color: #2F2F2F;
				line-height: 20px;
			}
			p:last-child{
				font-size: 11px;
				font-weight: 400;
				color: #949494;
				margin-top: 20px;
			}
		}
	}
}
</style>
