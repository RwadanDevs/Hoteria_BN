import models from '../models';

const { users } = models;

export default class userServices {
    static getUser(prop) {
        return users.findOne({
            where: { username:prop },
          });
    }
}
