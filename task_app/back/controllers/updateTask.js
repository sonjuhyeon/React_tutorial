const database = require("../database/database");

exports.updateCompletedTask = async (req, res) => {
  const { isCompleted, itemId } = req.body;
  try {
    const result = await database.query(
      "UPDATE task SET iscompleted = $1 WHERE _id = $2",
      [isCompleted, itemId]
    );
    return res.status(200).json({ message: "Task Updated Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
