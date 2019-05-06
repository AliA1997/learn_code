import { AuthContext } from './auth.context';
import { AuthChecker } from 'type-graphql';

// export const authChecker: boolean> = ({context: {user} }, roles) => {
//     if(!roles.length) {
//         return user !== undefined;
//     }
//     //If there is no user
//     if(!user) {
//         return false;
//     }
//     if(roles.some(role => role == user.role)) {
//         return true;
//     }
//     return false;
// }

export const authChecker: AuthChecker<AuthContext> = ({root, args, context: { user }, info }, roles) => {
    if (roles.length === 0) {
      // if `@Authorized()`, check only is user exist
      return user !== undefined;
    }
    // there are some roles defined now
  
    if (!user) {
      // and if no user, restrict access
      return false;
    }
    if (user.roles.some(role => roles.includes(role))) {
      // grant access if the roles overlap
      return true;
    }
  
    // no roles matched, restrict access
    return false;
  };