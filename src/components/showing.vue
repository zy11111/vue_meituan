<template>
    <div class="showing">
        <div class="movie-list" v-for="item in showingList" :key="item.id">
            <div class="movie-img">
                <img :src="item.img.replace('w.h','128.180')" alt="">
            </div>
            <div class="right-info">
                <div class="movie-info">
                    <h4>{{item.nm}}</h4>
                    <p>观众评 <span>{{item.sc}}</span></p>
                    <p>{{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                </div>
                <div class="btn">
                    <button value="购票" class="buy">购票</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'showing',
    data() {
        return {
            showingList: []
        }
    },
    // http://www.softeem.xin/maoyanApi/ajax/movieOnInfoList
    created() {
        axios.get("http://www.softeem.xin/maoyanApi/ajax/movieOnInfoList")
        .then(res => {
            this.showingList = res.data.movieList;
        })
    }
}
</script>