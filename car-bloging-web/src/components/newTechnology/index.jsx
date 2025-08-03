import blogs from "../../assets/data/blogs";
import Writers from "../../assets/data/writer/writer";

function NewTechnology() {
  const blog = blogs.slice(2, 6);
  const writer = Writers.slice(0, 4);

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-11 py-10 font-poppins">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <h2 className="text-[32px] font-bold ">New Technology</h2>
          <div className="border-b-4 mx-4 mb-4  border-black w-8"></div>
        </div>
        <p className="text-[16px] font-semibold">See all</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border rounded-lg bg-[#D9D9D9] hover:bg-slate-200 transition-colors">
        {blog.map((post) => (
          <div
            key={post.id}
            className="max-w-[280px] w-full p-4 "
          >
            <div className="max-w-[248px] w-full object-cover mb-4 rounded-lg">
              <img src={post.img} alt={post.title} />
            </div>
            <h3 className="text-lg font-semibold">{post.title}</h3>
          </div>
        ))}
        {writer.map((author) => (
          <div
            key={author.id}
            className="flex items-center max-w-[280px] w-full px-4 gap-3"
          >
            <div className="object-cover rounded-lg">
              <img src={author.avatar} alt={author.name} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{author.name}</h3>
              <div className="flex items-center">
                <p className="text-[14px] text-gray-600">
                  {new Date().toLocaleDateString()}
                </p>
                <span className="text-[24px] px-2 pb-3">.</span>
                <p className="text-[12px] text-gray-500">
                  Joined: {author.joinedDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewTechnology;
