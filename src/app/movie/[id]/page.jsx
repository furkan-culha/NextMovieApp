import Image from "next/image";
const getMovie = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_API_KEY}`,
      Accept: "application/json",
    },
  });
  return await res.json();
};
const Page = async ({ params }) => {
  const { id } = await params;
  const movieDetail = await getMovie(id);
  console.log("Movie:", movieDetail);
  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail.backdrop_path || movieDetail.poster_path
        }`}
        alt={movieDetail.title}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2">{movieDetail?.overview}</div>
        <div>
          {new Date(movieDetail?.release_date).toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
          -{movieDetail?.vote_average}
        </div>
        <div className="my-2 border w-32 hover:bg-white hover:text-black p-2 text-center text-lg cursor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};
export default Page;
