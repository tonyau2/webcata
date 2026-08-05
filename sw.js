// Service Worker ขั้นต่ำ — มีไว้เพื่อให้เบราว์เซอร์ยอมรับว่าเว็บนี้ "ติดตั้งเป็นแอปได้"
// ไม่ได้ทำ offline caching อะไรซับซ้อน แค่ผ่านเกณฑ์ที่ Chrome/Android ต้องการ

self.addEventListener('install', function(e){
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  self.clients.claim();
});

self.addEventListener('fetch', function(e){
  // ปล่อยผ่านตามปกติ ไม่ไปแทรกแซง/แคชอะไร กันเว็บพังจากการแคชผิดพลาด
  e.respondWith(fetch(e.request));
});
