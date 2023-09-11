import 
   Environment 
from 'common/Environments';


const activityLogUri = `${Environment.apiHost}`;

export const getAllCaseStudies = async () => {

    try{
        const caseRes = await fetch(`${activityLogUri}`);
        const result = await caseRes.json();
        return result;
    }catch(e){
        return{
            ok: false,
            error: e,
        }
    }
}

