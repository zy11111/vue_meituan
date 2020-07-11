<template>
    <div>
        <!-- <loading v-if="!isReady"></loading> -->
        <hoping></hoping>
        <div class="movie-list" v-for="item in comingList" :key="item.id" @click="$router.push({name: 'MovieDetail', query:{id: item.id}})">
            <div class="movie-img">
                <img :src="item.img.replace('w.h','128.180')" alt="">
            </div>
            <div class="right-info">
                <div class="movie-info">
                    <h4>{{item.nm}}</h4>
                    <p><span>{{item.wish}}</span> 想看</p>
                    <p>{{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                </div>
                <div class="btn">
                    <button value="预购" class="pre_btn">预购</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import hoping from './hoping';
export default {
    name: 'comming',
    // http://www.softeem.xin/maoyanApi/ajax/movieOnInfoList
    // http://www.softeem.xin/maoyanApi/ajax/comingList?ci=57&token=&limit=10
    // http://www.softeem.xin/maoyanApi/ajax/mostExpected?ci=57&limit=10&offset=0&token=
    data() {
        return {
            comingList: [],
            isReady: false,
        }
    },
    components: {
        'hoping': hoping
    },
    created() {
        // axios.get("http://www.softeem.xin/maoyanApi/ajax/comingList?ci=57&token=&limit=10")
        axios.get("/comingList?ci=57&token=&limit=10")
        .then(res => {
                this.comingList = res.data.coming;
                /* if(res.data.coming.showInfo) {
                    this.hopeList = res.data.coming;
                } */
                console.log(res.data.coming);
                console.log(this.comingList);
                // console.log(this.hopeList);
                this.isReady = true;
            }
        ).catch(err => {
            console.log(err);
        });
    },
    methods: {

    }
}
</script>

<style scoped> 
    .movie-list {
        width: 100%;
        height: auto;
        padding: 5px 12px;
        position: relative;
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
    .movie-list .right-info .btn .pre_btn {
        width: 48px;
        padding: 5px 12px;
        border: none;
        border-radius: 5px;
        color: #fff;
        font-size: 12px;
    }
    .movie-list .right-info .btn .pre_btn {
        background-color: #3c9fe6;
    }
    .movie_hope {
        display: block;
        margin-left: 0;
        margin-top: 0;
    }
</style>