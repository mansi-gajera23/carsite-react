async function session(req, res) {
  try {
    const userDatas = req.session.user;

    if (!userDatas) {
      return res.status(401).json({ message: "No session created!" });
    } else {
      res
        .status(200)
        .json({
          sessionData: userDatas,
          success: true,
          message: "got sucessfully",
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = { session };
