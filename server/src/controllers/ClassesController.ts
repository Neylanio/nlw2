import db from '../database/connection';

import convertHourToMinutes from '../utils/convertHourToMInutes';
import { Request, Response } from 'express';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

class ClassesController {
  async create (request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body;
  
    const trx = await db.transaction();
    
    try {
  
      const user_id = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
    
      const class_id = await trx('classes').insert({
        subject,
        cost,
        user_id: user_id[0],
      });
    
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          class_id: class_id[0]
        };
      });
    
      await trx('class_Schedule').insert(classSchedule);
    
      await trx.commit();    
  
      return response.status(201).send();
  
    }catch(err) {
      await trx.rollback();
  
      return response.status(400).json({error: 'Unexpected error while creating new class'});
    }
  }
}

export default ClassesController;