export const setDefaultInitialState = (data) => {
  return {
    ids: data.map((item) => item.id),
    entities: data.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {})
  };
};

function S4() {
  return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

export function guid() {
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}