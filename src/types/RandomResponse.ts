import { RandomInfo } from '@/types/RandomInfo';
import { RandomUser } from '@/types/RandomUser';

export type RandomResponse = {
  info: RandomInfo
  results: RandomUser[]
}
