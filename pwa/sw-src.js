importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

if (workbox) {
  const { precacheAndRoute } = workbox.precaching;
  const { registerRoute, NavigationRoute } = workbox.routing;
  const { createHandlerBoundToURL } = workbox.precaching;

  // Workbox will inject the manifest here
  precacheAndRoute(self.__WB_MANIFEST || []);

  // Navigation fallback to index.html for offline support
  const handler = createHandlerBoundToURL('./index.html');
  const navigationRoute = new NavigationRoute(handler);
  registerRoute(navigationRoute);

  self.addEventListener('install', (event) => {
    self.skipWaiting();
  });
}
