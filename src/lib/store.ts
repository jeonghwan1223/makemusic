import { writable } from "svelte/store";
import type { iSheet } from "./type/main";

export const sheetsStore = writable<iSheet[]>([{
    id:"1234",
    url:"http://bitcdn.bit-play.com/unibox/2018/11/10/14/a3942bf31df90f42e49fae97a9ddf9c8_3121621_450.jpg",
    name:"쇼스타코비치: 교향곡 5번"
},{
    id:"1235",
    url:"https://cdn.imweb.me/upload/S2021021775c3e29b48cbd/3e46fe2288abb.jpg",
    name:"쇼팽 흑건"
}])