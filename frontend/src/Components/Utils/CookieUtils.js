import Cookies from 'js-cookie';

const COOKIE_NAME = 'customerDetails';


export const saveCustomerDetailsToCookie = (customerDetails) => {
    Cookies.set(COOKIE_NAME, JSON.stringify(customerDetails), { expires: 7 }); // Expires in 7 days
};


export const getOrderDetailsFromCookie = () => {
    const cookieValue = Cookies.get(COOKIE_NAME);
    return cookieValue ? JSON.parse(cookieValue) : null;
};


export const removeOrderDetailsFromCookie = () => {
    Cookies.remove(COOKIE_NAME);
};
