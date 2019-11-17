const CACHE_NAME = 'measure-converter';

const STATICS_TO_PRELOAD = [
	'img/logo-32.png',
	'img/logo-512.png',
	'img/new_window.png',
	'index.html',
	'app.js',
	'style.css',
];

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(cache => cache.addAll(STATICS_TO_PRELOAD)
			.then(self.skipWaiting)
		)
	);
});

self.addEventListener('activate', function (event) {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.match(event.request).then(function (resp) {
				return fetch(event.request).then(function(response) {
					if (event.request.method === 'GET' && event.request.cache !== 'no-store') {
						cache.put(event.request, response.clone());
					}
					return response;
				}).catch(function (err) {
					return resp;
				});
			});
		})
	);
});
