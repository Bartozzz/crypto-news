import LocalForage from "localforage";
import VuexPersistence from "vuex-persist";

// This must be called before any other calls to localForage are made, but can
// be called after localForage is loaded.
LocalForage.config({
  name: "crypto-news",
  storeName: "cypto-news-store",
  version: 1.0
});

export default function createPersistedState(options = {}) {
  return store => {
    const VuexForage = new VuexPersistence({
      ...options,

      storage: LocalForage,
      asyncStorage: true,

      // Used to trigger `storageReady` event as soon as the state is loaded
      // from LocalForage:
      restoreState: (key, storage) =>
        new Promise(resolve => {
          storage.getItem(key).then(data => {
            resolve(data);

            store._vm.$root.$emit("storageReady");
          });
        })
    });

    return VuexForage.plugin(store);
  };
}
