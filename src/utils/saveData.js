/*
 * this was runned from src/containers/App/index.js
 * i choosed to not include it since the saving probably should work in some other way.
 *
 function onAfterCommandExecute(ev) {
    if (!['toFront', 'toBack'].includes(ev.command.name)) return;

    // this event is triggered twice for every `toBack` or `toFront`
    // first time with outdated snapshot and second time with updated snapshot.
    // there's no way to tell them apart

    // if we setData with the outdated snapshot, it doesn't trigger the second time
    // and we don't get the updated snapshot

    // so using a dirty trick here
    if (counter % 2 === 1) saveData(ev.command.snapShot);
    counter += 1;
  }
 *
 *
 * And this was inside src/components/Flowcanvas/index.js
 * at line 37. The return exists today but onAfterChange is saving.
   return (
    <Flow
      onAfterItemSelected={async (e) => {
        const item = await e.item;

        setEdge(item);
      }}
 onAfterChange={(e) => {
        // `changeData` is caused by setData and allowing `group` causes some error
        if (
          e.action === 'changeData' ||
          (e.item.type === 'group' && e.action !== 'remove')
        ) {
          return;
        }

        saveData(dataMapToData(e.item && e.item.dataMap, e.item.itemMap));
      }}
      data={data}
 *
 * */
export function saveData(data) {
  localStorage.setItem('data', JSON.stringify(data));
}
