import { Review } from './types/review';

/
 * Interface representing the structure of a service offered by CleanSSR.
 * @interface Service
 * @property {string} id - Unique identifier for the service.
 * @property {string} name - Name of the service provided by CleanSSR.
 * @property {string} description - Description of the service.
 * @property {number} price - Price of the service.
 */
export interface Service {
    id: string;
    name: string;
    description: string;
    price: number;
}

/
 * Interface representing a user profile in CleanSSR system.
 * @interface UserProfile
 * @property {string} id - Unique identifier for the user.
 * @property {string} name - Name of the user.
 * @property {string} email - Email address of the user.
 * @property {Review[]} reviews - Array of reviews given by the user.
 */
export interface UserProfile {
    id: string;
    name: string;
    email: string;
    reviews: Review[];
}

/
 * Interface representing the response structure from an API call to fetch services.
 * @interface ServiceResponse
 * @property {Service[]} services - Array of services offered by CleanSSR.
 * @property {string} message - Status message for the API response.
 */
export interface ServiceResponse {
    services: Service[];
    message: string;
}

/
 * Interface representing a technology business review.
 * @interface Review
 * @property {string} id - Unique identifier for the review.
 * @property {string} userId - The ID of the user who wrote the review.
 * @property {string} content - Content of the review.
 * @property {number} rating - Rating given by the user.
 */
export interface Review {
    id: string;
    userId: string;
    content: string;
    rating: number;
}

/
 * Function to fetch services offered by CleanSSR.
 * @returns {Promise<ServiceResponse>} - A promise that resolves to the ServiceResponse containing available services.
 */
export async function fetchServices(): Promise<ServiceResponse> {
    // Example implementation of fetching services
    const response = await fetch('/api/services');
    const data: ServiceResponse = await response.json();
    return data;
}