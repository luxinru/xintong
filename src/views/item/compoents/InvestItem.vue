<template>

    <div class="project-item-container">
       
        <div class="project-img-box">
            <img :src="investInfo.thumb" alt=""/>
        </div>
        <div class="project-item-header">
            <div class="project-name">{{ investInfo.title }}</div>
            <div class="project-number">期限：{{ investInfo.day }}天</div>
        </div>
        <div class="project-tag-box">
            <div class="project-tag-item">{{ investInfo.type_name }}</div>
            <div class="project-tag-item">{{ investInfo.min }}起投</div>
        </div>
        <div class="project-info-list">
            <div class="project-info-list-item">
                <div class="project-info-list-item-bottom one-bottom">{{ investInfo.rate }} <span>%</span></div>
                <div class="project-info-list-item-top">日利率</div>
            </div>
            <div class="project-info-list-item">
                <div class="project-info-list-item-bottom">{{ investInfo.apr_money }} <span>元</span></div>
                <div class="project-info-list-item-top">每日分红</div>
            </div>
            <div class="project-info-list-item">
                <div class="project-info-list-item-bottom">{{ investInfo.sun_apr_money }} <span>元</span></div>
                <div class="project-info-list-item-top">总分红</div>
            </div>
        </div>
        <div class="project-progress-warp">
            <div class="project-progress-box">
                <div class="project-progress" :style="schedule(investInfo.schedule)"></div>
            </div>
            <div class="progress-value">{{investInfo.schedule}}%</div>
        </div>
        <div class="project-footer">
            <div class="project-btn-box">
                <div class="project-size">项目规模：<span>{{ investInfo.total }}万元</span></div>
                <div class="project-btn">立即投资</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        investInfo: {
            type: Object,
            default: () => {
            },
        },
        showBtn: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        schedule(schedule) {
            return {
                width: schedule + '%',
            };
        },
    },
};
</script>
<style lang="less" scoped>
.project-item-container {
    background: #FFFFFF;
    box-shadow: 0px 0px 13px 0px rgba(0, 4, 26, 0.05);
    border-radius: 13px;
    margin-top: 13px;
    overflow: hidden;
    font-family: PingFang SC;
    .project-img-box {
        height: 164px;

        > img {
            width: 100%;
            height: 100%;
            //border-radius: 7px;
        }
    }
    .project-item-header {
        display: flex;
        justify-content: space-between;
        padding: 18px 24px 15px 15px;
        .project-name {
            font-size: 15px;
            font-weight: bold;
            color: #333B4C;
            padding-right: 10px;
            line-height: 20px;
        }

        .project-number {
            height: 18px;
            line-height: 18px;
            padding: 0 8px;
            background: linear-gradient(90deg,#FF8215 0%,#FD5E1F 100%);
            border-radius: 3px;
            font-size: 10px;
            font-weight: 400;
            color: #FFFFFF;
        }
    }

    .project-tag-box {
        display: flex;
        align-items: center;
        padding: 0px 24px 15px 15px;

        .project-tag-item {
            height: 21px;
            line-height: 21px;
            padding: 0 9px;
            text-align: center;
            background: linear-gradient(90deg,#FF8215 0%,#FD5E1F 100%);
            border-radius: 3px;
            font-size: 11px;
            font-weight: 500;
            color: #FFFFFF;
            margin-right: 10px;
        }
    }

    .project-info-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px 21px 15px;

        &-item {
            &-top {
                font-size: 13px;
                font-weight: 500;
                color: #7F848F;
                padding-top: 9px;
            }

            &-bottom {
                font-size: 25px;
                font-weight: bold;
                color: #EE4034 ;
                >span {
                    font-size: 13px;
                }

                &.one-bottom {
                    color: #EE4034;
                }
            }
        }
    }

    .project-progress-warp {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 19px 17px;
        .project-progress-box {
            flex: 1;
            height: 8px;
            border-radius: 4px;
            border: 1px solid #F8F8F8;
            background-color: #F8F8F8;

            .project-progress {
                height: 6px;
                border-radius: 4px;
                background-color: #EC171E ;
            }
        }
        .progress-value {
            width: auto;
            font-size: 12px;
            font-weight: 500;
            color: #F33B20 ;
            padding-left: 12px;
        }
    }

    .project-footer {
        padding: 0 19px 16px;
        .project-btn-box {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .project-size {
                font-size: 13px;
                font-weight: 500;
                color: #3E3E3E;
                > span {
                    color: #F33B20 ;
                }
            }

            .project-btn {
                width: 103px;
                height: 29px;
                background: #F33B20 ;
                border-radius: 15px;
                line-height: 29px;
                text-align: center;
                font-size: 13px;
                font-weight: 400;
                color: #FFFFFF;
            }
        }
    }
}
</style>
