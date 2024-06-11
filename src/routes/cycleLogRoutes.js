const {Router}  = require ('express');
const {validateJWT} = require('../middleware/validateJWT')
const {
    registerCycleLog,
    updateCycleLogEntry,
    getCycleLogs,
    removeCycleLog
} = require('../controllers/cycleLogController');

const router = Router();

router.post('/register-cycle-log', [validateJWT], registerCycleLog)
router.post('/update-cycle-log/:cycleLogId', [validateJWT], updateCycleLogEntry);
router.get('/user-cycle-logs/:year/:month', [validateJWT], getCycleLogs);
router.delete('/cycle-log/:logId', [validateJWT],  removeCycleLog);

module.exports = router;