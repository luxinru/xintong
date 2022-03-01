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
          <div class="img_box">
            <img src="@/assets/0226/度假攻略_slices/图层 10.png" alt="">
            <span>清明节辽宁省內自驾游攻略</span>
          </div>
          <div class="info">
            说起辽宁省内的水洞,很多人往往想到的是著名的本溪水洞,其实沈阳也有一座水洞,就位于沈阳市苏家屯区的白清寨乡。
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
    background: url('~@/assets/0226/度假攻略_slices/allyson-beaucourt-m_uSWBJWr0s-unsplash.png')
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
        display: flex;
        flex-direction: column;
        margin-top: 16px;
        
        &:first-child {
          margin-top: 0;
        }

        .img_box {
          position: relative;
          width: 100%;
          height: 131px;

          img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }

          span {
            position: absolute;
            width: calc(100% - 40px);
            left: 20px;
            bottom: 12px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #FFFFFF;
          }
        }

        .info {
          padding: 13px 20px;
          font-size: 11px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #242629;
          line-height: 15px;
        }
      }
    }
  }
}
</style>
