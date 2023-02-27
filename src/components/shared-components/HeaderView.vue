<template>
    <header>
        <div class="inner">
            <nav>
                <div class="logo"><a href="./index.html"><img src="@/assets/images/kephas.png" alt=""></a></div>
                <ul class="menu">
                    <li class="menu-li"><router-link to="/introduce">회사소개</router-link>
                        <ul class="submenu">
                            <li><router-link to="/introduce">회사 소개</router-link></li>
                            <li><a href="./partner.html">파트너십</a></li>
                            <li><a href="./business.html">사업 소개</a></li>
                            <li><a href="./findus.html">연락 및 위치</a></li>
                        </ul>
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </li>
                    <li class="menu-li"><a href="./solution.html">솔루션</a>
                        <ul class="submenu">
                            <li><a href="./solution.html">솔루션</a></li>
                        </ul>
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </li>
                    <li class="menu-li"><a href="./service.html">서비스</a>
                        <ul class="submenu">
                            <li><a href="../html/service-mydata.html">MY DATA</a></li>
                            <li><a href="../html/service-platform.html">통합연계 플랫폼</a></li>
                            <li><a href="../html/service-mobile.html">모바일 서비스</a></li>
                        </ul>
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </li>
                    <li class="menu-li"><a href="./laboratory.html">기술연구소</a>
                        <ul class="submenu">
                            <li><a href="./laboratory.html">연구실 소개</a></li>
                            <li><a href="">자료실</a></li>
                        </ul>
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </li>
                    <li class="menu-li"><a href="">사회적공헌</a>
                        <ul class="submenu"></ul>
                    </li>
                </ul>
                <div class="menu-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header-view'
}
</script>

<style scoped>
    /* Fontawesome 4.7 */
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
header {
    height: 70px;
    border-bottom: 1px solid #eee;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 100;
}
.inner {
    width: 1280px;
    margin: 0 auto;
}
nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}
.logo {
    font-weight: 600;
    flex: 1;
    height: 70px;
    width: 300px;
    overflow: hidden;
}
.logo > a {
    color: rgb(26, 26, 112);
}
.logo img {
    height: 70px;
    margin-top: 8px;
}
.menu {
    display: flex;
    position: relative;
    flex: 3;
}
.menu > li {
    width: calc(100% / 5);
    line-height: 70px;
    text-align: center;
}
.menu > li > i {
    visibility: hidden;
    opacity: 0;
    width: 0;
}
.menu > li:hover > a, .submenu > li:hover > a {
    font-weight: 600;
    color: rgb(26, 26, 112);
    border-bottom: 2px solid rgb(26, 26, 112);
}
.menu > li:hover > .submenu {
    background-color: #f8f8f8;
}
.submenu {
    background-color: #fff;
    width: inherit;
    height: 280px;
    display: none;
    border: 1px solid rgba(26, 26, 112, 0.24);
    position: absolute;
    box-shadow: 1px 5px 5px -5px #ddd;
}
.menu > li:first-child > .submenu {
    left: 0;
    padding: 0 640px;
    margin: 0 -640px;
}
.menu > li:last-child > .submenu {
    right: -640px;
    padding: 0 640px;
    margin: 0 -640px;
}
.menu-btn{
    display: none;
}

@media screen and (max-width: 768px) {
    header {
        height: auto;
    }
    header > .inner {
        width: 100%;
    }
    nav {
        flex-direction: column;
        height: auto;
    }
    .logo {
        margin-left: 20px;
    }
    .logo img {
        height: 50px;
        margin-top: 20px;
    }
    .menu {
        flex-direction: column;
        display: none;
    }
    .menu.on {
        display: block;
    }
    .menu > li {
        width: 100%;
        border-bottom : 1px solid #f2f2f2;
        height: 70px;
        position: relative;
        overflow: hidden;
    }
    .menu > li > i {
        visibility: visible;
        opacity: 1;
        position: absolute;
        right: 15px;
        top: 0px;
        display: block;
        width: 70px;
        height: 70px;
        line-height: 70px; 
        cursor: pointer;
        background-color: #f2f2f2;
        border-radius: 50%;
    }
    .menu > li:first-child > .submenu {
        left: 0;
        padding: 0;
        margin: 0;
    }
    .menu > li:last-child > .submenu {
        right: 0;
        padding: 0;
        margin: 0;
    }
    .menu > li.active:nth-child(1) {
        height: 350px;
    }
    .menu > li.active:nth-child(2) {
        height: 140px;
    }
    .menu > li.active:nth-child(3) {
        height: 280px;
    }
    .menu > li.active:nth-child(4) {
        height: 210px;
    }
    .menu > li.active:nth-child(5) {
        
    }
    li > .submenu {
        height: auto;
        background-color: #f2f2f2;
        position: absolute;
        z-index: 100;
        top: 70px;
        display: block!important;
    }
    .submenu > li > a {
        height: 70px;
        display: block;
    }
    .menu-btn{
        width: 35px;
        height: 25px;
        position: absolute;
        right: 17px;
        top: 17px;
        display: block;
        cursor: pointer;
        margin-top: 5px;
    }
    .menu-btn span {
        background-color: #000;
        height: 1px;
        position: absolute;
        width: 100%;
        transition: 0.2s;
    }
    .menu-btn span:nth-child(1) {
        top: 0;
    }
    .menu-btn span:nth-child(2) {
        top: 50%;
    }
    .menu-btn span:nth-child(3) {
        top: 100%;
    }
    .menu-btn.active span:nth-child(1) {
        top: 50%;
        transform: rotate(45deg);
    }
    .menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    .menu-btn.active span:nth-child(3) {
        top: 50%;
        transform: rotate(-45deg);
    }
}

</style>
