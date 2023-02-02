import ProtectedRoutes from "@context/ProtectedRoutes";
import AuthServices from "@services/Auth";
import { FC, ReactElement } from "react";

const Quiz: FC = (): ReactElement => {
  const questionArray = [
    {
      id: 1,
      question: "Berapakah jarak dari bumi ke matahari?",
      answer: [
        {
          title: "A. 1 AU",
          isCorrect: true,
        },
        {
          title: "B. 2 AU",
          isCorrect: false,
        },
        {
          title: "C. 4 AU",
          isCorrect: false,
        },
        {
          title: "D. 6 AU",
          isCorrect: false,
        },
      ],
    },
  ];
  return (
    <ProtectedRoutes>
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r animate-gradient-x p-6 md:p-0">
        <section className="flex flex-col items-start md:p-6 justify-start md:w-[50%] md:h-[50%] h-full w-full rounded-lg bg-white">
          <div className="w-full border-2 rounded-lg p-2 border-gray-600 flex justify-between items-center">
            <h1 className="text-3xl w-auto font-sans text-gray-600 font-bold">
              Nomor {questionArray.length}
            </h1>
            <div className="flex gap-x-4 items-center w-auto">
              <h1 className="md:text-3xl text-xl w-auto text-right text-gray-600 font-bold">
                {AuthServices.getUserName()}
              </h1>
              <span
                onClick={() => AuthServices.removeUserName()}
                className="text-xl  truncate font-bold cursor-pointer border-2 text-white bg-gray-600 justify-center w-auto h-auto flex items-center p-2 rounded-lg"
              >
                Logout
              </span>
            </div>
          </div>
          {questionArray.map((item, index) => (
            <div
              key={index}
              className="flex py-6 justify-between w-full text-left"
            >
              <h1 className="text-2xl">{item.question}</h1>
              <div className="flex flex-col gap-y-3 items-center w-1/2">
                {item.answer.map((ans, i) => (
                  <span key={i} className="text-2xl">
                    {ans.title}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </ProtectedRoutes>
  );
};

export default Quiz;
