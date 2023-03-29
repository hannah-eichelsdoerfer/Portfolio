import Link from "next/link";

const Maintenance = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <span className="text-9xl text-center text-gray-700 mb-4 animate-bounce duration-400">
        👷🏻‍♀️
      </span>

      <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
        Currently under maintenance
      </h1>
      <p>
        Giving this website a quick face-lift, but please reach out to me via{" "}
        <Link href="mailto:hannaheichelsdoerfer@gmail.com">Email</Link> or{" "}
        <Link href="https://www.linkedin.com/in/hannah-eich/">LinkedIn</Link>!
      </p>
    </div>
  );
};

export default Maintenance;
