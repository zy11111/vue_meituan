<template>
    <div>
        <div class="movie-list" v-for="item in movieList" :key="item.id" @click="$router.push({name: 'MovieDetail',query: {id: item.id}})">
            <div class="movie-img">
                <img :src="item.img.replace('w.h','128.180')" alt="">
            </div>
            <div class="right-info">
                <div class="movie-info">
                    <h4>{{item.nm}}</h4>
                    <p v-if="item.globalReleased && item.sc!=0">观众评 <span>{{item.sc}}</span></p>
                    <p v-if="item.globalReleased && item.sc==0">暂无评分</p>
                    <p v-if="!item.globalReleased"><span>{{item.wish}}</span> 想看</p>
                    <p>{{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                </div>
                <div class="btn">
                    <button v-if="item.globalReleased" value="购票" class="buy-btn">购票</button>
                    <button v-if="!item.globalReleased" value="预购" class="pre-btn">预购</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'movieList',
    // http://www.softeem.xin/maoyanApi/ajax/movieOnInfoList
    data() {
        return {
            movieList: [],
            // sc: ''
        }
    },
    created() {
        // axios.get("http://www.softeem.xin/maoyanApi/ajax/movieOnInfoList")
        axios.get("/movieOnInfoList")
        .then(res => {
                this.movieList = res.data.movieList;
                console.log(res.data);
            }
        ).catch(err => {
            console.log(err);
        });
    },
    methods: {

    },
    // filters: {
    //     Eval: function(value) {
    //         return "暂无评分";
    //     }
    // }
}
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    .header >>> .el-tabs__content {
        width: 100%;
    }
    .movie-list {
        width: 100%;
        height: auto;
        padding: 5px 12px;
    }
    .movie-list .movie-img img {
        width: 64px;
        height: 90px;
        float: left;
        margin-right: 8px
    }
    .movie-list .right-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid #ededed;
        padding: 0 10px 5px 3px;
    }
    .movie-list .right-info .movie-info {
        width: calc(100% - 56px);
        display: flex;
        flex-direction: column;
        padding: 5px 0;
        justify-content: space-between;
        text-align: left;
    }
    .movie-list .right-info .movie-info h4, .movie-list .right-info .movie-info p {
        margin: 0;
        margin-bottom: 3px;
        overflow: hidden;
        text-overflow: ellipsis;/* 值为clip表示剪切，ellipsis时为显示省略号 */
        white-space: nowrap;
    }
    .movie-list .right-info .movie-info p {
        font-size: 13px;
        color: #666;
    }
    .movie-list .right-info .movie-info p span {
        color: #faaf00;
        font-weight: 700;
        font-size: 14px;
    }
    .movie-list .right-info .btn .buy-btn, .movie-list .right-info .btn .pre-btn {
        width: 48px;
        padding: 5px 12px;
        border: none;
        border-radius: 5px;
        color: #fff;
        font-size: 12px;
    }
    .movie-list .right-info .btn .buy-btn {
        background-color: #f03d37;
    }
    .movie-list .right-info .btn .pre-btn {
        background-color: #3c9fe6;
    }
</style>