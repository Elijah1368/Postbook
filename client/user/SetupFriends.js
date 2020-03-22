

import {addManyFollowers} from './api-user.js'

const friendsIdList = ["5e76f9bdfa4df2001cf9152a", "5e76fb44fa4df2001cf9152f", "5e76fb74fa4df2001cf91532", "5e76fbcefa4df2001cf91537", 
                      "5e76fc07fa4df2001cf9153a", "5e76fc85fa4df2001cf9153d", "5e76fcc6fa4df2001cf91540", "5e76fceffa4df2001cf91543",
                    "5e76fd4afa4df2001cf91548", "5e76fd6cfa4df2001cf9154b", "5e76fda9fa4df2001cf9154e"]

export default function setupFriends(id) {
    addManyFollowers({
      userId: id,
    }, friendsIdList).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        console.log("Big Success" + data)
      }
    })
}