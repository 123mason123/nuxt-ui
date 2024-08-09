export default defineEventHandler(async (event) => {
 /**
   * 快讯列表
   */
 if (event.method === 'GET') {
    const result = await $fetch('http://1.117.64.200:39118/ecmsapi/index.php?mod=app&act=newsflash');
    return result;
  }

});