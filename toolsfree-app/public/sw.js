// Propeller Ads verification service worker
self.addEventListener('install', function(e) {
    console.log('Propeller Ads Service Worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    console.log('Propeller Ads Service Worker activated');
    // Ensure the service worker takes control of all clients
                        e.waitUntil(clients.claim());
});

// Handle fetch events if needed
self.addEventListener('fetch', function(e) {
    // Pass through all fetch requests
                        return;
});
