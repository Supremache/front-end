import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "~/components/ui/card";
import Marquee from "~/components/ui/marquee";

const reviews = [
  {
    name: "Dan Corcoran",
    avatar: "../images/DanCorcoran.png",
    position: "Senior Data Engineering Manager, Gepuff",
    body: `"SELECT is a team favorite – its cost monitoring and auto savings give us peace of mind that our Snowflake spend is in check. The platform’s detailed insights across SQL queries, dbt, and Looker usage provides a comprehensive view into credit spend that is unmatched by other solutions."`,
  },
  {
    name: "Erik Webb",
    avatar: "../images/ErikWebb.png",
    position: "Head of Data, Calr",
    body: `"Before SELECT, we were blind to our Snowflake cost drivers. Minutes after install, we identified a single job that was driving over 20% of our costs. The instant visibility & not having to build & maintain our own monitoring makes it a gamechanger for a lean team like ours."`,
  },
  {
    name: "Garrett McClintock",
    avatar: "../images/GarrettMcClintock.png",
    position: "Analytics Engineering Manager, Heap",
    body: `"SELECT helped us monitor and reduce our overall Snowflake spend by almost 40%. The reporting showed me bottlenecks in minutes that would’ve otherwise taken weeks to dig through metadata and sort out. The Automated Savings savings feature alone is saving us over $10k a month across our accounts, allowing us to bring on new workloads."`,
  },
  {
    name: "Alan Cruickshank",
    avatar: "../images/AlanCruickshank.png",
    position: "Head of Data & Insights, Tails.com",
    body: `"Setup for SELECT was swift and pain-free. Within 30 minutes we had a full view of our Snowflake usage and cost drivers, including a level of depth on our dbt project spend which we’ve struggled to get via other means. This helps us stay lean on our costs, while not holding back innovation within the team."`,
  },
  {
    name: "Alex Goodwin",
    avatar: "../images/AlexGoodwin.png",
    position: "Lead BI Developer, The Modern Milkman",
    body: `"SELECT has streamlined our data warehouse monitoring and reduced costs by 30%. Setup is quick and the reporting provides all the information we need to efficiently focus on where to make improvements, allowing the team to focus on building rather than having to worry about increasing costs. It has saved us a huge amount of time and money overnight!"`,
  },
  {
    name: "Jessica Franks",
    avatar: "../images/JessicaFranks.png",
    position: "Data Engineering Manager, Not On The High Street",
    body: `"SELECT helps us quickly identify inefficient queries that consume unnecessary Snowflake credits, providing all the information we need in a single application. With the Automated Savings feature, we were able to allocate credits to new compute-intensive data projects."`,
  },
  {
    name: "Sean Abraham",
    avatar: "../images/SeanAbraham.png",
    position: "Senior Principal Software Engineer, VideoAmp",
    body: `"SELECT helps us quickly identify inefficient queries that consume unnecessary Snowflake credits, providing all the information we need in a single application. With the Automated Savings feature, we were able to allocate credits to new compute-intensive data projects."`,
  },
  {
    name: "Pam Dalal",
    avatar: "../images/PamDalal.png",
    position: "Head of Data, Software.com",
    body: `"We love using SELECT to monitor our snowflake costs and usage. The interface drills down by warehouse, by integration, and surfaces cost anomalies at the query level so we can quickly identify and optimize our pipeline. The Automated Savings feature is easy to implement and pays for itself. This product is a perfect compliment to our Snowflake account."`,
  },
  {
    name: "Aaron Siegel",
    avatar: "../images/AaronSiegel.png",
    position: "Director of Data, Chili Piper",
    body: `"Engaging with SELECT was nothing short of transformative for our operations. Their fast and seamless integration effortlessly optimized our Snowflake warehouses, and we instantaneously reaped the benefits with a noticeable 20% reduction in our bill. But, it's not just about cost savings. SELECT's exceptional product stands as an invaluable tool for identifying costly query workloads, and it expertly guides us through efficient remediation processes. It's a must-have investment where the ROI isn't future promise — it's present fact."`,
  },
  {
    name: "Jonathan Talmi",
    avatar: "../images/JonathanTalmi.png",
    position: "Senior Data Engineering Manager, Super",
    body: `"SELECT provides our team with complete visibility into all aspects of our Snowflake bill and usage. Our team regularly uses SELECT to monitor costs and get alerted on key changes. The dbt & Looker integrations are also super helpful for identifying performance bottlenecks."`,
  },
  {
    name: "Marcus Wong",
    avatar: "../images/MarcusWong.png",
    position: "Director of Business Intelligence",
    body: `"We got up and running with SELECT in about 20 minutes and we're able to drop our usage by 15% in just two days, which freed up budget for other workloads. Our team was able to focus on other valuable business initiatives instead of worrying optimizing costs and building out our own monitoring. Awesome product!"`,
  },
  {
    name: "Gary James",
    avatar: "../images/GaryJames.png",
    position: "Senior Analytics Engineer, Beauty Pie",
    body: `"Onboarding onto SELECT was quick and the instant insights made our spend management a lot more efficient. It's an absolute no-brainer to add to a Snowflake stack!"`,
  },
] as const;

const firstRow = reviews.slice(0, reviews.length / 3);
const secondRow = reviews.slice(reviews.length / 3, (reviews.length * 2) / 3);
const thirdRow = reviews.slice((reviews.length * 2) / 3);

type ReviewCardProps = {
  img: string;
  name: string;
  role: string;
  body: string;
};

const ReviewCard = ({ img, name, role, body }: ReviewCardProps) => {
  return (
    <Card className="p-6 shadow-lg max-w-md bg-quote border-border/20 text-white">
      <CardContent className="p-0">
        <p className="body-2 leading-relaxed mb-4">{body}</p>
      </CardContent>
      <div className="flex items-center mt-4">
        <img
          src={img}
          alt={name}
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <CardTitle className="text-sm font-semibold">{name}</CardTitle>
          <CardDescription className="text-xs text-muted">
            {role}
          </CardDescription>
        </div>
      </div>
    </Card>
  );
};

export default function Reviews() {
  return (
    <section className="container h-full w-full mx-auto py-6 md:py-16 space-y-24">
      <div className="max-w-xl text-center mx-auto">
        <p className="text-xs text-primary tracking-widest uppercase mb-4">
          testimonials
        </p>
        <h2 className="h2 mb-4">Supercharging thousands of Snowflake users</h2>
      </div>

      <div className="relative flex h-[700px] w-full flex-row items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <ReviewCard
              key={index}
              img={review.avatar}
              name={review.name}
              role={review.position}
              body={review.body}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:30s]">
          {secondRow.map((review, index) => (
            <ReviewCard
              key={index}
              img={review.avatar}
              name={review.name}
              role={review.position}
              body={review.body}
            />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {thirdRow.map((review, index) => (
            <ReviewCard
              key={index}
              img={review.avatar}
              name={review.name}
              role={review.position}
              body={review.body}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background"></div>
      </div>
    </section>
  );
}
