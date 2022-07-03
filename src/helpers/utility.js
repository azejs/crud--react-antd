/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-find-dom-node */
export function rtl(valueWhenRTL, valueWhenNotRTL) {
  return props => {
    const isRTL = props['data-rtl'] === 'rtl';
    return isRTL ? valueWhenRTL : valueWhenNotRTL;
  };
}

export function getView(width) {
  let newView = 'MobileView';
  if (width > 767) {
    newView = 'TabView';
  }
  return newView;
}

export function getUrlPath(path, url) {
  // let split = path.split('/')
  return path.replace(`${url}`, '').replace('/', ''); // split[split.length - 1];
}

export function reorder(list, startIndex, endIndex) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result.slice();
}

export function rmBreakLines(str) {
  const split = str.split(/\r?\n|\r/g);
  return split.join('');
}

export function itemGap(weightParent, weightParentUpdatedAt, items) {
  const gap = items.reduce(
    (num, one) =>
      one.weightParent <= weightParent &&
      new Date(one.weightParentUpdatedAt) < new Date(weightParentUpdatedAt)
        ? num + 1
        : num,
    0,
  );
  return gap;
}

export const itemsTypes = [
  { _id: '-1', name: 'Niveau supérieure' },
  { _id: '0', name: 'Même niveau' },
  { _id: '1', name: 'Niveau inférieur' },
];
