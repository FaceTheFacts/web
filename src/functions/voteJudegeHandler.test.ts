import { Judge } from '../enums/judge.enum';
import {voteJudgeHandler} from './voteJudgeHandler';

test(('If the total number of yes surpasses half of the total vote, it returns accepted.'), () => {
  expect(voteJudgeHandler(300,500)).toBe(Judge.ACCEPTED)
})
test(('If the total number of yes does not surpass half of the total vote, it returns accepted.'), () => {
  expect(voteJudgeHandler(100,500)).toBe(Judge.REJECTED)
})

