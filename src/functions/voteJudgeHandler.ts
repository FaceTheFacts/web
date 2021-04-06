import { Judge } from "../enums/judge.enum";


export const voteJudgeHandler = (totalYesVote:number, totalVote:number): string => {
  let judgement = Judge.REJECTED;
  if (totalYesVote > +totalVote / 2) {
    judgement = Judge.ACCEPTED; 
    return judgement;
  }
  return judgement;
};
