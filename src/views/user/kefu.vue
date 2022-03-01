<template>

</template>

<script>

    import Fetch from '../../utils/fetch'

    export default {
        name: "index",
        components: {},
        data() {
            return {
                data: {}
            };
        },
        created() {
            this.$parent.footer(true, 'tree');
        },
        mounted() {
            this.start();
        },
        methods: {
            start() {

                Fetch('/index/webconfig', {type: 'web'}).then(res => {
                    this.data = res.data;
					if(this.data.user_info !== ''){
						var userinfo = JSON.parse(this.data.user_info);
						_MEIQIA('metadata', {
						        name: userinfo.name, // 美洽默认字段
						        tel: userinfo.phone
						});
					}
					_MEIQIA('showPanel');
                })
            },
        }
    };
</script>

<style lang="less" scoped>

    .kefu_v {
        position: fixed;
        width: 100%;
        height: 100%;
        -webkit-overflow-scrolling: touch;
        overflow-y: scroll;

        iframe {
            padding-bottom: 55px;
            width: 100%;
            height: 100%;
        }
    }
</style>


