function defaultHeader(req, res, next){
  res.setHeader("Content-Type", "application/json");
  next();
}

module.exports = defaultHeader;
