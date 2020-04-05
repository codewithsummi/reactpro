import {URL} from '../components/url';
export function fetchCategory()
{
    return fetch(`${URL}getcategory`);
}
export function fetchProduct()
{
    return fetch(`${URL}fetchproduct`);
}