<template>
  <div class="page_root">
    <section class="header_box">
      <div class="header">
        <img src="@/assets/0226/旅游知识_slices/返回 (1).png" @click="goBack" />
        <span>{{ title }}</span>
      </div>
    </section>

    <section class="content" v-html="content"></section>
  </div>
</template>


<script>
import Fetch from '../../utils/fetch'

export default {
  name: 'travel',
  data() {
    return {
      title: '',
      content: '',
    }
  },
  created() {
    this.$parent.footer(false)
  },

  computed: {
    id () {
      return this.$route.query.id
    },
    type () {
      return this.$route.query.type
    }
  },

  mounted() {
    this.init()
  },

  methods: {
    async init () {
      const res = await Fetch(this.type === '1' ? '/index/travel_detail' : '/index/vacation_detail', { id: this.id }, { method: 'get' })
      console.log('res :>> ', res);
      const { data: { title, content } } = res
      this.title = title
      this.content = content
    },


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
        flex: 1 0;
        font-size: 17px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        margin-left: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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

    /deep/ img {
      width: 333px;
      margin: 22px auto;
    }
  }
}
</style>
