<template>
    <div id="introduce" class="container">
        <div class="inner">
            <div class="slogan">
                <div class="slogan-text">
                    <span>고객과 함께 성장하는</span>
                    <span id="typing">
                        Your Data Solution Partner,
                    </span>
                    <span>Kephas!</span>
                </div>
            </div>
        </div>
        <div class="about">
            <div class="inner">
                <h1>케파스는</h1>
            <hr>
            <p>
                국내 금융/공공/일반기업 등을 대상으로<br>
                IT 솔루션 및 응용소프트웨어를 개발하고 유지보수하는 케파스는<br>
                2009년 데이터 솔루션 기업으로 첫발을 내디뎠습니다.<br>
            </p>
            <p>
                ㈜케파스는 시스템인프라분야의 서버/스토리지/백업/망연계 및 데이터관리-모니터링을 다루며<br>
                전반적인 메타데이터관리/가상화/E2E모니터링, DB접근제어, 데이터분석을 위한 빅데이터와<br>
                보안솔루션인 문서중앙화, BI, 통합연계 솔루션 등을 공급하는 IT전문 기업입니다.<br>
            </p>
            </div>
        </div>
        <div class="ceo-greetings">
            <div class="inner">
                <div data-wow-offset="300" data-wow-duration="0.5s" class="ceo-img wow ltr"></div>
                <div data-wow-offset="300" data-wow-duration="0.5s" class="ceo-text wow rtl">
                    <h1>CEO 인사말</h1>
                    <hr>
                    <p>
                        "저희 회사와 임직원이 당신과 함께 걷겠습니다."<br>
                        반갑습니다.<br><br>
                        주식회사 케파스의 대표를 맡고 있는 "주성돈" 입니다.<br><br>
                        'Data Solution Provider'의 타이틀을 목표로<br>
                        오랜동안 기반을 다져왔습니다.<br><br>
                        Data의 생성/관리/활용에 관련한 솔루션을 개발/구축하여<br>
                        고객 비즈니스의 가치 창출을 돕기 위하여<br>
                        최선을 다하겠습니다.<br><br>
                        주식회사 케파스가 높은 기술력과 사람이 중심이라는 철학으로<br>
                        세계적인 기업으로 성장하고자 합니다.<br><br>
                        지켜봐 주시고 많은 응원과 격려를 부탁드립니다.<br>
                        감사합니다.
                    </p>
                </div>
            </div>
        </div>
        <div class="director-greetings">
            <div class="inner">
                <div data-wow-offset="300" data-wow-duration="0.5s" class="director-text wow ltr">
                    <h1>연구소장 인사말</h1>
                    <hr>
                    <p>
                        안녕하세요.<br><br>
                        케파스 기술연구소 연구소장 "신학재" 입니다.<br><br>
                        케파스 기술연구소는 데이터 기반 기술과 차세대 프레임워크 분야에 많은 연구개발을 하고 있습니다.<br><br>
                        기술을 선도하는 기업이 되기 위해 많은 연구원들이 함께 노력하고 있습니다.<br><br>
                        연구개발에 집중할 수 있는 환경 그리고 연구원들이 일하기 좋은 연구소를 만들고 있습니다.<br><br>
                        케파스와 함께 하고 싶은 연구원분들을 초대합니다.<br><br>
                        감사합니다.
                    </p>
                    <a href="./laboratory.html">자세히 보기  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div data-wow-offset="300" data-wow-duration="0.5s" class="director-img wow rtl"></div>
            </div>
        </div>
    </div>
</template>

<script>
// import { VueTyper } from 'vue-typer'
export default {
    name: 'introduce-view',
    // VueTyper
}
</script>

<style scoped>
.container {
    margin-bottom: 150px;
}
.slogan {
    background: no-repeat center center url("@/assets/images/valueback.jpg");
    background-size: cover;
    width: 100%;
    height: 80vh;
    margin-top: 80px;
}
.slogan-text {
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding-left: 50px;
}
.slogan-text > span {
    display: block;
    font-size: 3em;
    mix-blend-mode: exclusion;
}
.about {
    margin-top: 20vh;
    height: 55vh;
    text-align: center;
    background-color: #f5f4f4;
    line-height: 35px;
}
.about > .inner {
    padding: 80px 0;
    border-radius: 30px;
    background-color: #fff;
    background: linear-gradient(145deg, #ffffff, rgba(0, 0, 255, 0.103));
    box-shadow:  20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;
}
hr {
    width: 80px;
    border: 2px solid rgba(26, 26, 112);
}
.about > p {
    margin-top: 50px;
}
.ceo-greetings, .director-greetings {
    width: 100%;
    height: 80vh;
    margin-top: 20vh;
}
.ceo-greetings > .inner, .director-greetings > .inner {
    display: flex;
    flex-direction: row;
    width: 1280px;
    height: 100%;
    justify-content: space-between;
}
.ceo-img, .ceo-text, .director-img, .director-text {
    width: 600px;
    height: 650px;
    background: linear-gradient(145deg, #ffffff, #EEE9DA);
    box-shadow:  20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;
}
.ceo-img {
    align-self:first baseline;
    background-image: url('@/assets/images/about.jpg');
    background-size: cover;
    animation-name: ltr;
}
.ceo-text {
    align-self:last baseline;
    text-align: center;
}
.ceo-text > p {
    padding-top: 20px;
}
.director-greetings {
    padding-bottom: 50px;
}
.director-text {
    box-sizing: border-box;
    align-self: first baseline;
    text-align: center;
    animation-name: ltr;
}
.director-text > p {
    padding: 20px 40px 0px 30px;
}
.director-text > a {
    display: block;
    margin-top: 20px;
    padding: 20px;
    background-color: rgba(26, 26, 112);
    color: white;
    transition: 0.3s;
}
.director-text > a:hover {
    background-color: rgba(26, 26, 112, 0);
    color: rgba(26, 26, 112);
    border-bottom: 2px solid rgba(26, 26, 112);
    font-weight: 600;
}
.director-img {
    align-self: last baseline;
    background: center center url('@/assets/images/lab.jpg');
    background-size: cover;
}

/* animation */
.ltr {
    animation: ltr 0.5s linear both;
}
.rtl {
    animation: rtl 0.5s linear both;
}
@keyframes ltr {
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes rtl {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@media screen and (max-width: 768px) {
    .container .inner {
        width: 100%;
    }
    .slogan {
        background-position: center center;
        background-repeat: no-repeat;background-attachment: fixed;background-size: cover;
    }
    .slogan-text {
        padding-left: 20px;
    }
    .slogan-text > span {
        font-size: 1.5em;
    }
    .about, .ceo-greetings, .director-greetings {
        margin-top: 10vh;
        height: inherit;
    }
    h1 {
        font-size: 1.5em;
    }
    .about > .inner, .ceo-text, .director-text {
        box-sizing: border-box;
        padding: 30px 20px;
        border-radius: 0;
    }
    .about .inner > p {
        text-align: left;
    }
    .wow{
        animation-name: none !important;
        visibility: visible !important;
    }
    .ceo-greetings > .inner, .director-greetings > .inner {
        flex-direction: row;
        width: 100%;
        height: auto;
    }
    .ceo-text, .director-text {
        width: 100%;
        height: auto;
    }
    .ceo-img, .director-img {
        display: none;
    }
    .ceo-text > p, .director-text > p {
        text-align: left;
    }
    .director-text > p {
        padding: 0;
    }
}
</style>