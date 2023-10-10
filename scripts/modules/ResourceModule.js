const ResourceModule = (() => {
  const resources = [{ gold: 0 }, { wood: 0 }, { iron: 0 }];

  const getAll = () => structuredClone(resources);

  return {
    getAll,
  };
})();
export default ResourceModule;
