import { Review } from './types';

/
 * Utility functions for CleanSSR application
 * CleanSSR is a technology-driven cleaning company focused on delivering innovative cleaning solutions.
 * The following utilities help format and manage various functionalities within the application.
 */

/
 * A utility function to join class names conditionally.
 * @param classes - Array of class names to join.
 * @returns A string of joined class names.
 */
export function cn(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

/
 * Formats a review object into a presentable string.
 * @param review - The review object containing user feedback.
 * @returns A formatted string of the review.
 */
export function formatReview(review: Review): string {
    return ${review.username} (${review.rating}/5): ${review.comment};
}

/
 * Formats a date to a more readable string format.
 * @param date - The date to format.
 * @returns A string representing the formatted date.
 */
export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

// Example of using the Review interface
const exampleReview: Review = {
    username: 'JohnDoe',
    comment: 'CleanSSR transformed my office space! Highly recommend their tech-driven approach.',
    rating: 5,
    date: new Date('2023-10-10'),
};

console.log(formatReview(exampleReview));
console.log(formatDate(exampleReview.date));