<template>
    <div>
        <div class="pageTitle">
            <img src="../assets/back.png" alt="" @click="$router.back()">
            {{movieDetail.nm}}
        </div>
        <div class="cont">
            <!-- 设置背景模糊 -->
            <div class="img_last">
                <img :src="movieDetail.img.replace('w.h', '128.180')" alt="">
            </div>
            <div class="bg-fliter"></div>
            <div class="movie_img">
                <img :src="movieDetail.img.replace('w.h', '128.180')" alt="" @click="showPlay=!showPlay">
            </div>
            <div class="right">
                <h4>{{movieDetail.nm}}</h4>
                <p class="smaller">{{movieDetail.enm}}</p>
                <p v-if="movieDetail.globalReleased && movieDetail.sc != 0">观众评<span>{{movieDetail.sc}}</span></p>
                <p v-if="movieDetail.globalReleased && movieDetail.sc == 0">暂无评分</p>
                <p v-if="movieDetail.globalReleased"><span>{{movieDetail.wish}}</span> 想看</p>
                <p>{{movieDetail.cat}}</p>
                <p>{{movieDetail.src}}</p>
                <p>{{movieDetail.pubDesc}}</p>
            </div>
        </div>
        <button class="buy_btn">特惠购票</button>
        <div class="detail">
            <!-- 查看全部介绍 -->
            <div class="movie_intro">
                <p :class="btnType?'overflow':''">{{movieDetail.dra}}</p>
                <img :src="btnType?downBtnSrc:upBtnSrc" class="btn" alt="" @click="btnType=!btnType">
            </div>
        </div>
        <div class="play_video" v-if="showPlay" @click="showPlay=!showPlay">
            <!-- 播放电影宣传片 -->
            <video :src="movieDetail.vd" controls autoplay width="100%"></video>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
/**
 * img里面的src非常特殊 不能使用表达式动态绑定
 * 如果非要使用动态表达式绑定，一定是先把图片导入进来，然后再使用
 */
import downBtnSrc from '../assets/down.png';
import upBtnSrc from '../assets/up.png'
export default {
    name: 'movieDetail',
    data() {
        return {
            movieDetail: null,
            isReady: false,
            btnType: true,
            downBtnSrc,
            upBtnSrc,
            showPlay: false
        }
    },
    //http://www.softeem.xin/maoyanApi/ajax/detailmovie?movieId=id
    created() {
        var id = this.$route.query.id;
        axios.get("http://www.softeem.xin/maoyanApi/ajax/detailmovie?movieId=" + id)
        .then(res => {
                this.movieDetail = res.data.detailMovie;
                this.isReady = true;
                console.log(this.movieDetail);
            }
        )
    }
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .pageTitle {
        width: 100%;
        height: 51px;
        background-color: #e54847;
        position: fixed;
        color: #fff;
        font-size: 18px;
        line-height: 51px;
        position: relative;
    }
    .pageTitle img {
        width: 35px;
        height: 35px;
        position: absolute;
        top: 8px;
        left: 10px;
    }
    .cont {
        height: 165px;
        width: 100%;
        /* background-color: #ccc; */
        position: relative;
    }
    .cont .img_last {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 165px;
        z-index: -2;
        overflow: hidden;
    }
    .cont .img_last img {
        width: 100%;
        height: 100%;
        filter: blur(27px);
    }
    .cont .bg-fliter {
        height: 165px;
        width: 100%;
        background-color: #40454d;
        opacity: 0.55;
        position: absolute;
        z-index: -1;
    }
    .cont .movie_img {
        width: 96.5px;
        height: 135px;
        position: absolute;
        top: 15px;
        left: 15px;
    }
    .cont .movie_img img {
        width: 100%;
        height: 100%;
    }
    .cont .movie_img:before {
        content: '▶';
        width: 22px;
        height: 22px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 50%;
        position: absolute;
        bottom: 8px;
        right: 12px;
        opacity: 0.8;
        text-align: center;
        line-height: 22px;
        background-color: #333;
    }
    .cont .right {
        height: 100%;
        display: inline-block;
        text-align: left;
        position: relative;
        top: 15px;
        left: 30px;
    }
    .cont .right h4, .cont .right p {
        color: #fff;
    }
    .cont .right h4 {
        font-weight: 400;
    }
    .cont .right p {
        font-size: 14px;
    }
    .cont .right p.smaller {
        font-size: 12px;
        margin-bottom: 6px;
    }
    .cont .right p span {
        font-weight: 700;
        color: #faaf00;
    }
    .buy_btn {
        width: calc(100% - 30px);
        margin: 10px 15px;
        padding: 9px;
        background-color: #e54847;
        font-size: 16px;
        color: #fff;
        border: 0;
        border-radius: 5px;
    }
    .detail {
        padding: 3px 16px;
    }
    .detail p {
        font-size: 14px;
        color: #666;
        overflow: hidden;
    }
    .btn {
        width: 16px;
        height: 16px;
    }
    .overflow {
        max-height: 60px;
    }
    .play_video {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .5);
        /* z-index: 4; */
    }
    .play_video video {
        position: absolute;left: 0;top: 50%;transform: translateY(-50%);    
        -webkit-transform: translateY(-50%);-o-transform: translateY(-50%);
    }
</style>