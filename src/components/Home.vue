<template>
    <div class="app-home">
        <div class="header">
            <h4 class="title">猫眼电影</h4>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="正在热映" name="first">
                    <movie-list></movie-list>
                    <!-- <div class="clearbox"></div> -->
                </el-tab-pane>
                <el-tab-pane label="即将上映" name="second">
                    <coming></coming>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import MovieList from './MovieList'
import coming from './coming'
export default {
    name: 'Home',
    components: {
        'movieList': MovieList,
        'coming': coming
    },
    data() {
        return {
            activeName: 'first'
        }
    },
    methods: {
        handleClick() {}
    }
}
</script>

<style scoped>
    .title {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 33;
    }
    .header {
        /* position: fixed;
        top: 0;
        left: 0; */
        width: 100%;
    }
    .header >>> .top {
        z-index: 99;
    }
    .header .title {
        color: #fff;
        background-color: rgb(229, 72, 71);
        width: 100%;
        height: 51px;
        line-height: 51px;
        text-align: center;
        padding: 0;
        margin: 0;
    }
    .header >>> .el-tabs__nav-wrap {
        border-bottom: 1px solid #000;
    }
    .header >>> #tab-first, .header >>> #tab-second {
        padding: 0 60px;
        font-size: 16px;
    }
    .header >>> .el-tabs__item.is-active {
        color: #f03d37;
    }
    .header >>> .el-tabs__active-bar {
        background-color: #f03d37;
    }
    .clearbox {
        clear: both;
    }
    .header >>> .el-tabs__header {
        position: fixed;
        left: 0;
        top: 51px;
        z-index: 33; 
        width:100%;
        background: #fff;
    }
    .header >>> .el-tabs__content {
        margin-top: 91px;
    }
</style>