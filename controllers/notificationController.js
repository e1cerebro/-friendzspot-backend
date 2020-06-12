const { asyncMiddleware } = require('../middlewares/asyncMiddleware');
const { Notification } = require('../models/notification');
const status = require('http-status');
const { newError } = require('../helpers/error');

//returns all existing notifications
exports.index = asyncMiddleware(async (req, res) => {
  const notifications = await Notification.notifications();

  if (notifications.length <= 0)
    throw newError('No notification was not found', status.NOT_FOUND);

  res.send(notifications);
});
exports.create = asyncMiddleware(async (req, res) => {
  const notifications = await Notification.create(req);

  if (!notifications)
    throw newError('notification could not be created!', status.BAD_REQUEST);

  res.status(status.CREATED).send(notifications);
});
exports.getSentFriendRequests = asyncMiddleware(async (req, res) => {
  const notifications = await Notification.getSentFriendRequests(req);

  if (!notifications)
    throw newError('notification could not be found!', status.NOT_FOUND);

  res.send(notifications);
});
exports.deleteSentFriendRequest = asyncMiddleware(async (req, res) => {
  const notifications = await Notification.deleteSentFriendRequest(req);

  if (!notifications)
    throw newError('notification could not be deleted!', status.BAD_REQUEST);

  res.send(notifications);
});
exports.receivedFriendRequests = asyncMiddleware(async (req, res) => {
  const notifications = await Notification.receivedFriendRequests(req);

  if (!notifications)
    throw newError('notification could not be deleted!', status.BAD_REQUEST);

  res.send(notifications);
});
exports.friendRequests = asyncMiddleware(async (req, res) => {
  const notifications = await Notification.findFriendRequests(req);

  if (notifications.length <= 0 || !notifications)
    throw newError('Friend requests not found!', status.BAD_REQUEST);

  res.send(notifications);
});
exports.delete = asyncMiddleware(async (req, res) => {
  const notifications = await Notification.delete(req.params.id);

  if (!notifications)
    throw newError('Notification could not be deleted!', status.BAD_REQUEST);

  res.send(notifications);
});
exports.deleteFriendRequest = asyncMiddleware(async (req, res) => {
  const notifications = await Notification.delete(req.params.id);

  if (!notifications)
    throw newError('Notification could not be deleted!', status.BAD_REQUEST);

  res.send(notifications);
});
