import { CartProductPropsI } from '@type/index';
import dayjs from 'dayjs';

// Utility function to format price with currency
export const formatPrice = (price: number, locale: string = 'en-US', currency: string = 'USD'): string => {
  if (isNaN(price)) {
    console.error('Invalid price value');
    return '';
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  }).format(price);
};

// Utility function to format a date string to a more readable format
export const formatDate = (dateString: string, locale: string = 'en-GB', options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' }): string => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date string');
    }

    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};

// Utility function to format a time string
export const formatTime = (time: string, format: string = 'YYYY-MM-DD'): string => {
  try {
    const formattedDate = dayjs(time).format(format);
    if (!formattedDate) {
      throw new Error('Invalid time format');
    }
    return formattedDate;
  } catch (error) {
    console.error('Error formatting time:', error);
    return '';
  }
};

// Utility function to format discount percentage
export const formatDiscount = (coupon: any) => {
 return  coupon?.discount_for
    ? `${coupon.discount_for}%`
    : "0%";
}

// Utility function to calculate totals
export const calculateTotals = (
  cart: CartProductPropsI[],
  shipping: number,
  couponPercentage: number
) => {
  const totalWithoutCoupon = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalWithShipping = totalWithoutCoupon + (cart.length ? shipping : 0);
  const totalWithCoupon =
    totalWithoutCoupon * ((100 - couponPercentage) / 100) +
    (cart.length ? shipping : 0);

  return {
    totalWithoutCoupon,
    totalWithShipping,
    totalWithCoupon,
  };
};