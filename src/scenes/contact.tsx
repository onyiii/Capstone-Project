import contact from "@/assets/contact.jpg";

const Contact = () => {
  return (
    <section id="contact" className="mt-20 w-full bg-yellow-200 py-10">
      <div className=" mx-auto w-5/6">
        <div className=" flex gap-x-20">
          <div className="w-1/2">
            <img src={contact} alt="contact" className=" rounded-full border" />
          </div>
          <div className="flex flex-col">
            <div className="py-5">
              "Chatter has become an integral part of my online experience. As a
              user of this incredible blogging platform, I have discovered a
              vibrant community of individuals who are passionate about sharing
              their ideas and engaging in thoughtful discussions.”
            </div>
            <div className="mb-5">
              <span className="font-bold"> Adebobola Muhydeen,</span> Software
              developer at Apple
            </div>
            <div>
              <button className="rounded-md bg-blue-500 px-10 py-2 text-white">
                Join chatter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
