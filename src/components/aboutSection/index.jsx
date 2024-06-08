import myImage from "../../assets/profilBilde.jpg";

function AboutSection() {
  return (
    <section className=" mb-10 flex gap-5">
      <img
        className="object-center size-64 rounded-md hover:rotate-3 shadow-lg "
        src={myImage}
        alt="This is a picture of me"
      />
      <section className="flex flex-col w-1/2">
        <h3 className="text-2xl font-bold mb-3">
          My Name is Eirik and i am a front-end developer
        </h3>
        <p className="text-xl">
          As a passionate and innovative designer, I thrive on crafting visually
          stunning and thoughtfully structured designs that captivate and engage
          users. My creativity knows no bounds; I'm constantly exploring new
          ways to blend form and function to create memorable experiences.
        </p>
      </section>
    </section>
  );
}

export default AboutSection;
