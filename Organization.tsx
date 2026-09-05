import ArticlePage from "../components/ArticlePage";

export default function Organization() {
  return (
    <ArticlePage
      eyebrow="Contact · Pillar 03"
      title="Organization"
      subtitle="Giving back to disabled veterans"
      image="/images/organization.jpg"
      imageAlt="Fitness equipment in a bright, organic space"
      body={`The artifact I have decided to portray is his non-profit organization. Chris's non-profit is named FITCO Cares Foundation. The organization focuses on helping disabled veterans, it provided fitness equipment to their home. The organization was co-founded, Chris collaborated with Jason Kos who is the president of the organization.`}
      facts={[
        { label: "Organization", value: "FITCO Cares Foundation" },
        { label: "Mission", value: "Support disabled veterans" },
        { label: "Provides", value: "In-home fitness equipment" },
        { label: "President", value: "Jason Kos (co-founder)" },
      ]}
      prev={{ label: "Literature", route: "/literature" }}
    />
  );
}
