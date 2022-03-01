<template>
  <div class="page_root">
    <section class="header_box">
      <div class="header">
        <img src="@/assets/0226/旅游知识_slices/返回 (1).png" @click="goBack" />
        <span>清明节辽宁...</span>
      </div>
    </section>

    <section class="content">
      说起辽宁省内的水洞,很多人往往想到的是著名的本溪水洞,其实沈阳也有一座水洞,就位于沈阳市苏家屯区的白清寨乡。
      <img src="@/assets/0226/度假攻略_slices/图层 10.png" alt="">
      说起辽宁省内的水洞,很多人往往想到的是著名的本溪水洞,其实沈阳也有一座水洞,就位于沈阳市苏家屯区的白清寨乡。随着天气转暖,前往沈阳水洞内探幽,别有乐趣,自驾路线:沈阳市內-沈丹高速公路-在杨千户岀口下道-沿省道107向东行驶-在沈阳市风机制造厂处右转进入广福路-行驶4公里到达。里程数:全程50公里左右,路程较短,可当天往返,适合自驾行的新手进行尝试。本溪绿石谷绿石谷国家森林公园是东北地区最大的苔藓石群,绿石由此而来。初春的绿石谷,簇簇映山红,大杜鹃花铺满峰巅崖头。森林覆盖率汋90%,植被完好,生态原始自然。“绿石谷”“和尚帽子”两大景区浑然一体,构成一幅巨大的天然画卷。百余处景点,是一个秀美的山水型自然风景区。
      <img src="@/assets/0226/度假攻略_slices/图层 10.png" alt="">
      说起辽宁省内的水洞,很多人往往想到的是著名的本溪水洞,其实沈阳也有一座水洞,就位于沈阳市苏家屯区的白清寨乡。随着天气转暖,前往沈阳水洞内探幽,别有乐趣,自驾路线:沈阳市內-沈丹高速公路-在杨千户岀口下道-沿省道107向东行驶-在沈阳市风机制造厂处右转进入广福路-行驶4公里到达。里程数:全程50公里左右,路程较短,可当天往返,适合自驾行的新手进行尝试。本溪绿石谷绿石谷国家森林公园是东北地区最大的苔藓石群,绿石由此而来。初春的绿石谷,簇簇映山红,大杜鹃花铺满峰巅崖头。森林覆盖率汋90%,植被完好,生态原始自然。“绿石谷”“和尚帽子”两大景区浑然一体,构成一幅巨大的天然画卷。百余处景点,是一个秀美的山水型自然风景区。
      <img src="@/assets/0226/度假攻略_slices/图层 10.png" alt="">
      说起辽宁省内的水洞,很多人往往想到的是著名的本溪水洞,其实沈阳也有一座水洞,就位于沈阳市苏家屯区的白清寨乡。随着天气转暖,前往沈阳水洞内探幽,别有乐趣,自驾路线:沈阳市內-沈丹高速公路-在杨千户岀口下道-沿省道107向东行驶-在沈阳市风机制造厂处右转进入广福路-行驶4公里到达。里程数:全程50公里左右,路程较短,可当天往返,适合自驾行的新手进行尝试。本溪绿石谷绿石谷国家森林公园是东北地区最大的苔藓石群,绿石由此而来。初春的绿石谷,簇簇映山红,大杜鹃花铺满峰巅崖头。森林覆盖率汋90%,植被完好,生态原始自然。“绿石谷”“和尚帽子”两大景区浑然一体,构成一幅巨大的天然画卷。百余处景点,是一个秀美的山水型自然风景区。
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
    background: url('~@/assets/0226/度假攻略_slices/图层 10.png')
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

      span {
        font-size: 17px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        margin-left: 14px;
      }
    }
  }

  .content {
    width: 100%;
    flex: 1 0;
    background: #ffffff;
    border-radius: 13px 13px 0px 0px;
    margin-top: -80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding: 42px 22px;
    box-sizing: border-box;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #343E48;
    line-height: 22px;

    img {
      width: 333px;
      height: 170px;
      margin: 22px auto;
    }
  }
}
</style>
