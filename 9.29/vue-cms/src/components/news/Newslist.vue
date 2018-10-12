<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../images/1.png">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间:2018-12-12 12:12:13</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/news/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间:{{item.add_time| dataFormat}}</span>
                            <span>点击：{{tiem.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
  export default {
    name: 'Newslist',
    data(){
      return{
        newslist:[]
      };
    },
    created(){
      this.getNewsList();
    },
    methods:{
      getNewsList(){
        // 获取新闻列表
        this.$http.get("api/getnewslist").then(result => {
          if (result.body.status === 0) {
            // 如果没有失败，应该把数据保存到 data 上
            this.newslist = result.body.message;
          } else {
            Toast("获取新闻列表失败！");
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
    .mui-media-body h1{
        font-size: 14px;
    }
    .mui-ellipsis{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
</style>