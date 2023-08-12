
<script lang="ts">
    import SheetContainer from "$lib/main/SheetContainer.svelte";
    import type { iSheet } from "$lib/type/main";
    import { sheetsStore } from "$lib/store";
    let buttonActive = false;
</script>

<nav>
    <h1 class ="title">MAKE<br>MUSIC</h1>
    <div class="button {!buttonActive ? 'active' : ''}" on:click={() => buttonActive = !buttonActive}>&nbsp;악보들</div>
    <div class="button {buttonActive ? 'active' : ''}" on:click={() => buttonActive = !buttonActive}>&nbsp;로그인</div>
</nav>

<div class="main">
    <h1 class="sht">악보들</h1>
    <SheetContainer sheets={$sheetsStore} />
    <div class="newbutton">새로 만들기</div>
</div>

<style>
    *{
        user-select: none;
    }
    nav{
        background-color:#7f7f7f ;
        height: 200%;
        flex-grow: 1;
        min-width: 210px;
        max-width: 210px;
        margin-top: 2px;
    }

    .main{
        background-color: #5b5b5b;
        flex-grow: 3;
        height: 100%;
        overflow-y: auto;
        margin-left: 50px;
        margin-top: 15px;
      
    }
    .title{
        font-size: 40pt;
        color: white;
        font-weight: 250;
        margin-left: 25px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .button{
        color : white;
        transition: all 0.2s ease;
        font-size: 25px;
        border-top :1px  #5b5b5b solid;
        border-bottom: 1px  #5b5b5b solid;
       padding: 7px;
    }
    .button.active{
        background-color:#777777 ;
        cursor: pointer;
        border-left: dodgerblue 5px solid;
    }
 
    .sht{
        color: #ffffff;
        font-size: 50px;
        font-weight: 100;
    }
    .newbutton{
        position: fixed;
        margin: 5px;
        border: 1px solid #d9d9d9;
        border-radius: 8px ;
        background-color: #d9d9d9;
        font-size: large;
        width: 130px;
        height: 30px;
        padding: 4px;
        font-weight: 500;
        right: 60px;
        bottom: 60px;
        font-size: 20px;
        filter: drop-shadow(1px 1px 2px black);
    }
.newbutton:hover{  
        border: 1px solid #aeaeae;
        background-color: #aeaeae;
        cursor: pointer;
}

</style>
