import ArticlePage from "../components/ArticlePage";

export default function Literature() {
  return (
    <ArticlePage
      eyebrow="Catalog · Pillar 02"
      title="Literature"
      subtitle="A legacy told through words and lives touched"
      image="/images/literature.jpg"
      imageAlt="Open vintage book with reading glasses in warm light"
      body={`Through his autobiography, biopic and his non-profit organization. Chris lives on through his family, his friends, and with the people he served with. The character of who Chris Kyle was marked those who were around him. Chris made an impact not only with his family but also within the veteran community. He can relate with the individuals who were marked by the war. Chris was an individual who wanted to help, if it wasn't to his country he most definitely helped his community. People who served with him demonstrated their gratitude towards him, it was watching its back during the tours and/or saving them on the battlefield. Today people relate to him through patriotism, active members of the military want to make a difference like Chris made in history.`}
      facts={[
        { label: "Autobiography", value: "American Sniper" },
        { label: "Biopic", value: "Told on the big screen" },
        { label: "Remembered by", value: "Family, friends & veterans" },
        { label: "Legacy value", value: "Patriotism & service" },
      ]}
      prev={{ label: "Biography", route: "/biography" }}
      next={{ label: "Organization", route: "/organization" }}
    />
  );
}
