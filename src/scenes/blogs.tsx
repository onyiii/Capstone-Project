import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";
import blog3 from "@/assets/blog3.png";

const Blogs = () => {
  return (
    <section id="blogs" className="mt-10 w-full py-10">
      <div className=" mx-auto w-5/6">
        <div className=" flex gap-x-20">
          <div className="flex w-1/3 gap-x-10">
            <div>
              <img
                src={blog1}
                alt="blog1"
                className=" mb-10 rounded-full border"
              />
              <img src={blog2} alt="blog2" className=" rounded-full border" />
            </div>
            <div className="py-20">
              <img src={blog3} alt="blog3" className="rounded-full border" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="py-5 text-4xl font-bold">
              Write, read and connect <br /> with great minds on chatter
            </div>
            <div className="mb-5">
              Share people your great ideas, and also read write-ups based on
              your <br /> interests. connect with people of same interests and
              goals
            </div>
            <div>
              <button className="rounded-md bg-blue-500 px-10 py-2 text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
