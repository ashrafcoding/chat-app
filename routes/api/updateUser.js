const router = require("express").Router();
const { User, Message, Conversation } = require("../../db/models");

router.put("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const conversationId = req.body.conversationId;
    const userId = req.user.id;
    const conversation = await Conversation.findOne({
      where: { id: conversationId },
    });
    if (conversation.user1Id !== userId && conversation.user2Id !== userId) {
      return res.sendStatus(403);
    }
    if (conversationId === 0) {
      await User.update(
        { activeConversation: 0 },
        {
          where: { id: userId },
        }
      );
    } else {
      await User.update(
        { activeConversation: conversationId },
        {
          where: { id: userId },
        }
      );

      const message = await Message.findOne({
        where: { conversationId },
        attributes: ["id", "senderId", "unreadCount", "conversationId"],
        order: [["createdAt", "DESC"]],
      });

      if (message.senderId !== userId) {
        await message.update({ unreadCount: 0 });
      }
      res.json(message);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
