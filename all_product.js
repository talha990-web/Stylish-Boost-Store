import p1_img from './women-fifteen.avif';
import p2_img from './women-sixteen.avif';
import p3_img from './women-seventeen.avif';
import p4_img from './women-ten.avif';
import p5_img from './women-five.avif';
import p6_img from './women-six.avif';
import p7_img from './women-seven.avif';
import p8_img from './women-eight.avif';
import p9_img from './women-two.avif';
import p10_img from './women-nine.avif';
import p11_img from './women-eleven.avif';
import p12_img from './women-twelve.avif';
import p13_img from './men-fifteen.avif';
import p14_img from './men-four.avif';
import p15_img from './men-five.avif';
import p16_img from './men-ninteen.avif';
import p17_img from './men-sixteen.avif';
import p18_img from './men-six.avif';
import p19_img from './men-seven.avif';
import p20_img from './men-eight.avif';
import p21_img from './men-nine.avif';
import p22_img from './men-ten.avif';
import p23_img from './men-eleven.avif';
import p24_img from './men-twelve.avif';
import p25_img from './kid-sixteen.avif';
import p26_img from './kid-thirteen.avif';
import p27_img from './kid-fifteen.avif';
import p28_img from './kid-nine.avif';
import p29_img from './kid-five.avif';
import p30_img from './kid-six.avif';
import p31_img from './kid-seven.avif';
import p32_img from './kid-eight.avif';
import p33_img from './kid-eleven.avif';
import p34_img from './kid-ten.avif';
import p35_img from './kid-four.avif';
import p36_img from './kid-twelve.avif';


let all_product = [

  {
    id: 1,
    name: "Elegant silk dress perfect for parties",
    category: "women",
    image: p1_img,
    new_price: 69.07,
    old_price: 91.91,
  },
  {
    id: 2,
    name: "Floral maxi dress for sunny days",
    category: "women",
    image: p2_img,
    new_price: 47.37,
    old_price: 85.71,
  },
  {
    id: 3,
    name: "Breathable cotton kurti for daily wear",
    category: "women",
    image: p3_img,
    new_price: 45.43,
    old_price: 95.27,
  },
  {
    id: 4,
    name: "Stylish crop top with matching skirt",
    category: "women",
    image: p4_img,
    new_price: 40.10,
    old_price: 88.13,
  },
  {
    id: 5,
    name: "Trendy high waist jeans for outings",
    category: "women",
    image: p5_img,
    new_price: 24.19,
    old_price: 96.24,
  },
  {
    id: 6,
    name: "Soft summer blouse with chic design",
    category: "women",
    image: p6_img,
    new_price: 28.14,
    old_price: 93.58,
  },
  {
    id: 7,
    name: "Faux leather jacket for bold style",
    category: "women",
    image: p7_img,
    new_price: 33.66,
    old_price: 94.83,
  },
  {
    id: 8,
    name: "Warm woolen cardigan for winter season",
    category: "women",
    image: p8_img,
    new_price: 47.20,
    old_price: 86.59,
  },
  {
    id: 9,
    name: "Light chiffon top for casual wear",
    category: "women",
    image: p9_img,
    new_price: 78.97,
    old_price: 85.56,
  },
  {
    id: 10,
    name: "Embroidered lawn suit with fine details",
    category: "women",
    image: p10_img,
    new_price: 51.46,
    old_price: 97.11,
  },
  {
    id: 11,
    name: "Formal blazer suitable for office wear",
    category: "women",
    image: p11_img,
    new_price: 66.93,
    old_price: 86.72,
  },
  {
    id: 12,
    name: "Workout leggings designed for women",
    category: "women",
    image: p12_img,
    new_price: 76.91,
    old_price: 92.18,
  },

  {
    id: 13,
    name: "Classic fit shirt for formal events",
    category: "men",
    image: p13_img,
    new_price: 40.58,
    old_price: 90.91,
  },
  {
    id: 14,
    name: "Casual blazer great for daily wear",
    category: "men",
    image: p14_img,
    new_price: 49.14,
    old_price: 98.14,
  },
  {
    id: 15,
    name: "Cotton round neck tee for comfort",
    category: "men",
    image: p15_img,
    new_price: 55.40,
    old_price: 93.86,
  },
  {
    id: 16,
    name: "Rugged denim jacket for casual look",
    category: "men",
    image: p16_img,
    new_price: 39.87,
    old_price: 85.76,
  },
  {
    id: 17,
    name: "Stretch jeans perfect for daily use",
    category: "men",
    image: p17_img,
    new_price: 59.91,
    old_price: 91.00,
  },
  {
    id: 18,
    name: "Formal trousers ideal for business style",
    category: "men",
    image: p18_img,
    new_price: 35.40,
    old_price: 85.77,
  },
  {
    id: 19,
    name: "Comfy hoodie for everyday winter wear",
    category: "men",
    image: p19_img,
    new_price: 61.95,
    old_price: 91.96,
  },
  {
    id: 20,
    name: "Trendy graphic t-shirt with cool design",
    category: "men",
    image: p20_img,
    new_price: 43.97,
    old_price: 87.73,
  },
  {
    id: 21,
    name: "Stylish bomber jacket with modern fit",
    category: "men",
    image: p21_img,
    new_price: 71.64,
    old_price: 93.36,
  },
  {
    id: 22,
    name: "Elegant kurta for traditional occasions",
    category: "men",
    image: p22_img,
    new_price: 58.71,
    old_price: 85.42,
  },
  {
    id: 23,
    name: "Heavy winter coat with wool lining",
    category: "men",
    image: p23_img,
    new_price: 31.77,
    old_price: 92.55,
  },
  {
    id: 24,
    name: "Polo neck t-shirt for smart look",
    category: "men",
    image: p24_img,
    new_price: 50.45,
    old_price: 87.94,
  },

  {
    id: 25,
    name: "Colorful cartoon shirt loved by kids",
    category: "kid",
    image: p25_img,
    new_price: 37.14,
    old_price: 98.02,
  },
  {
    id: 26,
    name: "Soft baby romper for newborn comfort",
    category: "kid",
    image: p26_img,
    new_price: 58.18,
    old_price: 88.34,
  },
  {
    id: 27,
    name: "Cozy winter jacket for playful outings",
    category: "kid",
    image: p27_img,
    new_price: 45.40,
    old_price: 91.67,
  },
  {
    id: 28,
    name: "Durable denim jeans perfect for school",
    category: "kid",
    image: p28_img,
    new_price: 70.17,
    old_price: 97.13,
  },
  {
    id: 29,
    name: "Printed pajama set for bedtime fun",
    category: "kid",
    image: p29_img,
    new_price: 53.67,
    old_price: 98.35,
  },
  {
    id: 30,
    name: "Warm hoodie to keep boys cozy",
    category: "kid",
    image: p30_img,
    new_price: 69.14,
    old_price: 89.78,
  },
  {
    id: 31,
    name: "Floral dress designed for little girls",
    category: "kid",
    image: p31_img,
    new_price: 40.41,
    old_price: 85.15,
  },
  {
    id: 32,
    name: "Comfy bodysuit for all-day ease",
    category: "kid",
    image: p32_img,
    new_price: 33.83,
    old_price: 92.91,
  },
  {
    id: 33,
    name: "Cute sweatshirt with animal print style",
    category: "kid",
    image: p33_img,
    new_price: 64.60,
    old_price: 97.28,
  },
  {
    id: 34,
    name: "Waterproof raincoat for rainy days",
    category: "kid",
    image: p34_img,
    new_price: 52.07,
    old_price: 85.96,
  },
  {
    id: 35,
    name: "Joggers for active and fun playtime",
    category: "kid",
    image: p35_img,
    new_price: 38.40,
    old_price: 92.34,
  },
  {
    id: 36,
    name: "Fleece pullover to keep kids warm",
    category: "kid",
    image: p36_img,
    new_price: 42.28,
    old_price: 94.78,
  },

];

export default all_product;

