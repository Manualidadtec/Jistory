import ArticlePage from "../components/ArticlePage";

export default function Biography() {
  return (
    <ArticlePage
      eyebrow="Portfolio · Pillar 01"
      title="Biography"
      subtitle="The life and service of the American Sniper"
      image="/images/biography.jpg"
      imageAlt="Editorial portrait honoring an American military veteran"
      body={`The individual I am going to focus on is Chris Kyle, the "American Sniper." Chris Kyle was born in Odessa, Texas on April 8, 1974. Chris joined the armed forces in the year 1999, for the Navy SEALS unit. Chris served 10 years for the United States military. After serving in the military Chris launched a non-profit group named FICO Cares Foundation, which provide fitness equipment to veterans. Chris Kyle is less known in the general knowledge of people, he is well known within the military community.`}
      facts={[
        { label: "Born", value: "April 8, 1974 · Odessa, Texas" },
        { label: "Enlisted", value: "1999 — U.S. Navy SEALs" },
        { label: "Years of service", value: "10 years" },
        { label: "Legacy", value: "FICO Cares Foundation" },
      ]}
      next={{ label: "Literature", route: "/literature" }}
    />
  );
}
