const Footer = () => {
  return (
    <section id="contact" className="mt-20 w-full bg-yellow-200 py-10">
      <div className=" mx-auto w-5/6">
        <div className=" flex items-stretch justify-evenly gap-x-40">
          <div className=" py-10 text-4xl font-bold leading-8 text-blue-500">
            CHATTER
          </div>

          <div className="py-5">
            <ul className="list-none">
              <li className="py-4 font-bold">Explore</li>
              <li>community</li>
              <li className="py-2">Trending blogs</li>
              <li>Chatter for teams</li>
            </ul>
          </div>
          <div className="py-5">
            <ul className="list-none">
              <li className="py-4 font-bold">Support</li>
              <li>Support docs</li>
              <li className="py-2">Join Slack</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="py-5">
            <ul className="list-none">
              <li className="py-4 font-bold">Official Blog</li>
              <li>Official blog</li>
              <li className="py-2">Engineering blog</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
