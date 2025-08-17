export const BRAND_NAME = "CleanSSR";
export const PRIMARY_COLOR = "#6A0DAD"; // Purple
export const SECONDARY_COLOR = "#FFFFFF"; // White

/
 * Configuration for the CleanSSR application, which focuses on providing
 * technology-driven cleaning solutions with a minimalistic design.
 */
export const CONFIG = {
  websiteTitle: "CleanSSR - Technology-Driven Cleaning Solutions",
  tagline: "Innovative, Efficient, and Reliable Cleaning Services",
  description: "At CleanSSR, we leverage technology to provide top-notch cleaning solutions. Our minimalistic approach ensures that our services are not only effective but also easy to understand and access.",
  contactEmail: "info@cleanssr.com",
  phone: "+1 (800) 555-0199",
  socialMediaLinks: {
    facebook: "https://facebook.com/cleanssr",
    twitter: "https://twitter.com/cleanssr",
    instagram: "https://instagram.com/cleanssr",
  },
};

/
 * Review Interface representing customer feedback for CleanSSR services.
 */
export interface Review {
  customerName: string;
  rating: number; // Rating out of 5
  comment: string;
}

/
 * Example reviews for CleanSSR
 */
export const REVIEWS: Review[] = [
  {
    customerName: "Alice Johnson",
    rating: 5,
    comment: "CleanSSR transformed my office space! Highly recommend their services.",
  },
  {
    customerName: "Bob Smith",
    rating: 4,
    comment: "Efficient and reliable cleaning service. The technology integration is impressive!",
  },
  {
    customerName: "Charlie Brown",
    rating: 5,
    comment: "Best cleaning service I've ever used! The team is professional and thorough.",
  },
];

/
 * Technology Business Logic related to CleanSSR's operational aspects.
 */
export const calculateCleaningCost = (area: number, ratePerSquareFoot: number): number => {
  return area * ratePerSquareFoot;
};

/
 * Function to format review ratings into a star representation.
 * @param rating - The rating to format.
 * @returns A string representation of the rating in stars.
 */
export const formatRatingToStars = (rating: number): string => {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}; 

export default {
  BRAND_NAME,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  CONFIG,
  REVIEWS,
  calculateCleaningCost,
  formatRatingToStars,
};