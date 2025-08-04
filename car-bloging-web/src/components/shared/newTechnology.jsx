

const NewTechnology = ({ data }) => {

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-11 py-10 font-poppins">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <h2 className="text-[24px] md:text-[32px] font-bold ">
            New Technology
          </h2>
          <div className="border-b-4 mx-4 mb-4  border-black w-8"></div>
        </div>
        <p className="text-[16px] font-semibold">See all</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {data?.slice(0, 4).map((post, id) => (
          <div
            key={post?.id}
            className="max-w-[280px] w-full p-4 mx-auto border rounded-lg bg-[#D9D9D9] hover:bg-slate-200 transition-colors"
          >
            <div className="max-w-[248px] w-full object-cover mb-4 rounded-lg">
              <img src={post?.img} alt={post?.title} />
            </div>
            {post?.author ? (
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{post?.title}</h3>
                <div className="mt-8">
                  <div className="flex items-center">
                    <img
                      src={post?.authorAvatar}
                      alt={post?.authorName}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <h4 className="text-md font-semibold">
                        {post?.authorName}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Joined: {post?.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h3 className="text-lg font-semibold">{post?.title}</h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewTechnology;
