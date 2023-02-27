<template>
    <div class="container">
        <div class="solution inner">
            <div class="title">
                <h1>솔루션</h1>
                <span>고객의 문제를 해결하는 솔루션</span>
            </div>
            <hr>
            <div class="solution-content-box">
                <div class="solution-content">
                    <div class="solution-text">
                        <h2>
                            <img src="@/assets/images/big2core-logo.png">
                            Big2Core
                        </h2>
                        <span>코어  솔루션을 기반으로 고객 행복을 위한 가치 창조를 실현하겠습니다.</span>
                        <a href="http://www.big2core.com/"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div class="solution-content">
                    <div class="solution-text">
                        <h2>
                            <img src="@/assets/images/inzent-logo.png">
                            Inzent
                        </h2>
                        <span>현재와 미래의 가치를 연결하고 소비자의 다양한 경험을 연결, 협업, 공유, 보안하고, 스마트하게 서비스하는 IT Player</span>
                        <a href="https://www.inzent.com/data-ai.php"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div class="solution-content">
                    <div class="solution-text">
                        <h2>
                            <img src="@/assets/images/bimatrix-logo.png">
                            BI Matrix
                        </h2>
                        <span>AUD플랫폼은 기업의 다양한 업무시스템을 구축하는 솔루션으로 BI/OLAP, Dashboard/Visualization, Report, UI/UX, Excel 업무</span>
                        <a href="https://www.bimatrix.co.kr/"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div class="solution-content">
                    <div class="solution-text">
                        <h2>
                            <img src="@/assets/images/kephas-logo.png">
                            Kephas
                        </h2>
                        <span>시스템 통합(SI), 시스템 개발 및 유지보수(SM), 솔루션 판매 및 유지보수, ITO 사업</span>
                        <a href=""><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'solution-view'
}
</script>

<style scoped>
.container {
    height: calc(100vh - 70px);
    margin-top: 70px;
}
.title {
    height: 200px;
    display: flex;
    width: 100%;
    justify-content:left;
}
.title > h1, .title > span {
    align-self: last baseline;
}
.title > span {
    margin-left: 20px;
    color: rgb(26, 26, 112);
    font-weight: 600;
}
hr {
    border: 2px solid rgb(26, 26, 112);
    margin-bottom: 40px;
}
.solution-content-box {
    display: flex;
    justify-content: space-between;
}
.solution-content {
    width: 280px;
    height: 400px;
    border: 2px solid rgb(26, 26, 112);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}
.solution-content:nth-child(1) {
    background: no-repeat center url(@/assets/images/big2core.png);
    background-size: cover;
}
.solution-content:nth-child(2) {
    background: no-repeat center url(@/assets/images/inzent.png);
    background-size: cover;
}
.solution-content:nth-child(3) {
    background: no-repeat center url(@/assets/images/bimatrix.png);
    background-size: cover;
}
.solution-content:nth-child(4) {
    background: no-repeat center url(@/assets/images/kephas.png);
    background-size: contain;
}
.solution-text {
    width: 270px;
    height: 390px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    position: absolute;
    bottom: -305px;
    transition: 0.2s; 
}
.solution-text h2 {
    margin: 0;
    line-height: 60px;
    display: flex;
}
.solution-text h2 img {
    height: 50px;
    margin-right: 20px;
}
.solution-text > span {
    display: block;
}
.solution-text i {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 30px;
}
.solution-content:hover .solution-text{
    bottom: 5px;
}

@media screen and (max-width: 768px) {
    .container {
        height: inherit;
        margin-top: 90px;
    }
    .title {
        height: 100px;
    }
    .title > h1 {
        font-size: 28px;
        width: 110px;
    }
    .title > span {
        font-size: 0.8rem;
    }
    .title > h1, .title > span {
        align-self: last baseline;
    }
    .solution.inner {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
    .solution-content-box {
        flex-direction: column;
        justify-content: center;
    }
    .solution-content {
        width: 100%;
        margin-bottom: 20px;
    }
    .solution-text {
        width: 95%;
        bottom: 2%;
        background-color: #fffffff6;
    }
}
</style>
