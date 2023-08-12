<script lang="ts">
    let buttonActive = false;
</script>
<header>
    <div class="button {!buttonActive ? 'active' : ''}" on:click={() => buttonActive = !buttonActive}>홈</div>
    <div class="button {buttonActive ? 'active' : ''}" on:click={() => buttonActive = !buttonActive}>악보</div>
</header>
<main>
    <slot />

</main>


<style>
    *{
        user-select: none;
    }
    header {
        height: 40px;
        background-color: #7f7f7f;
        color: white;
        display: flex;
    }
    main{
        display: flex;
        height: calc(100% - 40px);
        background-color: #5b5b5b;
       
    }
    .button{
        color : white;
        transition: all 0.2s ease;
        font-size: 25px;
        border-right :1px  #5b5b5b solid;
       padding: 5px;
    }
    .button.active{
        background-color:#777777 ;
        cursor: pointer;
        border-top: dodgerblue 3px solid;
    }
</style>

