<template>
    <div>
        <div class="hope_list">
            <p class="movie_hope">近期最受期待</p>
            <ul>
                <li v-for="item in hopeList" :key="item.id" >
                    <div class="hope_img">
                        <img :src="item.img.replace('w.h', '128.180')" alt="">
                        <p class="hope_amount">{{item.wish}}想看</p>
                    </div>
                    <p class="hope_title">{{item.nm}}</p>
                    <p class="hope_time">{{item.comingTitle}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'hoping',
    data() {
        return {
            hopeList: []
        }
    },
    // http://www.softeem.xin/maoyanApi/ajax/mostExpected?ci=57&limit=10&offset=0&token=
    created() {
        // axios.get("http://www.softeem.xin/maoyanApi/ajax/mostExpected?ci=57&limit=10&offset=0&token=")
        axios.get("/mostExpected?ci=57&limit=10&offset=0&token=")
        .then(res => {
                this.hopeList = res.data.coming;
                console.log(this.hopeList);
            }
        ).catch(err => {
            console.log(err);
        });
    }
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .hope_list {
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        padding: 5px 12px;
        /* position: relative; */
        /* background-color: #ccc; */
    }
    .hope_list p {
        text-align: left;
        font-size: 14px;
    }
    .hope_list .movie_hope {
        margin-bottom: 10px;
    }
    .hope_list ul {
        /* position: absolute; */
        height: 166px;
        display: flex;
        flex: row;
        /* overflow: hidden; */
        /* display: -webkit-box; */
        overflow-x: auto;
        /* background-color: pink; */
        list-style: none;
    }
    /* 隐藏滚动条 */
    .hope_list ul::-webkit-scrollbar {
        display: none;
    }
    .hope_list ul li {
        float: left;
        width: 86px;
        height: 166px;
        margin-right: 12px;
        /* background-color: yellow; */
    }
    .hope_list ul li .hope_img {
        width: 85px;
        height: 115px;
        position: relative;
    }
    .hope_list ul li .hope_img:before {
        content: '♡';
        width: 28px;
        height: 28px;
        border-bottom-right-radius: 5px;
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        z-index: 3;
    }
    .hope_list ul li .hope_img img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .hope_list ul li .hope_img .hope_amount {
        margin: 0;
        position: absolute;
        left: 0;
        bottom: 0;
        color: #faaf00;
        font-weight: 700;
    }
    .hope_list ul li .hope_title {
        font-weight: 700;
    }
    .hope_list ul li .hope_time {
        font-size: 12px;
        color: #666;
    }
</style>