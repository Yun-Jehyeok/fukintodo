const express = require("express");
const { Todo } = require("../../models/todo");
const { User } = require("../../models/user");

const router = express.Router();

router.post("/", (req, res) => {
  const { userId, date, startTime, endTime, title, content } = req.body;

  User.findOne({ _id: userId }).then((user) => {
    if (!user) return res.status(400).json({ success: false, msg: "유저를 찾을 수 업습니다." });

    const newTodo = new Todo({
      date,
      startTime,
      endTime,
      title,
      content,
    });

    newTodo
      .save()
      .then(() => {
        User.findByIdAndUpdate(userId, {
          $push: {
            todos: newTodo,
          },
        })
          .then((t) => {
            User.findOne({ _id: userId })
              .populate("todos")
              .then((test) => {
                res.status(200).json({ success: true, data: test });
              });
          })
          .catch((e) => {
            res.status(400).json({ success: false, msg: "유저 정보를 업데이트하지 못했습니다." });
          });
      })
      .catch((e) => {
        res.status(400).json({ success: false, msg: "할 일을 저장하지 못했습니다." });
      });
  });
});

router.put("/", (req, res) => { });

router.delete("/", (req, res) => { });

module.exports = router;
