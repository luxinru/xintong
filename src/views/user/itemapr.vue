<template>
    <div class="investment-record-detail-container">
        <div class="record-detail-header-box">
		<div class="bot">
           <div class="box">
           	<div class="box1"> {{data.money}}</div>
			<div class="box2">投资金额(元)</div>
           </div>
		   <div class="box">
		   	<div class="box1"> {{data.apr_money}}</div>
		   	<div class="box2">预计收益(元)</div>
		   </div>
		</div>
		<div class="acter">
			<div class="acter1">投资时间: {{data.addtime_date}}</div>
			<div class="acter1">到期时间: {{data.end_time_date}}</div>
		</div>
		   
            <!-- <div class="header-bottom">
                <div class="header-bottom-item">
                    <div class="header-title">投资金额: {{data.money}}元</div>
                    <div class="header-time">投资时间: {{data.addtime_date}}</div>
                </div>
                <div class="header-bottom-item">
                    <div class="header-title">预计收益: {{data.apr_money}}元</div>
                    <div class="header-time">到期时间: {{data.end_time_date}}</div>
                </div>
            </div> -->
        </div>
        <div class="record-detail-list">
            <div class="record-detail-list-box">
                <div class="investment-list-box" v-for="item in data.apr_plan" :key="item.id">
                   <!-- <div class="investment-list-line">
                        <div class="investment-list-line-top"></div>
                        <div class="investment-list-line-bottom"></div>
                    </div> -->
                    <div class="investment-list-info-box">
                        <div class="list-info-top">
                            <!-- <div class="list-info-top-left">应收时间：{{item.time1}}</div> -->
                            <!-- <div class="list-info-top-right">{{item.time1Copy != '0000-00-00' ? item.time1Copy : '未完成'}}</div> -->
                        </div>
                        <div class="investment-list-info">
                            <div class="project-name-box">
                                <div class="project-name">{{ item.title }}  <img src="./images/fan.png" ></div>
                                <!-- <div class="status-icon" v-if="item.status == 1"></div> -->
                            </div>
                            <div class="project-tag-box">
                                <div class="project-tag">第{{item.num}}期</div>
                            </div>
							
							<div class="too">
                            <div class="project-money one">
                                <div class="project-money-left">投资金额(元)</div>
								<div class="acc">{{data.money}}</div>
                            </div>
                            <div class="project-money">
                                <div class="project-money-left">预计收益(元)</div>
								<div class="acc">{{data.apr_money}}</div>
                            </div>
							<div class="cha">
								查询合同
							</div>
							</div>
							<div class="list-info-top-left">应收时间：{{item.time1}}  <span>完成</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="record-detail-list-box"> -->
        <!--<div class="record-detail-list-item" v-for="item in data.apr_plan" :key="item.id">-->
        <!--    <div class="top">-->
        <!--        <div class="top-num">第{{item.num}}期</div>-->
        <!--        <div class="top-title">{{ item.title }}</div>-->
        <!--    </div>-->
        <!--    <div class="middle">-->
        <!--        <p class="middle-time">应收时间:{{item.time1Copy}}</p>-->
        <!--        &lt;!&ndash;<p class="middle-status">{{item.status == 1 ? '已完成' : '未完成'}}</p>&ndash;&gt;-->
        <!--    </div>-->
        <!--    <div class="bottom">-->
        <!--        <div class="bottom-left">-->
        <!--            <p class="bottom-money">{{item.money2}}</p>-->
        <!--            <p class="bottom-title">应收本金(元)</p>-->
        <!--        </div>-->
        <!--        <div class="bottom-right">-->
        <!--            <p class="bottom-money">{{item.money2}}</p>-->
        <!--            <p class="bottom-title">应收利息(元)</p>-->
        <!--        </div>-->
        <!--    </div>-->
        <!--    <div class="list-item-right">{{item.status == 1 ? '已完成' : '未完成'}}</div>-->
            <!-- <div class="list-item-box">
                <div class="list-item-left">期号</div>
                <div class="list-item-right">{{item.num}}</div>
            </div>
            <div class="list-item-box">
                <div class="list-item-left">应收本金</div>
                <div class="list-item-right">{{item.money2}}</div>
            </div>
            <div class="list-item-box">
                <div class="list-item-left">应收利息</div>
                <div class="list-item-right">{{item.money1}}</div>
            </div>
            <div class="list-item-box">
                <div class="list-item-left">应收时间</div>
                <div class="list-item-right">{{item.time1Copy}}</div>
            </div>
            <div class="list-item-box">
                <div class="list-item-left">收益时间</div>
                <div class="list-item-right">{{item.time1Copy != '0000-00-00' ? item.time1Copy : '未完成'}}</div>
            </div>
            <div class="list-item-box">
                <div class="list-item-left">状态</div>
                <div class="list-item-right">{{item.status == 1 ? '已完成' : '未完成'}}</div>
            </div> -->
            <!--<div class="list-item-title">-->
            <!--    <div class="list-item-title-left">-->
            <!--        <div class="left-num">{{item.num}}</div>-->
            <!--    </div>-->
            <!--    <div class="list-item-title-right">{{item.status == 1 ? '已完成' : '未完成'}}</div>-->
            <!--</div>-->
            <!--<div class="list-item-info">-->
            <!--    <div>-->
            <!--        <div class="list-item-info-top topNum">{{item.money2}}</div>-->
            <!--        <div><span class="list-item-info-name littleBox">应收本金</span></div>-->
            <!--    </div>-->
            <!--    <div>-->
            <!--        <div class="list-item-info-top"><span class="list-item-info-name">应收利息</span>{{item.money1}}</div>-->
            <!--        <div><span class="list-item-info-name">收益时间</span>{{item.time1Copy != '0000-00-00' ? item.time1Copy : '未完成'}}</div>-->
            <!--    </div>-->
            <!--</div>-->
            <!--<div class="bottom-name"><span >应收时间</span>{{item.time1Copy}}</div>-->
        <!--</div>-->
        <!-- </div> -->
    </div>
</template>

<script>

    import Fetch from '../../utils/fetch'

    export default {
        name: "index",
        components: {},
        data() {
            return {
                data: {},
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
            this.start();
        },
        methods: {
            start() {
                Fetch('/index/interest', {id: this.$router.history.current.params.id}).then(res => {
                    if (res.data && res.data.apr_plan && res.data.apr_plan.length) {
                        res.data.apr_plan.forEach(item => {
                            item.time1Copy = item.time1 ? item.time1.split(' ')[0] : '';
                            item.time2Copy = item.time1 ? item.time2.split(' ')[0] : '';
                        });
                    }
                    this.data = res.data;
                })
            },
        }
    };
</script>

<style lang="less" scoped>
    @import "itemapr";
</style>
