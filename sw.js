const CACHE='cyclops-lab-v1-shell-1';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('cyclops-lab-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;
 if(r.mode==='navigate'){
  e.respondWith(fetch(r).then(resp=>{if(resp.ok){const copy=resp.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put('./index.html',copy)));}return resp;}).catch(()=>caches.match('./index.html')));return;
 }
 const url=new URL(r.url);
 if(url.origin===self.location.origin)e.respondWith(caches.match(r).then(hit=>hit||fetch(r)));
 else if(r.destination==='image')e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(resp=>{if(resp.ok||resp.type==='opaque'){const copy=resp.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(r,copy)).catch(()=>{}));}return resp;})));
});
