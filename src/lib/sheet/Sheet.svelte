<script lang="ts">
    import type { Sheet } from "$lib/type/mainSheet";

    export let sheets:Sheet[] = [];
</script>

<div class="sheet-container">
    {#each sheets as sheet}
        <a class="sheet" href="/sheet/{sheet.id}">
            <div class="sheet-back" style="background-image: url({sheet.url});"></div>
            <div class="sheet-name">{sheet.name}</div>
        </a>
    {/each}
</div>

<style>
    .sheet-container{
        display: flex;
        text-decoration: none;
        gap:20px;
        width:100%;
        flex-wrap: wrap;
    }

    .sheet{
        width:150px;
        color:#ffffff;
        margin-right: 20px;
        transition: all 0.2s ease;
    }
    .sheet:hover{
    filter: brightness(0.9);
    cursor: pointer;
    }
    .sheet-back{
        width:100%;
        height: 200px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-color: #ffffff;
        border-radius: 7px;
    }
    .sheet-name{
        text-align: center;
    }
    

</style>