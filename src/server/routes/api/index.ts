import * as express from 'express';
import eventAttendingRouter from './event-attending';
import eventTagsRouter from './event-tags';
import eventsRouter from './events';
import tagsRouter from './tags';
import usersRouter from './users';

const router = express.Router();

router.use('/event/attending', eventAttendingRouter);
router.use('/event/tags', eventTagsRouter);
router.use('/events', eventsRouter);
router.use('/tags', tagsRouter);
router.use('/users', usersRouter);

export default router;
