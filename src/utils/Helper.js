/**
 * Author: Ankit Jain
 * Project Name: Github Profiler
 * Date: 05-May-2018
 */

/*Check whether JSON is empty or not */
export function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) 
            return false;
        }
    
    return true;
}