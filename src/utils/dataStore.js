import { mdiCheck } from '@mdi/js';
import eventBus from './eventBus.js';

const chkListStore = [];
const dateListStore = [];

function getChkListStore(){
    return chkListStore;
}

function getDateListStore(){
    return dateListStore;
}

function removeChkItem(idx){
    chkListStore.splice(idx-1, 1);
    return chkListStore;
}

function removeDateItem(idx){
    dateListStore.splice(idx-1, 1);
    return dateListStore;
}

function addItem(item){
    chkListStore.push({
        isChecked: false,
        textState: true,
        color: 'white',
      