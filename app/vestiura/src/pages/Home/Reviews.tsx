import Marquee from "@/components/ui/marquee";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { StarRating } from "@/components/ui/star-rating";
import { reviews } from "@/constants";



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  review,
  rate,
  date,
}: {
  img: string;
  name: string;
  username: string;
  review: string;
  rate: number;
  date: string;
}) => {
  return (
    <Card>
      <CardContent className="w-80 p-3 bg-muted">
        <div className="flex justify-between space-x-4">
          <img
            className="rounded-full h-12 w-12 object-contain"
            alt={`${name}'s avatar`}
            src={img}
          />
          <div className="flex flex-col space-y-1">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-sm font-semibold">{name}</h4>
                <p className="text-xs font-medium text-muted-foreground">
                  {username}
                </p>
              </div>
              <StarRating
                value={rate}
                iconProps={{
                  className: "size-4 fill-transparent stroke-primary",
                }}
                disabled
              />
            </div>
            <p className="text-sm leading-tight">{review}</p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">{date}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export function Reviews() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
    </div>
  );
}
