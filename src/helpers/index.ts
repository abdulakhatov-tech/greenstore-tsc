import dayjs from "dayjs";

export const formatPrice = (price: number) => {
  // format price to currency format with 2 decimal places
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
};

export const formattedDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: any = { day: "2-digit", month: "short", year: "numeric" };

  return new Intl.DateTimeFormat("en-GB", options).format(date);
};


export const formatTime = (time: string) => {
  const date = dayjs(time);
  const format = date.format('YYYY-MM-DD')

  return format
}