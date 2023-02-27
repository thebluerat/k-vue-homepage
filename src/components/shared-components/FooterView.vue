<template>
    <footer>
        <div class="inner">
            <div class="footer-logo">
                <a href="./index.html"><img src="@/assets/images/kephas-logo.png" alt=""></a>
            </div>
            <div class="footer-info">
                <span>(주)케파스 | TEL: 02-2038-3531 | FAX: 02-2038-3533 | E-Mail kephas_adm@kephas.kr</span>
                <span>서울특별시 강남구 선릉로 72길 42, 301호</span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footer-view'
}
</script>

<style scoped>
footer {
    position: sticky;
    bottom: 0;
    height: 150px;
    background-color: rgba(26, 26, 112);
    width: 100%;
    color: #eee;
    padding-top: 30px;
    box-sizing: border-box;
}
footer .inner {
    display: flex;
}
.footer-logo {
    flex: 1;
    filter: grayscale(100%);
}
.footer-info {
    flex: 2;
}
.footer-info span {
    display: block;
}

@media screen and (max-width: 768px) {
    footer {
        height: 250px;
    }
    footer .inner {
        width: 100%;
        text-align: center;
        flex-direction: column;
    }
    .footer-info span {
        font-size: 14px;
        padding: 10px;
    }
}
</style>