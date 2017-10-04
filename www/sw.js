importScripts('workbox-sw.prod.v2.0.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/lazyiframe.js",
    "revision": "77d98e72d055046875a9bd66fe23e736"
  },
  {
    "url": "build/lazyiframe.registry.json",
    "revision": "8068a6eff69ec577087508dffb130189"
  },
  {
    "url": "build/lazyiframe/bmamhctt.css",
    "revision": "dcef5e36fd93ca84dd470a1da90e96cb"
  },
  {
    "url": "build/lazyiframe/hddacy8x.js",
    "revision": "29d020f7132b8aeac1925a4ffbb2c2c2"
  },
  {
    "url": "build/lazyiframe/lazyiframe.eeclxdll.js",
    "revision": "1979f78aa4174dac260ac515c0ff2c60"
  },
  {
    "url": "build/lazyiframe/lazyiframe.tg5isdaz.pf.js",
    "revision": "91e6e0916a9b953e26b6dcb606ce2b5c"
  },
  {
    "url": "index.html",
    "revision": "e543762f43d980b87f7861d6f2224ee1"
  },
  {
    "url": "workbox-sw.prod.v2.0.1.js",
    "revision": "679d4e73dc756b21e46ee8f1bb52c882"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
