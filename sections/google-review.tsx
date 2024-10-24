import { ImageWidget } from 'apps/admin/widgets.ts';

/**
 * @format color-input
 */
type ColorWidget = string;

/**
 * @format color-input
 */
interface Review {
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: ImageWidget;
}

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  subtitle?: string;
  reviews?: Review[];
  /**
   * @description Link to all reviews on Google
   */
  allReviewsLink?: string;
  /**
   * @description Text for the "View All Reviews" button
   */
  buttonText?: string;
  /**
   * @description Show or hide the "View All Reviews" button
   */
  showButton?: boolean;
  /**
   * @description Overall rating score
   */
  overallRating?: number;
  /**
   * @description Total number of reviews
   */
  totalReviews?: number;
  /**
   * @description Background color of the section
   * @format color-input
   */
  backgroundColor?: ColorWidget;
  /**
   * @description Background color of the button
   * @format color-input
   */
  buttonBackgroundColor?: ColorWidget;
}

export default function TestimonialSection({
  title = "What Our Customers Say",
  subtitle = "Read the experiences of our satisfied customers",
  reviews = [
    {
      name: "Maria Korsgaard",
      date: "15/04/2021",
      rating: 5,
      comment: "The host was waiting for us and was very polite and helpful. Apartments are amazing!",
      avatar: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
    },
    {
      name: "Davis Dokidis",
      date: "15/04/2021",
      rating: 5,
      comment: "Nice apartments, friendly host and a quiet environment. Approx 4.3 km outside the center located. 700 m away from a mall.We were extremely satisfied with everything, will definitely come again.",
      avatar: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
    },
    {
      name: "Maren Calzoni",
      date: "15/04/2021",
      rating: 5,
      comment: "The places is super clean, everything is new and the beds are super comfortable",
      avatar: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
    }
  ],
  allReviewsLink = "https://www.google.com/business",
  buttonText = "View All Reviews on Google",
  showButton = true,
  overallRating = 4.9,
  totalReviews = 39,
  backgroundColor = "#f3f4f6",
  buttonBackgroundColor = "#2563eb"
}: Props) {
  return (
    <section class="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor }}>
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-2">{title}</h2>
        <p class="text-xl text-gray-500 text-center mb-8">{subtitle}</p>
        
        <div class="flex flex-wrap justify-center items-center mb-8">
          <div class="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                class="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span class="ml-3 text-4xl font-bold text-gray-900">{overallRating.toFixed(1)}</span>
          <span class="ml-2 text-lg text-gray-600">based on {totalReviews} reviews</span>
        </div>
        
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} class="bg-white rounded-lg shadow-md p-6">
              <div class="flex items-center mb-4">
                <img src={review.avatar} alt={review.name} class="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 class="font-semibold text-lg">{review.name}</h3>
                  <p class="text-gray-500 text-sm">{review.date}</p>
                </div>
              </div>
              <div class="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    class={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p class="text-gray-700 whitespace-pre-wrap">{review.comment}</p>
            </div>
          ))}
        </div>
        
        {showButton && (
          <div class="mt-12 text-center">
            <a
              href={allReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300" style={{ backgroundColor: buttonBackgroundColor }}
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}