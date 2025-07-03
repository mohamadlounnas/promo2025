'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0576fef0b705ed84df0bb9cd750001e1",
"version.json": "edd348d597439532a5a22b00464178ff",
"index.html": "3074e158c01a7cf9b552cf2dac5955b1",
"/": "3074e158c01a7cf9b552cf2dac5955b1",
"main.dart.js": "fcc106eebd9f2c48387e1a38b05aea1d",
"flutter.js": "baab3b6ad5e74e3f0d43d96274f5fba9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fa8389609adb7bcaa37055d7968ec99c",
".git/ORIG_HEAD": "7bc84183d2bd6df42c4edb2b33973746",
".git/config": "39e90d1ea6edc6f60f2ba15fde65a08e",
".git/objects/61/25a9569cb282a603a5bea89b78417bc3b2cfd0": "4a38800fec188b75e194ce6940a33a20",
".git/objects/0d/21bd9e801633c0aea91e9c577e7fea79a64723": "3cd3a7ae65f5aef91c4c93bb577073f1",
".git/objects/50/b53f696851529ebd2430ab99bd62e09715f71f": "844090f287a6b10242f5992ed2c5a145",
".git/objects/3b/33e882f3a3221414b401c78eca14c91a3e7810": "4fa80ccd3cef046a0d8d1520a419e270",
".git/objects/9b/3c402e958f14ee5ce3e56ae405e5737eca6c78": "b2bae92b56f8867571d6c72510d22c37",
".git/objects/69/d0202c4317918887cbe9d9f80101e77b772729": "825cdeb0a965300ba72bfa0d6d487ee2",
".git/objects/5a/857f1562e35fee611bdfa224741dcb957dc2df": "e9eeddf4b65e04f5de73fcf71bbee335",
".git/objects/a4/a1639f0802354162e9cabb243027fb4ac5ee0f": "c37bfd23c83b36d32625b8f2f04bd3e0",
".git/objects/a4/90770b9d0a7f6d2fac338cfb82fa388e703050": "a232112bdf4ded88c540c4ea7ca78397",
".git/objects/b2/b18ef84e8cf1689d78cc5e70742daa2ddfad74": "9f9ca2f8f541c0532e51146592d5fd27",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "1a4ee0c85a695a5f8ce1f75dac7efc0c",
".git/objects/da/f112ecab4d7068c371cccd97c6a90ea661ce3b": "cb20aa96d313b59f78a140b7fed3a5ad",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ae/44c874234e9107a7dd7bd0187cbf30e9697b03": "b76406c04225a0820f801fb84004692d",
".git/objects/ae/4019c898d91f5c3cb7ed1a9c2797d3cff91cdc": "31836b186a9fcb35ed1c7cea9a5e9923",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c7/a9f8e34bdf9a4e0996bce74b8a161188c8aebd": "a99d2c51b954ccbf38064075dc4d1d99",
".git/objects/c0/05a56f34382358a9becf434de6454a1c52bee2": "285e0869f764be87791ecf8f70384836",
".git/objects/c9/ccd92ccb2499597aa05219284fe49195b4ded1": "b03e044390d5e7ad15a2f8b86832301a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/cf/fb0fce672e154ba667f5060409328e294f59d1": "3c5960dc4a0b1c65a9c686161f8a34e1",
".git/objects/fe/d7eaf0785262ff0afd7e171b0ac95dda68837b": "4b4dd0533190656ce2a8233fa6b286a2",
".git/objects/42/6003cf10618265dba81f328aad12368bbfaf98": "1a9f3a42139ab0a3ade5d6605e6481bc",
".git/objects/28/c636c9dd62ed9900aacf0c764bdb8ee377e2dd": "9b5b1532d91b36d1b68717c238f3ab76",
".git/objects/8a/d8781b0de15be4b8e97ce6a364a09c56393ad2": "c9c7f347dd7e195f0b2570288ba1a479",
".git/objects/8a/95d925e3b5511edce3ee11f561f43ec9f658b3": "f9cbe103a53b7348209694a51a0fca89",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/10/0851a037c3689004a98d925d217ec9ef9bfb12": "e72a53f137c9455ab39abb15a7fe2e21",
".git/objects/75/c042210646b32f0163b5d9f004535af3898b8e": "12afe1fbbbbdbd29573d8c5f95bbe0cd",
".git/objects/81/61c9cdd746e9c03a00f1e2c4cb76d28eb5ebd3": "b90b603c685c9ce5daf9673713026059",
".git/objects/44/d617924afb372bd241a99da92ed7c2c67793cd": "62ef8e0925271883c95bc6e93eb01fb6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/7ba6f68aac12b093c283a770d58c8a7da5261b": "0cd2dcc9ffd7d43dbd056c7d56515cf7",
".git/objects/6b/6a2a8cc811512187255720c9812d4e2b095e71": "3a4f3bf7e6fd7dac74a5bdd68be7bf3f",
".git/objects/6b/2e2227b95744239f63ae8877bd9a00c1cfc4cf": "756a2fd9e4ee2ff792d7808d598e9879",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/00/155357b0f71ea9109c81847d737d7ec2c8eb42": "9f68e0bbb8edd1f74e9cbb8401736e80",
".git/objects/6e/1f2bd945ec87a0907e23e30c4533a2662952f4": "9843d7b2badd3c23a7e28796c1f22582",
".git/objects/31/3c17b5ccad86bf3f2335fef6b002cec8af833d": "d07c6fa9ee8e54540775179df47bfc45",
".git/objects/54/782bc3896c5a50c73c1fa80893ec4b9f2b0a6d": "a52937fbeec2e579fa43dbbc55b9c356",
".git/objects/53/f02d9b54240cac81089a22d4db168bcfb41c17": "4ffed3b79b1e2c07c5d12df0a754fee0",
".git/objects/5e/c469932257cd3361d0ed5d41040633202ad93a": "7a3ecf13480b2cae0bc93c6293eee534",
".git/objects/5b/594f0697a8b1c0d34d226b49a604ea2d1ec52c": "f3c778f79a1754a7beeb0b58027beafb",
".git/objects/52/c24993f0f5722c200715ddeef258b14ecc079b": "df391ef703567d02e6b447372877f506",
".git/objects/0a/b86fec93131f4562c3431b5244cca9e2b27585": "8c8fe392ccb7ce7c27d0de8698ff2669",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/a0/c391e9f22773dbf284055d90fd34332056df28": "c2786c24bf39c02889ecfe6e1a821ab8",
".git/objects/a0/f6890d5206a604f64a5afff1641804a0db508e": "998bc1cd4c6bc83b52be3a14868e689a",
".git/objects/b1/10e78972733f8deecf22273d4d19eb65344a42": "eb628e2c47392445dc03b4e6424a8ce2",
".git/objects/dc/b0d02268b222d560aac58672aaddc08b299fe5": "112f193d4bbe7e396eaf69835d6eee06",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b11768e6a8ca60bad07211a36372d59f",
".git/objects/d2/83ea86feaaa8781843446e2dd181df211e2b07": "1e83c10cf1df6b52840748d7af37104e",
".git/objects/af/68eb991cf905d745edf4511a98aae7cb6a9e22": "dc4a5420db1491cbbdc886a7be65ed5b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/db/7a36a00580ca9d9f398056c8dbc5450a7aed54": "1cdaa819b1b26b96b16c380e22912545",
".git/objects/de/b30f1f28eee8139a83ad7e7234bb935a817b54": "646f21e5418bf855b1885d551584d560",
".git/objects/b0/cea4431e998c329d2986adc039daa4d1482505": "170dd65f1c2ced96821d69d7809dba10",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/3827ee36dd79fa943e6e3395d299aee63bef29": "a5460753437a3c888604e749f329a526",
".git/objects/e6/0f94dd8ccc0f29c11e923df571a3269c54f6d5": "bf202ea74c3c2f949d569e8a211ba004",
".git/objects/e9/a713953f2fb032258ddc58a74916abb0b73e4c": "182ca7f3f19b71c77d8c54fd43294281",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/ce/714459f646892621ea95e4dff1b067415b14d6": "60db30824aab461a8652ac049ab1a8a9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/8c/36a9eddd066cbde018d33b22c930fc5cba449d": "5bae1eca8be742222ea7e10381ebd72d",
".git/objects/8b/87f30b639a685661d7af8d5fcce63ce7bf083a": "782597b8ddeead09b5c23c7dc0cde4e1",
".git/objects/7f/e4eb7d3e027394b83a2458c042588b32680e8d": "1f4d09fcce47f4f23303ab0f2f2a4ba0",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "2e52b2703dcf92f5b2f87b4661347cc3",
".git/objects/22/dbda206851973a696c6fd7237d829bc4cc8d9a": "b4d512dbf0efa9c2379e1d9bb89d861b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "24bf6efd47d9b6c80c324557a5e16dfb",
".git/logs/refs/heads/main": "24bf6efd47d9b6c80c324557a5e16dfb",
".git/logs/refs/remotes/origin/main": "3477cb178da66efab2df48be140a8182",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7bc84183d2bd6df42c4edb2b33973746",
".git/refs/remotes/origin/main": "7bc84183d2bd6df42c4edb2b33973746",
".git/index": "7b3dd25af9300a762f21f053cb514bd0",
".git/COMMIT_EDITMSG": "9cb782942070bac5e4a4c64ee279ea0f",
".git/FETCH_HEAD": "c09b59e08e6c2deee410a402a8453623",
"assets/AssetManifest.json": "24a8cdc8c36352f128e9893dd5a0f0e5",
"assets/NOTICES": "7c633deb696c8184affa6612be94b8fb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "815108e32df8b995042e637a01b0f67c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "77057b6678b3ff23af84b06788b2d1bd",
"assets/fonts/MaterialIcons-Regular.otf": "1daf91620e21c1673699542c45cc7a16",
"assets/assets/students_2025/ry.jpeg": "f8c811d5e8af7069e201fc0ff928b916",
"assets/assets/students_2025/belhouari.jpeg": "a04dc0a2997b8bdea467d90472ad3586",
"assets/assets/students_2025/Zerouali.jpeg": "10976de48f36994b7e824d4080d3e782",
"assets/assets/students_2025/Mouna%2520hanachi.jpeg": "b314496e02e295973590d4cb50806774",
"assets/assets/students_2025/hamid.jpeg": "2c160d8f2176454ad3369a25ebbcbeb4",
"assets/assets/students_2025/chakib.jpeg": "eb250b36c60d70350a17572da4e45d3a",
"assets/assets/students_2025/ikram.png": "2cb27ef6bed9f37a90d8bfa8bc118638",
"assets/assets/lol.png": "1868963d929b7b8664a96d20f3869d52",
"assets/assets/blida.jpeg": "d1ec0b6d71ed621059fc08ef32f42d2e",
"assets/assets/usdb.png": "16e18ccc241a7c79f48d663c701f4638",
"assets/assets/students/Larachi_FERIEL.jpg": "bf11eb6e536e4f1a4682233b0fd98983",
"assets/assets/students/photo_5796607946128475219_y.jpg": "7efd96d028064445da73c2b51bee0a00",
"assets/assets/students/lamis.jpg": "6ea0c99519db161762d65ca4737b5fee",
"assets/assets/students/gogo.png": "a7e9312adf743a8fb05820873f1fe170",
"assets/assets/students/zineb.png": "8635e564317945616c93544ecb3d6e5f",
"assets/assets/students/d4fcc345-4732-4fbf-b59c-3739b43c3d3d.png": "5045987312a98f2b75aa3555a92a9700",
"assets/assets/students/TCHANTACHANE.jpg": "776e3c62b90d64e2fc367fc668ae4e6b",
"assets/assets/students/nabila.jpg": "ce1e9f6db20b4b4c6124f6832e1dd263",
"assets/assets/students/photo_5796607946128475214_y.jpg": "ce61491634aac90abe29c18f7e4f868d",
"assets/assets/students/fella.png": "dd305c7406332d3ef9e3036cb6369c0d",
"assets/assets/students/Screenshot%25202024-07-10%2520at%252011.25.56%25E2%2580%25AFAM.png": "a1eeafbd53761764f58078eaa10a1bbb",
"assets/assets/students/1.png": "e723a454c08bf2626ef6108bc19ae0da",
"assets/assets/students/walid.png": "c77332ee5aa3db19103f7bd0e71717a1",
"assets/assets/congratulations.jpg": "b055cd53804748efb844a8bcf754fdea",
"canvaskit/skwasm.js": "37fdb662bbaa915adeee8461576d69d7",
"canvaskit/skwasm_heavy.js": "f5c1413d222bc68856296fc97ac9fec0",
"canvaskit/skwasm.js.symbols": "904aa9cd0e3718f06981fad267fea5ab",
"canvaskit/canvaskit.js.symbols": "4579c3a2644fe20c7f8495644ad35c38",
"canvaskit/skwasm_heavy.js.symbols": "10f2e2916283498fd095622d70e02304",
"canvaskit/skwasm.wasm": "ec06ad7fa98846beff7a925010fa323e",
"canvaskit/chromium/canvaskit.js.symbols": "d29271f8faa7fc4b0355218fb427a92a",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "88dc0786b13b9f657a1cbfaced6cb323",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "cec53dd1ee2102fa245ad250f918cd98",
"canvaskit/skwasm_heavy.wasm": "d1241e4b140f4d536ccb2ede46b182f8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
