export function findItemByKey(key, items) {
  for (const item of items) {
    if (item.key === key) {
      return item;
    }
  }
  return null;
}

export function findItemById(id, components) {
  for (const component of components) {
    for (const item of component.items) {
      if (item.id === id) {
        return item;
      }
    }
  }
  return null;
}
