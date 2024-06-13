/**
 * customerDetailsCookie.js
 *
 * This file provides utility functions for managing customer details stored in cookies.
 * It includes functions to save, retrieve, and remove customer details from cookies.
 */
import Cookies from 'js-cookie';

const COOKIE_NAME = 'customerDetails';

/**
 * Saves customer details to a cookie with a 7-day expiration.
 *
 * @param {Object} customerDetails - Customer details object to be saved.
 */
export const saveCustomerDetailsToCookie = (customerDetails) => {
    Cookies.set(COOKIE_NAME, JSON.stringify(customerDetails), { expires: 7 }); // Expires in 7 days
};

/**
 * Retrieves customer details from the cookie.
 *
 * @returns {Object|null} Customer details object if found in the cookie, null otherwise.
 */
export const getOrderDetailsFromCookie = () => {
    const cookieValue = Cookies.get(COOKIE_NAME);
    return cookieValue ? JSON.parse(cookieValue) : null;
};

/**
 * Removes customer details from the cookie.
 */
export const removeOrderDetailsFromCookie = () => {
    Cookies.remove(COOKIE_NAME);
};
