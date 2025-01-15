<script setup>
import TheIcon from "../components/TheIcon.vue";
import { useStore } from "vuex";
import { computed, onMounted} from "vue";
import CommentPageDetail from "../components/CommentPageDetail.vue";
import PostUpload from "../components/PostUpload.vue";
import PostList from "../components/PostList.vue";
import PostItem from "@/components/PostItem.vue";

const store = useStore();
const showPostUpload = computed(() => store.state.showPostUpload);
const showPostDetails = computed(() => store.state.showPostDetails);


onMounted(() => {
    store.dispatch("loadAllPosts");
    // 載入使用者資料->傳入postItem
})
</script>

<template>
    <h1>我是美食家 <br>Comment Page</h1>
    <div class="wrap">
        <div class="searchInput">
            <input type="text" placeholder="Search" @change="searchPosts" />
            <TheIcon icon="search" />
        </div>
        <!-- post icon 組件 -->
        <PostList>
            <PostItem/>
        </PostList>
    </div>
    <CommentPageDetail v-if="showPostDetails"/>
    <PostUpload v-if="showPostUpload" />
</template>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    max-width: 1365px;
    margin: 0 auto;
    position: relative;
    padding-bottom: 50px;
}

.searchInput {
    position: relative;
    height: 40px;
    display: flex;
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;

    input {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 4px;
        font-size: 15px;
        font-weight: 500;
        padding: 0 20px 0 40px;

        &::placeholder {
            font-size: 15px;
            font-weight: 500;
        }
    }

    svg {
        position: absolute;
        top: 11px;
        left: 10px;
        pointer-events: none;
    }
}
</style>