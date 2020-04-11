//import * as Types from "../types/serviceTypes";

export const load = data => {
    console.log(data);
    return {type: 'LOAD', data: data};
};