<template>
  <div id="down">
    <van-icon
      class="iconLeft"
      name="arrow-left"
      color="#fff"
      @click="$router.replace('/')"
    />
    <img
      style="max-width: 100%"
      src="@/assets/0226/1214下载页.png"
      @click="navxiazai()"
    />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      href1: '',
    }
  },
  created() {
    this.$parent.footer(false, 'tree')
    // this.navxiazai();
  },
  mounted() {
    var u = navigator.userAgent,
      app = navigator.appVersion
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //android终端或者uc浏览器
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端

    if (isAndroid) {
      this.href1 =
        'https://xintong202111.oss-cn-guangzhou.aliyuncs.com/xintong.apk'
    }
    if (isiOS) {
      this.href1 = 'https://apps.apple.com/cn/app/id1590374776'
    }
  },
  methods: {
    navxiazai() {
      console.log('111111111 :>> ', 111111111)
      window.location.assign(this.href1)
    },
  },
}
</script>

<style>
#down {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.iconLeft {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 1;
}
</style>
