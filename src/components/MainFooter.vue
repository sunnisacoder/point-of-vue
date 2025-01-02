<template>
    <div class="form">

    </div>
    <footer>
        <div class="wrap">
            <ul class="footerList">
                <li>
                    <span class="copyright">
                        2024 © sunnisacoder
                    </span>
                </li>
                <li class="tel">
                    <span>TEL.</span>
                    <a href="tel:0932-799477" target="_blank">0932-799411</a>
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
footer{
    position: relative;
    bottom: 0;
    padding: 15px 0;
    width: 100%;
}
ul.footerList {
    display: flex;
    justify-content: center;
    

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

        &:hover{
            a{
                color: #42b983;
                transition: color 0.3s;
            }
        }
    }

    a{
        text-decoration: none;
        color: #676767;
    }

}
</style>