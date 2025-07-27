export const setDefaultInitialState = (data) => {
  return {
    ids: data.map((item) => item.id),
    entities: data.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {})
  };
};