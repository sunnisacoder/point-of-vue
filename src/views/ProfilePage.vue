<script setup>
import TheAvatar from '@/components/TheAvatar.vue';
</script>

<template>
    <div class="profileBox">
        <div class="wrap">
            <div class="information">
                <div class="informationBox">
                    <div class="inner">
                        <div class="intro">
                            <p class="name">撒尼</p>
                            <p>這是我的簡介</p>
                            <p>網站</p>
                        </div>
                        <div class="imgBox">
                            <TheAvatar style="width: 84px; height: 84px;" />
                        </div>
                    </div>
                    <router-link to="/profile/edit">編輯個人檔案</router-link>
                </div>
            </div>
            <div class="tab">
                <div class="tabBtns">
                    <div class="tabBtn active">
                        <p>貼文</p>
                    </div>
                    <div class="tabBtn">
                        <p>按讚</p>
                    </div>
                    <div class="tabBtn">
                        <p>收藏</p>
                    </div>
                </div>
                <div class="tabContent">
                    <p>13則貼文</p>
                    <div class="posts">
                        <!-- v-for="n in 9" -->
                        <img src="../assets/avatarDefault.png" class="postImage">
                        <img src="../assets/avatarDefault.png" class="postImage">
                        <img src="../assets/avatarDefault.png" class="postImage">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.profileBox {
    width: 100%;
    max-width: 992px;
    margin: 30px auto;
    border-radius: 30px
}

.wrap {
    display: flex;
    flex-direction: column;
}

.information {
    width: 100%;
    display: flex;
    flex-direction: column;

    .informationBox {
        padding: 0 20px;
    }

    .inner {
        display: flex;
        justify-content: space-between;
    }

    .imgBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .intro {
        text-align: left;
        // background-color: red;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border: 1px solid #333;
        text-decoration: none;
        color: #333;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 10px;
    }
}

.tab {
    .tabBtns {
        border-bottom: 1px solid #ccc;
        color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: space-around;
        cursor: pointer;

        .tabBtn {
            margin-top: 20px;
            width: calc(100% / 3);
        }
    }

    .active {
        color: #333;
        font-weight: 800;

        &::after {
            content: "";
            display: flex;
            width: 100%;
            height: 2px;
            margin: -1px;
            border-bottom: 2px solid #333;
        }
    }
}

.posts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    img {
        width: 100%;
        height: 330px;
        aspect-ratio: 1/1;
        background-color: #eee;
        object-fit: cover;
    }
}
</style>
