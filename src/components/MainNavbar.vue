<template>
    <div class="navbar">
        <div class="wapper">
            <div class="logoBox">
                <router-link to="/">
                    <img src="@/assets/9market.png" alt="logo">
                </router-link>
            </div>
            <nav class="nav">
                <router-link to="/" class="flipEffect">
                    <span>回首頁</span>
                    <span>Home</span>
                </router-link>
                <router-link to="/about" class="flipEffect">
                    <span>關於我們</span>
                    <span>about</span>
                </router-link>
                <router-link to="" class="flipEffect">
                    <span>聯絡我們</span>
                    <span>contact</span>
                </router-link>
                <router-link to="" class="flipEffect">
                    <span>聯絡我們</span>
                    <span>contact</span>
                </router-link>
                <router-link to="" class="flipEffect">
                    <span>聯絡我們</span>
                    <span>contact</span>
                </router-link>
            </nav>
            <div class="socialMediaBox">
                <a href="https://github.com/sunnisacoder" target="_blank">
                    <img src="@/assets/github.png" alt="github">
                </a>
                <a href="https://www.cake.me/s--nhlzTMUkyVt4jZxloSzhNw--/funsunny1107" target="_blank">
                    <img src="@/assets/profile.png" alt="resume">
                </a>
                <a href="https://www.cake.me/s--nhlzTMUkyVt4jZxloSzhNw--/funsunny1107" target="_blank">
                    <img src="@/assets/profile.png" alt="resume">
                </a>
            </div>
            <!-- 手機版才出現 -->
            <div class="toggleMenu">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.navbar {
    border-bottom: 1px solid #000;
    width: 100%;
    position: sticky;
    top: 0;
    overflow: hidden;
}

.wapper {
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
    height: 118px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}

.logoBox {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    margin-top: 15px;

    img {
        width: 100%;
        max-width: 150px;
        height: 100%;
    }
}

nav {
    padding: 30px 15px;
    display: flex;
    justify-content: flex-end;

    a {
        font-weight: bold;
        color: #2c3e50;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
        position: relative;
        text-transform: uppercase;
        width: clamp(145px, 8.3vw, 168px);
        cursor: pointer;

        &.router-link-exact-active {
            color: #42b983;
        }

        &::after {
            position: absolute;
            width: 1px;
            height: 100%;
            right: -10px;
            background-color: #000;
            content: "";
        }

        &:first-child::before {
            position: absolute;
            width: 1px;
            height: 100%;
            left: -10px;
            background-color: #000;
            content: "";
        }
    }

    // nav的翻轉特效
    .flipEffect {
        position: relative;
        border: none;
        box-shadow: none;
        line-height: 40px;
        perspective: 230px;

        span {
            display: block;
            position: absolute;
            width: 130px;
            border-radius: 5px;
            text-align: center;
            box-sizing: border-box;
            transition: all 0.3s ease;
            transform-origin: 50% 50% -20px;

            &:nth-child(1) {
                transform: rotateX(90deg);
                opacity: 0;
            }

            &:nth-child(2) {
                transform: rotateX(0deg);
                opacity: 1;
            }
        }

        &:hover {
            span:nth-child(1) {
                transform: rotateX(0deg);
                opacity: 1;
            }

            span:nth-child(2) {
                transform: rotateX(-90deg);
                opacity: 0;
            }
        }
    }
}

.toggleMenu {
    display: none;

    .hamburger {
        position: absolute;
        padding: 10px;
        top: 25px;
        right: 2%;
        width: 65px;
        height: 50px;
        z-index: 10;
        cursor: pointer;

        span {
            width: 70%;
            height: 3px;
            background-color: #000;
            display: block;
            margin: 10px auto;
        }
    }
}

.socialMediaBox {
    display: flex;
    align-items: center;
}

// 1180時網站轉為行動裝置版
@media (max-width:1180px) {
    nav {
        display: none;
    }

    .toggleMenu {
        display: flex;
    }
}
</style>