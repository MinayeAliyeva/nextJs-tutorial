export default function Head() {
  return (
    <>
      <title>My Awesome Page</title>
      <meta
        name="description"
        content="This is a Next.js application with SEO optimization."
      />
      <meta name="keywords" content="Next.js, SEO, React, Web Development" />
      <meta name="author" content="Celine" />
      <meta property="og:title" content="My Awesome Page" />
      <meta
        property="og:description"
        content="Learn how to use title and meta tags in Next.js"
      />
      <meta property="og:image" content="/images/seo-image.jpg" />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
