<template>
  <div class="tree-container">
    <div class="tree-header">
      <div class="tree-notice-box">
        <div class="tree-notice">
          <van-notice-bar
            background="#ffffff"
            color="#1B0A1C"
            :text="data.notice"
          >
            <template #left-icon>
              <img
                src="@/assets/0226/0219首页_slices/公告.png"
                alt=""
              />
            </template>
          </van-notice-bar>
        </div>
        <div class="funs">
          <div class="item" @click="handleTreeListItemClick(1)">
            <img src="@/assets/0226/0219首页_slices/组 4996.png" alt="">
            <span>每日签到</span>
          </div>
          <div class="item"  @click="handleTreeListItemClick(4)">
            <img src="@/assets/0226/0219首页_slices/组 4996 拷贝.png" alt="">
            <span>知识问答</span>
          </div>
          <div class="item" @click="handleTreeListItemClick(12)">
            <img src="@/assets/0226/0219首页_slices/组 4996 拷贝 2.png" alt="">
            <span>邀请好友</span>
          </div>
          <div class="item" @click="handleTreeListItemClick(6)">
            <img src="@/assets/0226/0219首页_slices/组 4996 拷贝 3.png" alt="">
            <span>积分商城</span>
          </div>
        </div>
      </div>
    </div>

    <div class="travel">
      <div class="item" @click="$router.push({ name: 'travel' })">
        <span>旅游知识</span>
        <img src="@/assets/0226/0219首页_slices/61a2a8c4f7e8165d17ea2e9dd2cf3bda9fff476215f61-wHBB8b_fw1200.png" alt="">
      </div>
      <div class="item" @click="$router.push({ name: 'vacation' })">
        <span>度假攻略</span>
        <img src="@/assets/0226/0219首页_slices/d40faa318cb3bc5cecc1fda21dea1147cf97f6de2240a-aDHO1G_fw1200.png" alt="">
      </div>
    </div>

    <!-- 热门推荐 -->
    <div class="tuijian">
      <div class="tuijian_title">
        <div class="left">
          <img src="@/assets/0226/0219首页_slices/椭圆 10 拷贝.png" alt="">
          <span>积分商城</span>
        </div>
        <div class="right" @click="handleTreeListItemClick(6)">
          <span>更多</span>
          <img src="@/assets/0226/0219首页_slices/返回 拷贝 14.png" alt="">
        </div>
      </div>

      <div class="tuijian_inner">
        <div class="inner_list">
          <div class="img_box">
            <img src="./../../assets/images/shufeng/index/index02.png" alt="" />
          </div>
          <div class="txt_box">
            <div class="txt-one">
              <span>KUKA按摩椅</span>
              <p>80000积分</p>
            </div>
            <div class="txt-tow" @click="handleTreeListItemClick(6)">
              <button>立即兑换</button>
            </div>
          </div>
        </div>
        <div class="inner_list">
          <div class="img_box">
            <img src="./../../assets/images/shufeng/index/index01.png" alt="" />
          </div>
          <div class="txt_box">
            <div class="txt-one">
              <span>iPhone13Pro</span>
              <p>100000积分</p>
            </div>
            <div class="txt-tow" @click="handleTreeListItemClick(6)">
              <button>立即兑换</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 60px"></div>

    <div class="mask" v-show="ad_show" z-index="999">
      <div class="ops">
        <div class="close">
          <div @click="close()">关闭</div>
        </div>
        <a @click="goAd()">
          <img :src="ad.activity_img" />
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import Fetch from '../../utils/fetch'
// import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
export default {
  name: 'index',
  components: {  },
  data() {
    return {
      footer_type: 'n1',
      data: {
        app: {},
        notice: '',
      },
      down_show: true,
      link_width: 0,
      banner: [],
      notice: '',
      links: [],
      type: 'n1',
      ad: {},
      ad_show: false,
      examinationData: [
        {
          id: '1',
          name: 'one',
          question: '...',
        },
      ],
      indexMenuType: 1,
    }
  },

  computed: {
    indexMenuInfoBackClasses() {
      return `info-back-class-${this.indexMenuType}`
    },
  },
  created() {
    if (this.$parent.getFooterType() === 'n1') {
      this.$router.push('/tree').catch((err) => {
        err
      })
      this.$parent.footer(true, 'tree')
    } else {
      this.$parent.footer(true, 'tree')
      this.$data.footer_type = 'n2'
    }
  },
  mounted() {
    this.start()
    var that = this
    var bslua = navigator.userAgent
    if (bslua.indexOf('bsl') != -1) {
      that.down_show = false
    }
  },

  methods: {

    getIputValue(index) {
      // console.log(index + 1 + "题" + this.radio);
      this.allRadio[index] = this.radio[index] // 将数据存入提交给后台的数据中
      console.log(this.allRadio)
      // console.log(this.radio)
    },
    toBox(title = '', contain = '') {
      var newsBox = document.getElementsByClassName('modal')[0]
      newsBox.style.display = 'block'

      var bodyBox = document.getElementsByClassName('body-box')[0]
      bodyBox.innerHTML = contain
      var newsTitle = document.getElementsByClassName('news-title')[0]
      newsTitle.innerText = title
    },
    checkin2() {
      this.$router.push('/qiandao')
    },
    closeBox() {
      var newsBox = document.getElementsByClassName('modal')[0]
      newsBox.style.display = 'none'
    },

    appdown_close() {
      this.data.app.is_disable = 'N'
    },
    goAd() {
      // this.close();
      // this.$router.push(this.ad.url).catch(err => {err});
      this.close()
      this.$router.push(this.ad.url)
    },
    close() {
      this.ad_show = false
    },
    start() {
      setTimeout(() => {
        var element = document.getElementById('app')
        element.scrollIntoView()
      }, 0)
      this.type = this.$parent.getFooterType()
      Fetch('/index/int').then((res) => {
        this.ad = res.data.ad
        this.data = res.data

        if (res.data.ad.activity_status == 1) {
          this.ad_show = true
        } else {
          this.ad_show = false
        }
      })

      /* Fetch('/api/api/image', {type: 'links'}).then(res => {
                    this.links = res.data;
					this.link_width = res.data.length * 23 + (res.data.length-1)*2+"%"
                }); */

      // Fetch('/index/banner', {
      //   type: 'banner',
      // }).then((res) => {
      //   console.log(res)
      //   this.banner = res.data
      // })
    },
    onChange(index) {
      let els = this.$refs.dian.querySelectorAll('div')
      for (let i = 0; i < els.length; i++) {
        els[i].className = ''
      }
      els[index].className = 'selected'
    },
    schedule(schedule) {
      return {
        width: schedule + '%',
      }
    },
    schedule_left(schedule) {
      if (schedule > 80) {
        return {
          left: schedule - 30 + '%',
          color: '#fff',
        }
      } else {
        return {
          left: schedule.slice(0, 5) + '%',
        }
      }
    },
    handleTreeListItemClick(type = 1) {
      switch (type) {
        case 1:
          this.checkin2()

          break
        case 2:
          this.$router.push({ name: 'scratch_card' })
          break
        case 3:
          this.$router.push({ name: 'sport_event' })
          break
        case 4:
          this.$router.push({ name: 'wenjuan' })
          break
        case 5:
          this.$router.push({ name: 'prize' })
          break
        case 6:
          this.$router.push({ name: 'goods' })
          break
        case 7:
          this.$router.push({ name: 'item' })
          break
        case 8:
          this.$router.push({ name: 'baoku' })
          break
        case 9:
          this.$router.push({ name: 'qiandao' })
          break
        case 10:
          this.$router.push({ name: 'alipay' })
          break
        case 11:
          this.$router.push({ name: 'about' })
          break
        case 12:
          this.$router.push({ name: 'share' })
          break
        case 13:
          this.$router.push({ name: 'alipay' })
          break
      }
    },
    handleMenuSwitch(type) {
      if (this.indexMenuType === type) return
      this.indexMenuType = type
    },
    goToDetail() {
      if (this.indexMenuType == 1) {
        this.handleTreeListItemClick(9)
      }
      if (this.indexMenuType == 2) {
        this.$router.push('/question_type')
      }
      if (this.indexMenuType == 3) {
        this.$router.push('/share')
      }
      if (this.indexMenuType == 4) {
        this.$router.push('/alipay')
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import 'tree';
</style>
