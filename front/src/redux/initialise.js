import {getAll} from '../utils/Api.js'
import {initOrgs} from './actions.js'

export const loadInitial = (dispatch) => 
    getAll("org").then(orgs => {
            getAll("account").then(accounts =>
            {
                var new_orgs = orgs.objects.map(org => {
                    org['accounts'] = accounts.objects.filter(account => account.org_id === org.id)
                    return org;
                })
                dispatch(initOrgs(new_orgs));
            })
        });

export const initialState = {
    "orgs":[
{
    id:0,
    name: "Someone's flower shop",

    address: `123 Smith Road"
Canberra Flats
Canberra 6043
Australia`,

    accounts: [
        {code: 123, descr: "one two three"},
        {code: 456, descr: "four five six"}    
    ]
}]};