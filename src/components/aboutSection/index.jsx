import myImage from "../../assets/profilBilde.jpg";

function AboutSection() {
  return (
    <section className="flex gap-10 items-center h-dvh">
      <img
        className="object-center size-96 border-headerText border-4 rounded-full"
        src={myImage}
        alt="This is a picture of me"
      />
      <section className="flex flex-col w-1/2">
        <h3 className="text-4xl font-bold mb-3 text-headerText">
          My Name is Eirik and i am a front-end developer
        </h3>
        <p className="text-2xl">
          As a passionate and innovative designer, I thrive on crafting visually
          stunning and thoughtfully structured designs that captivate and engage
          users. My creativity knows no bounds; I'm constantly exploring new
          ways to blend form and function to create memorable experiences. Do
          you need a new l
        </p>
      </section>
    </section>
  );
}

export default AboutSection;
