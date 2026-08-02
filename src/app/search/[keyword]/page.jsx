import Movies from "@/components/Movies";

const Page = async ({ params }) => {
  const { keyword } = await params;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_API_KEY}`,
        Accept: "application/json",
      },
    }
  );

  const data = await res.json();

  console.log(data);

  return (
    <div>
      {!data?.results ? (
        <div>Aradığınız Film Bulunamadı</div>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-3">
          {data?.results.map((dt, i) => (
            <Movies dt={dt} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
