<template>
  <div class="page_root">
    <section class="header_box">
      <div class="header">
        <img src="@/assets/0226/旅游知识_slices/返回 (1).png" @click="goBack" />
      </div>
    </section>

    <section class="content">
      <div class="title">
        <img src="@/assets/0226/0219首页_slices/椭圆 10 拷贝.png" alt="" />
        <span>旅游知识精选</span>
      </div>
      <div class="list">
        <div class="item" v-for="index in 13" :key="index" @click="$router.push({ name: 'holiday_detail' })">
          <img src="@/assets/0226/旅游知识_slices/图层 9.png" alt="">
          <div class="info">
            <span>2021春节山东免费的景点</span>
            <span>
              济南是一座具有悠久历史的古城,这个春节不妨去济南走走,岀去玩要提前做...
            </span>
            <span>2022.02.25</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: 'travel',
  data() {
    return {}
  },
  created() {
    this.$parent.footer(false)
  },
  mounted() {},

  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="less" scoped>
.page_root {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header_box {
    width: 100%;
    height: 250px;
    background: url('~@/assets/0226/旅游知识_slices/kalen-emsley-Bkci_8qcdvQ-unsplash.png')
      no-repeat;
    background-size: 100% 100%;

    .header {
      width: 100%;
      height: 44px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      box-sizing: border-box;

      img {
        width: 11px;
        height: 20px;
      }
    }
  }

  .content {
    width: 100%;
    flex: 1 0;
    background: #ffffff;
    border-radius: 13px 13px 0px 0px;
    margin-top: -13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding: 30px 22px;
    box-sizing: border-box;

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      img {
        width: 11px;
        height: 7px;
        margin: 0 11px 0 0;
      }

      span {
        font-size: 17px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #0a0a0a;
      }
    }

    .list {
      width: 100%;
      flex: 1 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 22px;

      .item {
        width: 100%;
        height: 104px;
        display: flex;
        margin-top: 48px;
        
        &:first-child {
          margin-top: 0;
        }

        img {
          width: 146px;
          height: 100%;
          margin-right: 16px;
        }

        .info {
          flex: 1 0;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          span {
            &:nth-child(1) {
              font-size: 15px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #242629;
            }

            &:nth-child(2) {
              font-size: 11px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(36, 38, 41, 0.5);
              line-height: 12px;
            }

            &:nth-child(3) {
              width: 100%;
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #7B7D80;
              text-align: right;
            }
          }
        }
      }
    }
  }
}
</style>
