import { Router } from "express";
import {getSampleData, getDayLevel, getMonthLevel, getYearLevel} from '../controllers/api.controllers.js';

const router = Router();

router.get('/sample', getSampleData);

router.get('/daylevel', getDayLevel);

router.get('/monthlevel', getMonthLevel);

router.get('/yearlevel', getYearLevel);

export default router;