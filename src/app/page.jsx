import Movies from "@/components/Movies";

const Page = async ({ searchParams }) => {
  const params = await searchParams;
  const genre = params.genre || "popular";

  const res = await fetch(`https://api.themoviedb.org/3/movie/${genre}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_API_KEY}`,
      Accept: "application/json",
    },
  });

  const data = await res.json();

  console.log("data:", data);

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies dt={dt} key={i} />
      ))}
    </div>
  );
};

export default Page;
