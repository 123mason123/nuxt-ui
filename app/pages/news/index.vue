<script setup lang="ts">  
  
const res = await getFetchData({
    url: `${process.env.API_URL}/ecmsapi/index.php?mod=app&act=newsflash`,
  opts: { page: 1 }
});


</script>  
<template>  
    <div>  
      <ul>  
        <li v-for="flash in res.data.list" :key="res.data.list.id">  
          {{ flash.newsFlashTitle }}  
        </li>  
      </ul>  
    </div> 
  </template> 