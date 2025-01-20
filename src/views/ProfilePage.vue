<script setup>
import TheAvatar from '@/components/TheAvatar.vue';
import { useStore } from "vuex";
import { computed, reactive, ref, watch } from "vue"
import { loadPostsByMe, loadPostsLikedOrFavoredByMe,} from "../apis/post";

const store = useStore();
const user = computed(() => store.state.user.user);

const tabs = ref([
    {
        title: "貼文",
    },
    {
        title: "按讚",
    },
    {
        title: "收藏",
    },
]);

const currentTab = ref(0);

const myPosts = reactive({
    0: [],
    1: [],
    2: [],
});

watch(currentTab, async () => {
    switch (currentTab.value) {
        case 0:
            if (myPosts[0].length == 0) {
                myPosts[0] = await loadPostsByMe();
            }
            break;
        case 1:
            if (myPosts[1].length == 0) {
                myPosts[1] = await loadPostsLikedOrFavoredByMe();
            }
            break;
        case 2:
            if (myPosts[2].length == 0) {
                myPosts[2] = await loadPostsLikedOrFavoredByMe('favors');
            }
            break;
        default:
            return;
    }
}, { immediate: true });
</script>

<template>
    <div class="profileBox">
        <div class="wrap">
            <div class="information">
                <div class="informationBox">
                    <div class="inner">
                        <div class="intro">
                            <p class="name">{{ user.name }}</p>
                            <p>{{ user.intro }}</p>
                            <p>{{ user.website }}</p>
                        </div>
                        <div class="imgBox">
                            <TheAvatar style="width: 84px; height: 84px;" :src="user.avatar" />
                        </div>
                    </div>
                    <router-link to="/profile/edit">編輯個人檔案</router-link>
                </div>
            </div>
            <!-- 為了確保貼文的狀態，把 tab 定義成數組，放入 ref 當中 -->
            <div class="tab">
                <div class="tabBtns">
                    <div class="tabBtn" v-for="(tab, index) in tabs" :key="index" @click="currentTab = index"
                    :class="{ active: index == currentTab }">
                        <p>{{ tab.title }}</p>
                    </div>
                </div>
                <div class="tabContent">
                    <p>
                        {{ myPosts[currentTab].length }}
                    </p>
                    <div class="posts">
                        <img v-for="post in myPosts[currentTab]" :src="post.image" :key="post.id" class="postImage">
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
