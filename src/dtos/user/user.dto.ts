import { USER_TYPE } from '../../user/user.schema';

export class UserDTO {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  aboutMe: string;
  orcid: string;
  linkedin: string;
  blog: string;
  role: string;
  starredPapers: string[];
  isOnboarded: boolean;
  acceptedTC: boolean;
  disciplines: string[];
  userType: USER_TYPE;
}
