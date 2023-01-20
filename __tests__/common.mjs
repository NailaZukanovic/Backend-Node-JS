export const mockResponse = () => {
  const res = {};
  res.status = (val) => {
    res.statusCode = val;
    return res;
  };
  res.json = (val) => {
    res.body = val;
    return res;
  };
  return res;
};

export const nextFunction = (data) => {
  return data;
};
