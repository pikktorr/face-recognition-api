const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id })
    .then(user => {
      if (user.length) {
        return res.json(user[0]);
      } else {
        return res.status(400).json("not found");
      }
    })
    .catch(() => {
      res.status(400).json("error getting user");
    });
};

module.exports = {
  handleProfileGet: handleProfileGet
};