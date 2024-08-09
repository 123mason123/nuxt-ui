<script setup lang="ts">  
import { useRoute } from 'vue-router';  
const route = useRoute();    
const res = await getFetchData({
  url: `${process.env.API_URL}/ecmsapi/index.php?mod=app&act=flashdetail`,
  opts: { id: route.params.id }
});


</script>  
<template>  
    <div> 
        <h2>{{ res.data.newsFlashTitle }}  </h2> 
        <p>{{ res.data.newsFlashContent }}  </p> 
     
    </div>  
  </template> 