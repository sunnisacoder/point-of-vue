<template>
    <h1>我是美食家 <br>Comment Page</h1>
    <div class="wrap">
        <div class="postList">
            <div class="postBox">
                <div class="postItem">
                    <div class="inner">
                        <div class="imgBox">
                            <img src="../assets/meat.jpg">
                        </div>
                        <div class="meta">
                            <div class="info">
                                <img src="../assets/avatarDefault.png" alt="" class="avatar">
                                <span>范桑尼</span>
                            </div>
                            <div class="actions">
                                <TheIcon icon="like" fill="none" stroke="#000" /><span>87</span>
                                <TheIcon icon="comment" fill="none" stroke="#000" /><span>6</span>
                                <TheIcon icon="favorite" fill="none" stroke="#000" /><span>1</span>
                            </div>
                        </div>
                        <div class="des">
                            <p>這間雞排超讚，為什麼夜市王他會被刷下來？這間雞排超讚，為什麼夜市王他會被刷下來？這間雞排超讚，為什麼夜市王他會被刷下來？</p>
                        </div>
                        <span class="time">5分鐘之前發布</span>
                    </div>
                </div>
                <div class="postItem">
                    <div class="inner">
                        <div class="imgBox">
                            <img src="../assets/meat.jpg">
                        </div>
                        <div class="meta">
                            <div class="info">
                                <img src="../assets/avatarDefault.png" alt="" class="avatar">
                                <span>范桑尼</span>
                            </div>
                            <div class="actions">
                                <TheIcon icon="like" fill="none" stroke="#000" /><span>87</span>
                                <TheIcon icon="comment" fill="none" stroke="#000" /><span>6</span>
                                <TheIcon icon="favorite" fill="none" stroke="#000" /><span>1</span>
                            </div>
                        </div>
                        <div class="des">
                            <p>這間雞排超讚，為什麼夜市王他會被刷下來？</p>
                        </div>
                        <span class="time">5分鐘之前發布</span>
                    </div>
                </div>
                <div class="postItem">
                    <div class="inner">
                        <div class="imgBox">
                            <img src="../assets/meat.jpg">
                        </div>
                        <div class="meta">
                            <div class="info">
                                <img src="../assets/avatarDefault.png" alt="" class="avatar">
                                <span>范桑尼</span>
                            </div>
                            <div class="actions">
                                <TheIcon icon="like" fill="none" stroke="#000" /><span>87</span>
                                <TheIcon icon="comment" fill="none" stroke="#000" /><span>6</span>
                                <TheIcon icon="favorite" fill="none" stroke="#000" /><span>1</span>
                            </div>
                        </div>
                        <div class="des">
                            <p>這間雞排超讚，為什麼夜市王他會被刷下來？</p>
                        </div>
                        <span class="time">5分鐘之前發布</span>
                    </div>
                </div>
                <div class="postItem">
                    <div class="inner">
                        <div class="imgBox">
                            <img src="../assets/meat.jpg">
                        </div>
                        <div class="meta">
                            <div class="info">
                                <img src="../assets/avatarDefault.png" alt="" class="avatar">
                                <span>范桑尼</span>
                            </div>
                            <div class="actions">
                                <TheIcon icon="like" fill="none" stroke="#000" /><span>87</span>
                                <TheIcon icon="comment" fill="none" stroke="#000" /><span>6</span>
                                <TheIcon icon="favorite" fill="none" stroke="#000" /><span>1</span>
                            </div>
                        </div>
                        <div class="des">
                            <p>這間雞排超讚，為什麼夜市王他會被刷下來？</p>
                        </div>
                        <span class="time">2024年12月12日
                        </span>
                    </div>
                </div>
                <div class="postItem">
                    <div class="inner">
                        <div class="imgBox">
                            <img src="../assets/meat.jpg">
                        </div>
                        <div class="meta">
                            <div class="info">
                                <img src="../assets/avatarDefault.png" alt="" class="avatar">
                                <span>范桑尼</span>
                            </div>
                            <div class="actions">
                                <TheIcon icon="like" fill="none" stroke="#000" /><span>87</span>
                                <TheIcon icon="comment" fill="none" stroke="#000" /><span>6</span>
                                <TheIcon icon="favorite" fill="none" stroke="#000" /><span>1</span>
                            </div>
                        </div>
                        <div class="des">
                            <p>這間雞排超讚，為什麼夜市王他會被刷下來？</p>
                        </div>
                        <span class="time">5分鐘之前發布</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- <CommentPageDetail/> -->
        <PostUpload />
    </div>
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue";
// import CommentPageDetail from "../components/CommentPageDetail.vue";
import PostUpload from "../components/PostUpload.vue";
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    position: relative;
    max-width: 1760px;
    padding-bottom: 110px;
    display: flex;
    flex-direction: column;
}

.postList {
    display: flex;
}

.postBox {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 20px;
    row-gap: 50px;
}

.postItem {
    display: flex;
    flex-direction: column;
}

.imgBox {
    display: flex;
    width: 100%;
    margin-bottom: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0px 20px;
    }
}

.meta {
    display: flex;
    justify-content: space-between;

    .info {
        display: flex;
        align-items: center;
        gap: 5px;

        img {
            width: 24px;
            height: 24px;
        }
    }
}

.actions {
    gap: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    column-gap: 16px;
    row-gap: 4px;
    padding: 0 10px;
}

.actions>svg {
    width: 32px;
    height: 32px;
    grid-row: 1 / 2;
    cursor: pointer;
}

.actions>span {
    font-size: 14px;
}

.des {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.time {
    display: flex;
    width: 100%;
    color: #333;
    font-size: 14px;
}
</style>