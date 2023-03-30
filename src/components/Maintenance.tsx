import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Maintenance = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <span className="text-9xl text-center text-gray-700 mb-4 animate-bounce duration-400">
        👷🏻‍♀️
      </span>

      <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
        Currently under maintenance
      </h1>
      <RoughNotationGroup show={true}>
        <p>
          Giving this website a quick face-lift, but please reach out to me via{" "}
          <Link href="mailto:hannaheichelsdoerfer@gmail.com">
            <RoughNotation type="underline" color="#F8C81B" padding={[5, 10]}>
              Email
            </RoughNotation>
          </Link>{" "}
          or connect with me on{" "}
          <Link href="https://www.linkedin.com/in/hannah-eich/">
            <RoughNotation type="underline" color="#F8C81B" padding={[5, 10]}>
              LinkedIn
            </RoughNotation>
          </Link>
          !
        </p>
      </RoughNotationGroup>
    </div>
  );
};

export default Maintenance;
