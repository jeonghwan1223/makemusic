<script lang="ts">
    import { sheetsStore } from "$lib/store";
    import { page } from "$app/stores";
    let subtitActive = false;
    let subtitActive2 = false;
    let subtitActive3 = false;
    let navbuttonActive = false;
    console.log($sheetsStore.find((v) => v.id === $page.params.id));


</script>

<!-- /////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////// -->

<div class="flex">
    <nav class="row">
        <div class="button-base start" />
        <div class="button-base stop" />
        <div class="button-input">
            <input type="text" class="input" />배속
        </div>
        <div class="button-input">
            <input type="text" class="input" />번
        </div>
        <div class="note four" />
        <div class="note two" />
        <div class="note2 eight" />
        <div class="note2 sixteen" />
        <div class="note2 zero" />
        <div class="note2 shappp" />
        <div class="note2 flat" />
        <div class="note2 or" />
        <div class="note-e eraser" />
        <a href="\sheet\[id]\auto" class="note-e auto"  />
        <div class="nav-rest" />
        <div class="button-d save" />
        <div class="button-d download" />
    </nav>
    <!-- HRBIEHTORGHIVWHGVNIEWJHEIWJRNGVE -->
    <div class="main-page">
        <div class="side">
            <div
                class="subtit {subtitActive ? 'active' : ''}"
                on:click={() => (subtitActive = !subtitActive)}
            >
                음자리표
            </div>
            <div class="transform">
                <div class="row">
                    <div class="high">
                        <p>&nbsp;</p>
                    </div>
                    <div class="low">
                        <p>&nbsp;</p>
                    </div>
                    <div class="rest">
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
            <div
                class="subtit {subtitActive2 ? 'active' : ''}"
                on:click={() => (subtitActive2 = !subtitActive2)}
            >
                조표
            </div>
            <div class="transform">
                <div class="row">
                    <div class="beat2 pre1">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat2 pre2">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat2 pre3">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat2 pre4">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat2 pre5">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div class="row">
                    <div class="beat2 pre6">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat2 pre7">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat2 prem1">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat2 prem2">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat2 prem3">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div class="row">
                    <div class="beat2 prem4">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat2 prem5">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat2 prem6">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat2 prem7">
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
            <div
                class="subtit {subtitActive3 ? 'active' : ''}"
                on:click={() => (subtitActive3 = !subtitActive3)}
            >
                박자표
            </div>
            <div class="transform">
                <div class="row">
                    <div class="beat fourtwo">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat fourthree">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat fourfour">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat fourfive">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat foursix">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat eightthree">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div class="row">
                    <div class="beat eightfour">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat eightfive">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat eightsix">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat eightseven">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat eightnine">
                        <p>&nbsp;</p>
                    </div>
                    <div class="beat eighttwelve">
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="sheet-page">
    <div class="sheet">
        <input class="input-title">
        <br>
        <input class="input-subtit">
        
    
        </div>
        </div>
    </div>
</div>

<style>
    * {
        user-select: none;
    }
    .sheet-page {
        background-color: #5b5b5b;
        height: 100%;
        flex-grow: 1;
    }
    .sheet{
        background-color: white;
        margin-top:70px;
        margin-left: 225px;
        margin-right: 225px;
        height: 100%;
        text-align: center;
        font-size: large;
        padding: 20px;
        
    }
    .button-base {
        width: 40px;
        height: 36px;
        border-right: #a4a4a4 1px solid;
        filter: invert(100%);
        background-size: contain;
        background-position: center;
        transition: all 0.2s;
    }
    .button-input {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        width: 70px;
        border-right: #5b5b5b 1px solid;
        background-size: contain;
        font-size: 14px;
    }
    .input {
        width: 40px;
        height: 25px;
        border-radius: 0%;
        border: #7f7f7f 1px solid;
        background-color: #d9d9d9;
    }
    .input-title{
        width: 300px;
        height: 70px;
        border-radius: 0%;
        border-bottom: #7f7f7f 2.5px solid;
        border-top: #ffffff 1px solid;
        border-left: #ffffff 1px solid;
        border-right: #ffffff 1px solid;
        font-size: 50px;
        text-align: center;
    }
    .input-subtit{
        border-radius: 0%;
        border-bottom: #7f7f7f 2.5px solid;
        border-top: #ffffff 1px solid;
        border-left: #ffffff 1px solid;
        border-right: #ffffff 1px solid;
        margin-right: -400px;
        margin-top: 20px;
        text-align: center;
        font-weight: 600;
    }
    .button-d {
        height: 36px;
        width: 40px;
        border-left: #a4a4a4 1px solid;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 30px;
        filter: invert(100%);
        transition: all 0.2s;
        
    }
    .nav-rest{
        flex-grow: 1;
        height: 36px;
    }
    .start {
        background-image: url("/note/start.png");
    }
    .stop {
        background-image: url("/note/stop.png");
    }
    .note {
        height: 36px;
        width: 40px;
        border-right: #a4a4a4 1px solid;
        filter: invert(100%);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 13px;
        transition: all 0.2s;
    }
    .note2 {
        height: 36px;
        width: 40px;
        border-right: #a4a4a4 1px solid;
        filter: invert(100%);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 20px;
        transition: all 0.2s;
    }
    .note-e {
        height: 36px;
        width: 40px;
        border-right: #5b5b5b 1px solid;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 20px;
        transition: all 0.2s;
    }

    nav {
        background-color: #7f7f7f;
        height: 40px;
        box-sizing: border-box;
        border-top: 2px solid #5b5b5b;
        border-bottom: 2px solid #5b5b5b;
        width: 100%;
        color: white;
    }
    .main-page {
        display: flex;
        width: 100%;
        height: calc(100vh - 80px);
    }

    .side {
        width: 210px;
        height: 100%;
        background-color: #7f7f7f;
        color: white;
    }

    .flex {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .subtit {
        color: white;
        transition: all 0.2s ease;
        font-size: 25px;
        border-top: 1px #5b5b5b solid;
        border-bottom: 1px #5b5b5b solid;
        padding: 5px;
        cursor: pointer;
    }
    .subtit.active {
        background-color: #777777;
        cursor: pointer;
        border-left: dodgerblue 3px solid;
    }
    .subtit.active + div.transform {
        max-height: 162px;
    }
    .transform {
        transform-origin: top;
        max-height: 0;
        overflow: hidden;
        transition: all 0.3s;
    }
    .high {
        background-image: url("/note/high.png");
        background-size: 100% 100%;
        border-right: #a4a4a4 1px solid;
        border-bottom: #a4a4a4 1px solid;
        height: 10%;
        width: 17.5%;
        filter: invert(100%);
        background-size: 20px;
        background-position: center;
        background-repeat: no-repeat;
        transition: all 0.2s;
    }

    .low {
        background-image: url("/note/low.png");
        background-size: 100% 100%;
        border-right: #a4a4a4 1px solid;
        border-bottom: #a4a4a4 1px solid;
        height: 10%;
        width: 17.5%;
        filter: invert(100%);
        transition: all 0.2s;
    }
    .rest {
        border-bottom: #a4a4a4 1px solid;
        width: calc(210px - 35%);
        filter: invert(100%);
    }

    .row {
        display: flex;
        flex-direction: row;
    }
    .beat {
        background-size: 100% 100%;
        border-right: #a4a4a4 1px solid;
        border-bottom: #a4a4a4 1px solid;
        height: 10%;
        width: 16.6666666667%;
        filter: invert(100%) blur(0.35px);
        background-size: 50px;
        background-position: center;
        background-repeat: no-repeat;
        transition: all 0.2s;
    }
    .beat2 {
        background-size: 100% 100%;
        border-right: #a4a4a4 1px solid;
        border-bottom: #a4a4a4 1px solid;
        height: 10%;
        width: 20%;
        filter: invert(100%) blur(0.35px);
        background-size: 55px;
        background-position: center;
        background-repeat: no-repeat;
        transition: all 0.2s;
    }
   
    .four {
        background-image: url("/note/4d.png");
    }
    .two {
        background-image: url("/note/2d.png");
    }
    .eight {
        background-image: url("/note/8d.png");
    }
    .sixteen {
        background-image: url("/note/16d.png");
    }
    .zero {
        background-image: url("/note/00.png");
    }
    .shappp {
        background-image: url("/note/shappp.png");
    }
    .flat {
        background-image: url("/note/flat.png");
    }
    .or {
        background-image: url("/note/or.png");
    }
    .eraser {
        background-image: url("/note/eraser.png");
    }
    .auto {
        background-image: url("/note/auto.png");
        filter: grayscale(100%) brightness(90%);
    }
    .save {
        background-image: url("/note/save.png");
    }
    .download {
        background-image: url("/note/download.png");
    }
    .fourtwo {
        background-image: url("/note/42.png");
    }
    .fourthree {
        background-image: url("/note/43.png");
    }
    .fourfour {
        background-image: url("/note/44.png");
    }
    .fourfive {
        background-image: url("/note/45.png");
    }
    .foursix {
        background-image: url("/note/46.png");
    }
    .eightthree {
        background-image: url("/note/83.png");
    }
    .eightfour {
        background-image: url("/note/84.png");
    }
    .eightfive {
        background-image: url("/note/85.png");
    }
    .eightsix {
        background-image: url("/note/86.png");
    }
    .eightseven {
        background-image: url("/note/87.png");
    }
    .eightnine {
        background-image: url("/note/89.png");
    }
    .eighttwelve {
        background-image: url("/note/812.png");
    }
    .pre1 {
        background-image: url("/note/pre1.png");
    }
    .pre2 {
        background-image: url("/note/pre2.png");
    }
    .pre3 {
        background-image: url("/note/pre3.png");
    }
    .pre4 {
        background-image: url("/note/pre4.png");
    }
    .pre5 {
        background-image: url("/note/pre5.png");
    }
    .pre6 {
        background-image: url("/note/pre6.png");
    }
    .pre7 {
        background-image: url("/note/pre7.png");
    }
    .prem1 {
        background-image: url("/note/prem1.png");
    }
    .prem2 {
        background-image: url("/note/prem2.png");
    }
    .prem3 {
        background-image: url("/note/prem3.png");
    }
    .prem4 {
        background-image: url("/note/prem4.png");
    }
    .prem5 {
        background-image: url("/note/prem5.png");
    }
    .prem6 {
        background-image: url("/note/prem6.png");
    }
    .prem7 {
        background-image: url("/note/prem7.png");
    }
    .beat:hover {
        background-color: #868686;
    }
    .beat2:hover {
        background-color: #868686;
    }
    .high:hover {
        background-color: #868686;
    }
    .low:hover {
        background-color: #868686;
    }
    .note:hover {
        background-color: #868686;
    }
    .note2:hover {
        background-color: #868686;
    }
    .note-e:hover {
        background-color: #868686;
    }
    .button-d:hover {
        background-color: #868686;
    }
    .button-base:hover {
        background-color: #868686;
    }
    .subtit:hover {
        background-color: #777777;
    }
</style>
