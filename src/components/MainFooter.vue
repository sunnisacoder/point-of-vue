<template>
    <footer>
        <div class="form">
            <div class="inner">
                <router-link to="/profile" class="formBtn">
                    <img src="@/assets/resume.png" alt="">
                    <span>個人檔案</span>
                </router-link>
            </div>
        </div>
        <div class="wrap">
            <ul class="footerList">
                <li>
                    <span class="copyright">
                        2024 © made by Sunny Fan
                    </span>
                </li>
                <li class="tel">
                    <span>TEL.</span>
                    <a href="tel:0932-799411" target="_blank">0932-799411</a>
                </li>
                <li class="mail">
                    <span>EMAIL.</span>
                    <a href="mailto:funsunny1107@gmail.com" target="_blank">funsunny1107@gmail.com</a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.form {
    width: 100%;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: flex-end;
}

.inner {
    display: flex;
    width: 1350px;
    margin: auto;
    justify-content: flex-end;
}

.formBtn {
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
    border-bottom: 0;
    gap: 10px;
    text-decoration: none;
    color: #000;
    font-weight: 800;
    border-radius: 10px 10px 0 0;

    img {
        width: 30px;
        height: 30px;
    }

    &:hover {
        background-color: #42b983;
        color: #fff;
        transition: background-color 0.4s;

        img {
            filter: invert(100%);
        }
    }
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}

.wrap {
    margin: 0 auto;
    width: 100%;
    max-width: 1350px;
}

ul.footerList {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    letter-spacing: 2px;
    padding-top: 15px;
    padding-bottom: 15px;

    li {
        list-style: none;
        display: flex;
        align-items: center;

        &:not(:last-child)::after {
            display: flex;
            width: 1px;
            height: 12px;
            margin-left: 10px;
            margin-right: 10px;
            background-color: #676767;
            content: "";
        }

        &:hover {
            a {
                color: #42b983;
                transition: color 0.3s;
            }
        }
    }

    a {
        text-decoration: none;
        color: #676767;
    }
}

@media (max-width:992px) {
    .footerList {
        flex-direction: column;
        align-items: center;
    }
}
</style>